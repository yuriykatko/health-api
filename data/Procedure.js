const entities = [
  {
    fullUrl: "urn:uuid:6e0d29cd-7802-6bd0-d508-ecd9f37defc6",
    resource: {
      resourceType: "Procedure",
      id: "6e0d29cd-7802-6bd0-d508-ecd9f37defc6",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "252160004",
            display: "Standard pregnancy test",
          },
        ],
        text: "Standard pregnancy test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      performedPeriod: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2011-12-12T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:d497146f-5abb-80ce-6c52-7bbd6d6f6980",
    resource: {
      resourceType: "Procedure",
      id: "d497146f-5abb-80ce-6c52-7bbd6d6f6980",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "169230002",
            display: "Ultrasound scan for fetal viability",
          },
        ],
        text: "Ultrasound scan for fetal viability",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      performedPeriod: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2011-12-12T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:c47b85f9-7801-eccc-fef4-c5c231ff0d88",
    resource: {
      resourceType: "Procedure",
      id: "c47b85f9-7801-eccc-fef4-c5c231ff0d88",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      performedPeriod: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2011-12-12T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:30ea2571-1b86-f4f7-f5cf-0f0b7b15711f",
    resource: {
      resourceType: "Procedure",
      id: "30ea2571-1b86-f4f7-f5cf-0f0b7b15711f",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      performedPeriod: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2011-12-12T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:4668b124-f3cf-e4e3-ba50-e607bc49e734",
    resource: {
      resourceType: "Procedure",
      id: "4668b124-f3cf-e4e3-ba50-e607bc49e734",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "44608003",
            display: "Blood typing, RH typing",
          },
        ],
        text: "Blood typing, RH typing",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      performedPeriod: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2011-12-12T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:5aaa84ca-b4ae-83e2-1e9d-90400a5fe7d2",
    resource: {
      resourceType: "Procedure",
      id: "5aaa84ca-b4ae-83e2-1e9d-90400a5fe7d2",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "104091002",
            display: "Hemoglobin / Hematocrit / Platelet count",
          },
        ],
        text: "Hemoglobin / Hematocrit / Platelet count",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      performedPeriod: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2011-12-12T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:9ed7dde8-cb3b-0b99-3af2-ff5037eefad9",
    resource: {
      resourceType: "Procedure",
      id: "9ed7dde8-cb3b-0b99-3af2-ff5037eefad9",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "47758006",
            display: "Hepatitis B Surface Antigen Measurement",
          },
        ],
        text: "Hepatitis B Surface Antigen Measurement",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      performedPeriod: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2011-12-12T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:a5da8276-415e-73cf-4f1c-92340f9219f0",
    resource: {
      resourceType: "Procedure",
      id: "a5da8276-415e-73cf-4f1c-92340f9219f0",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "31676001",
            display: "Human immunodeficiency virus antigen test",
          },
        ],
        text: "Human immunodeficiency virus antigen test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      performedPeriod: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2011-12-12T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:a17badc0-c095-2788-247a-26c50856bdb9",
    resource: {
      resourceType: "Procedure",
      id: "a17badc0-c095-2788-247a-26c50856bdb9",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "310861008",
            display: "Chlamydia antigen test",
          },
        ],
        text: "Chlamydia antigen test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      performedPeriod: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2011-12-12T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:3f796792-6d7f-7752-8ea8-3f81e7f30a47",
    resource: {
      resourceType: "Procedure",
      id: "3f796792-6d7f-7752-8ea8-3f81e7f30a47",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "165829005",
            display: "Gonorrhea infection test",
          },
        ],
        text: "Gonorrhea infection test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      performedPeriod: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2011-12-12T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:f977a98d-c956-5cde-f65e-419232cdcecc",
    resource: {
      resourceType: "Procedure",
      id: "f977a98d-c956-5cde-f65e-419232cdcecc",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "269828009",
            display: "Syphilis infection test",
          },
        ],
        text: "Syphilis infection test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      performedPeriod: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2011-12-12T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:ca13f6df-68b0-63d1-8fe4-0f09335a4c96",
    resource: {
      resourceType: "Procedure",
      id: "ca13f6df-68b0-63d1-8fe4-0f09335a4c96",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "117010004",
            display: "Urine culture",
          },
        ],
        text: "Urine culture",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      performedPeriod: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2011-12-12T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:c4a84a13-b96b-cbdc-bcd0-816a23f4f93c",
    resource: {
      resourceType: "Procedure",
      id: "c4a84a13-b96b-cbdc-bcd0-816a23f4f93c",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "90226004",
            display:
              "Cytopathology procedure, preparation of smear, genital source",
          },
        ],
        text: "Cytopathology procedure, preparation of smear, genital source",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      performedPeriod: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2011-12-12T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:5eb47d45-3150-380a-a3d6-886c6f8db014",
    resource: {
      resourceType: "Procedure",
      id: "5eb47d45-3150-380a-a3d6-886c6f8db014",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "395123002",
            display: "Urine screening test for diabetes",
          },
        ],
        text: "Urine screening test for diabetes",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      performedPeriod: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2011-12-12T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:0fb39079-954b-7f58-c97e-f100913f06e7",
    resource: {
      resourceType: "Procedure",
      id: "0fb39079-954b-7f58-c97e-f100913f06e7",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "104375008",
            display: "Hepatitis C antibody test",
          },
        ],
        text: "Hepatitis C antibody test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      performedPeriod: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2011-12-12T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:a894724b-eb52-728a-3609-189350b9b9e7",
    resource: {
      resourceType: "Procedure",
      id: "a894724b-eb52-728a-3609-189350b9b9e7",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "169690007",
            display: "Rubella screening",
          },
        ],
        text: "Rubella screening",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      performedPeriod: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2011-12-12T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:ad642ecb-8027-ab3c-c78d-108f9c6662e1",
    resource: {
      resourceType: "Procedure",
      id: "ad642ecb-8027-ab3c-c78d-108f9c6662e1",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "104326007",
            display: "Measurement of Varicella-zoster virus antibody",
          },
        ],
        text: "Measurement of Varicella-zoster virus antibody",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      performedPeriod: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2011-12-12T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:7c31a8a3-f3d7-b836-c81d-f628318eefae",
    resource: {
      resourceType: "Procedure",
      id: "7c31a8a3-f3d7-b836-c81d-f628318eefae",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "28163009",
            display: "Skin test for tuberculosis",
          },
        ],
        text: "Skin test for tuberculosis",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      performedPeriod: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2011-12-12T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:f211407b-ccdb-3b04-d653-825572048bef",
    resource: {
      resourceType: "Procedure",
      id: "f211407b-ccdb-3b04-d653-825572048bef",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "167271000",
            display: "Urine protein test",
          },
        ],
        text: "Urine protein test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      performedPeriod: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2011-12-12T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:fca90e9e-c7c4-cac6-ff8e-161afccdf1f8",
    resource: {
      resourceType: "Procedure",
      id: "fca90e9e-c7c4-cac6-ff8e-161afccdf1f8",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "5880005",
            display: "Physical examination of mother",
          },
        ],
        text: "Physical examination of mother",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:088cf06d-75b3-bafb-5670-b0ae9efba494" },
      performedPeriod: {
        start: "2011-12-12T19:41:48-05:00",
        end: "2011-12-12T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:dab5d6ae-0803-09e3-c38f-89f908c28a5e",
    resource: {
      resourceType: "Procedure",
      id: "dab5d6ae-0803-09e3-c38f-89f908c28a5e",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:d20e4b75-8306-a6d3-fad3-000391001564" },
      performedPeriod: {
        start: "2012-01-09T19:41:48-05:00",
        end: "2012-01-09T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:d4a2324a-fe3c-4c29-4fbf-ced355c81817",
    resource: {
      resourceType: "Procedure",
      id: "d4a2324a-fe3c-4c29-4fbf-ced355c81817",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:d20e4b75-8306-a6d3-fad3-000391001564" },
      performedPeriod: {
        start: "2012-01-09T19:41:48-05:00",
        end: "2012-01-09T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:b4ed44b7-dd1e-553d-7611-0f892d1e3eed",
    resource: {
      resourceType: "Procedure",
      id: "b4ed44b7-dd1e-553d-7611-0f892d1e3eed",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "443529005",
            display:
              "Screening for chromosomal aneuploidy in prenatal amniotic fluid",
          },
        ],
        text: "Screening for chromosomal aneuploidy in prenatal amniotic fluid",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:d20e4b75-8306-a6d3-fad3-000391001564" },
      performedPeriod: {
        start: "2012-01-09T19:41:48-05:00",
        end: "2012-01-09T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:2fce7581-3f26-9f52-6a8c-0f42149ba03b",
    resource: {
      resourceType: "Procedure",
      id: "2fce7581-3f26-9f52-6a8c-0f42149ba03b",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "271442007",
            display: "Fetal anatomy study",
          },
        ],
        text: "Fetal anatomy study",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:cbb47ef9-7d24-4fda-b0ff-d4adefa1d902" },
      performedPeriod: {
        start: "2012-02-06T19:41:48-05:00",
        end: "2012-02-06T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:1fdb8646-a35c-de35-d863-cee9a4553f6a",
    resource: {
      resourceType: "Procedure",
      id: "1fdb8646-a35c-de35-d863-cee9a4553f6a",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "275833003",
            display: "Alpha-fetoprotein test",
          },
        ],
        text: "Alpha-fetoprotein test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:cbb47ef9-7d24-4fda-b0ff-d4adefa1d902" },
      performedPeriod: {
        start: "2012-02-06T19:41:48-05:00",
        end: "2012-02-06T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:485014b7-896b-86c0-7cc3-a93b3c1abeff",
    resource: {
      resourceType: "Procedure",
      id: "485014b7-896b-86c0-7cc3-a93b3c1abeff",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:cbb47ef9-7d24-4fda-b0ff-d4adefa1d902" },
      performedPeriod: {
        start: "2012-02-06T19:41:48-05:00",
        end: "2012-02-06T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:a376ca82-7531-e932-41e1-71d4432dfa6d",
    resource: {
      resourceType: "Procedure",
      id: "a376ca82-7531-e932-41e1-71d4432dfa6d",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:cbb47ef9-7d24-4fda-b0ff-d4adefa1d902" },
      performedPeriod: {
        start: "2012-02-06T19:41:48-05:00",
        end: "2012-02-06T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:d8b2d1f7-51d3-de6d-ece5-dc3bef7a2d5e",
    resource: {
      resourceType: "Procedure",
      id: "d8b2d1f7-51d3-de6d-ece5-dc3bef7a2d5e",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:d4260487-0991-bc99-e27b-8335ce42be37" },
      performedPeriod: {
        start: "2012-03-05T19:41:48-05:00",
        end: "2012-03-05T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:8a0800f0-199d-4c2f-e5e5-5e21340409e7",
    resource: {
      resourceType: "Procedure",
      id: "8a0800f0-199d-4c2f-e5e5-5e21340409e7",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:d4260487-0991-bc99-e27b-8335ce42be37" },
      performedPeriod: {
        start: "2012-03-05T19:41:48-05:00",
        end: "2012-03-05T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:1d3cf84d-f615-724e-99db-1f1daf69f18c",
    resource: {
      resourceType: "Procedure",
      id: "1d3cf84d-f615-724e-99db-1f1daf69f18c",
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
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:b9cfb8a9-eb5a-ff09-141b-ba1f88a66e19" },
      performedPeriod: {
        start: "2012-03-26T20:41:48-04:00",
        end: "2012-03-26T20:56:48-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:1344aa43-d778-f798-ddb1-ac6464c28211",
    resource: {
      resourceType: "Procedure",
      id: "1344aa43-d778-f798-ddb1-ac6464c28211",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:1ea07b8d-cbef-056b-865b-e4ee293f9747" },
      performedPeriod: {
        start: "2012-04-02T20:41:48-04:00",
        end: "2012-04-02T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:9a4ed4fc-9352-8a15-37f6-cc0d36b74b69",
    resource: {
      resourceType: "Procedure",
      id: "9a4ed4fc-9352-8a15-37f6-cc0d36b74b69",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:1ea07b8d-cbef-056b-865b-e4ee293f9747" },
      performedPeriod: {
        start: "2012-04-02T20:41:48-04:00",
        end: "2012-04-02T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:47fedcf9-b4f2-131e-f125-dd0efd55c639",
    resource: {
      resourceType: "Procedure",
      id: "47fedcf9-b4f2-131e-f125-dd0efd55c639",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "104091002",
            display: "Hemoglobin / Hematocrit / Platelet count",
          },
        ],
        text: "Hemoglobin / Hematocrit / Platelet count",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:39d1a133-3566-b4c2-3481-cf5d722acdbe" },
      performedPeriod: {
        start: "2012-04-30T20:41:48-04:00",
        end: "2012-04-30T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:f5462f4f-0aa2-cc88-08bd-03de629d2542",
    resource: {
      resourceType: "Procedure",
      id: "f5462f4f-0aa2-cc88-08bd-03de629d2542",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "399014008",
            display: "Vaccination for diphtheria, pertussis, and tetanus",
          },
        ],
        text: "Vaccination for diphtheria, pertussis, and tetanus",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:39d1a133-3566-b4c2-3481-cf5d722acdbe" },
      performedPeriod: {
        start: "2012-04-30T20:41:48-04:00",
        end: "2012-04-30T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:79600069-040f-5478-f289-b96d7a786075",
    resource: {
      resourceType: "Procedure",
      id: "79600069-040f-5478-f289-b96d7a786075",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "268556000",
            display: "Urine screening for glucose",
          },
        ],
        text: "Urine screening for glucose",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:39d1a133-3566-b4c2-3481-cf5d722acdbe" },
      performedPeriod: {
        start: "2012-04-30T20:41:48-04:00",
        end: "2012-04-30T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:c03070e7-56da-7f6b-cc49-13cdaab516b7",
    resource: {
      resourceType: "Procedure",
      id: "c03070e7-56da-7f6b-cc49-13cdaab516b7",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:39d1a133-3566-b4c2-3481-cf5d722acdbe" },
      performedPeriod: {
        start: "2012-04-30T20:41:48-04:00",
        end: "2012-04-30T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:df43d1f3-73d3-023f-c471-784988db91b2",
    resource: {
      resourceType: "Procedure",
      id: "df43d1f3-73d3-023f-c471-784988db91b2",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:39d1a133-3566-b4c2-3481-cf5d722acdbe" },
      performedPeriod: {
        start: "2012-04-30T20:41:48-04:00",
        end: "2012-04-30T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:8ed63aa9-1584-1da5-4d2c-6ce5e975b847",
    resource: {
      resourceType: "Procedure",
      id: "8ed63aa9-1584-1da5-4d2c-6ce5e975b847",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:dd972612-7e6a-c4f0-9d11-984fa539da23" },
      performedPeriod: {
        start: "2012-05-28T20:41:48-04:00",
        end: "2012-05-28T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:4ff4c020-af3f-5bfa-54bf-b0597f6882f3",
    resource: {
      resourceType: "Procedure",
      id: "4ff4c020-af3f-5bfa-54bf-b0597f6882f3",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:dd972612-7e6a-c4f0-9d11-984fa539da23" },
      performedPeriod: {
        start: "2012-05-28T20:41:48-04:00",
        end: "2012-05-28T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:638724d6-6fc4-7d73-5076-d6c0a79646ab",
    resource: {
      resourceType: "Procedure",
      id: "638724d6-6fc4-7d73-5076-d6c0a79646ab",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "118001005",
            display: "Streptococcus pneumoniae group B antigen test",
          },
        ],
        text: "Streptococcus pneumoniae group B antigen test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:1411d01d-0d36-10bd-df8f-a64d31accbaf" },
      performedPeriod: {
        start: "2012-06-25T20:41:48-04:00",
        end: "2012-06-25T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:91a37b1b-f449-9c9d-2f4b-0186b7ac7566",
    resource: {
      resourceType: "Procedure",
      id: "91a37b1b-f449-9c9d-2f4b-0186b7ac7566",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:1411d01d-0d36-10bd-df8f-a64d31accbaf" },
      performedPeriod: {
        start: "2012-06-25T20:41:48-04:00",
        end: "2012-06-25T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:05a74ad1-58e3-9c42-a331-a52c9273f525",
    resource: {
      resourceType: "Procedure",
      id: "05a74ad1-58e3-9c42-a331-a52c9273f525",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:1411d01d-0d36-10bd-df8f-a64d31accbaf" },
      performedPeriod: {
        start: "2012-06-25T20:41:48-04:00",
        end: "2012-06-25T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:b8f3db05-f9ea-9f08-8777-e3f985cf6744",
    resource: {
      resourceType: "Procedure",
      id: "b8f3db05-f9ea-9f08-8777-e3f985cf6744",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "237001001",
            display: "Augmentation of labor",
          },
        ],
        text: "Augmentation of labor",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:28b3e5da-b3ef-4808-a64a-e1ae1bf4a5f8" },
      performedPeriod: {
        start: "2012-07-09T20:41:48-04:00",
        end: "2012-07-09T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:45adc083-17b3-85f7-6e32-825e35338409",
    resource: {
      resourceType: "Procedure",
      id: "45adc083-17b3-85f7-6e32-825e35338409",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "66348005",
            display: "Childbirth",
          },
        ],
        text: "Childbirth",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:28b3e5da-b3ef-4808-a64a-e1ae1bf4a5f8" },
      performedPeriod: {
        start: "2012-07-09T20:41:48-04:00",
        end: "2012-07-09T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:54a318b5-b450-2933-0c32-991a5454c0a6",
    resource: {
      resourceType: "Procedure",
      id: "54a318b5-b450-2933-0c32-991a5454c0a6",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "5880005",
            display: "Physical examination following birth",
          },
        ],
        text: "Physical examination following birth",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:aa7ab1f5-b794-9e9e-79b5-efbb04e428ea" },
      performedPeriod: {
        start: "2012-08-20T20:41:48-04:00",
        end: "2012-08-20T20:56:48-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:a80742af-a2d2-f27c-6654-ea0971808e4e",
    resource: {
      resourceType: "Procedure",
      id: "a80742af-a2d2-f27c-6654-ea0971808e4e",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "171207006",
            display: "Depression screening",
          },
        ],
        text: "Depression screening",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:aa7ab1f5-b794-9e9e-79b5-efbb04e428ea" },
      performedPeriod: {
        start: "2012-08-20T20:41:48-04:00",
        end: "2012-08-20T20:56:48-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:af9d2b1a-f86f-bb08-2f2f-bf5b3c0eca61",
    resource: {
      resourceType: "Procedure",
      id: "af9d2b1a-f86f-bb08-2f2f-bf5b3c0eca61",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "252160004",
            display: "Standard pregnancy test",
          },
        ],
        text: "Standard pregnancy test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      performedPeriod: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2012-11-19T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:f88ac5f6-2f00-fae4-411e-0cefafe4b9b1",
    resource: {
      resourceType: "Procedure",
      id: "f88ac5f6-2f00-fae4-411e-0cefafe4b9b1",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "169230002",
            display: "Ultrasound scan for fetal viability",
          },
        ],
        text: "Ultrasound scan for fetal viability",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      performedPeriod: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2012-11-19T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:0385a1c7-446b-c0e7-11ab-f017de13be9f",
    resource: {
      resourceType: "Procedure",
      id: "0385a1c7-446b-c0e7-11ab-f017de13be9f",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      performedPeriod: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2012-11-19T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:af76ac92-0e34-c066-2cbc-b721d0ca1801",
    resource: {
      resourceType: "Procedure",
      id: "af76ac92-0e34-c066-2cbc-b721d0ca1801",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      performedPeriod: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2012-11-19T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:d7319d82-7053-af7a-f0b3-af8d89f605bc",
    resource: {
      resourceType: "Procedure",
      id: "d7319d82-7053-af7a-f0b3-af8d89f605bc",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "44608003",
            display: "Blood typing, RH typing",
          },
        ],
        text: "Blood typing, RH typing",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      performedPeriod: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2012-11-19T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:4b19b90b-b9c3-225b-4032-00cee8580632",
    resource: {
      resourceType: "Procedure",
      id: "4b19b90b-b9c3-225b-4032-00cee8580632",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "104091002",
            display: "Hemoglobin / Hematocrit / Platelet count",
          },
        ],
        text: "Hemoglobin / Hematocrit / Platelet count",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      performedPeriod: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2012-11-19T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:fc0c3353-eae2-47f5-7990-ef521e76f6f8",
    resource: {
      resourceType: "Procedure",
      id: "fc0c3353-eae2-47f5-7990-ef521e76f6f8",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "47758006",
            display: "Hepatitis B Surface Antigen Measurement",
          },
        ],
        text: "Hepatitis B Surface Antigen Measurement",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      performedPeriod: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2012-11-19T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:34a3d4cf-dc5d-5bb4-a58e-cbbe7be90ccc",
    resource: {
      resourceType: "Procedure",
      id: "34a3d4cf-dc5d-5bb4-a58e-cbbe7be90ccc",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "31676001",
            display: "Human immunodeficiency virus antigen test",
          },
        ],
        text: "Human immunodeficiency virus antigen test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      performedPeriod: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2012-11-19T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:08ffc52b-334a-e0a2-7945-127ce91fd6c5",
    resource: {
      resourceType: "Procedure",
      id: "08ffc52b-334a-e0a2-7945-127ce91fd6c5",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "310861008",
            display: "Chlamydia antigen test",
          },
        ],
        text: "Chlamydia antigen test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      performedPeriod: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2012-11-19T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:6371a06a-e378-f9b4-93e2-7f7a8e14c0cc",
    resource: {
      resourceType: "Procedure",
      id: "6371a06a-e378-f9b4-93e2-7f7a8e14c0cc",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "165829005",
            display: "Gonorrhea infection test",
          },
        ],
        text: "Gonorrhea infection test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      performedPeriod: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2012-11-19T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:d4153a54-c4c7-7360-270c-1a2d4016c94a",
    resource: {
      resourceType: "Procedure",
      id: "d4153a54-c4c7-7360-270c-1a2d4016c94a",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "269828009",
            display: "Syphilis infection test",
          },
        ],
        text: "Syphilis infection test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      performedPeriod: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2012-11-19T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:bc96b40f-5920-5273-1574-7dd509d15e23",
    resource: {
      resourceType: "Procedure",
      id: "bc96b40f-5920-5273-1574-7dd509d15e23",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "117010004",
            display: "Urine culture",
          },
        ],
        text: "Urine culture",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      performedPeriod: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2012-11-19T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:ae91c807-4769-fc20-2668-e20325af94e2",
    resource: {
      resourceType: "Procedure",
      id: "ae91c807-4769-fc20-2668-e20325af94e2",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "90226004",
            display:
              "Cytopathology procedure, preparation of smear, genital source",
          },
        ],
        text: "Cytopathology procedure, preparation of smear, genital source",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      performedPeriod: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2012-11-19T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:143f7012-91eb-4b5b-9b07-a75e453e3234",
    resource: {
      resourceType: "Procedure",
      id: "143f7012-91eb-4b5b-9b07-a75e453e3234",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "395123002",
            display: "Urine screening test for diabetes",
          },
        ],
        text: "Urine screening test for diabetes",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      performedPeriod: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2012-11-19T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:1ed549da-0d4b-2767-a2cc-6ca3e362349a",
    resource: {
      resourceType: "Procedure",
      id: "1ed549da-0d4b-2767-a2cc-6ca3e362349a",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "104375008",
            display: "Hepatitis C antibody test",
          },
        ],
        text: "Hepatitis C antibody test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      performedPeriod: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2012-11-19T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:be4c5d70-cdda-6fae-8d59-efef7a60d65a",
    resource: {
      resourceType: "Procedure",
      id: "be4c5d70-cdda-6fae-8d59-efef7a60d65a",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "169690007",
            display: "Rubella screening",
          },
        ],
        text: "Rubella screening",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      performedPeriod: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2012-11-19T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:397b2a47-ec70-50d0-572a-4038d5113ab6",
    resource: {
      resourceType: "Procedure",
      id: "397b2a47-ec70-50d0-572a-4038d5113ab6",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "104326007",
            display: "Measurement of Varicella-zoster virus antibody",
          },
        ],
        text: "Measurement of Varicella-zoster virus antibody",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      performedPeriod: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2012-11-19T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:25c91e47-480e-56fd-4252-0320d35f3a60",
    resource: {
      resourceType: "Procedure",
      id: "25c91e47-480e-56fd-4252-0320d35f3a60",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "28163009",
            display: "Skin test for tuberculosis",
          },
        ],
        text: "Skin test for tuberculosis",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      performedPeriod: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2012-11-19T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:a97fdb33-7702-d187-8c0b-d2ee10ca032c",
    resource: {
      resourceType: "Procedure",
      id: "a97fdb33-7702-d187-8c0b-d2ee10ca032c",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "167271000",
            display: "Urine protein test",
          },
        ],
        text: "Urine protein test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      performedPeriod: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2012-11-19T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:7520ee56-7695-5bb2-378c-f8d40f007f07",
    resource: {
      resourceType: "Procedure",
      id: "7520ee56-7695-5bb2-378c-f8d40f007f07",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "5880005",
            display: "Physical examination of mother",
          },
        ],
        text: "Physical examination of mother",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3b69c8db-a1f8-b33b-6ee0-80c6d96a9c78" },
      performedPeriod: {
        start: "2012-11-19T19:41:48-05:00",
        end: "2012-11-19T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:23275a91-fb53-c527-450b-fe284be76314",
    resource: {
      resourceType: "Procedure",
      id: "23275a91-fb53-c527-450b-fe284be76314",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:976d54fc-3e59-e778-7434-5a553575385a" },
      performedPeriod: {
        start: "2012-12-17T19:41:48-05:00",
        end: "2012-12-17T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:b22547ea-54f0-4c43-f695-9d2276e6cb6b",
    resource: {
      resourceType: "Procedure",
      id: "b22547ea-54f0-4c43-f695-9d2276e6cb6b",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:976d54fc-3e59-e778-7434-5a553575385a" },
      performedPeriod: {
        start: "2012-12-17T19:41:48-05:00",
        end: "2012-12-17T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:4a60cf6f-5553-738c-2081-0f672fd6a456",
    resource: {
      resourceType: "Procedure",
      id: "4a60cf6f-5553-738c-2081-0f672fd6a456",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "443529005",
            display:
              "Screening for chromosomal aneuploidy in prenatal amniotic fluid",
          },
        ],
        text: "Screening for chromosomal aneuploidy in prenatal amniotic fluid",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:976d54fc-3e59-e778-7434-5a553575385a" },
      performedPeriod: {
        start: "2012-12-17T19:41:48-05:00",
        end: "2012-12-17T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:fb631da4-83ae-923b-0ddc-5fe7615c4062",
    resource: {
      resourceType: "Procedure",
      id: "fb631da4-83ae-923b-0ddc-5fe7615c4062",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "271442007",
            display: "Fetal anatomy study",
          },
        ],
        text: "Fetal anatomy study",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:a86c252a-038b-f619-63df-9abddb9e21e3" },
      performedPeriod: {
        start: "2013-01-14T19:41:48-05:00",
        end: "2013-01-14T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:3fac23ce-ab65-9484-11cc-f69a453245da",
    resource: {
      resourceType: "Procedure",
      id: "3fac23ce-ab65-9484-11cc-f69a453245da",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "275833003",
            display: "Alpha-fetoprotein test",
          },
        ],
        text: "Alpha-fetoprotein test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:a86c252a-038b-f619-63df-9abddb9e21e3" },
      performedPeriod: {
        start: "2013-01-14T19:41:48-05:00",
        end: "2013-01-14T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:1ab49455-956d-4a98-d908-9ada4db3eb91",
    resource: {
      resourceType: "Procedure",
      id: "1ab49455-956d-4a98-d908-9ada4db3eb91",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:a86c252a-038b-f619-63df-9abddb9e21e3" },
      performedPeriod: {
        start: "2013-01-14T19:41:48-05:00",
        end: "2013-01-14T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:1c75a802-4934-e87c-4734-ff91194d3531",
    resource: {
      resourceType: "Procedure",
      id: "1c75a802-4934-e87c-4734-ff91194d3531",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:a86c252a-038b-f619-63df-9abddb9e21e3" },
      performedPeriod: {
        start: "2013-01-14T19:41:48-05:00",
        end: "2013-01-14T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:c31ab905-2ae4-6f28-7102-d915420977da",
    resource: {
      resourceType: "Procedure",
      id: "c31ab905-2ae4-6f28-7102-d915420977da",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:fab0b7ce-a247-9b05-f575-46a12fe592a8" },
      performedPeriod: {
        start: "2013-02-11T19:41:48-05:00",
        end: "2013-02-11T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:14560546-e672-f79f-bee0-823f581c9c2c",
    resource: {
      resourceType: "Procedure",
      id: "14560546-e672-f79f-bee0-823f581c9c2c",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:fab0b7ce-a247-9b05-f575-46a12fe592a8" },
      performedPeriod: {
        start: "2013-02-11T19:41:48-05:00",
        end: "2013-02-11T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:514e8a34-c4aa-50ae-eabc-0069f95466d4",
    resource: {
      resourceType: "Procedure",
      id: "514e8a34-c4aa-50ae-eabc-0069f95466d4",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:faf38702-1022-3f1a-21e8-8502dc6e07a4" },
      performedPeriod: {
        start: "2013-03-11T20:41:48-04:00",
        end: "2013-03-11T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:c8aed9a6-6300-6a14-0d8b-838d54f0a446",
    resource: {
      resourceType: "Procedure",
      id: "c8aed9a6-6300-6a14-0d8b-838d54f0a446",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:faf38702-1022-3f1a-21e8-8502dc6e07a4" },
      performedPeriod: {
        start: "2013-03-11T20:41:48-04:00",
        end: "2013-03-11T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:de4a9bf0-6a6b-5566-8722-a0c022f26d0d",
    resource: {
      resourceType: "Procedure",
      id: "de4a9bf0-6a6b-5566-8722-a0c022f26d0d",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "104091002",
            display: "Hemoglobin / Hematocrit / Platelet count",
          },
        ],
        text: "Hemoglobin / Hematocrit / Platelet count",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:5419234d-e93e-85a2-4cc0-ebdfc500d005" },
      performedPeriod: {
        start: "2013-04-08T20:41:48-04:00",
        end: "2013-04-08T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:0723b063-4edf-58f5-1d92-365ac4622286",
    resource: {
      resourceType: "Procedure",
      id: "0723b063-4edf-58f5-1d92-365ac4622286",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "399014008",
            display: "Vaccination for diphtheria, pertussis, and tetanus",
          },
        ],
        text: "Vaccination for diphtheria, pertussis, and tetanus",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:5419234d-e93e-85a2-4cc0-ebdfc500d005" },
      performedPeriod: {
        start: "2013-04-08T20:41:48-04:00",
        end: "2013-04-08T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:5135d472-8d90-7d06-57f3-bc3f9cb4bdec",
    resource: {
      resourceType: "Procedure",
      id: "5135d472-8d90-7d06-57f3-bc3f9cb4bdec",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "268556000",
            display: "Urine screening for glucose",
          },
        ],
        text: "Urine screening for glucose",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:5419234d-e93e-85a2-4cc0-ebdfc500d005" },
      performedPeriod: {
        start: "2013-04-08T20:41:48-04:00",
        end: "2013-04-08T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:06187ff3-2831-68c7-71a2-fd68c2f81b53",
    resource: {
      resourceType: "Procedure",
      id: "06187ff3-2831-68c7-71a2-fd68c2f81b53",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:5419234d-e93e-85a2-4cc0-ebdfc500d005" },
      performedPeriod: {
        start: "2013-04-08T20:41:48-04:00",
        end: "2013-04-08T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:5e694498-2d15-a7ef-87d7-62c3f99d2f9a",
    resource: {
      resourceType: "Procedure",
      id: "5e694498-2d15-a7ef-87d7-62c3f99d2f9a",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:5419234d-e93e-85a2-4cc0-ebdfc500d005" },
      performedPeriod: {
        start: "2013-04-08T20:41:48-04:00",
        end: "2013-04-08T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:b77f764e-f5ff-ad0c-623b-6e3045e17711",
    resource: {
      resourceType: "Procedure",
      id: "b77f764e-f5ff-ad0c-623b-6e3045e17711",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:46ade9c3-8481-f9aa-9589-b2101cac9b94" },
      performedPeriod: {
        start: "2013-05-06T20:41:48-04:00",
        end: "2013-05-06T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:0822c4bb-d860-92af-f00d-5dbae8dc764e",
    resource: {
      resourceType: "Procedure",
      id: "0822c4bb-d860-92af-f00d-5dbae8dc764e",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:46ade9c3-8481-f9aa-9589-b2101cac9b94" },
      performedPeriod: {
        start: "2013-05-06T20:41:48-04:00",
        end: "2013-05-06T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:ab6f1bc1-574a-800c-1484-d6a54e38a0ea",
    resource: {
      resourceType: "Procedure",
      id: "ab6f1bc1-574a-800c-1484-d6a54e38a0ea",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "118001005",
            display: "Streptococcus pneumoniae group B antigen test",
          },
        ],
        text: "Streptococcus pneumoniae group B antigen test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:f6a3e204-d6f7-415a-25e6-bfe07eace1d7" },
      performedPeriod: {
        start: "2013-06-03T20:41:48-04:00",
        end: "2013-06-03T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:771f6eae-2120-e522-f2a3-2e18ef24b283",
    resource: {
      resourceType: "Procedure",
      id: "771f6eae-2120-e522-f2a3-2e18ef24b283",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:f6a3e204-d6f7-415a-25e6-bfe07eace1d7" },
      performedPeriod: {
        start: "2013-06-03T20:41:48-04:00",
        end: "2013-06-03T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:292f56eb-c81e-a2b5-eabe-3cea57557190",
    resource: {
      resourceType: "Procedure",
      id: "292f56eb-c81e-a2b5-eabe-3cea57557190",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:f6a3e204-d6f7-415a-25e6-bfe07eace1d7" },
      performedPeriod: {
        start: "2013-06-03T20:41:48-04:00",
        end: "2013-06-03T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:a680d273-f6c7-403c-bafe-42a8a378db23",
    resource: {
      resourceType: "Procedure",
      id: "a680d273-f6c7-403c-bafe-42a8a378db23",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "85548006",
            display: "Episiotomy",
          },
        ],
        text: "Episiotomy",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:85deb049-d897-710f-8f41-d4cba3120b1a" },
      performedPeriod: {
        start: "2013-06-17T20:41:48-04:00",
        end: "2013-06-17T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:90727ec9-fd72-89f3-e776-e5d3dc38536b",
    resource: {
      resourceType: "Procedure",
      id: "90727ec9-fd72-89f3-e776-e5d3dc38536b",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "66348005",
            display: "Childbirth",
          },
        ],
        text: "Childbirth",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:85deb049-d897-710f-8f41-d4cba3120b1a" },
      performedPeriod: {
        start: "2013-06-17T20:41:48-04:00",
        end: "2013-06-17T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:daea053f-1b90-1b46-53ae-831fcc3c11c0",
    resource: {
      resourceType: "Procedure",
      id: "daea053f-1b90-1b46-53ae-831fcc3c11c0",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "5880005",
            display: "Physical examination following birth",
          },
        ],
        text: "Physical examination following birth",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:92e5904f-c0a0-8a4a-5509-36b5314fd6b3" },
      performedPeriod: {
        start: "2013-07-29T20:41:48-04:00",
        end: "2013-07-29T20:56:48-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:f3d88ab9-5b17-0fa8-7c0c-5c88e701935a",
    resource: {
      resourceType: "Procedure",
      id: "f3d88ab9-5b17-0fa8-7c0c-5c88e701935a",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "171207006",
            display: "Depression screening",
          },
        ],
        text: "Depression screening",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:92e5904f-c0a0-8a4a-5509-36b5314fd6b3" },
      performedPeriod: {
        start: "2013-07-29T20:41:48-04:00",
        end: "2013-07-29T20:56:48-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:95123b77-35ed-12f1-fa9d-41b5935cb6ba",
    resource: {
      resourceType: "Procedure",
      id: "95123b77-35ed-12f1-fa9d-41b5935cb6ba",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "65200003",
            display: "Insertion of intrauterine contraceptive device",
          },
        ],
        text: "Insertion of intrauterine contraceptive device",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:b4315902-4fdd-cbb2-ddfb-0958732254a2" },
      performedPeriod: {
        start: "2013-08-18T09:41:48-04:00",
        end: "2013-08-18T10:47:34-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:c4e9ec80-7f42-8e2d-cfa9-5e131b860c18",
    resource: {
      resourceType: "Procedure",
      id: "c4e9ec80-7f42-8e2d-cfa9-5e131b860c18",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "117015009",
            display: "Throat culture (procedure)",
          },
        ],
        text: "Throat culture (procedure)",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:007aa27a-87b3-fa05-9f5f-ec61f3dc278a" },
      performedPeriod: {
        start: "2013-10-11T18:41:48-04:00",
        end: "2013-10-11T18:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7ebe6f7c-940a-7f5d-f559-50cdc67e3e49",
          display: "Acute viral pharyngitis (disorder)",
        },
        {
          reference: "urn:uuid:195f31fc-d720-e5e5-b4f0-fc90a0b82c89",
          display: "Acute viral pharyngitis (disorder)",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:654588ea-9b3d-b48c-3b3b-ee3050a42611",
    resource: {
      resourceType: "Procedure",
      id: "654588ea-9b3d-b48c-3b3b-ee3050a42611",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:66e65214-6ad7-94a3-81df-d1163db83ceb" },
      performedPeriod: {
        start: "2014-02-08T19:41:48-05:00",
        end: "2014-02-08T20:31:32-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:42a0665d-ab6a-a056-2514-c463e18cb68e",
    resource: {
      resourceType: "Procedure",
      id: "42a0665d-ab6a-a056-2514-c463e18cb68e",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:1a290b40-1026-5724-c778-0ec42488d7b2" },
      performedPeriod: {
        start: "2014-02-11T20:31:32-05:00",
        end: "2014-02-11T21:24:34-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:f610b54d-42e2-6b1f-1fd2-8d851913755b",
    resource: {
      resourceType: "Procedure",
      id: "f610b54d-42e2-6b1f-1fd2-8d851913755b",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:08392c5e-e55d-ff5b-ebaf-0e11c14c8105" },
      performedPeriod: {
        start: "2014-02-14T21:24:34-05:00",
        end: "2014-02-14T22:18:02-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:7a276277-6bef-57df-4a6d-6a5761bcfff3",
    resource: {
      resourceType: "Procedure",
      id: "7a276277-6bef-57df-4a6d-6a5761bcfff3",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:76760185-446c-9ef2-d86b-3732481aa0fb" },
      performedPeriod: {
        start: "2014-02-17T22:18:02-05:00",
        end: "2014-02-17T23:04:17-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:9b9076ae-f5f2-02d3-5bec-b59b06ad45b6",
    resource: {
      resourceType: "Procedure",
      id: "9b9076ae-f5f2-02d3-5bec-b59b06ad45b6",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3579b3cc-9ada-9a73-f832-020aa28b40ed" },
      performedPeriod: {
        start: "2014-02-20T23:04:17-05:00",
        end: "2014-02-20T23:57:56-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:a49647cf-1328-715f-079f-a021f66bf46d",
    resource: {
      resourceType: "Procedure",
      id: "a49647cf-1328-715f-079f-a021f66bf46d",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:75db9fd1-e525-b0a5-0cbd-f3caabd6fb74" },
      performedPeriod: {
        start: "2014-02-23T23:57:56-05:00",
        end: "2014-02-24T00:49:46-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:234db9e9-b00a-8d36-034f-f721b2226214",
    resource: {
      resourceType: "Procedure",
      id: "234db9e9-b00a-8d36-034f-f721b2226214",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:4972f460-f8a4-4536-e104-bebcad7b01b3" },
      performedPeriod: {
        start: "2014-02-27T00:49:46-05:00",
        end: "2014-02-27T01:34:55-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:be21e4c1-8855-cebe-447f-88c7998c57d9",
    resource: {
      resourceType: "Procedure",
      id: "be21e4c1-8855-cebe-447f-88c7998c57d9",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:2a296d6c-3026-329f-7c73-785c7ae219d8" },
      performedPeriod: {
        start: "2014-03-02T01:34:55-05:00",
        end: "2014-03-02T02:33:27-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:1013b179-8fc3-1aae-8628-db0f65b86260",
    resource: {
      resourceType: "Procedure",
      id: "1013b179-8fc3-1aae-8628-db0f65b86260",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:b0843f41-1381-a745-1dc7-19a8e84ebadd" },
      performedPeriod: {
        start: "2014-03-05T02:33:27-05:00",
        end: "2014-03-05T03:23:48-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:7454448b-a2e7-16f9-1eb8-28cf9ddb8b49",
    resource: {
      resourceType: "Procedure",
      id: "7454448b-a2e7-16f9-1eb8-28cf9ddb8b49",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:4b5385fb-8257-d1dc-c7db-bdb8f9c1a994" },
      performedPeriod: {
        start: "2014-03-08T03:23:48-05:00",
        end: "2014-03-08T04:13:52-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:b5859669-85ad-19ce-206e-ea50af0dc793",
    resource: {
      resourceType: "Procedure",
      id: "b5859669-85ad-19ce-206e-ea50af0dc793",
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
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:4b43d0ab-15eb-ffcc-970c-94f231faec5f" },
      performedPeriod: {
        start: "2015-04-20T20:41:48-04:00",
        end: "2015-04-20T20:56:48-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:eb160467-8232-152d-73d5-e1617b3cc961",
    resource: {
      resourceType: "Procedure",
      id: "eb160467-8232-152d-73d5-e1617b3cc961",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "68254000",
            display: "Removal of intrauterine device",
          },
        ],
        text: "Removal of intrauterine device",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:fb35b66c-7c4a-cebd-d06a-1e4e37011cfe" },
      performedPeriod: {
        start: "2016-05-09T20:41:48-04:00",
        end: "2016-05-09T21:41:08-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:6c5341a9-78c6-bc71-4cca-7b96b5a16fc8",
    resource: {
      resourceType: "Procedure",
      id: "6c5341a9-78c6-bc71-4cca-7b96b5a16fc8",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "252160004",
            display: "Standard pregnancy test",
          },
        ],
        text: "Standard pregnancy test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:a20738ec-e0ea-1984-71cd-e35e0b098ce9" },
      performedPeriod: {
        start: "2016-07-04T20:41:48-04:00",
        end: "2016-07-04T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:a22069bd-bed8-0546-6a7d-bcd13d6fd8ec",
    resource: {
      resourceType: "Procedure",
      id: "a22069bd-bed8-0546-6a7d-bcd13d6fd8ec",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "169230002",
            display: "Ultrasound scan for fetal viability",
          },
        ],
        text: "Ultrasound scan for fetal viability",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:a20738ec-e0ea-1984-71cd-e35e0b098ce9" },
      performedPeriod: {
        start: "2016-07-04T20:41:48-04:00",
        end: "2016-07-04T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:e0b58e29-8e01-7635-c2dd-b9396032a53a",
    resource: {
      resourceType: "Procedure",
      id: "e0b58e29-8e01-7635-c2dd-b9396032a53a",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "10383002",
            display: "Counseling for termination of pregnancy",
          },
        ],
        text: "Counseling for termination of pregnancy",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:a1dfb8e9-df1e-4a5f-52a6-63a57b2a2c10" },
      performedPeriod: {
        start: "2016-07-17T20:41:48-04:00",
        end: "2016-07-17T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:53412934-ff82-1448-9a79-2c4adfcb8fa3",
    resource: {
      resourceType: "Procedure",
      id: "53412934-ff82-1448-9a79-2c4adfcb8fa3",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "714812005",
            display: "Induced termination of pregnancy",
          },
        ],
        text: "Induced termination of pregnancy",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:a1dfb8e9-df1e-4a5f-52a6-63a57b2a2c10" },
      performedPeriod: {
        start: "2016-07-17T20:41:48-04:00",
        end: "2016-07-17T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:9b8f9b2d-f647-7990-3c02-5ca9d35061cc",
    resource: {
      resourceType: "Procedure",
      id: "9b8f9b2d-f647-7990-3c02-5ca9d35061cc",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "386394001",
            display: "Pregnancy termination care",
          },
        ],
        text: "Pregnancy termination care",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:fd6d9a6c-8178-ee80-8e3e-b82ed60385f7" },
      performedPeriod: {
        start: "2016-07-29T20:41:48-04:00",
        end: "2016-07-29T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:8f30cb3d-fe7b-1150-3625-20ce501e08cf",
    resource: {
      resourceType: "Procedure",
      id: "8f30cb3d-fe7b-1150-3625-20ce501e08cf",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "5880005",
            display: "Physical exam following abortion",
          },
        ],
        text: "Physical exam following abortion",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:fd6d9a6c-8178-ee80-8e3e-b82ed60385f7" },
      performedPeriod: {
        start: "2016-07-29T20:41:48-04:00",
        end: "2016-07-29T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:c193e93a-0a94-468f-179a-c58bf5137804",
    resource: {
      resourceType: "Procedure",
      id: "c193e93a-0a94-468f-179a-c58bf5137804",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "171207006",
            display: "Depression screening",
          },
        ],
        text: "Depression screening",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:fd6d9a6c-8178-ee80-8e3e-b82ed60385f7" },
      performedPeriod: {
        start: "2016-07-29T20:41:48-04:00",
        end: "2016-07-29T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:d0e74a5f-5428-213b-e53e-7a45b5e060f8",
    resource: {
      resourceType: "Procedure",
      id: "d0e74a5f-5428-213b-e53e-7a45b5e060f8",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "252160004",
            display: "Standard pregnancy test",
          },
        ],
        text: "Standard pregnancy test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      performedPeriod: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2016-10-31T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:07642726-f21d-6d82-39a5-715e68be6176",
    resource: {
      resourceType: "Procedure",
      id: "07642726-f21d-6d82-39a5-715e68be6176",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "169230002",
            display: "Ultrasound scan for fetal viability",
          },
        ],
        text: "Ultrasound scan for fetal viability",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      performedPeriod: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2016-10-31T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:c6412232-a1cd-72bd-0faf-09179f378389",
    resource: {
      resourceType: "Procedure",
      id: "c6412232-a1cd-72bd-0faf-09179f378389",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      performedPeriod: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2016-10-31T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:1325a22f-e62c-7d66-44e8-a5c6007f60ee",
    resource: {
      resourceType: "Procedure",
      id: "1325a22f-e62c-7d66-44e8-a5c6007f60ee",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      performedPeriod: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2016-10-31T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:e7788c9e-51d5-8bd6-f7f6-fb48ced34074",
    resource: {
      resourceType: "Procedure",
      id: "e7788c9e-51d5-8bd6-f7f6-fb48ced34074",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "44608003",
            display: "Blood typing, RH typing",
          },
        ],
        text: "Blood typing, RH typing",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      performedPeriod: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2016-10-31T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:b2a3f6da-7696-44f7-ccc3-cfb5b3054dd2",
    resource: {
      resourceType: "Procedure",
      id: "b2a3f6da-7696-44f7-ccc3-cfb5b3054dd2",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "104091002",
            display: "Hemoglobin / Hematocrit / Platelet count",
          },
        ],
        text: "Hemoglobin / Hematocrit / Platelet count",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      performedPeriod: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2016-10-31T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:67f46357-d137-263d-1ef2-c4360ee2fab4",
    resource: {
      resourceType: "Procedure",
      id: "67f46357-d137-263d-1ef2-c4360ee2fab4",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "47758006",
            display: "Hepatitis B Surface Antigen Measurement",
          },
        ],
        text: "Hepatitis B Surface Antigen Measurement",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      performedPeriod: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2016-10-31T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:65d80f2f-0cc4-1cd6-355f-482d6f77dd17",
    resource: {
      resourceType: "Procedure",
      id: "65d80f2f-0cc4-1cd6-355f-482d6f77dd17",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "31676001",
            display: "Human immunodeficiency virus antigen test",
          },
        ],
        text: "Human immunodeficiency virus antigen test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      performedPeriod: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2016-10-31T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:fd8713d9-ec28-fe1f-f0e4-1a9d366f9ed6",
    resource: {
      resourceType: "Procedure",
      id: "fd8713d9-ec28-fe1f-f0e4-1a9d366f9ed6",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "310861008",
            display: "Chlamydia antigen test",
          },
        ],
        text: "Chlamydia antigen test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      performedPeriod: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2016-10-31T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:c365613c-7e38-935a-29ce-fdcc2aeed283",
    resource: {
      resourceType: "Procedure",
      id: "c365613c-7e38-935a-29ce-fdcc2aeed283",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "165829005",
            display: "Gonorrhea infection test",
          },
        ],
        text: "Gonorrhea infection test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      performedPeriod: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2016-10-31T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:15fbd3e3-de6c-2c9e-f069-8124af63c17a",
    resource: {
      resourceType: "Procedure",
      id: "15fbd3e3-de6c-2c9e-f069-8124af63c17a",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "269828009",
            display: "Syphilis infection test",
          },
        ],
        text: "Syphilis infection test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      performedPeriod: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2016-10-31T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:f375eb91-c714-ef0e-482a-055a884d8733",
    resource: {
      resourceType: "Procedure",
      id: "f375eb91-c714-ef0e-482a-055a884d8733",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "117010004",
            display: "Urine culture",
          },
        ],
        text: "Urine culture",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      performedPeriod: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2016-10-31T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:8865e5fa-2f97-524d-38ae-5ed3b1090dd8",
    resource: {
      resourceType: "Procedure",
      id: "8865e5fa-2f97-524d-38ae-5ed3b1090dd8",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "90226004",
            display:
              "Cytopathology procedure, preparation of smear, genital source",
          },
        ],
        text: "Cytopathology procedure, preparation of smear, genital source",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      performedPeriod: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2016-10-31T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:266941c7-5ddc-8131-55d3-ba43c498c017",
    resource: {
      resourceType: "Procedure",
      id: "266941c7-5ddc-8131-55d3-ba43c498c017",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "395123002",
            display: "Urine screening test for diabetes",
          },
        ],
        text: "Urine screening test for diabetes",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      performedPeriod: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2016-10-31T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:1263ede2-6cac-91b6-2f55-a7972a550438",
    resource: {
      resourceType: "Procedure",
      id: "1263ede2-6cac-91b6-2f55-a7972a550438",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "104375008",
            display: "Hepatitis C antibody test",
          },
        ],
        text: "Hepatitis C antibody test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      performedPeriod: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2016-10-31T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:e8a8a8f2-bc5f-c834-9a98-6f12fec0d471",
    resource: {
      resourceType: "Procedure",
      id: "e8a8a8f2-bc5f-c834-9a98-6f12fec0d471",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "169690007",
            display: "Rubella screening",
          },
        ],
        text: "Rubella screening",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      performedPeriod: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2016-10-31T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:05c95526-ef84-59d4-0ce1-14bca89f0879",
    resource: {
      resourceType: "Procedure",
      id: "05c95526-ef84-59d4-0ce1-14bca89f0879",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "104326007",
            display: "Measurement of Varicella-zoster virus antibody",
          },
        ],
        text: "Measurement of Varicella-zoster virus antibody",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      performedPeriod: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2016-10-31T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:4d324433-8cf9-6240-737f-adfc171a245a",
    resource: {
      resourceType: "Procedure",
      id: "4d324433-8cf9-6240-737f-adfc171a245a",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "28163009",
            display: "Skin test for tuberculosis",
          },
        ],
        text: "Skin test for tuberculosis",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      performedPeriod: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2016-10-31T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:e75fbf98-abd7-0099-3896-ed7bc099c08b",
    resource: {
      resourceType: "Procedure",
      id: "e75fbf98-abd7-0099-3896-ed7bc099c08b",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "167271000",
            display: "Urine protein test",
          },
        ],
        text: "Urine protein test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      performedPeriod: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2016-10-31T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:c8ad5129-e686-cfae-a876-0954effddf3d",
    resource: {
      resourceType: "Procedure",
      id: "c8ad5129-e686-cfae-a876-0954effddf3d",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "5880005",
            display: "Physical examination of mother",
          },
        ],
        text: "Physical examination of mother",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:18b29aae-7cdb-558b-7d2d-265af1cb30db" },
      performedPeriod: {
        start: "2016-10-31T20:41:48-04:00",
        end: "2016-10-31T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:58a6ced5-aa53-055b-9ee6-d1f562ac9a64",
    resource: {
      resourceType: "Procedure",
      id: "58a6ced5-aa53-055b-9ee6-d1f562ac9a64",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:7a5f308f-28d2-7d02-f833-482e76bafac9" },
      performedPeriod: {
        start: "2016-11-28T19:41:48-05:00",
        end: "2016-11-28T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:91f50899-9517-a457-fb6e-96a679ed92a3",
    resource: {
      resourceType: "Procedure",
      id: "91f50899-9517-a457-fb6e-96a679ed92a3",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:7a5f308f-28d2-7d02-f833-482e76bafac9" },
      performedPeriod: {
        start: "2016-11-28T19:41:48-05:00",
        end: "2016-11-28T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:704de2bf-6b70-876d-dfc2-fab8ae6ab173",
    resource: {
      resourceType: "Procedure",
      id: "704de2bf-6b70-876d-dfc2-fab8ae6ab173",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "443529005",
            display:
              "Screening for chromosomal aneuploidy in prenatal amniotic fluid",
          },
        ],
        text: "Screening for chromosomal aneuploidy in prenatal amniotic fluid",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:7a5f308f-28d2-7d02-f833-482e76bafac9" },
      performedPeriod: {
        start: "2016-11-28T19:41:48-05:00",
        end: "2016-11-28T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:b7e4e90e-6b37-f6bd-5912-a51f05c337f8",
    resource: {
      resourceType: "Procedure",
      id: "b7e4e90e-6b37-f6bd-5912-a51f05c337f8",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "271442007",
            display: "Fetal anatomy study",
          },
        ],
        text: "Fetal anatomy study",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:388391b5-ef21-1b9c-52fb-7d0bb81b09e2" },
      performedPeriod: {
        start: "2016-12-26T19:41:48-05:00",
        end: "2016-12-26T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:a7e08c58-6805-2450-0726-f8773b4866af",
    resource: {
      resourceType: "Procedure",
      id: "a7e08c58-6805-2450-0726-f8773b4866af",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "275833003",
            display: "Alpha-fetoprotein test",
          },
        ],
        text: "Alpha-fetoprotein test",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:388391b5-ef21-1b9c-52fb-7d0bb81b09e2" },
      performedPeriod: {
        start: "2016-12-26T19:41:48-05:00",
        end: "2016-12-26T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:66ae03eb-df35-5bd5-6584-5dbfe5c04c07",
    resource: {
      resourceType: "Procedure",
      id: "66ae03eb-df35-5bd5-6584-5dbfe5c04c07",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:388391b5-ef21-1b9c-52fb-7d0bb81b09e2" },
      performedPeriod: {
        start: "2016-12-26T19:41:48-05:00",
        end: "2016-12-26T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:4dbf1630-28cb-c180-af5e-a92b41aa5daa",
    resource: {
      resourceType: "Procedure",
      id: "4dbf1630-28cb-c180-af5e-a92b41aa5daa",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:388391b5-ef21-1b9c-52fb-7d0bb81b09e2" },
      performedPeriod: {
        start: "2016-12-26T19:41:48-05:00",
        end: "2016-12-26T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:06f6f98f-d89e-0d59-af6b-4830984bd1d8",
    resource: {
      resourceType: "Procedure",
      id: "06f6f98f-d89e-0d59-af6b-4830984bd1d8",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:b3f79858-8beb-af49-749f-b1ae5473107b" },
      performedPeriod: {
        start: "2017-01-23T19:41:48-05:00",
        end: "2017-01-23T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:6e3036f5-c7fa-3237-f19b-0e5470885cf3",
    resource: {
      resourceType: "Procedure",
      id: "6e3036f5-c7fa-3237-f19b-0e5470885cf3",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:b3f79858-8beb-af49-749f-b1ae5473107b" },
      performedPeriod: {
        start: "2017-01-23T19:41:48-05:00",
        end: "2017-01-23T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:2cfe5cff-6aeb-20eb-80e0-7de5cf028a05",
    resource: {
      resourceType: "Procedure",
      id: "2cfe5cff-6aeb-20eb-80e0-7de5cf028a05",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:062e93a1-362e-f5bc-274e-3591aa6c5b89" },
      performedPeriod: {
        start: "2017-02-20T19:41:48-05:00",
        end: "2017-02-20T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:0153eed3-ed73-192b-af65-32cb8c6939b3",
    resource: {
      resourceType: "Procedure",
      id: "0153eed3-ed73-192b-af65-32cb8c6939b3",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:062e93a1-362e-f5bc-274e-3591aa6c5b89" },
      performedPeriod: {
        start: "2017-02-20T19:41:48-05:00",
        end: "2017-02-20T19:56:48-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:e4b33231-525a-35f0-96b7-d1b33f0252da",
    resource: {
      resourceType: "Procedure",
      id: "e4b33231-525a-35f0-96b7-d1b33f0252da",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "104091002",
            display: "Hemoglobin / Hematocrit / Platelet count",
          },
        ],
        text: "Hemoglobin / Hematocrit / Platelet count",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:eb4d99ce-351a-acb5-a4c5-79089019809f" },
      performedPeriod: {
        start: "2017-03-20T20:41:48-04:00",
        end: "2017-03-20T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:4f578c90-e3bf-2381-90c1-b0e98214e3be",
    resource: {
      resourceType: "Procedure",
      id: "4f578c90-e3bf-2381-90c1-b0e98214e3be",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "399014008",
            display: "Vaccination for diphtheria, pertussis, and tetanus",
          },
        ],
        text: "Vaccination for diphtheria, pertussis, and tetanus",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:eb4d99ce-351a-acb5-a4c5-79089019809f" },
      performedPeriod: {
        start: "2017-03-20T20:41:48-04:00",
        end: "2017-03-20T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:8e137036-5724-d2b2-54df-3063753ada27",
    resource: {
      resourceType: "Procedure",
      id: "8e137036-5724-d2b2-54df-3063753ada27",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "268556000",
            display: "Urine screening for glucose",
          },
        ],
        text: "Urine screening for glucose",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:eb4d99ce-351a-acb5-a4c5-79089019809f" },
      performedPeriod: {
        start: "2017-03-20T20:41:48-04:00",
        end: "2017-03-20T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:5e73f93a-c4dc-d6f9-1f6b-55bd762fc530",
    resource: {
      resourceType: "Procedure",
      id: "5e73f93a-c4dc-d6f9-1f6b-55bd762fc530",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:eb4d99ce-351a-acb5-a4c5-79089019809f" },
      performedPeriod: {
        start: "2017-03-20T20:41:48-04:00",
        end: "2017-03-20T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:91042d4c-9f5b-696a-b69d-bee64a155ac5",
    resource: {
      resourceType: "Procedure",
      id: "91042d4c-9f5b-696a-b69d-bee64a155ac5",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:eb4d99ce-351a-acb5-a4c5-79089019809f" },
      performedPeriod: {
        start: "2017-03-20T20:41:48-04:00",
        end: "2017-03-20T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:e1f81cd1-1539-5d91-aa87-75b5d7fd98f0",
    resource: {
      resourceType: "Procedure",
      id: "e1f81cd1-1539-5d91-aa87-75b5d7fd98f0",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274804006",
            display: "Evaluation of uterine fundal height",
          },
        ],
        text: "Evaluation of uterine fundal height",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:fbb62f60-774c-c45e-d668-ec4482b5d164" },
      performedPeriod: {
        start: "2017-04-17T20:41:48-04:00",
        end: "2017-04-17T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:e87cf9b0-0aef-d704-0e26-9459fd391ca0",
    resource: {
      resourceType: "Procedure",
      id: "e87cf9b0-0aef-d704-0e26-9459fd391ca0",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225158009",
            display: "Auscultation of the fetal heart",
          },
        ],
        text: "Auscultation of the fetal heart",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:fbb62f60-774c-c45e-d668-ec4482b5d164" },
      performedPeriod: {
        start: "2017-04-17T20:41:48-04:00",
        end: "2017-04-17T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:38759c87-73ee-c930-3abd-cc4fd0a6ab81",
    resource: {
      resourceType: "Procedure",
      id: "38759c87-73ee-c930-3abd-cc4fd0a6ab81",
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
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:de9cb9a4-8db9-2397-0bae-e7b3a51b2e18" },
      performedPeriod: {
        start: "2017-05-01T20:41:48-04:00",
        end: "2017-05-01T20:56:48-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:84bc1a88-97a1-eb91-f135-214dba487b98",
    resource: {
      resourceType: "Procedure",
      id: "84bc1a88-97a1-eb91-f135-214dba487b98",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "85548006",
            display: "Episiotomy",
          },
        ],
        text: "Episiotomy",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:4666122d-a94c-ea21-0676-98f39558939c" },
      performedPeriod: {
        start: "2017-05-15T20:41:48-04:00",
        end: "2017-05-15T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:f0a9396b-f839-cc8d-3ee4-d5cb4afd444c",
    resource: {
      resourceType: "Procedure",
      id: "f0a9396b-f839-cc8d-3ee4-d5cb4afd444c",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "65588006",
            display: "Premature birth of newborn",
          },
        ],
        text: "Premature birth of newborn",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:4666122d-a94c-ea21-0676-98f39558939c" },
      performedPeriod: {
        start: "2017-05-15T20:41:48-04:00",
        end: "2017-05-15T20:56:48-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:7e590a6e-2e78-e6fb-fd5d-36c4fa68308f",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:227e2274-0518-c2b9-2222-41b66307a4ad",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:78a29dda-0291-59db-eca8-d51a0d77a08c",
          display: "Normal pregnancy",
        },
        {
          reference: "urn:uuid:15f63b3b-8b27-3fdb-3575-6ea6456f72cc",
          display: "Normal pregnancy",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:ab4bb805-293f-b8d9-bfd3-5163d848083f",
    resource: {
      resourceType: "Procedure",
      id: "ab4bb805-293f-b8d9-bfd3-5163d848083f",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "5880005",
            display: "Physical examination following birth",
          },
        ],
        text: "Physical examination following birth",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3606a329-63d2-2ac5-5ed6-a92ab5ea69fe" },
      performedPeriod: {
        start: "2017-06-26T20:41:48-04:00",
        end: "2017-06-26T20:56:48-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:4edc55b7-45c9-67b0-1d92-948d0953e7bc",
    resource: {
      resourceType: "Procedure",
      id: "4edc55b7-45c9-67b0-1d92-948d0953e7bc",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "171207006",
            display: "Depression screening",
          },
        ],
        text: "Depression screening",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3606a329-63d2-2ac5-5ed6-a92ab5ea69fe" },
      performedPeriod: {
        start: "2017-06-26T20:41:48-04:00",
        end: "2017-06-26T20:56:48-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:c0549267-1b25-998e-ad21-43e0f6c975c5",
    resource: {
      resourceType: "Procedure",
      id: "c0549267-1b25-998e-ad21-43e0f6c975c5",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "169553002",
            display: "Insertion of subcutaneous contraceptive",
          },
        ],
        text: "Insertion of subcutaneous contraceptive",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:e06630b1-7f2c-9bc8-1f50-d89fbeb926a8" },
      performedPeriod: {
        start: "2018-07-24T20:41:48-04:00",
        end: "2018-07-24T21:01:52-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:b516a42b-2340-9f5e-bd9b-38be417593c8",
    resource: {
      resourceType: "Procedure",
      id: "b516a42b-2340-9f5e-bd9b-38be417593c8",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "287664005",
            display: "Bilateral tubal ligation",
          },
        ],
        text: "Bilateral tubal ligation",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:3e8379dd-2192-b40b-e819-7c87f9ed1d55" },
      performedPeriod: {
        start: "2019-08-02T20:41:48-04:00",
        end: "2019-08-02T23:17:48-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:5d3e416c-75a7-5b8e-70d7-d8dcb7e19ca6",
    resource: {
      resourceType: "Procedure",
      id: "5d3e416c-75a7-5b8e-70d7-d8dcb7e19ca6",
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
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:97384d24-2651-7ed3-7ee2-3b7271b52c84" },
      performedPeriod: {
        start: "2013-05-28T13:20:13-04:00",
        end: "2013-05-28T13:35:13-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:404f1444-5395-afed-940a-c301244af7f9",
    resource: {
      resourceType: "Procedure",
      id: "404f1444-5395-afed-940a-c301244af7f9",
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
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:1ff62490-60ba-a6bc-5ef1-f45cd481c204" },
      performedPeriod: {
        start: "2014-06-03T13:20:13-04:00",
        end: "2014-06-03T13:35:13-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:fc833f63-1449-1781-2772-95b7cfc90785",
    resource: {
      resourceType: "Procedure",
      id: "fc833f63-1449-1781-2772-95b7cfc90785",
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
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:b2d6bd8b-aa30-e716-4644-05746420f2fa" },
      performedPeriod: {
        start: "2015-06-09T13:20:13-04:00",
        end: "2015-06-09T13:35:13-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:521b89ec-86d0-772f-0d6d-652ce4bd5365",
    resource: {
      resourceType: "Procedure",
      id: "521b89ec-86d0-772f-0d6d-652ce4bd5365",
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
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:28baf1b2-6f5d-054d-e0da-62bbb994db96" },
      performedPeriod: {
        start: "2018-06-26T13:20:13-04:00",
        end: "2018-06-26T13:35:13-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:4f4d6db3-0b16-4da7-289a-fa06c29c58e7",
    resource: {
      resourceType: "Procedure",
      id: "4f4d6db3-0b16-4da7-289a-fa06c29c58e7",
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
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:b5bc2af5-85de-c60e-6c01-9eeaea50c324" },
      performedPeriod: {
        start: "2019-07-02T13:20:13-04:00",
        end: "2019-07-02T13:35:13-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:d24ed9bd-abf4-77b5-7dea-149f4cb5c33a",
    resource: {
      resourceType: "Procedure",
      id: "d24ed9bd-abf4-77b5-7dea-149f4cb5c33a",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "261352009",
            display: "Face mask (physical object)",
          },
        ],
        text: "Face mask (physical object)",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:daf8c623-5248-d1a4-b4ef-744ae92d1cff" },
      performedPeriod: {
        start: "2020-03-04T12:20:13-05:00",
        end: "2020-03-04T12:32:22-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:a31ad9de-d671-eacf-46eb-08ba2f843e7a",
          display: "Suspected COVID-19",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:6d097436-5d41-b2b6-0821-2b5b7715a021",
    resource: {
      resourceType: "Procedure",
      id: "6d097436-5d41-b2b6-0821-2b5b7715a021",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "311791003",
            display: "Information gathering (procedure)",
          },
        ],
        text: "Information gathering (procedure)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:0654609e-b931-54ff-6181-59c2cdc571cb" },
      performedPeriod: {
        start: "2011-06-02T05:03:37-04:00",
        end: "2011-06-02T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:42a73bf0-fb42-67ee-738f-49d50a625c71",
    resource: {
      resourceType: "Procedure",
      id: "42a73bf0-fb42-67ee-738f-49d50a625c71",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "311791003",
            display: "Information gathering (procedure)",
          },
        ],
        text: "Information gathering (procedure)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:472f2101-2c06-4fe4-8acd-126ff30350ca" },
      performedPeriod: {
        start: "2011-07-02T05:03:37-04:00",
        end: "2011-07-02T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:71c39ce8-a12f-a6e8-438f-cbae28a49ef2",
    resource: {
      resourceType: "Procedure",
      id: "71c39ce8-a12f-a6e8-438f-cbae28a49ef2",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "311791003",
            display: "Information gathering (procedure)",
          },
        ],
        text: "Information gathering (procedure)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:d7db16e6-491a-c76e-298f-1d76b3e1dd20" },
      performedPeriod: {
        start: "2011-08-01T05:03:37-04:00",
        end: "2011-08-01T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:c49e2d4e-18bb-94f3-af05-4cd350071867",
    resource: {
      resourceType: "Procedure",
      id: "c49e2d4e-18bb-94f3-af05-4cd350071867",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "311791003",
            display: "Information gathering (procedure)",
          },
        ],
        text: "Information gathering (procedure)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:aaf4f35b-ff48-aebb-c8ae-91a406a96069" },
      performedPeriod: {
        start: "2011-09-30T05:03:37-04:00",
        end: "2011-09-30T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:ab1e8a2a-7bef-e3b4-cb8d-709857cb9438",
    resource: {
      resourceType: "Procedure",
      id: "ab1e8a2a-7bef-e3b4-cb8d-709857cb9438",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "311791003",
            display: "Information gathering (procedure)",
          },
        ],
        text: "Information gathering (procedure)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:cb6df5d5-f35d-a2f9-7b73-618927014c0f" },
      performedPeriod: {
        start: "2011-10-30T05:03:37-04:00",
        end: "2011-10-30T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:884c7f63-9620-b4cc-7770-bc0beb5d21a2",
    resource: {
      resourceType: "Procedure",
      id: "884c7f63-9620-b4cc-7770-bc0beb5d21a2",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:d7ddd152-8248-ef30-be7b-3e7bdf41a436" },
      performedPeriod: {
        start: "2011-12-27T04:03:37-05:00",
        end: "2011-12-27T04:18:37-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:37565a5a-c5bf-ad0f-8101-5663f42fc94f",
    resource: {
      resourceType: "Procedure",
      id: "37565a5a-c5bf-ad0f-8101-5663f42fc94f",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "410006001",
            display: "Digital examination of rectum",
          },
        ],
        text: "Digital examination of rectum",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:939ccc5b-c14c-b790-f9eb-0a5a1de1a365" },
      performedPeriod: {
        start: "2012-01-21T04:15:11-05:00",
        end: "2012-01-21T04:17:51-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:4e08927d-df4d-1a43-5bbd-f9e675e79871",
    resource: {
      resourceType: "Procedure",
      id: "4e08927d-df4d-1a43-5bbd-f9e675e79871",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "268425006",
            display: "Pelvis X-ray",
          },
        ],
        text: "Pelvis X-ray",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:cc6106da-522a-9b50-dda1-455dbbc23f93" },
      performedPeriod: {
        start: "2012-07-04T08:10:22-04:00",
        end: "2012-07-04T08:40:22-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:1fc1444e-b73b-d265-19cf-55977a63e960",
    resource: {
      resourceType: "Procedure",
      id: "1fc1444e-b73b-d265-19cf-55977a63e960",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "305428000",
            display: "Admission to orthopedic department",
          },
        ],
        text: "Admission to orthopedic department",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:cc6106da-522a-9b50-dda1-455dbbc23f93" },
      performedPeriod: {
        start: "2012-07-04T08:10:22-04:00",
        end: "2012-07-04T09:38:22-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:b03a3e3f-24c3-1c4a-50d7-4bc06b329749",
          display: "Closed fracture of hip",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:3054572a-ae3e-a066-b319-bf36d935d33e",
    resource: {
      resourceType: "Procedure",
      id: "3054572a-ae3e-a066-b319-bf36d935d33e",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:15c5c6c8-9cd0-6693-24b4-da6e15b09679" },
      performedPeriod: {
        start: "2012-09-25T05:03:37-04:00",
        end: "2012-09-25T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:cf861bb0-69d0-3bda-fea0-76984cdd4a0f",
    resource: {
      resourceType: "Procedure",
      id: "cf861bb0-69d0-3bda-fea0-76984cdd4a0f",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "410006001",
            display: "Digital examination of rectum",
          },
        ],
        text: "Digital examination of rectum",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:c373a113-f248-839b-a873-e80334c95416" },
      performedPeriod: {
        start: "2013-02-19T04:03:37-05:00",
        end: "2013-02-19T04:05:46-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:8352a748-0c07-5aef-565f-3bc6f0db3532",
    resource: {
      resourceType: "Procedure",
      id: "8352a748-0c07-5aef-565f-3bc6f0db3532",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:ccef5b1e-52f1-8544-4af6-a7efd6e542f9" },
      performedPeriod: {
        start: "2013-04-16T05:03:37-04:00",
        end: "2013-04-16T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:4c11bfb6-3363-c658-edbb-febd0179c3b5",
    resource: {
      resourceType: "Procedure",
      id: "4c11bfb6-3363-c658-edbb-febd0179c3b5",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:454e5aca-65a5-1a61-0866-d20e488399cd" },
      performedPeriod: {
        start: "2013-07-09T05:03:37-04:00",
        end: "2013-07-09T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:9bb2d115-bea4-331e-d878-fca211d9afd8",
    resource: {
      resourceType: "Procedure",
      id: "9bb2d115-bea4-331e-d878-fca211d9afd8",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:17bae8f7-019a-7f1c-fcff-1523b53b614d" },
      performedPeriod: {
        start: "2013-09-17T05:03:37-04:00",
        end: "2013-09-17T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:01848127-f517-134f-4d95-683b46f53a3d",
    resource: {
      resourceType: "Procedure",
      id: "01848127-f517-134f-4d95-683b46f53a3d",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "1225002",
            display: "Upper arm X-ray",
          },
        ],
        text: "Upper arm X-ray",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:5cebc1c8-b971-5cd7-b338-5cb29d71c2e3" },
      performedPeriod: {
        start: "2013-11-01T09:38:22-04:00",
        end: "2013-11-01T10:08:22-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:4e5f50e5-1e25-948c-337c-d7f0c662cbea",
    resource: {
      resourceType: "Procedure",
      id: "4e5f50e5-1e25-948c-337c-d7f0c662cbea",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "274474001",
            display: "Bone immobilization",
          },
        ],
        text: "Bone immobilization",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:5cebc1c8-b971-5cd7-b338-5cb29d71c2e3" },
      performedPeriod: {
        start: "2013-11-01T09:38:22-04:00",
        end: "2013-11-01T10:20:01-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:52c09077-8a78-205b-1930-6f5e49d703ef",
          display: "Fracture of forearm",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:76863700-4d98-9e4b-ba39-b64d6d31ec8f",
    resource: {
      resourceType: "Procedure",
      id: "76863700-4d98-9e4b-ba39-b64d6d31ec8f",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:f9a7d3f3-929c-304e-7e9f-0dd86f84e9bc" },
      performedPeriod: {
        start: "2013-11-12T04:03:37-05:00",
        end: "2013-11-12T04:18:37-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:13fb5006-f66b-adb3-6764-1167394ab31f",
    resource: {
      resourceType: "Procedure",
      id: "13fb5006-f66b-adb3-6764-1167394ab31f",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:3ac1c4ac-97fe-0633-528c-b3d9df525666" },
      performedPeriod: {
        start: "2014-01-14T04:03:37-05:00",
        end: "2014-01-14T04:18:37-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:8a619dd0-c3cf-fad1-a926-bf81f9f1601d",
    resource: {
      resourceType: "Procedure",
      id: "8a619dd0-c3cf-fad1-a926-bf81f9f1601d",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:b0e3c066-ae44-ca67-3638-d8b679883b8b" },
      performedPeriod: {
        start: "2014-02-09T04:03:37-05:00",
        end: "2014-02-09T05:02:53-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:5e74c893-dea4-c99e-7bf5-88ec7486a6e9",
    resource: {
      resourceType: "Procedure",
      id: "5e74c893-dea4-c99e-7bf5-88ec7486a6e9",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:2165749a-2203-c8ae-e574-db0af09434cf" },
      performedPeriod: {
        start: "2014-02-12T05:02:53-05:00",
        end: "2014-02-12T05:49:04-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:baefff94-1f13-c78a-5856-7808687dd09a",
    resource: {
      resourceType: "Procedure",
      id: "baefff94-1f13-c78a-5856-7808687dd09a",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:b35beda0-ec91-2256-c20f-f6f52997e8f2" },
      performedPeriod: {
        start: "2014-02-15T05:49:04-05:00",
        end: "2014-02-15T06:45:38-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:8cc83453-9810-9d98-82aa-f8839468896e",
    resource: {
      resourceType: "Procedure",
      id: "8cc83453-9810-9d98-82aa-f8839468896e",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "410006001",
            display: "Digital examination of rectum",
          },
        ],
        text: "Digital examination of rectum",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:55e08291-e26b-90e8-26a4-52a5e3d3a9c9" },
      performedPeriod: {
        start: "2014-02-19T04:05:46-05:00",
        end: "2014-02-19T04:08:22-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:00b2316c-b7f7-35d6-8c83-08c75b16b5e2",
    resource: {
      resourceType: "Procedure",
      id: "00b2316c-b7f7-35d6-8c83-08c75b16b5e2",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:0b7aef4d-5843-30e1-49f5-451d7e2339c1" },
      performedPeriod: {
        start: "2014-02-18T06:45:38-05:00",
        end: "2014-02-18T07:31:58-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:954b2532-bcd0-d6df-72f8-b2c36154a263",
    resource: {
      resourceType: "Procedure",
      id: "954b2532-bcd0-d6df-72f8-b2c36154a263",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:64c00d8b-6f5d-0af4-406d-d95305378547" },
      performedPeriod: {
        start: "2014-02-21T07:31:58-05:00",
        end: "2014-02-21T08:24:49-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:9d0ce5c0-c953-e41d-a2ff-605be208f8d9",
    resource: {
      resourceType: "Procedure",
      id: "9d0ce5c0-c953-e41d-a2ff-605be208f8d9",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:9c3921d0-8eeb-5c5d-8b4b-e091c1a6f631" },
      performedPeriod: {
        start: "2014-02-24T08:24:49-05:00",
        end: "2014-02-24T09:22:37-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:c4c67bd7-9eb7-cd16-3675-734b20a0259c",
    resource: {
      resourceType: "Procedure",
      id: "c4c67bd7-9eb7-cd16-3675-734b20a0259c",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:9c3921d0-8eeb-5c5d-8b4b-e091c1a6f631" },
      performedPeriod: {
        start: "2014-02-25T04:03:37-05:00",
        end: "2014-02-25T04:18:37-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:133e7dba-2fa6-dfca-b177-fe8f66f47c48",
    resource: {
      resourceType: "Procedure",
      id: "133e7dba-2fa6-dfca-b177-fe8f66f47c48",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:7202497d-0d2f-d4e7-322e-e1b6518f87c0" },
      performedPeriod: {
        start: "2014-02-27T09:22:37-05:00",
        end: "2014-02-27T10:15:23-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:29dc2c45-a233-3f93-44dd-27304a947b5d",
    resource: {
      resourceType: "Procedure",
      id: "29dc2c45-a233-3f93-44dd-27304a947b5d",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:34cd8d58-476d-d0e1-cfa7-b0297fc09468" },
      performedPeriod: {
        start: "2014-03-02T10:15:23-05:00",
        end: "2014-03-02T11:07:36-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:bfd6d48d-8b4b-4d7d-2c23-b770c0496469",
    resource: {
      resourceType: "Procedure",
      id: "bfd6d48d-8b4b-4d7d-2c23-b770c0496469",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:bacf672b-56af-f3c8-4a65-80eae3c471f4" },
      performedPeriod: {
        start: "2014-03-05T11:07:36-05:00",
        end: "2014-03-05T11:59:34-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:2c82c3fe-519d-0b79-5328-9c6a1b58df1b",
    resource: {
      resourceType: "Procedure",
      id: "2c82c3fe-519d-0b79-5328-9c6a1b58df1b",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:9757ba66-3b1f-9cc0-1492-92f279623929" },
      performedPeriod: {
        start: "2014-03-08T11:59:34-05:00",
        end: "2014-03-08T12:52:47-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:f276b07a-4a3d-d38e-c052-72c5107584ed",
    resource: {
      resourceType: "Procedure",
      id: "f276b07a-4a3d-d38e-c052-72c5107584ed",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:dce625a4-1cb8-6776-a923-754e8df99a6a" },
      performedPeriod: {
        start: "2014-08-12T05:03:37-04:00",
        end: "2014-08-12T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:c90de9e6-c643-ec16-882e-8fd8c8318122",
    resource: {
      resourceType: "Procedure",
      id: "c90de9e6-c643-ec16-882e-8fd8c8318122",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "410006001",
            display: "Digital examination of rectum",
          },
        ],
        text: "Digital examination of rectum",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:c1baaef8-1950-41a6-88ee-a4408425ad66" },
      performedPeriod: {
        start: "2015-03-03T04:03:37-05:00",
        end: "2015-03-03T04:05:38-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:7af7cd3b-f2a4-6df5-d6e8-22cff6e1c8a9",
    resource: {
      resourceType: "Procedure",
      id: "7af7cd3b-f2a4-6df5-d6e8-22cff6e1c8a9",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:261e3c2f-35d2-5c1e-45af-c71fb7ed4abc" },
      performedPeriod: {
        start: "2015-03-31T05:03:37-04:00",
        end: "2015-03-31T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:fc3f9a46-b1a1-f63e-8065-f95ea2887a2b",
    resource: {
      resourceType: "Procedure",
      id: "fc3f9a46-b1a1-f63e-8065-f95ea2887a2b",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:2cf73d7a-1315-b7fa-17e6-b6c996e928a8" },
      performedPeriod: {
        start: "2015-05-05T05:03:37-04:00",
        end: "2015-05-05T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:ac4923e0-b96d-2668-a649-4dc0d0f2033a",
    resource: {
      resourceType: "Procedure",
      id: "ac4923e0-b96d-2668-a649-4dc0d0f2033a",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:5b1e8252-ce82-dbdb-2a07-e8c38fe7e422" },
      performedPeriod: {
        start: "2015-12-08T04:03:37-05:00",
        end: "2015-12-08T04:18:37-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:c5ec71c3-5d08-5c1e-9858-47dc9ec407af",
    resource: {
      resourceType: "Procedure",
      id: "c5ec71c3-5d08-5c1e-9858-47dc9ec407af",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "410006001",
            display: "Digital examination of rectum",
          },
        ],
        text: "Digital examination of rectum",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:d244b9ef-84a3-7ac6-17ee-615bef2aa5ef" },
      performedPeriod: {
        start: "2016-03-02T04:05:38-05:00",
        end: "2016-03-02T04:08:44-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:651bb779-ada4-2bfb-d9b8-4199e8e04206",
    resource: {
      resourceType: "Procedure",
      id: "651bb779-ada4-2bfb-d9b8-4199e8e04206",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:d244b9ef-84a3-7ac6-17ee-615bef2aa5ef" },
      performedPeriod: {
        start: "2016-03-08T04:03:37-05:00",
        end: "2016-03-08T04:18:37-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:33ebedd3-d274-6855-c348-6676b5427d44",
    resource: {
      resourceType: "Procedure",
      id: "33ebedd3-d274-6855-c348-6676b5427d44",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:7ddd6108-2f21-abe4-e022-3dba457769b4" },
      performedPeriod: {
        start: "2016-05-03T05:03:37-04:00",
        end: "2016-05-03T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:38d56f1a-fa1d-7cac-9add-310b682deefc",
    resource: {
      resourceType: "Procedure",
      id: "38d56f1a-fa1d-7cac-9add-310b682deefc",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:c285104c-3e5b-8bda-71e9-257cf5246f55" },
      performedPeriod: {
        start: "2016-05-31T05:03:37-04:00",
        end: "2016-05-31T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:bbdf6cee-a718-06d6-eda0-bed058d0fe89",
    resource: {
      resourceType: "Procedure",
      id: "bbdf6cee-a718-06d6-eda0-bed058d0fe89",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:aab616ab-9ce8-1ebc-1245-d0b40f7ee3f0" },
      performedPeriod: {
        start: "2016-07-05T05:03:37-04:00",
        end: "2016-07-05T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:d251c77c-9507-5d99-6ded-07d31a1bbc67",
    resource: {
      resourceType: "Procedure",
      id: "d251c77c-9507-5d99-6ded-07d31a1bbc67",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:7fb8b2c3-2341-c3d4-ceb2-8c6ee43c423a" },
      performedPeriod: {
        start: "2017-01-24T04:03:37-05:00",
        end: "2017-01-24T04:18:37-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:d9e14c79-e472-9ee4-e8f7-a0e257a689a3",
    resource: {
      resourceType: "Procedure",
      id: "d9e14c79-e472-9ee4-e8f7-a0e257a689a3",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "410006001",
            display: "Digital examination of rectum",
          },
        ],
        text: "Digital examination of rectum",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:b2e6aea6-4a67-1e1d-1cb0-157e8c1324a7" },
      performedPeriod: {
        start: "2017-03-14T05:03:37-04:00",
        end: "2017-03-14T05:06:17-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:43af2d42-80c1-c5fd-d1cf-1daa59871443",
    resource: {
      resourceType: "Procedure",
      id: "43af2d42-80c1-c5fd-d1cf-1daa59871443",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:ce37e551-5540-b45e-e10d-35871925bf77" },
      performedPeriod: {
        start: "2017-09-19T05:03:37-04:00",
        end: "2017-09-19T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:7fbe2391-948d-383e-8b6d-cbba933f1d14",
    resource: {
      resourceType: "Procedure",
      id: "7fbe2391-948d-383e-8b6d-cbba933f1d14",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:9e0d5bce-eece-1e88-6149-6bb12fc62d3a" },
      performedPeriod: {
        start: "2017-10-17T05:03:37-04:00",
        end: "2017-10-17T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:18a57a29-5a33-455d-270b-993dade54c3b",
    resource: {
      resourceType: "Procedure",
      id: "18a57a29-5a33-455d-270b-993dade54c3b",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:679ca82f-583c-bbb8-08b1-fd8eb3e6c572" },
      performedPeriod: {
        start: "2018-01-23T04:03:37-05:00",
        end: "2018-01-23T04:18:37-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:2d4f47d7-0d15-3771-65a0-954dad59e233",
    resource: {
      resourceType: "Procedure",
      id: "2d4f47d7-0d15-3771-65a0-954dad59e233",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "410006001",
            display: "Digital examination of rectum",
          },
        ],
        text: "Digital examination of rectum",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:68777790-7be5-32ef-1958-7873b7d4ec2d" },
      performedPeriod: {
        start: "2018-03-14T05:06:17-04:00",
        end: "2018-03-14T05:08:48-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:2d3a964e-145f-0f30-a26f-280f7c216149",
    resource: {
      resourceType: "Procedure",
      id: "2d3a964e-145f-0f30-a26f-280f7c216149",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:68777790-7be5-32ef-1958-7873b7d4ec2d" },
      performedPeriod: {
        start: "2018-03-20T05:03:37-04:00",
        end: "2018-03-20T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:8441829a-59f7-6c8e-1803-0b011738cb76",
    resource: {
      resourceType: "Procedure",
      id: "8441829a-59f7-6c8e-1803-0b011738cb76",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:1179e7d1-7f93-f1dd-4dc7-185021ec8eb6" },
      performedPeriod: {
        start: "2018-04-24T05:03:37-04:00",
        end: "2018-04-24T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:a00081ad-7d59-7549-62f5-4fa3737fd406",
    resource: {
      resourceType: "Procedure",
      id: "a00081ad-7d59-7549-62f5-4fa3737fd406",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:75b15303-3599-f583-77db-d2b242160c20" },
      performedPeriod: {
        start: "2018-06-26T05:03:37-04:00",
        end: "2018-06-26T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:b236f04b-91cb-5a2c-75d9-e8ea5af41ffb",
    resource: {
      resourceType: "Procedure",
      id: "b236f04b-91cb-5a2c-75d9-e8ea5af41ffb",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:51c47308-d5b1-3558-b99d-90b39974f69d" },
      performedPeriod: {
        start: "2019-01-22T04:03:37-05:00",
        end: "2019-01-22T04:18:37-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:7596bc88-4033-ba72-c880-4d6ef38ee7f7",
    resource: {
      resourceType: "Procedure",
      id: "7596bc88-4033-ba72-c880-4d6ef38ee7f7",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "410006001",
            display: "Digital examination of rectum",
          },
        ],
        text: "Digital examination of rectum",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:daa61ba9-0307-6ff2-bf8b-ea0b6b582353" },
      performedPeriod: {
        start: "2019-03-14T05:08:48-04:00",
        end: "2019-03-14T05:12:52-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:5c9f40bc-3f4f-7d6c-eb32-c7f431133f4a",
    resource: {
      resourceType: "Procedure",
      id: "5c9f40bc-3f4f-7d6c-eb32-c7f431133f4a",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:20affa0e-8154-90fc-f7b2-186ad426fcdd" },
      performedPeriod: {
        start: "2019-04-16T05:03:37-04:00",
        end: "2019-04-16T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:13ec6700-9b44-6b70-e90c-1f1e56e5bdf2",
    resource: {
      resourceType: "Procedure",
      id: "13ec6700-9b44-6b70-e90c-1f1e56e5bdf2",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:ca87b610-8121-902a-e3fe-9a2fe8471409" },
      performedPeriod: {
        start: "2019-06-18T05:03:37-04:00",
        end: "2019-06-18T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:86335830-bf9c-06d2-ef38-fe6ea5f52840",
    resource: {
      resourceType: "Procedure",
      id: "86335830-bf9c-06d2-ef38-fe6ea5f52840",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:28cdef4e-363c-6f5e-bdab-a1cdb7c01c9a" },
      performedPeriod: {
        start: "2019-08-20T05:03:37-04:00",
        end: "2019-08-20T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:98655e49-5c29-02d6-1aa2-da13b531fb02",
    resource: {
      resourceType: "Procedure",
      id: "98655e49-5c29-02d6-1aa2-da13b531fb02",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:e33b9e05-0c59-a368-d3cc-86b4bde04791" },
      performedPeriod: {
        start: "2019-12-17T04:03:37-05:00",
        end: "2019-12-17T04:18:37-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:896b041e-511d-23b6-59e4-fd34314c1925",
    resource: {
      resourceType: "Procedure",
      id: "896b041e-511d-23b6-59e4-fd34314c1925",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "261352009",
            display: "Face mask (physical object)",
          },
        ],
        text: "Face mask (physical object)",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:39c297e3-1533-8a63-7ed1-382ba22a446e" },
      performedPeriod: {
        start: "2020-03-07T04:03:37-05:00",
        end: "2020-03-07T04:14:19-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:555db79f-8a16-52e6-2a85-28749e0ba8a3",
          display: "Suspected COVID-19",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:01ce8359-827c-70f0-0298-c2ecee0b1297",
    resource: {
      resourceType: "Procedure",
      id: "01ce8359-827c-70f0-0298-c2ecee0b1297",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "410006001",
            display: "Digital examination of rectum",
          },
        ],
        text: "Digital examination of rectum",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:f3cb4b64-00ec-da01-7c61-bdbb3cc6726b" },
      performedPeriod: {
        start: "2020-03-31T05:03:37-04:00",
        end: "2020-03-31T05:07:20-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:c607599b-60b0-8115-42ba-89a75fa717a1",
    resource: {
      resourceType: "Procedure",
      id: "c607599b-60b0-8115-42ba-89a75fa717a1",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:b3770587-e59b-8138-a1a0-2150f58a5e81" },
      performedPeriod: {
        start: "2020-05-12T05:03:37-04:00",
        end: "2020-05-12T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:4329f150-0ae1-4fc4-aff4-668e3fce558f",
    resource: {
      resourceType: "Procedure",
      id: "4329f150-0ae1-4fc4-aff4-668e3fce558f",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:3d791c6c-2e4c-dacf-1aae-1d516a824c62" },
      performedPeriod: {
        start: "2021-03-09T04:03:37-05:00",
        end: "2021-03-09T04:18:37-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:bcee1ac0-76dc-c8c1-9ba3-5e43cb296137",
    resource: {
      resourceType: "Procedure",
      id: "bcee1ac0-76dc-c8c1-9ba3-5e43cb296137",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "410006001",
            display: "Digital examination of rectum",
          },
        ],
        text: "Digital examination of rectum",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:4b2049b2-7b46-a972-442e-e2bd1f82bcdc" },
      performedPeriod: {
        start: "2021-03-31T05:07:20-04:00",
        end: "2021-03-31T05:11:39-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:3718ae80-f38a-507e-65f7-d382b6040224",
    resource: {
      resourceType: "Procedure",
      id: "3718ae80-f38a-507e-65f7-d382b6040224",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:4b2049b2-7b46-a972-442e-e2bd1f82bcdc" },
      performedPeriod: {
        start: "2021-04-06T05:03:37-04:00",
        end: "2021-04-06T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:64f32356-1b4c-f9ea-c1c6-526013f59a14",
    resource: {
      resourceType: "Procedure",
      id: "64f32356-1b4c-f9ea-c1c6-526013f59a14",
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
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:501e3e27-4c40-1ab1-7da3-3fe2c10eb5fb" },
      performedPeriod: {
        start: "2021-04-13T05:03:37-04:00",
        end: "2021-04-13T05:18:37-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:a698fcaf-56de-3cf1-e4d1-2f6e095b8b85",
    resource: {
      resourceType: "Procedure",
      id: "a698fcaf-56de-3cf1-e4d1-2f6e095b8b85",
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
      subject: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:95b5b604-3eac-ce3a-5172-fb1fdce4205f" },
      performedPeriod: {
        start: "2012-11-03T01:51:28-04:00",
        end: "2012-11-03T02:06:28-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:7a9e1c52-31cc-0b41-8cf2-c29aa00b3a50",
    resource: {
      resourceType: "Procedure",
      id: "7a9e1c52-31cc-0b41-8cf2-c29aa00b3a50",
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
      subject: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:fc65bfa2-948d-5c4a-94b8-4f1675291f68" },
      performedPeriod: {
        start: "2013-08-03T01:51:28-04:00",
        end: "2013-08-03T02:06:28-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:ad14dbdb-8735-d532-ebea-42d2f22aa343",
    resource: {
      resourceType: "Procedure",
      id: "ad14dbdb-8735-d532-ebea-42d2f22aa343",
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
      subject: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:320a4f52-c939-7b82-230f-ca09c203e916" },
      performedPeriod: {
        start: "2013-11-02T01:51:28-04:00",
        end: "2013-11-02T02:06:28-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:065a5ed2-e774-f8bb-34ab-2b26f90a4034",
    resource: {
      resourceType: "Procedure",
      id: "065a5ed2-e774-f8bb-34ab-2b26f90a4034",
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
      subject: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:d4bba2ee-e531-6e1d-a66c-78f210d872c2" },
      performedPeriod: {
        start: "2014-11-01T01:51:28-04:00",
        end: "2014-11-01T02:06:28-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:5de564ee-ca81-e7dd-6af6-56f3d6e8611f",
    resource: {
      resourceType: "Procedure",
      id: "5de564ee-ca81-e7dd-6af6-56f3d6e8611f",
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
      subject: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:3b0a79d0-de4f-13fc-002e-0f9f18dae9d8" },
      performedPeriod: {
        start: "2015-05-02T01:51:28-04:00",
        end: "2015-05-02T02:06:28-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:1587e537-ad76-6a30-4c00-6e3989f9cdbc",
    resource: {
      resourceType: "Procedure",
      id: "1587e537-ad76-6a30-4c00-6e3989f9cdbc",
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
      subject: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:f3ebeab2-6815-b89c-766c-be1479996ab1" },
      performedPeriod: {
        start: "2015-10-31T01:51:28-04:00",
        end: "2015-10-31T02:06:28-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:5e9bb24d-f743-1ed9-ef68-9c1606746d74",
    resource: {
      resourceType: "Procedure",
      id: "5e9bb24d-f743-1ed9-ef68-9c1606746d74",
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
      subject: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:084d5dfb-ce03-5cef-5211-473261419102" },
      performedPeriod: {
        start: "2016-04-30T01:51:28-04:00",
        end: "2016-04-30T02:06:28-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:c19d8ed8-8d88-8bc2-e580-d17a6d35cf30",
    resource: {
      resourceType: "Procedure",
      id: "c19d8ed8-8d88-8bc2-e580-d17a6d35cf30",
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
      subject: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:076aebca-dc95-7f85-efba-eea53c1b3c4f" },
      performedPeriod: {
        start: "2018-05-12T01:51:28-04:00",
        end: "2018-05-12T02:06:28-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:850089dc-efb1-7357-a316-471d20644266",
    resource: {
      resourceType: "Procedure",
      id: "850089dc-efb1-7357-a316-471d20644266",
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
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:76e38435-dac4-18d8-b193-c5f33a692868" },
      performedPeriod: {
        start: "2011-06-21T00:29:59-04:00",
        end: "2011-06-21T00:44:59-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:549b3678-cab2-181c-724f-9f8353fc8559",
    resource: {
      resourceType: "Procedure",
      id: "549b3678-cab2-181c-724f-9f8353fc8559",
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
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:745196cb-0d46-2c8e-fb60-a5ddd5477d62" },
      performedPeriod: {
        start: "2012-06-26T00:29:59-04:00",
        end: "2012-06-26T00:44:59-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:77b2e602-766c-014c-a6c2-fa6f62cc6921",
    resource: {
      resourceType: "Procedure",
      id: "77b2e602-766c-014c-a6c2-fa6f62cc6921",
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
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:40187567-1af0-275a-9fa8-a9286b832f48" },
      performedPeriod: {
        start: "2013-07-02T00:29:59-04:00",
        end: "2013-07-02T00:44:59-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:d0b0a13b-769a-d391-d682-ec4e3bc99f93",
    resource: {
      resourceType: "Procedure",
      id: "d0b0a13b-769a-d391-d682-ec4e3bc99f93",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:ffc30806-e639-2a38-411a-611509012415" },
      performedPeriod: {
        start: "2014-02-08T23:29:59-05:00",
        end: "2014-02-09T00:20:47-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:f7c73b56-26b6-17e4-a35d-39562980edfa",
    resource: {
      resourceType: "Procedure",
      id: "f7c73b56-26b6-17e4-a35d-39562980edfa",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:0019777b-c358-b632-7896-fdfd9e0e7403" },
      performedPeriod: {
        start: "2014-02-12T00:20:47-05:00",
        end: "2014-02-12T01:06:06-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:387b0246-1be2-7507-7601-b2286c60a1b4",
    resource: {
      resourceType: "Procedure",
      id: "387b0246-1be2-7507-7601-b2286c60a1b4",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:fa7446b0-70c3-60a6-2d37-d80d021e17dc" },
      performedPeriod: {
        start: "2014-02-15T01:06:06-05:00",
        end: "2014-02-15T01:59:48-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:adf34a9c-a1cb-698b-f2fd-3c1be640d1a4",
    resource: {
      resourceType: "Procedure",
      id: "adf34a9c-a1cb-698b-f2fd-3c1be640d1a4",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:91672125-8f2a-d91e-ca2e-d7d6000bfbd8" },
      performedPeriod: {
        start: "2014-02-18T01:59:48-05:00",
        end: "2014-02-18T02:49:21-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:734ad24b-acba-e511-b888-ad1d3cb88205",
    resource: {
      resourceType: "Procedure",
      id: "734ad24b-acba-e511-b888-ad1d3cb88205",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:5407d416-9b62-cdab-4f16-e297d7eeafc1" },
      performedPeriod: {
        start: "2014-02-21T02:49:21-05:00",
        end: "2014-02-21T03:34:21-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:1a3edaa9-2736-f3f8-74de-9f48cafe1940",
    resource: {
      resourceType: "Procedure",
      id: "1a3edaa9-2736-f3f8-74de-9f48cafe1940",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:7776bbf5-ed8c-2419-9eaf-ed5c9b8de544" },
      performedPeriod: {
        start: "2014-02-24T03:34:21-05:00",
        end: "2014-02-24T04:28:44-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:217177ad-ea24-975b-8806-9bd950217afd",
    resource: {
      resourceType: "Procedure",
      id: "217177ad-ea24-975b-8806-9bd950217afd",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:6465ff36-9f25-1760-ad21-bf5fc7a50c87" },
      performedPeriod: {
        start: "2014-02-27T04:28:44-05:00",
        end: "2014-02-27T05:15:30-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:5119f882-837a-dd3b-edc5-214410f2fd79",
    resource: {
      resourceType: "Procedure",
      id: "5119f882-837a-dd3b-edc5-214410f2fd79",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:7111fa50-f68a-cd5e-cc98-67b41f62c2fc" },
      performedPeriod: {
        start: "2014-03-02T05:15:30-05:00",
        end: "2014-03-02T06:11:37-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:20d98d3f-676b-8cf8-49cd-489ed3eead17",
    resource: {
      resourceType: "Procedure",
      id: "20d98d3f-676b-8cf8-49cd-489ed3eead17",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:b0d08100-9e4b-38c3-b112-aa22db520874" },
      performedPeriod: {
        start: "2014-03-05T06:11:37-05:00",
        end: "2014-03-05T07:03:47-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:d2098dea-6734-fc07-3222-0e48231b923a",
    resource: {
      resourceType: "Procedure",
      id: "d2098dea-6734-fc07-3222-0e48231b923a",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "229064008",
            display: "Movement therapy (regime/therapy)",
          },
        ],
        text: "Movement therapy (regime/therapy)",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:5b53d8d1-336c-5b4c-2a23-e75530aa6e78" },
      performedPeriod: {
        start: "2014-03-08T07:03:47-05:00",
        end: "2014-03-08T08:01:50-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:193de8d6-bbfc-c994-a33f-52c302cc776e",
    resource: {
      resourceType: "Procedure",
      id: "193de8d6-bbfc-c994-a33f-52c302cc776e",
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
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:caeeffef-0c04-ad74-bc0e-80e7732f59e3" },
      performedPeriod: {
        start: "2014-07-08T00:29:59-04:00",
        end: "2014-07-08T00:44:59-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:1c363fdf-6408-dab5-8a44-32af1c8a9e03",
    resource: {
      resourceType: "Procedure",
      id: "1c363fdf-6408-dab5-8a44-32af1c8a9e03",
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
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:e4e17ac5-5e0e-4f54-8882-304a4f126911" },
      performedPeriod: {
        start: "2016-11-28T23:29:59-05:00",
        end: "2016-11-29T00:13:11-05:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:e9474b9a-db07-53e7-7dd7-87c576c76c36",
    resource: {
      resourceType: "Procedure",
      id: "e9474b9a-db07-53e7-7dd7-87c576c76c36",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "288086009",
            display: "Suture open wound",
          },
        ],
        text: "Suture open wound",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:982b2ced-fba6-3e9b-dbff-2bfd847ac103" },
      performedPeriod: {
        start: "2018-04-24T05:13:59-04:00",
        end: "2018-04-24T05:33:46-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:025d9865-5f67-daa3-dcb9-ee61ad8e3a5a",
          display: "Laceration of hand",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:89dee2db-676c-00c5-fd30-8c23efe9dfb0",
    resource: {
      resourceType: "Procedure",
      id: "89dee2db-676c-00c5-fd30-8c23efe9dfb0",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "384700001",
            display: "Injection of tetanus antitoxin",
          },
        ],
        text: "Injection of tetanus antitoxin",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:982b2ced-fba6-3e9b-dbff-2bfd847ac103" },
      performedPeriod: {
        start: "2018-04-24T05:33:46-04:00",
        end: "2018-04-24T05:45:17-04:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:025d9865-5f67-daa3-dcb9-ee61ad8e3a5a",
          display: "Laceration of hand",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:6dffbfc9-c022-aa92-46f8-783c98f35ac3",
    resource: {
      resourceType: "Procedure",
      id: "6dffbfc9-c022-aa92-46f8-783c98f35ac3",
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
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:ebd0110c-cba9-5b6a-a6f5-d74103c34877" },
      performedPeriod: {
        start: "2018-07-31T00:29:59-04:00",
        end: "2018-07-31T00:44:59-04:00",
      },
    },
    request: { method: "POST", url: "Procedure" },
  },
  {
    fullUrl: "urn:uuid:cb691c48-f3ca-3bd0-e9b5-d1edda38c923",
    resource: {
      resourceType: "Procedure",
      id: "cb691c48-f3ca-3bd0-e9b5-d1edda38c923",
      status: "completed",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "261352009",
            display: "Face mask (physical object)",
          },
        ],
        text: "Face mask (physical object)",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:823b4e28-229e-ec0f-9a30-c8233e002be9" },
      performedPeriod: {
        start: "2020-02-22T23:29:59-05:00",
        end: "2020-02-22T23:42:25-05:00",
      },
      reasonReference: [
        {
          reference: "urn:uuid:3ea0dd9a-ce37-22a1-a958-c952d508bf31",
          display: "Suspected COVID-19",
        },
      ],
    },
    request: { method: "POST", url: "Procedure" },
  },
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
