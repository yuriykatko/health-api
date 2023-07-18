const entities = [
  {
    fullUrl: "urn:uuid:fd0cfd79-aaa8-b8c8-4c2c-9da589994166",
    resource: {
      resourceType: "CarePlan",
      id: "fd0cfd79-aaa8-b8c8-4c2c-9da589994166",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Self-care interventions (procedure).<br/>Activities: <ul><li>Self-care interventions (procedure)</li><li>Self-care interventions (procedure)</li><li>Self-care interventions (procedure)</li></ul></div>',
      },
      status: "active",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "384758001",
              display: "Self-care interventions (procedure)",
            },
          ],
          text: "Self-care interventions (procedure)",
        },
      ],
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:009d5fb1-0473-e23a-b0c8-c2c3387fc1d7" },
      period: { start: "1984-09-16T22:41:48-04:00" },
      careTeam: [
        { reference: "urn:uuid:40acc60e-bf5d-c738-29ee-82920f057b84" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "409002",
                  display: "Food allergy diet",
                },
              ],
              text: "Food allergy diet",
            },
            status: "in-progress",
            location: {
              display: "Niagara Health System - Port Colborne General Site",
            },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "58332002",
                  display: "Allergy education",
                },
              ],
              text: "Allergy education",
            },
            status: "in-progress",
            location: {
              display: "Niagara Health System - Port Colborne General Site",
            },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "58332002",
                  display: "Allergy education",
                },
              ],
              text: "Allergy education",
            },
            status: "in-progress",
            location: {
              display: "Niagara Health System - Port Colborne General Site",
            },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:b0fa664c-2f36-26cf-8e18-6ed8950f75eb",
    resource: {
      resourceType: "CarePlan",
      id: "b0fa664c-2f36-26cf-8e18-6ed8950f75eb",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Respiratory therapy.<br/>Activities: <ul><li>Respiratory therapy</li><li>Respiratory therapy</li></ul><br/>Care plan is meant to treat Acute bronchitis (disorder).</div>',
      },
      status: "completed",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "53950000",
              display: "Respiratory therapy",
            },
          ],
          text: "Respiratory therapy",
        },
      ],
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:9106d432-cf3e-6242-8779-8492c8c810b2" },
      period: {
        start: "2009-09-03T11:01:06-04:00",
        end: "2012-03-26T20:41:48-04:00",
      },
      careTeam: [
        { reference: "urn:uuid:b4b35234-6864-b9e8-e4ac-cc1e1afa28f9" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "304510005",
                  display: "Recommendation to avoid exercise",
                },
              ],
              text: "Recommendation to avoid exercise",
            },
            status: "completed",
            location: {
              display: "Niagara Health System - Port Colborne General Site",
            },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "371605008",
                  display: "Deep breathing and coughing exercises",
                },
              ],
              text: "Deep breathing and coughing exercises",
            },
            status: "completed",
            location: {
              display: "Niagara Health System - Port Colborne General Site",
            },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:1c78feb1-a0d1-cf45-3c81-301ea14c66cb",
    resource: {
      resourceType: "CarePlan",
      id: "1c78feb1-a0d1-cf45-3c81-301ea14c66cb",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Routine antenatal care.<br/>Activities: <ul><li>Routine antenatal care</li><li>Routine antenatal care</li><li>Routine antenatal care</li></ul><br/>Care plan is meant to treat Normal pregnancy.</div>',
      },
      status: "completed",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "134435003",
              display: "Routine antenatal care",
            },
          ],
          text: "Routine antenatal care",
        },
      ],
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      period: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2012-07-09T20:41:48-04:00",
      },
      careTeam: [
        { reference: "urn:uuid:721492dd-3169-b044-76b8-c710d7b5570c" },
      ],
      addresses: [
        { reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "135892000",
                  display: "Antenatal education",
                },
              ],
              text: "Antenatal education",
            },
            status: "completed",
            location: {
              display: "Niagara Health System - Port Colborne General Site",
            },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "713076009",
                  display: "Antenatal risk assessment",
                },
              ],
              text: "Antenatal risk assessment",
            },
            status: "completed",
            location: {
              display: "Niagara Health System - Port Colborne General Site",
            },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "312404004",
                  display: "Antenatal blood tests",
                },
              ],
              text: "Antenatal blood tests",
            },
            status: "completed",
            location: {
              display: "Niagara Health System - Port Colborne General Site",
            },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:f332b385-e8c9-a188-383e-19abd17ea083",
    resource: {
      resourceType: "CarePlan",
      id: "f332b385-e8c9-a188-383e-19abd17ea083",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Routine antenatal care.<br/>Activities: <ul><li>Routine antenatal care</li><li>Routine antenatal care</li><li>Routine antenatal care</li></ul><br/>Care plan is meant to treat Normal pregnancy.</div>',
      },
      status: "completed",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "134435003",
              display: "Routine antenatal care",
            },
          ],
          text: "Routine antenatal care",
        },
      ],
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      period: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2013-06-17T20:41:48-04:00",
      },
      careTeam: [
        { reference: "urn:uuid:ed6cde5f-6cb2-9ece-16f5-07763268b627" },
      ],
      addresses: [
        { reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f" },
        { reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "135892000",
                  display: "Antenatal education",
                },
              ],
              text: "Antenatal education",
            },
            status: "completed",
            location: {
              display: "Niagara Health System - Port Colborne General Site",
            },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "713076009",
                  display: "Antenatal risk assessment",
                },
              ],
              text: "Antenatal risk assessment",
            },
            status: "completed",
            location: {
              display: "Niagara Health System - Port Colborne General Site",
            },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "312404004",
                  display: "Antenatal blood tests",
                },
              ],
              text: "Antenatal blood tests",
            },
            status: "completed",
            location: {
              display: "Niagara Health System - Port Colborne General Site",
            },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:36241790-8d59-956d-c8e4-7e4b15cf6511",
    resource: {
      resourceType: "CarePlan",
      id: "36241790-8d59-956d-c8e4-7e4b15cf6511",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Therapy (regime/therapy).<br/>Activities: <ul><li>Therapy (regime/therapy)</li><li>Therapy (regime/therapy)</li></ul></div>',
      },
      status: "completed",
      intent: "order",
      category: [
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
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:7735e7d7-e2eb-dbe0-44c6-d8ae6eb9b558" },
      period: {
        start: "2014-02-05T19:41:48-05:00",
        end: "2014-03-08T04:13:52-05:00",
      },
      careTeam: [
        { reference: "urn:uuid:38b78ea0-d994-8b13-21e4-e67e76f5e38e" },
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
            status: "completed",
            location: {
              display: "Niagara Health System - Port Colborne General Site",
            },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "228557008",
                  display: "Cognitive and behavior therapy",
                },
              ],
              text: "Cognitive and behavior therapy",
            },
            status: "completed",
            location: {
              display: "Niagara Health System - Port Colborne General Site",
            },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:dd178411-37a0-1a67-6960-b03790809f4a",
    resource: {
      resourceType: "CarePlan",
      id: "dd178411-37a0-1a67-6960-b03790809f4a",
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
              system: "http://snomed.info/sct",
              code: "276239002",
              display: "Therapy (regime/therapy)",
            },
          ],
          text: "Therapy (regime/therapy)",
        },
      ],
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3bb6cd3b-45de-6111-4055-5291bb1bbae2" },
      period: { start: "2014-04-07T05:13:52-04:00" },
      careTeam: [
        { reference: "urn:uuid:1c4799bb-d5cb-8705-81d2-cd29e164e9a3" },
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
            location: {
              display: "Niagara Health System - Port Colborne General Site",
            },
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
            location: {
              display: "Niagara Health System - Port Colborne General Site",
            },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:3f19747b-24c7-058c-9230-7c16ce4d1a5a",
    resource: {
      resourceType: "CarePlan",
      id: "3f19747b-24c7-058c-9230-7c16ce4d1a5a",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Routine antenatal care.<br/>Activities: <ul><li>Routine antenatal care</li><li>Routine antenatal care</li><li>Routine antenatal care</li></ul><br/>Care plan is meant to treat Normal pregnancy.</div>',
      },
      status: "completed",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "134435003",
              display: "Routine antenatal care",
            },
          ],
          text: "Routine antenatal care",
        },
      ],
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      period: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2017-05-15T20:41:48-04:00",
      },
      careTeam: [
        { reference: "urn:uuid:63b28fcb-68ef-2d69-5328-5f6aa0a9c2f5" },
      ],
      addresses: [
        { reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f" },
        { reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad" },
        { reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c" },
        { reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "135892000",
                  display: "Antenatal education",
                },
              ],
              text: "Antenatal education",
            },
            status: "completed",
            location: {
              display: "Niagara Health System - Port Colborne General Site",
            },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "713076009",
                  display: "Antenatal risk assessment",
                },
              ],
              text: "Antenatal risk assessment",
            },
            status: "completed",
            location: {
              display: "Niagara Health System - Port Colborne General Site",
            },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "312404004",
                  display: "Antenatal blood tests",
                },
              ],
              text: "Antenatal blood tests",
            },
            status: "completed",
            location: {
              display: "Niagara Health System - Port Colborne General Site",
            },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:762de3b6-d3b4-f57f-2d5c-bae835365a73",
    resource: {
      resourceType: "CarePlan",
      id: "762de3b6-d3b4-f57f-2d5c-bae835365a73",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Diabetes self management plan.<br/>Activities: <ul><li>Diabetes self management plan</li><li>Diabetes self management plan</li></ul><br/>Care plan is meant to treat Prediabetes.</div>',
      },
      status: "active",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "698360004",
              display: "Diabetes self management plan",
            },
          ],
          text: "Diabetes self management plan",
        },
      ],
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:de9cb9a4-8db9-2397-0bae-e7b3a51b2e18" },
      period: { start: "2017-05-01T20:41:48-04:00" },
      careTeam: [
        { reference: "urn:uuid:0f965750-6e59-80a8-8f85-f499fa4af813" },
      ],
      addresses: [
        { reference: "urn:uuid:e9246e01-e73e-e5ca-be7a-b5629ce6e6c9" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "160670007",
                  display: "Diabetic diet",
                },
              ],
              text: "Diabetic diet",
            },
            status: "in-progress",
            location: { display: "Welland Mcmaster Family Health Team" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "229065009",
                  display: "Exercise therapy",
                },
              ],
              text: "Exercise therapy",
            },
            status: "in-progress",
            location: { display: "Welland Mcmaster Family Health Team" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:3369cbde-4654-ab40-7a4c-6648c11357fd",
    resource: {
      resourceType: "CarePlan",
      id: "3369cbde-4654-ab40-7a4c-6648c11357fd",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Minor surgery care management (procedure).<br/>Activities: <ul><li>Minor surgery care management (procedure)</li><li>Minor surgery care management (procedure)</li></ul></div>',
      },
      status: "completed",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "737471002",
              display: "Minor surgery care management (procedure)",
            },
          ],
          text: "Minor surgery care management (procedure)",
        },
      ],
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3e8379dd-2192-b40b-e819-7c87f9ed1d55" },
      period: {
        start: "2019-08-02T23:17:48-04:00",
        end: "2019-08-21T23:17:48-04:00",
      },
      careTeam: [
        { reference: "urn:uuid:36a55d1d-dc8f-52f6-8200-7ddedd7a9f55" },
      ],
      activity: [
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
            location: {
              display: "Niagara Health System - Port Colborne General Site",
            },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "243077000",
                  display: "Recommendation to limit sexual activity",
                },
              ],
              text: "Recommendation to limit sexual activity",
            },
            status: "completed",
            location: {
              display: "Niagara Health System - Port Colborne General Site",
            },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:5676d95c-3adb-cc6d-2305-64e04c207c3b",
    resource: {
      resourceType: "CarePlan",
      id: "5676d95c-3adb-cc6d-2305-64e04c207c3b",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Self-care interventions (procedure).<br/>Activities: <ul><li>Self-care interventions (procedure)</li><li>Self-care interventions (procedure)</li><li>Self-care interventions (procedure)</li></ul></div>',
      },
      status: "active",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "384758001",
              display: "Self-care interventions (procedure)",
            },
          ],
          text: "Self-care interventions (procedure)",
        },
      ],
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:6736e667-b9f5-ac86-6d74-cf28e36a31c8" },
      period: { start: "1976-04-09T05:20:13-05:00" },
      careTeam: [
        { reference: "urn:uuid:6071bc6c-9cb6-038b-c9b3-8f311b392b5c" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "409002",
                  display: "Food allergy diet",
                },
              ],
              text: "Food allergy diet",
            },
            status: "in-progress",
            location: { display: "Southlake Regional Health Centre" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "58332002",
                  display: "Allergy education",
                },
              ],
              text: "Allergy education",
            },
            status: "in-progress",
            location: { display: "Southlake Regional Health Centre" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "58332002",
                  display: "Allergy education",
                },
              ],
              text: "Allergy education",
            },
            status: "in-progress",
            location: { display: "Southlake Regional Health Centre" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:8d89a623-5f39-6297-d5d8-d53a5f44aae1",
    resource: {
      resourceType: "CarePlan",
      id: "8d89a623-5f39-6297-d5d8-d53a5f44aae1",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Asthma self management.<br/>Activities: <ul><li>Asthma self management</li><li>Asthma self management</li><li>Asthma self management</li></ul><br/>Care plan is meant to treat Childhood asthma.</div>',
      },
      status: "active",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "699728000",
              display: "Asthma self management",
            },
          ],
          text: "Asthma self management",
        },
      ],
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:54d39897-9a45-b061-4fe0-1bb2f8c14dfb" },
      period: { start: "1979-11-17T12:20:13-05:00" },
      careTeam: [
        { reference: "urn:uuid:2122c30c-94a7-799c-58c2-9ec95410392f" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "710818004",
                  display: "Inhaled steroid therapy",
                },
              ],
              text: "Inhaled steroid therapy",
            },
            status: "in-progress",
            location: { display: "Southlake Regional Health Centre" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "708409001",
                  display: "Home nebulizer therapy",
                },
              ],
              text: "Home nebulizer therapy",
            },
            status: "in-progress",
            location: { display: "Southlake Regional Health Centre" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "229298005",
                  display: "Breathing control",
                },
              ],
              text: "Breathing control",
            },
            status: "in-progress",
            location: { display: "Southlake Regional Health Centre" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:3098753b-cbf3-1326-5bcd-9e26d3b4fc25",
    resource: {
      resourceType: "CarePlan",
      id: "3098753b-cbf3-1326-5bcd-9e26d3b4fc25",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Lifestyle education regarding hypertension.<br/>Activities: <ul><li>Lifestyle education regarding hypertension</li><li>Lifestyle education regarding hypertension</li><li>Lifestyle education regarding hypertension</li><li>Lifestyle education regarding hypertension</li></ul><br/>Care plan is meant to treat Hypertension.</div>',
      },
      status: "active",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "443402002",
              display: "Lifestyle education regarding hypertension",
            },
          ],
          text: "Lifestyle education regarding hypertension",
        },
      ],
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:2fb5a9d1-d900-0fae-ce0a-174c047d5782" },
      period: { start: "1993-02-02T12:20:13-05:00" },
      careTeam: [
        { reference: "urn:uuid:0c0f28fc-b967-0cb5-4073-dbeddb15dde8" },
      ],
      addresses: [
        { reference: "urn:uuid:10d3aaa3-35e1-18e3-3a0c-ddf85e8a7fba" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "386463000",
                  display: "Prescribed activity/exercise education",
                },
              ],
              text: "Prescribed activity/exercise education",
            },
            status: "in-progress",
            location: { display: "Cedar Centre" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "413473000",
                  display: "Counseling about alcohol consumption",
                },
              ],
              text: "Counseling about alcohol consumption",
            },
            status: "in-progress",
            location: { display: "Cedar Centre" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "1151000175103",
                  display: "Dietary approaches to stop hypertension diet",
                },
              ],
              text: "Dietary approaches to stop hypertension diet",
            },
            status: "in-progress",
            location: { display: "Cedar Centre" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "225323000",
                  display: "Smoking cessation education",
                },
              ],
              text: "Smoking cessation education",
            },
            status: "in-progress",
            location: { display: "Cedar Centre" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:b042779a-c448-4c51-f285-5ca774e67afc",
    resource: {
      resourceType: "CarePlan",
      id: "b042779a-c448-4c51-f285-5ca774e67afc",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Diabetes self management plan.<br/>Activities: <ul><li>Diabetes self management plan</li><li>Diabetes self management plan</li></ul><br/>Care plan is meant to treat Prediabetes.</div>',
      },
      status: "active",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "698360004",
              display: "Diabetes self management plan",
            },
          ],
          text: "Diabetes self management plan",
        },
      ],
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:ee2eec5c-118d-340d-dba7-c3b01534ebf8" },
      period: { start: "1996-02-20T12:20:13-05:00" },
      careTeam: [
        { reference: "urn:uuid:0ec195e6-bf81-34ce-c825-cb56dd62821a" },
      ],
      addresses: [
        { reference: "urn:uuid:e5a944a3-99f5-db26-ec87-6624886c2f9a" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "160670007",
                  display: "Diabetic diet",
                },
              ],
              text: "Diabetic diet",
            },
            status: "in-progress",
            location: { display: "Cedar Centre" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "229065009",
                  display: "Exercise therapy",
                },
              ],
              text: "Exercise therapy",
            },
            status: "in-progress",
            location: { display: "Cedar Centre" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:338e4403-3975-08c8-d2ce-d18d4fb7a3a1",
    resource: {
      resourceType: "CarePlan",
      id: "338e4403-3975-08c8-d2ce-d18d4fb7a3a1",
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
              system: "http://snomed.info/sct",
              code: "276239002",
              display: "Therapy (regime/therapy)",
            },
          ],
          text: "Therapy (regime/therapy)",
        },
      ],
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:554c6235-c3b7-594d-700f-1cad5ffa9cb4" },
      period: { start: "2014-04-28T01:20:13-04:00" },
      careTeam: [
        { reference: "urn:uuid:b5847671-c84b-1b4d-4d8d-26fb7c8940c5" },
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
            location: { display: "Southlake Regional Health Centre" },
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
            location: { display: "Southlake Regional Health Centre" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:9f25b410-2e5a-aab5-a23c-712fedd85687",
    resource: {
      resourceType: "CarePlan",
      id: "9f25b410-2e5a-aab5-a23c-712fedd85687",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Infectious disease care plan (record artifact).<br/>Activities: <ul><li>Infectious disease care plan (record artifact)</li><li>Infectious disease care plan (record artifact)</li></ul><br/>Care plan is meant to treat Suspected COVID-19.</div>',
      },
      status: "completed",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "736376001",
              display: "Infectious disease care plan (record artifact)",
            },
          ],
          text: "Infectious disease care plan (record artifact)",
        },
      ],
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:daf8c623-5248-d1a4-b4ef-744ae92d1cff" },
      period: {
        start: "2020-03-04T12:32:22-05:00",
        end: "2020-03-04T14:00:02-05:00",
      },
      careTeam: [
        { reference: "urn:uuid:8716290d-6dc8-bbfa-6eb3-25600d16bb0a" },
      ],
      addresses: [
        { reference: "urn:uuid:a31ad9de-d671-eacf-46eb-08ba2f843e7a" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "409524006",
                  display: "Airborne precautions (procedure)",
                },
              ],
              text: "Airborne precautions (procedure)",
            },
            status: "completed",
            location: { display: "Southlake Regional Health Centre" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "409526008",
                  display: "Personal protective equipment (physical object)",
                },
              ],
              text: "Personal protective equipment (physical object)",
            },
            status: "completed",
            location: { display: "Southlake Regional Health Centre" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:00f80fdb-c2ff-f091-5c4d-f1cd79663e1f",
    resource: {
      resourceType: "CarePlan",
      id: "00f80fdb-c2ff-f091-5c4d-f1cd79663e1f",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Infectious disease care plan (record artifact).<br/>Activities: <ul><li>Infectious disease care plan (record artifact)</li><li>Infectious disease care plan (record artifact)</li></ul><br/>Care plan is meant to treat COVID-19.</div>',
      },
      status: "completed",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "736376001",
              display: "Infectious disease care plan (record artifact)",
            },
          ],
          text: "Infectious disease care plan (record artifact)",
        },
      ],
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:daf8c623-5248-d1a4-b4ef-744ae92d1cff" },
      period: {
        start: "2020-03-04T14:00:02-05:00",
        end: "2020-04-10T03:00:02-04:00",
      },
      careTeam: [
        { reference: "urn:uuid:acf894a9-d503-7894-a7d1-1ea4c65954e7" },
      ],
      addresses: [
        { reference: "urn:uuid:d85db719-6c98-6111-1f6d-8729dec9525e" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "409524006",
                  display: "Airborne precautions (procedure)",
                },
              ],
              text: "Airborne precautions (procedure)",
            },
            status: "completed",
            location: { display: "Southlake Regional Health Centre" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "361235007",
                  display: "Isolation of infected patient (procedure)",
                },
              ],
              text: "Isolation of infected patient (procedure)",
            },
            status: "completed",
            location: { display: "Southlake Regional Health Centre" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:ad07224d-dcb7-1c9c-e959-a0531634a84b",
    resource: {
      resourceType: "CarePlan",
      id: "ad07224d-dcb7-1c9c-e959-a0531634a84b",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Diabetes self management plan.<br/>Activities: <ul><li>Diabetes self management plan</li><li>Diabetes self management plan</li></ul><br/>Care plan is meant to treat Diabetes.</div>',
      },
      status: "active",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "698360004",
              display: "Diabetes self management plan",
            },
          ],
          text: "Diabetes self management plan",
        },
      ],
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:aa4e976c-89e5-9727-d1a1-db26b36f7068" },
      period: { start: "1946-02-05T04:03:37-05:00" },
      careTeam: [
        { reference: "urn:uuid:1bae90a8-f7ce-f62a-bdf6-4e7540af048f" },
      ],
      addresses: [
        { reference: "urn:uuid:a0c8dfe1-a2e1-e561-ce53-ebd416d025ec" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "160670007",
                  display: "Diabetic diet",
                },
              ],
              text: "Diabetic diet",
            },
            status: "in-progress",
            location: { display: "Westside Community Clinic" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "229065009",
                  display: "Exercise therapy",
                },
              ],
              text: "Exercise therapy",
            },
            status: "in-progress",
            location: { display: "Westside Community Clinic" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:55c81149-566d-678a-304e-d3812908b4d4",
    resource: {
      resourceType: "CarePlan",
      id: "55c81149-566d-678a-304e-d3812908b4d4",
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
              system: "http://snomed.info/sct",
              code: "408869004",
              display: "Musculoskeletal care",
            },
          ],
          text: "Musculoskeletal care",
        },
      ],
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:0460c4d6-c1c2-f2c9-79e2-222f69d9263c" },
      period: { start: "1960-06-12T05:03:37-04:00" },
      careTeam: [
        { reference: "urn:uuid:2c72a4a0-9f79-b279-d0cb-42315f854d9c" },
      ],
      addresses: [
        { reference: "urn:uuid:e84d0b38-a489-642f-ee35-ce041b076506" },
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
            location: { display: "Westside Community Clinic" },
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
            location: { display: "Westside Community Clinic" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:5e4a46d5-9e78-b809-f82d-0b6a882fc0af",
    resource: {
      resourceType: "CarePlan",
      id: "5e4a46d5-9e78-b809-f82d-0b6a882fc0af",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Care plan (record artifact).<br/>Activities: <ul><li>Care plan (record artifact)</li><li>Care plan (record artifact)</li><li>Care plan (record artifact)</li></ul><br/>Care plan is meant to treat Drug overdose.</div>',
      },
      status: "active",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "734163000",
              display: "Care plan (record artifact)",
            },
          ],
          text: "Care plan (record artifact)",
        },
      ],
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:907558c0-977e-df31-96fc-6a4ac4b9b3a1" },
      period: { start: "2006-12-31T04:03:37-05:00" },
      careTeam: [
        { reference: "urn:uuid:62a909a2-eaa5-37b5-80c6-3372a9149cc0" },
      ],
      addresses: [
        { reference: "urn:uuid:f6d93e8e-29c3-b812-edb9-8908c76376d2" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "60112009",
                  display: "Drug addiction counseling",
                },
              ],
              text: "Drug addiction counseling",
            },
            status: "in-progress",
            location: { display: "St. Paul's Hospital" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "61480009",
                  display: "Drug detoxification",
                },
              ],
              text: "Drug detoxification",
            },
            status: "in-progress",
            location: { display: "St. Paul's Hospital" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "266707007",
                  display: "Drug addiction therapy",
                },
              ],
              text: "Drug addiction therapy",
            },
            status: "in-progress",
            location: { display: "St. Paul's Hospital" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:5a28ae3a-e814-842f-27da-d67281db6c91",
    resource: {
      resourceType: "CarePlan",
      id: "5a28ae3a-e814-842f-27da-d67281db6c91",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Fracture care.<br/>Activities: <ul><li>Fracture care</li><li>Fracture care</li></ul><br/>Care plan is meant to treat Closed fracture of hip.</div>',
      },
      status: "completed",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "385691007",
              display: "Fracture care",
            },
          ],
          text: "Fracture care",
        },
      ],
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:cc6106da-522a-9b50-dda1-455dbbc23f93" },
      period: {
        start: "2012-07-04T09:38:22-04:00",
        end: "2012-09-11T09:38:22-04:00",
      },
      careTeam: [
        { reference: "urn:uuid:4bfee415-cfb8-d08d-7a52-4ac28599965e" },
      ],
      addresses: [
        { reference: "urn:uuid:b03a3e3f-24c3-1c4a-50d7-4bc06b329749" },
      ],
      activity: [
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
            location: { display: "St. Paul's Hospital" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "408580007",
                  display: "Physical activity target light exercise",
                },
              ],
              text: "Physical activity target light exercise",
            },
            status: "completed",
            location: { display: "St. Paul's Hospital" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:e9b199d9-f9a7-f271-8ca5-82ca97d0d462",
    resource: {
      resourceType: "CarePlan",
      id: "e9b199d9-f9a7-f271-8ca5-82ca97d0d462",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Fracture care.<br/>Activities: <ul><li>Fracture care</li><li>Fracture care</li></ul><br/>Care plan is meant to treat Fracture of forearm.</div>',
      },
      status: "completed",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "385691007",
              display: "Fracture care",
            },
          ],
          text: "Fracture care",
        },
      ],
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:5cebc1c8-b971-5cd7-b338-5cb29d71c2e3" },
      period: {
        start: "2013-11-01T10:20:01-04:00",
        end: "2014-02-17T09:20:01-05:00",
      },
      careTeam: [
        { reference: "urn:uuid:3cae322a-6642-d03e-41b1-63d692b440ca" },
      ],
      addresses: [
        { reference: "urn:uuid:52c09077-8a78-205b-1930-6f5e49d703ef" },
      ],
      activity: [
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
            location: { display: "St. Paul's Hospital" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "408580007",
                  display: "Physical activity target light exercise",
                },
              ],
              text: "Physical activity target light exercise",
            },
            status: "completed",
            location: { display: "St. Paul's Hospital" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:ea8d8a2e-868f-ae0d-a31c-f871b2210373",
    resource: {
      resourceType: "CarePlan",
      id: "ea8d8a2e-868f-ae0d-a31c-f871b2210373",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Therapy (regime/therapy).<br/>Activities: <ul><li>Therapy (regime/therapy)</li><li>Therapy (regime/therapy)</li></ul></div>',
      },
      status: "completed",
      intent: "order",
      category: [
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:4ebf48dc-d61c-e5c6-3aef-1e516a3971bb" },
      period: {
        start: "2014-02-06T04:03:37-05:00",
        end: "2014-03-08T12:52:47-05:00",
      },
      careTeam: [
        { reference: "urn:uuid:32aae2aa-9685-7310-4134-3b9bb606cb21" },
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
            status: "completed",
            location: { display: "Westside Community Clinic" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "228557008",
                  display: "Cognitive and behavior therapy",
                },
              ],
              text: "Cognitive and behavior therapy",
            },
            status: "completed",
            location: { display: "Westside Community Clinic" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:6654b9c6-44c8-400e-85ee-9eec16f15574",
    resource: {
      resourceType: "CarePlan",
      id: "6654b9c6-44c8-400e-85ee-9eec16f15574",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Physical therapy procedure.<br/>Activities: <ul><li>Physical therapy procedure</li><li>Physical therapy procedure</li></ul><br/>Care plan is meant to treat Sprain of ankle.</div>',
      },
      status: "completed",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "91251008",
              display: "Physical therapy procedure",
            },
          ],
          text: "Physical therapy procedure",
        },
      ],
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:1937bc0a-495d-da51-a70f-b5b627ba8004" },
      period: {
        start: "2016-03-19T10:20:01-04:00",
        end: "2016-04-29T10:20:01-04:00",
      },
      careTeam: [
        { reference: "urn:uuid:7391c224-78eb-97eb-5b9f-f7c6e1b82a3d" },
      ],
      addresses: [
        { reference: "urn:uuid:be0507c0-5ffa-e013-5ff5-c37566f9e8b5" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "229586001",
                  display:
                    "Rest, ice, compression and elevation treatment programme",
                },
              ],
              text: "Rest, ice, compression and elevation treatment programme",
            },
            status: "completed",
            location: { display: "St. Paul's Hospital" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "229070002",
                  display: "Stretching exercises",
                },
              ],
              text: "Stretching exercises",
            },
            status: "completed",
            location: { display: "St. Paul's Hospital" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:aec9e493-713a-ba36-b66c-f4ec77b72484",
    resource: {
      resourceType: "CarePlan",
      id: "aec9e493-713a-ba36-b66c-f4ec77b72484",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Infectious disease care plan (record artifact).<br/>Activities: <ul><li>Infectious disease care plan (record artifact)</li><li>Infectious disease care plan (record artifact)</li></ul><br/>Care plan is meant to treat Suspected COVID-19.</div>',
      },
      status: "completed",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "736376001",
              display: "Infectious disease care plan (record artifact)",
            },
          ],
          text: "Infectious disease care plan (record artifact)",
        },
      ],
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:39c297e3-1533-8a63-7ed1-382ba22a446e" },
      period: {
        start: "2020-03-07T04:14:19-05:00",
        end: "2020-03-07T04:50:45-05:00",
      },
      careTeam: [
        { reference: "urn:uuid:ab046651-6795-91f7-7ba6-5d784f4ddc7c" },
      ],
      addresses: [
        { reference: "urn:uuid:555db79f-8a16-52e6-2a85-28749e0ba8a3" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "409524006",
                  display: "Airborne precautions (procedure)",
                },
              ],
              text: "Airborne precautions (procedure)",
            },
            status: "completed",
            location: { display: "Westside Community Clinic" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "409526008",
                  display: "Personal protective equipment (physical object)",
                },
              ],
              text: "Personal protective equipment (physical object)",
            },
            status: "completed",
            location: { display: "Westside Community Clinic" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:82ad2ed1-6446-db77-481f-705e56450c8e",
    resource: {
      resourceType: "CarePlan",
      id: "82ad2ed1-6446-db77-481f-705e56450c8e",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Infectious disease care plan (record artifact).<br/>Activities: <ul><li>Infectious disease care plan (record artifact)</li><li>Infectious disease care plan (record artifact)</li></ul><br/>Care plan is meant to treat COVID-19.</div>',
      },
      status: "completed",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "736376001",
              display: "Infectious disease care plan (record artifact)",
            },
          ],
          text: "Infectious disease care plan (record artifact)",
        },
      ],
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:39c297e3-1533-8a63-7ed1-382ba22a446e" },
      period: {
        start: "2020-03-07T04:50:45-05:00",
        end: "2020-03-26T20:50:45-04:00",
      },
      careTeam: [
        { reference: "urn:uuid:ebc2eaa9-f8f4-a014-812c-d01dc05a4a9c" },
      ],
      addresses: [
        { reference: "urn:uuid:86e8eb88-25cf-96b6-3fd7-57bf318b09e9" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "409524006",
                  display: "Airborne precautions (procedure)",
                },
              ],
              text: "Airborne precautions (procedure)",
            },
            status: "completed",
            location: { display: "Westside Community Clinic" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "361235007",
                  display: "Isolation of infected patient (procedure)",
                },
              ],
              text: "Isolation of infected patient (procedure)",
            },
            status: "completed",
            location: { display: "Westside Community Clinic" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:731d08f2-626c-fae0-9358-aeacd40293c8",
    resource: {
      resourceType: "CarePlan",
      id: "731d08f2-626c-fae0-9358-aeacd40293c8",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Lifestyle education regarding hypertension.<br/>Activities: <ul><li>Lifestyle education regarding hypertension</li><li>Lifestyle education regarding hypertension</li><li>Lifestyle education regarding hypertension</li><li>Lifestyle education regarding hypertension</li></ul><br/>Care plan is meant to treat Hypertension.</div>',
      },
      status: "active",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "443402002",
              display: "Lifestyle education regarding hypertension",
            },
          ],
          text: "Lifestyle education regarding hypertension",
        },
      ],
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:45b3abbc-7831-2d2e-7002-7f0fa120f65e" },
      period: { start: "1985-01-21T23:29:59-05:00" },
      careTeam: [
        { reference: "urn:uuid:2d2c766d-afcc-1c3f-2bf9-222732542216" },
      ],
      addresses: [
        { reference: "urn:uuid:734f02e6-121e-7795-3360-4d30a48bf88f" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "386463000",
                  display: "Prescribed activity/exercise education",
                },
              ],
              text: "Prescribed activity/exercise education",
            },
            status: "in-progress",
            location: { display: "Fort Simpson Health Centre" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "413473000",
                  display: "Counseling about alcohol consumption",
                },
              ],
              text: "Counseling about alcohol consumption",
            },
            status: "in-progress",
            location: { display: "Fort Simpson Health Centre" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "1151000175103",
                  display: "Dietary approaches to stop hypertension diet",
                },
              ],
              text: "Dietary approaches to stop hypertension diet",
            },
            status: "in-progress",
            location: { display: "Fort Simpson Health Centre" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "225323000",
                  display: "Smoking cessation education",
                },
              ],
              text: "Smoking cessation education",
            },
            status: "in-progress",
            location: { display: "Fort Simpson Health Centre" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:a663bffe-5606-4717-654b-15e32ef7ca60",
    resource: {
      resourceType: "CarePlan",
      id: "a663bffe-5606-4717-654b-15e32ef7ca60",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Therapy (regime/therapy).<br/>Activities: <ul><li>Therapy (regime/therapy)</li><li>Therapy (regime/therapy)</li></ul></div>',
      },
      status: "completed",
      intent: "order",
      category: [
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
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:0960a8bf-007f-9fe6-41ba-7ff569e3e8b0" },
      period: {
        start: "2014-02-05T23:29:59-05:00",
        end: "2014-03-08T08:01:50-05:00",
      },
      careTeam: [
        { reference: "urn:uuid:99e68494-7983-4952-1a79-3add1d7e09a4" },
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
            status: "completed",
            location: { display: "Hay River Regional Health Centre" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "228557008",
                  display: "Cognitive and behavior therapy",
                },
              ],
              text: "Cognitive and behavior therapy",
            },
            status: "completed",
            location: { display: "Hay River Regional Health Centre" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:17e7000a-9c6b-3889-b3b5-1ddff0c64771",
    resource: {
      resourceType: "CarePlan",
      id: "17e7000a-9c6b-3889-b3b5-1ddff0c64771",
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
              system: "http://snomed.info/sct",
              code: "276239002",
              display: "Therapy (regime/therapy)",
            },
          ],
          text: "Therapy (regime/therapy)",
        },
      ],
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:d83990d9-67c8-3c35-2e78-4431fc28b5d4" },
      period: { start: "2014-04-07T09:01:50-04:00" },
      careTeam: [
        { reference: "urn:uuid:04bc9ac5-390b-26e9-985b-148852498e75" },
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
            location: { display: "Hay River Regional Health Centre" },
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
            location: { display: "Hay River Regional Health Centre" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:ddac0a4b-9bd0-7a5f-e130-b4c6b0c03cce",
    resource: {
      resourceType: "CarePlan",
      id: "ddac0a4b-9bd0-7a5f-e130-b4c6b0c03cce",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Wound care.<br/>Activities: <ul><li>Wound care</li><li>Wound care</li></ul><br/>Care plan is meant to treat Laceration of hand.</div>',
      },
      status: "completed",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "225358003",
              display: "Wound care",
            },
          ],
          text: "Wound care",
        },
      ],
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:982b2ced-fba6-3e9b-dbff-2bfd847ac103" },
      period: {
        start: "2018-04-24T05:13:59-04:00",
        end: "2018-05-10T05:45:17-04:00",
      },
      careTeam: [
        { reference: "urn:uuid:38484532-8041-5a6d-7281-8e61353a69da" },
      ],
      addresses: [
        { reference: "urn:uuid:025d9865-5f67-daa3-dcb9-ee61ad8e3a5a" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "385949008",
                  display: "Dressing change management",
                },
              ],
              text: "Dressing change management",
            },
            status: "completed",
            location: { display: "Hay River Regional Health Centre" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "439830001",
                  display: "Behavior to prevent infection",
                },
              ],
              text: "Behavior to prevent infection",
            },
            status: "completed",
            location: { display: "Hay River Regional Health Centre" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:bf8964a1-c1ec-fdfe-6b51-482c80077116",
    resource: {
      resourceType: "CarePlan",
      id: "bf8964a1-c1ec-fdfe-6b51-482c80077116",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Infectious disease care plan (record artifact).<br/>Activities: <ul><li>Infectious disease care plan (record artifact)</li><li>Infectious disease care plan (record artifact)</li></ul><br/>Care plan is meant to treat Suspected COVID-19.</div>',
      },
      status: "completed",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "736376001",
              display: "Infectious disease care plan (record artifact)",
            },
          ],
          text: "Infectious disease care plan (record artifact)",
        },
      ],
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:823b4e28-229e-ec0f-9a30-c8233e002be9" },
      period: {
        start: "2020-02-22T23:42:25-05:00",
        end: "2020-02-23T00:25:08-05:00",
      },
      careTeam: [
        { reference: "urn:uuid:a8dd3972-169a-7403-a3ee-6f7ec37c966c" },
      ],
      addresses: [
        { reference: "urn:uuid:3ea0dd9a-ce37-22a1-a958-c952d508bf31" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "409524006",
                  display: "Airborne precautions (procedure)",
                },
              ],
              text: "Airborne precautions (procedure)",
            },
            status: "completed",
            location: { display: "Hay River Regional Health Centre" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "409526008",
                  display: "Personal protective equipment (physical object)",
                },
              ],
              text: "Personal protective equipment (physical object)",
            },
            status: "completed",
            location: { display: "Hay River Regional Health Centre" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
  {
    fullUrl: "urn:uuid:5c74cc5e-0b11-a1bd-6c85-2762db7f3f9b",
    resource: {
      resourceType: "CarePlan",
      id: "5c74cc5e-0b11-a1bd-6c85-2762db7f3f9b",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Care Plan for Infectious disease care plan (record artifact).<br/>Activities: <ul><li>Infectious disease care plan (record artifact)</li><li>Infectious disease care plan (record artifact)</li></ul><br/>Care plan is meant to treat COVID-19.</div>',
      },
      status: "completed",
      intent: "order",
      category: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "736376001",
              display: "Infectious disease care plan (record artifact)",
            },
          ],
          text: "Infectious disease care plan (record artifact)",
        },
      ],
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:823b4e28-229e-ec0f-9a30-c8233e002be9" },
      period: {
        start: "2020-02-23T00:25:08-05:00",
        end: "2020-03-13T00:25:08-04:00",
      },
      careTeam: [
        { reference: "urn:uuid:3a1065f7-9d34-dab1-74b0-6f35c251fb35" },
      ],
      addresses: [
        { reference: "urn:uuid:a29135d9-4900-b8f7-fb20-d7d028203bc3" },
      ],
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "409524006",
                  display: "Airborne precautions (procedure)",
                },
              ],
              text: "Airborne precautions (procedure)",
            },
            status: "completed",
            location: { display: "Hay River Regional Health Centre" },
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "361235007",
                  display: "Isolation of infected patient (procedure)",
                },
              ],
              text: "Isolation of infected patient (procedure)",
            },
            status: "completed",
            location: { display: "Hay River Regional Health Centre" },
          },
        },
      ],
    },
    request: { method: "POST", url: "CarePlan" },
  },
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
