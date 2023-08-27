"use strict";
exports.__esModule = true;
exports.schema = exports.KIND = void 0;
exports.KIND = "X500ClientConfig";
exports.schema = {
    // $id: "",
    $schema: "http://json-schema.org/draft-07/schema#",
    title: exports.KIND,
    description: "Configuration file for configuring X.500 directory tools.",
    type: "object",
    required: [
        "apiVersion",
        "kind",
        "metadata",
        "dsas",
        "credentials",
        "contexts",
    ],
    additionalProperties: true,
    properties: {
        apiVersion: {
            type: "string"
        },
        kind: {
            type: "string",
            "const": exports.KIND
        },
        metadata: {
            $ref: "#/definitions/Metadata"
        },
        "current-context": {
            type: "string"
        },
        "preference-profiles": {
            type: "array",
            items: {
                type: "object",
                additionalProperties: true
            }
        },
        dsas: {
            type: "array",
            items: {
                $ref: "#/definitions/ConfigDSA"
            }
        },
        credentials: {
            type: "array",
            items: {
                $ref: "#/definitions/ConfigCredential"
            }
        },
        contexts: {
            type: "array",
            items: {
                $ref: "#/definitions/ConfigContext"
            }
        }
    },
    definitions: {
        DistinguishedName: {
            type: "string",
            minLength: 0
        },
        Metadata: {
            type: "object",
            required: [
                "name",
            ],
            properties: {
                name: {
                    type: "string",
                    minLength: 1
                },
                namespace: {
                    type: "string",
                    minLength: 1
                },
                labels: {
                    type: "object",
                    additionalProperties: {
                        type: "string"
                    }
                },
                annotations: {
                    type: "object",
                    additionalProperties: {
                        type: "string"
                    }
                }
            },
            additionalProperties: true
        },
        ConfigAccessPoint: {
            type: "object",
            required: [
                "urls",
            ],
            properties: {
                urls: {
                    type: "array",
                    items: {
                        type: "string",
                        minLength: 3
                    },
                    minItems: 1
                },
                category: {
                    type: "string",
                    "enum": [
                        "master",
                        "shadow",
                        "writeableCopy",
                    ],
                    "default": "master"
                },
                "disable-start-tls": {
                    type: "boolean",
                    "default": false
                },
                "insecure-skip-tls-verify": {
                    type: "boolean",
                    "default": false
                },
                "certificate-authority": {
                    type: "string",
                    minLength: 1
                }
            },
            additionalProperties: true
        },
        ConfigDSA: {
            type: "object",
            required: [
                "name",
                "accessPoints",
            ],
            properties: {
                name: {
                    type: "string",
                    minLength: 1
                },
                aeTitle: {
                    type: "string"
                },
                accessPoints: {
                    type: "array",
                    items: {
                        $ref: "#/definitions/ConfigAccessPoint"
                    },
                    minItems: 1
                },
                tlsCertChain: {
                    type: "string",
                    minLength: 1
                },
                tlsKey: {
                    type: "string",
                    minLength: 1
                },
                ca: {
                    type: "string",
                    minLength: 1
                },
                crl: {
                    type: "string",
                    minLength: 1
                }
            },
            additionalProperties: true
        },
        ConfigCredential: {
            type: "object",
            required: [
                "name",
                "credential",
            ],
            properties: {
                name: {
                    type: "string"
                },
                credential: {
                    oneOf: [
                        {
                            $ref: "#/definitions/ConfigSimpleCredentials"
                        },
                        {
                            $ref: "#/definitions/ConfigStrongCredentials"
                        },
                        {
                            $ref: "#/definitions/ConfigSASLCredentials"
                        },
                    ]
                }
            }
        },
        AlgorithmIdentifier: {
            type: "object",
            required: [
                "algorithm",
            ],
            properties: {
                algorithm: {
                    type: "string",
                    minLength: 3
                }
            },
            additionalProperties: true
        },
        ConfigProtectedPassword: {
            type: "object",
            required: [
                "algorithmIdentifier",
                "hashValue",
            ],
            properties: {
                algorithmIdentifier: {
                    $ref: "#/definitions/AlgorithmIdentifier"
                },
                hashValue: {
                    type: "string",
                    description: "The hexadecimal-encoded hash of the password."
                }
            },
            additionalProperties: true
        },
        ConfigPassword: {
            oneOf: [
                {
                    type: "object",
                    required: [
                        "unprotected",
                    ],
                    properties: {
                        unprotected: {
                            type: "string"
                        }
                    }
                },
                {
                    type: "object",
                    required: [
                        "protected",
                    ],
                    properties: {
                        protected: {
                            $ref: "#/definitions/ConfigProtectedPassword"
                        }
                    }
                },
            ]
        },
        ConfigSimpleCredentials: {
            type: "object",
            required: [
                "type",
                "name",
            ],
            properties: {
                type: {
                    type: "string",
                    "enum": ["simple"]
                },
                name: {
                    $ref: "#/definitions/DistinguishedName"
                },
                password: {
                    $ref: "#/definitions/ConfigPassword"
                }
            },
            additionalProperties: true
        },
        ConfigStrongCredentials: {
            type: "object",
            required: [
                "type",
            ],
            properties: {
                type: {
                    type: "string",
                    "enum": ["strong"]
                },
                name: {
                    $ref: "#/definitions/DistinguishedName"
                },
                keyPath: {
                    type: "string",
                    minLength: 1
                },
                certPath: {
                    type: "string",
                    minLength: 1
                },
                attrCertPath: {
                    type: "string",
                    minLength: 1
                }
            },
            additionalProperties: true
        },
        ConfigSASLCredentials: {
            type: "object",
            required: [
                "type",
            ],
            properties: {
                type: {
                    type: "string",
                    "enum": ["sasl"]
                }
            },
            additionalProperties: true
        },
        ConfigContext: {
            type: "object",
            required: [
                "name",
                "context",
            ],
            properties: {
                name: {
                    type: "string",
                    minLength: 1
                },
                context: {
                    type: "object",
                    required: [
                        "dsa",
                    ],
                    properties: {
                        dsa: {
                            type: "string",
                            minLength: 1
                        },
                        credential: {
                            type: "string",
                            minLength: 1
                        },
                        preferences: {
                            type: "string",
                            minLength: 1
                        }
                    },
                    additionalProperties: true
                }
            },
            additionalProperties: true
        }
    }
};
exports["default"] = exports.schema;
