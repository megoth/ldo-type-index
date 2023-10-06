
  /**
   * @license
   * author: Arne Hassel
   * ldo-solid-profile.js v0.0.3
   * Released under the MIT license.
   */

'use strict';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var src = {};

var profile_context = {};

Object.defineProperty(profile_context, "__esModule", { value: true });
profile_context.profileContext = void 0;
/**
 * =============================================================================
 * profileContext: JSONLD Context for profile
 * =============================================================================
 */
profile_context.profileContext = {
    type: {
        "@id": "@type",
    },
    Person: "http://schema.org/Person",
    Person2: "http://xmlns.com/foaf/0.1/Person",
    fn: {
        "@id": "http://www.w3.org/2006/vcard/ns#fn",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
    },
    name: {
        "@id": "http://xmlns.com/foaf/0.1/name",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
    },
    inbox: {
        "@id": "http://www.w3.org/ns/ldp#inbox",
        "@type": "http://www.w3.org/2000/01/rdf-schema#Resource",
    },
    preferencesFile: {
        "@id": "http://www.w3.org/ns/pim/space#preferencesFile",
        "@type": "http://www.w3.org/ns/pim/space#ConfigurationFile",
    },
    storage: {
        "@id": "http://www.w3.org/ns/pim/space#storage",
        "@type": "https://ldo.js.org/shapes/solid-profile.ttl#Storage",
    },
    account: {
        "@id": "http://www.w3.org/ns/solid/terms#account",
        "@type": "http://www.w3.org/ns/solid/terms#Account",
    },
    oidcIssuer: {
        "@id": "http://www.w3.org/ns/solid/terms#oidcIssuer",
        "@type": "http://www.w3.org/2000/01/rdf-schema#Resource",
    },
    privateTypeIndex: {
        "@id": "http://www.w3.org/ns/solid/terms#privateTypeIndex",
        "@type": "http://www.w3.org/ns/solid/terms#UnlistedDocument",
    },
    publicTypeIndex: {
        "@id": "http://www.w3.org/ns/solid/terms#publicTypeIndex",
        "@type": "http://www.w3.org/ns/solid/terms#ListedDocument",
    },
};

var profile_schema = {};

Object.defineProperty(profile_schema, "__esModule", { value: true });
profile_schema.profileSchema = void 0;
/**
 * =============================================================================
 * profileSchema: ShexJ Schema for profile
 * =============================================================================
 */
profile_schema.profileSchema = {
    type: "Schema",
    shapes: [
        {
            id: "https://ldo.js.org/shapes/solid-profile.ttl#SolidProfile",
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
                                values: [
                                    "http://schema.org/Person",
                                    "http://xmlns.com/foaf/0.1/Person",
                                ],
                            },
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/2006/vcard/ns#fn",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string",
                            },
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://xmlns.com/foaf/0.1/name",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2001/XMLSchema#string",
                            },
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/ns/ldp#inbox",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2000/01/rdf-schema#Resource",
                            },
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/ns/pim/space#preferencesFile",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/ns/pim/space#ConfigurationFile",
                            },
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/ns/pim/space#storage",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "https://ldo.js.org/shapes/solid-profile.ttl#Storage",
                            },
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/ns/solid/terms#account",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/ns/solid/terms#Account",
                            },
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/ns/solid/terms#oidcIssuer",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/2000/01/rdf-schema#Resource",
                            },
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/ns/solid/terms#privateTypeIndex",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/ns/solid/terms#UnlistedDocument",
                            },
                        },
                        {
                            type: "TripleConstraint",
                            predicate: "http://www.w3.org/ns/solid/terms#publicTypeIndex",
                            valueExpr: {
                                type: "NodeConstraint",
                                datatype: "http://www.w3.org/ns/solid/terms#ListedDocument",
                            },
                        },
                    ],
                },
                extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
            },
        },
    ],
};

var profile_shapeTypes = {};

