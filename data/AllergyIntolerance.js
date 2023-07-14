const entities = [
  {
    fullUrl: "urn:uuid:09cb15dc-3a3d-b5f8-1d04-2968a67975f1",
    resource: {
      resourceType: "AllergyIntolerance",
      id: "09cb15dc-3a3d-b5f8-1d04-2968a67975f1",
      clinicalStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
            code: "active",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
            code: "confirmed",
          },
        ],
      },
      type: "allergy",
      category: ["food"],
      criticality: "low",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "419263009",
            display: "Allergy to tree pollen",
          },
        ],
        text: "Allergy to tree pollen",
      },
      patient: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      recordedDate: "1984-09-30T17:41:48-04:00",
    },
    request: { method: "POST", url: "AllergyIntolerance" },
  },
  {
    fullUrl: "urn:uuid:a0a4cb2a-8c0c-6551-1a78-c0b587f78b9f",
    resource: {
      resourceType: "AllergyIntolerance",
      id: "a0a4cb2a-8c0c-6551-1a78-c0b587f78b9f",
      clinicalStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
            code: "active",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
            code: "confirmed",
          },
        ],
      },
      type: "allergy",
      category: ["food"],
      criticality: "low",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "300913006",
            display: "Shellfish allergy",
          },
        ],
        text: "Shellfish allergy",
      },
      patient: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      recordedDate: "1984-09-30T17:41:48-04:00",
    },
    request: { method: "POST", url: "AllergyIntolerance" },
  },
  {
    fullUrl: "urn:uuid:62bbb56e-d23f-8c6a-17f5-496046c80a19",
    resource: {
      resourceType: "AllergyIntolerance",
      id: "62bbb56e-d23f-8c6a-17f5-496046c80a19",
      clinicalStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
            code: "active",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
            code: "confirmed",
          },
        ],
      },
      type: "allergy",
      category: ["food"],
      criticality: "low",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "418689008",
            display: "Allergy to grass pollen",
          },
        ],
        text: "Allergy to grass pollen",
      },
      patient: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      recordedDate: "1976-04-22T01:20:13-05:00",
    },
    request: { method: "POST", url: "AllergyIntolerance" },
  },
  {
    fullUrl: "urn:uuid:53baf94d-d923-8168-e53b-2b8f6c4ad0d0",
    resource: {
      resourceType: "AllergyIntolerance",
      id: "53baf94d-d923-8168-e53b-2b8f6c4ad0d0",
      clinicalStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
            code: "active",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
            code: "confirmed",
          },
        ],
      },
      type: "allergy",
      category: ["food"],
      criticality: "low",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "425525006",
            display: "Allergy to dairy product",
          },
        ],
        text: "Allergy to dairy product",
      },
      patient: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      recordedDate: "1976-04-22T01:20:13-05:00",
    },
    request: { method: "POST", url: "AllergyIntolerance" },
  },
  {
    fullUrl: "urn:uuid:df80a74e-3e18-9fdb-9287-b183d8f52e71",
    resource: {
      resourceType: "AllergyIntolerance",
      id: "df80a74e-3e18-9fdb-9287-b183d8f52e71",
      clinicalStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
            code: "active",
          },
        ],
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
            code: "confirmed",
          },
        ],
      },
      type: "allergy",
      category: ["food"],
      criticality: "low",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "91934008",
            display: "Allergy to nut",
          },
        ],
        text: "Allergy to nut",
      },
      patient: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      recordedDate: "1976-04-22T01:20:13-05:00",
    },
    request: { method: "POST", url: "AllergyIntolerance" },
  },
];

export default entities;
