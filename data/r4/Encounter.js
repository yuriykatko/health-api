const entities = [
  {
    fullUrl: "urn:uuid:e8bc0159-8b0b-8ff7-b614-85a6a650cb26",
    resource: {
      resourceType: "Encounter",
      id: "e8bc0159-8b0b-8ff7-b614-85a6a650cb26",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "e8bc0159-8b0b-8ff7-b614-85a6a650cb26",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMER",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "50849002",
              display: "Emergency room admission (procedure)",
            },
          ],
          text: "Emergency room admission (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1944-04-23T02:40:58-04:00",
            end: "1944-04-23T03:40:58-04:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "1944-04-23T02:40:58-04:00",
        end: "1944-04-23T03:40:58-04:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:e1f0cb6f-8192-04eb-72db-7c5c3eceef2d",
    resource: {
      resourceType: "Encounter",
      id: "e1f0cb6f-8192-04eb-72db-7c5c3eceef2d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "e1f0cb6f-8192-04eb-72db-7c5c3eceef2d",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "410620009",
              display: "Well child visit (procedure)",
            },
          ],
          text: "Well child visit (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1955-11-18T01:40:58-05:00",
            end: "1955-11-18T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "1955-11-18T01:40:58-05:00",
        end: "1955-11-18T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:a63bab0b-bfa7-02f8-a81f-d134e8abae49",
    resource: {
      resourceType: "Encounter",
      id: "a63bab0b-bfa7-02f8-a81f-d134e8abae49",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "a63bab0b-bfa7-02f8-a81f-d134e8abae49",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1956-11-23T01:40:58-05:00",
            end: "1956-11-23T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "1956-11-23T01:40:58-05:00",
        end: "1956-11-23T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:ffe7916d-32bf-fd09-5444-3af0a42357ad",
    resource: {
      resourceType: "Encounter",
      id: "ffe7916d-32bf-fd09-5444-3af0a42357ad",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "ffe7916d-32bf-fd09-5444-3af0a42357ad",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1957-11-29T01:40:58-05:00",
            end: "1957-11-29T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "1957-11-29T01:40:58-05:00",
        end: "1957-11-29T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:ab1b44a8-e592-358e-c82b-2ad93e761853",
    resource: {
      resourceType: "Encounter",
      id: "ab1b44a8-e592-358e-c82b-2ad93e761853",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "ab1b44a8-e592-358e-c82b-2ad93e761853",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1960-12-02T01:40:58-05:00",
            end: "1960-12-02T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "1960-12-02T01:40:58-05:00",
        end: "1960-12-02T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:946b1ccf-b3fe-73e0-89fe-5c4eca918fbd",
    resource: {
      resourceType: "Encounter",
      id: "946b1ccf-b3fe-73e0-89fe-5c4eca918fbd",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "946b1ccf-b3fe-73e0-89fe-5c4eca918fbd",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1963-12-06T01:40:58-05:00",
            end: "1963-12-06T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "1963-12-06T01:40:58-05:00",
        end: "1963-12-06T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:a13656cd-5139-6065-fb02-e396ade6da0f",
    resource: {
      resourceType: "Encounter",
      id: "a13656cd-5139-6065-fb02-e396ade6da0f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "a13656cd-5139-6065-fb02-e396ade6da0f",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1966-12-09T01:40:58-05:00",
            end: "1966-12-09T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "1966-12-09T01:40:58-05:00",
        end: "1966-12-09T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:c3c7e2bb-ffc3-a8a8-c1aa-5d4849c89735",
    resource: {
      resourceType: "Encounter",
      id: "c3c7e2bb-ffc3-a8a8-c1aa-5d4849c89735",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "c3c7e2bb-ffc3-a8a8-c1aa-5d4849c89735",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1969-12-12T01:40:58-05:00",
            end: "1969-12-12T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "1969-12-12T01:40:58-05:00",
        end: "1969-12-12T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:78d2eb6e-cb2c-b0d9-eef1-81ced734b85d",
    resource: {
      resourceType: "Encounter",
      id: "78d2eb6e-cb2c-b0d9-eef1-81ced734b85d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "78d2eb6e-cb2c-b0d9-eef1-81ced734b85d",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1972-12-15T01:40:58-05:00",
            end: "1972-12-15T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "1972-12-15T01:40:58-05:00",
        end: "1972-12-15T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:a195ade9-6085-554c-a315-88ec3974dd78",
    resource: {
      resourceType: "Encounter",
      id: "a195ade9-6085-554c-a315-88ec3974dd78",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "a195ade9-6085-554c-a315-88ec3974dd78",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1975-12-19T01:40:58-05:00",
            end: "1975-12-19T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "1975-12-19T01:40:58-05:00",
        end: "1975-12-19T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:f3d0a0e4-3218-bbf7-717e-5d326d1b42bf",
    resource: {
      resourceType: "Encounter",
      id: "f3d0a0e4-3218-bbf7-717e-5d326d1b42bf",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "f3d0a0e4-3218-bbf7-717e-5d326d1b42bf",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1978-10-06T02:40:58-04:00",
            end: "1978-10-06T02:55:58-04:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "1978-10-06T02:40:58-04:00",
        end: "1978-10-06T02:55:58-04:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:07ffec4d-5141-35f6-44fb-9f88c1223e2a",
    resource: {
      resourceType: "Encounter",
      id: "07ffec4d-5141-35f6-44fb-9f88c1223e2a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "07ffec4d-5141-35f6-44fb-9f88c1223e2a",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1982-10-15T02:40:58-04:00",
            end: "1982-10-15T02:55:58-04:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "1982-10-15T02:40:58-04:00",
        end: "1982-10-15T02:55:58-04:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:d58530c3-bf6f-3109-beb2-7aace8344cf9",
    resource: {
      resourceType: "Encounter",
      id: "d58530c3-bf6f-3109-beb2-7aace8344cf9",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "d58530c3-bf6f-3109-beb2-7aace8344cf9",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "185347001",
              display: "Encounter for problem",
            },
          ],
          text: "Encounter for problem",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1985-02-23T01:40:58-05:00",
            end: "1985-02-23T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "1985-02-23T01:40:58-05:00",
        end: "1985-02-23T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "239872002",
              display: "Osteoarthritis of hip",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:cc78a557-b4d0-642f-fa8e-70a154f184e8",
    resource: {
      resourceType: "Encounter",
      id: "cc78a557-b4d0-642f-fa8e-70a154f184e8",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "cc78a557-b4d0-642f-fa8e-70a154f184e8",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1986-10-24T02:40:58-04:00",
            end: "1986-10-24T02:55:58-04:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "1986-10-24T02:40:58-04:00",
        end: "1986-10-24T02:55:58-04:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:a6f0d27d-801a-0af6-5be2-8e9ef2930c1e",
    resource: {
      resourceType: "Encounter",
      id: "a6f0d27d-801a-0af6-5be2-8e9ef2930c1e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "a6f0d27d-801a-0af6-5be2-8e9ef2930c1e",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "185349003",
              display: "Encounter for 'check-up'",
            },
          ],
          text: "Encounter for 'check-up'",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1988-09-30T02:40:58-04:00",
            end: "1988-09-30T02:55:58-04:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "1988-09-30T02:40:58-04:00",
        end: "1988-09-30T02:55:58-04:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:b82c0a84-cd96-d86d-5812-c73e3794af9c",
    resource: {
      resourceType: "Encounter",
      id: "b82c0a84-cd96-d86d-5812-c73e3794af9c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "b82c0a84-cd96-d86d-5812-c73e3794af9c",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1990-10-12T02:40:58-04:00",
            end: "1990-10-12T02:55:58-04:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "1990-10-12T02:40:58-04:00",
        end: "1990-10-12T02:55:58-04:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:baf9d9d4-62ba-4e7b-0e8f-ca4409adc107",
    resource: {
      resourceType: "Encounter",
      id: "baf9d9d4-62ba-4e7b-0e8f-ca4409adc107",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "baf9d9d4-62ba-4e7b-0e8f-ca4409adc107",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1991-10-18T02:40:58-04:00",
            end: "1991-10-18T02:55:58-04:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "1991-10-18T02:40:58-04:00",
        end: "1991-10-18T02:55:58-04:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:cf267831-5a5f-01b0-79f9-3e84a5c9ef4c",
    resource: {
      resourceType: "Encounter",
      id: "cf267831-5a5f-01b0-79f9-3e84a5c9ef4c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "cf267831-5a5f-01b0-79f9-3e84a5c9ef4c",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1993-10-29T02:40:58-04:00",
            end: "1993-10-29T02:55:58-04:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "1993-10-29T02:40:58-04:00",
        end: "1993-10-29T02:55:58-04:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:dd53132e-bce0-5363-1a6d-29ec0933cfc6",
    resource: {
      resourceType: "Encounter",
      id: "dd53132e-bce0-5363-1a6d-29ec0933cfc6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "dd53132e-bce0-5363-1a6d-29ec0933cfc6",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1994-11-04T01:40:58-05:00",
            end: "1994-11-04T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "1994-11-04T01:40:58-05:00",
        end: "1994-11-04T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:0d452394-2b0c-1f9e-da52-1af68a0bb062",
    resource: {
      resourceType: "Encounter",
      id: "0d452394-2b0c-1f9e-da52-1af68a0bb062",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "0d452394-2b0c-1f9e-da52-1af68a0bb062",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1994-11-25T01:40:58-05:00",
            end: "1994-11-25T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "1994-11-25T01:40:58-05:00",
        end: "1994-11-25T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:1b75fab2-0e5e-8169-a796-be72bd4d5bcd",
    resource: {
      resourceType: "Encounter",
      id: "1b75fab2-0e5e-8169-a796-be72bd4d5bcd",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "1b75fab2-0e5e-8169-a796-be72bd4d5bcd",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1995-11-10T01:40:58-05:00",
            end: "1995-11-10T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "1995-11-10T01:40:58-05:00",
        end: "1995-11-10T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:965abeb3-4174-d8ba-9515-a7b3e83d9172",
    resource: {
      resourceType: "Encounter",
      id: "965abeb3-4174-d8ba-9515-a7b3e83d9172",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "965abeb3-4174-d8ba-9515-a7b3e83d9172",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1995-11-25T01:40:58-05:00",
            end: "1995-11-25T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "1995-11-25T01:40:58-05:00",
        end: "1995-11-25T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:718fa39f-ba82-2900-67fa-3dba15c61ffa",
    resource: {
      resourceType: "Encounter",
      id: "718fa39f-ba82-2900-67fa-3dba15c61ffa",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "718fa39f-ba82-2900-67fa-3dba15c61ffa",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1996-11-15T01:40:58-05:00",
            end: "1996-11-15T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "1996-11-15T01:40:58-05:00",
        end: "1996-11-15T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:2333b1cd-ad09-3073-0696-ee9c140737b6",
    resource: {
      resourceType: "Encounter",
      id: "2333b1cd-ad09-3073-0696-ee9c140737b6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "2333b1cd-ad09-3073-0696-ee9c140737b6",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1996-11-24T01:40:58-05:00",
            end: "1996-11-24T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "1996-11-24T01:40:58-05:00",
        end: "1996-11-24T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:495d60aa-d26c-964a-ea81-a109ea280cad",
    resource: {
      resourceType: "Encounter",
      id: "495d60aa-d26c-964a-ea81-a109ea280cad",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "495d60aa-d26c-964a-ea81-a109ea280cad",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1997-11-24T01:40:58-05:00",
            end: "1997-11-24T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "1997-11-24T01:40:58-05:00",
        end: "1997-11-24T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:9bec8f7b-081f-26e5-22ad-290ec7e5fa28",
    resource: {
      resourceType: "Encounter",
      id: "9bec8f7b-081f-26e5-22ad-290ec7e5fa28",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "9bec8f7b-081f-26e5-22ad-290ec7e5fa28",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1998-11-24T01:40:58-05:00",
            end: "1998-11-24T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "1998-11-24T01:40:58-05:00",
        end: "1998-11-24T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:1478d811-530a-72f3-d291-2bbdea8a5fde",
    resource: {
      resourceType: "Encounter",
      id: "1478d811-530a-72f3-d291-2bbdea8a5fde",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "1478d811-530a-72f3-d291-2bbdea8a5fde",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1999-11-24T01:40:58-05:00",
            end: "1999-11-24T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "1999-11-24T01:40:58-05:00",
        end: "1999-11-24T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:784cf40a-63a4-811c-7a48-76166a7532df",
    resource: {
      resourceType: "Encounter",
      id: "784cf40a-63a4-811c-7a48-76166a7532df",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "784cf40a-63a4-811c-7a48-76166a7532df",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "1999-12-03T01:40:58-05:00",
            end: "1999-12-03T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "1999-12-03T01:40:58-05:00",
        end: "1999-12-03T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:07b6f41f-e852-a015-9767-7bc44503fb3e",
    resource: {
      resourceType: "Encounter",
      id: "07b6f41f-e852-a015-9767-7bc44503fb3e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "07b6f41f-e852-a015-9767-7bc44503fb3e",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2000-11-23T01:40:58-05:00",
            end: "2000-11-23T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2000-11-23T01:40:58-05:00",
        end: "2000-11-23T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:2f8bd24b-1c19-084c-3350-c62c7b9c9ace",
    resource: {
      resourceType: "Encounter",
      id: "2f8bd24b-1c19-084c-3350-c62c7b9c9ace",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "2f8bd24b-1c19-084c-3350-c62c7b9c9ace",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2001-11-23T01:40:58-05:00",
            end: "2001-11-23T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2001-11-23T01:40:58-05:00",
        end: "2001-11-23T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:67eace0b-9f1e-5b52-0c1f-4c1b91626ca0",
    resource: {
      resourceType: "Encounter",
      id: "67eace0b-9f1e-5b52-0c1f-4c1b91626ca0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "67eace0b-9f1e-5b52-0c1f-4c1b91626ca0",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2001-12-14T01:40:58-05:00",
            end: "2001-12-14T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "2001-12-14T01:40:58-05:00",
        end: "2001-12-14T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:0065e2e0-f9e1-13d2-7a75-8bad676cb53e",
    resource: {
      resourceType: "Encounter",
      id: "0065e2e0-f9e1-13d2-7a75-8bad676cb53e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "0065e2e0-f9e1-13d2-7a75-8bad676cb53e",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2002-11-23T01:40:58-05:00",
            end: "2002-11-23T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2002-11-23T01:40:58-05:00",
        end: "2002-11-23T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:1b000b85-ccb2-85e5-4228-caa08544105a",
    resource: {
      resourceType: "Encounter",
      id: "1b000b85-ccb2-85e5-4228-caa08544105a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "1b000b85-ccb2-85e5-4228-caa08544105a",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2003-11-23T01:40:58-05:00",
            end: "2003-11-23T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2003-11-23T01:40:58-05:00",
        end: "2003-11-23T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:6c46bd34-4e70-4fed-1b47-d0bc19abebf8",
    resource: {
      resourceType: "Encounter",
      id: "6c46bd34-4e70-4fed-1b47-d0bc19abebf8",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "6c46bd34-4e70-4fed-1b47-d0bc19abebf8",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2003-12-26T01:40:58-05:00",
            end: "2003-12-26T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "2003-12-26T01:40:58-05:00",
        end: "2003-12-26T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:bb71b8f5-15d4-337a-ab7f-310698989b95",
    resource: {
      resourceType: "Encounter",
      id: "bb71b8f5-15d4-337a-ab7f-310698989b95",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "bb71b8f5-15d4-337a-ab7f-310698989b95",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2004-11-22T01:40:58-05:00",
            end: "2004-11-22T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2004-11-22T01:40:58-05:00",
        end: "2004-11-22T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:55eb54d4-94a2-35f9-5396-a3184da89585",
    resource: {
      resourceType: "Encounter",
      id: "55eb54d4-94a2-35f9-5396-a3184da89585",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "55eb54d4-94a2-35f9-5396-a3184da89585",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2004-12-31T01:40:58-05:00",
            end: "2004-12-31T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "2004-12-31T01:40:58-05:00",
        end: "2004-12-31T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:09103c57-d806-a5b3-bce1-e27a4311cd46",
    resource: {
      resourceType: "Encounter",
      id: "09103c57-d806-a5b3-bce1-e27a4311cd46",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "09103c57-d806-a5b3-bce1-e27a4311cd46",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2005-11-22T01:40:58-05:00",
            end: "2005-11-22T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2005-11-22T01:40:58-05:00",
        end: "2005-11-22T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:54ff763b-773d-17d9-5010-291d2e62dc59",
    resource: {
      resourceType: "Encounter",
      id: "54ff763b-773d-17d9-5010-291d2e62dc59",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "54ff763b-773d-17d9-5010-291d2e62dc59",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2006-11-22T01:40:58-05:00",
            end: "2006-11-22T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2006-11-22T01:40:58-05:00",
        end: "2006-11-22T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:e8bc1e87-0c82-b107-3fa9-8ac889079795",
    resource: {
      resourceType: "Encounter",
      id: "e8bc1e87-0c82-b107-3fa9-8ac889079795",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "e8bc1e87-0c82-b107-3fa9-8ac889079795",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2007-01-12T01:40:58-05:00",
            end: "2007-01-12T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "2007-01-12T01:40:58-05:00",
        end: "2007-01-12T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:fcbad825-7d87-65a6-6edb-457d75cb4909",
    resource: {
      resourceType: "Encounter",
      id: "fcbad825-7d87-65a6-6edb-457d75cb4909",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "fcbad825-7d87-65a6-6edb-457d75cb4909",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2007-11-22T01:40:58-05:00",
            end: "2007-11-22T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2007-11-22T01:40:58-05:00",
        end: "2007-11-22T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:9afd5dd5-5d49-fbfd-8de1-467729f031df",
    resource: {
      resourceType: "Encounter",
      id: "9afd5dd5-5d49-fbfd-8de1-467729f031df",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "9afd5dd5-5d49-fbfd-8de1-467729f031df",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2008-11-21T01:40:58-05:00",
            end: "2008-11-21T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2008-11-21T01:40:58-05:00",
        end: "2008-11-21T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:a741082d-de56-2dcc-c2bc-9e2d734cec10",
    resource: {
      resourceType: "Encounter",
      id: "a741082d-de56-2dcc-c2bc-9e2d734cec10",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "a741082d-de56-2dcc-c2bc-9e2d734cec10",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2009-01-23T01:40:58-05:00",
            end: "2009-01-23T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "2009-01-23T01:40:58-05:00",
        end: "2009-01-23T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:32805baa-8f71-da8d-4b1a-6661022b0270",
    resource: {
      resourceType: "Encounter",
      id: "32805baa-8f71-da8d-4b1a-6661022b0270",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "32805baa-8f71-da8d-4b1a-6661022b0270",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2009-11-21T01:40:58-05:00",
            end: "2009-11-21T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2009-11-21T01:40:58-05:00",
        end: "2009-11-21T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:e0df8625-5bef-8d32-c0cf-80ddea40b2bd",
    resource: {
      resourceType: "Encounter",
      id: "e0df8625-5bef-8d32-c0cf-80ddea40b2bd",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "e0df8625-5bef-8d32-c0cf-80ddea40b2bd",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2010-11-21T01:40:58-05:00",
            end: "2010-11-21T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2010-11-21T01:40:58-05:00",
        end: "2010-11-21T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:e1c4709a-b1a2-d143-3564-eafbc2cfa0b9",
    resource: {
      resourceType: "Encounter",
      id: "e1c4709a-b1a2-d143-3564-eafbc2cfa0b9",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "e1c4709a-b1a2-d143-3564-eafbc2cfa0b9",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2011-02-04T01:40:58-05:00",
            end: "2011-02-04T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "2011-02-04T01:40:58-05:00",
        end: "2011-02-04T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:7b15ad1a-24c8-0d45-c32f-9941233f3e20",
    resource: {
      resourceType: "Encounter",
      id: "7b15ad1a-24c8-0d45-c32f-9941233f3e20",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "7b15ad1a-24c8-0d45-c32f-9941233f3e20",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2011-11-21T01:40:58-05:00",
            end: "2011-11-21T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2011-11-21T01:40:58-05:00",
        end: "2011-11-21T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7",
    resource: {
      resourceType: "Encounter",
      id: "96b068cb-4f56-3b06-1647-055c4925a1c7",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "96b068cb-4f56-3b06-1647-055c4925a1c7",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2012-02-10T01:40:58-05:00",
            end: "2012-02-10T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "2012-02-10T01:40:58-05:00",
        end: "2012-02-10T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8",
    resource: {
      resourceType: "Encounter",
      id: "bc5405d8-f0f0-396d-a6a8-f966daac53c8",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "bc5405d8-f0f0-396d-a6a8-f966daac53c8",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2012-11-20T01:40:58-05:00",
            end: "2012-11-20T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2012-11-20T01:40:58-05:00",
        end: "2012-11-20T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6",
    resource: {
      resourceType: "Encounter",
      id: "ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2013-02-15T01:40:58-05:00",
            end: "2013-02-15T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "2013-02-15T01:40:58-05:00",
        end: "2013-02-15T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350",
    resource: {
      resourceType: "Encounter",
      id: "32696af4-10b2-4c61-e239-4ee45233f350",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "32696af4-10b2-4c61-e239-4ee45233f350",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2013-11-20T01:40:58-05:00",
            end: "2013-11-20T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2013-11-20T01:40:58-05:00",
        end: "2013-11-20T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:a1aa9e96-e503-95ca-5897-96581cf9dcf5",
    resource: {
      resourceType: "Encounter",
      id: "a1aa9e96-e503-95ca-5897-96581cf9dcf5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "a1aa9e96-e503-95ca-5897-96581cf9dcf5",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "185347001",
              display: "Encounter for problem (procedure)",
            },
          ],
          text: "Encounter for problem (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2014-02-02T01:40:58-05:00",
            end: "2014-02-02T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2014-02-02T01:40:58-05:00",
        end: "2014-02-02T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b",
    resource: {
      resourceType: "Encounter",
      id: "47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2014-02-21T01:40:58-05:00",
            end: "2014-02-21T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "2014-02-21T01:40:58-05:00",
        end: "2014-02-21T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:7ea69efc-73a8-74a1-0595-d98e36d47dc2",
    resource: {
      resourceType: "Encounter",
      id: "7ea69efc-73a8-74a1-0595-d98e36d47dc2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "7ea69efc-73a8-74a1-0595-d98e36d47dc2",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter (procedure)",
            },
          ],
          text: "Follow-up encounter (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2014-03-27T05:40:58-04:00",
            end: "2014-03-27T05:55:58-04:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2014-03-27T05:40:58-04:00",
        end: "2014-03-27T05:55:58-04:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2",
    resource: {
      resourceType: "Encounter",
      id: "b3dc260b-475f-e086-d36a-d51e7fb276a2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "b3dc260b-475f-e086-d36a-d51e7fb276a2",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2014-11-20T01:40:58-05:00",
            end: "2014-11-20T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2014-11-20T01:40:58-05:00",
        end: "2014-11-20T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:dc2fc493-9d4f-4ada-91d2-9e81690a983d",
    resource: {
      resourceType: "Encounter",
      id: "dc2fc493-9d4f-4ada-91d2-9e81690a983d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "dc2fc493-9d4f-4ada-91d2-9e81690a983d",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "185349003",
              display: "Encounter for 'check-up'",
            },
          ],
          text: "Encounter for 'check-up'",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2015-01-07T05:10:52-05:00",
            end: "2015-01-07T05:53:33-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2015-01-07T05:10:52-05:00",
        end: "2015-01-07T05:53:33-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe",
    resource: {
      resourceType: "Encounter",
      id: "a244bb2d-a790-fea8-3e20-cf51bccdeabe",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "a244bb2d-a790-fea8-3e20-cf51bccdeabe",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2015-02-27T01:40:58-05:00",
            end: "2015-02-27T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "2015-02-27T01:40:58-05:00",
        end: "2015-02-27T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28",
    resource: {
      resourceType: "Encounter",
      id: "a7a95222-d6bc-be38-53e6-7afa40287e28",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "a7a95222-d6bc-be38-53e6-7afa40287e28",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2015-11-20T01:40:58-05:00",
            end: "2015-11-20T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2015-11-20T01:40:58-05:00",
        end: "2015-11-20T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723",
    resource: {
      resourceType: "Encounter",
      id: "4fa715e5-3406-05c2-d262-0f4ed0208723",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "4fa715e5-3406-05c2-d262-0f4ed0208723",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2016-03-04T01:40:58-05:00",
            end: "2016-03-04T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "2016-03-04T01:40:58-05:00",
        end: "2016-03-04T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1",
    resource: {
      resourceType: "Encounter",
      id: "57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2016-11-19T01:40:58-05:00",
            end: "2016-11-19T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2016-11-19T01:40:58-05:00",
        end: "2016-11-19T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce",
    resource: {
      resourceType: "Encounter",
      id: "df4f2445-95a7-7929-498d-71905bfbb7ce",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "df4f2445-95a7-7929-498d-71905bfbb7ce",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2017-03-10T01:40:58-05:00",
            end: "2017-03-10T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "2017-03-10T01:40:58-05:00",
        end: "2017-03-10T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:9ccbf5a3-78c2-dd31-5e05-6ad80a34e923",
    resource: {
      resourceType: "Encounter",
      id: "9ccbf5a3-78c2-dd31-5e05-6ad80a34e923",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "9ccbf5a3-78c2-dd31-5e05-6ad80a34e923",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "185345009",
              display: "Encounter for symptom",
            },
          ],
          text: "Encounter for symptom",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2017-06-07T13:40:58-04:00",
            end: "2017-06-07T13:55:58-04:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2017-06-07T13:40:58-04:00",
        end: "2017-06-07T13:55:58-04:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "195662009",
              display: "Acute viral pharyngitis (disorder)",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540",
    resource: {
      resourceType: "Encounter",
      id: "5a196794-21eb-46b2-8825-78359ff53540",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "5a196794-21eb-46b2-8825-78359ff53540",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2017-11-19T01:40:58-05:00",
            end: "2017-11-19T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2017-11-19T01:40:58-05:00",
        end: "2017-11-19T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626",
    resource: {
      resourceType: "Encounter",
      id: "0f8c2928-31d8-516b-f67b-341d0767b626",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "0f8c2928-31d8-516b-f67b-341d0767b626",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2018-03-16T02:40:58-04:00",
            end: "2018-03-16T02:55:58-04:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "2018-03-16T02:40:58-04:00",
        end: "2018-03-16T02:55:58-04:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd",
    resource: {
      resourceType: "Encounter",
      id: "3da1b45a-98cf-40a0-639b-da3769375fbd",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "3da1b45a-98cf-40a0-639b-da3769375fbd",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2018-11-19T01:40:58-05:00",
            end: "2018-11-19T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2018-11-19T01:40:58-05:00",
        end: "2018-11-19T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba",
    resource: {
      resourceType: "Encounter",
      id: "82b0be07-3d37-1e84-4675-a5be060c6eba",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "82b0be07-3d37-1e84-4675-a5be060c6eba",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2019-03-22T02:40:58-04:00",
            end: "2019-03-22T02:55:58-04:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "2019-03-22T02:40:58-04:00",
        end: "2019-03-22T02:55:58-04:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459",
    resource: {
      resourceType: "Encounter",
      id: "45de51a5-826b-5376-07e6-942c4c348459",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "45de51a5-826b-5376-07e6-942c4c348459",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2019-11-19T01:40:58-05:00",
            end: "2019-11-19T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2019-11-19T01:40:58-05:00",
        end: "2019-11-19T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58",
    resource: {
      resourceType: "Encounter",
      id: "0e600ef2-45d6-bb45-9556-d77c6bbf0b58",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "0e600ef2-45d6-bb45-9556-d77c6bbf0b58",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2020-03-27T02:40:58-04:00",
            end: "2020-03-27T02:55:58-04:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "2020-03-27T02:40:58-04:00",
        end: "2020-03-27T02:55:58-04:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e",
    resource: {
      resourceType: "Encounter",
      id: "f7056c3e-56f3-7b6c-a0a9-64e8a55f520e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "f7056c3e-56f3-7b6c-a0a9-64e8a55f520e",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2020-11-18T01:40:58-05:00",
            end: "2020-11-18T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2020-11-18T01:40:58-05:00",
        end: "2020-11-18T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:5ef6b653-7ec7-85ff-8931-2c8eec210e3d",
    resource: {
      resourceType: "Encounter",
      id: "5ef6b653-7ec7-85ff-8931-2c8eec210e3d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "5ef6b653-7ec7-85ff-8931-2c8eec210e3d",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
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
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2021-03-12T01:40:58-05:00",
            end: "2021-03-12T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2021-03-12T01:40:58-05:00",
        end: "2021-03-12T01:55:58-05:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d",
    resource: {
      resourceType: "Encounter",
      id: "ced92b48-fcc3-947b-faf8-6b584f22780d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "ced92b48-fcc3-947b-faf8-6b584f22780d",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "162673000",
              display: "General examination of patient (procedure)",
            },
          ],
          text: "General examination of patient (procedure)",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2021-04-02T02:40:58-04:00",
            end: "2021-04-02T02:55:58-04:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            display: "Dr. Saul605 Casper496",
          },
        },
      ],
      period: {
        start: "2021-04-02T02:40:58-04:00",
        end: "2021-04-02T02:55:58-04:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
            display: "PCP39516",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:001e2916-2a73-95a5-7171-7e4d8ca549c8",
    resource: {
      resourceType: "Encounter",
      id: "001e2916-2a73-95a5-7171-7e4d8ca549c8",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "001e2916-2a73-95a5-7171-7e4d8ca549c8",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
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
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2021-04-09T02:40:58-04:00",
            end: "2021-04-09T02:55:58-04:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2021-04-09T02:40:58-04:00",
        end: "2021-04-09T02:55:58-04:00",
      },
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
  {
    fullUrl: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e",
    resource: {
      resourceType: "Encounter",
      id: "7dc8a0a0-6512-3e63-424c-410ce7f97f5e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter",
        ],
      },
      identifier: [
        {
          use: "official",
          system: "https://github.com/synthetichealth/synthea",
          value: "7dc8a0a0-6512-3e63-424c-410ce7f97f5e",
        },
      ],
      status: "finished",
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      type: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "390906007",
              display: "Follow-up encounter",
            },
          ],
          text: "Follow-up encounter",
        },
      ],
      subject: {
        reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        display: "Mr. Frances376 Smitham825",
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PPRF",
                  display: "primary performer",
                },
              ],
              text: "primary performer",
            },
          ],
          period: {
            start: "2021-11-18T01:40:58-05:00",
            end: "2021-11-18T01:55:58-05:00",
          },
          individual: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
      ],
      period: {
        start: "2021-11-18T01:40:58-05:00",
        end: "2021-11-18T01:55:58-05:00",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
        },
      ],
      location: [
        {
          location: {
            reference:
              "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      serviceProvider: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Encounter" },
  },
];

export default entities;
