import namespace from "@rdfjs/namespace";

function getValue<T>({ value }: { value: string }): { "@id": T } {
    return {"@id": value } as { "@id": T };
}

export const solidNamespace = namespace("http://www.w3.org/ns/solid/terms#");
export const solid = {
    forClass: solidNamespace.forClass,
    TypeIndex: getValue<"TypeIndex">(solidNamespace.TypeIndex),
    TypeRegistration: getValue<"TypeRegistration">(solidNamespace.TypeRegistration)
}
