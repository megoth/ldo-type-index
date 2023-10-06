import { TypeIndex } from "./ldo/typeIndex.typings";
import { LdoBase } from "ldo/dist/util";
import type { Term } from "@rdfjs/types/data-model";
import { solid } from "./vocabularies";
export { typeIndexContext } from "./ldo/typeIndex.context";
export { typeIndexSchema } from "./ldo/typeIndex.schema";
export { TypeIndexShapeType, TypeRegistrationShapeType } from "./ldo/typeIndex.shapeTypes";
export type { TypeIndex, TypeRegistration } from "./ldo/typeIndex.typings";
export { solid };
export declare function update<T extends LdoBase>(subject: T, resourceUrl: string | null | undefined, fetch: (input: (RequestInfo | URL), init?: RequestInit) => Promise<Response>, updates?: (subject: T) => void): Promise<Response>;
type fetch = (input: (RequestInfo | URL), init?: RequestInit) => Promise<Response>;
export declare function remove<T extends LdoBase>(subject: T, resourceUrl: string | null | undefined, fetch: fetch): Promise<Response>;
export declare function deleteTypeRegistration(typeIndex: TypeIndex, term: Term, fetch: fetch): Promise<void[]>;
