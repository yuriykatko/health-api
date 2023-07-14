const entities = [
  {
    fullUrl: "urn:uuid:40acc60e-bf5d-c738-29ee-82920f057b84",
    resource: {
      resourceType: "CareTeam",
      id: "40acc60e-bf5d-c738-29ee-82920f057b84",
      status: "active",
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:009d5fb1-0473-e23a-b0c8-c2c3387fc1d7" },
      period: { start: "1984-09-16T22:41:48-04:00" },
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
            reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27",
            display: "Ms. Anna632 Brekke496",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999998479",
            display: "Dr. Terese90 Marquardt819",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|602404f0-064c-34d0-bb51-1d024bd51bc0",
            display: "Niagara Health System - Port Colborne General Site",
          },
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|602404f0-064c-34d0-bb51-1d024bd51bc0",
          display: "Niagara Health System - Port Colborne General Site",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:b4b35234-6864-b9e8-e4ac-cc1e1afa28f9",
    resource: {
      resourceType: "CareTeam",
      id: "b4b35234-6864-b9e8-e4ac-cc1e1afa28f9",
      status: "inactive",
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:9106d432-cf3e-6242-8779-8492c8c810b2" },
      period: {
        start: "2009-09-03T11:01:06-04:00",
        end: "2012-03-26T20:41:48-04:00",
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
            reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27",
            display: "Ms. Anna632 Brekke496",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999998479",
            display: "Dr. Terese90 Marquardt819",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|602404f0-064c-34d0-bb51-1d024bd51bc0",
            display: "Niagara Health System - Port Colborne General Site",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "10509002",
              display: "Acute bronchitis (disorder)",
            },
          ],
          text: "Acute bronchitis (disorder)",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|602404f0-064c-34d0-bb51-1d024bd51bc0",
          display: "Niagara Health System - Port Colborne General Site",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:721492dd-3169-b044-76b8-c710d7b5570c",
    resource: {
      resourceType: "CareTeam",
      id: "721492dd-3169-b044-76b8-c710d7b5570c",
      status: "inactive",
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      period: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2012-07-09T20:41:48-04:00",
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
            reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27",
            display: "Ms. Anna632 Brekke496",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999998479",
            display: "Dr. Terese90 Marquardt819",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|602404f0-064c-34d0-bb51-1d024bd51bc0",
            display: "Niagara Health System - Port Colborne General Site",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "72892002",
              display: "Normal pregnancy",
            },
          ],
          text: "Normal pregnancy",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|602404f0-064c-34d0-bb51-1d024bd51bc0",
          display: "Niagara Health System - Port Colborne General Site",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:ed6cde5f-6cb2-9ece-16f5-07763268b627",
    resource: {
      resourceType: "CareTeam",
      id: "ed6cde5f-6cb2-9ece-16f5-07763268b627",
      status: "inactive",
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      period: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2013-06-17T20:41:48-04:00",
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
            reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27",
            display: "Ms. Anna632 Brekke496",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999998479",
            display: "Dr. Terese90 Marquardt819",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|602404f0-064c-34d0-bb51-1d024bd51bc0",
            display: "Niagara Health System - Port Colborne General Site",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "72892002",
              display: "Normal pregnancy",
            },
          ],
          text: "Normal pregnancy",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|602404f0-064c-34d0-bb51-1d024bd51bc0",
          display: "Niagara Health System - Port Colborne General Site",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:38b78ea0-d994-8b13-21e4-e67e76f5e38e",
    resource: {
      resourceType: "CareTeam",
      id: "38b78ea0-d994-8b13-21e4-e67e76f5e38e",
      status: "inactive",
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:7735e7d7-e2eb-dbe0-44c6-d8ae6eb9b558" },
      period: {
        start: "2014-02-05T19:41:48-05:00",
        end: "2014-03-08T04:13:52-05:00",
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
            reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27",
            display: "Ms. Anna632 Brekke496",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999998479",
            display: "Dr. Terese90 Marquardt819",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|602404f0-064c-34d0-bb51-1d024bd51bc0",
            display: "Niagara Health System - Port Colborne General Site",
          },
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|602404f0-064c-34d0-bb51-1d024bd51bc0",
          display: "Niagara Health System - Port Colborne General Site",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:1c4799bb-d5cb-8705-81d2-cd29e164e9a3",
    resource: {
      resourceType: "CareTeam",
      id: "1c4799bb-d5cb-8705-81d2-cd29e164e9a3",
      status: "active",
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3bb6cd3b-45de-6111-4055-5291bb1bbae2" },
      period: { start: "2014-04-07T05:13:52-04:00" },
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
            reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27",
            display: "Ms. Anna632 Brekke496",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999998479",
            display: "Dr. Terese90 Marquardt819",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|602404f0-064c-34d0-bb51-1d024bd51bc0",
            display: "Niagara Health System - Port Colborne General Site",
          },
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|602404f0-064c-34d0-bb51-1d024bd51bc0",
          display: "Niagara Health System - Port Colborne General Site",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:63b28fcb-68ef-2d69-5328-5f6aa0a9c2f5",
    resource: {
      resourceType: "CareTeam",
      id: "63b28fcb-68ef-2d69-5328-5f6aa0a9c2f5",
      status: "inactive",
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      period: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2017-05-15T20:41:48-04:00",
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
            reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27",
            display: "Ms. Anna632 Brekke496",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999998479",
            display: "Dr. Terese90 Marquardt819",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|602404f0-064c-34d0-bb51-1d024bd51bc0",
            display: "Niagara Health System - Port Colborne General Site",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "72892002",
              display: "Normal pregnancy",
            },
          ],
          text: "Normal pregnancy",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|602404f0-064c-34d0-bb51-1d024bd51bc0",
          display: "Niagara Health System - Port Colborne General Site",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:0f965750-6e59-80a8-8f85-f499fa4af813",
    resource: {
      resourceType: "CareTeam",
      id: "0f965750-6e59-80a8-8f85-f499fa4af813",
      status: "active",
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:de9cb9a4-8db9-2397-0bae-e7b3a51b2e18" },
      period: { start: "2017-05-01T20:41:48-04:00" },
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
            reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27",
            display: "Ms. Anna632 Brekke496",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999978069",
            display: "Dr. Teodoro374 Jaskolski867",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|e2153779-dd12-35aa-838a-dcc3e4b89fe5",
            display: "Welland Mcmaster Family Health Team",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "15777000",
              display: "Prediabetes",
            },
          ],
          text: "Prediabetes",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|e2153779-dd12-35aa-838a-dcc3e4b89fe5",
          display: "Welland Mcmaster Family Health Team",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:36a55d1d-dc8f-52f6-8200-7ddedd7a9f55",
    resource: {
      resourceType: "CareTeam",
      id: "36a55d1d-dc8f-52f6-8200-7ddedd7a9f55",
      status: "inactive",
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3e8379dd-2192-b40b-e819-7c87f9ed1d55" },
      period: {
        start: "2019-08-02T23:17:48-04:00",
        end: "2019-08-21T23:17:48-04:00",
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
            reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27",
            display: "Ms. Anna632 Brekke496",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999998479",
            display: "Dr. Terese90 Marquardt819",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|602404f0-064c-34d0-bb51-1d024bd51bc0",
            display: "Niagara Health System - Port Colborne General Site",
          },
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|602404f0-064c-34d0-bb51-1d024bd51bc0",
          display: "Niagara Health System - Port Colborne General Site",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:6071bc6c-9cb6-038b-c9b3-8f311b392b5c",
    resource: {
      resourceType: "CareTeam",
      id: "6071bc6c-9cb6-038b-c9b3-8f311b392b5c",
      status: "active",
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:6736e667-b9f5-ac86-6d74-cf28e36a31c8" },
      period: { start: "1976-04-09T05:20:13-05:00" },
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
            reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0",
            display: "Mr. Bob965 Rutherford999",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999998849",
            display: "Dr. Micha632 Beahan375",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|6f46a2ed-00bb-3a9e-8857-3365919b57be",
            display: "Southlake Regional Health Centre",
          },
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|6f46a2ed-00bb-3a9e-8857-3365919b57be",
          display: "Southlake Regional Health Centre",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:2122c30c-94a7-799c-58c2-9ec95410392f",
    resource: {
      resourceType: "CareTeam",
      id: "2122c30c-94a7-799c-58c2-9ec95410392f",
      status: "active",
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:54d39897-9a45-b061-4fe0-1bb2f8c14dfb" },
      period: { start: "1979-11-17T12:20:13-05:00" },
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
            reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0",
            display: "Mr. Bob965 Rutherford999",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999998849",
            display: "Dr. Micha632 Beahan375",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|6f46a2ed-00bb-3a9e-8857-3365919b57be",
            display: "Southlake Regional Health Centre",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "233678006",
              display: "Childhood asthma",
            },
          ],
          text: "Childhood asthma",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|6f46a2ed-00bb-3a9e-8857-3365919b57be",
          display: "Southlake Regional Health Centre",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:0c0f28fc-b967-0cb5-4073-dbeddb15dde8",
    resource: {
      resourceType: "CareTeam",
      id: "0c0f28fc-b967-0cb5-4073-dbeddb15dde8",
      status: "active",
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:2fb5a9d1-d900-0fae-ce0a-174c047d5782" },
      period: { start: "1993-02-02T12:20:13-05:00" },
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
            reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0",
            display: "Mr. Bob965 Rutherford999",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999983259",
            display: "Dr. Gregorio366 Pfeffer420",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|6708912e-f869-3868-b29f-084aa1ba5f29",
            display: "Cedar Centre",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "59621000",
              display: "Hypertension",
            },
          ],
          text: "Hypertension",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|6708912e-f869-3868-b29f-084aa1ba5f29",
          display: "Cedar Centre",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:0ec195e6-bf81-34ce-c825-cb56dd62821a",
    resource: {
      resourceType: "CareTeam",
      id: "0ec195e6-bf81-34ce-c825-cb56dd62821a",
      status: "active",
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:ee2eec5c-118d-340d-dba7-c3b01534ebf8" },
      period: { start: "1996-02-20T12:20:13-05:00" },
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
            reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0",
            display: "Mr. Bob965 Rutherford999",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999983259",
            display: "Dr. Gregorio366 Pfeffer420",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|6708912e-f869-3868-b29f-084aa1ba5f29",
            display: "Cedar Centre",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "15777000",
              display: "Prediabetes",
            },
          ],
          text: "Prediabetes",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|6708912e-f869-3868-b29f-084aa1ba5f29",
          display: "Cedar Centre",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:b5847671-c84b-1b4d-4d8d-26fb7c8940c5",
    resource: {
      resourceType: "CareTeam",
      id: "b5847671-c84b-1b4d-4d8d-26fb7c8940c5",
      status: "active",
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:554c6235-c3b7-594d-700f-1cad5ffa9cb4" },
      period: { start: "2014-04-28T01:20:13-04:00" },
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
            reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0",
            display: "Mr. Bob965 Rutherford999",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999998849",
            display: "Dr. Micha632 Beahan375",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|6f46a2ed-00bb-3a9e-8857-3365919b57be",
            display: "Southlake Regional Health Centre",
          },
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|6f46a2ed-00bb-3a9e-8857-3365919b57be",
          display: "Southlake Regional Health Centre",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:8716290d-6dc8-bbfa-6eb3-25600d16bb0a",
    resource: {
      resourceType: "CareTeam",
      id: "8716290d-6dc8-bbfa-6eb3-25600d16bb0a",
      status: "inactive",
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:daf8c623-5248-d1a4-b4ef-744ae92d1cff" },
      period: {
        start: "2020-03-04T12:32:22-05:00",
        end: "2020-03-04T14:00:02-05:00",
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
            reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0",
            display: "Mr. Bob965 Rutherford999",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999998849",
            display: "Dr. Micha632 Beahan375",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|6f46a2ed-00bb-3a9e-8857-3365919b57be",
            display: "Southlake Regional Health Centre",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "840544004",
              display: "Suspected COVID-19",
            },
          ],
          text: "Suspected COVID-19",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|6f46a2ed-00bb-3a9e-8857-3365919b57be",
          display: "Southlake Regional Health Centre",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:acf894a9-d503-7894-a7d1-1ea4c65954e7",
    resource: {
      resourceType: "CareTeam",
      id: "acf894a9-d503-7894-a7d1-1ea4c65954e7",
      status: "inactive",
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:daf8c623-5248-d1a4-b4ef-744ae92d1cff" },
      period: {
        start: "2020-03-04T14:00:02-05:00",
        end: "2020-04-10T03:00:02-04:00",
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
            reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0",
            display: "Mr. Bob965 Rutherford999",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999998849",
            display: "Dr. Micha632 Beahan375",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|6f46a2ed-00bb-3a9e-8857-3365919b57be",
            display: "Southlake Regional Health Centre",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "840539006",
              display: "COVID-19",
            },
          ],
          text: "COVID-19",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|6f46a2ed-00bb-3a9e-8857-3365919b57be",
          display: "Southlake Regional Health Centre",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:1bae90a8-f7ce-f62a-bdf6-4e7540af048f",
    resource: {
      resourceType: "CareTeam",
      id: "1bae90a8-f7ce-f62a-bdf6-4e7540af048f",
      status: "active",
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:aa4e976c-89e5-9727-d1a1-db26b36f7068" },
      period: { start: "1946-02-05T04:03:37-05:00" },
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
            reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d",
            display: "Mr. Carol737 Erdman779",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999997729",
            display: "Dr. Minh326 Stanton715",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|7f41e2d1-af37-3881-ae41-a3a5d38fa786",
            display: "Westside Community Clinic",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "44054006",
              display: "Diabetes",
            },
          ],
          text: "Diabetes",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|7f41e2d1-af37-3881-ae41-a3a5d38fa786",
          display: "Westside Community Clinic",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:2c72a4a0-9f79-b279-d0cb-42315f854d9c",
    resource: {
      resourceType: "CareTeam",
      id: "2c72a4a0-9f79-b279-d0cb-42315f854d9c",
      status: "active",
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:0460c4d6-c1c2-f2c9-79e2-222f69d9263c" },
      period: { start: "1960-06-12T05:03:37-04:00" },
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
            reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d",
            display: "Mr. Carol737 Erdman779",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999997729",
            display: "Dr. Minh326 Stanton715",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|7f41e2d1-af37-3881-ae41-a3a5d38fa786",
            display: "Westside Community Clinic",
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
            "Organization?identifier=https://github.com/synthetichealth/synthea|7f41e2d1-af37-3881-ae41-a3a5d38fa786",
          display: "Westside Community Clinic",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:62a909a2-eaa5-37b5-80c6-3372a9149cc0",
    resource: {
      resourceType: "CareTeam",
      id: "62a909a2-eaa5-37b5-80c6-3372a9149cc0",
      status: "active",
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:907558c0-977e-df31-96fc-6a4ac4b9b3a1" },
      period: { start: "2006-12-31T04:03:37-05:00" },
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
            reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d",
            display: "Mr. Carol737 Erdman779",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999994929",
            display: "Dr. Lindsay928 Brakus656",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|6f4bbd39-ee5e-3244-bb60-642133fcb24f",
            display: "St. Paul's Hospital",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55680006",
              display: "Drug overdose",
            },
          ],
          text: "Drug overdose",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|6f4bbd39-ee5e-3244-bb60-642133fcb24f",
          display: "St. Paul's Hospital",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:4bfee415-cfb8-d08d-7a52-4ac28599965e",
    resource: {
      resourceType: "CareTeam",
      id: "4bfee415-cfb8-d08d-7a52-4ac28599965e",
      status: "inactive",
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:cc6106da-522a-9b50-dda1-455dbbc23f93" },
      period: {
        start: "2012-07-04T09:38:22-04:00",
        end: "2012-09-11T09:38:22-04:00",
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
            reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d",
            display: "Mr. Carol737 Erdman779",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999994929",
            display: "Dr. Lindsay928 Brakus656",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|6f4bbd39-ee5e-3244-bb60-642133fcb24f",
            display: "St. Paul's Hospital",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "359817006",
              display: "Closed fracture of hip",
            },
          ],
          text: "Closed fracture of hip",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|6f4bbd39-ee5e-3244-bb60-642133fcb24f",
          display: "St. Paul's Hospital",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:3cae322a-6642-d03e-41b1-63d692b440ca",
    resource: {
      resourceType: "CareTeam",
      id: "3cae322a-6642-d03e-41b1-63d692b440ca",
      status: "inactive",
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:5cebc1c8-b971-5cd7-b338-5cb29d71c2e3" },
      period: {
        start: "2013-11-01T10:20:01-04:00",
        end: "2014-02-17T09:20:01-05:00",
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
            reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d",
            display: "Mr. Carol737 Erdman779",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999994929",
            display: "Dr. Lindsay928 Brakus656",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|6f4bbd39-ee5e-3244-bb60-642133fcb24f",
            display: "St. Paul's Hospital",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "65966004",
              display: "Fracture of forearm",
            },
          ],
          text: "Fracture of forearm",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|6f4bbd39-ee5e-3244-bb60-642133fcb24f",
          display: "St. Paul's Hospital",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:32aae2aa-9685-7310-4134-3b9bb606cb21",
    resource: {
      resourceType: "CareTeam",
      id: "32aae2aa-9685-7310-4134-3b9bb606cb21",
      status: "inactive",
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:4ebf48dc-d61c-e5c6-3aef-1e516a3971bb" },
      period: {
        start: "2014-02-06T04:03:37-05:00",
        end: "2014-03-08T12:52:47-05:00",
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
            reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d",
            display: "Mr. Carol737 Erdman779",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999997729",
            display: "Dr. Minh326 Stanton715",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|7f41e2d1-af37-3881-ae41-a3a5d38fa786",
            display: "Westside Community Clinic",
          },
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|7f41e2d1-af37-3881-ae41-a3a5d38fa786",
          display: "Westside Community Clinic",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:7391c224-78eb-97eb-5b9f-f7c6e1b82a3d",
    resource: {
      resourceType: "CareTeam",
      id: "7391c224-78eb-97eb-5b9f-f7c6e1b82a3d",
      status: "inactive",
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:1937bc0a-495d-da51-a70f-b5b627ba8004" },
      period: {
        start: "2016-03-19T10:20:01-04:00",
        end: "2016-04-29T10:20:01-04:00",
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
            reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d",
            display: "Mr. Carol737 Erdman779",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999994929",
            display: "Dr. Lindsay928 Brakus656",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|6f4bbd39-ee5e-3244-bb60-642133fcb24f",
            display: "St. Paul's Hospital",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "44465007",
              display: "Sprain of ankle",
            },
          ],
          text: "Sprain of ankle",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|6f4bbd39-ee5e-3244-bb60-642133fcb24f",
          display: "St. Paul's Hospital",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:ab046651-6795-91f7-7ba6-5d784f4ddc7c",
    resource: {
      resourceType: "CareTeam",
      id: "ab046651-6795-91f7-7ba6-5d784f4ddc7c",
      status: "inactive",
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:39c297e3-1533-8a63-7ed1-382ba22a446e" },
      period: {
        start: "2020-03-07T04:14:19-05:00",
        end: "2020-03-07T04:50:45-05:00",
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
            reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d",
            display: "Mr. Carol737 Erdman779",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999997729",
            display: "Dr. Minh326 Stanton715",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|7f41e2d1-af37-3881-ae41-a3a5d38fa786",
            display: "Westside Community Clinic",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "840544004",
              display: "Suspected COVID-19",
            },
          ],
          text: "Suspected COVID-19",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|7f41e2d1-af37-3881-ae41-a3a5d38fa786",
          display: "Westside Community Clinic",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:ebc2eaa9-f8f4-a014-812c-d01dc05a4a9c",
    resource: {
      resourceType: "CareTeam",
      id: "ebc2eaa9-f8f4-a014-812c-d01dc05a4a9c",
      status: "inactive",
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:39c297e3-1533-8a63-7ed1-382ba22a446e" },
      period: {
        start: "2020-03-07T04:50:45-05:00",
        end: "2020-03-26T20:50:45-04:00",
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
            reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d",
            display: "Mr. Carol737 Erdman779",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999997729",
            display: "Dr. Minh326 Stanton715",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|7f41e2d1-af37-3881-ae41-a3a5d38fa786",
            display: "Westside Community Clinic",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "840539006",
              display: "COVID-19",
            },
          ],
          text: "COVID-19",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|7f41e2d1-af37-3881-ae41-a3a5d38fa786",
          display: "Westside Community Clinic",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:2d2c766d-afcc-1c3f-2bf9-222732542216",
    resource: {
      resourceType: "CareTeam",
      id: "2d2c766d-afcc-1c3f-2bf9-222732542216",
      status: "active",
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:45b3abbc-7831-2d2e-7002-7f0fa120f65e" },
      period: { start: "1985-01-21T23:29:59-05:00" },
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
            reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77",
            display: "Mr. Edward499 Rodriguez71",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999939",
            display: "Dr. Almeta56 Carter549",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|58b5db9c-c06c-3cdd-82e0-dc5c3c6add21",
            display: "Fort Simpson Health Centre",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "59621000",
              display: "Hypertension",
            },
          ],
          text: "Hypertension",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|58b5db9c-c06c-3cdd-82e0-dc5c3c6add21",
          display: "Fort Simpson Health Centre",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:99e68494-7983-4952-1a79-3add1d7e09a4",
    resource: {
      resourceType: "CareTeam",
      id: "99e68494-7983-4952-1a79-3add1d7e09a4",
      status: "inactive",
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:0960a8bf-007f-9fe6-41ba-7ff569e3e8b0" },
      period: {
        start: "2014-02-05T23:29:59-05:00",
        end: "2014-03-08T08:01:50-05:00",
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
            reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77",
            display: "Mr. Edward499 Rodriguez71",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
            display: "Dr. Lesley194 Fisher429",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|4ac9b1f5-9732-3de7-b683-a7ae5d67b3e6",
            display: "Hay River Regional Health Centre",
          },
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|4ac9b1f5-9732-3de7-b683-a7ae5d67b3e6",
          display: "Hay River Regional Health Centre",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:04bc9ac5-390b-26e9-985b-148852498e75",
    resource: {
      resourceType: "CareTeam",
      id: "04bc9ac5-390b-26e9-985b-148852498e75",
      status: "active",
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:d83990d9-67c8-3c35-2e78-4431fc28b5d4" },
      period: { start: "2014-04-07T09:01:50-04:00" },
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
            reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77",
            display: "Mr. Edward499 Rodriguez71",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
            display: "Dr. Lesley194 Fisher429",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|4ac9b1f5-9732-3de7-b683-a7ae5d67b3e6",
            display: "Hay River Regional Health Centre",
          },
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|4ac9b1f5-9732-3de7-b683-a7ae5d67b3e6",
          display: "Hay River Regional Health Centre",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:38484532-8041-5a6d-7281-8e61353a69da",
    resource: {
      resourceType: "CareTeam",
      id: "38484532-8041-5a6d-7281-8e61353a69da",
      status: "inactive",
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:982b2ced-fba6-3e9b-dbff-2bfd847ac103" },
      period: {
        start: "2018-04-24T05:13:59-04:00",
        end: "2018-05-10T05:45:17-04:00",
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
            reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77",
            display: "Mr. Edward499 Rodriguez71",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999919",
            display: "Dr. Elvin140 Herzog843",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|4ac9b1f5-9732-3de7-b683-a7ae5d67b3e6",
            display: "Hay River Regional Health Centre",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "284549007",
              display: "Laceration of hand",
            },
          ],
          text: "Laceration of hand",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|4ac9b1f5-9732-3de7-b683-a7ae5d67b3e6",
          display: "Hay River Regional Health Centre",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:a8dd3972-169a-7403-a3ee-6f7ec37c966c",
    resource: {
      resourceType: "CareTeam",
      id: "a8dd3972-169a-7403-a3ee-6f7ec37c966c",
      status: "inactive",
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:823b4e28-229e-ec0f-9a30-c8233e002be9" },
      period: {
        start: "2020-02-22T23:42:25-05:00",
        end: "2020-02-23T00:25:08-05:00",
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
            reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77",
            display: "Mr. Edward499 Rodriguez71",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
            display: "Dr. Lesley194 Fisher429",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|4ac9b1f5-9732-3de7-b683-a7ae5d67b3e6",
            display: "Hay River Regional Health Centre",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "840544004",
              display: "Suspected COVID-19",
            },
          ],
          text: "Suspected COVID-19",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|4ac9b1f5-9732-3de7-b683-a7ae5d67b3e6",
          display: "Hay River Regional Health Centre",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
  {
    fullUrl: "urn:uuid:3a1065f7-9d34-dab1-74b0-6f35c251fb35",
    resource: {
      resourceType: "CareTeam",
      id: "3a1065f7-9d34-dab1-74b0-6f35c251fb35",
      status: "inactive",
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:823b4e28-229e-ec0f-9a30-c8233e002be9" },
      period: {
        start: "2020-02-23T00:25:08-05:00",
        end: "2020-03-13T00:25:08-04:00",
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
            reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77",
            display: "Mr. Edward499 Rodriguez71",
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
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
            display: "Dr. Lesley194 Fisher429",
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
              "Organization?identifier=https://github.com/synthetichealth/synthea|4ac9b1f5-9732-3de7-b683-a7ae5d67b3e6",
            display: "Hay River Regional Health Centre",
          },
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "840539006",
              display: "COVID-19",
            },
          ],
          text: "COVID-19",
        },
      ],
      managingOrganization: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|4ac9b1f5-9732-3de7-b683-a7ae5d67b3e6",
          display: "Hay River Regional Health Centre",
        },
      ],
    },
    request: { method: "POST", url: "CareTeam" },
  },
];

export default entities;
