
  /**
   * @license
   * author: Arne Hassel
   * ldo-solid-profile.js v0.0.2
   * Released under the MIT license.
   */

this["ldo-solid-profile"] = (function () {
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

	return index;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbInNyYy9sZG8vcHJvZmlsZS5jb250ZXh0LnRzIiwic3JjL2xkby9wcm9maWxlLnNjaGVtYS50cyIsInNyYy9sZG8vcHJvZmlsZS5zaGFwZVR5cGVzLnRzIiwic3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wcm9maWxlQ29udGV4dCA9IHZvaWQgMDtcbi8qKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIHByb2ZpbGVDb250ZXh0OiBKU09OTEQgQ29udGV4dCBmb3IgcHJvZmlsZVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuZXhwb3J0cy5wcm9maWxlQ29udGV4dCA9IHtcbiAgICB0eXBlOiB7XG4gICAgICAgIFwiQGlkXCI6IFwiQHR5cGVcIixcbiAgICB9LFxuICAgIFBlcnNvbjogXCJodHRwOi8vc2NoZW1hLm9yZy9QZXJzb25cIixcbiAgICBQZXJzb24yOiBcImh0dHA6Ly94bWxucy5jb20vZm9hZi8wLjEvUGVyc29uXCIsXG4gICAgZm46IHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwOi8vd3d3LnczLm9yZy8yMDA2L3ZjYXJkL25zI2ZuXCIsXG4gICAgICAgIFwiQHR5cGVcIjogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYSNzdHJpbmdcIixcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwOi8veG1sbnMuY29tL2ZvYWYvMC4xL25hbWVcIixcbiAgICAgICAgXCJAdHlwZVwiOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hI3N0cmluZ1wiLFxuICAgIH0sXG4gICAgaW5ib3g6IHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwOi8vd3d3LnczLm9yZy9ucy9sZHAjaW5ib3hcIixcbiAgICAgICAgXCJAdHlwZVwiOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDEvcmRmLXNjaGVtYSNSZXNvdXJjZVwiLFxuICAgIH0sXG4gICAgcHJlZmVyZW5jZXNGaWxlOiB7XG4gICAgICAgIFwiQGlkXCI6IFwiaHR0cDovL3d3dy53My5vcmcvbnMvcGltL3NwYWNlI3ByZWZlcmVuY2VzRmlsZVwiLFxuICAgICAgICBcIkB0eXBlXCI6IFwiaHR0cDovL3d3dy53My5vcmcvbnMvcGltL3NwYWNlI0NvbmZpZ3VyYXRpb25GaWxlXCIsXG4gICAgfSxcbiAgICBzdG9yYWdlOiB7XG4gICAgICAgIFwiQGlkXCI6IFwiaHR0cDovL3d3dy53My5vcmcvbnMvcGltL3NwYWNlI3N0b3JhZ2VcIixcbiAgICAgICAgXCJAdHlwZVwiOiBcImh0dHBzOi8vbGRvLmpzLm9yZy9zaGFwZXMvc29saWQtcHJvZmlsZS50dGwjU3RvcmFnZVwiLFxuICAgIH0sXG4gICAgYWNjb3VudDoge1xuICAgICAgICBcIkBpZFwiOiBcImh0dHA6Ly93d3cudzMub3JnL25zL3NvbGlkL3Rlcm1zI2FjY291bnRcIixcbiAgICAgICAgXCJAdHlwZVwiOiBcImh0dHA6Ly93d3cudzMub3JnL25zL3NvbGlkL3Rlcm1zI0FjY291bnRcIixcbiAgICB9LFxuICAgIG9pZGNJc3N1ZXI6IHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwOi8vd3d3LnczLm9yZy9ucy9zb2xpZC90ZXJtcyNvaWRjSXNzdWVyXCIsXG4gICAgICAgIFwiQHR5cGVcIjogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzAxL3JkZi1zY2hlbWEjUmVzb3VyY2VcIixcbiAgICB9LFxuICAgIHByaXZhdGVUeXBlSW5kZXg6IHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwOi8vd3d3LnczLm9yZy9ucy9zb2xpZC90ZXJtcyNwcml2YXRlVHlwZUluZGV4XCIsXG4gICAgICAgIFwiQHR5cGVcIjogXCJodHRwOi8vd3d3LnczLm9yZy9ucy9zb2xpZC90ZXJtcyNVbmxpc3RlZERvY3VtZW50XCIsXG4gICAgfSxcbiAgICBwdWJsaWNUeXBlSW5kZXg6IHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwOi8vd3d3LnczLm9yZy9ucy9zb2xpZC90ZXJtcyNwdWJsaWNUeXBlSW5kZXhcIixcbiAgICAgICAgXCJAdHlwZVwiOiBcImh0dHA6Ly93d3cudzMub3JnL25zL3NvbGlkL3Rlcm1zI0xpc3RlZERvY3VtZW50XCIsXG4gICAgfSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm9maWxlLmNvbnRleHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnByb2ZpbGVTY2hlbWEgPSB2b2lkIDA7XG4vKipcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBwcm9maWxlU2NoZW1hOiBTaGV4SiBTY2hlbWEgZm9yIHByb2ZpbGVcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cbmV4cG9ydHMucHJvZmlsZVNjaGVtYSA9IHtcbiAgICB0eXBlOiBcIlNjaGVtYVwiLFxuICAgIHNoYXBlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCJodHRwczovL2xkby5qcy5vcmcvc2hhcGVzL3NvbGlkLXByb2ZpbGUudHRsI1NvbGlkUHJvZmlsZVwiLFxuICAgICAgICAgICAgdHlwZTogXCJTaGFwZURlY2xcIixcbiAgICAgICAgICAgIHNoYXBlRXhwcjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiU2hhcGVcIixcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRWFjaE9mXCIsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJUcmlwbGVDb25zdHJhaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljYXRlOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyN0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVFeHByOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTm9kZUNvbnN0cmFpbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHA6Ly9zY2hlbWEub3JnL1BlcnNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwOi8veG1sbnMuY29tL2ZvYWYvMC4xL1BlcnNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVHJpcGxlQ29uc3RyYWludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY2F0ZTogXCJodHRwOi8vd3d3LnczLm9yZy8yMDA2L3ZjYXJkL25zI2ZuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVFeHByOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTm9kZUNvbnN0cmFpbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXR5cGU6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEjc3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJUcmlwbGVDb25zdHJhaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljYXRlOiBcImh0dHA6Ly94bWxucy5jb20vZm9hZi8wLjEvbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRXhwcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIk5vZGVDb25zdHJhaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGF0eXBlOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hI3N0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVHJpcGxlQ29uc3RyYWludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY2F0ZTogXCJodHRwOi8vd3d3LnczLm9yZy9ucy9sZHAjaW5ib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUV4cHI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJOb2RlQ29uc3RyYWludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhdHlwZTogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzAxL3JkZi1zY2hlbWEjUmVzb3VyY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlRyaXBsZUNvbnN0cmFpbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWNhdGU6IFwiaHR0cDovL3d3dy53My5vcmcvbnMvcGltL3NwYWNlI3ByZWZlcmVuY2VzRmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRXhwcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIk5vZGVDb25zdHJhaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGF0eXBlOiBcImh0dHA6Ly93d3cudzMub3JnL25zL3BpbS9zcGFjZSNDb25maWd1cmF0aW9uRmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVHJpcGxlQ29uc3RyYWludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY2F0ZTogXCJodHRwOi8vd3d3LnczLm9yZy9ucy9waW0vc3BhY2Ujc3RvcmFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRXhwcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIk5vZGVDb25zdHJhaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGF0eXBlOiBcImh0dHBzOi8vbGRvLmpzLm9yZy9zaGFwZXMvc29saWQtcHJvZmlsZS50dGwjU3RvcmFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVHJpcGxlQ29uc3RyYWludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY2F0ZTogXCJodHRwOi8vd3d3LnczLm9yZy9ucy9zb2xpZC90ZXJtcyNhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVFeHByOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTm9kZUNvbnN0cmFpbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXR5cGU6IFwiaHR0cDovL3d3dy53My5vcmcvbnMvc29saWQvdGVybXMjQWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVHJpcGxlQ29uc3RyYWludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY2F0ZTogXCJodHRwOi8vd3d3LnczLm9yZy9ucy9zb2xpZC90ZXJtcyNvaWRjSXNzdWVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVFeHByOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTm9kZUNvbnN0cmFpbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXR5cGU6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC8wMS9yZGYtc2NoZW1hI1Jlc291cmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJUcmlwbGVDb25zdHJhaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljYXRlOiBcImh0dHA6Ly93d3cudzMub3JnL25zL3NvbGlkL3Rlcm1zI3ByaXZhdGVUeXBlSW5kZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUV4cHI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJOb2RlQ29uc3RyYWludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhdHlwZTogXCJodHRwOi8vd3d3LnczLm9yZy9ucy9zb2xpZC90ZXJtcyNVbmxpc3RlZERvY3VtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJUcmlwbGVDb25zdHJhaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljYXRlOiBcImh0dHA6Ly93d3cudzMub3JnL25zL3NvbGlkL3Rlcm1zI3B1YmxpY1R5cGVJbmRleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRXhwcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIk5vZGVDb25zdHJhaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGF0eXBlOiBcImh0dHA6Ly93d3cudzMub3JnL25zL3NvbGlkL3Rlcm1zI0xpc3RlZERvY3VtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHRyYTogW1wiaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zI3R5cGVcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvZmlsZS5zY2hlbWEuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNvbGlkUHJvZmlsZVNoYXBlVHlwZSA9IHZvaWQgMDtcbnZhciBwcm9maWxlX3NjaGVtYV8xID0gcmVxdWlyZShcIi4vcHJvZmlsZS5zY2hlbWFcIik7XG52YXIgcHJvZmlsZV9jb250ZXh0XzEgPSByZXF1aXJlKFwiLi9wcm9maWxlLmNvbnRleHRcIik7XG4vKipcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBMRE8gU2hhcGVUeXBlcyBwcm9maWxlXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG4vKipcbiAqIFNvbGlkUHJvZmlsZSBTaGFwZVR5cGVcbiAqL1xuZXhwb3J0cy5Tb2xpZFByb2ZpbGVTaGFwZVR5cGUgPSB7XG4gICAgc2NoZW1hOiBwcm9maWxlX3NjaGVtYV8xLnByb2ZpbGVTY2hlbWEsXG4gICAgc2hhcGU6IFwiaHR0cHM6Ly9sZG8uanMub3JnL3NoYXBlcy9zb2xpZC1wcm9maWxlLnR0bCNTb2xpZFByb2ZpbGVcIixcbiAgICBjb250ZXh0OiBwcm9maWxlX2NvbnRleHRfMS5wcm9maWxlQ29udGV4dCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm9maWxlLnNoYXBlVHlwZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldE5hbWUgPSBleHBvcnRzLlNvbGlkUHJvZmlsZVNoYXBlVHlwZSA9IGV4cG9ydHMucHJvZmlsZVNjaGVtYSA9IGV4cG9ydHMucHJvZmlsZUNvbnRleHQgPSB2b2lkIDA7XG52YXIgcHJvZmlsZV9jb250ZXh0XzEgPSByZXF1aXJlKFwiQC9sZG8vcHJvZmlsZS5jb250ZXh0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicHJvZmlsZUNvbnRleHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHByb2ZpbGVfY29udGV4dF8xLnByb2ZpbGVDb250ZXh0OyB9IH0pO1xudmFyIHByb2ZpbGVfc2NoZW1hXzEgPSByZXF1aXJlKFwiQC9sZG8vcHJvZmlsZS5zY2hlbWFcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwcm9maWxlU2NoZW1hXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwcm9maWxlX3NjaGVtYV8xLnByb2ZpbGVTY2hlbWE7IH0gfSk7XG52YXIgcHJvZmlsZV9zaGFwZVR5cGVzXzEgPSByZXF1aXJlKFwiQC9sZG8vcHJvZmlsZS5zaGFwZVR5cGVzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU29saWRQcm9maWxlU2hhcGVUeXBlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwcm9maWxlX3NoYXBlVHlwZXNfMS5Tb2xpZFByb2ZpbGVTaGFwZVR5cGU7IH0gfSk7XG5mdW5jdGlvbiBnZXROYW1lKHByb2ZpbGUpIHtcbiAgICByZXR1cm4gcHJvZmlsZS5uYW1lIHx8IHByb2ZpbGUuZm4gfHwgXCJbVW5rbm93biBuYW1lXVwiO1xufVxuZXhwb3J0cy5nZXROYW1lID0gZ2V0TmFtZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6WyJyZXF1aXJlJCQwIiwicmVxdWlyZSQkMSIsInJlcXVpcmUkJDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQSxNQUFNLENBQUMsY0FBYyxDQUFDLGVBQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztDQUN4QyxlQUFBLENBQUEsY0FBQSxHQUFHLEtBQUssRUFBRTtDQUNoQztDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0EsZUFBQSxDQUFBLGNBQXNCLEdBQUc7Q0FDekIsSUFBSSxJQUFJLEVBQUU7Q0FDVixRQUFRLEtBQUssRUFBRSxPQUFPO0NBQ3RCLEtBQUs7Q0FDTCxJQUFJLE1BQU0sRUFBRSwwQkFBMEI7Q0FDdEMsSUFBSSxPQUFPLEVBQUUsa0NBQWtDO0NBQy9DLElBQUksRUFBRSxFQUFFO0NBQ1IsUUFBUSxLQUFLLEVBQUUsb0NBQW9DO0NBQ25ELFFBQVEsT0FBTyxFQUFFLHlDQUF5QztDQUMxRCxLQUFLO0NBQ0wsSUFBSSxJQUFJLEVBQUU7Q0FDVixRQUFRLEtBQUssRUFBRSxnQ0FBZ0M7Q0FDL0MsUUFBUSxPQUFPLEVBQUUseUNBQXlDO0NBQzFELEtBQUs7Q0FDTCxJQUFJLEtBQUssRUFBRTtDQUNYLFFBQVEsS0FBSyxFQUFFLGdDQUFnQztDQUMvQyxRQUFRLE9BQU8sRUFBRSwrQ0FBK0M7Q0FDaEUsS0FBSztDQUNMLElBQUksZUFBZSxFQUFFO0NBQ3JCLFFBQVEsS0FBSyxFQUFFLGdEQUFnRDtDQUMvRCxRQUFRLE9BQU8sRUFBRSxrREFBa0Q7Q0FDbkUsS0FBSztDQUNMLElBQUksT0FBTyxFQUFFO0NBQ2IsUUFBUSxLQUFLLEVBQUUsd0NBQXdDO0NBQ3ZE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
