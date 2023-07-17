const entities = [
  {
    fullUrl: "urn:uuid:31ce16ba-47bc-5fd1-1ec6-cd5307fce1c6",
    resource: {
      resourceType: "CarePlan",
      id: "31ce16ba-47bc-5fd1-1ec6-cd5307fce1c6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-careplan",
        ],
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Musculoskeletal care.<br/>Activities: <ul><li>Musculoskeletal care</li><li>Musculoskeletal care</li></ul><br/>Care plan is meant to treat Whiplash injury to neck.</div>',
      },
      status: "completed",
      intent: "order",
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/careplan-category",
              code: "assess-plan",
            },
          ],
        },
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "408869004",
              display: "Musculoskeletal care",
            },
          ],
          text: "Musculoskeletal care",
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:e8bc0159-8b0b-8ff7-b614-85a6a650cb26" },
      period: {
        start: "1944-04-23T02:40:58-04:00",
        end: "1944-06-03T02:40:58-04:00",
      },
      careTeam: [
        { reference: "urn:uuid:44f9007a-b043-0942-116f-0101b53179a1" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "266694003",
                  display: "Heat therapy",
                },
              ],
              text: "Heat therapy",
            },
            status: "completed",
            location: { display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "183051005",
                  display: "Recommendation to rest",
                },
              ],
              text: "Recommendation to rest",
            },
            status: "completed",
            location: { display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:8ed26560-aaa4-9f46-b181-5f096958ff4c",
    resource: {
      resourceType: "CarePlan",
      id: "8ed26560-aaa4-9f46-b181-5f096958ff4c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-careplan",
        ],
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Musculoskeletal care.<br/>Activities: <ul><li>Musculoskeletal care</li><li>Musculoskeletal care</li></ul><br/>Care plan is meant to treat Osteoarthritis of hip.</div>',
      },
      status: "active",
      intent: "order",
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/careplan-category",
              code: "assess-plan",
            },
          ],
        },
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "408869004",
              display: "Musculoskeletal care",
            },
          ],
          text: "Musculoskeletal care",
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:d58530c3-bf6f-3109-beb2-7aace8344cf9" },
      period: { start: "1985-02-23T01:40:58-05:00" },
      careTeam: [
        { reference: "urn:uuid:2b26c25d-b9da-d5d4-9df0-5254fae09e95" },
      ],
      addresses: [
        { reference: "urn:uuid:6adf154e-bc1c-dc17-b297-d9e8801df1e3" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "386294003",
                  display: "Joint mobility exercises",
                },
              ],
              text: "Joint mobility exercises",
            },
            status: "in-progress",
            location: { display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "266694003",
                  display: "Heat therapy",
                },
              ],
              text: "Heat therapy",
            },
            status: "in-progress",
            location: { display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:5ff63eda-50f9-622c-b664-4bb9005ceb2c",
    resource: {
      resourceType: "CarePlan",
      id: "5ff63eda-50f9-622c-b664-4bb9005ceb2c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-careplan",
        ],
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Hyperlipidemia clinical management plan.<br/>Activities: <ul><li>Hyperlipidemia clinical management plan</li><li>Hyperlipidemia clinical management plan</li></ul><br/>Care plan is meant to treat Hyperlipidemia.</div>',
      },
      status: "active",
      intent: "order",
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/careplan-category",
              code: "assess-plan",
            },
          ],
        },
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "736285004",
              display: "Hyperlipidemia clinical management plan",
            },
          ],
          text: "Hyperlipidemia clinical management plan",
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0d452394-2b0c-1f9e-da52-1af68a0bb062" },
      period: { start: "1994-11-25T01:40:58-05:00" },
      careTeam: [
        { reference: "urn:uuid:8511a1e9-8c42-d976-5893-e920285b2301" },
      ],
      addresses: [
        { reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "183063000",
                  display: "low salt diet education",
                },
              ],
              text: "low salt diet education",
            },
            status: "in-progress",
            location: { display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "183301007",
                  display: "physical exercise",
                },
              ],
              text: "physical exercise",
            },
            status: "in-progress",
            location: { display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:dbb478a9-c9e3-b525-05e3-751650572c2f",
    resource: {
      resourceType: "CarePlan",
      id: "dbb478a9-c9e3-b525-05e3-751650572c2f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-careplan",
        ],
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Therapy (regime/therapy).<br/>Activities: <ul><li>Therapy (regime/therapy)</li><li>Therapy (regime/therapy)</li></ul></div>',
      },
      status: "active",
      intent: "order",
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/careplan-category",
              code: "assess-plan",
            },
          ],
        },
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "276239002",
              display: "Therapy (regime/therapy)",
            },
          ],
          text: "Therapy (regime/therapy)",
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7ea69efc-73a8-74a1-0595-d98e36d47dc2" },
      period: { start: "2014-03-27T05:40:58-04:00" },
      careTeam: [
        { reference: "urn:uuid:ceb20189-bc92-0f34-f109-35efecfa8d97" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "91251008",
                  display: "Physical therapy procedure (regime/therapy)",
                },
              ],
              text: "Physical therapy procedure (regime/therapy)",
            },
            status: "in-progress",
            location: { display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "228557008",
                  display: "Cognitive and behavioral therapy (regime/therapy)",
                },
              ],
              text: "Cognitive and behavioral therapy (regime/therapy)",
            },
            status: "in-progress",
            location: { display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
];

export default entities;
