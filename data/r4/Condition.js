const entities = [
  {
    fullUrl: "urn:uuid:7663291d-7763-5c77-227d-b36061ae3be2",
    resource: {
      resourceType: "Condition",
      id: "7663291d-7763-5c77-227d-b36061ae3be2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "active",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160968000",
            display: "Risk activity involvement (finding)",
          },
        ],
        text: "Risk activity involvement (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:e1f0cb6f-8192-04eb-72db-7c5c3eceef2d" },
      onsetDateTime: "1955-11-18T02:54:38-05:00",
      recordedDate: "1955-11-18T02:54:38-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:379841ea-5636-858b-f58b-3d2737d077e7",
    resource: {
      resourceType: "Condition",
      id: "379841ea-5636-858b-f58b-3d2737d077e7",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "active",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "5251000175109",
            display:
              "Received certificate of high school equivalency (finding)",
          },
        ],
        text: "Received certificate of high school equivalency (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a63bab0b-bfa7-02f8-a81f-d134e8abae49" },
      onsetDateTime: "1956-11-23T02:39:32-05:00",
      recordedDate: "1956-11-23T02:39:32-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:c5380b94-dad2-92f0-e2c4-bbeaca0834a2",
    resource: {
      resourceType: "Condition",
      id: "c5380b94-dad2-92f0-e2c4-bbeaca0834a2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a63bab0b-bfa7-02f8-a81f-d134e8abae49" },
      onsetDateTime: "1956-11-23T02:39:32-05:00",
      abatementDateTime: "1957-11-29T02:36:46-05:00",
      recordedDate: "1956-11-23T02:39:32-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:85830a3a-7efb-3a3d-5a96-abcca64a58f9",
    resource: {
      resourceType: "Condition",
      id: "85830a3a-7efb-3a3d-5a96-abcca64a58f9",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ffe7916d-32bf-fd09-5444-3af0a42357ad" },
      onsetDateTime: "1957-11-29T02:36:46-05:00",
      abatementDateTime: "1960-12-02T02:11:39-05:00",
      recordedDate: "1957-11-29T02:36:46-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:58ca645b-3295-4108-82f6-d87227ebf93d",
    resource: {
      resourceType: "Condition",
      id: "58ca645b-3295-4108-82f6-d87227ebf93d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ab1b44a8-e592-358e-c82b-2ad93e761853" },
      onsetDateTime: "1960-12-02T02:11:39-05:00",
      abatementDateTime: "1963-12-06T02:20:45-05:00",
      recordedDate: "1960-12-02T02:11:39-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:67ab0d9b-7bbf-38eb-085d-8c66f42acb16",
    resource: {
      resourceType: "Condition",
      id: "67ab0d9b-7bbf-38eb-085d-8c66f42acb16",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:946b1ccf-b3fe-73e0-89fe-5c4eca918fbd" },
      onsetDateTime: "1963-12-06T02:20:45-05:00",
      abatementDateTime: "1966-12-09T02:37:56-05:00",
      recordedDate: "1963-12-06T02:20:45-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:9d38fc8f-eadb-2d63-abb0-d04e8e346ab1",
    resource: {
      resourceType: "Condition",
      id: "9d38fc8f-eadb-2d63-abb0-d04e8e346ab1",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a13656cd-5139-6065-fb02-e396ade6da0f" },
      onsetDateTime: "1966-12-09T02:37:56-05:00",
      abatementDateTime: "1969-12-12T02:34:59-05:00",
      recordedDate: "1966-12-09T02:37:56-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:309f5a46-686f-dd52-c6d2-e65fa4c5f03e",
    resource: {
      resourceType: "Condition",
      id: "309f5a46-686f-dd52-c6d2-e65fa4c5f03e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:c3c7e2bb-ffc3-a8a8-c1aa-5d4849c89735" },
      onsetDateTime: "1969-12-12T02:34:59-05:00",
      abatementDateTime: "1972-12-15T02:23:36-05:00",
      recordedDate: "1969-12-12T02:34:59-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:faae01bb-4cf5-047c-baa6-95e35fd51572",
    resource: {
      resourceType: "Condition",
      id: "faae01bb-4cf5-047c-baa6-95e35fd51572",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:78d2eb6e-cb2c-b0d9-eef1-81ced734b85d" },
      onsetDateTime: "1972-12-15T02:23:36-05:00",
      abatementDateTime: "1975-12-19T02:16:59-05:00",
      recordedDate: "1972-12-15T02:23:36-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:6a224f62-1840-b50d-c907-46b671e8eb04",
    resource: {
      resourceType: "Condition",
      id: "6a224f62-1840-b50d-c907-46b671e8eb04",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a195ade9-6085-554c-a315-88ec3974dd78" },
      onsetDateTime: "1975-12-19T02:16:59-05:00",
      abatementDateTime: "1978-10-06T03:39:26-04:00",
      recordedDate: "1975-12-19T02:16:59-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:f4b940a2-e88b-c10f-fa72-eccba5081e31",
    resource: {
      resourceType: "Condition",
      id: "f4b940a2-e88b-c10f-fa72-eccba5081e31",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f3d0a0e4-3218-bbf7-717e-5d326d1b42bf" },
      onsetDateTime: "1978-10-06T03:39:26-04:00",
      abatementDateTime: "1980-10-10T03:19:59-04:00",
      recordedDate: "1978-10-06T03:39:26-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:6658e357-3343-33f6-0463-c3a96762ce3a",
    resource: {
      resourceType: "Condition",
      id: "6658e357-3343-33f6-0463-c3a96762ce3a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "active",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "162864005",
            display: "Body mass index 30+ - obesity (finding)",
          },
        ],
        text: "Body mass index 30+ - obesity (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:07ffec4d-5141-35f6-44fb-9f88c1223e2a" },
      onsetDateTime: "1982-10-15T02:40:58-04:00",
      recordedDate: "1982-10-15T02:40:58-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:6adf154e-bc1c-dc17-b297-d9e8801df1e3",
    resource: {
      resourceType: "Condition",
      id: "6adf154e-bc1c-dc17-b297-d9e8801df1e3",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "active",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "239872002",
            display: "Osteoarthritis of hip",
          },
        ],
        text: "Osteoarthritis of hip",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:d58530c3-bf6f-3109-beb2-7aace8344cf9" },
      onsetDateTime: "1985-02-23T01:40:58-05:00",
      recordedDate: "1985-02-23T01:40:58-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:e790cc0a-6623-71e6-a20d-29aa14682a95",
    resource: {
      resourceType: "Condition",
      id: "e790cc0a-6623-71e6-a20d-29aa14682a95",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:cc78a557-b4d0-642f-fa8e-70a154f184e8" },
      onsetDateTime: "1986-10-24T03:26:06-04:00",
      abatementDateTime: "1988-09-30T03:39:22-04:00",
      recordedDate: "1986-10-24T03:26:06-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:0a20e7e3-8272-8da9-c9aa-03e367650e10",
    resource: {
      resourceType: "Condition",
      id: "0a20e7e3-8272-8da9-c9aa-03e367650e10",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a6f0d27d-801a-0af6-5be2-8e9ef2930c1e" },
      onsetDateTime: "1988-09-30T03:39:22-04:00",
      abatementDateTime: "1989-10-06T03:25:52-04:00",
      recordedDate: "1988-09-30T03:39:22-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:cca52410-7ae1-65a7-0739-3bc01168dce3",
    resource: {
      resourceType: "Condition",
      id: "cca52410-7ae1-65a7-0739-3bc01168dce3",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b82c0a84-cd96-d86d-5812-c73e3794af9c" },
      onsetDateTime: "1990-10-12T03:22:25-04:00",
      abatementDateTime: "1991-10-18T03:38:53-04:00",
      recordedDate: "1990-10-12T03:22:25-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:1e273ea7-4ab4-f6de-253a-ad63da2540bd",
    resource: {
      resourceType: "Condition",
      id: "1e273ea7-4ab4-f6de-253a-ad63da2540bd",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:baf9d9d4-62ba-4e7b-0e8f-ca4409adc107" },
      onsetDateTime: "1991-10-18T03:38:53-04:00",
      abatementDateTime: "1992-10-23T03:22:20-04:00",
      recordedDate: "1991-10-18T03:38:53-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:68fee72a-3caa-7b8c-7621-f70f02e75af5",
    resource: {
      resourceType: "Condition",
      id: "68fee72a-3caa-7b8c-7621-f70f02e75af5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "active",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "266948004",
            display: "Has a criminal record (finding)",
          },
        ],
        text: "Has a criminal record (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:baf9d9d4-62ba-4e7b-0e8f-ca4409adc107" },
      onsetDateTime: "1991-10-18T03:38:53-04:00",
      recordedDate: "1991-10-18T03:38:53-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:f2df878a-d26f-5ea6-6ab3-e7cc58f92016",
    resource: {
      resourceType: "Condition",
      id: "f2df878a-d26f-5ea6-6ab3-e7cc58f92016",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:cf267831-5a5f-01b0-79f9-3e84a5c9ef4c" },
      onsetDateTime: "1993-10-29T03:40:43-04:00",
      abatementDateTime: "1994-11-04T02:24:20-05:00",
      recordedDate: "1993-10-29T03:40:43-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe",
    resource: {
      resourceType: "Condition",
      id: "9eb5cf11-05c4-4300-0296-b5a7dec23ebe",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "active",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "55822004",
            display: "Hyperlipidemia",
          },
        ],
        text: "Hyperlipidemia",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:dd53132e-bce0-5363-1a6d-29ec0933cfc6" },
      onsetDateTime: "1994-11-04T01:40:58-05:00",
      recordedDate: "1994-11-04T01:40:58-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:9b095b26-0a77-a87c-3f25-4e64aa264ad3",
    resource: {
      resourceType: "Condition",
      id: "9b095b26-0a77-a87c-3f25-4e64aa264ad3",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:1b75fab2-0e5e-8169-a796-be72bd4d5bcd" },
      onsetDateTime: "1995-11-10T02:39:47-05:00",
      abatementDateTime: "1996-11-15T02:23:10-05:00",
      recordedDate: "1995-11-10T02:39:47-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:c0f4c61a-7f86-cada-e986-f5bcbb82ac40",
    resource: {
      resourceType: "Condition",
      id: "c0f4c61a-7f86-cada-e986-f5bcbb82ac40",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:718fa39f-ba82-2900-67fa-3dba15c61ffa" },
      onsetDateTime: "1996-11-15T02:23:10-05:00",
      abatementDateTime: "1997-11-21T02:26:57-05:00",
      recordedDate: "1996-11-15T02:23:10-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:09103d8a-7e17-a28d-f708-8f15e24a5135",
    resource: {
      resourceType: "Condition",
      id: "09103d8a-7e17-a28d-f708-8f15e24a5135",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:495d60aa-d26c-964a-ea81-a109ea280cad" },
      onsetDateTime: "1997-11-21T02:26:57-05:00",
      abatementDateTime: "1998-11-27T02:13:17-05:00",
      recordedDate: "1997-11-21T02:26:57-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:a610d23c-e460-4b0a-08c9-8b5292239d2a",
    resource: {
      resourceType: "Condition",
      id: "a610d23c-e460-4b0a-08c9-8b5292239d2a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:9bec8f7b-081f-26e5-22ad-290ec7e5fa28" },
      onsetDateTime: "1998-11-27T02:13:17-05:00",
      abatementDateTime: "1999-12-03T02:20:49-05:00",
      recordedDate: "1998-11-27T02:13:17-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:a5a0a00f-9f4f-91b5-7373-4945199efbc3",
    resource: {
      resourceType: "Condition",
      id: "a5a0a00f-9f4f-91b5-7373-4945199efbc3",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "423315002",
            display: "Limited social contact (finding)",
          },
        ],
        text: "Limited social contact (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:9bec8f7b-081f-26e5-22ad-290ec7e5fa28" },
      onsetDateTime: "1998-11-27T02:13:17-05:00",
      abatementDateTime: "2021-04-02T03:32:46-04:00",
      recordedDate: "1998-11-27T02:13:17-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:d16aeb2b-cefe-8750-b0ab-0cbb8615a197",
    resource: {
      resourceType: "Condition",
      id: "d16aeb2b-cefe-8750-b0ab-0cbb8615a197",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:784cf40a-63a4-811c-7a48-76166a7532df" },
      onsetDateTime: "1999-12-03T02:20:49-05:00",
      abatementDateTime: "2000-12-08T02:16:16-05:00",
      recordedDate: "1999-12-03T02:20:49-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:06183308-4c45-910d-fd4f-d8241b728092",
    resource: {
      resourceType: "Condition",
      id: "06183308-4c45-910d-fd4f-d8241b728092",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:67eace0b-9f1e-5b52-0c1f-4c1b91626ca0" },
      onsetDateTime: "2001-12-14T02:32:10-05:00",
      abatementDateTime: "2002-12-20T02:25:14-05:00",
      recordedDate: "2001-12-14T02:32:10-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:92aba35f-d6ea-87fb-146f-949cede3156a",
    resource: {
      resourceType: "Condition",
      id: "92aba35f-d6ea-87fb-146f-949cede3156a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:6c46bd34-4e70-4fed-1b47-d0bc19abebf8" },
      onsetDateTime: "2003-12-26T02:22:17-05:00",
      abatementDateTime: "2004-12-31T02:31:52-05:00",
      recordedDate: "2003-12-26T02:22:17-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:6be4dddc-ce63-b253-91ca-21d5f8532914",
    resource: {
      resourceType: "Condition",
      id: "6be4dddc-ce63-b253-91ca-21d5f8532914",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:55eb54d4-94a2-35f9-5396-a3184da89585" },
      onsetDateTime: "2004-12-31T02:31:52-05:00",
      abatementDateTime: "2006-01-06T02:25:40-05:00",
      recordedDate: "2004-12-31T02:31:52-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:7b8bf310-0109-5bce-46b2-6c73a3845e8f",
    resource: {
      resourceType: "Condition",
      id: "7b8bf310-0109-5bce-46b2-6c73a3845e8f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:e8bc1e87-0c82-b107-3fa9-8ac889079795" },
      onsetDateTime: "2007-01-12T02:38:28-05:00",
      abatementDateTime: "2008-01-18T02:14:10-05:00",
      recordedDate: "2007-01-12T02:38:28-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:32a57231-cb64-75a0-c102-f68113c588ae",
    resource: {
      resourceType: "Condition",
      id: "32a57231-cb64-75a0-c102-f68113c588ae",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a741082d-de56-2dcc-c2bc-9e2d734cec10" },
      onsetDateTime: "2009-01-23T02:37:07-05:00",
      abatementDateTime: "2010-01-29T02:28:56-05:00",
      recordedDate: "2009-01-23T02:37:07-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:f23d3622-0b93-5796-8d85-5043a3d6ac86",
    resource: {
      resourceType: "Condition",
      id: "f23d3622-0b93-5796-8d85-5043a3d6ac86",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:e1c4709a-b1a2-d143-3564-eafbc2cfa0b9" },
      onsetDateTime: "2011-02-04T02:25:08-05:00",
      abatementDateTime: "2012-02-10T02:15:08-05:00",
      recordedDate: "2011-02-04T02:25:08-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:dd07f044-1b00-666d-976a-497dd86d28da",
    resource: {
      resourceType: "Condition",
      id: "dd07f044-1b00-666d-976a-497dd86d28da",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "741062008",
            display: "Not in labor force (finding)",
          },
        ],
        text: "Not in labor force (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
      onsetDateTime: "2012-02-10T02:15:08-05:00",
      abatementDateTime: "2013-02-15T02:31:40-05:00",
      recordedDate: "2012-02-10T02:15:08-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:8ee81c17-4e1c-b740-6c80-286c80f994ec",
    resource: {
      resourceType: "Condition",
      id: "8ee81c17-4e1c-b740-6c80-286c80f994ec",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "73595000",
            display: "Stress (finding)",
          },
        ],
        text: "Stress (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
      onsetDateTime: "2012-02-10T02:15:08-05:00",
      abatementDateTime: "2013-02-15T02:31:40-05:00",
      recordedDate: "2012-02-10T02:15:08-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:18a5a5fa-5bcf-fa3c-4ff7-784105a8428e",
    resource: {
      resourceType: "Condition",
      id: "18a5a5fa-5bcf-fa3c-4ff7-784105a8428e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      onsetDateTime: "2013-02-15T02:31:40-05:00",
      abatementDateTime: "2014-02-21T02:24:36-05:00",
      recordedDate: "2013-02-15T02:31:40-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:a7d570a8-c3af-59af-ea8d-fba9f84e27a0",
    resource: {
      resourceType: "Condition",
      id: "a7d570a8-c3af-59af-ea8d-fba9f84e27a0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "active",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "278860009",
            display: "Chronic low back pain (finding)",
          },
        ],
        text: "Chronic low back pain (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a1aa9e96-e503-95ca-5897-96581cf9dcf5" },
      onsetDateTime: "2014-02-02T01:40:58-05:00",
      recordedDate: "2014-02-02T01:40:58-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:074c2b59-28dc-a18e-70a1-a4a7b89badcf",
    resource: {
      resourceType: "Condition",
      id: "074c2b59-28dc-a18e-70a1-a4a7b89badcf",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "active",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "203082005",
            display: "Fibromyalgia (disorder)",
          },
        ],
        text: "Fibromyalgia (disorder)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a1aa9e96-e503-95ca-5897-96581cf9dcf5" },
      onsetDateTime: "2014-02-02T01:40:58-05:00",
      recordedDate: "2014-02-02T01:40:58-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:971a931d-3440-715a-a9e3-bdaf39f821aa",
    resource: {
      resourceType: "Condition",
      id: "971a931d-3440-715a-a9e3-bdaf39f821aa",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160904001",
            display: "Part-time employment (finding)",
          },
        ],
        text: "Part-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      onsetDateTime: "2014-02-21T02:24:36-05:00",
      abatementDateTime: "2015-02-27T02:39:07-05:00",
      recordedDate: "2014-02-21T02:24:36-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:0a692b16-b02c-78e7-d0a0-f36a38c3d14d",
    resource: {
      resourceType: "Condition",
      id: "0a692b16-b02c-78e7-d0a0-f36a38c3d14d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "706893006",
            display: "Victim of intimate partner abuse (finding)",
          },
        ],
        text: "Victim of intimate partner abuse (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      onsetDateTime: "2014-02-21T02:24:36-05:00",
      abatementDateTime: "2015-02-27T02:39:07-05:00",
      recordedDate: "2014-02-21T02:24:36-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:f0528934-1d9e-63de-0358-2c0e1c24c1c4",
    resource: {
      resourceType: "Condition",
      id: "f0528934-1d9e-63de-0358-2c0e1c24c1c4",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "active",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "49436004",
            display: "Atrial Fibrillation",
          },
        ],
        text: "Atrial Fibrillation",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      onsetDateTime: "2015-02-27T01:40:58-05:00",
      recordedDate: "2015-02-27T01:40:58-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:21e2b927-a953-c153-fbab-31092d30b61e",
    resource: {
      resourceType: "Condition",
      id: "21e2b927-a953-c153-fbab-31092d30b61e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160904001",
            display: "Part-time employment (finding)",
          },
        ],
        text: "Part-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      onsetDateTime: "2015-02-27T02:39:07-05:00",
      abatementDateTime: "2016-03-04T02:17:53-05:00",
      recordedDate: "2015-02-27T02:39:07-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:de15e96a-2b1e-0506-c32d-59c7bc63d039",
    resource: {
      resourceType: "Condition",
      id: "de15e96a-2b1e-0506-c32d-59c7bc63d039",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      onsetDateTime: "2016-03-04T02:17:53-05:00",
      abatementDateTime: "2017-03-10T02:25:37-05:00",
      recordedDate: "2016-03-04T02:17:53-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:c4e3ba64-4b4f-8f07-22ff-636115d64408",
    resource: {
      resourceType: "Condition",
      id: "c4e3ba64-4b4f-8f07-22ff-636115d64408",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "73595000",
            display: "Stress (finding)",
          },
        ],
        text: "Stress (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      onsetDateTime: "2016-03-04T02:17:53-05:00",
      abatementDateTime: "2021-04-02T03:32:46-04:00",
      recordedDate: "2016-03-04T02:17:53-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:bb03c85d-dfee-464c-4cf7-d1c69b9f5572",
    resource: {
      resourceType: "Condition",
      id: "bb03c85d-dfee-464c-4cf7-d1c69b9f5572",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      onsetDateTime: "2017-03-10T02:25:37-05:00",
      abatementDateTime: "2018-03-16T03:40:36-04:00",
      recordedDate: "2017-03-10T02:25:37-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:4dd2f094-2ceb-71b8-6f3a-41b4a812d629",
    resource: {
      resourceType: "Condition",
      id: "4dd2f094-2ceb-71b8-6f3a-41b4a812d629",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "424393004",
            display: "Reports of violence in the environment (finding)",
          },
        ],
        text: "Reports of violence in the environment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      onsetDateTime: "2017-03-10T02:25:37-05:00",
      abatementDateTime: "2019-03-22T03:27:57-04:00",
      recordedDate: "2017-03-10T02:25:37-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:1af2b5bb-807c-4789-8dce-bbe4fd205ae6",
    resource: {
      resourceType: "Condition",
      id: "1af2b5bb-807c-4789-8dce-bbe4fd205ae6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "195662009",
            display: "Acute viral pharyngitis (disorder)",
          },
        ],
        text: "Acute viral pharyngitis (disorder)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:9ccbf5a3-78c2-dd31-5e05-6ad80a34e923" },
      onsetDateTime: "2017-06-07T13:40:58-04:00",
      abatementDateTime: "2017-06-15T06:40:58-04:00",
      recordedDate: "2017-06-07T13:40:58-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:f0fd12ce-22db-3c13-72f7-e81db2a343e1",
    resource: {
      resourceType: "Condition",
      id: "f0fd12ce-22db-3c13-72f7-e81db2a343e1",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      onsetDateTime: "2018-03-16T03:40:36-04:00",
      abatementDateTime: "2019-03-22T03:27:57-04:00",
      recordedDate: "2018-03-16T03:40:36-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:f696ef9c-ced7-0d83-c09a-0dc3eb8bc4f0",
    resource: {
      resourceType: "Condition",
      id: "f696ef9c-ced7-0d83-c09a-0dc3eb8bc4f0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      onsetDateTime: "2019-03-22T03:27:57-04:00",
      abatementDateTime: "2020-03-27T03:15:37-04:00",
      recordedDate: "2019-03-22T03:27:57-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:9a9025cd-d028-d66d-40b5-082b5896a770",
    resource: {
      resourceType: "Condition",
      id: "9a9025cd-d028-d66d-40b5-082b5896a770",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "resolved",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      onsetDateTime: "2020-03-27T03:15:37-04:00",
      abatementDateTime: "2021-04-02T03:32:46-04:00",
      recordedDate: "2020-03-27T03:15:37-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:fa5e6ef3-3f56-832b-6f21-5f789288a481",
    resource: {
      resourceType: "Condition",
      id: "fa5e6ef3-3f56-832b-6f21-5f789288a481",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
            code: "active",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160903007",
            display: "Full-time employment (finding)",
          },
        ],
        text: "Full-time employment (finding)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      onsetDateTime: "2021-04-02T03:32:46-04:00",
      recordedDate: "2021-04-02T03:32:46-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
];

export default entities;
