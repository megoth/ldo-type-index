import { ShapeType } from "ldo";
import { storageSchema } from "./storage.schema";
import { storageContext } from "./storage.context";
import { Container, Resource } from "./storage.typings";

/**
 * =============================================================================
 * LDO ShapeTypes storage
 * =============================================================================
 */

/**
 * Container ShapeType
 */
export const ContainerShapeType: ShapeType<Container> = {
  schema: storageSchema,
  shape: "https://icanhasweb.net/shapes/solid.ttl#Container",
  context: storageContext,
};

/**
 * Resource ShapeType
 */
export const ResourceShapeType: ShapeType<Resource> = {
  schema: storageSchema,
  shape: "https://icanhasweb.net/shapes/solid.ttl#Resource",
  context: storageContext,
};
