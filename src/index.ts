import {TypeRegistrationShapeType} from "./ldo/typeIndex.shapeTypes";
import {TypeIndex} from "./ldo/typeIndex.typings";
import {createLdoDataset, getDataset, startTransaction, toSparqlUpdate} from "ldo";
import {LdoBase} from "ldo/dist/util";
import {namedNode} from "@rdfjs/data-model";
import type {Term} from "@rdfjs/types/data-model"
import {solid} from "./vocabularies";

export {typeIndexContext} from "./ldo/typeIndex.context";
export {typeIndexSchema} from "./ldo/typeIndex.schema";
export {TypeIndexShapeType, TypeRegistrationShapeType} from "./ldo/typeIndex.shapeTypes";
export type {TypeIndex, TypeRegistration} from "./ldo/typeIndex.typings";
export {solid};

export async function update<T extends LdoBase>(subject: T, resourceUrl: string | null | undefined, fetch: (input: (RequestInfo | URL), init?: RequestInit) => Promise<Response>, updates?: (subject: T) => void): Promise<Response> {
    if (!resourceUrl) {
        throw new Error("No resource URL given");
    }
    if (updates) {
        startTransaction(subject);
        updates(subject);
    }
    return fetch(resourceUrl, {
        method: "PATCH",
        body: await toSparqlUpdate(subject),
        headers: new Headers({
            "content-type": "application/sparql-update",
        })
    });
}

type fetch = (input: (RequestInfo | URL), init?: RequestInit) => Promise<Response>;

export async function remove<T extends LdoBase>(subject: T, resourceUrl: string | null | undefined, fetch: fetch): Promise<Response> {
    return update(subject, resourceUrl, fetch, () => {
        getDataset(subject).deleteMatches(namedNode(subject["@id"]));
    });
}

export async function deleteTypeRegistration(typeIndex: TypeIndex, term: Term, fetch: fetch) {
    const dataset = getDataset(typeIndex);
    const registrations = dataset
        .toArray()
        .filter(({predicate, object}) => predicate.equals(solid.forClass) && object.equals(term));
    return Promise.all(registrations.map(async ({subject}) => {
        const registration = createLdoDataset(dataset).usingType(TypeRegistrationShapeType).fromSubject(subject.value);
        await remove(registration, typeIndex["@id"], fetch);
    }));
}