import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * storageContext: JSONLD Context for storage
 * =============================================================================
 */
export const storageContext: ContextDefinition = {
  type: {
    "@id": "@type",
    "@container": "@set",
  },
  BasicContainer: "http://www.w3.org/ns/ldp#BasicContainer",
  Container: "http://www.w3.org/ns/ldp#Container",
  contains: {
    "@id": "http://www.w3.org/ns/ldp#contains",
    "@type": "@id",
    "@container": "@set",
  },
  Resource: "http://www.w3.org/ns/ldp#Resource",
};
