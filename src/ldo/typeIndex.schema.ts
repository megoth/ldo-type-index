import { Schema } from "shexj";

/**
 * =============================================================================
 * typeIndexSchema: ShexJ Schema for typeIndex
 * =============================================================================
 */
export const typeIndexSchema: Schema = {
  type: "Schema",
  shapes: [
    {
      id: "https://icanhasweb.net/shapes/solid.ttl#TypeIndex",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["http://www.w3.org/ns/solid/terms#TypeIndex"],
              },
            },
            {
              type: "OneOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  valueExpr: {
                    type: "NodeConstraint",
                    values: ["http://www.w3.org/ns/solid/terms#ListedDocument"],
                  },
                },
                {
                  type: "TripleConstraint",
                  predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  valueExpr: {
                    type: "NodeConstraint",
                    values: [
                      "http://www.w3.org/ns/solid/terms#UnlistedDocument",
                    ],
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://icanhasweb.net/shapes/solid.ttl#TypeRegistration",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["http://www.w3.org/ns/solid/terms#TypeRegistration"],
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/ns/solid/terms#forClass",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/ns/solid/terms#instance",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
  ],
};
