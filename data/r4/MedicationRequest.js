const entities = [
  {
    fullUrl: "urn:uuid:0704950d-46a2-0695-09bf-960cbb869356",
    resource: {
      resourceType: "MedicationRequest",
      id: "0704950d-46a2-0695-09bf-960cbb869356",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "active",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "849574",
            display: "Naproxen sodium 220 MG Oral Tablet",
          },
        ],
        text: "Naproxen sodium 220 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:d58530c3-bf6f-3109-beb2-7aace8344cf9" },
      authoredOn: "1985-02-23T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:6adf154e-bc1c-dc17-b297-d9e8801df1e3" },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:dde0b1fc-3997-f177-a91b-1800df4fd44d",
    resource: {
      resourceType: "MedicationRequest",
      id: "dde0b1fc-3997-f177-a91b-1800df4fd44d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0d452394-2b0c-1f9e-da52-1af68a0bb062" },
      authoredOn: "1994-11-25T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:791ad525-e28c-801e-61a1-a04a4c76dd0e",
    resource: {
      resourceType: "MedicationRequest",
      id: "791ad525-e28c-801e-61a1-a04a4c76dd0e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:965abeb3-4174-d8ba-9515-a7b3e83d9172" },
      authoredOn: "1995-11-25T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:527675d4-2b6d-0e0b-fa7e-29dd0e483f59",
    resource: {
      resourceType: "MedicationRequest",
      id: "527675d4-2b6d-0e0b-fa7e-29dd0e483f59",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:2333b1cd-ad09-3073-0696-ee9c140737b6" },
      authoredOn: "1996-11-24T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:e18b639e-bb51-a85a-a6d8-60b5193ca8aa",
    resource: {
      resourceType: "MedicationRequest",
      id: "e18b639e-bb51-a85a-a6d8-60b5193ca8aa",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:495d60aa-d26c-964a-ea81-a109ea280cad" },
      authoredOn: "1997-11-24T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:8d0d4331-70b0-c3be-627b-d40d53ab62cc",
    resource: {
      resourceType: "MedicationRequest",
      id: "8d0d4331-70b0-c3be-627b-d40d53ab62cc",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:9bec8f7b-081f-26e5-22ad-290ec7e5fa28" },
      authoredOn: "1998-11-24T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:dfb6edcd-567c-9ba5-3039-4a773c91796a",
    resource: {
      resourceType: "MedicationRequest",
      id: "dfb6edcd-567c-9ba5-3039-4a773c91796a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:1478d811-530a-72f3-d291-2bbdea8a5fde" },
      authoredOn: "1999-11-24T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:1bcef6ab-219e-f255-8fcf-a6e22deaa633",
    resource: {
      resourceType: "MedicationRequest",
      id: "1bcef6ab-219e-f255-8fcf-a6e22deaa633",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:07b6f41f-e852-a015-9767-7bc44503fb3e" },
      authoredOn: "2000-11-23T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:0d6c35fc-3f0c-dc6b-6b2b-d401445f24f6",
    resource: {
      resourceType: "MedicationRequest",
      id: "0d6c35fc-3f0c-dc6b-6b2b-d401445f24f6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:2f8bd24b-1c19-084c-3350-c62c7b9c9ace" },
      authoredOn: "2001-11-23T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:8ed61652-eedb-401e-b846-27ffe1e626ac",
    resource: {
      resourceType: "MedicationRequest",
      id: "8ed61652-eedb-401e-b846-27ffe1e626ac",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0065e2e0-f9e1-13d2-7a75-8bad676cb53e" },
      authoredOn: "2002-11-23T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:71d4caf5-d381-b3a1-2ce0-4b9d0d705f68",
    resource: {
      resourceType: "MedicationRequest",
      id: "71d4caf5-d381-b3a1-2ce0-4b9d0d705f68",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:1b000b85-ccb2-85e5-4228-caa08544105a" },
      authoredOn: "2003-11-23T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:a94777d9-843d-af76-ecb3-e6fea22e7e5a",
    resource: {
      resourceType: "MedicationRequest",
      id: "a94777d9-843d-af76-ecb3-e6fea22e7e5a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bb71b8f5-15d4-337a-ab7f-310698989b95" },
      authoredOn: "2004-11-22T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:49f52804-d5cd-e9da-3901-18dfdcc2ee1b",
    resource: {
      resourceType: "MedicationRequest",
      id: "49f52804-d5cd-e9da-3901-18dfdcc2ee1b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:09103c57-d806-a5b3-bce1-e27a4311cd46" },
      authoredOn: "2005-11-22T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:96389831-b458-f8fa-fe2a-8cb9270787a5",
    resource: {
      resourceType: "MedicationRequest",
      id: "96389831-b458-f8fa-fe2a-8cb9270787a5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:54ff763b-773d-17d9-5010-291d2e62dc59" },
      authoredOn: "2006-11-22T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:cb7a403d-701f-be46-fbd5-16b0aec0647f",
    resource: {
      resourceType: "MedicationRequest",
      id: "cb7a403d-701f-be46-fbd5-16b0aec0647f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:fcbad825-7d87-65a6-6edb-457d75cb4909" },
      authoredOn: "2007-11-22T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:4e112b8a-0a64-db86-e29c-eb45aea32d2f",
    resource: {
      resourceType: "MedicationRequest",
      id: "4e112b8a-0a64-db86-e29c-eb45aea32d2f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:9afd5dd5-5d49-fbfd-8de1-467729f031df" },
      authoredOn: "2008-11-21T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:4b8092df-cd9e-bc9e-d199-a9987d38c4d9",
    resource: {
      resourceType: "MedicationRequest",
      id: "4b8092df-cd9e-bc9e-d199-a9987d38c4d9",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32805baa-8f71-da8d-4b1a-6661022b0270" },
      authoredOn: "2009-11-21T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:5f80ad55-ba2c-6c38-b937-0dfeb50039df",
    resource: {
      resourceType: "MedicationRequest",
      id: "5f80ad55-ba2c-6c38-b937-0dfeb50039df",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:e0df8625-5bef-8d32-c0cf-80ddea40b2bd" },
      authoredOn: "2010-11-21T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:1ee3982d-77b3-7e8f-e765-ae3cfef3d91e",
    resource: {
      resourceType: "MedicationRequest",
      id: "1ee3982d-77b3-7e8f-e765-ae3cfef3d91e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7b15ad1a-24c8-0d45-c32f-9941233f3e20" },
      authoredOn: "2011-11-21T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:5e9728e8-ab4f-1d83-8320-72e8a9c0765f",
    resource: {
      resourceType: "MedicationRequest",
      id: "5e9728e8-ab4f-1d83-8320-72e8a9c0765f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      authoredOn: "2012-11-20T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:6aca11ef-edcc-3dd3-85a9-24f6703795ab",
    resource: {
      resourceType: "MedicationRequest",
      id: "6aca11ef-edcc-3dd3-85a9-24f6703795ab",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      authoredOn: "2013-11-20T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:2e1caec9-3052-430c-d1c3-f6f4905be257",
    resource: {
      resourceType: "MedicationRequest",
      id: "2e1caec9-3052-430c-d1c3-f6f4905be257",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "856987",
            display:
              "Acetaminophen 300 MG / Hydrocodone Bitartrate 5 MG Oral Tablet",
          },
        ],
        text: "Acetaminophen 300 MG / Hydrocodone Bitartrate 5 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a1aa9e96-e503-95ca-5897-96581cf9dcf5" },
      authoredOn: "2014-02-02T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      dosageInstruction: [
        {
          sequence: 1,
          text: "Every four to six hours (qualifier value)\n",
          additionalInstruction: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "225757006",
                  display: "Every four to six hours (qualifier value)",
                },
              ],
              text: "Every four to six hours (qualifier value)",
            },
          ],
          timing: { repeat: { frequency: 4, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:db643010-22b4-6fea-006f-14ab7a71d243",
    resource: {
      resourceType: "MedicationRequest",
      id: "db643010-22b4-6fea-006f-14ab7a71d243",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "856987",
            display:
              "Acetaminophen 300 MG / Hydrocodone Bitartrate 5 MG Oral Tablet",
          },
        ],
        text: "Acetaminophen 300 MG / Hydrocodone Bitartrate 5 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      authoredOn: "2014-02-21T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
      dosageInstruction: [
        {
          sequence: 1,
          text: "Every four to six hours (qualifier value)\n",
          additionalInstruction: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "225757006",
                  display: "Every four to six hours (qualifier value)",
                },
              ],
              text: "Every four to six hours (qualifier value)",
            },
          ],
          timing: { repeat: { frequency: 4, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:91374cbb-5938-c634-ad9a-da35535871aa",
    resource: {
      resourceType: "MedicationRequest",
      id: "91374cbb-5938-c634-ad9a-da35535871aa",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "1049625",
            display:
              "Acetaminophen 325 MG / Oxycodone Hydrochloride 10 MG Oral Tablet [Percocet]",
          },
        ],
        text: "Acetaminophen 325 MG / Oxycodone Hydrochloride 10 MG Oral Tablet [Percocet]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7ea69efc-73a8-74a1-0595-d98e36d47dc2" },
      authoredOn: "2014-03-27T05:40:58-04:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      dosageInstruction: [
        {
          sequence: 1,
          text: "Every six hours (qualifier value)\n",
          additionalInstruction: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "307468000",
                  display: "Every six hours (qualifier value)",
                },
              ],
              text: "Every six hours (qualifier value)",
            },
          ],
          timing: { repeat: { frequency: 4, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:3b74aeb2-0f34-26f7-0945-550688273155",
    resource: {
      resourceType: "MedicationRequest",
      id: "3b74aeb2-0f34-26f7-0945-550688273155",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      authoredOn: "2014-11-20T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:804402bf-1115-c012-865c-90909e3fd9df",
    resource: {
      resourceType: "MedicationRequest",
      id: "804402bf-1115-c012-865c-90909e3fd9df",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "855332",
            display: "Warfarin Sodium 5 MG Oral Tablet",
          },
        ],
        text: "Warfarin Sodium 5 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      authoredOn: "2015-02-27T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:c43eec31-d00f-a83d-8ab6-f92f3409c7ce",
    resource: {
      resourceType: "MedicationRequest",
      id: "c43eec31-d00f-a83d-8ab6-f92f3409c7ce",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "897718",
            display: "Verapamil Hydrochloride 40 MG",
          },
        ],
        text: "Verapamil Hydrochloride 40 MG",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      authoredOn: "2015-02-27T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:16ecd946-8d50-2b4e-1519-1c3cd6b39b17",
    resource: {
      resourceType: "MedicationRequest",
      id: "16ecd946-8d50-2b4e-1519-1c3cd6b39b17",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "197604",
            display: "Digoxin 0.125 MG Oral Tablet",
          },
        ],
        text: "Digoxin 0.125 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      authoredOn: "2015-02-27T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:53bd569e-40a8-2c90-c5bd-d907ae177261",
    resource: {
      resourceType: "MedicationRequest",
      id: "53bd569e-40a8-2c90-c5bd-d907ae177261",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "1049625",
            display:
              "Acetaminophen 325 MG / Oxycodone Hydrochloride 10 MG Oral Tablet [Percocet]",
          },
        ],
        text: "Acetaminophen 325 MG / Oxycodone Hydrochloride 10 MG Oral Tablet [Percocet]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      authoredOn: "2015-02-27T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
      dosageInstruction: [
        {
          sequence: 1,
          text: "Every six hours (qualifier value)\n",
          additionalInstruction: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "307468000",
                  display: "Every six hours (qualifier value)",
                },
              ],
              text: "Every six hours (qualifier value)",
            },
          ],
          timing: { repeat: { frequency: 4, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:e4b52a09-7cc6-a270-8fd0-8d359164ae17",
    resource: {
      resourceType: "MedicationRequest",
      id: "e4b52a09-7cc6-a270-8fd0-8d359164ae17",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "897718",
            display: "Verapamil Hydrochloride 40 MG",
          },
        ],
        text: "Verapamil Hydrochloride 40 MG",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      authoredOn: "2015-02-27T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:d420c50e-d912-5700-e417-0b3d22f4e4ea",
    resource: {
      resourceType: "MedicationRequest",
      id: "d420c50e-d912-5700-e417-0b3d22f4e4ea",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "197604",
            display: "Digoxin 0.125 MG Oral Tablet",
          },
        ],
        text: "Digoxin 0.125 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      authoredOn: "2015-02-27T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:f632876a-27cb-3877-e173-e0e8811ae84b",
    resource: {
      resourceType: "MedicationRequest",
      id: "f632876a-27cb-3877-e173-e0e8811ae84b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "856987",
            display:
              "Acetaminophen 300 MG / Hydrocodone Bitartrate 5 MG Oral Tablet",
          },
        ],
        text: "Acetaminophen 300 MG / Hydrocodone Bitartrate 5 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      authoredOn: "2015-02-27T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
      dosageInstruction: [
        {
          sequence: 1,
          text: "Every four to six hours (qualifier value)\n",
          additionalInstruction: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "225757006",
                  display: "Every four to six hours (qualifier value)",
                },
              ],
              text: "Every four to six hours (qualifier value)",
            },
          ],
          timing: { repeat: { frequency: 4, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:ae36d189-43d5-39af-2ffa-edd9cb1dd8f2",
    resource: {
      resourceType: "MedicationRequest",
      id: "ae36d189-43d5-39af-2ffa-edd9cb1dd8f2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "855332",
            display: "Warfarin Sodium 5 MG Oral Tablet",
          },
        ],
        text: "Warfarin Sodium 5 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      authoredOn: "2015-02-27T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:7f4c28a4-6c46-7000-ccf3-3044875930b8",
    resource: {
      resourceType: "MedicationRequest",
      id: "7f4c28a4-6c46-7000-ccf3-3044875930b8",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      authoredOn: "2015-11-20T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:8499db6a-905d-3342-eef4-3c714cea5a7a",
    resource: {
      resourceType: "MedicationRequest",
      id: "8499db6a-905d-3342-eef4-3c714cea5a7a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "1049625",
            display:
              "Acetaminophen 325 MG / Oxycodone Hydrochloride 10 MG Oral Tablet [Percocet]",
          },
        ],
        text: "Acetaminophen 325 MG / Oxycodone Hydrochloride 10 MG Oral Tablet [Percocet]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      authoredOn: "2016-03-04T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
      dosageInstruction: [
        {
          sequence: 1,
          text: "Every six hours (qualifier value)\n",
          additionalInstruction: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "307468000",
                  display: "Every six hours (qualifier value)",
                },
              ],
              text: "Every six hours (qualifier value)",
            },
          ],
          timing: { repeat: { frequency: 4, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:f006b3f5-f120-28db-a26d-69e3889ed3ae",
    resource: {
      resourceType: "MedicationRequest",
      id: "f006b3f5-f120-28db-a26d-69e3889ed3ae",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "897718",
            display: "Verapamil Hydrochloride 40 MG",
          },
        ],
        text: "Verapamil Hydrochloride 40 MG",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      authoredOn: "2016-03-04T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:5f48c20d-d004-6f97-29bf-f15a34fe55db",
    resource: {
      resourceType: "MedicationRequest",
      id: "5f48c20d-d004-6f97-29bf-f15a34fe55db",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "197604",
            display: "Digoxin 0.125 MG Oral Tablet",
          },
        ],
        text: "Digoxin 0.125 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      authoredOn: "2016-03-04T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:43b18d5a-58fb-fd29-35a4-f86a2d2b9c51",
    resource: {
      resourceType: "MedicationRequest",
      id: "43b18d5a-58fb-fd29-35a4-f86a2d2b9c51",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "856987",
            display:
              "Acetaminophen 300 MG / Hydrocodone Bitartrate 5 MG Oral Tablet",
          },
        ],
        text: "Acetaminophen 300 MG / Hydrocodone Bitartrate 5 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      authoredOn: "2016-03-04T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
      dosageInstruction: [
        {
          sequence: 1,
          text: "Every four to six hours (qualifier value)\n",
          additionalInstruction: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "225757006",
                  display: "Every four to six hours (qualifier value)",
                },
              ],
              text: "Every four to six hours (qualifier value)",
            },
          ],
          timing: { repeat: { frequency: 4, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:f4792fb3-a26f-bf67-279d-a4017a469123",
    resource: {
      resourceType: "MedicationRequest",
      id: "f4792fb3-a26f-bf67-279d-a4017a469123",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "855332",
            display: "Warfarin Sodium 5 MG Oral Tablet",
          },
        ],
        text: "Warfarin Sodium 5 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      authoredOn: "2016-03-04T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:7631231b-50de-5431-f900-0e5ce1515555",
    resource: {
      resourceType: "MedicationRequest",
      id: "7631231b-50de-5431-f900-0e5ce1515555",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      authoredOn: "2016-11-19T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:c0daeb28-5c4a-a18f-b914-86a38de8ee36",
    resource: {
      resourceType: "MedicationRequest",
      id: "c0daeb28-5c4a-a18f-b914-86a38de8ee36",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "1049625",
            display:
              "Acetaminophen 325 MG / Oxycodone Hydrochloride 10 MG Oral Tablet [Percocet]",
          },
        ],
        text: "Acetaminophen 325 MG / Oxycodone Hydrochloride 10 MG Oral Tablet [Percocet]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      authoredOn: "2017-03-10T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
      dosageInstruction: [
        {
          sequence: 1,
          text: "Every six hours (qualifier value)\n",
          additionalInstruction: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "307468000",
                  display: "Every six hours (qualifier value)",
                },
              ],
              text: "Every six hours (qualifier value)",
            },
          ],
          timing: { repeat: { frequency: 4, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:7f29c53a-0fa5-2498-9c16-2d203b381931",
    resource: {
      resourceType: "MedicationRequest",
      id: "7f29c53a-0fa5-2498-9c16-2d203b381931",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "897718",
            display: "Verapamil Hydrochloride 40 MG",
          },
        ],
        text: "Verapamil Hydrochloride 40 MG",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      authoredOn: "2017-03-10T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:22bbfef0-2063-868e-d307-53ccf9224df0",
    resource: {
      resourceType: "MedicationRequest",
      id: "22bbfef0-2063-868e-d307-53ccf9224df0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "197604",
            display: "Digoxin 0.125 MG Oral Tablet",
          },
        ],
        text: "Digoxin 0.125 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      authoredOn: "2017-03-10T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:6363ea15-c3f3-f34f-8799-85d80a1a4ca0",
    resource: {
      resourceType: "MedicationRequest",
      id: "6363ea15-c3f3-f34f-8799-85d80a1a4ca0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "856987",
            display:
              "Acetaminophen 300 MG / Hydrocodone Bitartrate 5 MG Oral Tablet",
          },
        ],
        text: "Acetaminophen 300 MG / Hydrocodone Bitartrate 5 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      authoredOn: "2017-03-10T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
      dosageInstruction: [
        {
          sequence: 1,
          text: "Every four to six hours (qualifier value)\n",
          additionalInstruction: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "225757006",
                  display: "Every four to six hours (qualifier value)",
                },
              ],
              text: "Every four to six hours (qualifier value)",
            },
          ],
          timing: { repeat: { frequency: 4, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:7dff496d-d60e-e6a1-d319-2a8411ac81f2",
    resource: {
      resourceType: "MedicationRequest",
      id: "7dff496d-d60e-e6a1-d319-2a8411ac81f2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "855332",
            display: "Warfarin Sodium 5 MG Oral Tablet",
          },
        ],
        text: "Warfarin Sodium 5 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      authoredOn: "2017-03-10T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:9bc72879-c301-e0a9-aaa3-a014f82810cc",
    resource: {
      resourceType: "MedicationRequest",
      id: "9bc72879-c301-e0a9-aaa3-a014f82810cc",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      authoredOn: "2017-11-19T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:840988fe-27b5-263d-52e0-59b320a6eaba",
    resource: {
      resourceType: "MedicationRequest",
      id: "840988fe-27b5-263d-52e0-59b320a6eaba",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "1049625",
            display:
              "Acetaminophen 325 MG / Oxycodone Hydrochloride 10 MG Oral Tablet [Percocet]",
          },
        ],
        text: "Acetaminophen 325 MG / Oxycodone Hydrochloride 10 MG Oral Tablet [Percocet]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      authoredOn: "2018-03-16T02:40:58-04:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
      dosageInstruction: [
        {
          sequence: 1,
          text: "Every six hours (qualifier value)\n",
          additionalInstruction: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "307468000",
                  display: "Every six hours (qualifier value)",
                },
              ],
              text: "Every six hours (qualifier value)",
            },
          ],
          timing: { repeat: { frequency: 4, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:c486146a-d5fe-24ee-81cb-70353bcefaf9",
    resource: {
      resourceType: "MedicationRequest",
      id: "c486146a-d5fe-24ee-81cb-70353bcefaf9",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "897718",
            display: "Verapamil Hydrochloride 40 MG",
          },
        ],
        text: "Verapamil Hydrochloride 40 MG",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      authoredOn: "2018-03-16T02:40:58-04:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:88dd0f6d-2527-4224-f4de-f44046d8236f",
    resource: {
      resourceType: "MedicationRequest",
      id: "88dd0f6d-2527-4224-f4de-f44046d8236f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "197604",
            display: "Digoxin 0.125 MG Oral Tablet",
          },
        ],
        text: "Digoxin 0.125 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      authoredOn: "2018-03-16T02:40:58-04:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:c806f57c-09de-effb-ca94-408bfed04ae6",
    resource: {
      resourceType: "MedicationRequest",
      id: "c806f57c-09de-effb-ca94-408bfed04ae6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "856987",
            display:
              "Acetaminophen 300 MG / Hydrocodone Bitartrate 5 MG Oral Tablet",
          },
        ],
        text: "Acetaminophen 300 MG / Hydrocodone Bitartrate 5 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      authoredOn: "2018-03-16T02:40:58-04:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
      dosageInstruction: [
        {
          sequence: 1,
          text: "Every four to six hours (qualifier value)\n",
          additionalInstruction: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "225757006",
                  display: "Every four to six hours (qualifier value)",
                },
              ],
              text: "Every four to six hours (qualifier value)",
            },
          ],
          timing: { repeat: { frequency: 4, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:708abc84-5d71-fbf4-b71d-7167aacabc2c",
    resource: {
      resourceType: "MedicationRequest",
      id: "708abc84-5d71-fbf4-b71d-7167aacabc2c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "855332",
            display: "Warfarin Sodium 5 MG Oral Tablet",
          },
        ],
        text: "Warfarin Sodium 5 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      authoredOn: "2018-03-16T02:40:58-04:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:c353e223-8088-d0fc-ff2a-95d5dadb0b64",
    resource: {
      resourceType: "MedicationRequest",
      id: "c353e223-8088-d0fc-ff2a-95d5dadb0b64",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      authoredOn: "2018-11-19T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:7dcb28ae-f183-bff9-7499-6273af0cbac5",
    resource: {
      resourceType: "MedicationRequest",
      id: "7dcb28ae-f183-bff9-7499-6273af0cbac5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "1049625",
            display:
              "Acetaminophen 325 MG / Oxycodone Hydrochloride 10 MG Oral Tablet [Percocet]",
          },
        ],
        text: "Acetaminophen 325 MG / Oxycodone Hydrochloride 10 MG Oral Tablet [Percocet]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      authoredOn: "2019-03-22T02:40:58-04:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
      dosageInstruction: [
        {
          sequence: 1,
          text: "Every six hours (qualifier value)\n",
          additionalInstruction: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "307468000",
                  display: "Every six hours (qualifier value)",
                },
              ],
              text: "Every six hours (qualifier value)",
            },
          ],
          timing: { repeat: { frequency: 4, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:6181619d-58a7-202a-750b-234590974de1",
    resource: {
      resourceType: "MedicationRequest",
      id: "6181619d-58a7-202a-750b-234590974de1",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "897718",
            display: "Verapamil Hydrochloride 40 MG",
          },
        ],
        text: "Verapamil Hydrochloride 40 MG",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      authoredOn: "2019-03-22T02:40:58-04:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:42f92a8d-2814-b4ed-9c25-eff460128156",
    resource: {
      resourceType: "MedicationRequest",
      id: "42f92a8d-2814-b4ed-9c25-eff460128156",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "197604",
            display: "Digoxin 0.125 MG Oral Tablet",
          },
        ],
        text: "Digoxin 0.125 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      authoredOn: "2019-03-22T02:40:58-04:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:34ac2e49-18bd-f56e-5a38-ab051e3bef7d",
    resource: {
      resourceType: "MedicationRequest",
      id: "34ac2e49-18bd-f56e-5a38-ab051e3bef7d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "856987",
            display:
              "Acetaminophen 300 MG / Hydrocodone Bitartrate 5 MG Oral Tablet",
          },
        ],
        text: "Acetaminophen 300 MG / Hydrocodone Bitartrate 5 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      authoredOn: "2019-03-22T02:40:58-04:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
      dosageInstruction: [
        {
          sequence: 1,
          text: "Every four to six hours (qualifier value)\n",
          additionalInstruction: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "225757006",
                  display: "Every four to six hours (qualifier value)",
                },
              ],
              text: "Every four to six hours (qualifier value)",
            },
          ],
          timing: { repeat: { frequency: 4, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:73bb2c0b-9c08-463c-6066-2299502378b2",
    resource: {
      resourceType: "MedicationRequest",
      id: "73bb2c0b-9c08-463c-6066-2299502378b2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "855332",
            display: "Warfarin Sodium 5 MG Oral Tablet",
          },
        ],
        text: "Warfarin Sodium 5 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      authoredOn: "2019-03-22T02:40:58-04:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:e5ac8208-bd7e-0dff-2431-3443e9d03124",
    resource: {
      resourceType: "MedicationRequest",
      id: "e5ac8208-bd7e-0dff-2431-3443e9d03124",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      authoredOn: "2019-11-19T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:e0539efa-c59b-765b-7179-42731b6a7227",
    resource: {
      resourceType: "MedicationRequest",
      id: "e0539efa-c59b-765b-7179-42731b6a7227",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "1049625",
            display:
              "Acetaminophen 325 MG / Oxycodone Hydrochloride 10 MG Oral Tablet [Percocet]",
          },
        ],
        text: "Acetaminophen 325 MG / Oxycodone Hydrochloride 10 MG Oral Tablet [Percocet]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      authoredOn: "2020-03-27T02:40:58-04:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
      dosageInstruction: [
        {
          sequence: 1,
          text: "Every six hours (qualifier value)\n",
          additionalInstruction: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "307468000",
                  display: "Every six hours (qualifier value)",
                },
              ],
              text: "Every six hours (qualifier value)",
            },
          ],
          timing: { repeat: { frequency: 4, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:7778904e-68f7-86ea-8d04-2ba2e2155508",
    resource: {
      resourceType: "MedicationRequest",
      id: "7778904e-68f7-86ea-8d04-2ba2e2155508",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "897718",
            display: "Verapamil Hydrochloride 40 MG",
          },
        ],
        text: "Verapamil Hydrochloride 40 MG",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      authoredOn: "2020-03-27T02:40:58-04:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:97de344a-223e-a8b7-7b99-cf83bb841228",
    resource: {
      resourceType: "MedicationRequest",
      id: "97de344a-223e-a8b7-7b99-cf83bb841228",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "197604",
            display: "Digoxin 0.125 MG Oral Tablet",
          },
        ],
        text: "Digoxin 0.125 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      authoredOn: "2020-03-27T02:40:58-04:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:24a9e2bc-7676-627b-12f5-4413d28a311c",
    resource: {
      resourceType: "MedicationRequest",
      id: "24a9e2bc-7676-627b-12f5-4413d28a311c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "856987",
            display:
              "Acetaminophen 300 MG / Hydrocodone Bitartrate 5 MG Oral Tablet",
          },
        ],
        text: "Acetaminophen 300 MG / Hydrocodone Bitartrate 5 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      authoredOn: "2020-03-27T02:40:58-04:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
      dosageInstruction: [
        {
          sequence: 1,
          text: "Every four to six hours (qualifier value)\n",
          additionalInstruction: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "225757006",
                  display: "Every four to six hours (qualifier value)",
                },
              ],
              text: "Every four to six hours (qualifier value)",
            },
          ],
          timing: { repeat: { frequency: 4, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:9d7262a8-0cc9-4c15-0530-43a6835aa940",
    resource: {
      resourceType: "MedicationRequest",
      id: "9d7262a8-0cc9-4c15-0530-43a6835aa940",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "855332",
            display: "Warfarin Sodium 5 MG Oral Tablet",
          },
        ],
        text: "Warfarin Sodium 5 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      authoredOn: "2020-03-27T02:40:58-04:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:cfda99b3-18dd-b068-acb1-3108a7a83b09",
    resource: {
      resourceType: "MedicationRequest",
      id: "cfda99b3-18dd-b068-acb1-3108a7a83b09",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "stopped",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      authoredOn: "2020-11-18T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:35e1ca69-92cf-4f99-6996-12394c018dd1",
    resource: {
      resourceType: "MedicationRequest",
      id: "35e1ca69-92cf-4f99-6996-12394c018dd1",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "active",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "1049625",
            display:
              "Acetaminophen 325 MG / Oxycodone Hydrochloride 10 MG Oral Tablet [Percocet]",
          },
        ],
        text: "Acetaminophen 325 MG / Oxycodone Hydrochloride 10 MG Oral Tablet [Percocet]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      authoredOn: "2021-04-02T02:40:58-04:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
      dosageInstruction: [
        {
          sequence: 1,
          text: "Every six hours (qualifier value)\n",
          additionalInstruction: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "307468000",
                  display: "Every six hours (qualifier value)",
                },
              ],
              text: "Every six hours (qualifier value)",
            },
          ],
          timing: { repeat: { frequency: 4, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:42c0c205-59b6-1c77-31c1-101a23ddb481",
    resource: {
      resourceType: "MedicationRequest",
      id: "42c0c205-59b6-1c77-31c1-101a23ddb481",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "active",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "897718",
            display: "Verapamil Hydrochloride 40 MG",
          },
        ],
        text: "Verapamil Hydrochloride 40 MG",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      authoredOn: "2021-04-02T02:40:58-04:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:50279d7f-64b2-2765-acfc-1edff878499d",
    resource: {
      resourceType: "MedicationRequest",
      id: "50279d7f-64b2-2765-acfc-1edff878499d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "active",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "197604",
            display: "Digoxin 0.125 MG Oral Tablet",
          },
        ],
        text: "Digoxin 0.125 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      authoredOn: "2021-04-02T02:40:58-04:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:31985e7a-7a67-f186-3c66-2fad8461ae36",
    resource: {
      resourceType: "MedicationRequest",
      id: "31985e7a-7a67-f186-3c66-2fad8461ae36",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "active",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "856987",
            display:
              "Acetaminophen 300 MG / Hydrocodone Bitartrate 5 MG Oral Tablet",
          },
        ],
        text: "Acetaminophen 300 MG / Hydrocodone Bitartrate 5 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      authoredOn: "2021-04-02T02:40:58-04:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
      dosageInstruction: [
        {
          sequence: 1,
          text: "Every four to six hours (qualifier value)\n",
          additionalInstruction: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "225757006",
                  display: "Every four to six hours (qualifier value)",
                },
              ],
              text: "Every four to six hours (qualifier value)",
            },
          ],
          timing: { repeat: { frequency: 4, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:e96f1e09-7c5a-3062-58fc-5a392ad9a861",
    resource: {
      resourceType: "MedicationRequest",
      id: "e96f1e09-7c5a-3062-58fc-5a392ad9a861",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "active",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "855332",
            display: "Warfarin Sodium 5 MG Oral Tablet",
          },
        ],
        text: "Warfarin Sodium 5 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      authoredOn: "2021-04-02T02:40:58-04:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
        display: "Dr. Saul605 Casper496",
      },
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
  {
    fullUrl: "urn:uuid:54ee102c-8f91-bd74-bc3c-109abe43db9f",
    resource: {
      resourceType: "MedicationRequest",
      id: "54ee102c-8f91-bd74-bc3c-109abe43db9f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest",
        ],
      },
      status: "active",
      intent: "order",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "314231",
            display: "Simvastatin 10 MG Oral Tablet",
          },
        ],
        text: "Simvastatin 10 MG Oral Tablet",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      authoredOn: "2021-11-18T01:40:58-05:00",
      requester: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
        display: "Dr. Ingrid581 Jacobson885",
      },
      reasonReference: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: { value: 1 },
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "MedicationRequest" },
  },
];

export default entities;
