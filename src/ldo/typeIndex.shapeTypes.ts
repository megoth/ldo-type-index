import { ShapeType } from "ldo";
import { typeIndexSchema } from "./typeIndex.schema";
import { typeIndexContext } from "./typeIndex.context";
import { TypeIndex, TypeRegistration } from "./typeIndex.typings";

/**
 * =============================================================================
 * LDO ShapeTypes typeIndex
 * =============================================================================
 */

/**
 * TypeIndex ShapeType
 */
export const TypeIndexShapeType: ShapeType<TypeIndex> = {
  schema: typeIndexSchema,
  shape: "https://icanhasweb.net/shapes/solid.ttl#TypeIndex",
  context: typeIndexContext,
};

/**
 * TypeRegistration ShapeType
 */
export const TypeRegistrationShapeType: ShapeType<TypeRegistration> = {
  schema: typeIndexSchema,
  shape: "https://icanhasweb.net/shapes/solid.ttl#TypeRegistration",
  context: typeIndexContext,
};
