import namespace from "@rdfjs/namespace";

export function getValue<T>(term: string): { "@id": T } {
    return {"@id": term} as { "@id": T };
}

export const solidNamespace = namespace("http://www.w3.org/ns/solid/terms#");
export const solid = {
    forClass: solidNamespace.forClass,
    TypeIndex: getValue<"TypeIndex">(solidNamespace.TypeIndex.value),
    TypeRegistration: getValue<"TypeRegistration">(solidNamespace.TypeRegistration.value)
}