Object.defineProperty(profile_shapeTypes, "__esModule", { value: true });
profile_shapeTypes.SolidProfileShapeType = void 0;
var profile_schema_1 = profile_schema;
var profile_context_1 = profile_context;
/**
 * =============================================================================
 * LDO ShapeTypes profile
 * =============================================================================
 */
/**
 * SolidProfile ShapeType
 */
profile_shapeTypes.SolidProfileShapeType = {
    schema: profile_schema_1.profileSchema,
    shape: "https://ldo.js.org/shapes/solid-profile.ttl#SolidProfile",
    context: profile_context_1.profileContext,
};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getName = exports.SolidProfileShapeType = exports.profileSchema = exports.profileContext = void 0;
	var profile_context_1 = profile_context;
	Object.defineProperty(exports, "profileContext", { enumerable: true, get: function () { return profile_context_1.profileContext; } });
	var profile_schema_1 = profile_schema;
	Object.defineProperty(exports, "profileSchema", { enumerable: true, get: function () { return profile_schema_1.profileSchema; } });
	var profile_shapeTypes_1 = profile_shapeTypes;
	Object.defineProperty(exports, "SolidProfileShapeType", { enumerable: true, get: function () { return profile_shapeTypes_1.SolidProfileShapeType; } });
	function getName(profile) {
	    return profile.name || profile.fn || "[Unknown name]";
	}
	exports.getName = getName;
	
} (src));

var index = /*@__PURE__*/getDefaultExportFromCjs(src);

