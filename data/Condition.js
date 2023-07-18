const entities = [
  {
    fullUrl: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
    resource: {
      resourceType: "Condition",
      id: "7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "72892002",
            display: "Normal pregnancy",
          },
        ],
        text: "Normal pregnancy",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      onsetDateTime: "2011-12-12T19:41:48-05:00",
      abatementDateTime: "2012-07-09T20:41:48-04:00",
      recordedDate: "2011-12-12T19:41:48-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:7ebe6f7c-940a-7f5d-f559-50cdc67e3e49",
    resource: {
      resourceType: "Condition",
      id: "7ebe6f7c-940a-7f5d-f559-50cdc67e3e49",
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
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:e4454323-d398-f30b-0aa8-960843fc5446" },
      onsetDateTime: "2012-11-01T16:41:48-04:00",
      abatementDateTime: "2012-11-12T23:41:48-05:00",
      recordedDate: "2012-11-01T16:41:48-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
    resource: {
      resourceType: "Condition",
      id: "227e2274-0518-c2b9-2222-41b66307a4ad",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "72892002",
            display: "Normal pregnancy",
          },
        ],
        text: "Normal pregnancy",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      onsetDateTime: "2012-11-19T19:41:48-05:00",
      abatementDateTime: "2013-06-17T20:41:48-04:00",
      recordedDate: "2012-11-19T19:41:48-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:06cc932a-3255-5435-53e3-b329c53e7f87",
    resource: {
      resourceType: "Condition",
      id: "06cc932a-3255-5435-53e3-b329c53e7f87",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "198992004",
            display: "Antepartum eclampsia",
          },
        ],
        text: "Antepartum eclampsia",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:f6a3e204-d6f7-415a-25e6-bfe07eace1d7" },
      onsetDateTime: "2013-06-03T20:41:48-04:00",
      abatementDateTime: "2013-06-17T20:41:48-04:00",
      recordedDate: "2013-06-03T20:41:48-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:195f31fc-d720-e5e5-b4f0-fc90a0b82c89",
    resource: {
      resourceType: "Condition",
      id: "195f31fc-d720-e5e5-b4f0-fc90a0b82c89",
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
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:007aa27a-87b3-fa05-9f5f-ec61f3dc278a" },
      onsetDateTime: "2013-10-11T18:41:48-04:00",
      abatementDateTime: "2013-10-24T08:41:48-04:00",
      recordedDate: "2013-10-11T18:41:48-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:8ded196c-bc5c-80cd-e9b5-b69300c87c92",
    resource: {
      resourceType: "Condition",
      id: "8ded196c-bc5c-80cd-e9b5-b69300c87c92",
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
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:7735e7d7-e2eb-dbe0-44c6-d8ae6eb9b558" },
      onsetDateTime: "2014-02-05T19:41:48-05:00",
      recordedDate: "2014-02-05T19:41:48-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:1e3f6b59-5ce5-46b6-eaa9-99323569655c",
    resource: {
      resourceType: "Condition",
      id: "1e3f6b59-5ce5-46b6-eaa9-99323569655c",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "444814009",
            display: "Viral sinusitis (disorder)",
          },
        ],
        text: "Viral sinusitis (disorder)",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:89fad4d4-7e47-cacb-756f-6bc8ddcde66c" },
      onsetDateTime: "2014-10-25T08:41:48-04:00",
      abatementDateTime: "2014-11-01T08:41:48-04:00",
      recordedDate: "2014-10-25T08:41:48-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
    resource: {
      resourceType: "Condition",
      id: "78a29dda-0291-59db-eca8-d51a0d77a08c",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "72892002",
            display: "Normal pregnancy",
          },
        ],
        text: "Normal pregnancy",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:a20738ec-e0ea-1984-71cd-e35e0b098ce9" },
      onsetDateTime: "2016-07-04T20:41:48-04:00",
      abatementDateTime: "2016-07-29T20:41:48-04:00",
      recordedDate: "2016-07-04T20:41:48-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
    resource: {
      resourceType: "Condition",
      id: "15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "72892002",
            display: "Normal pregnancy",
          },
        ],
        text: "Normal pregnancy",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      onsetDateTime: "2016-10-31T20:41:48-04:00",
      abatementDateTime: "2017-05-15T20:41:48-04:00",
      recordedDate: "2016-10-31T20:41:48-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:e9246e01-e73e-e5ca-be7a-b5629ce6e6c9",
    resource: {
      resourceType: "Condition",
      id: "e9246e01-e73e-e5ca-be7a-b5629ce6e6c9",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "15777000",
            display: "Prediabetes",
          },
        ],
        text: "Prediabetes",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:de9cb9a4-8db9-2397-0bae-e7b3a51b2e18" },
      onsetDateTime: "2017-05-01T20:41:48-04:00",
      recordedDate: "2017-05-01T20:41:48-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:eeca2cd4-18ad-7b01-0e7a-b17e74034f84",
    resource: {
      resourceType: "Condition",
      id: "eeca2cd4-18ad-7b01-0e7a-b17e74034f84",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "367498001",
            display: "Seasonal allergic rhinitis",
          },
        ],
        text: "Seasonal allergic rhinitis",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:de4c015c-e019-f371-6394-a8b44f471fda" },
      onsetDateTime: "1980-09-22T13:20:13-04:00",
      recordedDate: "1980-09-22T13:20:13-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:10d3aaa3-35e1-18e3-3a0c-ddf85e8a7fba",
    resource: {
      resourceType: "Condition",
      id: "10d3aaa3-35e1-18e3-3a0c-ddf85e8a7fba",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "59621000",
            display: "Hypertension",
          },
        ],
        text: "Hypertension",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:2fb5a9d1-d900-0fae-ce0a-174c047d5782" },
      onsetDateTime: "1993-02-02T12:20:13-05:00",
      recordedDate: "1993-02-02T12:20:13-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:e5a944a3-99f5-db26-ec87-6624886c2f9a",
    resource: {
      resourceType: "Condition",
      id: "e5a944a3-99f5-db26-ec87-6624886c2f9a",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "15777000",
            display: "Prediabetes",
          },
        ],
        text: "Prediabetes",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:ee2eec5c-118d-340d-dba7-c3b01534ebf8" },
      onsetDateTime: "1996-02-20T12:20:13-05:00",
      recordedDate: "1996-02-20T12:20:13-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:b1bab656-5b33-173a-1a37-3b02f46f195b",
    resource: {
      resourceType: "Condition",
      id: "b1bab656-5b33-173a-1a37-3b02f46f195b",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "271737000",
            display: "Anemia (disorder)",
          },
        ],
        text: "Anemia (disorder)",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:ee2eec5c-118d-340d-dba7-c3b01534ebf8" },
      onsetDateTime: "1996-02-20T12:20:13-05:00",
      recordedDate: "1996-02-20T12:20:13-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:bf0aba50-457b-05b0-2445-91d1f84accc7",
    resource: {
      resourceType: "Condition",
      id: "bf0aba50-457b-05b0-2445-91d1f84accc7",
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
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:50fc9d03-c03a-fe4e-8f0a-0dce169e68b0" },
      onsetDateTime: "2014-02-06T12:20:13-05:00",
      recordedDate: "2014-02-06T12:20:13-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:785f6ceb-737c-3359-2918-88676d6be7a7",
    resource: {
      resourceType: "Condition",
      id: "785f6ceb-737c-3359-2918-88676d6be7a7",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "1121000119107",
            display: "Chronic neck pain (finding)",
          },
        ],
        text: "Chronic neck pain (finding)",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:50fc9d03-c03a-fe4e-8f0a-0dce169e68b0" },
      onsetDateTime: "2014-02-06T12:20:13-05:00",
      recordedDate: "2014-02-06T12:20:13-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:6353f72d-7fd9-c785-36c3-b53857286c61",
    resource: {
      resourceType: "Condition",
      id: "6353f72d-7fd9-c785-36c3-b53857286c61",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "49727002",
            display: "Cough (finding)",
          },
        ],
        text: "Cough (finding)",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:daf8c623-5248-d1a4-b4ef-744ae92d1cff" },
      onsetDateTime: "2020-03-04T12:20:13-05:00",
      abatementDateTime: "2020-04-10T03:00:02-04:00",
      recordedDate: "2020-03-04T12:20:13-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:f2f2923e-9d8d-25d3-33e1-1ab3fa305448",
    resource: {
      resourceType: "Condition",
      id: "f2f2923e-9d8d-25d3-33e1-1ab3fa305448",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "248595008",
            display: "Sputum finding (finding)",
          },
        ],
        text: "Sputum finding (finding)",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:daf8c623-5248-d1a4-b4ef-744ae92d1cff" },
      onsetDateTime: "2020-03-04T12:20:13-05:00",
      abatementDateTime: "2020-04-10T03:00:02-04:00",
      recordedDate: "2020-03-04T12:20:13-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:2040dc42-7614-76f6-83ee-7e92e3be12bf",
    resource: {
      resourceType: "Condition",
      id: "2040dc42-7614-76f6-83ee-7e92e3be12bf",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "84229001",
            display: "Fatigue (finding)",
          },
        ],
        text: "Fatigue (finding)",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:daf8c623-5248-d1a4-b4ef-744ae92d1cff" },
      onsetDateTime: "2020-03-04T12:20:13-05:00",
      abatementDateTime: "2020-04-10T03:00:02-04:00",
      recordedDate: "2020-03-04T12:20:13-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:9e39ed84-1ca2-255b-74c1-6e176f5f261d",
    resource: {
      resourceType: "Condition",
      id: "9e39ed84-1ca2-255b-74c1-6e176f5f261d",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "386661006",
            display: "Fever (finding)",
          },
        ],
        text: "Fever (finding)",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:daf8c623-5248-d1a4-b4ef-744ae92d1cff" },
      onsetDateTime: "2020-03-04T12:20:13-05:00",
      abatementDateTime: "2020-04-10T03:00:02-04:00",
      recordedDate: "2020-03-04T12:20:13-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:a31ad9de-d671-eacf-46eb-08ba2f843e7a",
    resource: {
      resourceType: "Condition",
      id: "a31ad9de-d671-eacf-46eb-08ba2f843e7a",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "840544004",
            display: "Suspected COVID-19",
          },
        ],
        text: "Suspected COVID-19",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:daf8c623-5248-d1a4-b4ef-744ae92d1cff" },
      onsetDateTime: "2020-03-04T12:20:13-05:00",
      abatementDateTime: "2020-03-04T14:00:02-05:00",
      recordedDate: "2020-03-04T12:20:13-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:d85db719-6c98-6111-1f6d-8729dec9525e",
    resource: {
      resourceType: "Condition",
      id: "d85db719-6c98-6111-1f6d-8729dec9525e",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "840539006",
            display: "COVID-19",
          },
        ],
        text: "COVID-19",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:daf8c623-5248-d1a4-b4ef-744ae92d1cff" },
      onsetDateTime: "2020-03-04T14:00:02-05:00",
      abatementDateTime: "2020-04-10T03:00:02-04:00",
      recordedDate: "2020-03-04T14:00:02-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:944d4854-952d-5d0f-2128-1bf1947688ed",
    resource: {
      resourceType: "Condition",
      id: "944d4854-952d-5d0f-2128-1bf1947688ed",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "444814009",
            display: "Viral sinusitis (disorder)",
          },
        ],
        text: "Viral sinusitis (disorder)",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:2ff1327f-afe1-e71c-1d2d-f142399ca4c2" },
      onsetDateTime: "2021-01-18T13:20:13-05:00",
      abatementDateTime: "2021-02-13T13:20:13-05:00",
      recordedDate: "2021-01-18T13:20:13-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:ca48c7bf-568f-e2b6-f1ff-401217aa8bac",
    resource: {
      resourceType: "Condition",
      id: "ca48c7bf-568f-e2b6-f1ff-401217aa8bac",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:3acdac6a-3b76-1797-ae54-c995f08209f2" },
      onsetDateTime: "1936-01-21T04:03:37-05:00",
      recordedDate: "1936-01-21T04:03:37-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:a0c8dfe1-a2e1-e561-ce53-ebd416d025ec",
    resource: {
      resourceType: "Condition",
      id: "a0c8dfe1-a2e1-e561-ce53-ebd416d025ec",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "44054006",
            display: "Diabetes",
          },
        ],
        text: "Diabetes",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:aa4e976c-89e5-9727-d1a1-db26b36f7068" },
      onsetDateTime: "1946-02-05T04:03:37-05:00",
      recordedDate: "1946-02-05T04:03:37-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:5ecf0061-055a-aeaa-ca88-9c40bb4fb70f",
    resource: {
      resourceType: "Condition",
      id: "5ecf0061-055a-aeaa-ca88-9c40bb4fb70f",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "80394007",
            display: "Hyperglycemia (disorder)",
          },
        ],
        text: "Hyperglycemia (disorder)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:ac8a129f-6d42-1897-c693-871de6629a12" },
      onsetDateTime: "1947-02-11T04:03:37-05:00",
      recordedDate: "1947-02-11T04:03:37-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:daf8d1e6-3c79-1ce6-1875-340c0687251d",
    resource: {
      resourceType: "Condition",
      id: "daf8d1e6-3c79-1ce6-1875-340c0687251d",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "302870006",
            display: "Hypertriglyceridemia (disorder)",
          },
        ],
        text: "Hypertriglyceridemia (disorder)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:ac8a129f-6d42-1897-c693-871de6629a12" },
      onsetDateTime: "1947-02-11T04:03:37-05:00",
      recordedDate: "1947-02-11T04:03:37-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:eb5306af-5f62-4ed3-dbdb-27d2f31a56fd",
    resource: {
      resourceType: "Condition",
      id: "eb5306af-5f62-4ed3-dbdb-27d2f31a56fd",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "237602007",
            display: "Metabolic syndrome X (disorder)",
          },
        ],
        text: "Metabolic syndrome X (disorder)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:ac8a129f-6d42-1897-c693-871de6629a12" },
      onsetDateTime: "1947-02-11T04:03:37-05:00",
      recordedDate: "1947-02-11T04:03:37-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:d96f2dc5-462a-9dd2-6f28-049905240a97",
    resource: {
      resourceType: "Condition",
      id: "d96f2dc5-462a-9dd2-6f28-049905240a97",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "15777000",
            display: "Prediabetes",
          },
        ],
        text: "Prediabetes",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:74c3c587-67d7-9323-89ec-15a4790c4230" },
      onsetDateTime: "1948-02-17T04:03:37-05:00",
      recordedDate: "1948-02-17T04:03:37-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:41209de7-2d0f-636b-d903-2a9e7333bd50",
    resource: {
      resourceType: "Condition",
      id: "41209de7-2d0f-636b-d903-2a9e7333bd50",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "271737000",
            display: "Anemia (disorder)",
          },
        ],
        text: "Anemia (disorder)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:ad0dca45-9c14-606a-33d6-fb685f2adb48" },
      onsetDateTime: "1949-02-22T04:03:37-05:00",
      recordedDate: "1949-02-22T04:03:37-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:681bdcdb-91a6-87af-50b3-9abf71bf970a",
    resource: {
      resourceType: "Condition",
      id: "681bdcdb-91a6-87af-50b3-9abf71bf970a",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "368581000119106",
            display: "Neuropathy due to type 2 diabetes mellitus (disorder)",
          },
        ],
        text: "Neuropathy due to type 2 diabetes mellitus (disorder)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:04f37cb2-5f83-3674-9401-4238cd6e8708" },
      onsetDateTime: "1954-03-23T04:03:37-05:00",
      recordedDate: "1954-03-23T04:03:37-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:e84d0b38-a489-642f-ee35-ce041b076506",
    resource: {
      resourceType: "Condition",
      id: "e84d0b38-a489-642f-ee35-ce041b076506",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:0460c4d6-c1c2-f2c9-79e2-222f69d9263c" },
      onsetDateTime: "1960-06-12T05:03:37-04:00",
      recordedDate: "1960-06-12T05:03:37-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:bfad88e8-0edf-75d5-8f90-35803c24d8db",
    resource: {
      resourceType: "Condition",
      id: "bfad88e8-0edf-75d5-8f90-35803c24d8db",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "161622006",
            display: "History of lower limb amputation (situation)",
          },
        ],
        text: "History of lower limb amputation (situation)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:cbc382d1-97ff-1764-3293-9d57453ea1b8" },
      onsetDateTime: "1968-11-05T07:24:37-05:00",
      recordedDate: "1968-11-05T07:24:37-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:70cff8d1-5104-8906-bf29-8e4eec54294d",
    resource: {
      resourceType: "Condition",
      id: "70cff8d1-5104-8906-bf29-8e4eec54294d",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "431855005",
            display: "Chronic kidney disease stage 1 (disorder)",
          },
        ],
        text: "Chronic kidney disease stage 1 (disorder)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:49fd60ec-7e57-fcb6-f0a0-d8d15a3ea338" },
      onsetDateTime: "1969-09-02T05:03:37-04:00",
      recordedDate: "1969-09-02T05:03:37-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:8c365cf3-2e34-cdd4-853b-62b5f2a1ece5",
    resource: {
      resourceType: "Condition",
      id: "8c365cf3-2e34-cdd4-853b-62b5f2a1ece5",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "127013003",
            display: "Diabetic renal disease (disorder)",
          },
        ],
        text: "Diabetic renal disease (disorder)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:49fd60ec-7e57-fcb6-f0a0-d8d15a3ea338" },
      onsetDateTime: "1969-09-02T05:03:37-04:00",
      recordedDate: "1969-09-02T05:03:37-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:3e9a1900-b178-e9d9-8f07-78c05c01b19e",
    resource: {
      resourceType: "Condition",
      id: "3e9a1900-b178-e9d9-8f07-78c05c01b19e",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "64859006",
            display: "Osteoporosis (disorder)",
          },
        ],
        text: "Osteoporosis (disorder)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:ad068b06-5068-2d84-262d-8509e24188aa" },
      onsetDateTime: "1997-11-25T04:03:37-05:00",
      recordedDate: "1997-11-25T04:03:37-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:f6d93e8e-29c3-b812-edb9-8908c76376d2",
    resource: {
      resourceType: "Condition",
      id: "f6d93e8e-29c3-b812-edb9-8908c76376d2",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "55680006",
            display: "Drug overdose",
          },
        ],
        text: "Drug overdose",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:907558c0-977e-df31-96fc-6a4ac4b9b3a1" },
      onsetDateTime: "2006-12-31T04:03:37-05:00",
      recordedDate: "2006-12-31T04:03:37-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:b03a3e3f-24c3-1c4a-50d7-4bc06b329749",
    resource: {
      resourceType: "Condition",
      id: "b03a3e3f-24c3-1c4a-50d7-4bc06b329749",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "359817006",
            display: "Closed fracture of hip",
          },
        ],
        text: "Closed fracture of hip",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:cc6106da-522a-9b50-dda1-455dbbc23f93" },
      onsetDateTime: "2012-07-04T08:10:22-04:00",
      abatementDateTime: "2012-09-11T09:38:22-04:00",
      recordedDate: "2012-07-04T08:10:22-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:1f98d705-6829-b419-fc46-873e718fb511",
    resource: {
      resourceType: "Condition",
      id: "1f98d705-6829-b419-fc46-873e718fb511",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "443165006",
            display: "Pathological fracture due to osteoporosis (disorder)",
          },
        ],
        text: "Pathological fracture due to osteoporosis (disorder)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:cc6106da-522a-9b50-dda1-455dbbc23f93" },
      onsetDateTime: "2012-07-04T09:38:22-04:00",
      abatementDateTime: "2012-09-11T09:38:22-04:00",
      recordedDate: "2012-07-04T09:38:22-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:52c09077-8a78-205b-1930-6f5e49d703ef",
    resource: {
      resourceType: "Condition",
      id: "52c09077-8a78-205b-1930-6f5e49d703ef",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "65966004",
            display: "Fracture of forearm",
          },
        ],
        text: "Fracture of forearm",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:5cebc1c8-b971-5cd7-b338-5cb29d71c2e3" },
      onsetDateTime: "2013-11-01T09:38:22-04:00",
      abatementDateTime: "2014-02-17T09:20:01-05:00",
      recordedDate: "2013-11-01T09:38:22-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:ac12f0fb-8ea8-c14e-697b-a17f1f7af951",
    resource: {
      resourceType: "Condition",
      id: "ac12f0fb-8ea8-c14e-697b-a17f1f7af951",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "443165006",
            display: "Pathological fracture due to osteoporosis (disorder)",
          },
        ],
        text: "Pathological fracture due to osteoporosis (disorder)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:5cebc1c8-b971-5cd7-b338-5cb29d71c2e3" },
      onsetDateTime: "2013-11-01T10:20:01-04:00",
      abatementDateTime: "2014-02-17T09:20:01-05:00",
      recordedDate: "2013-11-01T10:20:01-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:232b08d3-8bb3-8076-9e44-1c3239ce410c",
    resource: {
      resourceType: "Condition",
      id: "232b08d3-8bb3-8076-9e44-1c3239ce410c",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:4ebf48dc-d61c-e5c6-3aef-1e516a3971bb" },
      onsetDateTime: "2014-02-06T04:03:37-05:00",
      recordedDate: "2014-02-06T04:03:37-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:fef615d4-cf7d-d0ec-da24-0bcf3c08f55a",
    resource: {
      resourceType: "Condition",
      id: "fef615d4-cf7d-d0ec-da24-0bcf3c08f55a",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "1121000119107",
            display: "Chronic neck pain (finding)",
          },
        ],
        text: "Chronic neck pain (finding)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:4ebf48dc-d61c-e5c6-3aef-1e516a3971bb" },
      onsetDateTime: "2014-02-06T04:03:37-05:00",
      recordedDate: "2014-02-06T04:03:37-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:be0507c0-5ffa-e013-5ff5-c37566f9e8b5",
    resource: {
      resourceType: "Condition",
      id: "be0507c0-5ffa-e013-5ff5-c37566f9e8b5",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "44465007",
            display: "Sprain of ankle",
          },
        ],
        text: "Sprain of ankle",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:1937bc0a-495d-da51-a70f-b5b627ba8004" },
      onsetDateTime: "2016-03-19T10:20:01-04:00",
      abatementDateTime: "2016-04-29T10:20:01-04:00",
      recordedDate: "2016-03-19T10:20:01-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:8836ade3-0dcd-bdae-10c1-47e09f6f1c1e",
    resource: {
      resourceType: "Condition",
      id: "8836ade3-0dcd-bdae-10c1-47e09f6f1c1e",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "49727002",
            display: "Cough (finding)",
          },
        ],
        text: "Cough (finding)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:39c297e3-1533-8a63-7ed1-382ba22a446e" },
      onsetDateTime: "2020-03-07T04:03:37-05:00",
      abatementDateTime: "2020-03-26T20:50:45-04:00",
      recordedDate: "2020-03-07T04:03:37-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:be90ed77-e270-32ee-1c6d-6d8df223761e",
    resource: {
      resourceType: "Condition",
      id: "be90ed77-e270-32ee-1c6d-6d8df223761e",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "267102003",
            display: "Sore throat symptom (finding)",
          },
        ],
        text: "Sore throat symptom (finding)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:39c297e3-1533-8a63-7ed1-382ba22a446e" },
      onsetDateTime: "2020-03-07T04:03:37-05:00",
      abatementDateTime: "2020-03-26T20:50:45-04:00",
      recordedDate: "2020-03-07T04:03:37-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:286fd65b-01e6-da53-a1f0-cacc3304255e",
    resource: {
      resourceType: "Condition",
      id: "286fd65b-01e6-da53-a1f0-cacc3304255e",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "422587007",
            display: "Nausea (finding)",
          },
        ],
        text: "Nausea (finding)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:39c297e3-1533-8a63-7ed1-382ba22a446e" },
      onsetDateTime: "2020-03-07T04:03:37-05:00",
      abatementDateTime: "2020-03-26T20:50:45-04:00",
      recordedDate: "2020-03-07T04:03:37-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:418ba5e9-1a53-0e0d-4395-a9a7a0d28e39",
    resource: {
      resourceType: "Condition",
      id: "418ba5e9-1a53-0e0d-4395-a9a7a0d28e39",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "249497008",
            display: "Vomiting symptom (finding)",
          },
        ],
        text: "Vomiting symptom (finding)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:39c297e3-1533-8a63-7ed1-382ba22a446e" },
      onsetDateTime: "2020-03-07T04:03:37-05:00",
      abatementDateTime: "2020-03-26T20:50:45-04:00",
      recordedDate: "2020-03-07T04:03:37-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:7f80c614-c4fc-0833-1db2-86ba42efe8fb",
    resource: {
      resourceType: "Condition",
      id: "7f80c614-c4fc-0833-1db2-86ba42efe8fb",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "386661006",
            display: "Fever (finding)",
          },
        ],
        text: "Fever (finding)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:39c297e3-1533-8a63-7ed1-382ba22a446e" },
      onsetDateTime: "2020-03-07T04:03:37-05:00",
      abatementDateTime: "2020-03-26T20:50:45-04:00",
      recordedDate: "2020-03-07T04:03:37-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:555db79f-8a16-52e6-2a85-28749e0ba8a3",
    resource: {
      resourceType: "Condition",
      id: "555db79f-8a16-52e6-2a85-28749e0ba8a3",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "840544004",
            display: "Suspected COVID-19",
          },
        ],
        text: "Suspected COVID-19",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:39c297e3-1533-8a63-7ed1-382ba22a446e" },
      onsetDateTime: "2020-03-07T04:03:37-05:00",
      abatementDateTime: "2020-03-07T04:50:45-05:00",
      recordedDate: "2020-03-07T04:03:37-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:86e8eb88-25cf-96b6-3fd7-57bf318b09e9",
    resource: {
      resourceType: "Condition",
      id: "86e8eb88-25cf-96b6-3fd7-57bf318b09e9",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "840539006",
            display: "COVID-19",
          },
        ],
        text: "COVID-19",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:39c297e3-1533-8a63-7ed1-382ba22a446e" },
      onsetDateTime: "2020-03-07T04:50:45-05:00",
      abatementDateTime: "2020-03-26T20:50:45-04:00",
      recordedDate: "2020-03-07T04:50:45-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:a6d5a5ad-14b2-5d77-0e30-d3c30252677d",
    resource: {
      resourceType: "Condition",
      id: "a6d5a5ad-14b2-5d77-0e30-d3c30252677d",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "43878008",
            display: "Streptococcal sore throat (disorder)",
          },
        ],
        text: "Streptococcal sore throat (disorder)",
      },
      subject: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:301b3c09-76ba-194a-c129-9120f35a72df" },
      onsetDateTime: "2012-09-24T20:51:28-04:00",
      abatementDateTime: "2012-10-07T04:51:28-04:00",
      recordedDate: "2012-09-24T20:51:28-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:a86aaa55-198f-9088-7a92-f2c013e026f8",
    resource: {
      resourceType: "Condition",
      id: "a86aaa55-198f-9088-7a92-f2c013e026f8",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "444814009",
            display: "Viral sinusitis (disorder)",
          },
        ],
        text: "Viral sinusitis (disorder)",
      },
      subject: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:4b97a9c3-4638-f791-64a4-09a1d69bcce9" },
      onsetDateTime: "2019-05-26T08:51:28-04:00",
      abatementDateTime: "2019-06-02T08:51:28-04:00",
      recordedDate: "2019-05-26T08:51:28-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:2ad10201-bb79-2aa9-04f6-18c2ba913f2d",
    resource: {
      resourceType: "Condition",
      id: "2ad10201-bb79-2aa9-04f6-18c2ba913f2d",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "43878008",
            display: "Streptococcal sore throat (disorder)",
          },
        ],
        text: "Streptococcal sore throat (disorder)",
      },
      subject: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:f350a141-8616-2049-2725-1aa2b711593e" },
      onsetDateTime: "2021-01-26T06:51:28-05:00",
      abatementDateTime: "2021-02-02T14:51:28-05:00",
      recordedDate: "2021-01-26T06:51:28-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:734f02e6-121e-7795-3360-4d30a48bf88f",
    resource: {
      resourceType: "Condition",
      id: "734f02e6-121e-7795-3360-4d30a48bf88f",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "59621000",
            display: "Hypertension",
          },
        ],
        text: "Hypertension",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:45b3abbc-7831-2d2e-7002-7f0fa120f65e" },
      onsetDateTime: "1985-01-21T23:29:59-05:00",
      recordedDate: "1985-01-21T23:29:59-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:1e07a5ce-760c-6bb2-0f55-2118d453c28c",
    resource: {
      resourceType: "Condition",
      id: "1e07a5ce-760c-6bb2-0f55-2118d453c28c",
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
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:474cd79d-5ae0-0e48-70ec-e091314a5e13" },
      onsetDateTime: "2005-05-17T00:29:59-04:00",
      recordedDate: "2005-05-17T00:29:59-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:7435c61d-d1ec-81c1-d5d1-168fe1661a95",
    resource: {
      resourceType: "Condition",
      id: "7435c61d-d1ec-81c1-d5d1-168fe1661a95",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "444814009",
            display: "Viral sinusitis (disorder)",
          },
        ],
        text: "Viral sinusitis (disorder)",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:b37b1a4a-048f-ff60-0887-7bb9928a1ab9" },
      onsetDateTime: "2012-03-28T21:29:59-04:00",
      abatementDateTime: "2012-04-09T21:29:59-04:00",
      recordedDate: "2012-03-28T21:29:59-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:b6ad9d27-95ec-6887-4ce3-4c2a5a9e1985",
    resource: {
      resourceType: "Condition",
      id: "b6ad9d27-95ec-6887-4ce3-4c2a5a9e1985",
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
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:0960a8bf-007f-9fe6-41ba-7ff569e3e8b0" },
      onsetDateTime: "2014-02-05T23:29:59-05:00",
      recordedDate: "2014-02-05T23:29:59-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:31551abb-bb94-0e06-c826-4d8138f15e57",
    resource: {
      resourceType: "Condition",
      id: "31551abb-bb94-0e06-c826-4d8138f15e57",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "1121000119107",
            display: "Chronic neck pain (finding)",
          },
        ],
        text: "Chronic neck pain (finding)",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:0960a8bf-007f-9fe6-41ba-7ff569e3e8b0" },
      onsetDateTime: "2014-02-05T23:29:59-05:00",
      recordedDate: "2014-02-05T23:29:59-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:025d9865-5f67-daa3-dcb9-ee61ad8e3a5a",
    resource: {
      resourceType: "Condition",
      id: "025d9865-5f67-daa3-dcb9-ee61ad8e3a5a",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "284549007",
            display: "Laceration of hand",
          },
        ],
        text: "Laceration of hand",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:982b2ced-fba6-3e9b-dbff-2bfd847ac103" },
      onsetDateTime: "2018-04-24T05:13:59-04:00",
      abatementDateTime: "2018-05-10T05:45:17-04:00",
      recordedDate: "2018-04-24T05:13:59-04:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:bb74fa5d-cfa7-79f5-fb8f-1da0acb6dfdc",
    resource: {
      resourceType: "Condition",
      id: "bb74fa5d-cfa7-79f5-fb8f-1da0acb6dfdc",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "49727002",
            display: "Cough (finding)",
          },
        ],
        text: "Cough (finding)",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:823b4e28-229e-ec0f-9a30-c8233e002be9" },
      onsetDateTime: "2020-02-22T23:29:59-05:00",
      abatementDateTime: "2020-03-13T00:25:08-04:00",
      recordedDate: "2020-02-22T23:29:59-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:ef0211ee-f033-df55-1158-034856924e6a",
    resource: {
      resourceType: "Condition",
      id: "ef0211ee-f033-df55-1158-034856924e6a",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "84229001",
            display: "Fatigue (finding)",
          },
        ],
        text: "Fatigue (finding)",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:823b4e28-229e-ec0f-9a30-c8233e002be9" },
      onsetDateTime: "2020-02-22T23:29:59-05:00",
      abatementDateTime: "2020-03-13T00:25:08-04:00",
      recordedDate: "2020-02-22T23:29:59-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:9664a758-f35f-3e9f-81c5-766309dd77ae",
    resource: {
      resourceType: "Condition",
      id: "9664a758-f35f-3e9f-81c5-766309dd77ae",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "386661006",
            display: "Fever (finding)",
          },
        ],
        text: "Fever (finding)",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:823b4e28-229e-ec0f-9a30-c8233e002be9" },
      onsetDateTime: "2020-02-22T23:29:59-05:00",
      abatementDateTime: "2020-03-13T00:25:08-04:00",
      recordedDate: "2020-02-22T23:29:59-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:717dfedd-f4db-22bf-e306-92a1ca411138",
    resource: {
      resourceType: "Condition",
      id: "717dfedd-f4db-22bf-e306-92a1ca411138",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "36955009",
            display: "Loss of taste (finding)",
          },
        ],
        text: "Loss of taste (finding)",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:823b4e28-229e-ec0f-9a30-c8233e002be9" },
      onsetDateTime: "2020-02-22T23:29:59-05:00",
      abatementDateTime: "2020-03-13T00:25:08-04:00",
      recordedDate: "2020-02-22T23:29:59-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:3ea0dd9a-ce37-22a1-a958-c952d508bf31",
    resource: {
      resourceType: "Condition",
      id: "3ea0dd9a-ce37-22a1-a958-c952d508bf31",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "840544004",
            display: "Suspected COVID-19",
          },
        ],
        text: "Suspected COVID-19",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:823b4e28-229e-ec0f-9a30-c8233e002be9" },
      onsetDateTime: "2020-02-22T23:29:59-05:00",
      abatementDateTime: "2020-02-23T00:25:08-05:00",
      recordedDate: "2020-02-22T23:29:59-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
  {
    fullUrl: "urn:uuid:a29135d9-4900-b8f7-fb20-d7d028203bc3",
    resource: {
      resourceType: "Condition",
      id: "a29135d9-4900-b8f7-fb20-d7d028203bc3",
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
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "840539006",
            display: "COVID-19",
          },
        ],
        text: "COVID-19",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:823b4e28-229e-ec0f-9a30-c8233e002be9" },
      onsetDateTime: "2020-02-23T00:25:08-05:00",
      abatementDateTime: "2020-03-13T00:25:08-04:00",
      recordedDate: "2020-02-23T00:25:08-05:00",
    },
    request: { method: "POST", url: "Condition" },
  },
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
