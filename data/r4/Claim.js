const entities = [
  {
    fullUrl: "urn:uuid:5c6abe04-e164-eb86-b0e1-5710e15054ff",
    resource: {
      resourceType: "Claim",
      id: "5c6abe04-e164-eb86-b0e1-5710e15054ff",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1944-04-23T02:40:58-04:00",
        end: "1944-04-23T03:40:58-04:00",
      },
      created: "1944-04-23T03:40:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        {
          sequence: 1,
          focal: true,
          coverage: { display: "Blue Cross Blue Shield" },
        },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "50849002",
                display: "Emergency room admission (procedure)",
              },
            ],
            text: "Emergency room admission (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:e8bc0159-8b0b-8ff7-b614-85a6a650cb26" },
          ],
        },
      ],
      total: { value: 129.16, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:33146222-85b6-d50f-4340-c69c08a862d1",
    resource: {
      resourceType: "Claim",
      id: "33146222-85b6-d50f-4340-c69c08a862d1",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1955-11-18T01:40:58-05:00",
        end: "1955-11-18T01:55:58-05:00",
      },
      created: "1955-11-18T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:7663291d-7763-5c77-227d-b36061ae3be2",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Anthem" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "410620009",
                display: "Well child visit (procedure)",
              },
            ],
            text: "Well child visit (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:e1f0cb6f-8192-04eb-72db-7c5c3eceef2d" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160968000",
                display: "Risk activity involvement (finding)",
              },
            ],
            text: "Risk activity involvement (finding)",
          },
        },
      ],
      total: { value: 1591.48, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:42f5313e-74a3-13bc-1597-499c0e1ff4cc",
    resource: {
      resourceType: "Claim",
      id: "42f5313e-74a3-13bc-1597-499c0e1ff4cc",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1956-11-23T01:40:58-05:00",
        end: "1956-11-23T01:55:58-05:00",
      },
      created: "1956-11-23T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:379841ea-5636-858b-f58b-3d2737d077e7",
          },
        },
        {
          sequence: 2,
          diagnosisReference: {
            reference: "urn:uuid:c5380b94-dad2-92f0-e2c4-bbeaca0834a2",
          },
        },
      ],
      insurance: [{ sequence: 1, focal: true, coverage: { display: "Aetna" } }],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:a63bab0b-bfa7-02f8-a81f-d134e8abae49" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
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
        },
        {
          sequence: 3,
          diagnosisSequence: [2],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 786.3299999999999, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:9923e930-0782-4de4-750f-b4cc4eaa9666",
    resource: {
      resourceType: "Claim",
      id: "9923e930-0782-4de4-750f-b4cc4eaa9666",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1957-11-29T01:40:58-05:00",
        end: "1957-11-29T01:55:58-05:00",
      },
      created: "1957-11-29T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:85830a3a-7efb-3a3d-5a96-abcca64a58f9",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "UnitedHealthcare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:ffe7916d-32bf-fd09-5444-3af0a42357ad" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 786.3299999999999, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:4526e5e9-d88f-d012-8b9b-f9dab5f765a8",
    resource: {
      resourceType: "Claim",
      id: "4526e5e9-d88f-d012-8b9b-f9dab5f765a8",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1960-12-02T01:40:58-05:00",
        end: "1960-12-02T01:55:58-05:00",
      },
      created: "1960-12-02T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:58ca645b-3295-4108-82f6-d87227ebf93d",
          },
        },
      ],
      insurance: [
        {
          sequence: 1,
          focal: true,
          coverage: { display: "Blue Cross Blue Shield" },
        },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:ab1b44a8-e592-358e-c82b-2ad93e761853" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 1554.57, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:ff9e1f97-507f-16a3-f0de-a3f11a43f5cd",
    resource: {
      resourceType: "Claim",
      id: "ff9e1f97-507f-16a3-f0de-a3f11a43f5cd",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1963-12-06T01:40:58-05:00",
        end: "1963-12-06T01:55:58-05:00",
      },
      created: "1963-12-06T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:67ab0d9b-7bbf-38eb-085d-8c66f42acb16",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Cigna Health" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:946b1ccf-b3fe-73e0-89fe-5c4eca918fbd" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 1373.19, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:71b75f19-2bd7-3295-444b-e00b04e43954",
    resource: {
      resourceType: "Claim",
      id: "71b75f19-2bd7-3295-444b-e00b04e43954",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1966-12-09T01:40:58-05:00",
        end: "1966-12-09T01:55:58-05:00",
      },
      created: "1966-12-09T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:9d38fc8f-eadb-2d63-abb0-d04e8e346ab1",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "UnitedHealthcare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:a13656cd-5139-6065-fb02-e396ade6da0f" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 786.3299999999999, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:176f5583-f5c6-cb0c-54c7-2076eb461f7e",
    resource: {
      resourceType: "Claim",
      id: "176f5583-f5c6-cb0c-54c7-2076eb461f7e",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1969-12-12T01:40:58-05:00",
        end: "1969-12-12T01:55:58-05:00",
      },
      created: "1969-12-12T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:309f5a46-686f-dd52-c6d2-e65fa4c5f03e",
          },
        },
      ],
      insurance: [{ sequence: 1, focal: true, coverage: { display: "Aetna" } }],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:c3c7e2bb-ffc3-a8a8-c1aa-5d4849c89735" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 1686.05, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:7b3f03a1-a5f6-2ecf-30cd-9059aec9c1d3",
    resource: {
      resourceType: "Claim",
      id: "7b3f03a1-a5f6-2ecf-30cd-9059aec9c1d3",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1972-12-15T01:40:58-05:00",
        end: "1972-12-15T01:55:58-05:00",
      },
      created: "1972-12-15T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:faae01bb-4cf5-047c-baa6-95e35fd51572",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Anthem" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:78d2eb6e-cb2c-b0d9-eef1-81ced734b85d" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 1274.44, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:84a3716f-292d-75c9-794b-572bb634219c",
    resource: {
      resourceType: "Claim",
      id: "84a3716f-292d-75c9-794b-572bb634219c",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1975-12-19T01:40:58-05:00",
        end: "1975-12-19T01:55:58-05:00",
      },
      created: "1975-12-19T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:6a224f62-1840-b50d-c907-46b671e8eb04",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Anthem" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:a195ade9-6085-554c-a315-88ec3974dd78" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 1363.53, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:ba2db59b-d2e4-b28b-ea79-ac38b3c27567",
    resource: {
      resourceType: "Claim",
      id: "ba2db59b-d2e4-b28b-ea79-ac38b3c27567",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1978-10-06T02:40:58-04:00",
        end: "1978-10-06T02:55:58-04:00",
      },
      created: "1978-10-06T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:f4b940a2-e88b-c10f-fa72-eccba5081e31",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Cigna Health" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:f3d0a0e4-3218-bbf7-717e-5d326d1b42bf" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 786.3299999999999, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:77094d0d-8414-33c7-5f63-ba2043240688",
    resource: {
      resourceType: "Claim",
      id: "77094d0d-8414-33c7-5f63-ba2043240688",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1982-10-15T02:40:58-04:00",
        end: "1982-10-15T02:55:58-04:00",
      },
      created: "1982-10-15T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:6658e357-3343-33f6-0463-c3a96762ce3a",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Cigna Health" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:07ffec4d-5141-35f6-44fb-9f88c1223e2a" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162864005",
                display: "Body mass index 30+ - obesity (finding)",
              },
            ],
            text: "Body mass index 30+ - obesity (finding)",
          },
        },
      ],
      total: { value: 786.3299999999999, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:c345c5fc-b437-46e5-7722-2ccff6412a95",
    resource: {
      resourceType: "Claim",
      id: "c345c5fc-b437-46e5-7722-2ccff6412a95",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1985-02-23T01:40:58-05:00",
        end: "1985-02-23T01:55:58-05:00",
      },
      created: "1985-02-23T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:0704950d-46a2-0695-09bf-960cbb869356",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "UnitedHealthcare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "185347001",
                display: "Encounter for problem",
              },
            ],
            text: "Encounter for problem",
          },
          encounter: [
            { reference: "urn:uuid:d58530c3-bf6f-3109-beb2-7aace8344cf9" },
          ],
        },
      ],
      total: { value: 0, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:1f79fa2d-4161-fbff-c10c-e9d6e9e0379e",
    resource: {
      resourceType: "Claim",
      id: "1f79fa2d-4161-fbff-c10c-e9d6e9e0379e",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1985-02-23T01:40:58-05:00",
        end: "1985-02-23T01:55:58-05:00",
      },
      created: "1985-02-23T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:6adf154e-bc1c-dc17-b297-d9e8801df1e3",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "UnitedHealthcare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "185347001",
                display: "Encounter for problem",
              },
            ],
            text: "Encounter for problem",
          },
          encounter: [
            { reference: "urn:uuid:d58530c3-bf6f-3109-beb2-7aace8344cf9" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "239872002",
                display: "Osteoarthritis of hip",
              },
            ],
            text: "Osteoarthritis of hip",
          },
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:ba54910d-8630-3f1c-90cd-19c15f531b9c",
    resource: {
      resourceType: "Claim",
      id: "ba54910d-8630-3f1c-90cd-19c15f531b9c",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1986-10-24T02:40:58-04:00",
        end: "1986-10-24T02:55:58-04:00",
      },
      created: "1986-10-24T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:e790cc0a-6623-71e6-a20d-29aa14682a95",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Humana" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:cc78a557-b4d0-642f-fa8e-70a154f184e8" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 786.3299999999999, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:021bd82a-b60c-c2a4-a057-be1e1898f647",
    resource: {
      resourceType: "Claim",
      id: "021bd82a-b60c-c2a4-a057-be1e1898f647",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1988-09-30T02:40:58-04:00",
        end: "1988-09-30T02:55:58-04:00",
      },
      created: "1988-09-30T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:0a20e7e3-8272-8da9-c9aa-03e367650e10",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Humana" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "185349003",
                display: "Encounter for 'check-up'",
              },
            ],
            text: "Encounter for 'check-up'",
          },
          encounter: [
            { reference: "urn:uuid:a6f0d27d-801a-0af6-5be2-8e9ef2930c1e" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 14791.14, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:7b13a72f-333e-2c72-4441-0d9598ea6059",
    resource: {
      resourceType: "Claim",
      id: "7b13a72f-333e-2c72-4441-0d9598ea6059",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1990-10-12T02:40:58-04:00",
        end: "1990-10-12T02:55:58-04:00",
      },
      created: "1990-10-12T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:cca52410-7ae1-65a7-0739-3bc01168dce3",
          },
        },
      ],
      insurance: [
        {
          sequence: 1,
          focal: true,
          coverage: { display: "Blue Cross Blue Shield" },
        },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:b82c0a84-cd96-d86d-5812-c73e3794af9c" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 1210.21, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:614155af-d272-f940-0ad2-0005984eb54d",
    resource: {
      resourceType: "Claim",
      id: "614155af-d272-f940-0ad2-0005984eb54d",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1991-10-18T02:40:58-04:00",
        end: "1991-10-18T02:55:58-04:00",
      },
      created: "1991-10-18T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:1e273ea7-4ab4-f6de-253a-ad63da2540bd",
          },
        },
        {
          sequence: 2,
          diagnosisReference: {
            reference: "urn:uuid:68fee72a-3caa-7b8c-7621-f70f02e75af5",
          },
        },
      ],
      insurance: [{ sequence: 1, focal: true, coverage: { display: "Aetna" } }],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:baf9d9d4-62ba-4e7b-0e8f-ca4409adc107" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
        {
          sequence: 3,
          diagnosisSequence: [2],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "266948004",
                display: "Has a criminal record (finding)",
              },
            ],
            text: "Has a criminal record (finding)",
          },
        },
      ],
      total: { value: 786.3299999999999, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:126fbd83-a546-43c1-c3f6-a7a9b2ef983b",
    resource: {
      resourceType: "Claim",
      id: "126fbd83-a546-43c1-c3f6-a7a9b2ef983b",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1993-10-29T02:40:58-04:00",
        end: "1993-10-29T02:55:58-04:00",
      },
      created: "1993-10-29T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:f2df878a-d26f-5ea6-6ab3-e7cc58f92016",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Humana" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:cf267831-5a5f-01b0-79f9-3e84a5c9ef4c" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 1395.31, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:bf108e6e-0f30-c125-0ba5-2c08f89d9080",
    resource: {
      resourceType: "Claim",
      id: "bf108e6e-0f30-c125-0ba5-2c08f89d9080",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1994-11-04T01:40:58-05:00",
        end: "1994-11-04T01:55:58-05:00",
      },
      created: "1994-11-04T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "UnitedHealthcare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:dd53132e-bce0-5363-1a6d-29ec0933cfc6" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "55822004",
                display: "Hyperlipidemia",
              },
            ],
            text: "Hyperlipidemia",
          },
        },
      ],
      total: { value: 786.3299999999999, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:da1b87f4-2c7e-2f1e-e890-399292e411da",
    resource: {
      resourceType: "Claim",
      id: "da1b87f4-2c7e-2f1e-e890-399292e411da",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1994-11-25T01:40:58-05:00",
        end: "1994-11-25T01:55:58-05:00",
      },
      created: "1994-11-25T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:dde0b1fc-3997-f177-a91b-1800df4fd44d",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "UnitedHealthcare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:0d452394-2b0c-1f9e-da52-1af68a0bb062" },
          ],
        },
      ],
      total: { value: 0.03, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:1940b0c1-eee8-9d11-80ae-4f85b1a6eee5",
    resource: {
      resourceType: "Claim",
      id: "1940b0c1-eee8-9d11-80ae-4f85b1a6eee5",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1994-11-25T01:40:58-05:00",
        end: "1994-11-25T01:55:58-05:00",
      },
      created: "1994-11-25T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "UnitedHealthcare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:0d452394-2b0c-1f9e-da52-1af68a0bb062" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:fa26bf8b-e079-7474-71e2-19b9bdec3aec",
    resource: {
      resourceType: "Claim",
      id: "fa26bf8b-e079-7474-71e2-19b9bdec3aec",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1995-11-10T01:40:58-05:00",
        end: "1995-11-10T01:55:58-05:00",
      },
      created: "1995-11-10T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:9b095b26-0a77-a87c-3f25-4e64aa264ad3",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Humana" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:1b75fab2-0e5e-8169-a796-be72bd4d5bcd" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 1587.1399999999999, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:b3aa5a3f-8ba8-568b-0bc5-3bf1f14c29d7",
    resource: {
      resourceType: "Claim",
      id: "b3aa5a3f-8ba8-568b-0bc5-3bf1f14c29d7",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1995-11-25T01:40:58-05:00",
        end: "1995-11-25T01:55:58-05:00",
      },
      created: "1995-11-25T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:791ad525-e28c-801e-61a1-a04a4c76dd0e",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Humana" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:965abeb3-4174-d8ba-9515-a7b3e83d9172" },
          ],
        },
      ],
      total: { value: 0.02, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:d66cfae2-1d6c-cfb5-a697-b57f75d0d064",
    resource: {
      resourceType: "Claim",
      id: "d66cfae2-1d6c-cfb5-a697-b57f75d0d064",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1995-11-25T01:40:58-05:00",
        end: "1995-11-25T01:55:58-05:00",
      },
      created: "1995-11-25T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Humana" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:965abeb3-4174-d8ba-9515-a7b3e83d9172" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:048f3d75-360d-183b-31c3-292828b43291",
    resource: {
      resourceType: "Claim",
      id: "048f3d75-360d-183b-31c3-292828b43291",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1996-11-15T01:40:58-05:00",
        end: "1996-11-15T01:55:58-05:00",
      },
      created: "1996-11-15T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:c0f4c61a-7f86-cada-e986-f5bcbb82ac40",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Cigna Health" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:718fa39f-ba82-2900-67fa-3dba15c61ffa" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 1384.54, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:2a2d1773-a96d-8754-0211-841d0ae7e748",
    resource: {
      resourceType: "Claim",
      id: "2a2d1773-a96d-8754-0211-841d0ae7e748",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1996-11-24T01:40:58-05:00",
        end: "1996-11-24T01:55:58-05:00",
      },
      created: "1996-11-24T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:527675d4-2b6d-0e0b-fa7e-29dd0e483f59",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Cigna Health" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:2333b1cd-ad09-3073-0696-ee9c140737b6" },
          ],
        },
      ],
      total: { value: 0.03, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:951f8487-d90d-0282-f513-d3b80d7668ad",
    resource: {
      resourceType: "Claim",
      id: "951f8487-d90d-0282-f513-d3b80d7668ad",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1996-11-24T01:40:58-05:00",
        end: "1996-11-24T01:55:58-05:00",
      },
      created: "1996-11-24T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Cigna Health" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:2333b1cd-ad09-3073-0696-ee9c140737b6" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:82011c41-c180-d0e6-0f22-0315f0ef9276",
    resource: {
      resourceType: "Claim",
      id: "82011c41-c180-d0e6-0f22-0315f0ef9276",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1997-11-24T01:40:58-05:00",
        end: "1997-11-24T01:55:58-05:00",
      },
      created: "1997-11-24T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:e18b639e-bb51-a85a-a6d8-60b5193ca8aa",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "UnitedHealthcare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:495d60aa-d26c-964a-ea81-a109ea280cad" },
          ],
        },
      ],
      total: { value: 0.03, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:96f68490-bac2-6c66-4be4-ebce9dc6cb09",
    resource: {
      resourceType: "Claim",
      id: "96f68490-bac2-6c66-4be4-ebce9dc6cb09",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1997-11-24T01:40:58-05:00",
        end: "1997-11-24T01:55:58-05:00",
      },
      created: "1997-11-24T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:09103d8a-7e17-a28d-f708-8f15e24a5135",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "UnitedHealthcare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:495d60aa-d26c-964a-ea81-a109ea280cad" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:1c093da9-0258-6d52-955a-460c8b759c01",
    resource: {
      resourceType: "Claim",
      id: "1c093da9-0258-6d52-955a-460c8b759c01",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1998-11-24T01:40:58-05:00",
        end: "1998-11-24T01:55:58-05:00",
      },
      created: "1998-11-24T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:8d0d4331-70b0-c3be-627b-d40d53ab62cc",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "UnitedHealthcare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:9bec8f7b-081f-26e5-22ad-290ec7e5fa28" },
          ],
        },
      ],
      total: { value: 0.02, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:465d1609-b09a-f0de-042b-473121f5cde5",
    resource: {
      resourceType: "Claim",
      id: "465d1609-b09a-f0de-042b-473121f5cde5",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1998-11-24T01:40:58-05:00",
        end: "1998-11-24T01:55:58-05:00",
      },
      created: "1998-11-24T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:a610d23c-e460-4b0a-08c9-8b5292239d2a",
          },
        },
        {
          sequence: 2,
          diagnosisReference: {
            reference: "urn:uuid:a5a0a00f-9f4f-91b5-7373-4945199efbc3",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "UnitedHealthcare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:9bec8f7b-081f-26e5-22ad-290ec7e5fa28" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
        {
          sequence: 3,
          diagnosisSequence: [2],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "423315002",
                display: "Limited social contact (finding)",
              },
            ],
            text: "Limited social contact (finding)",
          },
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:717ad16b-7b91-c1e3-4ebf-e46b02cbdd92",
    resource: {
      resourceType: "Claim",
      id: "717ad16b-7b91-c1e3-4ebf-e46b02cbdd92",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1999-11-24T01:40:58-05:00",
        end: "1999-11-24T01:55:58-05:00",
      },
      created: "1999-11-24T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:dfb6edcd-567c-9ba5-3039-4a773c91796a",
      },
      insurance: [{ sequence: 1, focal: true, coverage: { display: "Aetna" } }],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:1478d811-530a-72f3-d291-2bbdea8a5fde" },
          ],
        },
      ],
      total: { value: 0.02, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:e499c5b5-7e2f-c5a7-4153-84ed76090f8a",
    resource: {
      resourceType: "Claim",
      id: "e499c5b5-7e2f-c5a7-4153-84ed76090f8a",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1999-11-24T01:40:58-05:00",
        end: "1999-11-24T01:55:58-05:00",
      },
      created: "1999-11-24T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [{ sequence: 1, focal: true, coverage: { display: "Aetna" } }],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:1478d811-530a-72f3-d291-2bbdea8a5fde" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:4814150c-e52b-9f05-f468-fc7e1b53146e",
    resource: {
      resourceType: "Claim",
      id: "4814150c-e52b-9f05-f468-fc7e1b53146e",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "1999-12-03T01:40:58-05:00",
        end: "1999-12-03T01:55:58-05:00",
      },
      created: "1999-12-03T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:d16aeb2b-cefe-8750-b0ab-0cbb8615a197",
          },
        },
      ],
      insurance: [{ sequence: 1, focal: true, coverage: { display: "Aetna" } }],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:784cf40a-63a4-811c-7a48-76166a7532df" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 1238.37, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:03817119-708e-87c7-0a39-9ae9063129aa",
    resource: {
      resourceType: "Claim",
      id: "03817119-708e-87c7-0a39-9ae9063129aa",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2000-11-23T01:40:58-05:00",
        end: "2000-11-23T01:55:58-05:00",
      },
      created: "2000-11-23T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:1bcef6ab-219e-f255-8fcf-a6e22deaa633",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Anthem" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:07b6f41f-e852-a015-9767-7bc44503fb3e" },
          ],
        },
      ],
      total: { value: 0.02, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:e261bc5b-0ca2-9c35-2bfa-9cf968143b8f",
    resource: {
      resourceType: "Claim",
      id: "e261bc5b-0ca2-9c35-2bfa-9cf968143b8f",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2000-11-23T01:40:58-05:00",
        end: "2000-11-23T01:55:58-05:00",
      },
      created: "2000-11-23T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Anthem" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:07b6f41f-e852-a015-9767-7bc44503fb3e" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:3c6f9eeb-e686-29df-3a80-afa6e0cd9c6c",
    resource: {
      resourceType: "Claim",
      id: "3c6f9eeb-e686-29df-3a80-afa6e0cd9c6c",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2001-11-23T01:40:58-05:00",
        end: "2001-11-23T01:55:58-05:00",
      },
      created: "2001-11-23T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:0d6c35fc-3f0c-dc6b-6b2b-d401445f24f6",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "UnitedHealthcare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:2f8bd24b-1c19-084c-3350-c62c7b9c9ace" },
          ],
        },
      ],
      total: { value: 0.03, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:bf8ca560-a4cb-8840-2825-92e4b934b58a",
    resource: {
      resourceType: "Claim",
      id: "bf8ca560-a4cb-8840-2825-92e4b934b58a",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2001-11-23T01:40:58-05:00",
        end: "2001-11-23T01:55:58-05:00",
      },
      created: "2001-11-23T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "UnitedHealthcare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:2f8bd24b-1c19-084c-3350-c62c7b9c9ace" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:a607d910-c842-0ee5-2862-66b46bb5d707",
    resource: {
      resourceType: "Claim",
      id: "a607d910-c842-0ee5-2862-66b46bb5d707",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2001-12-14T01:40:58-05:00",
        end: "2001-12-14T01:55:58-05:00",
      },
      created: "2001-12-14T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:06183308-4c45-910d-fd4f-d8241b728092",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "UnitedHealthcare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:67eace0b-9f1e-5b52-0c1f-4c1b91626ca0" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 786.3299999999999, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:13bd74c9-2831-dc46-2973-55a0318f6997",
    resource: {
      resourceType: "Claim",
      id: "13bd74c9-2831-dc46-2973-55a0318f6997",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2002-11-23T01:40:58-05:00",
        end: "2002-11-23T01:55:58-05:00",
      },
      created: "2002-11-23T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:8ed61652-eedb-401e-b846-27ffe1e626ac",
      },
      insurance: [
        {
          sequence: 1,
          focal: true,
          coverage: { display: "Blue Cross Blue Shield" },
        },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:0065e2e0-f9e1-13d2-7a75-8bad676cb53e" },
          ],
        },
      ],
      total: { value: 0.02, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:0b5d4716-88cb-66b7-6949-540e68d99d6b",
    resource: {
      resourceType: "Claim",
      id: "0b5d4716-88cb-66b7-6949-540e68d99d6b",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2002-11-23T01:40:58-05:00",
        end: "2002-11-23T01:55:58-05:00",
      },
      created: "2002-11-23T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        {
          sequence: 1,
          focal: true,
          coverage: { display: "Blue Cross Blue Shield" },
        },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:0065e2e0-f9e1-13d2-7a75-8bad676cb53e" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:27ff5255-6d02-a13f-a4f4-5a74c57110da",
    resource: {
      resourceType: "Claim",
      id: "27ff5255-6d02-a13f-a4f4-5a74c57110da",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2003-11-23T01:40:58-05:00",
        end: "2003-11-23T01:55:58-05:00",
      },
      created: "2003-11-23T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:71d4caf5-d381-b3a1-2ce0-4b9d0d705f68",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:1b000b85-ccb2-85e5-4228-caa08544105a" },
          ],
        },
      ],
      total: { value: 0.02, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:0024aac5-3da6-2c31-4644-ca258af9be00",
    resource: {
      resourceType: "Claim",
      id: "0024aac5-3da6-2c31-4644-ca258af9be00",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2003-11-23T01:40:58-05:00",
        end: "2003-11-23T01:55:58-05:00",
      },
      created: "2003-11-23T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:1b000b85-ccb2-85e5-4228-caa08544105a" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:f9645908-a4b1-cc73-5b0f-eb997ad3c227",
    resource: {
      resourceType: "Claim",
      id: "f9645908-a4b1-cc73-5b0f-eb997ad3c227",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2003-12-26T01:40:58-05:00",
        end: "2003-12-26T01:55:58-05:00",
      },
      created: "2003-12-26T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:92aba35f-d6ea-87fb-146f-949cede3156a",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:6c46bd34-4e70-4fed-1b47-d0bc19abebf8" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 786.3299999999999, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:eee8287a-5e77-15fd-bfba-c65ac3ba533c",
    resource: {
      resourceType: "Claim",
      id: "eee8287a-5e77-15fd-bfba-c65ac3ba533c",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2004-11-22T01:40:58-05:00",
        end: "2004-11-22T01:55:58-05:00",
      },
      created: "2004-11-22T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:a94777d9-843d-af76-ecb3-e6fea22e7e5a",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:bb71b8f5-15d4-337a-ab7f-310698989b95" },
          ],
        },
      ],
      total: { value: 0.02, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:cb895a30-6916-a401-1c83-1449d4f560df",
    resource: {
      resourceType: "Claim",
      id: "cb895a30-6916-a401-1c83-1449d4f560df",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2004-11-22T01:40:58-05:00",
        end: "2004-11-22T01:55:58-05:00",
      },
      created: "2004-11-22T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:bb71b8f5-15d4-337a-ab7f-310698989b95" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:b062c9e4-7c50-411a-e687-7e0b4bbbd1f3",
    resource: {
      resourceType: "Claim",
      id: "b062c9e4-7c50-411a-e687-7e0b4bbbd1f3",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2004-12-31T01:40:58-05:00",
        end: "2004-12-31T01:55:58-05:00",
      },
      created: "2004-12-31T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:6be4dddc-ce63-b253-91ca-21d5f8532914",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:55eb54d4-94a2-35f9-5396-a3184da89585" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 1366.74, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:2c35e9c5-42a3-98d8-eb09-1ca19bbf1ba3",
    resource: {
      resourceType: "Claim",
      id: "2c35e9c5-42a3-98d8-eb09-1ca19bbf1ba3",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2005-11-22T01:40:58-05:00",
        end: "2005-11-22T01:55:58-05:00",
      },
      created: "2005-11-22T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:49f52804-d5cd-e9da-3901-18dfdcc2ee1b",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:09103c57-d806-a5b3-bce1-e27a4311cd46" },
          ],
        },
      ],
      total: { value: 0.02, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:27189db6-260a-f7dc-c533-ac57fcebca44",
    resource: {
      resourceType: "Claim",
      id: "27189db6-260a-f7dc-c533-ac57fcebca44",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2005-11-22T01:40:58-05:00",
        end: "2005-11-22T01:55:58-05:00",
      },
      created: "2005-11-22T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:09103c57-d806-a5b3-bce1-e27a4311cd46" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:eb38472c-379a-ba57-2130-aa84a39ae24f",
    resource: {
      resourceType: "Claim",
      id: "eb38472c-379a-ba57-2130-aa84a39ae24f",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2006-11-22T01:40:58-05:00",
        end: "2006-11-22T01:55:58-05:00",
      },
      created: "2006-11-22T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:96389831-b458-f8fa-fe2a-8cb9270787a5",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:54ff763b-773d-17d9-5010-291d2e62dc59" },
          ],
        },
      ],
      total: { value: 0.03, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:3b8890d5-d15a-6df0-60c9-6ec5d31ac390",
    resource: {
      resourceType: "Claim",
      id: "3b8890d5-d15a-6df0-60c9-6ec5d31ac390",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2006-11-22T01:40:58-05:00",
        end: "2006-11-22T01:55:58-05:00",
      },
      created: "2006-11-22T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:54ff763b-773d-17d9-5010-291d2e62dc59" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:d0e06e22-13f4-0bc2-6942-feb722ce02e5",
    resource: {
      resourceType: "Claim",
      id: "d0e06e22-13f4-0bc2-6942-feb722ce02e5",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2007-01-12T01:40:58-05:00",
        end: "2007-01-12T01:55:58-05:00",
      },
      created: "2007-01-12T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:7b8bf310-0109-5bce-46b2-6c73a3845e8f",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:e8bc1e87-0c82-b107-3fa9-8ac889079795" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 786.3299999999999, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:9820f308-56fa-5e9f-5f2e-bbeb5f650704",
    resource: {
      resourceType: "Claim",
      id: "9820f308-56fa-5e9f-5f2e-bbeb5f650704",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2007-11-22T01:40:58-05:00",
        end: "2007-11-22T01:55:58-05:00",
      },
      created: "2007-11-22T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:cb7a403d-701f-be46-fbd5-16b0aec0647f",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:fcbad825-7d87-65a6-6edb-457d75cb4909" },
          ],
        },
      ],
      total: { value: 0.02, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:8e8ccb18-8ae9-cb8d-ce4c-7758473a2812",
    resource: {
      resourceType: "Claim",
      id: "8e8ccb18-8ae9-cb8d-ce4c-7758473a2812",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2007-11-22T01:40:58-05:00",
        end: "2007-11-22T01:55:58-05:00",
      },
      created: "2007-11-22T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:fcbad825-7d87-65a6-6edb-457d75cb4909" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:c2daf721-2b20-7902-7a38-3cc57ff0e6c5",
    resource: {
      resourceType: "Claim",
      id: "c2daf721-2b20-7902-7a38-3cc57ff0e6c5",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2008-11-21T01:40:58-05:00",
        end: "2008-11-21T01:55:58-05:00",
      },
      created: "2008-11-21T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:4e112b8a-0a64-db86-e29c-eb45aea32d2f",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:9afd5dd5-5d49-fbfd-8de1-467729f031df" },
          ],
        },
      ],
      total: { value: 0.02, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:434c0d79-e65f-f4a0-21bb-edd9c48fa361",
    resource: {
      resourceType: "Claim",
      id: "434c0d79-e65f-f4a0-21bb-edd9c48fa361",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2008-11-21T01:40:58-05:00",
        end: "2008-11-21T01:55:58-05:00",
      },
      created: "2008-11-21T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:9afd5dd5-5d49-fbfd-8de1-467729f031df" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:64ca2932-1065-823a-13f7-8dbb047b4482",
    resource: {
      resourceType: "Claim",
      id: "64ca2932-1065-823a-13f7-8dbb047b4482",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2009-01-23T01:40:58-05:00",
        end: "2009-01-23T01:55:58-05:00",
      },
      created: "2009-01-23T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:32a57231-cb64-75a0-c102-f68113c588ae",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:a741082d-de56-2dcc-c2bc-9e2d734cec10" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 1288.9699999999998, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:d93f7b39-ba4c-3290-4f08-3f70757ad390",
    resource: {
      resourceType: "Claim",
      id: "d93f7b39-ba4c-3290-4f08-3f70757ad390",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2009-11-21T01:40:58-05:00",
        end: "2009-11-21T01:55:58-05:00",
      },
      created: "2009-11-21T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:4b8092df-cd9e-bc9e-d199-a9987d38c4d9",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:32805baa-8f71-da8d-4b1a-6661022b0270" },
          ],
        },
      ],
      total: { value: 0.02, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:ce9cb072-6105-ec34-a0fa-d8420b602887",
    resource: {
      resourceType: "Claim",
      id: "ce9cb072-6105-ec34-a0fa-d8420b602887",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2009-11-21T01:40:58-05:00",
        end: "2009-11-21T01:55:58-05:00",
      },
      created: "2009-11-21T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:32805baa-8f71-da8d-4b1a-6661022b0270" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:ccb259da-2256-7bec-8740-4505744ed4d2",
    resource: {
      resourceType: "Claim",
      id: "ccb259da-2256-7bec-8740-4505744ed4d2",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2010-11-21T01:40:58-05:00",
        end: "2010-11-21T01:55:58-05:00",
      },
      created: "2010-11-21T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:5f80ad55-ba2c-6c38-b937-0dfeb50039df",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:e0df8625-5bef-8d32-c0cf-80ddea40b2bd" },
          ],
        },
      ],
      total: { value: 0.02, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:cb8d09cc-d605-ce6f-25f4-251ef25f4e7a",
    resource: {
      resourceType: "Claim",
      id: "cb8d09cc-d605-ce6f-25f4-251ef25f4e7a",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2010-11-21T01:40:58-05:00",
        end: "2010-11-21T01:55:58-05:00",
      },
      created: "2010-11-21T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:e0df8625-5bef-8d32-c0cf-80ddea40b2bd" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:ba73b024-a9a2-02be-266d-1910083d9fcf",
    resource: {
      resourceType: "Claim",
      id: "ba73b024-a9a2-02be-266d-1910083d9fcf",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2011-02-04T01:40:58-05:00",
        end: "2011-02-04T01:55:58-05:00",
      },
      created: "2011-02-04T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:f23d3622-0b93-5796-8d85-5043a3d6ac86",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:e1c4709a-b1a2-d143-3564-eafbc2cfa0b9" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
      ],
      total: { value: 786.3299999999999, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:e5f09dac-324e-7c25-b109-056bbe52d58d",
    resource: {
      resourceType: "Claim",
      id: "e5f09dac-324e-7c25-b109-056bbe52d58d",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2011-11-21T01:40:58-05:00",
        end: "2011-11-21T01:55:58-05:00",
      },
      created: "2011-11-21T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:1ee3982d-77b3-7e8f-e765-ae3cfef3d91e",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:7b15ad1a-24c8-0d45-c32f-9941233f3e20" },
          ],
        },
      ],
      total: { value: 0.02, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:07665841-df85-b8bc-3a5a-2800a4affcd8",
    resource: {
      resourceType: "Claim",
      id: "07665841-df85-b8bc-3a5a-2800a4affcd8",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2011-11-21T01:40:58-05:00",
        end: "2011-11-21T01:55:58-05:00",
      },
      created: "2011-11-21T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:7b15ad1a-24c8-0d45-c32f-9941233f3e20" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:947572a6-8f0b-8745-6722-4637879b3e12",
    resource: {
      resourceType: "Claim",
      id: "947572a6-8f0b-8745-6722-4637879b3e12",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2012-02-10T01:40:58-05:00",
        end: "2012-02-10T01:55:58-05:00",
      },
      created: "2012-02-10T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      supportingInfo: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claiminformationcategory",
                code: "info",
              },
            ],
          },
          valueReference: {
            reference: "urn:uuid:f6b7cf2b-92d3-76db-8835-49197b5d9f95",
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:dd07f044-1b00-666d-976a-497dd86d28da",
          },
        },
        {
          sequence: 2,
          diagnosisReference: {
            reference: "urn:uuid:8ee81c17-4e1c-b740-6c80-286c80f994ec",
          },
        },
      ],
      procedure: [
        {
          sequence: 1,
          procedureReference: {
            reference: "urn:uuid:3d29f9e3-3b1f-dceb-4b1a-eb75c517a0fc",
          },
        },
        {
          sequence: 2,
          procedureReference: {
            reference: "urn:uuid:6f8e43a5-b719-9806-a07a-0e8a79888f82",
          },
        },
        {
          sequence: 3,
          procedureReference: {
            reference: "urn:uuid:885764ed-c717-011d-b65a-0d566f748980",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
          ],
        },
        {
          sequence: 2,
          informationSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "140",
                display: "Influenza, seasonal, injectable, preservative free",
              },
            ],
            text: "Influenza, seasonal, injectable, preservative free",
          },
          net: { value: 140.52, currency: "USD" },
        },
        {
          sequence: 3,
          procedureSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710824005",
                display:
                  "Assessment of health and social care needs (procedure)",
              },
            ],
            text: "Assessment of health and social care needs (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 4,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "741062008",
                display: "Not in labor force (finding)",
              },
            ],
            text: "Not in labor force (finding)",
          },
        },
        {
          sequence: 5,
          diagnosisSequence: [2],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "73595000",
                display: "Stress (finding)",
              },
            ],
            text: "Stress (finding)",
          },
        },
        {
          sequence: 6,
          procedureSequence: [2],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "428211000124100",
                display: "Assessment of substance use (procedure)",
              },
            ],
            text: "Assessment of substance use (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 7,
          procedureSequence: [3],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "763302001",
                display:
                  "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)",
              },
            ],
            text: "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
      ],
      total: { value: 786.3299999999999, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:9f66bd36-1e46-ac54-3f39-9e70a61c2a6c",
    resource: {
      resourceType: "Claim",
      id: "9f66bd36-1e46-ac54-3f39-9e70a61c2a6c",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2012-11-20T01:40:58-05:00",
        end: "2012-11-20T01:55:58-05:00",
      },
      created: "2012-11-20T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:5e9728e8-ab4f-1d83-8320-72e8a9c0765f",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
          ],
        },
      ],
      total: { value: 0.03, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:9ddf0934-c65e-bfcc-ac13-cfd329ae519d",
    resource: {
      resourceType: "Claim",
      id: "9ddf0934-c65e-bfcc-ac13-cfd329ae519d",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2012-11-20T01:40:58-05:00",
        end: "2012-11-20T01:55:58-05:00",
      },
      created: "2012-11-20T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:18c106ae-1013-f85b-2526-c208bc18be9f",
    resource: {
      resourceType: "Claim",
      id: "18c106ae-1013-f85b-2526-c208bc18be9f",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2013-02-15T01:40:58-05:00",
        end: "2013-02-15T01:55:58-05:00",
      },
      created: "2013-02-15T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      supportingInfo: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claiminformationcategory",
                code: "info",
              },
            ],
          },
          valueReference: {
            reference: "urn:uuid:0fd78786-f7d1-ce51-38f7-4e492141d955",
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:18a5a5fa-5bcf-fa3c-4ff7-784105a8428e",
          },
        },
      ],
      procedure: [
        {
          sequence: 1,
          procedureReference: {
            reference: "urn:uuid:80587bc5-4679-ce5f-54da-63b89391bed9",
          },
        },
        {
          sequence: 2,
          procedureReference: {
            reference: "urn:uuid:609b3888-235e-2de8-70a6-ff0e8511b2dd",
          },
        },
        {
          sequence: 3,
          procedureReference: {
            reference: "urn:uuid:2f997ddf-94c3-08cc-9c51-a4c18456a304",
          },
        },
        {
          sequence: 4,
          procedureReference: {
            reference: "urn:uuid:4abda3c2-20d5-48c6-6183-7f068f2334aa",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
          ],
        },
        {
          sequence: 2,
          informationSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "140",
                display: "Influenza, seasonal, injectable, preservative free",
              },
            ],
            text: "Influenza, seasonal, injectable, preservative free",
          },
          net: { value: 140.52, currency: "USD" },
        },
        {
          sequence: 3,
          procedureSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710824005",
                display:
                  "Assessment of health and social care needs (procedure)",
              },
            ],
            text: "Assessment of health and social care needs (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 4,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
        {
          sequence: 5,
          procedureSequence: [2],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "762993000",
                display: "Assessment using Morse Fall Scale (procedure)",
              },
            ],
            text: "Assessment using Morse Fall Scale (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 6,
          procedureSequence: [3],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "171207006",
                display: "Depression screening (procedure)",
              },
            ],
            text: "Depression screening (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 7,
          procedureSequence: [4],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "454711000124102",
                display:
                  "Depression screening using Patient Health Questionnaire Two-Item score (procedure)",
              },
            ],
            text: "Depression screening using Patient Health Questionnaire Two-Item score (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
      ],
      total: { value: 786.3299999999999, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:cee47f3c-6f4e-cad3-f54e-bc925a92a66d",
    resource: {
      resourceType: "Claim",
      id: "cee47f3c-6f4e-cad3-f54e-bc925a92a66d",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2013-11-20T01:40:58-05:00",
        end: "2013-11-20T01:55:58-05:00",
      },
      created: "2013-11-20T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:6aca11ef-edcc-3dd3-85a9-24f6703795ab",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
          ],
        },
      ],
      total: { value: 0.02, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:bdadcd7b-5661-fe9a-854f-da57d6f003e0",
    resource: {
      resourceType: "Claim",
      id: "bdadcd7b-5661-fe9a-854f-da57d6f003e0",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2013-11-20T01:40:58-05:00",
        end: "2013-11-20T01:55:58-05:00",
      },
      created: "2013-11-20T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:98d69905-183d-3207-7e47-7892eaba6c5a",
    resource: {
      resourceType: "Claim",
      id: "98d69905-183d-3207-7e47-7892eaba6c5a",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2014-02-02T01:40:58-05:00",
        end: "2014-02-02T01:55:58-05:00",
      },
      created: "2014-02-02T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:2e1caec9-3052-430c-d1c3-f6f4905be257",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "185347001",
                display: "Encounter for problem (procedure)",
              },
            ],
            text: "Encounter for problem (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:a1aa9e96-e503-95ca-5897-96581cf9dcf5" },
          ],
        },
      ],
      total: { value: 374.99, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:85e5dda0-c2ba-dff3-d738-5d3adbe92dee",
    resource: {
      resourceType: "Claim",
      id: "85e5dda0-c2ba-dff3-d738-5d3adbe92dee",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2014-02-02T01:40:58-05:00",
        end: "2014-02-02T01:55:58-05:00",
      },
      created: "2014-02-02T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:a7d570a8-c3af-59af-ea8d-fba9f84e27a0",
          },
        },
        {
          sequence: 2,
          diagnosisReference: {
            reference: "urn:uuid:074c2b59-28dc-a18e-70a1-a4a7b89badcf",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "185347001",
                display: "Encounter for problem (procedure)",
              },
            ],
            text: "Encounter for problem (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:a1aa9e96-e503-95ca-5897-96581cf9dcf5" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "278860009",
                display: "Chronic low back pain (finding)",
              },
            ],
            text: "Chronic low back pain (finding)",
          },
        },
        {
          sequence: 3,
          diagnosisSequence: [2],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "203082005",
                display: "Fibromyalgia (disorder)",
              },
            ],
            text: "Fibromyalgia (disorder)",
          },
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:7ac4793a-f004-0331-970a-58429d46ce7a",
    resource: {
      resourceType: "Claim",
      id: "7ac4793a-f004-0331-970a-58429d46ce7a",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2014-02-21T01:40:58-05:00",
        end: "2014-02-21T01:55:58-05:00",
      },
      created: "2014-02-21T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:db643010-22b4-6fea-006f-14ab7a71d243",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
          ],
        },
      ],
      total: { value: 48.76, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:e760024c-e46b-534c-5d44-4fdf87ff4371",
    resource: {
      resourceType: "Claim",
      id: "e760024c-e46b-534c-5d44-4fdf87ff4371",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2014-02-21T01:40:58-05:00",
        end: "2014-02-21T01:55:58-05:00",
      },
      created: "2014-02-21T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      supportingInfo: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claiminformationcategory",
                code: "info",
              },
            ],
          },
          valueReference: {
            reference: "urn:uuid:48bfa815-ea84-e988-dbfc-68b0fbe4d1e8",
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:971a931d-3440-715a-a9e3-bdaf39f821aa",
          },
        },
        {
          sequence: 2,
          diagnosisReference: {
            reference: "urn:uuid:0a692b16-b02c-78e7-d0a0-f36a38c3d14d",
          },
        },
      ],
      procedure: [
        {
          sequence: 1,
          procedureReference: {
            reference: "urn:uuid:bcf836b5-a2a1-3ff3-7a1d-281aa9c3beab",
          },
        },
        {
          sequence: 2,
          procedureReference: {
            reference: "urn:uuid:edf1840d-c3c5-d318-75d1-05e7ef7df1bd",
          },
        },
        {
          sequence: 3,
          procedureReference: {
            reference: "urn:uuid:5f6320dd-b921-6b72-2c6f-e050a646b8f7",
          },
        },
        {
          sequence: 4,
          procedureReference: {
            reference: "urn:uuid:0d5eeab0-dac6-5dff-28b8-857701325392",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
          ],
        },
        {
          sequence: 2,
          informationSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "140",
                display: "Influenza, seasonal, injectable, preservative free",
              },
            ],
            text: "Influenza, seasonal, injectable, preservative free",
          },
          net: { value: 140.52, currency: "USD" },
        },
        {
          sequence: 3,
          procedureSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710824005",
                display:
                  "Assessment of health and social care needs (procedure)",
              },
            ],
            text: "Assessment of health and social care needs (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 4,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160904001",
                display: "Part-time employment (finding)",
              },
            ],
            text: "Part-time employment (finding)",
          },
        },
        {
          sequence: 5,
          diagnosisSequence: [2],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "706893006",
                display: "Victim of intimate partner abuse (finding)",
              },
            ],
            text: "Victim of intimate partner abuse (finding)",
          },
        },
        {
          sequence: 6,
          procedureSequence: [2],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "762993000",
                display: "Assessment using Morse Fall Scale (procedure)",
              },
            ],
            text: "Assessment using Morse Fall Scale (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 7,
          procedureSequence: [3],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "171207006",
                display: "Depression screening (procedure)",
              },
            ],
            text: "Depression screening (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 8,
          procedureSequence: [4],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "454711000124102",
                display:
                  "Depression screening using Patient Health Questionnaire Two-Item score (procedure)",
              },
            ],
            text: "Depression screening using Patient Health Questionnaire Two-Item score (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
      ],
      total: { value: 786.3299999999999, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:317eccda-7f6b-0a79-b5fc-cfd6d0850da0",
    resource: {
      resourceType: "Claim",
      id: "317eccda-7f6b-0a79-b5fc-cfd6d0850da0",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2014-03-27T05:40:58-04:00",
        end: "2014-03-27T05:55:58-04:00",
      },
      created: "2014-03-27T05:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:91374cbb-5938-c634-ad9a-da35535871aa",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter (procedure)",
              },
            ],
            text: "Follow-up encounter (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:7ea69efc-73a8-74a1-0595-d98e36d47dc2" },
          ],
        },
      ],
      total: { value: 263.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:7165bc8e-9dd0-5e5e-7c6d-fd70cc793598",
    resource: {
      resourceType: "Claim",
      id: "7165bc8e-9dd0-5e5e-7c6d-fd70cc793598",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2014-03-27T05:40:58-04:00",
        end: "2014-03-27T05:55:58-04:00",
      },
      created: "2014-03-27T05:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter (procedure)",
              },
            ],
            text: "Follow-up encounter (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:7ea69efc-73a8-74a1-0595-d98e36d47dc2" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:5b4343ae-975c-5ac9-b7e4-5f6e87ae8d38",
    resource: {
      resourceType: "Claim",
      id: "5b4343ae-975c-5ac9-b7e4-5f6e87ae8d38",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2014-11-20T01:40:58-05:00",
        end: "2014-11-20T01:55:58-05:00",
      },
      created: "2014-11-20T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:3b74aeb2-0f34-26f7-0945-550688273155",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
          ],
        },
      ],
      total: { value: 0.02, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:5fac84ba-2b88-5a9d-9650-fa06b7c6e972",
    resource: {
      resourceType: "Claim",
      id: "5fac84ba-2b88-5a9d-9650-fa06b7c6e972",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2014-11-20T01:40:58-05:00",
        end: "2014-11-20T01:55:58-05:00",
      },
      created: "2014-11-20T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:f88dda6c-8953-02fc-9f28-8e44a7401112",
    resource: {
      resourceType: "Claim",
      id: "f88dda6c-8953-02fc-9f28-8e44a7401112",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2015-01-07T05:10:52-05:00",
        end: "2015-01-07T05:53:33-05:00",
      },
      created: "2015-01-07T05:53:33-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      procedure: [
        {
          sequence: 1,
          procedureReference: {
            reference: "urn:uuid:94060731-afdc-533a-7fcb-ea5a639b66a5",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "185349003",
                display: "Encounter for 'check-up'",
              },
            ],
            text: "Encounter for 'check-up'",
          },
          encounter: [
            { reference: "urn:uuid:dc2fc493-9d4f-4ada-91d2-9e81690a983d" },
          ],
        },
        {
          sequence: 2,
          procedureSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "73761001",
                display: "Colonoscopy",
              },
            ],
            text: "Colonoscopy",
          },
          net: { value: 13233.82, currency: "USD" },
        },
      ],
      total: { value: 13311.31, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:717ae770-55c0-708f-de96-3b70eed53b20",
    resource: {
      resourceType: "Claim",
      id: "717ae770-55c0-708f-de96-3b70eed53b20",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2015-02-27T01:40:58-05:00",
        end: "2015-02-27T01:55:58-05:00",
      },
      created: "2015-02-27T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:804402bf-1115-c012-865c-90909e3fd9df",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
          ],
        },
      ],
      total: { value: 32.26, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:97314a69-bdf5-93e1-b428-bb526ed72266",
    resource: {
      resourceType: "Claim",
      id: "97314a69-bdf5-93e1-b428-bb526ed72266",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2015-02-27T01:40:58-05:00",
        end: "2015-02-27T01:55:58-05:00",
      },
      created: "2015-02-27T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:c43eec31-d00f-a83d-8ab6-f92f3409c7ce",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
          ],
        },
      ],
      total: { value: 272.25, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:58dd5737-c481-afc2-3f25-07c5ea8deec9",
    resource: {
      resourceType: "Claim",
      id: "58dd5737-c481-afc2-3f25-07c5ea8deec9",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2015-02-27T01:40:58-05:00",
        end: "2015-02-27T01:55:58-05:00",
      },
      created: "2015-02-27T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:16ecd946-8d50-2b4e-1519-1c3cd6b39b17",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
          ],
        },
      ],
      total: { value: 48.22, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:75b9c1c2-4839-ddfe-4162-01784d6f2e43",
    resource: {
      resourceType: "Claim",
      id: "75b9c1c2-4839-ddfe-4162-01784d6f2e43",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2015-02-27T01:40:58-05:00",
        end: "2015-02-27T01:55:58-05:00",
      },
      created: "2015-02-27T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:53bd569e-40a8-2c90-c5bd-d907ae177261",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
          ],
        },
      ],
      total: { value: 263.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:86145665-dffc-d9c5-0000-18a534b188d0",
    resource: {
      resourceType: "Claim",
      id: "86145665-dffc-d9c5-0000-18a534b188d0",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2015-02-27T01:40:58-05:00",
        end: "2015-02-27T01:55:58-05:00",
      },
      created: "2015-02-27T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:e4b52a09-7cc6-a270-8fd0-8d359164ae17",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
          ],
        },
      ],
      total: { value: 207.31, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:8ea51473-4698-482b-092c-2b9f552c7cf2",
    resource: {
      resourceType: "Claim",
      id: "8ea51473-4698-482b-092c-2b9f552c7cf2",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2015-02-27T01:40:58-05:00",
        end: "2015-02-27T01:55:58-05:00",
      },
      created: "2015-02-27T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:d420c50e-d912-5700-e417-0b3d22f4e4ea",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
          ],
        },
      ],
      total: { value: 127.22, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:6cbe18ad-a5de-90a8-62ef-b54b51c32c2e",
    resource: {
      resourceType: "Claim",
      id: "6cbe18ad-a5de-90a8-62ef-b54b51c32c2e",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2015-02-27T01:40:58-05:00",
        end: "2015-02-27T01:55:58-05:00",
      },
      created: "2015-02-27T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:f632876a-27cb-3877-e173-e0e8811ae84b",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
          ],
        },
      ],
      total: { value: 1181.6, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:ef9e57cf-a06f-4598-1968-4ba2c2ac378d",
    resource: {
      resourceType: "Claim",
      id: "ef9e57cf-a06f-4598-1968-4ba2c2ac378d",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2015-02-27T01:40:58-05:00",
        end: "2015-02-27T01:55:58-05:00",
      },
      created: "2015-02-27T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:ae36d189-43d5-39af-2ffa-edd9cb1dd8f2",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
          ],
        },
      ],
      total: { value: 151.41, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:6680b99f-aaa1-7c91-3427-ed2091371c12",
    resource: {
      resourceType: "Claim",
      id: "6680b99f-aaa1-7c91-3427-ed2091371c12",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2015-02-27T01:40:58-05:00",
        end: "2015-02-27T01:55:58-05:00",
      },
      created: "2015-02-27T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      supportingInfo: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claiminformationcategory",
                code: "info",
              },
            ],
          },
          valueReference: {
            reference: "urn:uuid:de47e70e-8bce-c2a6-4892-4a02add24b5a",
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:f0528934-1d9e-63de-0358-2c0e1c24c1c4",
          },
        },
        {
          sequence: 2,
          diagnosisReference: {
            reference: "urn:uuid:21e2b927-a953-c153-fbab-31092d30b61e",
          },
        },
      ],
      procedure: [
        {
          sequence: 1,
          procedureReference: {
            reference: "urn:uuid:dd679391-9318-dcab-fd15-ea9c78b4c9a6",
          },
        },
        {
          sequence: 2,
          procedureReference: {
            reference: "urn:uuid:f556b4ac-71e1-1a53-ad54-a9d4205927fe",
          },
        },
        {
          sequence: 3,
          procedureReference: {
            reference: "urn:uuid:74c7274b-c112-fff9-27e4-52049f163148",
          },
        },
        {
          sequence: 4,
          procedureReference: {
            reference: "urn:uuid:fb36da96-e45b-105a-91fe-e5aa451e6b1b",
          },
        },
        {
          sequence: 5,
          procedureReference: {
            reference: "urn:uuid:63f12704-ccbb-7226-a673-dae483040fe8",
          },
        },
        {
          sequence: 6,
          procedureReference: {
            reference: "urn:uuid:4a0a4854-1f20-14e3-f610-a88eab6d1882",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "49436004",
                display: "Atrial Fibrillation",
              },
            ],
            text: "Atrial Fibrillation",
          },
        },
        {
          sequence: 3,
          procedureSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "18286008",
                display: "Catheter ablation of tissue of heart",
              },
            ],
            text: "Catheter ablation of tissue of heart",
          },
          net: { value: 8936.53, currency: "USD" },
        },
        {
          sequence: 4,
          informationSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "140",
                display: "Influenza, seasonal, injectable, preservative free",
              },
            ],
            text: "Influenza, seasonal, injectable, preservative free",
          },
          net: { value: 140.52, currency: "USD" },
        },
        {
          sequence: 5,
          procedureSequence: [2],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710824005",
                display:
                  "Assessment of health and social care needs (procedure)",
              },
            ],
            text: "Assessment of health and social care needs (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 6,
          diagnosisSequence: [2],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160904001",
                display: "Part-time employment (finding)",
              },
            ],
            text: "Part-time employment (finding)",
          },
        },
        {
          sequence: 7,
          procedureSequence: [3],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "171207006",
                display: "Depression screening (procedure)",
              },
            ],
            text: "Depression screening (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 8,
          procedureSequence: [4],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "454711000124102",
                display:
                  "Depression screening using Patient Health Questionnaire Two-Item score (procedure)",
              },
            ],
            text: "Depression screening using Patient Health Questionnaire Two-Item score (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 9,
          procedureSequence: [5],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "428211000124100",
                display: "Assessment of substance use (procedure)",
              },
            ],
            text: "Assessment of substance use (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 10,
          procedureSequence: [6],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "763302001",
                display:
                  "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)",
              },
            ],
            text: "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
      ],
      total: { value: 9722.86, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:eb98aff3-ef63-3dba-293f-739ce8dd0e89",
    resource: {
      resourceType: "Claim",
      id: "eb98aff3-ef63-3dba-293f-739ce8dd0e89",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2015-11-20T01:40:58-05:00",
        end: "2015-11-20T01:55:58-05:00",
      },
      created: "2015-11-20T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:7f4c28a4-6c46-7000-ccf3-3044875930b8",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
          ],
        },
      ],
      total: { value: 0.03, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:fe360f77-bf0a-d5d1-a288-14e34f540d9b",
    resource: {
      resourceType: "Claim",
      id: "fe360f77-bf0a-d5d1-a288-14e34f540d9b",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2015-11-20T01:40:58-05:00",
        end: "2015-11-20T01:55:58-05:00",
      },
      created: "2015-11-20T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:c9af3580-9fc3-c843-d1dd-640408257ad1",
    resource: {
      resourceType: "Claim",
      id: "c9af3580-9fc3-c843-d1dd-640408257ad1",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2016-03-04T01:40:58-05:00",
        end: "2016-03-04T01:55:58-05:00",
      },
      created: "2016-03-04T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:8499db6a-905d-3342-eef4-3c714cea5a7a",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
          ],
        },
      ],
      total: { value: 263.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:396f5d78-70a0-7fe5-113c-4c89a9b81027",
    resource: {
      resourceType: "Claim",
      id: "396f5d78-70a0-7fe5-113c-4c89a9b81027",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2016-03-04T01:40:58-05:00",
        end: "2016-03-04T01:55:58-05:00",
      },
      created: "2016-03-04T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:f006b3f5-f120-28db-a26d-69e3889ed3ae",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
          ],
        },
      ],
      total: { value: 188.45, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:74f36d91-1242-04e7-1263-9e3c2fd400ee",
    resource: {
      resourceType: "Claim",
      id: "74f36d91-1242-04e7-1263-9e3c2fd400ee",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2016-03-04T01:40:58-05:00",
        end: "2016-03-04T01:55:58-05:00",
      },
      created: "2016-03-04T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:5f48c20d-d004-6f97-29bf-f15a34fe55db",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
          ],
        },
      ],
      total: { value: 126.06, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:e8ffbd3b-a164-41fc-1801-9c8b64c39a46",
    resource: {
      resourceType: "Claim",
      id: "e8ffbd3b-a164-41fc-1801-9c8b64c39a46",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2016-03-04T01:40:58-05:00",
        end: "2016-03-04T01:55:58-05:00",
      },
      created: "2016-03-04T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:43b18d5a-58fb-fd29-35a4-f86a2d2b9c51",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
          ],
        },
      ],
      total: { value: 703.53, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:23d9a55f-54ee-f83e-483c-ab7e3aac0055",
    resource: {
      resourceType: "Claim",
      id: "23d9a55f-54ee-f83e-483c-ab7e3aac0055",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2016-03-04T01:40:58-05:00",
        end: "2016-03-04T01:55:58-05:00",
      },
      created: "2016-03-04T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:f4792fb3-a26f-bf67-279d-a4017a469123",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
          ],
        },
      ],
      total: { value: 125.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:607eeddd-54b0-34b7-5e59-367d37291e4a",
    resource: {
      resourceType: "Claim",
      id: "607eeddd-54b0-34b7-5e59-367d37291e4a",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2016-03-04T01:40:58-05:00",
        end: "2016-03-04T01:55:58-05:00",
      },
      created: "2016-03-04T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      supportingInfo: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claiminformationcategory",
                code: "info",
              },
            ],
          },
          valueReference: {
            reference: "urn:uuid:0de2e7ab-1970-fcca-75ac-2edcd171e1a7",
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:de15e96a-2b1e-0506-c32d-59c7bc63d039",
          },
        },
        {
          sequence: 2,
          diagnosisReference: {
            reference: "urn:uuid:c4e3ba64-4b4f-8f07-22ff-636115d64408",
          },
        },
      ],
      procedure: [
        {
          sequence: 1,
          procedureReference: {
            reference: "urn:uuid:f2fdc866-2b0e-ea65-53f0-feda3a7a7496",
          },
        },
        {
          sequence: 2,
          procedureReference: {
            reference: "urn:uuid:bcc4987a-064a-c343-2029-9c9b2a44a607",
          },
        },
        {
          sequence: 3,
          procedureReference: {
            reference: "urn:uuid:0998807b-5408-c0be-644c-7c3d87b1d934",
          },
        },
        {
          sequence: 4,
          procedureReference: {
            reference: "urn:uuid:5a57352e-f507-7131-86e4-134cbcdf7e4f",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
          ],
        },
        {
          sequence: 2,
          procedureSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "180325003",
                display: "Electrical cardioversion",
              },
            ],
            text: "Electrical cardioversion",
          },
          net: { value: 27025.84, currency: "USD" },
        },
        {
          sequence: 3,
          informationSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "140",
                display: "Influenza, seasonal, injectable, preservative free",
              },
            ],
            text: "Influenza, seasonal, injectable, preservative free",
          },
          net: { value: 140.52, currency: "USD" },
        },
        {
          sequence: 4,
          procedureSequence: [2],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710824005",
                display:
                  "Assessment of health and social care needs (procedure)",
              },
            ],
            text: "Assessment of health and social care needs (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 5,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
        {
          sequence: 6,
          diagnosisSequence: [2],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "73595000",
                display: "Stress (finding)",
              },
            ],
            text: "Stress (finding)",
          },
        },
        {
          sequence: 7,
          procedureSequence: [3],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "428211000124100",
                display: "Assessment of substance use (procedure)",
              },
            ],
            text: "Assessment of substance use (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 8,
          procedureSequence: [4],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "763302001",
                display:
                  "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)",
              },
            ],
            text: "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
      ],
      total: { value: 27812.170000000002, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:b6ca8126-3f09-c1fd-8706-6f8a3084b383",
    resource: {
      resourceType: "Claim",
      id: "b6ca8126-3f09-c1fd-8706-6f8a3084b383",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2016-11-19T01:40:58-05:00",
        end: "2016-11-19T01:55:58-05:00",
      },
      created: "2016-11-19T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:7631231b-50de-5431-f900-0e5ce1515555",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
          ],
        },
      ],
      total: { value: 0.03, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:357a6d75-7946-3fb0-4a8c-25e609af3c58",
    resource: {
      resourceType: "Claim",
      id: "357a6d75-7946-3fb0-4a8c-25e609af3c58",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2016-11-19T01:40:58-05:00",
        end: "2016-11-19T01:55:58-05:00",
      },
      created: "2016-11-19T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:85450a95-14b9-e94d-6267-13d707a71fc4",
    resource: {
      resourceType: "Claim",
      id: "85450a95-14b9-e94d-6267-13d707a71fc4",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2017-03-10T01:40:58-05:00",
        end: "2017-03-10T01:55:58-05:00",
      },
      created: "2017-03-10T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:c0daeb28-5c4a-a18f-b914-86a38de8ee36",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
          ],
        },
      ],
      total: { value: 263.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:97ca3fd5-c79f-24c9-afbc-e225cb2ea3d7",
    resource: {
      resourceType: "Claim",
      id: "97ca3fd5-c79f-24c9-afbc-e225cb2ea3d7",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2017-03-10T01:40:58-05:00",
        end: "2017-03-10T01:55:58-05:00",
      },
      created: "2017-03-10T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:7f29c53a-0fa5-2498-9c16-2d203b381931",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
          ],
        },
      ],
      total: { value: 72.85, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:a7b8d409-e76b-690d-90bf-06822f55f05b",
    resource: {
      resourceType: "Claim",
      id: "a7b8d409-e76b-690d-90bf-06822f55f05b",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2017-03-10T01:40:58-05:00",
        end: "2017-03-10T01:55:58-05:00",
      },
      created: "2017-03-10T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:22bbfef0-2063-868e-d307-53ccf9224df0",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
          ],
        },
      ],
      total: { value: 46.95, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:03eea528-fc1d-4bdc-ae15-2d5394ae0731",
    resource: {
      resourceType: "Claim",
      id: "03eea528-fc1d-4bdc-ae15-2d5394ae0731",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2017-03-10T01:40:58-05:00",
        end: "2017-03-10T01:55:58-05:00",
      },
      created: "2017-03-10T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:6363ea15-c3f3-f34f-8799-85d80a1a4ca0",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
          ],
        },
      ],
      total: { value: 817.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:e5e69d5b-e378-4d1a-30cb-0c5658315afb",
    resource: {
      resourceType: "Claim",
      id: "e5e69d5b-e378-4d1a-30cb-0c5658315afb",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2017-03-10T01:40:58-05:00",
        end: "2017-03-10T01:55:58-05:00",
      },
      created: "2017-03-10T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:7dff496d-d60e-e6a1-d319-2a8411ac81f2",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
          ],
        },
      ],
      total: { value: 150.21, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:36bfc76a-b860-5f5a-eb12-df687d3aa739",
    resource: {
      resourceType: "Claim",
      id: "36bfc76a-b860-5f5a-eb12-df687d3aa739",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2017-03-10T01:40:58-05:00",
        end: "2017-03-10T01:55:58-05:00",
      },
      created: "2017-03-10T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      supportingInfo: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claiminformationcategory",
                code: "info",
              },
            ],
          },
          valueReference: {
            reference: "urn:uuid:d050fb2a-f193-c4ac-1b5d-73a614ee939c",
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:bb03c85d-dfee-464c-4cf7-d1c69b9f5572",
          },
        },
        {
          sequence: 2,
          diagnosisReference: {
            reference: "urn:uuid:4dd2f094-2ceb-71b8-6f3a-41b4a812d629",
          },
        },
      ],
      procedure: [
        {
          sequence: 1,
          procedureReference: {
            reference: "urn:uuid:faab72ed-bab3-c6ec-3746-5984f2d3ed4b",
          },
        },
        {
          sequence: 2,
          procedureReference: {
            reference: "urn:uuid:3de2ca95-bca6-8719-a126-393acf027b55",
          },
        },
        {
          sequence: 3,
          procedureReference: {
            reference: "urn:uuid:e9eb2b71-c459-df8e-bb19-249ae0fc207d",
          },
        },
        {
          sequence: 4,
          procedureReference: {
            reference: "urn:uuid:1808f47f-b20a-7536-884b-72ecb4d7386b",
          },
        },
        {
          sequence: 5,
          procedureReference: {
            reference: "urn:uuid:b9ec4318-3679-f557-90c2-1f672666124c",
          },
        },
        {
          sequence: 6,
          procedureReference: {
            reference: "urn:uuid:fe7fb561-5c9c-18f7-c941-12c030cf3cd5",
          },
        },
        {
          sequence: 7,
          procedureReference: {
            reference: "urn:uuid:15bc6004-f385-fa7a-e053-f20228900e88",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
          ],
        },
        {
          sequence: 2,
          procedureSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "180325003",
                display: "Electrical cardioversion",
              },
            ],
            text: "Electrical cardioversion",
          },
          net: { value: 36780.34, currency: "USD" },
        },
        {
          sequence: 3,
          informationSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "140",
                display: "Influenza, seasonal, injectable, preservative free",
              },
            ],
            text: "Influenza, seasonal, injectable, preservative free",
          },
          net: { value: 140.52, currency: "USD" },
        },
        {
          sequence: 4,
          procedureSequence: [2],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710824005",
                display:
                  "Assessment of health and social care needs (procedure)",
              },
            ],
            text: "Assessment of health and social care needs (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 5,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
        {
          sequence: 6,
          diagnosisSequence: [2],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "424393004",
                display: "Reports of violence in the environment (finding)",
              },
            ],
            text: "Reports of violence in the environment (finding)",
          },
        },
        {
          sequence: 7,
          procedureSequence: [3],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710841007",
                display: "Assessment of anxiety (procedure)",
              },
            ],
            text: "Assessment of anxiety (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 8,
          procedureSequence: [4],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "762993000",
                display: "Assessment using Morse Fall Scale (procedure)",
              },
            ],
            text: "Assessment using Morse Fall Scale (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 9,
          procedureSequence: [5],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "866148006",
                display: "Screening for domestic abuse (procedure)",
              },
            ],
            text: "Screening for domestic abuse (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 10,
          procedureSequence: [6],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "171207006",
                display: "Depression screening (procedure)",
              },
            ],
            text: "Depression screening (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 11,
          procedureSequence: [7],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "454711000124102",
                display:
                  "Depression screening using Patient Health Questionnaire Two-Item score (procedure)",
              },
            ],
            text: "Depression screening using Patient Health Questionnaire Two-Item score (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
      ],
      total: { value: 37566.67, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:19a7bbe2-702d-f95d-1a69-22fa2ee99c83",
    resource: {
      resourceType: "Claim",
      id: "19a7bbe2-702d-f95d-1a69-22fa2ee99c83",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2017-06-07T13:40:58-04:00",
        end: "2017-06-07T13:55:58-04:00",
      },
      created: "2017-06-07T13:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:1af2b5bb-807c-4789-8dce-bbe4fd205ae6",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "185345009",
                display: "Encounter for symptom",
              },
            ],
            text: "Encounter for symptom",
          },
          encounter: [
            { reference: "urn:uuid:9ccbf5a3-78c2-dd31-5e05-6ad80a34e923" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "195662009",
                display: "Acute viral pharyngitis (disorder)",
              },
            ],
            text: "Acute viral pharyngitis (disorder)",
          },
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:7783372e-a9e4-3ee9-4429-620a0f9d44ce",
    resource: {
      resourceType: "Claim",
      id: "7783372e-a9e4-3ee9-4429-620a0f9d44ce",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2017-11-19T01:40:58-05:00",
        end: "2017-11-19T01:55:58-05:00",
      },
      created: "2017-11-19T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:9bc72879-c301-e0a9-aaa3-a014f82810cc",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
          ],
        },
      ],
      total: { value: 0.02, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:599b75f0-9ba1-e190-39d4-54c3687e449b",
    resource: {
      resourceType: "Claim",
      id: "599b75f0-9ba1-e190-39d4-54c3687e449b",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2017-11-19T01:40:58-05:00",
        end: "2017-11-19T01:55:58-05:00",
      },
      created: "2017-11-19T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:21f511a7-2994-77dc-2735-f2104ec348eb",
    resource: {
      resourceType: "Claim",
      id: "21f511a7-2994-77dc-2735-f2104ec348eb",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2018-03-16T02:40:58-04:00",
        end: "2018-03-16T02:55:58-04:00",
      },
      created: "2018-03-16T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:840988fe-27b5-263d-52e0-59b320a6eaba",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
          ],
        },
      ],
      total: { value: 263.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:4a5498bc-95d0-fd5d-8249-cd986cc9f7bf",
    resource: {
      resourceType: "Claim",
      id: "4a5498bc-95d0-fd5d-8249-cd986cc9f7bf",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2018-03-16T02:40:58-04:00",
        end: "2018-03-16T02:55:58-04:00",
      },
      created: "2018-03-16T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:c486146a-d5fe-24ee-81cb-70353bcefaf9",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
          ],
        },
      ],
      total: { value: 72.56, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:a100415d-a434-ffed-0d89-ae99f77ee4d8",
    resource: {
      resourceType: "Claim",
      id: "a100415d-a434-ffed-0d89-ae99f77ee4d8",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2018-03-16T02:40:58-04:00",
        end: "2018-03-16T02:55:58-04:00",
      },
      created: "2018-03-16T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:88dd0f6d-2527-4224-f4de-f44046d8236f",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
          ],
        },
      ],
      total: { value: 31.75, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:ed6581ec-6064-034a-98f6-fdca2de4866f",
    resource: {
      resourceType: "Claim",
      id: "ed6581ec-6064-034a-98f6-fdca2de4866f",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2018-03-16T02:40:58-04:00",
        end: "2018-03-16T02:55:58-04:00",
      },
      created: "2018-03-16T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:c806f57c-09de-effb-ca94-408bfed04ae6",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
          ],
        },
      ],
      total: { value: 1759.39, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:3ec8fe7b-f99f-b8d5-871d-eab086267304",
    resource: {
      resourceType: "Claim",
      id: "3ec8fe7b-f99f-b8d5-871d-eab086267304",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2018-03-16T02:40:58-04:00",
        end: "2018-03-16T02:55:58-04:00",
      },
      created: "2018-03-16T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:708abc84-5d71-fbf4-b71d-7167aacabc2c",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
          ],
        },
      ],
      total: { value: 104.57, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:649522ba-2b84-01d2-e329-3bc29836e3e0",
    resource: {
      resourceType: "Claim",
      id: "649522ba-2b84-01d2-e329-3bc29836e3e0",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2018-03-16T02:40:58-04:00",
        end: "2018-03-16T02:55:58-04:00",
      },
      created: "2018-03-16T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      supportingInfo: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claiminformationcategory",
                code: "info",
              },
            ],
          },
          valueReference: {
            reference: "urn:uuid:971f2f66-1dce-1772-621c-8335a63f2290",
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:f0fd12ce-22db-3c13-72f7-e81db2a343e1",
          },
        },
      ],
      procedure: [
        {
          sequence: 1,
          procedureReference: {
            reference: "urn:uuid:81b94380-c329-5528-5b8f-3bbaef4244c4",
          },
        },
        {
          sequence: 2,
          procedureReference: {
            reference: "urn:uuid:ace9f897-0d0a-dafd-f160-8fb24acb6ced",
          },
        },
        {
          sequence: 3,
          procedureReference: {
            reference: "urn:uuid:e68931c3-dc04-548d-690e-b34b35be2d2f",
          },
        },
        {
          sequence: 4,
          procedureReference: {
            reference: "urn:uuid:f5485ed0-02cb-4261-ab01-c743544f1931",
          },
        },
        {
          sequence: 5,
          procedureReference: {
            reference: "urn:uuid:6ed3c840-bd6e-41ef-11b4-4b4659b8f0d4",
          },
        },
        {
          sequence: 6,
          procedureReference: {
            reference: "urn:uuid:a58e140f-d156-4642-924b-93c6c2734375",
          },
        },
        {
          sequence: 7,
          procedureReference: {
            reference: "urn:uuid:8332e1a0-1990-36da-cee1-49142419836f",
          },
        },
        {
          sequence: 8,
          procedureReference: {
            reference: "urn:uuid:9f72b0eb-74d7-18d0-b6fd-43a3f2b14de3",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
          ],
        },
        {
          sequence: 2,
          procedureSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "180325003",
                display: "Electrical cardioversion",
              },
            ],
            text: "Electrical cardioversion",
          },
          net: { value: 27358.34, currency: "USD" },
        },
        {
          sequence: 3,
          informationSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "140",
                display: "Influenza, seasonal, injectable, preservative free",
              },
            ],
            text: "Influenza, seasonal, injectable, preservative free",
          },
          net: { value: 140.52, currency: "USD" },
        },
        {
          sequence: 4,
          procedureSequence: [2],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710824005",
                display:
                  "Assessment of health and social care needs (procedure)",
              },
            ],
            text: "Assessment of health and social care needs (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 5,
          procedureSequence: [3],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "430193006",
                display: "Medication Reconciliation (procedure)",
              },
            ],
            text: "Medication Reconciliation (procedure)",
          },
          net: { value: 453.77, currency: "USD" },
        },
        {
          sequence: 6,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
        {
          sequence: 7,
          procedureSequence: [4],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "762993000",
                display: "Assessment using Morse Fall Scale (procedure)",
              },
            ],
            text: "Assessment using Morse Fall Scale (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 8,
          procedureSequence: [5],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "171207006",
                display: "Depression screening (procedure)",
              },
            ],
            text: "Depression screening (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 9,
          procedureSequence: [6],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "454711000124102",
                display:
                  "Depression screening using Patient Health Questionnaire Two-Item score (procedure)",
              },
            ],
            text: "Depression screening using Patient Health Questionnaire Two-Item score (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 10,
          procedureSequence: [7],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "428211000124100",
                display: "Assessment of substance use (procedure)",
              },
            ],
            text: "Assessment of substance use (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 11,
          procedureSequence: [8],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "763302001",
                display:
                  "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)",
              },
            ],
            text: "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
      ],
      total: { value: 28598.440000000002, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:0c8a0012-f010-c3b2-8bee-afc449b04860",
    resource: {
      resourceType: "Claim",
      id: "0c8a0012-f010-c3b2-8bee-afc449b04860",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2018-11-19T01:40:58-05:00",
        end: "2018-11-19T01:55:58-05:00",
      },
      created: "2018-11-19T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:c353e223-8088-d0fc-ff2a-95d5dadb0b64",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
          ],
        },
      ],
      total: { value: 0.02, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:35b043c6-5723-9120-0efb-28c460426826",
    resource: {
      resourceType: "Claim",
      id: "35b043c6-5723-9120-0efb-28c460426826",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2018-11-19T01:40:58-05:00",
        end: "2018-11-19T01:55:58-05:00",
      },
      created: "2018-11-19T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:f1822fba-805a-7ff4-5653-71c8747fb185",
    resource: {
      resourceType: "Claim",
      id: "f1822fba-805a-7ff4-5653-71c8747fb185",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2019-03-22T02:40:58-04:00",
        end: "2019-03-22T02:55:58-04:00",
      },
      created: "2019-03-22T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:7dcb28ae-f183-bff9-7499-6273af0cbac5",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
          ],
        },
      ],
      total: { value: 263.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:0f6833be-e8b8-dffa-de81-4fef1a8bb076",
    resource: {
      resourceType: "Claim",
      id: "0f6833be-e8b8-dffa-de81-4fef1a8bb076",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2019-03-22T02:40:58-04:00",
        end: "2019-03-22T02:55:58-04:00",
      },
      created: "2019-03-22T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:6181619d-58a7-202a-750b-234590974de1",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
          ],
        },
      ],
      total: { value: 135.22, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:a97a8223-a91e-d763-6bd4-548ad0e80753",
    resource: {
      resourceType: "Claim",
      id: "a97a8223-a91e-d763-6bd4-548ad0e80753",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2019-03-22T02:40:58-04:00",
        end: "2019-03-22T02:55:58-04:00",
      },
      created: "2019-03-22T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:42f92a8d-2814-b4ed-9c25-eff460128156",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
          ],
        },
      ],
      total: { value: 114.07, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:9d09659c-0344-2ffd-82a2-1d2055a488e8",
    resource: {
      resourceType: "Claim",
      id: "9d09659c-0344-2ffd-82a2-1d2055a488e8",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2019-03-22T02:40:58-04:00",
        end: "2019-03-22T02:55:58-04:00",
      },
      created: "2019-03-22T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:34ac2e49-18bd-f56e-5a38-ab051e3bef7d",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
          ],
        },
      ],
      total: { value: 87.51, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:0d04908c-c6db-933b-e32e-d8049cf32a43",
    resource: {
      resourceType: "Claim",
      id: "0d04908c-c6db-933b-e32e-d8049cf32a43",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2019-03-22T02:40:58-04:00",
        end: "2019-03-22T02:55:58-04:00",
      },
      created: "2019-03-22T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:73bb2c0b-9c08-463c-6066-2299502378b2",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
          ],
        },
      ],
      total: { value: 30.59, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:b98670b5-3408-b6eb-fa3c-d294bb737dee",
    resource: {
      resourceType: "Claim",
      id: "b98670b5-3408-b6eb-fa3c-d294bb737dee",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2019-03-22T02:40:58-04:00",
        end: "2019-03-22T02:55:58-04:00",
      },
      created: "2019-03-22T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      supportingInfo: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claiminformationcategory",
                code: "info",
              },
            ],
          },
          valueReference: {
            reference: "urn:uuid:83489208-562f-c1cd-52d7-6ee13d847fd6",
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:f696ef9c-ced7-0d83-c09a-0dc3eb8bc4f0",
          },
        },
      ],
      procedure: [
        {
          sequence: 1,
          procedureReference: {
            reference: "urn:uuid:a39b786c-02a0-6972-6bbb-5aeab0569fc2",
          },
        },
        {
          sequence: 2,
          procedureReference: {
            reference: "urn:uuid:feabd602-aff6-ca45-acf6-8adb3bfe6bc9",
          },
        },
        {
          sequence: 3,
          procedureReference: {
            reference: "urn:uuid:d64e32fd-021c-a08f-8a48-0d1d85a46f44",
          },
        },
        {
          sequence: 4,
          procedureReference: {
            reference: "urn:uuid:4595038d-8e15-ca0e-44bf-0ff068357090",
          },
        },
        {
          sequence: 5,
          procedureReference: {
            reference: "urn:uuid:2f681eef-89e8-d212-a586-a806a0d7472b",
          },
        },
        {
          sequence: 6,
          procedureReference: {
            reference: "urn:uuid:0f99a099-48c7-8ca7-93c2-36e6cf1fe579",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
          ],
        },
        {
          sequence: 2,
          procedureSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "180325003",
                display: "Electrical cardioversion",
              },
            ],
            text: "Electrical cardioversion",
          },
          net: { value: 46811.81, currency: "USD" },
        },
        {
          sequence: 3,
          informationSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "140",
                display: "Influenza, seasonal, injectable, preservative free",
              },
            ],
            text: "Influenza, seasonal, injectable, preservative free",
          },
          net: { value: 140.52, currency: "USD" },
        },
        {
          sequence: 4,
          procedureSequence: [2],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710824005",
                display:
                  "Assessment of health and social care needs (procedure)",
              },
            ],
            text: "Assessment of health and social care needs (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 5,
          procedureSequence: [3],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "430193006",
                display: "Medication Reconciliation (procedure)",
              },
            ],
            text: "Medication Reconciliation (procedure)",
          },
          net: { value: 588.8, currency: "USD" },
        },
        {
          sequence: 6,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
        {
          sequence: 7,
          procedureSequence: [4],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710841007",
                display: "Assessment of anxiety (procedure)",
              },
            ],
            text: "Assessment of anxiety (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 8,
          procedureSequence: [5],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "762993000",
                display: "Assessment using Morse Fall Scale (procedure)",
              },
            ],
            text: "Assessment using Morse Fall Scale (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 9,
          procedureSequence: [6],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "866148006",
                display: "Screening for domestic abuse (procedure)",
              },
            ],
            text: "Screening for domestic abuse (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
      ],
      total: { value: 48186.94, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:2083e8bf-20eb-60c6-048d-ea419cd91745",
    resource: {
      resourceType: "Claim",
      id: "2083e8bf-20eb-60c6-048d-ea419cd91745",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2019-11-19T01:40:58-05:00",
        end: "2019-11-19T01:55:58-05:00",
      },
      created: "2019-11-19T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:e5ac8208-bd7e-0dff-2431-3443e9d03124",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
          ],
        },
      ],
      total: { value: 0.03, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:58e5ad84-eecf-c516-8dbf-5d9dad46690c",
    resource: {
      resourceType: "Claim",
      id: "58e5ad84-eecf-c516-8dbf-5d9dad46690c",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2019-11-19T01:40:58-05:00",
        end: "2019-11-19T01:55:58-05:00",
      },
      created: "2019-11-19T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:f7899b92-5402-c6cb-2e32-fcc2d3682047",
    resource: {
      resourceType: "Claim",
      id: "f7899b92-5402-c6cb-2e32-fcc2d3682047",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2020-03-27T02:40:58-04:00",
        end: "2020-03-27T02:55:58-04:00",
      },
      created: "2020-03-27T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:e0539efa-c59b-765b-7179-42731b6a7227",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
          ],
        },
      ],
      total: { value: 263.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:7ba2e869-c65c-5f9e-63e6-8d606e27c734",
    resource: {
      resourceType: "Claim",
      id: "7ba2e869-c65c-5f9e-63e6-8d606e27c734",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2020-03-27T02:40:58-04:00",
        end: "2020-03-27T02:55:58-04:00",
      },
      created: "2020-03-27T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:7778904e-68f7-86ea-8d04-2ba2e2155508",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
          ],
        },
      ],
      total: { value: 91.42, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:767f88f2-f46d-4550-8711-3d6a583a02da",
    resource: {
      resourceType: "Claim",
      id: "767f88f2-f46d-4550-8711-3d6a583a02da",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2020-03-27T02:40:58-04:00",
        end: "2020-03-27T02:55:58-04:00",
      },
      created: "2020-03-27T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:97de344a-223e-a8b7-7b99-cf83bb841228",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
          ],
        },
      ],
      total: { value: 100.86, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:dd137f45-cd6f-fc1c-b198-df3ad6d56921",
    resource: {
      resourceType: "Claim",
      id: "dd137f45-cd6f-fc1c-b198-df3ad6d56921",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2020-03-27T02:40:58-04:00",
        end: "2020-03-27T02:55:58-04:00",
      },
      created: "2020-03-27T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:24a9e2bc-7676-627b-12f5-4413d28a311c",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
          ],
        },
      ],
      total: { value: 296.27, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:690f7bee-f4a1-87a3-0917-5ac132b0b7f8",
    resource: {
      resourceType: "Claim",
      id: "690f7bee-f4a1-87a3-0917-5ac132b0b7f8",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2020-03-27T02:40:58-04:00",
        end: "2020-03-27T02:55:58-04:00",
      },
      created: "2020-03-27T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:9d7262a8-0cc9-4c15-0530-43a6835aa940",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
          ],
        },
      ],
      total: { value: 251.13, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:dee7decb-a0c1-5434-657a-47b37ed253fb",
    resource: {
      resourceType: "Claim",
      id: "dee7decb-a0c1-5434-657a-47b37ed253fb",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2020-03-27T02:40:58-04:00",
        end: "2020-03-27T02:55:58-04:00",
      },
      created: "2020-03-27T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      supportingInfo: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claiminformationcategory",
                code: "info",
              },
            ],
          },
          valueReference: {
            reference: "urn:uuid:7f031cc4-cf02-8f07-20cb-e364b1349633",
          },
        },
        {
          sequence: 2,
          category: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claiminformationcategory",
                code: "info",
              },
            ],
          },
          valueReference: {
            reference: "urn:uuid:a394b86f-5424-7368-1928-4bfd057651cf",
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:9a9025cd-d028-d66d-40b5-082b5896a770",
          },
        },
      ],
      procedure: [
        {
          sequence: 1,
          procedureReference: {
            reference: "urn:uuid:64fb6039-f323-d5e9-400d-fc17fc60e108",
          },
        },
        {
          sequence: 2,
          procedureReference: {
            reference: "urn:uuid:f5bdd10e-ad7f-de23-0f0a-0cd457731a22",
          },
        },
        {
          sequence: 3,
          procedureReference: {
            reference: "urn:uuid:6358ac6d-df48-9f77-88ff-737286dc190a",
          },
        },
        {
          sequence: 4,
          procedureReference: {
            reference: "urn:uuid:9fc5a287-a9e6-2387-f7c4-d329f40dae77",
          },
        },
        {
          sequence: 5,
          procedureReference: {
            reference: "urn:uuid:f3a52217-8ccf-b0c2-103e-66c935f18095",
          },
        },
        {
          sequence: 6,
          procedureReference: {
            reference: "urn:uuid:840eedd8-2491-a4c1-9641-d54fda578608",
          },
        },
        {
          sequence: 7,
          procedureReference: {
            reference: "urn:uuid:38d21536-0b6c-10f4-200a-3bc7c6a2ad30",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
          ],
        },
        {
          sequence: 2,
          procedureSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "18286008",
                display: "Catheter ablation of tissue of heart",
              },
            ],
            text: "Catheter ablation of tissue of heart",
          },
          net: { value: 7998.16, currency: "USD" },
        },
        {
          sequence: 3,
          informationSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "140",
                display: "Influenza, seasonal, injectable, preservative free",
              },
            ],
            text: "Influenza, seasonal, injectable, preservative free",
          },
          net: { value: 140.52, currency: "USD" },
        },
        {
          sequence: 4,
          informationSequence: [2],
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "113",
                display: "Td (adult) preservative free",
              },
            ],
            text: "Td (adult) preservative free",
          },
          net: { value: 140.52, currency: "USD" },
        },
        {
          sequence: 5,
          procedureSequence: [2],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710824005",
                display:
                  "Assessment of health and social care needs (procedure)",
              },
            ],
            text: "Assessment of health and social care needs (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 6,
          procedureSequence: [3],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "430193006",
                display: "Medication Reconciliation (procedure)",
              },
            ],
            text: "Medication Reconciliation (procedure)",
          },
          net: { value: 829.64, currency: "USD" },
        },
        {
          sequence: 7,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
        {
          sequence: 8,
          procedureSequence: [4],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710841007",
                display: "Assessment of anxiety (procedure)",
              },
            ],
            text: "Assessment of anxiety (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 9,
          procedureSequence: [5],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "762993000",
                display: "Assessment using Morse Fall Scale (procedure)",
              },
            ],
            text: "Assessment using Morse Fall Scale (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 10,
          procedureSequence: [6],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "428211000124100",
                display: "Assessment of substance use (procedure)",
              },
            ],
            text: "Assessment of substance use (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 11,
          procedureSequence: [7],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "763302001",
                display:
                  "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)",
              },
            ],
            text: "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
      ],
      total: { value: 9754.65, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:a58c20f8-1a24-df8a-4714-5d598826f9c8",
    resource: {
      resourceType: "Claim",
      id: "a58c20f8-1a24-df8a-4714-5d598826f9c8",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2020-11-18T01:40:58-05:00",
        end: "2020-11-18T01:55:58-05:00",
      },
      created: "2020-11-18T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:cfda99b3-18dd-b068-acb1-3108a7a83b09",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
          ],
        },
      ],
      total: { value: 0.02, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:a2c90a6f-903a-d36a-f91d-f94e4affd708",
    resource: {
      resourceType: "Claim",
      id: "a2c90a6f-903a-d36a-f91d-f94e4affd708",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2020-11-18T01:40:58-05:00",
        end: "2020-11-18T01:55:58-05:00",
      },
      created: "2020-11-18T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:efb2d46a-cf3a-30bf-8644-b29d9888fe6a",
    resource: {
      resourceType: "Claim",
      id: "efb2d46a-cf3a-30bf-8644-b29d9888fe6a",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2021-03-12T01:40:58-05:00",
        end: "2021-03-12T01:55:58-05:00",
      },
      created: "2021-03-12T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      supportingInfo: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claiminformationcategory",
                code: "info",
              },
            ],
          },
          valueReference: {
            reference: "urn:uuid:031ddc68-8f02-ae4d-ac2a-5f31be2572e8",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "33879002",
                display:
                  "Administration of vaccine to produce active immunity (procedure)",
              },
            ],
            text: "Administration of vaccine to produce active immunity (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:5ef6b653-7ec7-85ff-8931-2c8eec210e3d" },
          ],
        },
        {
          sequence: 2,
          informationSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "207",
                display:
                  "SARS-COV-2 (COVID-19) vaccine, mRNA, spike protein, LNP, preservative free, 100 mcg/0.5mL dose",
              },
            ],
            text: "SARS-COV-2 (COVID-19) vaccine, mRNA, spike protein, LNP, preservative free, 100 mcg/0.5mL dose",
          },
          net: { value: 140.52, currency: "USD" },
        },
      ],
      total: { value: 269.68, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:8c5a5c3f-c9d7-48b4-cdfd-19aeeca0d4ee",
    resource: {
      resourceType: "Claim",
      id: "8c5a5c3f-c9d7-48b4-cdfd-19aeeca0d4ee",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2021-04-02T02:40:58-04:00",
        end: "2021-04-02T02:55:58-04:00",
      },
      created: "2021-04-02T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:35e1ca69-92cf-4f99-6996-12394c018dd1",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
          ],
        },
      ],
      total: { value: 0, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:ad473c74-e66c-2e97-97e9-7185c6a39ad5",
    resource: {
      resourceType: "Claim",
      id: "ad473c74-e66c-2e97-97e9-7185c6a39ad5",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2021-04-02T02:40:58-04:00",
        end: "2021-04-02T02:55:58-04:00",
      },
      created: "2021-04-02T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:42c0c205-59b6-1c77-31c1-101a23ddb481",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
          ],
        },
      ],
      total: { value: 0, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:59dbe3f3-a1e6-f776-11ca-42c9e5bfbc38",
    resource: {
      resourceType: "Claim",
      id: "59dbe3f3-a1e6-f776-11ca-42c9e5bfbc38",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2021-04-02T02:40:58-04:00",
        end: "2021-04-02T02:55:58-04:00",
      },
      created: "2021-04-02T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:50279d7f-64b2-2765-acfc-1edff878499d",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
          ],
        },
      ],
      total: { value: 0, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:ae5089c5-9636-1e99-1d50-8b154662861a",
    resource: {
      resourceType: "Claim",
      id: "ae5089c5-9636-1e99-1d50-8b154662861a",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2021-04-02T02:40:58-04:00",
        end: "2021-04-02T02:55:58-04:00",
      },
      created: "2021-04-02T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:31985e7a-7a67-f186-3c66-2fad8461ae36",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
          ],
        },
      ],
      total: { value: 0, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:c5fcffab-18aa-b5e9-0fae-c3d867cb76c3",
    resource: {
      resourceType: "Claim",
      id: "c5fcffab-18aa-b5e9-0fae-c3d867cb76c3",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2021-04-02T02:40:58-04:00",
        end: "2021-04-02T02:55:58-04:00",
      },
      created: "2021-04-02T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:e96f1e09-7c5a-3062-58fc-5a392ad9a861",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
          ],
        },
      ],
      total: { value: 0, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:68dec48e-730b-af78-b781-923222adadf8",
    resource: {
      resourceType: "Claim",
      id: "68dec48e-730b-af78-b781-923222adadf8",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2021-04-02T02:40:58-04:00",
        end: "2021-04-02T02:55:58-04:00",
      },
      created: "2021-04-02T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      supportingInfo: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claiminformationcategory",
                code: "info",
              },
            ],
          },
          valueReference: {
            reference: "urn:uuid:687a0736-73ae-7667-08b8-9b4a130d7fb8",
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:fa5e6ef3-3f56-832b-6f21-5f789288a481",
          },
        },
      ],
      procedure: [
        {
          sequence: 1,
          procedureReference: {
            reference: "urn:uuid:a6cebdd9-d8a8-514e-d2db-74d53e2c3a5c",
          },
        },
        {
          sequence: 2,
          procedureReference: {
            reference: "urn:uuid:51613cf9-82e9-3159-c058-db870e5f0a7f",
          },
        },
        {
          sequence: 3,
          procedureReference: {
            reference: "urn:uuid:ebe7c693-6ec2-6e6f-33a3-fe8591acc586",
          },
        },
        {
          sequence: 4,
          procedureReference: {
            reference: "urn:uuid:71d2fc0b-3af0-f702-f150-93f8cb3132dc",
          },
        },
        {
          sequence: 5,
          procedureReference: {
            reference: "urn:uuid:18d5a201-606d-5b8b-462a-ec2fbc29cd01",
          },
        },
        {
          sequence: 6,
          procedureReference: {
            reference: "urn:uuid:fc57547e-7819-40ad-f7cd-e2fadc0efa44",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
          ],
        },
        {
          sequence: 2,
          procedureSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "18286008",
                display: "Catheter ablation of tissue of heart",
              },
            ],
            text: "Catheter ablation of tissue of heart",
          },
          net: { value: 14967.34, currency: "USD" },
        },
        {
          sequence: 3,
          informationSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "140",
                display: "Influenza, seasonal, injectable, preservative free",
              },
            ],
            text: "Influenza, seasonal, injectable, preservative free",
          },
          net: { value: 140.52, currency: "USD" },
        },
        {
          sequence: 4,
          procedureSequence: [2],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710824005",
                display:
                  "Assessment of health and social care needs (procedure)",
              },
            ],
            text: "Assessment of health and social care needs (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 5,
          procedureSequence: [3],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "430193006",
                display: "Medication Reconciliation (procedure)",
              },
            ],
            text: "Medication Reconciliation (procedure)",
          },
          net: { value: 567.05, currency: "USD" },
        },
        {
          sequence: 6,
          diagnosisSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
        },
        {
          sequence: 7,
          procedureSequence: [4],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "762993000",
                display: "Assessment using Morse Fall Scale (procedure)",
              },
            ],
            text: "Assessment using Morse Fall Scale (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 8,
          procedureSequence: [5],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "428211000124100",
                display: "Assessment of substance use (procedure)",
              },
            ],
            text: "Assessment of substance use (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
        {
          sequence: 9,
          procedureSequence: [6],
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "763302001",
                display:
                  "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)",
              },
            ],
            text: "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)",
          },
          net: { value: 516.65, currency: "USD" },
        },
      ],
      total: { value: 16320.72, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:b10f1e24-f6c9-2ea4-c17f-ecb0587206c7",
    resource: {
      resourceType: "Claim",
      id: "b10f1e24-f6c9-2ea4-c17f-ecb0587206c7",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2021-04-09T02:40:58-04:00",
        end: "2021-04-09T02:55:58-04:00",
      },
      created: "2021-04-09T02:55:58-04:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      supportingInfo: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claiminformationcategory",
                code: "info",
              },
            ],
          },
          valueReference: {
            reference: "urn:uuid:fcbdb37f-25f3-fff8-d6b0-9fdc8114e2ff",
          },
        },
      ],
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "33879002",
                display:
                  "Administration of vaccine to produce active immunity (procedure)",
              },
            ],
            text: "Administration of vaccine to produce active immunity (procedure)",
          },
          encounter: [
            { reference: "urn:uuid:001e2916-2a73-95a5-7171-7e4d8ca549c8" },
          ],
        },
        {
          sequence: 2,
          informationSequence: [1],
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "207",
                display:
                  "SARS-COV-2 (COVID-19) vaccine, mRNA, spike protein, LNP, preservative free, 100 mcg/0.5mL dose",
              },
            ],
            text: "SARS-COV-2 (COVID-19) vaccine, mRNA, spike protein, LNP, preservative free, 100 mcg/0.5mL dose",
          },
          net: { value: 140.52, currency: "USD" },
        },
      ],
      total: { value: 269.68, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:542f3f49-3a2e-312d-849e-a7d92a3f0bbb",
    resource: {
      resourceType: "Claim",
      id: "542f3f49-3a2e-312d-849e-a7d92a3f0bbb",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "pharmacy",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2021-11-18T01:40:58-05:00",
        end: "2021-11-18T01:55:58-05:00",
      },
      created: "2021-11-18T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      prescription: {
        reference: "urn:uuid:54ee102c-8f91-bd74-bc3c-109abe43db9f",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
          ],
        },
      ],
      total: { value: 0, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
  {
    fullUrl: "urn:uuid:3c0eaa41-3c14-6f36-71c5-554d90e01d2b",
    resource: {
      resourceType: "Claim",
      id: "3c0eaa41-3c14-6f36-71c5-554d90e01d2b",
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Frances376 Smitham825",
      },
      billablePeriod: {
        start: "2021-11-18T01:40:58-05:00",
        end: "2021-11-18T01:55:58-05:00",
      },
      created: "2021-11-18T01:55:58-05:00",
      provider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      priority: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/processpriority",
            code: "normal",
          },
        ],
      },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      insurance: [
        { sequence: 1, focal: true, coverage: { display: "Medicare" } },
      ],
      item: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          encounter: [
            { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
          ],
        },
      ],
      total: { value: 77.49, currency: "USD" },
    },
    request: { method: "POST", url: "Claim" },
  },
];

export default entities;