module.exports = index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbInNyYy9sZG8vcHJvZmlsZS5jb250ZXh0LnRzIiwic3JjL2xkby9wcm9maWxlLnNjaGVtYS50cyIsInNyYy9sZG8vcHJvZmlsZS5zaGFwZVR5cGVzLnRzIiwic3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wcm9maWxlQ29udGV4dCA9IHZvaWQgMDtcbi8qKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIHByb2ZpbGVDb250ZXh0OiBKU09OTEQgQ29udGV4dCBmb3IgcHJvZmlsZVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuZXhwb3J0cy5wcm9maWxlQ29udGV4dCA9IHtcbiAgICB0eXBlOiB7XG4gICAgICAgIFwiQGlkXCI6IFwiQHR5cGVcIixcbiAgICB9LFxuICAgIFBlcnNvbjogXCJodHRwOi8vc2NoZW1hLm9yZy9QZXJzb25cIixcbiAgICBQZXJzb24yOiBcImh0dHA6Ly94bWxucy5jb20vZm9hZi8wLjEvUGVyc29uXCIsXG4gICAgZm46IHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwOi8vd3d3LnczLm9yZy8yMDA2L3ZjYXJkL25zI2ZuXCIsXG4gICAgICAgIFwiQHR5cGVcIjogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYSNzdHJpbmdcIixcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwOi8veG1sbnMuY29tL2ZvYWYvMC4xL25hbWVcIixcbiAgICAgICAgXCJAdHlwZVwiOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hI3N0cmluZ1wiLFxuICAgIH0sXG4gICAgaW5ib3g6IHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwOi8vd3d3LnczLm9yZy9ucy9sZHAjaW5ib3hcIixcbiAgICAgICAgXCJAdHlwZVwiOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDEvcmRmLXNjaGVtYSNSZXNvdXJjZVwiLFxuICAgIH0sXG4gICAgcHJlZmVyZW5jZXNGaWxlOiB7XG4gICAgICAgIFwiQGlkXCI6IFwiaHR0cDovL3d3dy53My5vcmcvbnMvcGltL3NwYWNlI3ByZWZlcmVuY2VzRmlsZVwiLFxuICAgICAgICBcIkB0eXBlXCI6IFwiaHR0cDovL3d3dy53My5vcmcvbnMvcGltL3NwYWNlI0NvbmZpZ3VyYXRpb25GaWxlXCIsXG4gICAgfSxcbiAgICBzdG9yYWdlOiB7XG4gICAgICAgIFwiQGlkXCI6IFwiaHR0cDovL3d3dy53My5vcmcvbnMvcGltL3NwYWNlI3N0b3JhZ2VcIixcbiAgICAgICAgXCJAdHlwZVwiOiBcImh0dHBzOi8vbGRvLmpzLm9yZy9zaGFwZXMvc29saWQtcHJvZmlsZS50dGwjU3RvcmFnZVwiLFxuICAgIH0sXG4gICAgYWNjb3VudDoge1xuICAgICAgICBcIkBpZFwiOiBcImh0dHA6Ly93d3cudzMub3JnL25zL3NvbGlkL3Rlcm1zI2FjY291bnRcIixcbiAgICAgICAgXCJAdHlwZVwiOiBcImh0dHA6Ly93d3cudzMub3JnL25zL3NvbGlkL3Rlcm1zI0FjY291bnRcIixcbiAgICB9LFxuICAgIG9pZGNJc3N1ZXI6IHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwOi8vd3d3LnczLm9yZy9ucy9zb2xpZC90ZXJtcyNvaWRjSXNzdWVyXCIsXG4gICAgICAgIFwiQHR5cGVcIjogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzAxL3JkZi1zY2hlbWEjUmVzb3VyY2VcIixcbiAgICB9LFxuICAgIHByaXZhdGVUeXBlSW5kZXg6IHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwOi8vd3d3LnczLm9yZy9ucy9zb2xpZC90ZXJtcyNwcml2YXRlVHlwZUluZGV4XCIsXG4gICAgICAgIFwiQHR5cGVcIjogXCJodHRwOi8vd3d3LnczLm9yZy9ucy9zb2xpZC90ZXJtcyNVbmxpc3RlZERvY3VtZW50XCIsXG4gICAgfSxcbiAgICBwdWJsaWNUeXBlSW5kZXg6IHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwOi8vd3d3LnczLm9yZy9ucy9zb2xpZC90ZXJtcyNwdWJsaWNUeXBlSW5kZXhcIixcbiAgICAgICAgXCJAdHlwZVwiOiBcImh0dHA6Ly93d3cudzMub3JnL25zL3NvbGlkL3Rlcm1zI0xpc3RlZERvY3VtZW50XCIsXG4gICAgfSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm9maWxlLmNvbnRleHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnByb2ZpbGVTY2hlbWEgPSB2b2lkIDA7XG4vKipcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBwcm9maWxlU2NoZW1hOiBTaGV4SiBTY2hlbWEgZm9yIHByb2ZpbGVcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cbmV4cG9ydHMucHJvZmlsZVNjaGVtYSA9IHtcbiAgICB0eXBlOiBcIlNjaGVtYVwiLFxuICAgIHNoYXBlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCJodHRwczovL2xkby5qcy5vcmcvc2hhcGVzL3NvbGlkLXByb2ZpbGUudHRsI1NvbGlkUHJvZmlsZVwiLFxuICAgICAgICAgICAgdHlwZTogXCJTaGFwZURlY2xcIixcbiAgICAgICAgICAgIHNoYXBlRXhwcjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiU2hhcGVcIixcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRWFjaE9mXCIsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJUcmlwbGVDb25zdHJhaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljYXRlOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyN0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVFeHByOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTm9kZUNvbnN0cmFpbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHA6Ly9zY2hlbWEub3JnL1BlcnNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwOi8veG1sbnMuY29tL2ZvYWYvMC4xL1BlcnNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVHJpcGxlQ29uc3RyYWludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY2F0ZTogXCJodHRwOi8vd3d3LnczLm9yZy8yMDA2L3ZjYXJkL25zI2ZuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVFeHByOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTm9kZUNvbnN0cmFpbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXR5cGU6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEjc3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJUcmlwbGVDb25zdHJhaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljYXRlOiBcImh0dHA6Ly94bWxucy5jb20vZm9hZi8wLjEvbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRXhwcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIk5vZGVDb25zdHJhaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGF0eXBlOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hI3N0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVHJpcGxlQ29uc3RyYWludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY2F0ZTogXCJodHRwOi8vd3d3LnczLm9yZy9ucy9sZHAjaW5ib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUV4cHI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJOb2RlQ29uc3RyYWludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhdHlwZTogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzAxL3JkZi1zY2hlbWEjUmVzb3VyY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlRyaXBsZUNvbnN0cmFpbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWNhdGU6IFwiaHR0cDovL3d3dy53My5vcmcvbnMvcGltL3NwYWNlI3ByZWZlcmVuY2VzRmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRXhwcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIk5vZGVDb25zdHJhaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGF0eXBlOiBcImh0dHA6Ly93d3cudzMub3JnL25zL3BpbS9zcGFjZSNDb25maWd1cmF0aW9uRmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVHJpcGxlQ29uc3RyYWludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY2F0ZTogXCJodHRwOi8vd3d3LnczLm9yZy9ucy9waW0vc3BhY2Ujc3RvcmFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRXhwcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIk5vZGVDb25zdHJhaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGF0eXBlOiBcImh0dHBzOi8vbGRvLmpzLm9yZy9zaGFwZXMvc29saWQtcHJvZmlsZS50dGwjU3RvcmFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVHJpcGxlQ29uc3RyYWludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY2F0ZTogXCJodHRwOi8vd3d3LnczLm9yZy9ucy9zb2xpZC90ZXJtcyNhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVFeHByOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTm9kZUNvbnN0cmFpbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXR5cGU6IFwiaHR0cDovL3d3dy53My5vcmcvbnMvc29saWQvdGVybXMjQWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVHJpcGxlQ29uc3RyYWludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY2F0ZTogXCJodHRwOi8vd3d3LnczLm9yZy9ucy9zb2xpZC90ZXJtcyNvaWRjSXNzdWVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVFeHByOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTm9kZUNvbnN0cmFpbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXR5cGU6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC8wMS9yZGYtc2NoZW1hI1Jlc291cmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJUcmlwbGVDb25zdHJhaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljYXRlOiBcImh0dHA6Ly93d3cudzMub3JnL25zL3NvbGlkL3Rlcm1zI3ByaXZhdGVUeXBlSW5kZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUV4cHI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJOb2RlQ29uc3RyYWludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhdHlwZTogXCJodHRwOi8vd3d3LnczLm9yZy9ucy9zb2xpZC90ZXJtcyNVbmxpc3RlZERvY3VtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJUcmlwbGVDb25zdHJhaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljYXRlOiBcImh0dHA6Ly93d3cudzMub3JnL25zL3NvbGlkL3Rlcm1zI3B1YmxpY1R5cGVJbmRleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRXhwcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIk5vZGVDb25zdHJhaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGF0eXBlOiBcImh0dHA6Ly93d3cudzMub3JnL25zL3NvbGlkL3Rlcm1zI0xpc3RlZERvY3VtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHRyYTogW1wiaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zI3R5cGVcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvZmlsZS5zY2hlbWEuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNvbGlkUHJvZmlsZVNoYXBlVHlwZSA9IHZvaWQgMDtcbnZhciBwcm9maWxlX3NjaGVtYV8xID0gcmVxdWlyZShcIi4vcHJvZmlsZS5zY2hlbWFcIik7XG52YXIgcHJvZmlsZV9jb250ZXh0XzEgPSByZXF1aXJlKFwiLi9wcm9maWxlLmNvbnRleHRcIik7XG4vKipcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBMRE8gU2hhcGVUeXBlcyBwcm9maWxlXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG4vKipcbiAqIFNvbGlkUHJvZmlsZSBTaGFwZVR5cGVcbiAqL1xuZXhwb3J0cy5Tb2xpZFByb2ZpbGVTaGFwZVR5cGUgPSB7XG4gICAgc2NoZW1hOiBwcm9maWxlX3NjaGVtYV8xLnByb2ZpbGVTY2hlbWEsXG4gICAgc2hhcGU6IFwiaHR0cHM6Ly9sZG8uanMub3JnL3NoYXBlcy9zb2xpZC1wcm9maWxlLnR0bCNTb2xpZFByb2ZpbGVcIixcbiAgICBjb250ZXh0OiBwcm9maWxlX2NvbnRleHRfMS5wcm9maWxlQ29udGV4dCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm9maWxlLnNoYXBlVHlwZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldE5hbWUgPSBleHBvcnRzLlNvbGlkUHJvZmlsZVNoYXBlVHlwZSA9IGV4cG9ydHMucHJvZmlsZVNjaGVtYSA9IGV4cG9ydHMucHJvZmlsZUNvbnRleHQgPSB2b2lkIDA7XG52YXIgcHJvZmlsZV9jb250ZXh0XzEgPSByZXF1aXJlKFwiQC9sZG8vcHJvZmlsZS5jb250ZXh0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicHJvZmlsZUNvbnRleHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHByb2ZpbGVfY29udGV4dF8xLnByb2ZpbGVDb250ZXh0OyB9IH0pO1xudmFyIHByb2ZpbGVfc2NoZW1hXzEgPSByZXF1aXJlKFwiQC9sZG8vcHJvZmlsZS5zY2hlbWFcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwcm9maWxlU2NoZW1hXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwcm9maWxlX3NjaGVtYV8xLnByb2ZpbGVTY2hlbWE7IH0gfSk7XG52YXIgcHJvZmlsZV9zaGFwZVR5cGVzXzEgPSByZXF1aXJlKFwiQC9sZG8vcHJvZmlsZS5zaGFwZVR5cGVzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU29saWRQcm9maWxlU2hhcGVUeXBlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwcm9maWxlX3NoYXBlVHlwZXNfMS5Tb2xpZFByb2ZpbGVTaGFwZVR5cGU7IH0gfSk7XG5mdW5jdGlvbiBnZXROYW1lKHByb2ZpbGUpIHtcbiAgICByZXR1cm4gcHJvZmlsZS5uYW1lIHx8IHByb2ZpbGUuZm4gfHwgXCJbVW5rbm93biBuYW1lXVwiO1xufVxuZXhwb3J0cy5nZXROYW1lID0gZ2V0TmFtZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6WyJyZXF1aXJlJCQwIiwicmVxdWlyZSQkMSIsInJlcXVpcmUkJDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE1BQU0sQ0FBQyxjQUFjLENBQUMsZUFBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hDLGVBQUEsQ0FBQSxjQUFBLEdBQUcsS0FBSyxFQUFFO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFBLENBQUEsY0FBc0IsR0FBRztBQUN6QixJQUFJLElBQUksRUFBRTtBQUNWLFFBQVEsS0FBSyxFQUFFLE9BQU87QUFDdEIsS0FBSztBQUNMLElBQUksTUFBTSxFQUFFLDBCQUEwQjtBQUN0QyxJQUFJLE9BQU8sRUFBRSxrQ0FBa0M7QUFDL0MsSUFBSSxFQUFFLEVBQUU7QUFDUixRQUFRLEtBQUssRUFBRSxvQ0FBb0M7QUFDbkQsUUFBUSxPQUFPLEVBQUUseUNBQXlDO0FBQzFELEtBQUs7QUFDTCxJQUFJLElBQUksRUFBRTtBQUNWLFFBQVEsS0FBSyxFQUFFLGdDQUFnQztBQUMvQyxRQUFRLE9BQU8sRUFBRSx5Q0FBeUM7QUFDMUQsS0FBSztBQUNMLElBQUksS0FBSyxFQUFFO0FBQ1gsUUFBUSxLQUFLLEVBQUUsZ0NBQWdDO0FBQy9DLFFBQVEsT0FBTyxFQUFFLCtDQUErQztBQUNoRSxLQUFLO0FBQ0wsSUFBSSxlQUFlLEVBQUU7QUFDckIsUUFBUSxLQUFLLEVBQUUsZ0RBQWdEO0FBQy9ELFFBQVEsT0FBTyxFQUFFLGtEQUFrRDtBQUNuRSxLQUFLO0FBQ0wsSUFBSSxPQUFPLEVBQUU7QUFDYixRQUFRLEtBQUssRUFBRSx3Q0FBd0M7QUFDdkQs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
