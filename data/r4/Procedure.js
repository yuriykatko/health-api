const entities = [
  {
    fullUrl: "urn:uuid:3d29f9e3-3b1f-dceb-4b1a-eb75c517a0fc",
    resource: {
      resourceType: "Procedure",
      id: "3d29f9e3-3b1f-dceb-4b1a-eb75c517a0fc",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "710824005",
            display: "Assessment of health and social care needs (procedure)",
          },
        ],
        text: "Assessment of health and social care needs (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
      performedPeriod: {
        start: "2012-02-10T01:40:58-05:00",
        end: "2012-02-10T02:15:08-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:6f8e43a5-b719-9806-a07a-0e8a79888f82",
    resource: {
      resourceType: "Procedure",
      id: "6f8e43a5-b719-9806-a07a-0e8a79888f82",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "428211000124100",
            display: "Assessment of substance use (procedure)",
          },
        ],
        text: "Assessment of substance use (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
      performedPeriod: {
        start: "2012-02-10T02:15:08-05:00",
        end: "2012-02-10T02:29:02-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:885764ed-c717-011d-b65a-0d566f748980",
    resource: {
      resourceType: "Procedure",
      id: "885764ed-c717-011d-b65a-0d566f748980",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
      performedPeriod: {
        start: "2012-02-10T02:29:02-05:00",
        end: "2012-02-10T02:55:11-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:80587bc5-4679-ce5f-54da-63b89391bed9",
    resource: {
      resourceType: "Procedure",
      id: "80587bc5-4679-ce5f-54da-63b89391bed9",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "710824005",
            display: "Assessment of health and social care needs (procedure)",
          },
        ],
        text: "Assessment of health and social care needs (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      performedPeriod: {
        start: "2013-02-15T01:40:58-05:00",
        end: "2013-02-15T02:31:40-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:609b3888-235e-2de8-70a6-ff0e8511b2dd",
    resource: {
      resourceType: "Procedure",
      id: "609b3888-235e-2de8-70a6-ff0e8511b2dd",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "762993000",
            display: "Assessment using Morse Fall Scale (procedure)",
          },
        ],
        text: "Assessment using Morse Fall Scale (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      performedPeriod: {
        start: "2013-02-15T02:31:40-05:00",
        end: "2013-02-15T02:57:57-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:2f997ddf-94c3-08cc-9c51-a4c18456a304",
    resource: {
      resourceType: "Procedure",
      id: "2f997ddf-94c3-08cc-9c51-a4c18456a304",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "171207006",
            display: "Depression screening (procedure)",
          },
        ],
        text: "Depression screening (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      performedPeriod: {
        start: "2013-02-15T02:57:57-05:00",
        end: "2013-02-15T03:08:11-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:4abda3c2-20d5-48c6-6183-7f068f2334aa",
    resource: {
      resourceType: "Procedure",
      id: "4abda3c2-20d5-48c6-6183-7f068f2334aa",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      performedPeriod: {
        start: "2013-02-15T03:08:11-05:00",
        end: "2013-02-15T03:29:15-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:bcf836b5-a2a1-3ff3-7a1d-281aa9c3beab",
    resource: {
      resourceType: "Procedure",
      id: "bcf836b5-a2a1-3ff3-7a1d-281aa9c3beab",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "710824005",
            display: "Assessment of health and social care needs (procedure)",
          },
        ],
        text: "Assessment of health and social care needs (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      performedPeriod: {
        start: "2014-02-21T01:40:58-05:00",
        end: "2014-02-21T02:24:36-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:edf1840d-c3c5-d318-75d1-05e7ef7df1bd",
    resource: {
      resourceType: "Procedure",
      id: "edf1840d-c3c5-d318-75d1-05e7ef7df1bd",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "762993000",
            display: "Assessment using Morse Fall Scale (procedure)",
          },
        ],
        text: "Assessment using Morse Fall Scale (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      performedPeriod: {
        start: "2014-02-21T02:24:36-05:00",
        end: "2014-02-21T02:51:43-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:5f6320dd-b921-6b72-2c6f-e050a646b8f7",
    resource: {
      resourceType: "Procedure",
      id: "5f6320dd-b921-6b72-2c6f-e050a646b8f7",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "171207006",
            display: "Depression screening (procedure)",
          },
        ],
        text: "Depression screening (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      performedPeriod: {
        start: "2014-02-21T02:51:43-05:00",
        end: "2014-02-21T03:03:07-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:0d5eeab0-dac6-5dff-28b8-857701325392",
    resource: {
      resourceType: "Procedure",
      id: "0d5eeab0-dac6-5dff-28b8-857701325392",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      performedPeriod: {
        start: "2014-02-21T03:03:07-05:00",
        end: "2014-02-21T03:25:06-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:94060731-afdc-533a-7fcb-ea5a639b66a5",
    resource: {
      resourceType: "Procedure",
      id: "94060731-afdc-533a-7fcb-ea5a639b66a5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "73761001",
            display: "Colonoscopy",
          },
        ],
        text: "Colonoscopy",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:dc2fc493-9d4f-4ada-91d2-9e81690a983d" },
      performedPeriod: {
        start: "2015-01-07T05:10:52-05:00",
        end: "2015-01-07T05:53:33-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:dd679391-9318-dcab-fd15-ea9c78b4c9a6",
    resource: {
      resourceType: "Procedure",
      id: "dd679391-9318-dcab-fd15-ea9c78b4c9a6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "18286008",
            display: "Catheter ablation of tissue of heart",
          },
        ],
        text: "Catheter ablation of tissue of heart",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      performedPeriod: {
        start: "2015-02-27T01:40:58-05:00",
        end: "2015-02-27T01:55:58-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      reasonReference: [
        {
          reference: "urn:uuid:f0528934-1d9e-63de-0358-2c0e1c24c1c4",
          display: "Atrial Fibrillation",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:f556b4ac-71e1-1a53-ad54-a9d4205927fe",
    resource: {
      resourceType: "Procedure",
      id: "f556b4ac-71e1-1a53-ad54-a9d4205927fe",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "710824005",
            display: "Assessment of health and social care needs (procedure)",
          },
        ],
        text: "Assessment of health and social care needs (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      performedPeriod: {
        start: "2015-02-27T01:40:58-05:00",
        end: "2015-02-27T02:39:07-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:74c7274b-c112-fff9-27e4-52049f163148",
    resource: {
      resourceType: "Procedure",
      id: "74c7274b-c112-fff9-27e4-52049f163148",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "171207006",
            display: "Depression screening (procedure)",
          },
        ],
        text: "Depression screening (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      performedPeriod: {
        start: "2015-02-27T02:39:07-05:00",
        end: "2015-02-27T02:51:59-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:fb36da96-e45b-105a-91fe-e5aa451e6b1b",
    resource: {
      resourceType: "Procedure",
      id: "fb36da96-e45b-105a-91fe-e5aa451e6b1b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      performedPeriod: {
        start: "2015-02-27T02:51:59-05:00",
        end: "2015-02-27T03:13:28-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:63f12704-ccbb-7226-a673-dae483040fe8",
    resource: {
      resourceType: "Procedure",
      id: "63f12704-ccbb-7226-a673-dae483040fe8",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "428211000124100",
            display: "Assessment of substance use (procedure)",
          },
        ],
        text: "Assessment of substance use (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      performedPeriod: {
        start: "2015-02-27T03:13:28-05:00",
        end: "2015-02-27T03:26:07-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:4a0a4854-1f20-14e3-f610-a88eab6d1882",
    resource: {
      resourceType: "Procedure",
      id: "4a0a4854-1f20-14e3-f610-a88eab6d1882",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      performedPeriod: {
        start: "2015-02-27T03:26:07-05:00",
        end: "2015-02-27T03:49:08-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:f2fdc866-2b0e-ea65-53f0-feda3a7a7496",
    resource: {
      resourceType: "Procedure",
      id: "f2fdc866-2b0e-ea65-53f0-feda3a7a7496",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "180325003",
            display: "Electrical cardioversion",
          },
        ],
        text: "Electrical cardioversion",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      performedPeriod: {
        start: "2016-03-04T01:40:58-05:00",
        end: "2016-03-04T01:55:58-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      reasonReference: [
        {
          reference: "urn:uuid:f0528934-1d9e-63de-0358-2c0e1c24c1c4",
          display: "Atrial Fibrillation",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:bcc4987a-064a-c343-2029-9c9b2a44a607",
    resource: {
      resourceType: "Procedure",
      id: "bcc4987a-064a-c343-2029-9c9b2a44a607",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "710824005",
            display: "Assessment of health and social care needs (procedure)",
          },
        ],
        text: "Assessment of health and social care needs (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      performedPeriod: {
        start: "2016-03-04T01:40:58-05:00",
        end: "2016-03-04T02:17:53-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:0998807b-5408-c0be-644c-7c3d87b1d934",
    resource: {
      resourceType: "Procedure",
      id: "0998807b-5408-c0be-644c-7c3d87b1d934",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "428211000124100",
            display: "Assessment of substance use (procedure)",
          },
        ],
        text: "Assessment of substance use (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      performedPeriod: {
        start: "2016-03-04T02:17:53-05:00",
        end: "2016-03-04T02:32:30-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:5a57352e-f507-7131-86e4-134cbcdf7e4f",
    resource: {
      resourceType: "Procedure",
      id: "5a57352e-f507-7131-86e4-134cbcdf7e4f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      performedPeriod: {
        start: "2016-03-04T02:32:30-05:00",
        end: "2016-03-04T02:54:03-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:faab72ed-bab3-c6ec-3746-5984f2d3ed4b",
    resource: {
      resourceType: "Procedure",
      id: "faab72ed-bab3-c6ec-3746-5984f2d3ed4b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "180325003",
            display: "Electrical cardioversion",
          },
        ],
        text: "Electrical cardioversion",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      performedPeriod: {
        start: "2017-03-10T01:40:58-05:00",
        end: "2017-03-10T01:55:58-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      reasonReference: [
        {
          reference: "urn:uuid:f0528934-1d9e-63de-0358-2c0e1c24c1c4",
          display: "Atrial Fibrillation",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:3de2ca95-bca6-8719-a126-393acf027b55",
    resource: {
      resourceType: "Procedure",
      id: "3de2ca95-bca6-8719-a126-393acf027b55",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "710824005",
            display: "Assessment of health and social care needs (procedure)",
          },
        ],
        text: "Assessment of health and social care needs (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      performedPeriod: {
        start: "2017-03-10T01:40:58-05:00",
        end: "2017-03-10T02:25:37-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:e9eb2b71-c459-df8e-bb19-249ae0fc207d",
    resource: {
      resourceType: "Procedure",
      id: "e9eb2b71-c459-df8e-bb19-249ae0fc207d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "710841007",
            display: "Assessment of anxiety (procedure)",
          },
        ],
        text: "Assessment of anxiety (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      performedPeriod: {
        start: "2017-03-10T02:25:37-05:00",
        end: "2017-03-10T02:51:14-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:1808f47f-b20a-7536-884b-72ecb4d7386b",
    resource: {
      resourceType: "Procedure",
      id: "1808f47f-b20a-7536-884b-72ecb4d7386b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "762993000",
            display: "Assessment using Morse Fall Scale (procedure)",
          },
        ],
        text: "Assessment using Morse Fall Scale (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      performedPeriod: {
        start: "2017-03-10T02:51:14-05:00",
        end: "2017-03-10T03:14:38-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:b9ec4318-3679-f557-90c2-1f672666124c",
    resource: {
      resourceType: "Procedure",
      id: "b9ec4318-3679-f557-90c2-1f672666124c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "866148006",
            display: "Screening for domestic abuse (procedure)",
          },
        ],
        text: "Screening for domestic abuse (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      performedPeriod: {
        start: "2017-03-10T03:14:38-05:00",
        end: "2017-03-10T03:45:18-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:fe7fb561-5c9c-18f7-c941-12c030cf3cd5",
    resource: {
      resourceType: "Procedure",
      id: "fe7fb561-5c9c-18f7-c941-12c030cf3cd5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "171207006",
            display: "Depression screening (procedure)",
          },
        ],
        text: "Depression screening (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      performedPeriod: {
        start: "2017-03-10T03:45:18-05:00",
        end: "2017-03-10T03:56:57-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:15bc6004-f385-fa7a-e053-f20228900e88",
    resource: {
      resourceType: "Procedure",
      id: "15bc6004-f385-fa7a-e053-f20228900e88",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      performedPeriod: {
        start: "2017-03-10T03:56:57-05:00",
        end: "2017-03-10T04:17:19-05:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:81b94380-c329-5528-5b8f-3bbaef4244c4",
    resource: {
      resourceType: "Procedure",
      id: "81b94380-c329-5528-5b8f-3bbaef4244c4",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "180325003",
            display: "Electrical cardioversion",
          },
        ],
        text: "Electrical cardioversion",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      performedPeriod: {
        start: "2018-03-16T02:40:58-04:00",
        end: "2018-03-16T02:55:58-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      reasonReference: [
        {
          reference: "urn:uuid:f0528934-1d9e-63de-0358-2c0e1c24c1c4",
          display: "Atrial Fibrillation",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:ace9f897-0d0a-dafd-f160-8fb24acb6ced",
    resource: {
      resourceType: "Procedure",
      id: "ace9f897-0d0a-dafd-f160-8fb24acb6ced",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "710824005",
            display: "Assessment of health and social care needs (procedure)",
          },
        ],
        text: "Assessment of health and social care needs (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      performedPeriod: {
        start: "2018-03-16T02:40:58-04:00",
        end: "2018-03-16T03:40:36-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:e68931c3-dc04-548d-690e-b34b35be2d2f",
    resource: {
      resourceType: "Procedure",
      id: "e68931c3-dc04-548d-690e-b34b35be2d2f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "430193006",
            display: "Medication Reconciliation (procedure)",
          },
        ],
        text: "Medication Reconciliation (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      performedPeriod: {
        start: "2018-03-16T02:40:58-04:00",
        end: "2018-03-16T02:55:58-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:f5485ed0-02cb-4261-ab01-c743544f1931",
    resource: {
      resourceType: "Procedure",
      id: "f5485ed0-02cb-4261-ab01-c743544f1931",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "762993000",
            display: "Assessment using Morse Fall Scale (procedure)",
          },
        ],
        text: "Assessment using Morse Fall Scale (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      performedPeriod: {
        start: "2018-03-16T03:40:36-04:00",
        end: "2018-03-16T04:05:09-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:6ed3c840-bd6e-41ef-11b4-4b4659b8f0d4",
    resource: {
      resourceType: "Procedure",
      id: "6ed3c840-bd6e-41ef-11b4-4b4659b8f0d4",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "171207006",
            display: "Depression screening (procedure)",
          },
        ],
        text: "Depression screening (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      performedPeriod: {
        start: "2018-03-16T04:05:09-04:00",
        end: "2018-03-16T04:19:19-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:a58e140f-d156-4642-924b-93c6c2734375",
    resource: {
      resourceType: "Procedure",
      id: "a58e140f-d156-4642-924b-93c6c2734375",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      performedPeriod: {
        start: "2018-03-16T04:19:19-04:00",
        end: "2018-03-16T04:40:38-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:8332e1a0-1990-36da-cee1-49142419836f",
    resource: {
      resourceType: "Procedure",
      id: "8332e1a0-1990-36da-cee1-49142419836f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "428211000124100",
            display: "Assessment of substance use (procedure)",
          },
        ],
        text: "Assessment of substance use (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      performedPeriod: {
        start: "2018-03-16T04:40:38-04:00",
        end: "2018-03-16T04:53:55-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:9f72b0eb-74d7-18d0-b6fd-43a3f2b14de3",
    resource: {
      resourceType: "Procedure",
      id: "9f72b0eb-74d7-18d0-b6fd-43a3f2b14de3",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      performedPeriod: {
        start: "2018-03-16T04:53:55-04:00",
        end: "2018-03-16T05:22:28-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:a39b786c-02a0-6972-6bbb-5aeab0569fc2",
    resource: {
      resourceType: "Procedure",
      id: "a39b786c-02a0-6972-6bbb-5aeab0569fc2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "180325003",
            display: "Electrical cardioversion",
          },
        ],
        text: "Electrical cardioversion",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      performedPeriod: {
        start: "2019-03-22T02:40:58-04:00",
        end: "2019-03-22T02:55:58-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      reasonReference: [
        {
          reference: "urn:uuid:f0528934-1d9e-63de-0358-2c0e1c24c1c4",
          display: "Atrial Fibrillation",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:feabd602-aff6-ca45-acf6-8adb3bfe6bc9",
    resource: {
      resourceType: "Procedure",
      id: "feabd602-aff6-ca45-acf6-8adb3bfe6bc9",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "710824005",
            display: "Assessment of health and social care needs (procedure)",
          },
        ],
        text: "Assessment of health and social care needs (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      performedPeriod: {
        start: "2019-03-22T02:40:58-04:00",
        end: "2019-03-22T03:27:57-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:d64e32fd-021c-a08f-8a48-0d1d85a46f44",
    resource: {
      resourceType: "Procedure",
      id: "d64e32fd-021c-a08f-8a48-0d1d85a46f44",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "430193006",
            display: "Medication Reconciliation (procedure)",
          },
        ],
        text: "Medication Reconciliation (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      performedPeriod: {
        start: "2019-03-22T02:40:58-04:00",
        end: "2019-03-22T02:55:58-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:4595038d-8e15-ca0e-44bf-0ff068357090",
    resource: {
      resourceType: "Procedure",
      id: "4595038d-8e15-ca0e-44bf-0ff068357090",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "710841007",
            display: "Assessment of anxiety (procedure)",
          },
        ],
        text: "Assessment of anxiety (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      performedPeriod: {
        start: "2019-03-22T03:27:57-04:00",
        end: "2019-03-22T03:53:01-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:2f681eef-89e8-d212-a586-a806a0d7472b",
    resource: {
      resourceType: "Procedure",
      id: "2f681eef-89e8-d212-a586-a806a0d7472b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "762993000",
            display: "Assessment using Morse Fall Scale (procedure)",
          },
        ],
        text: "Assessment using Morse Fall Scale (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      performedPeriod: {
        start: "2019-03-22T03:53:01-04:00",
        end: "2019-03-22T04:18:39-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:0f99a099-48c7-8ca7-93c2-36e6cf1fe579",
    resource: {
      resourceType: "Procedure",
      id: "0f99a099-48c7-8ca7-93c2-36e6cf1fe579",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "866148006",
            display: "Screening for domestic abuse (procedure)",
          },
        ],
        text: "Screening for domestic abuse (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      performedPeriod: {
        start: "2019-03-22T04:18:39-04:00",
        end: "2019-03-22T04:57:36-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:64fb6039-f323-d5e9-400d-fc17fc60e108",
    resource: {
      resourceType: "Procedure",
      id: "64fb6039-f323-d5e9-400d-fc17fc60e108",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "18286008",
            display: "Catheter ablation of tissue of heart",
          },
        ],
        text: "Catheter ablation of tissue of heart",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      performedPeriod: {
        start: "2020-03-27T02:40:58-04:00",
        end: "2020-03-27T02:55:58-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      reasonReference: [
        {
          reference: "urn:uuid:f0528934-1d9e-63de-0358-2c0e1c24c1c4",
          display: "Atrial Fibrillation",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:f5bdd10e-ad7f-de23-0f0a-0cd457731a22",
    resource: {
      resourceType: "Procedure",
      id: "f5bdd10e-ad7f-de23-0f0a-0cd457731a22",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "710824005",
            display: "Assessment of health and social care needs (procedure)",
          },
        ],
        text: "Assessment of health and social care needs (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      performedPeriod: {
        start: "2020-03-27T02:40:58-04:00",
        end: "2020-03-27T03:15:37-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:6358ac6d-df48-9f77-88ff-737286dc190a",
    resource: {
      resourceType: "Procedure",
      id: "6358ac6d-df48-9f77-88ff-737286dc190a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "430193006",
            display: "Medication Reconciliation (procedure)",
          },
        ],
        text: "Medication Reconciliation (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      performedPeriod: {
        start: "2020-03-27T02:40:58-04:00",
        end: "2020-03-27T02:55:58-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:9fc5a287-a9e6-2387-f7c4-d329f40dae77",
    resource: {
      resourceType: "Procedure",
      id: "9fc5a287-a9e6-2387-f7c4-d329f40dae77",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "710841007",
            display: "Assessment of anxiety (procedure)",
          },
        ],
        text: "Assessment of anxiety (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      performedPeriod: {
        start: "2020-03-27T03:15:37-04:00",
        end: "2020-03-27T03:44:01-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:f3a52217-8ccf-b0c2-103e-66c935f18095",
    resource: {
      resourceType: "Procedure",
      id: "f3a52217-8ccf-b0c2-103e-66c935f18095",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "762993000",
            display: "Assessment using Morse Fall Scale (procedure)",
          },
        ],
        text: "Assessment using Morse Fall Scale (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      performedPeriod: {
        start: "2020-03-27T03:44:01-04:00",
        end: "2020-03-27T04:10:46-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:840eedd8-2491-a4c1-9641-d54fda578608",
    resource: {
      resourceType: "Procedure",
      id: "840eedd8-2491-a4c1-9641-d54fda578608",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "428211000124100",
            display: "Assessment of substance use (procedure)",
          },
        ],
        text: "Assessment of substance use (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      performedPeriod: {
        start: "2020-03-27T04:10:46-04:00",
        end: "2020-03-27T04:21:36-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:38d21536-0b6c-10f4-200a-3bc7c6a2ad30",
    resource: {
      resourceType: "Procedure",
      id: "38d21536-0b6c-10f4-200a-3bc7c6a2ad30",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      performedPeriod: {
        start: "2020-03-27T04:21:36-04:00",
        end: "2020-03-27T04:49:20-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:a6cebdd9-d8a8-514e-d2db-74d53e2c3a5c",
    resource: {
      resourceType: "Procedure",
      id: "a6cebdd9-d8a8-514e-d2db-74d53e2c3a5c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "18286008",
            display: "Catheter ablation of tissue of heart",
          },
        ],
        text: "Catheter ablation of tissue of heart",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      performedPeriod: {
        start: "2021-04-02T02:40:58-04:00",
        end: "2021-04-02T02:55:58-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      reasonReference: [
        {
          reference: "urn:uuid:f0528934-1d9e-63de-0358-2c0e1c24c1c4",
          display: "Atrial Fibrillation",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:51613cf9-82e9-3159-c058-db870e5f0a7f",
    resource: {
      resourceType: "Procedure",
      id: "51613cf9-82e9-3159-c058-db870e5f0a7f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "710824005",
            display: "Assessment of health and social care needs (procedure)",
          },
        ],
        text: "Assessment of health and social care needs (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      performedPeriod: {
        start: "2021-04-02T02:40:58-04:00",
        end: "2021-04-02T03:32:46-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:ebe7c693-6ec2-6e6f-33a3-fe8591acc586",
    resource: {
      resourceType: "Procedure",
      id: "ebe7c693-6ec2-6e6f-33a3-fe8591acc586",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "430193006",
            display: "Medication Reconciliation (procedure)",
          },
        ],
        text: "Medication Reconciliation (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      performedPeriod: {
        start: "2021-04-02T02:40:58-04:00",
        end: "2021-04-02T02:55:58-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:71d2fc0b-3af0-f702-f150-93f8cb3132dc",
    resource: {
      resourceType: "Procedure",
      id: "71d2fc0b-3af0-f702-f150-93f8cb3132dc",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "762993000",
            display: "Assessment using Morse Fall Scale (procedure)",
          },
        ],
        text: "Assessment using Morse Fall Scale (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      performedPeriod: {
        start: "2021-04-02T03:32:46-04:00",
        end: "2021-04-02T03:48:55-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:18d5a201-606d-5b8b-462a-ec2fbc29cd01",
    resource: {
      resourceType: "Procedure",
      id: "18d5a201-606d-5b8b-462a-ec2fbc29cd01",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "428211000124100",
            display: "Assessment of substance use (procedure)",
          },
        ],
        text: "Assessment of substance use (procedure)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      performedPeriod: {
        start: "2021-04-02T03:48:55-04:00",
        end: "2021-04-02T04:01:18-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:fc57547e-7819-40ad-f7cd-e2fadc0efa44",
    resource: {
      resourceType: "Procedure",
      id: "fc57547e-7819-40ad-f7cd-e2fadc0efa44",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure",
        ],
      },
      status: "completed",
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      performedPeriod: {
        start: "2021-04-02T04:01:18-04:00",
        end: "2021-04-02T04:30:17-04:00",
      },
      location: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
];

export default entities;
