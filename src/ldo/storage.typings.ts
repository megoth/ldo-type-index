import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for storage
 * =============================================================================
 */

/**
 * Container Type
 */
export interface Container {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type:
    | {
        "@id": "BasicContainer";
      }
    | {
        "@id": "Container";
      };
}

/**
 * Resource Type
 */
export interface Resource {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: {
    "@id": "Resource";
  };
}
