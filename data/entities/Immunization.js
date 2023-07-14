const entities = [
  {
    fullUrl: "urn:uuid:16600eed-2684-098e-af79-643fd3b1f8d4",
    resource: {
      resourceType: "Immunization",
      id: "16600eed-2684-098e-af79-643fd3b1f8d4",
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
      patient: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:b9cfb8a9-eb5a-ff09-141b-ba1f88a66e19" },
      occurrenceDateTime: "2012-03-26T20:41:48-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:e598a5ef-fe37-b254-72c9-e0e64394003e",
    resource: {
      resourceType: "Immunization",
      id: "e598a5ef-fe37-b254-72c9-e0e64394003e",
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
      patient: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:92c1b82b-c3fb-8656-2bee-fcc5341ab968" },
      occurrenceDateTime: "2012-11-05T19:41:48-05:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:40bbe8c8-0321-710e-0816-4247f2222b5b",
    resource: {
      resourceType: "Immunization",
      id: "40bbe8c8-0321-710e-0816-4247f2222b5b",
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
      patient: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:deea69d5-daa1-a1e3-a905-2d5b212b242c" },
      occurrenceDateTime: "2014-04-14T20:41:48-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:c773e463-b965-cf56-c449-4984c8953315",
    resource: {
      resourceType: "Immunization",
      id: "c773e463-b965-cf56-c449-4984c8953315",
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
      patient: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:4b43d0ab-15eb-ffcc-970c-94f231faec5f" },
      occurrenceDateTime: "2015-04-20T20:41:48-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:3f93486c-8aa9-080b-2dde-63b92732807b",
    resource: {
      resourceType: "Immunization",
      id: "3f93486c-8aa9-080b-2dde-63b92732807b",
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
      patient: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:4b43d0ab-15eb-ffcc-970c-94f231faec5f" },
      occurrenceDateTime: "2015-04-20T20:41:48-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:aa933b20-2b4c-fb8d-5c5c-68a2addfae45",
    resource: {
      resourceType: "Immunization",
      id: "aa933b20-2b4c-fb8d-5c5c-68a2addfae45",
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
      patient: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:ace0ca06-e773-c02d-9329-4596b5e49dda" },
      occurrenceDateTime: "2016-04-25T20:41:48-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:1f554db9-efa6-3889-f945-25d71cc04282",
    resource: {
      resourceType: "Immunization",
      id: "1f554db9-efa6-3889-f945-25d71cc04282",
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
      patient: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:de9cb9a4-8db9-2397-0bae-e7b3a51b2e18" },
      occurrenceDateTime: "2017-05-01T20:41:48-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:d08066b8-f019-238a-fbf7-5f4c1f0caccd",
    resource: {
      resourceType: "Immunization",
      id: "d08066b8-f019-238a-fbf7-5f4c1f0caccd",
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
      patient: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:7ae1e037-edba-27ec-f8b1-d85e847b178b" },
      occurrenceDateTime: "2018-05-07T20:41:48-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:cf9d4fe9-6846-acc1-7831-2b3fcb4b7bbd",
    resource: {
      resourceType: "Immunization",
      id: "cf9d4fe9-6846-acc1-7831-2b3fcb4b7bbd",
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
      patient: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:dffa5599-732b-b905-dab9-d554f75cafc0" },
      occurrenceDateTime: "2019-05-13T20:41:48-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:a3dd10bb-50e8-194a-d107-e042fc22d427",
    resource: {
      resourceType: "Immunization",
      id: "a3dd10bb-50e8-194a-d107-e042fc22d427",
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
      patient: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:fb398b98-559f-e8de-e309-e9af6e4408b0" },
      occurrenceDateTime: "2020-05-18T20:41:48-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:78b29613-fd5f-c40f-0b84-30f50c684ae4",
    resource: {
      resourceType: "Immunization",
      id: "78b29613-fd5f-c40f-0b84-30f50c684ae4",
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
      patient: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:b23d579b-42b8-4736-1460-57fd15996dab" },
      occurrenceDateTime: "2012-05-22T13:20:13-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:a1f1771a-f59d-ddd7-bf2b-30cebd4f7535",
    resource: {
      resourceType: "Immunization",
      id: "a1f1771a-f59d-ddd7-bf2b-30cebd4f7535",
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
      patient: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:97384d24-2651-7ed3-7ee2-3b7271b52c84" },
      occurrenceDateTime: "2013-05-28T13:20:13-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:1c7bba80-1aff-e6c4-4380-103f3d72f0bc",
    resource: {
      resourceType: "Immunization",
      id: "1c7bba80-1aff-e6c4-4380-103f3d72f0bc",
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
      patient: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:1ff62490-60ba-a6bc-5ef1-f45cd481c204" },
      occurrenceDateTime: "2014-06-03T13:20:13-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:4553ef94-a98e-0ae2-f078-8d91f4b9a2fe",
    resource: {
      resourceType: "Immunization",
      id: "4553ef94-a98e-0ae2-f078-8d91f4b9a2fe",
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
      patient: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:b2d6bd8b-aa30-e716-4644-05746420f2fa" },
      occurrenceDateTime: "2015-06-09T13:20:13-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:3edf4b2c-41b7-59a9-e335-07cdacb20e16",
    resource: {
      resourceType: "Immunization",
      id: "3edf4b2c-41b7-59a9-e335-07cdacb20e16",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "52",
            display: "Hep A, adult",
          },
        ],
        text: "Hep A, adult",
      },
      patient: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:b2d6bd8b-aa30-e716-4644-05746420f2fa" },
      occurrenceDateTime: "2015-06-09T13:20:13-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:f03aa0ef-fffa-572c-593a-1be44a0c460f",
    resource: {
      resourceType: "Immunization",
      id: "f03aa0ef-fffa-572c-593a-1be44a0c460f",
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
      patient: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:755e691d-d380-cc01-6e77-82ed05ebe841" },
      occurrenceDateTime: "2016-06-14T13:20:13-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:55772a5d-2764-6e9a-c649-bba98a53200c",
    resource: {
      resourceType: "Immunization",
      id: "55772a5d-2764-6e9a-c649-bba98a53200c",
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
      patient: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:755e691d-d380-cc01-6e77-82ed05ebe841" },
      occurrenceDateTime: "2016-06-14T13:20:13-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:eaa86b3d-5b4c-f701-1fc5-6861134f8044",
    resource: {
      resourceType: "Immunization",
      id: "eaa86b3d-5b4c-f701-1fc5-6861134f8044",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "52",
            display: "Hep A, adult",
          },
        ],
        text: "Hep A, adult",
      },
      patient: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:755e691d-d380-cc01-6e77-82ed05ebe841" },
      occurrenceDateTime: "2016-06-14T13:20:13-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:56e9d9e9-469f-a9f4-4bd2-c365ba5ad34e",
    resource: {
      resourceType: "Immunization",
      id: "56e9d9e9-469f-a9f4-4bd2-c365ba5ad34e",
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
      patient: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:a823a37c-4473-6937-7b22-491d54d2f9ce" },
      occurrenceDateTime: "2017-06-20T13:20:13-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:c59b192b-10ff-d2b9-c677-80526d1cab71",
    resource: {
      resourceType: "Immunization",
      id: "c59b192b-10ff-d2b9-c677-80526d1cab71",
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
      patient: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:28baf1b2-6f5d-054d-e0da-62bbb994db96" },
      occurrenceDateTime: "2018-06-26T13:20:13-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:a2b63036-bdae-4e5c-aca3-3c287902659f",
    resource: {
      resourceType: "Immunization",
      id: "a2b63036-bdae-4e5c-aca3-3c287902659f",
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
      patient: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:b5bc2af5-85de-c60e-6c01-9eeaea50c324" },
      occurrenceDateTime: "2019-07-02T13:20:13-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:00820d52-3b11-2238-7a0e-3c838b88bf0e",
    resource: {
      resourceType: "Immunization",
      id: "00820d52-3b11-2238-7a0e-3c838b88bf0e",
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
      patient: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:cbf7e79f-07fa-2b7f-00d5-3ac6f9abf03b" },
      occurrenceDateTime: "2020-07-07T13:20:13-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:0589f816-d985-64d8-e890-cb5786fdeca4",
    resource: {
      resourceType: "Immunization",
      id: "0589f816-d985-64d8-e890-cb5786fdeca4",
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
      patient: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:39a9bb5b-ef4c-1899-f4a7-8e7f4d9fae4b" },
      occurrenceDateTime: "2011-06-21T05:03:37-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:82a77769-235d-81c0-63a2-47c8b5830ad8",
    resource: {
      resourceType: "Immunization",
      id: "82a77769-235d-81c0-63a2-47c8b5830ad8",
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
      patient: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:88f4f1d6-dd6a-76e6-d1b3-49f189fdccce" },
      occurrenceDateTime: "2012-06-19T05:03:37-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:c90aa10d-fb95-e5f9-b92c-9a0d69194f91",
    resource: {
      resourceType: "Immunization",
      id: "c90aa10d-fb95-e5f9-b92c-9a0d69194f91",
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
      patient: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:2a5bbe3f-842b-c20a-4d11-8aa6699bdee2" },
      occurrenceDateTime: "2013-06-11T05:03:37-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:e2a72ce9-0383-e283-224d-9b34aeab56c6",
    resource: {
      resourceType: "Immunization",
      id: "e2a72ce9-0383-e283-224d-9b34aeab56c6",
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
      patient: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:ba1a63f7-8cb3-ce7b-1fe5-c3c8fcd451dd" },
      occurrenceDateTime: "2014-06-10T05:03:37-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:a8b36f83-4a39-6ac2-10e1-1e60e45104f7",
    resource: {
      resourceType: "Immunization",
      id: "a8b36f83-4a39-6ac2-10e1-1e60e45104f7",
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
      patient: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:9078cf05-a30c-a4f7-2f52-1bbb7f787fb7" },
      occurrenceDateTime: "2015-06-30T05:03:37-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:e51b0ea4-9071-ce0f-02ff-7108f4126272",
    resource: {
      resourceType: "Immunization",
      id: "e51b0ea4-9071-ce0f-02ff-7108f4126272",
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
      patient: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:c285104c-3e5b-8bda-71e9-257cf5246f55" },
      occurrenceDateTime: "2016-05-31T05:03:37-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:b8097521-c64d-265a-012a-4b987ad62bad",
    resource: {
      resourceType: "Immunization",
      id: "b8097521-c64d-265a-012a-4b987ad62bad",
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
      patient: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:a1cbee6f-a7bf-0f1f-8908-7f2511b52422" },
      occurrenceDateTime: "2017-05-30T05:03:37-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:30803303-ada8-54a2-dc65-c59c1cd5a083",
    resource: {
      resourceType: "Immunization",
      id: "30803303-ada8-54a2-dc65-c59c1cd5a083",
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
      patient: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:8195fa67-5f15-5243-7630-85d65dc30ffa" },
      occurrenceDateTime: "2018-06-19T05:03:37-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:ff3d3214-5978-dd0f-0dde-a2c6cf3eed51",
    resource: {
      resourceType: "Immunization",
      id: "ff3d3214-5978-dd0f-0dde-a2c6cf3eed51",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "08",
            display: "Hep B, adolescent or pediatric",
          },
        ],
        text: "Hep B, adolescent or pediatric",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:685963bc-831e-61ff-4d5a-d722aca7912a" },
      occurrenceDateTime: "2012-05-26T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:939ef154-d2ab-629c-ff45-04d91b363823",
    resource: {
      resourceType: "Immunization",
      id: "939ef154-d2ab-629c-ff45-04d91b363823",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "08",
            display: "Hep B, adolescent or pediatric",
          },
        ],
        text: "Hep B, adolescent or pediatric",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:5872d975-c409-d395-9ccb-a050713f551f" },
      occurrenceDateTime: "2012-06-30T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:08c3ec93-9971-8337-a5a4-262a1d778c9f",
    resource: {
      resourceType: "Immunization",
      id: "08c3ec93-9971-8337-a5a4-262a1d778c9f",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "49",
            display: "Hib (PRP-OMP)",
          },
        ],
        text: "Hib (PRP-OMP)",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:fd1d7e78-b0ee-ac98-ee0a-dba6f815e818" },
      occurrenceDateTime: "2012-09-01T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:bfd17ed9-2806-38c8-c077-fb82c4eaa7c6",
    resource: {
      resourceType: "Immunization",
      id: "bfd17ed9-2806-38c8-c077-fb82c4eaa7c6",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "119",
            display: "rotavirus, monovalent",
          },
        ],
        text: "rotavirus, monovalent",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:fd1d7e78-b0ee-ac98-ee0a-dba6f815e818" },
      occurrenceDateTime: "2012-09-01T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:77fbdf7e-1218-6ca6-4cd9-0d5a396d8298",
    resource: {
      resourceType: "Immunization",
      id: "77fbdf7e-1218-6ca6-4cd9-0d5a396d8298",
      status: "completed",
      vaccineCode: {
        coding: [
          { system: "http://hl7.org/fhir/sid/cvx", code: "10", display: "IPV" },
        ],
        text: "IPV",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:fd1d7e78-b0ee-ac98-ee0a-dba6f815e818" },
      occurrenceDateTime: "2012-09-01T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:8ac58f6e-80b1-954e-294c-f88b9e0a28c5",
    resource: {
      resourceType: "Immunization",
      id: "8ac58f6e-80b1-954e-294c-f88b9e0a28c5",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "20",
            display: "DTaP",
          },
        ],
        text: "DTaP",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:fd1d7e78-b0ee-ac98-ee0a-dba6f815e818" },
      occurrenceDateTime: "2012-09-01T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:2ece077a-c0f8-fa15-10c1-dc415125a1f9",
    resource: {
      resourceType: "Immunization",
      id: "2ece077a-c0f8-fa15-10c1-dc415125a1f9",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "133",
            display: "Pneumococcal conjugate PCV 13",
          },
        ],
        text: "Pneumococcal conjugate PCV 13",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:fd1d7e78-b0ee-ac98-ee0a-dba6f815e818" },
      occurrenceDateTime: "2012-09-01T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:401ffb5e-b19d-7849-d150-f2b8250e8e78",
    resource: {
      resourceType: "Immunization",
      id: "401ffb5e-b19d-7849-d150-f2b8250e8e78",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "49",
            display: "Hib (PRP-OMP)",
          },
        ],
        text: "Hib (PRP-OMP)",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:95b5b604-3eac-ce3a-5172-fb1fdce4205f" },
      occurrenceDateTime: "2012-11-03T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:8f2695a6-2faa-ec54-37cc-3d8c65c9ca06",
    resource: {
      resourceType: "Immunization",
      id: "8f2695a6-2faa-ec54-37cc-3d8c65c9ca06",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "119",
            display: "rotavirus, monovalent",
          },
        ],
        text: "rotavirus, monovalent",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:95b5b604-3eac-ce3a-5172-fb1fdce4205f" },
      occurrenceDateTime: "2012-11-03T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:897bcd76-6816-6320-a973-d43f7bb31b20",
    resource: {
      resourceType: "Immunization",
      id: "897bcd76-6816-6320-a973-d43f7bb31b20",
      status: "completed",
      vaccineCode: {
        coding: [
          { system: "http://hl7.org/fhir/sid/cvx", code: "10", display: "IPV" },
        ],
        text: "IPV",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:95b5b604-3eac-ce3a-5172-fb1fdce4205f" },
      occurrenceDateTime: "2012-11-03T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:21bce702-addc-626c-e480-3ecf3f56708f",
    resource: {
      resourceType: "Immunization",
      id: "21bce702-addc-626c-e480-3ecf3f56708f",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "20",
            display: "DTaP",
          },
        ],
        text: "DTaP",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:95b5b604-3eac-ce3a-5172-fb1fdce4205f" },
      occurrenceDateTime: "2012-11-03T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:8df322a7-ec41-29c6-f9a5-ef6af864c925",
    resource: {
      resourceType: "Immunization",
      id: "8df322a7-ec41-29c6-f9a5-ef6af864c925",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "133",
            display: "Pneumococcal conjugate PCV 13",
          },
        ],
        text: "Pneumococcal conjugate PCV 13",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:95b5b604-3eac-ce3a-5172-fb1fdce4205f" },
      occurrenceDateTime: "2012-11-03T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:52696652-0aa5-492d-0ba9-1f0fe9210f0b",
    resource: {
      resourceType: "Immunization",
      id: "52696652-0aa5-492d-0ba9-1f0fe9210f0b",
      status: "completed",
      vaccineCode: {
        coding: [
          { system: "http://hl7.org/fhir/sid/cvx", code: "10", display: "IPV" },
        ],
        text: "IPV",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:177ceaa8-78e3-b8fb-cba8-54106008afff" },
      occurrenceDateTime: "2013-02-02T00:51:28-05:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:cb0fc9ee-5885-616e-d7a3-249828e2b275",
    resource: {
      resourceType: "Immunization",
      id: "cb0fc9ee-5885-616e-d7a3-249828e2b275",
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
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:177ceaa8-78e3-b8fb-cba8-54106008afff" },
      occurrenceDateTime: "2013-02-02T00:51:28-05:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:eee23183-05db-b758-913e-633460872fcb",
    resource: {
      resourceType: "Immunization",
      id: "eee23183-05db-b758-913e-633460872fcb",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "20",
            display: "DTaP",
          },
        ],
        text: "DTaP",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:177ceaa8-78e3-b8fb-cba8-54106008afff" },
      occurrenceDateTime: "2013-02-02T00:51:28-05:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:38bb5cf0-8960-6da9-5397-c23654a7be37",
    resource: {
      resourceType: "Immunization",
      id: "38bb5cf0-8960-6da9-5397-c23654a7be37",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "133",
            display: "Pneumococcal conjugate PCV 13",
          },
        ],
        text: "Pneumococcal conjugate PCV 13",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:177ceaa8-78e3-b8fb-cba8-54106008afff" },
      occurrenceDateTime: "2013-02-02T00:51:28-05:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:e0a0f0a0-4156-2b7f-6629-4c285ed1839d",
    resource: {
      resourceType: "Immunization",
      id: "e0a0f0a0-4156-2b7f-6629-4c285ed1839d",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "08",
            display: "Hep B, adolescent or pediatric",
          },
        ],
        text: "Hep B, adolescent or pediatric",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:177ceaa8-78e3-b8fb-cba8-54106008afff" },
      occurrenceDateTime: "2013-02-02T00:51:28-05:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:6749127a-63fa-7076-e046-da7177af0942",
    resource: {
      resourceType: "Immunization",
      id: "6749127a-63fa-7076-e046-da7177af0942",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "49",
            display: "Hib (PRP-OMP)",
          },
        ],
        text: "Hib (PRP-OMP)",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:fc65bfa2-948d-5c4a-94b8-4f1675291f68" },
      occurrenceDateTime: "2013-08-03T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:62653f34-a5bc-d014-d527-69867ee124d9",
    resource: {
      resourceType: "Immunization",
      id: "62653f34-a5bc-d014-d527-69867ee124d9",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "21",
            display: "varicella",
          },
        ],
        text: "varicella",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:fc65bfa2-948d-5c4a-94b8-4f1675291f68" },
      occurrenceDateTime: "2013-08-03T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:dd4de224-70f0-51a3-6fdb-49efceb18ce0",
    resource: {
      resourceType: "Immunization",
      id: "dd4de224-70f0-51a3-6fdb-49efceb18ce0",
      status: "completed",
      vaccineCode: {
        coding: [
          { system: "http://hl7.org/fhir/sid/cvx", code: "03", display: "MMR" },
        ],
        text: "MMR",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:fc65bfa2-948d-5c4a-94b8-4f1675291f68" },
      occurrenceDateTime: "2013-08-03T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:a7f0d243-be3e-3d4b-410b-19f018a7efc3",
    resource: {
      resourceType: "Immunization",
      id: "a7f0d243-be3e-3d4b-410b-19f018a7efc3",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "133",
            display: "Pneumococcal conjugate PCV 13",
          },
        ],
        text: "Pneumococcal conjugate PCV 13",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:fc65bfa2-948d-5c4a-94b8-4f1675291f68" },
      occurrenceDateTime: "2013-08-03T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:d416ed95-0270-dcab-a053-6e2f3edc2986",
    resource: {
      resourceType: "Immunization",
      id: "d416ed95-0270-dcab-a053-6e2f3edc2986",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "83",
            display: "Hep A, ped/adol, 2 dose",
          },
        ],
        text: "Hep A, ped/adol, 2 dose",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:fc65bfa2-948d-5c4a-94b8-4f1675291f68" },
      occurrenceDateTime: "2013-08-03T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:8b14ddc9-b677-43bf-0aa3-97cd1feeb02f",
    resource: {
      resourceType: "Immunization",
      id: "8b14ddc9-b677-43bf-0aa3-97cd1feeb02f",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "20",
            display: "DTaP",
          },
        ],
        text: "DTaP",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:320a4f52-c939-7b82-230f-ca09c203e916" },
      occurrenceDateTime: "2013-11-02T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:2a707e63-4459-675c-a8cd-dcc0b2df80f3",
    resource: {
      resourceType: "Immunization",
      id: "2a707e63-4459-675c-a8cd-dcc0b2df80f3",
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
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:4cab8f47-6515-f6c4-e2c5-10120ea3ab27" },
      occurrenceDateTime: "2014-05-03T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:21ea06c7-920d-df92-4e1c-d00f6fab1d60",
    resource: {
      resourceType: "Immunization",
      id: "21ea06c7-920d-df92-4e1c-d00f6fab1d60",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "83",
            display: "Hep A, ped/adol, 2 dose",
          },
        ],
        text: "Hep A, ped/adol, 2 dose",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:d4bba2ee-e531-6e1d-a66c-78f210d872c2" },
      occurrenceDateTime: "2014-11-01T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:8feb59be-29e5-fd8d-aadf-8fd7d4876c34",
    resource: {
      resourceType: "Immunization",
      id: "8feb59be-29e5-fd8d-aadf-8fd7d4876c34",
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
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:3b0a79d0-de4f-13fc-002e-0f9f18dae9d8" },
      occurrenceDateTime: "2015-05-02T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:bc2257f0-6cef-32f4-4e8d-4336e5848b4d",
    resource: {
      resourceType: "Immunization",
      id: "bc2257f0-6cef-32f4-4e8d-4336e5848b4d",
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
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:084d5dfb-ce03-5cef-5211-473261419102" },
      occurrenceDateTime: "2016-04-30T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:1935f1a0-f293-81a8-2e18-35a29e3c033c",
    resource: {
      resourceType: "Immunization",
      id: "1935f1a0-f293-81a8-2e18-35a29e3c033c",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "21",
            display: "varicella",
          },
        ],
        text: "varicella",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:d5be37a6-4913-47ef-c0b0-475402422fb8" },
      occurrenceDateTime: "2017-05-06T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:67854251-b25a-e0af-64da-e6354bfa25bb",
    resource: {
      resourceType: "Immunization",
      id: "67854251-b25a-e0af-64da-e6354bfa25bb",
      status: "completed",
      vaccineCode: {
        coding: [
          { system: "http://hl7.org/fhir/sid/cvx", code: "10", display: "IPV" },
        ],
        text: "IPV",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:d5be37a6-4913-47ef-c0b0-475402422fb8" },
      occurrenceDateTime: "2017-05-06T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:ec1e8d95-136f-a61e-545c-6ec53885cb67",
    resource: {
      resourceType: "Immunization",
      id: "ec1e8d95-136f-a61e-545c-6ec53885cb67",
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
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:d5be37a6-4913-47ef-c0b0-475402422fb8" },
      occurrenceDateTime: "2017-05-06T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:21677557-648e-356a-b61c-e82d0a75df11",
    resource: {
      resourceType: "Immunization",
      id: "21677557-648e-356a-b61c-e82d0a75df11",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "20",
            display: "DTaP",
          },
        ],
        text: "DTaP",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:d5be37a6-4913-47ef-c0b0-475402422fb8" },
      occurrenceDateTime: "2017-05-06T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:0d5c2c8e-fe84-829c-d060-789e90b3439c",
    resource: {
      resourceType: "Immunization",
      id: "0d5c2c8e-fe84-829c-d060-789e90b3439c",
      status: "completed",
      vaccineCode: {
        coding: [
          { system: "http://hl7.org/fhir/sid/cvx", code: "03", display: "MMR" },
        ],
        text: "MMR",
      },
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:d5be37a6-4913-47ef-c0b0-475402422fb8" },
      occurrenceDateTime: "2017-05-06T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:d16b93ed-4328-806d-436b-f86268f9dd00",
    resource: {
      resourceType: "Immunization",
      id: "d16b93ed-4328-806d-436b-f86268f9dd00",
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
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:076aebca-dc95-7f85-efba-eea53c1b3c4f" },
      occurrenceDateTime: "2018-05-12T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:f81fb034-431e-e3cc-3ee4-33b64ddc038f",
    resource: {
      resourceType: "Immunization",
      id: "f81fb034-431e-e3cc-3ee4-33b64ddc038f",
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
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:95159f5e-7ac7-660f-08a6-be53855e0965" },
      occurrenceDateTime: "2019-05-18T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:0a165530-b948-b746-1cdd-caf09a73447f",
    resource: {
      resourceType: "Immunization",
      id: "0a165530-b948-b746-1cdd-caf09a73447f",
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
      patient: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:f4417ba8-a93f-c31a-9632-230c976332bd" },
      occurrenceDateTime: "2020-05-23T01:51:28-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:029cec81-c005-583e-c375-2cf1f244855b",
    resource: {
      resourceType: "Immunization",
      id: "029cec81-c005-583e-c375-2cf1f244855b",
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
      patient: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:76e38435-dac4-18d8-b193-c5f33a692868" },
      occurrenceDateTime: "2011-06-21T00:29:59-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:be5d6766-5925-957f-76a8-c34d1d1b07f7",
    resource: {
      resourceType: "Immunization",
      id: "be5d6766-5925-957f-76a8-c34d1d1b07f7",
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
      patient: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:745196cb-0d46-2c8e-fb60-a5ddd5477d62" },
      occurrenceDateTime: "2012-06-26T00:29:59-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:af821462-a205-0031-b54e-4f3264257311",
    resource: {
      resourceType: "Immunization",
      id: "af821462-a205-0031-b54e-4f3264257311",
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
      patient: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:40187567-1af0-275a-9fa8-a9286b832f48" },
      occurrenceDateTime: "2013-07-02T00:29:59-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:2a94d0ed-9b4d-792c-6dcf-15e9e31cee13",
    resource: {
      resourceType: "Immunization",
      id: "2a94d0ed-9b4d-792c-6dcf-15e9e31cee13",
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
      patient: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:caeeffef-0c04-ad74-bc0e-80e7732f59e3" },
      occurrenceDateTime: "2014-07-08T00:29:59-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:41b0fdb7-0f1e-858d-0d13-104990e01806",
    resource: {
      resourceType: "Immunization",
      id: "41b0fdb7-0f1e-858d-0d13-104990e01806",
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
      patient: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:bcfae662-a3ee-98f1-d05a-a213ab9cd4fa" },
      occurrenceDateTime: "2015-07-14T00:29:59-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:38694b68-86b6-b316-4a20-64362204cb10",
    resource: {
      resourceType: "Immunization",
      id: "38694b68-86b6-b316-4a20-64362204cb10",
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
      patient: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:65c5e7d1-a74b-b456-2022-3382ed7411d1" },
      occurrenceDateTime: "2016-07-19T00:29:59-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:bca50d61-306a-709b-5e84-516e08586aac",
    resource: {
      resourceType: "Immunization",
      id: "bca50d61-306a-709b-5e84-516e08586aac",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "121",
            display: "zoster",
          },
        ],
        text: "zoster",
      },
      patient: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:bab20c55-05dd-52e7-caf1-0b8caaa61b8a" },
      occurrenceDateTime: "2017-07-25T00:29:59-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:e35b368a-3501-4282-1e17-f0180aa25c85",
    resource: {
      resourceType: "Immunization",
      id: "e35b368a-3501-4282-1e17-f0180aa25c85",
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
      patient: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:bab20c55-05dd-52e7-caf1-0b8caaa61b8a" },
      occurrenceDateTime: "2017-07-25T00:29:59-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:aac65c6d-0721-3ddb-e124-176b4c5cf0e5",
    resource: {
      resourceType: "Immunization",
      id: "aac65c6d-0721-3ddb-e124-176b4c5cf0e5",
      status: "completed",
      vaccineCode: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/cvx",
            code: "121",
            display: "zoster",
          },
        ],
        text: "zoster",
      },
      patient: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:ebd0110c-cba9-5b6a-a6f5-d74103c34877" },
      occurrenceDateTime: "2018-07-31T00:29:59-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:f09f7c21-dbf5-545e-47b4-7f2bee2b23e9",
    resource: {
      resourceType: "Immunization",
      id: "f09f7c21-dbf5-545e-47b4-7f2bee2b23e9",
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
      patient: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:ebd0110c-cba9-5b6a-a6f5-d74103c34877" },
      occurrenceDateTime: "2018-07-31T00:29:59-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:94702e62-ed65-a3cf-1b5e-f11948fa18c9",
    resource: {
      resourceType: "Immunization",
      id: "94702e62-ed65-a3cf-1b5e-f11948fa18c9",
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
      patient: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:ebd0110c-cba9-5b6a-a6f5-d74103c34877" },
      occurrenceDateTime: "2018-07-31T00:29:59-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:b1f325ac-3651-134a-1e96-5f9069be9fb3",
    resource: {
      resourceType: "Immunization",
      id: "b1f325ac-3651-134a-1e96-5f9069be9fb3",
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
      patient: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:645ddc2c-dc5e-ee46-3223-87c06957ea06" },
      occurrenceDateTime: "2019-08-06T00:29:59-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
  {
    fullUrl: "urn:uuid:09585ba4-067b-d1cc-662f-5017d670deca",
    resource: {
      resourceType: "Immunization",
      id: "09585ba4-067b-d1cc-662f-5017d670deca",
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
      patient: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:b3732298-37f5-7ad0-2d56-c12be25af62e" },
      occurrenceDateTime: "2020-08-11T00:29:59-04:00",
      primarySource: true,
    },
    request: { method: "POST", url: "Immunization" },
  },
];

export default entities;
