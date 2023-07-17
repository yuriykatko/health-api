const entities = [
  {
    fullUrl: "urn:uuid:f6b7cf2b-92d3-76db-8835-49197b5d9f95",
    resource: {
      resourceType: "Immunization",
      id: "f6b7cf2b-92d3-76db-8835-49197b5d9f95",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization",
        ],
      },
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "140",
            display: "Influenza, seasonal, injectable, preservative free",
          },
        ],
        text: "Influenza, seasonal, injectable, preservative free",
      },
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
      occurrenceDateTime: "2012-02-10T01:40:58-05:00",
      primarySource: true,
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:0fd78786-f7d1-ce51-38f7-4e492141d955",
    resource: {
      resourceType: "Immunization",
      id: "0fd78786-f7d1-ce51-38f7-4e492141d955",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization",
        ],
      },
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "140",
            display: "Influenza, seasonal, injectable, preservative free",
          },
        ],
        text: "Influenza, seasonal, injectable, preservative free",
      },
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      occurrenceDateTime: "2013-02-15T01:40:58-05:00",
      primarySource: true,
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:48bfa815-ea84-e988-dbfc-68b0fbe4d1e8",
    resource: {
      resourceType: "Immunization",
      id: "48bfa815-ea84-e988-dbfc-68b0fbe4d1e8",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization",
        ],
      },
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "140",
            display: "Influenza, seasonal, injectable, preservative free",
          },
        ],
        text: "Influenza, seasonal, injectable, preservative free",
      },
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      occurrenceDateTime: "2014-02-21T01:40:58-05:00",
      primarySource: true,
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:de47e70e-8bce-c2a6-4892-4a02add24b5a",
    resource: {
      resourceType: "Immunization",
      id: "de47e70e-8bce-c2a6-4892-4a02add24b5a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization",
        ],
      },
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "140",
            display: "Influenza, seasonal, injectable, preservative free",
          },
        ],
        text: "Influenza, seasonal, injectable, preservative free",
      },
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      occurrenceDateTime: "2015-02-27T01:40:58-05:00",
      primarySource: true,
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:0de2e7ab-1970-fcca-75ac-2edcd171e1a7",
    resource: {
      resourceType: "Immunization",
      id: "0de2e7ab-1970-fcca-75ac-2edcd171e1a7",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization",
        ],
      },
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "140",
            display: "Influenza, seasonal, injectable, preservative free",
          },
        ],
        text: "Influenza, seasonal, injectable, preservative free",
      },
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      occurrenceDateTime: "2016-03-04T01:40:58-05:00",
      primarySource: true,
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:d050fb2a-f193-c4ac-1b5d-73a614ee939c",
    resource: {
      resourceType: "Immunization",
      id: "d050fb2a-f193-c4ac-1b5d-73a614ee939c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization",
        ],
      },
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "140",
            display: "Influenza, seasonal, injectable, preservative free",
          },
        ],
        text: "Influenza, seasonal, injectable, preservative free",
      },
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      occurrenceDateTime: "2017-03-10T01:40:58-05:00",
      primarySource: true,
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:971f2f66-1dce-1772-621c-8335a63f2290",
    resource: {
      resourceType: "Immunization",
      id: "971f2f66-1dce-1772-621c-8335a63f2290",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization",
        ],
      },
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "140",
            display: "Influenza, seasonal, injectable, preservative free",
          },
        ],
        text: "Influenza, seasonal, injectable, preservative free",
      },
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      occurrenceDateTime: "2018-03-16T02:40:58-04:00",
      primarySource: true,
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:83489208-562f-c1cd-52d7-6ee13d847fd6",
    resource: {
      resourceType: "Immunization",
      id: "83489208-562f-c1cd-52d7-6ee13d847fd6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization",
        ],
      },
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "140",
            display: "Influenza, seasonal, injectable, preservative free",
          },
        ],
        text: "Influenza, seasonal, injectable, preservative free",
      },
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      occurrenceDateTime: "2019-03-22T02:40:58-04:00",
      primarySource: true,
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:7f031cc4-cf02-8f07-20cb-e364b1349633",
    resource: {
      resourceType: "Immunization",
      id: "7f031cc4-cf02-8f07-20cb-e364b1349633",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization",
        ],
      },
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "140",
            display: "Influenza, seasonal, injectable, preservative free",
          },
        ],
        text: "Influenza, seasonal, injectable, preservative free",
      },
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      occurrenceDateTime: "2020-03-27T02:40:58-04:00",
      primarySource: true,
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:a394b86f-5424-7368-1928-4bfd057651cf",
    resource: {
      resourceType: "Immunization",
      id: "a394b86f-5424-7368-1928-4bfd057651cf",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization",
        ],
      },
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "113",
            display: "Td (adult) preservative free",
          },
        ],
        text: "Td (adult) preservative free",
      },
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      occurrenceDateTime: "2020-03-27T02:40:58-04:00",
      primarySource: true,
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:031ddc68-8f02-ae4d-ac2a-5f31be2572e8",
    resource: {
      resourceType: "Immunization",
      id: "031ddc68-8f02-ae4d-ac2a-5f31be2572e8",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization",
        ],
      },
      status: "completed",
      vaccineCode: {
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
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5ef6b653-7ec7-85ff-8931-2c8eec210e3d" },
      occurrenceDateTime: "2021-03-12T01:40:58-05:00",
      primarySource: true,
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:687a0736-73ae-7667-08b8-9b4a130d7fb8",
    resource: {
      resourceType: "Immunization",
      id: "687a0736-73ae-7667-08b8-9b4a130d7fb8",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization",
        ],
      },
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "140",
            display: "Influenza, seasonal, injectable, preservative free",
          },
        ],
        text: "Influenza, seasonal, injectable, preservative free",
      },
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      occurrenceDateTime: "2021-04-02T02:40:58-04:00",
      primarySource: true,
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:fcbdb37f-25f3-fff8-d6b0-9fdc8114e2ff",
    resource: {
      resourceType: "Immunization",
      id: "fcbdb37f-25f3-fff8-d6b0-9fdc8114e2ff",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization",
        ],
      },
      status: "completed",
      vaccineCode: {
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
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:001e2916-2a73-95a5-7171-7e4d8ca549c8" },
      occurrenceDateTime: "2021-04-09T02:40:58-04:00",
      primarySource: true,
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Immunization" },
  },
];

export default entities;
