const entities = [
  {
    fullUrl: "urn:uuid:44f9007a-b043-0942-116f-0101b53179a1",
    resource: {
      resourceType: "CareTeam",
      id: "44f9007a-b043-0942-116f-0101b53179a1",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-careteam",
        ],
      },
      status: "inactive",
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:e8bc0159-8b0b-8ff7-b614-85a6a650cb26" },
      period: {
        start: "1944-04-23T02:40:58-04:00",
        end: "1944-06-03T02:40:58-04:00",
      },
      participant: [
        {
          role: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "116154003",
                  display: "Patient",
                },
              ],
              text: "Patient",
            },
          ],
          member: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
            display: "Mr. Frances376 Smitham825",
          },
        },
        {
          role: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "223366009",
                  display: "Healthcare professional (occupation)",
                },
              ],
              text: "Healthcare professional (occupation)",
            },
          ],
          member: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
        {
          role: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "224891009",
                  display: "Healthcare services (qualifier value)",
                },
              ],
              text: "Healthcare services (qualifier value)",
            },
          ],
          member: {
            reference:
              "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "39848009",
              display: "Whiplash injury to neck",
            },
          ],
          text: "Whiplash injury to neck",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:2b26c25d-b9da-d5d4-9df0-5254fae09e95",
    resource: {
      resourceType: "CareTeam",
      id: "2b26c25d-b9da-d5d4-9df0-5254fae09e95",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-careteam",
        ],
      },
      status: "active",
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:d58530c3-bf6f-3109-beb2-7aace8344cf9" },
      period: { start: "1985-02-23T01:40:58-05:00" },
      participant: [
        {
          role: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "116154003",
                  display: "Patient",
                },
              ],
              text: "Patient",
            },
          ],
          member: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
            display: "Mr. Frances376 Smitham825",
          },
        },
        {
          role: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "223366009",
                  display: "Healthcare professional (occupation)",
                },
              ],
              text: "Healthcare professional (occupation)",
            },
          ],
          member: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
        {
          role: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "224891009",
                  display: "Healthcare services (qualifier value)",
                },
              ],
              text: "Healthcare services (qualifier value)",
            },
          ],
          member: {
            reference:
              "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "239872002",
              display: "Osteoarthritis of hip",
            },
          ],
          text: "Osteoarthritis of hip",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:8511a1e9-8c42-d976-5893-e920285b2301",
    resource: {
      resourceType: "CareTeam",
      id: "8511a1e9-8c42-d976-5893-e920285b2301",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-careteam",
        ],
      },
      status: "active",
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0d452394-2b0c-1f9e-da52-1af68a0bb062" },
      period: { start: "1994-11-25T01:40:58-05:00" },
      participant: [
        {
          role: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "116154003",
                  display: "Patient",
                },
              ],
              text: "Patient",
            },
          ],
          member: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
            display: "Mr. Frances376 Smitham825",
          },
        },
        {
          role: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "223366009",
                  display: "Healthcare professional (occupation)",
                },
              ],
              text: "Healthcare professional (occupation)",
            },
          ],
          member: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
        {
          role: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "224891009",
                  display: "Healthcare services (qualifier value)",
                },
              ],
              text: "Healthcare services (qualifier value)",
            },
          ],
          member: {
            reference:
              "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55822004",
              display: "Hyperlipidemia",
            },
          ],
          text: "Hyperlipidemia",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:ceb20189-bc92-0f34-f109-35efecfa8d97",
    resource: {
      resourceType: "CareTeam",
      id: "ceb20189-bc92-0f34-f109-35efecfa8d97",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-careteam",
        ],
      },
      status: "active",
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7ea69efc-73a8-74a1-0595-d98e36d47dc2" },
      period: { start: "2014-03-27T05:40:58-04:00" },
      participant: [
        {
          role: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "116154003",
                  display: "Patient",
                },
              ],
              text: "Patient",
            },
          ],
          member: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
            display: "Mr. Frances376 Smitham825",
          },
        },
        {
          role: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "223366009",
                  display: "Healthcare professional (occupation)",
                },
              ],
              text: "Healthcare professional (occupation)",
            },
          ],
          member: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            display: "Dr. Ingrid581 Jacobson885",
          },
        },
        {
          role: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "224891009",
                  display: "Healthcare services (qualifier value)",
                },
              ],
              text: "Healthcare services (qualifier value)",
            },
          ],
          member: {
            reference:
              "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
            display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
          },
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
];

export default entities;
