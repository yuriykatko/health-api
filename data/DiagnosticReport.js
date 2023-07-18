const entities = [
  {
    fullUrl: "urn:uuid:2407fdaa-49c2-1bcf-3cc4-d489b069f9cc",
    resource: {
      resourceType: "DiagnosticReport",
      id: "2407fdaa-49c2-1bcf-3cc4-d489b069f9cc",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "58410-2",
            display:
              "Complete blood count (hemogram) panel - Blood by Automated count",
          },
        ],
        text: "Complete blood count (hemogram) panel - Blood by Automated count",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:b9cfb8a9-eb5a-ff09-141b-ba1f88a66e19" },
      effectiveDateTime: "2012-03-26T20:41:48-04:00",
      issued: "2012-03-26T20:41:48.995-04:00",
      result: [
        {
          reference: "urn:uuid:f1e41049-b717-0e95-60c8-fa7ec5666242",
          display: "Leukocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:db5ca96c-d086-e7c0-3bf7-d6cd12f907cc",
          display: "Erythrocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:845a3b2c-e760-da5f-5894-1bfdc06d133b",
          display: "Hemoglobin [Mass/volume] in Blood",
        },
        {
          reference: "urn:uuid:7359ce8b-5117-bf1e-d8be-1bc4aac3b356",
          display: "Hematocrit [Volume Fraction] of Blood by Automated count",
        },
        {
          reference: "urn:uuid:0b475719-bbb7-1abf-9795-eaaba3cd567b",
          display: "MCV [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:abaa259d-b6ff-45e5-6570-cd57c7c4488b",
          display: "MCH [Entitic mass] by Automated count",
        },
        {
          reference: "urn:uuid:425360ee-a67b-be30-3ea1-b6101f1ebc26",
          display: "MCHC [Mass/volume] by Automated count",
        },
        {
          reference: "urn:uuid:7a00a923-5884-f489-440d-96800fdbb318",
          display:
            "Erythrocyte distribution width [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:f3e348eb-3b60-2cbe-710c-89b94dd17a12",
          display: "Platelets [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:3e1e993c-f1c5-4250-52a5-1a7adebbab9c",
          display:
            "Platelet distribution width [Entitic volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:75567b33-343b-668b-e13f-29b58031ee4a",
          display:
            "Platelet mean volume [Entitic volume] in Blood by Automated count",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:87c14bbc-8bd7-0e75-0069-efdbcf2f9db8",
    resource: {
      resourceType: "DiagnosticReport",
      id: "87c14bbc-8bd7-0e75-0069-efdbcf2f9db8",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:deea69d5-daa1-a1e3-a905-2d5b212b242c" },
      effectiveDateTime: "2014-04-14T20:41:48-04:00",
      issued: "2014-04-14T20:41:48.995-04:00",
      result: [
        {
          reference: "urn:uuid:2bf757d4-4fc7-d70d-0b3b-4331725a2e66",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:09d21911-8bb6-205d-bf37-8fb25c357381",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:05581f9f-fd0b-e7c5-4104-c48b4a51d882",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:6370fa9c-dc80-ee3c-e1a1-3d4d1736a6ed",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:9702a115-b07f-a86d-cbe4-55518211fd2a",
    resource: {
      resourceType: "DiagnosticReport",
      id: "9702a115-b07f-a86d-cbe4-55518211fd2a",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:de9cb9a4-8db9-2397-0bae-e7b3a51b2e18" },
      effectiveDateTime: "2017-05-01T20:41:48-04:00",
      issued: "2017-05-01T20:41:48.995-04:00",
      result: [
        {
          reference: "urn:uuid:aa06ebc9-7f36-6338-00ca-f97f933c268a",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:29e4cfca-459c-1ae3-4041-1695c113adb1",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:fd13fdcd-9f38-47d5-ebb1-bc743bc357d5",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:0aadf0de-6e54-a9bd-0138-4e2d0ba309a3",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:ee282cba-ccde-60a0-3092-8cc03084aa20",
    resource: {
      resourceType: "DiagnosticReport",
      id: "ee282cba-ccde-60a0-3092-8cc03084aa20",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "58410-2",
            display:
              "Complete blood count (hemogram) panel - Blood by Automated count",
          },
        ],
        text: "Complete blood count (hemogram) panel - Blood by Automated count",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:de9cb9a4-8db9-2397-0bae-e7b3a51b2e18" },
      effectiveDateTime: "2017-05-01T20:41:48-04:00",
      issued: "2017-05-01T20:41:48.995-04:00",
      result: [
        {
          reference: "urn:uuid:3302836f-26b4-492b-ea0f-6314beda6d7c",
          display: "Leukocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:ac10959e-d103-5a87-480b-a0a6dca2918c",
          display: "Erythrocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:1aec53bd-386d-dc45-a0cf-cea95dbad31b",
          display: "Hemoglobin [Mass/volume] in Blood",
        },
        {
          reference: "urn:uuid:b264e10f-3345-6456-41eb-898d8df0ab23",
          display: "Hematocrit [Volume Fraction] of Blood by Automated count",
        },
        {
          reference: "urn:uuid:2c136ace-3931-d0e1-f048-371a607f3021",
          display: "MCV [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:0b19e775-78ef-d032-455e-214c58046130",
          display: "MCH [Entitic mass] by Automated count",
        },
        {
          reference: "urn:uuid:4f780639-c85b-73f2-2fe5-db7728178e52",
          display: "MCHC [Mass/volume] by Automated count",
        },
        {
          reference: "urn:uuid:6a4112db-fab4-4398-7258-55b13b6d7211",
          display:
            "Erythrocyte distribution width [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:b665d19e-f5eb-821f-61d2-4271332bd046",
          display: "Platelets [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:13719793-cfa4-9af9-aa15-b2733bd7ae38",
          display:
            "Platelet distribution width [Entitic volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:1fca231e-089a-ea42-b1af-0adf076677e8",
          display:
            "Platelet mean volume [Entitic volume] in Blood by Automated count",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:0c26a72a-da26-200e-c53c-1b5873e60109",
    resource: {
      resourceType: "DiagnosticReport",
      id: "0c26a72a-da26-200e-c53c-1b5873e60109",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:7ae1e037-edba-27ec-f8b1-d85e847b178b" },
      effectiveDateTime: "2018-05-07T20:41:48-04:00",
      issued: "2018-05-07T20:41:48.995-04:00",
      result: [
        {
          reference: "urn:uuid:7d5e1bb1-faae-c694-ea0f-6cf6cb96b7b1",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:63343fb8-6881-bcd5-fd70-31605b9b393c",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:7a76fcf5-beb2-73ec-4a6a-086ccae06609",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:8e98a034-b244-ed7c-f1e7-e224e526d1dd",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:a83b6132-3fb3-0cf5-13c1-6d98f5929d5e",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:776a395c-eac4-2107-f1ee-d7497cf15ea2",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:7ec1e2db-83cf-1051-afcf-89c5031d7f03",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:d87c43d5-2aa6-1d5d-9f89-d4968ad92234",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:4bb323ab-a9ad-2c4d-02b9-cb0e914ef0c2",
    resource: {
      resourceType: "DiagnosticReport",
      id: "4bb323ab-a9ad-2c4d-02b9-cb0e914ef0c2",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:dffa5599-732b-b905-dab9-d554f75cafc0" },
      effectiveDateTime: "2019-05-13T20:41:48-04:00",
      issued: "2019-05-13T20:41:48.995-04:00",
      result: [
        {
          reference: "urn:uuid:83e60efe-a69d-9cbd-7c23-bfc1f530c928",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:277ea97e-8ca3-9477-874b-273cb658b087",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:4574d2f4-6dca-e88b-615e-dfc60c9037e0",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:6fcb9a5d-c9ae-8f8b-4d8f-83829823af62",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:682d3962-1504-d32b-ee60-be1c890be134",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:6ddd2e95-9bfd-9738-5c7c-baa251deb385",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:623b37fb-24c9-9bc8-ffb6-0baafd5f57e1",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:3b1cf1ca-7917-2eb2-4f7d-71c08d119bc6",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:a8c637d7-f969-68af-3966-acaf49a2198f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "a8c637d7-f969-68af-3966-acaf49a2198f",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:fb398b98-559f-e8de-e309-e9af6e4408b0" },
      effectiveDateTime: "2020-05-18T20:41:48-04:00",
      issued: "2020-05-18T20:41:48.995-04:00",
      result: [
        {
          reference: "urn:uuid:a12ef57c-3975-6b3e-e5cc-e5d207ea7d9a",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:5f0ff846-c6d9-2dbf-aeac-218e2e1a8e13",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:dcf29323-b47f-5c4e-5523-fb2e999236dd",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:8fc73500-6e41-a047-5c98-c8e538890e05",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:4ca09e37-5308-8fa0-b348-80c7514b9c22",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:176b2315-2845-9717-658e-28f605e273a9",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:a9771298-6fe4-d3aa-8e29-a6022242e980",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:827c457b-28fe-8f4c-e5cb-8b8b677a42d0",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e55b8873-2199-1d94-4c5a-0bb822e8b33a",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e55b8873-2199-1d94-4c5a-0bb822e8b33a",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27" },
      encounter: { reference: "urn:uuid:fb398b98-559f-e8de-e309-e9af6e4408b0" },
      effectiveDateTime: "2020-05-18T20:41:48-04:00",
      issued: "2020-05-18T20:41:48.995-04:00",
      result: [
        {
          reference: "urn:uuid:cc99196e-93d7-54d5-45fa-d32afbfd6c1f",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:eb2f5cab-1738-cf39-0464-9d9339548d9d",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:c9a5eda6-ff1c-e7fc-8a04-61f28afb10bd",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:823e1322-ce47-d8e5-e795-2f9f1ec1eb07",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:98d67321-3887-a967-3c00-52d0da01a752",
    resource: {
      resourceType: "DiagnosticReport",
      id: "98d67321-3887-a967-3c00-52d0da01a752",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:b23d579b-42b8-4736-1460-57fd15996dab" },
      effectiveDateTime: "2012-05-22T13:20:13-04:00",
      issued: "2012-05-22T13:20:13.058-04:00",
      result: [
        {
          reference: "urn:uuid:5ba5658d-4e60-30c4-5d47-b182ce4880ef",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:3cd9a44a-60b6-0a6f-cfbf-3de38f06c8c9",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:3a818a64-c2d4-4790-e1b5-b8397f4a2bc7",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:8e3ff2f0-e76e-81a0-3f47-3443a91ee30f",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:e9bbf924-fd93-330a-8367-7f227758c26b",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:2aad6e60-0fb1-8ed9-9f1a-aef41ce5b919",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:142c2c6b-fcf8-9fb3-9db4-88bfbf870bde",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:cc2bc806-1314-e205-b30d-e09a521b9c61",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5214fa2b-0d53-2f2c-0d09-b9327d38cfab",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5214fa2b-0d53-2f2c-0d09-b9327d38cfab",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:97384d24-2651-7ed3-7ee2-3b7271b52c84" },
      effectiveDateTime: "2013-05-28T13:20:13-04:00",
      issued: "2013-05-28T13:20:13.058-04:00",
      result: [
        {
          reference: "urn:uuid:98ed907a-61c4-ce5d-807f-6543091dea84",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:450542af-f390-4878-d4b7-b0092dda83ae",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:e957d5c2-6deb-1fdb-1cfe-5e626a0ce511",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:af5a59a1-5b1d-caf3-3857-e985fb916580",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:f69c2d51-a7db-9d4c-2242-04788f74461e",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:3aff73f3-ba1e-3247-45ed-c2b3c79b7e34",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:4a955601-6540-4f0a-79a3-0504b220f044",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:692692d4-5b90-6fb7-48f3-50b29b725c5e",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5080681c-3f5d-31ce-c99a-d4dff7a96e39",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5080681c-3f5d-31ce-c99a-d4dff7a96e39",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:1ff62490-60ba-a6bc-5ef1-f45cd481c204" },
      effectiveDateTime: "2014-06-03T13:20:13-04:00",
      issued: "2014-06-03T13:20:13.058-04:00",
      result: [
        {
          reference: "urn:uuid:4e00ee38-3970-b0fe-4b3a-2b8617710444",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:b7567e39-8a61-360f-59e7-167a208d16c4",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:53b61152-bff6-3f8d-e3e1-4486b600e383",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:b629f2fa-d6ad-1ff9-566d-e1dd2b47e4f4",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:7c40a6f4-d9fb-0a1b-8158-02cd0883319f",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:095e3d8c-5e53-09f0-0216-dbb23e262035",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:3d18281f-08de-18e2-2745-130e23c098e4",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:85db51df-8723-c139-2d38-91f37e0ca7ec",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:8b05dc3c-e0a6-d445-7ddd-c4d64f7bc25e",
    resource: {
      resourceType: "DiagnosticReport",
      id: "8b05dc3c-e0a6-d445-7ddd-c4d64f7bc25e",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:1ff62490-60ba-a6bc-5ef1-f45cd481c204" },
      effectiveDateTime: "2014-06-03T13:20:13-04:00",
      issued: "2014-06-03T13:20:13.058-04:00",
      result: [
        {
          reference: "urn:uuid:1ed480d7-99d5-04d1-e79c-76a2ecaa2572",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:f10f432e-6ad2-7b0d-15e5-0d7a3b4c8694",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:643feca7-1aa1-da0b-cb8f-f40c01cc2bbd",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:1ff1686f-8416-5f18-efa0-ca8a33cdc039",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:3a2d044a-b904-12c6-0a5c-093043066d97",
    resource: {
      resourceType: "DiagnosticReport",
      id: "3a2d044a-b904-12c6-0a5c-093043066d97",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:b2d6bd8b-aa30-e716-4644-05746420f2fa" },
      effectiveDateTime: "2015-06-09T13:20:13-04:00",
      issued: "2015-06-09T13:20:13.058-04:00",
      result: [
        {
          reference: "urn:uuid:bf3a9d3d-76c3-050f-e03f-396dbd7991bb",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:4fdc521a-a985-5333-c09a-13e6b523fa52",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:98dd9e8a-8237-5983-8598-1e06e0e21b0e",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:86901aa9-f0b9-9463-636f-6ec7bf225f2a",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:01526f5d-95d1-c220-21b1-bcf40966570a",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:516df477-65cb-9044-56df-a3e7be6f17b3",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:e8ad8d0f-ebe6-4a2a-f164-f0999a8b9d7c",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:1e5b663b-45d6-5cd4-099e-3adbce5e2606",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:7df278bc-f950-0c95-981b-2491e7a27e40",
    resource: {
      resourceType: "DiagnosticReport",
      id: "7df278bc-f950-0c95-981b-2491e7a27e40",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:755e691d-d380-cc01-6e77-82ed05ebe841" },
      effectiveDateTime: "2016-06-14T13:20:13-04:00",
      issued: "2016-06-14T13:20:13.058-04:00",
      result: [
        {
          reference: "urn:uuid:86fe9b66-8b81-deea-adec-cf4cd64da09e",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:8ed2de03-ecbf-160f-0cd7-cc5bae678861",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:732e098d-97f6-22b9-cad4-673101b7336f",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:bb273129-d45d-f3ad-2f6e-7007b87fb3c8",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:674aaa6e-8ea0-67d3-27ba-6e7c53820f33",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:53f99a4b-ae4e-234c-8087-530876526c73",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:6a3aec27-aa12-21c9-133b-3cc8a3b65fb8",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:9f821749-b4db-9a1a-c790-5787ce370a58",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:01d739d3-b3b7-3a73-05bd-bb9623dccbb5",
    resource: {
      resourceType: "DiagnosticReport",
      id: "01d739d3-b3b7-3a73-05bd-bb9623dccbb5",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "58410-2",
            display:
              "Complete blood count (hemogram) panel - Blood by Automated count",
          },
        ],
        text: "Complete blood count (hemogram) panel - Blood by Automated count",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:755e691d-d380-cc01-6e77-82ed05ebe841" },
      effectiveDateTime: "2016-06-14T13:20:13-04:00",
      issued: "2016-06-14T13:20:13.058-04:00",
      result: [
        {
          reference: "urn:uuid:1e52567a-328a-0705-cc33-15f84a8901be",
          display: "Leukocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:56eb35e8-5f10-6959-b093-4c3a951731a2",
          display: "Erythrocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:82959b4d-24c2-1741-9f4d-eeaa071d2d7a",
          display: "Hemoglobin [Mass/volume] in Blood",
        },
        {
          reference: "urn:uuid:13f6ac4f-86cc-acdd-62ad-78d48d90a530",
          display: "Hematocrit [Volume Fraction] of Blood by Automated count",
        },
        {
          reference: "urn:uuid:0540372a-1907-f20e-e81b-40c82be0f114",
          display: "MCV [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:386c818c-277d-c991-f43c-3a90398ee913",
          display: "MCH [Entitic mass] by Automated count",
        },
        {
          reference: "urn:uuid:982da1bf-2b99-7d4f-bc17-effcfb0e7b29",
          display: "MCHC [Mass/volume] by Automated count",
        },
        {
          reference: "urn:uuid:2816c60d-4c0e-fbf2-3850-b0a84786b514",
          display:
            "Erythrocyte distribution width [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:2a080e5f-0c7f-dbbb-a260-3e37251c3549",
          display: "Platelets [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:444bdc27-3bed-3692-813c-78de9fbd372b",
          display:
            "Platelet distribution width [Entitic volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:a15ebc7f-2a62-b35e-9efb-d02a0a25ae7a",
          display:
            "Platelet mean volume [Entitic volume] in Blood by Automated count",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:b31e7737-83f7-1ef2-0e2f-1bb84e240837",
    resource: {
      resourceType: "DiagnosticReport",
      id: "b31e7737-83f7-1ef2-0e2f-1bb84e240837",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:a823a37c-4473-6937-7b22-491d54d2f9ce" },
      effectiveDateTime: "2017-06-20T13:20:13-04:00",
      issued: "2017-06-20T13:20:13.058-04:00",
      result: [
        {
          reference: "urn:uuid:58dd0dbc-a889-e31b-0bd8-35fa2bc6c49a",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:0553b10d-94d9-b995-2a34-001b995aefba",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:c7d2cd19-0ebe-ac47-da45-6c3f55d1e553",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:b812062f-51de-1b46-a73f-8345e4c846cb",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:f78a4ac1-b4d7-bcb9-8b5a-0c9bdadcd8c1",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:71b02b4a-ab43-e0f0-54ae-82c13523373e",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:5da14c6d-4249-63bb-b951-4c03dd91192a",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:92345758-9190-def9-e6bf-3b908637d700",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:66455362-648f-3b00-2de1-9cbef0054fd6",
    resource: {
      resourceType: "DiagnosticReport",
      id: "66455362-648f-3b00-2de1-9cbef0054fd6",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:a823a37c-4473-6937-7b22-491d54d2f9ce" },
      effectiveDateTime: "2017-06-20T13:20:13-04:00",
      issued: "2017-06-20T13:20:13.058-04:00",
      result: [
        {
          reference: "urn:uuid:d26d0c73-f89f-f26f-b3b3-9eae640328c5",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:644c5c36-f600-b4da-41fb-5a416fd14f35",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:910eaa56-cf46-a246-841d-dc94f1481c3f",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:8a689f24-9043-9ba0-78fc-e75d250d8eb4",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5ca5dd2c-f959-14b4-b88f-abf942cbda5a",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5ca5dd2c-f959-14b4-b88f-abf942cbda5a",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:28baf1b2-6f5d-054d-e0da-62bbb994db96" },
      effectiveDateTime: "2018-06-26T13:20:13-04:00",
      issued: "2018-06-26T13:20:13.058-04:00",
      result: [
        {
          reference: "urn:uuid:06b40e59-92b4-7c6f-23c6-bb9574762ae0",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:e2e726bd-4db5-07dc-aa9b-4ac33f5b7766",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:491eda97-0736-52c4-3183-9773fc18984d",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:d44f7612-8aa8-bdde-372a-0ec076fbd7a6",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:a81c3a68-8ac8-ce71-09e6-2f1a2b742b95",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:66e9f886-e5aa-5e2a-bce8-5d909c061c43",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:40ae31ed-14a6-7430-f7f7-4b51fcd49518",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:6f14e3d8-7a25-1b75-da5f-af716d49152a",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:11e39527-7ddf-0c42-e5e3-5f1e8a841662",
    resource: {
      resourceType: "DiagnosticReport",
      id: "11e39527-7ddf-0c42-e5e3-5f1e8a841662",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:b5bc2af5-85de-c60e-6c01-9eeaea50c324" },
      effectiveDateTime: "2019-07-02T13:20:13-04:00",
      issued: "2019-07-02T13:20:13.058-04:00",
      result: [
        {
          reference: "urn:uuid:edde4237-cb3b-1fc8-cb26-0ca69c5b274e",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:ac89408e-7a63-d96d-7b4e-8b9420d9ab52",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:fdcf2451-cc0b-1724-e69d-4aab0bebfb38",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:cf8e8c0d-5a53-860c-8338-28f69f05e45a",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:b7e7fb71-bdc5-5bc5-0217-aa5caa8d13f0",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:b469dbc2-8f94-58fd-e597-08944029edc6",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:bd519e72-c8aa-e14b-c005-d0751cc29a2f",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:e8e9e60b-d3ae-3c3b-085f-8f73ae447f39",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:a1afdb41-cc9f-b1e3-7ebe-fb9985435f92",
    resource: {
      resourceType: "DiagnosticReport",
      id: "a1afdb41-cc9f-b1e3-7ebe-fb9985435f92",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "92143-7",
            display:
              "Respiratory pathogens DNA and RNA panel - Respiratory specimen by NAA with probe detection",
          },
        ],
        text: "Respiratory pathogens DNA and RNA panel - Respiratory specimen by NAA with probe detection",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:daf8c623-5248-d1a4-b4ef-744ae92d1cff" },
      effectiveDateTime: "2020-03-04T12:32:22-05:00",
      issued: "2020-03-04T12:32:22.058-05:00",
      result: [
        {
          reference: "urn:uuid:900d9e89-ae37-d771-d76f-b0d98edff806",
          display:
            "Influenza virus A RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:76ea1d64-b53b-b89f-e5ae-79ff113ce794",
          display:
            "Influenza virus B RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:721d0036-d0f3-55d0-64c1-c959414f0c87",
          display:
            "Respiratory syncytial virus RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:00c69a94-2f6d-86fb-2735-18a719f41796",
          display:
            "Parainfluenza virus 1 RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:0d1eccc6-3f62-64e2-9293-e08b55f55225",
          display:
            "Parainfluenza virus 2 RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:dee9ed37-d5da-80aa-77fb-3a91514931fe",
          display:
            "Parainfluenza virus 3 RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:31086417-1559-80ae-3595-1f6f632df441",
          display:
            "Rhinovirus RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:e6f1dd35-1855-368f-fb92-c58dc75e7399",
          display:
            "Human metapneumovirus RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:60973430-8bbf-828f-e48f-e3c8b301adb0",
          display:
            "Adenovirus A+B+C+D+E DNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:99ead08c-cfcc-c7a5-c82b-86bbb24fce1c",
    resource: {
      resourceType: "DiagnosticReport",
      id: "99ead08c-cfcc-c7a5-c82b-86bbb24fce1c",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "94531-1",
            display: "SARS-CoV-2 RNA Pnl Resp NAA+probe",
          },
        ],
        text: "SARS-CoV-2 RNA Pnl Resp NAA+probe",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:daf8c623-5248-d1a4-b4ef-744ae92d1cff" },
      effectiveDateTime: "2020-03-04T14:00:02-05:00",
      issued: "2020-03-04T14:00:02.058-05:00",
      result: [
        {
          reference: "urn:uuid:35347ed5-3bfa-981f-ffa0-dc747708abe4",
          display: "SARS-CoV-2 RNA Pnl Resp NAA+probe",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:dea13153-0608-80b4-0168-2e84a0929681",
    resource: {
      resourceType: "DiagnosticReport",
      id: "dea13153-0608-80b4-0168-2e84a0929681",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:cbf7e79f-07fa-2b7f-00d5-3ac6f9abf03b" },
      effectiveDateTime: "2020-07-07T13:20:13-04:00",
      issued: "2020-07-07T13:20:13.058-04:00",
      result: [
        {
          reference: "urn:uuid:45298a32-54eb-5fb6-b24e-37f3b6af1bb8",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:45b8ed3b-4d8c-5d5c-c79e-af932e90137d",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:13f2ab10-c478-6ee8-4814-baa6846aa94c",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:88368c46-2e12-ea22-831c-d7bc82565a62",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:bbbf7d73-5fae-18fc-d8c5-8a719a6e656a",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:4187215b-2eec-cae2-104b-b438a503adea",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:3acde150-429b-2756-8a0d-355b0944e2ff",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:7f691fd5-64a9-95bb-2316-1a3f29b5dd4d",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:fe623e36-3a56-0704-bc74-08f075c1cbae",
    resource: {
      resourceType: "DiagnosticReport",
      id: "fe623e36-3a56-0704-bc74-08f075c1cbae",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:29ee0922-257f-c9bb-6baf-ed2200df0cc0" },
      encounter: { reference: "urn:uuid:cbf7e79f-07fa-2b7f-00d5-3ac6f9abf03b" },
      effectiveDateTime: "2020-07-07T13:20:13-04:00",
      issued: "2020-07-07T13:20:13.058-04:00",
      result: [
        {
          reference: "urn:uuid:3fef7184-744d-ce70-18fc-d8eb75ea6830",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:f6f50031-fafb-6920-d506-62c9a987ea36",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:9d087c4f-d026-7c57-f5d3-0eaf78d4a0d1",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:f3434094-6bd8-2259-3361-9f191c526348",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:40ef07a2-d003-e2c3-7334-33b0c9ec32ee",
    resource: {
      resourceType: "DiagnosticReport",
      id: "40ef07a2-d003-e2c3-7334-33b0c9ec32ee",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:50ef9164-70ca-f2d7-07f1-d4abfdea0b1c" },
      effectiveDateTime: "2011-08-30T05:03:37-04:00",
      issued: "2011-08-30T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:0fdc0e07-4f8a-cdb2-df24-c9ba09f528db",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:52a13ff9-24f1-3487-5ec2-644d927fac2b",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:f350c231-7b11-74b5-88cc-e735702ca95b",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:d54cc799-235b-036e-7f43-c84f111c9f94",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:ccdee4ac-48ab-2d15-5d15-435fe3bd481d",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:82f2cd6c-e169-2e24-b4a1-cb27e2c8b3dc",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:f2ea7e98-f3d0-764f-78dc-f7affbda3d1c",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:c1ef461e-f3f9-79ea-b35e-85e5ceba5190",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:a10e423d-d06d-0212-36cf-5d1c7df701e2",
    resource: {
      resourceType: "DiagnosticReport",
      id: "a10e423d-d06d-0212-36cf-5d1c7df701e2",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:50ef9164-70ca-f2d7-07f1-d4abfdea0b1c" },
      effectiveDateTime: "2011-08-30T05:03:37-04:00",
      issued: "2011-08-30T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:7d665ece-c153-b587-a3cb-3c6c160e5897",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:75671351-9f49-c7e3-a326-c9ac112a39c1",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:837b9c5a-0cf2-c602-151c-ef2ec6954791",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:2cd52e19-1842-2d97-1361-8e2f37ac9284",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:0b95fd44-abf8-6902-7ab5-3f5fe9e4eb11",
    resource: {
      resourceType: "DiagnosticReport",
      id: "0b95fd44-abf8-6902-7ab5-3f5fe9e4eb11",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:99f18d72-6250-803d-d184-ac551d722f22" },
      effectiveDateTime: "2011-09-20T05:03:37-04:00",
      issued: "2011-09-20T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:4f01b59b-c48a-e72e-6dc4-445d0d91a082",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:e9a05a1d-c609-7954-c63a-7da0d5ba125e",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:7ca2d6c1-767d-0bdb-7834-e0d6d5fe5597",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:177bf195-a779-abfe-ad3e-cf459c71949d",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:850adcbf-f415-b6a8-bacc-be9bac8ea080",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:848c1c6b-0304-f95a-b186-11fe5121566d",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:e8de57fb-9eca-7d51-e42a-f05ef8225978",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:56a68a89-7199-60e7-09d0-ac13dfee249b",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:d2e84933-7d1c-983c-d3de-b90bc30b6fbc",
    resource: {
      resourceType: "DiagnosticReport",
      id: "d2e84933-7d1c-983c-d3de-b90bc30b6fbc",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:99f18d72-6250-803d-d184-ac551d722f22" },
      effectiveDateTime: "2011-09-20T05:03:37-04:00",
      issued: "2011-09-20T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:92a2468a-c91f-6339-87c4-8fa7fc4cb8fe",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:8b2e00d1-fcfa-0609-440e-23ec954f6c78",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:1df096b7-8341-69e6-4f87-4352fe5e9c55",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:1bfc8399-67a2-488a-7f11-8e7ba9294859",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:84294587-b5be-457a-12d2-eb78aaff7027",
    resource: {
      resourceType: "DiagnosticReport",
      id: "84294587-b5be-457a-12d2-eb78aaff7027",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:d7ddd152-8248-ef30-be7b-3e7bdf41a436" },
      effectiveDateTime: "2011-12-27T04:03:37-05:00",
      issued: "2011-12-27T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:6b4336b0-f2cf-a747-2a0a-7ce8b6616031",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:53752c89-7ada-3a4e-ec9e-a305ec67674d",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:2715f9aa-583a-6f4f-ec44-1b32c6927623",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:d6cf0302-f979-ac19-4252-35cbd37ceddf",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:912b5720-2137-0916-fd86-e45966797773",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:7011e49f-5b0c-b8b0-0ac7-972595345398",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:a00823dc-215a-00f0-1d99-e01188cb2712",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:8f8927ee-7780-ab68-6d02-eea76cdec737",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:a6ed958a-41bb-15f7-5282-a807ffaa48fc",
    resource: {
      resourceType: "DiagnosticReport",
      id: "a6ed958a-41bb-15f7-5282-a807ffaa48fc",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:d7ddd152-8248-ef30-be7b-3e7bdf41a436" },
      effectiveDateTime: "2011-12-27T04:03:37-05:00",
      issued: "2011-12-27T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:b9084ad7-2baf-0f53-ccda-396b6d56cab1",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:cff5e8f5-a93e-19fa-2f8c-e87520c6e282",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:a38fdfbf-c33c-f958-e614-d5425de23f48",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:00aec3ae-8c3a-4d00-0cbf-33c83e6986c2",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:0666853e-0d01-8cc6-e8a7-135450eb66d8",
    resource: {
      resourceType: "DiagnosticReport",
      id: "0666853e-0d01-8cc6-e8a7-135450eb66d8",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "58410-2",
            display:
              "Complete blood count (hemogram) panel - Blood by Automated count",
          },
        ],
        text: "Complete blood count (hemogram) panel - Blood by Automated count",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:d7ddd152-8248-ef30-be7b-3e7bdf41a436" },
      effectiveDateTime: "2011-12-27T04:03:37-05:00",
      issued: "2011-12-27T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:9d0c5e85-099d-387d-dbb2-516f8d3dc944",
          display: "Leukocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:7a1d8c99-b4ef-e6e7-9d64-c00f2fedee8e",
          display: "Erythrocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:1fecc4d9-57fe-0452-e2a6-b24cb4ddefd9",
          display: "Hemoglobin [Mass/volume] in Blood",
        },
        {
          reference: "urn:uuid:c3c79dec-bb1a-785a-f0f1-24695b587000",
          display: "Hematocrit [Volume Fraction] of Blood by Automated count",
        },
        {
          reference: "urn:uuid:f157917f-d678-24ca-a903-25d41ba37d56",
          display: "MCV [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:743be4f0-2db3-b23f-2d99-5306a203e8ed",
          display: "MCH [Entitic mass] by Automated count",
        },
        {
          reference: "urn:uuid:a38ce942-6f1b-030f-8842-9890d3084e15",
          display: "MCHC [Mass/volume] by Automated count",
        },
        {
          reference: "urn:uuid:843ec656-463e-7066-6355-936f12fe8e23",
          display:
            "Erythrocyte distribution width [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:d409455c-7b76-35b2-0c6b-229eff5ec473",
          display: "Platelets [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:7edd4e86-7fc8-ae40-ebf7-fdf73c22f6af",
          display:
            "Platelet distribution width [Entitic volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:4c480dfe-fc44-4927-ede8-663188b30550",
          display:
            "Platelet mean volume [Entitic volume] in Blood by Automated count",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f88e3581-6e84-ff54-a531-bae0a8a091ae",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f88e3581-6e84-ff54-a531-bae0a8a091ae",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:939ccc5b-c14c-b790-f9eb-0a5a1de1a365" },
      effectiveDateTime: "2012-01-24T04:03:37-05:00",
      issued: "2012-01-24T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:c814975a-dab8-aa23-ad66-a5b32f4d0d6a",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:cbb239c3-0a70-4b6d-9a7a-4a1025c87ba1",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:5e07c7fe-14fa-a27a-444b-db40fecea33c",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:63087a72-647b-4bed-7058-fd1febcab613",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:7c3690da-89a9-9b39-eb0a-aa00df79da43",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:98b36a5d-92bc-d31e-56bf-dae070838052",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:eeb08add-8cc4-e273-f4dd-fed8f7be7796",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:735b218e-964b-a926-902c-f5dc328864d6",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:ec397112-52af-334f-a8e3-2789ca009119",
    resource: {
      resourceType: "DiagnosticReport",
      id: "ec397112-52af-334f-a8e3-2789ca009119",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:939ccc5b-c14c-b790-f9eb-0a5a1de1a365" },
      effectiveDateTime: "2012-01-24T04:03:37-05:00",
      issued: "2012-01-24T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:25e0e4c7-ad57-0981-f1eb-82a01fcb7f31",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:2cc6571b-b5a4-49ae-4064-67d741a8b73e",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:f7b3c9aa-0a79-897d-cd9b-a4a3947aac74",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:045fafb4-41f2-5063-6a2e-8448b84814cc",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f784da1c-9910-499b-d23b-ca60f9028771",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f784da1c-9910-499b-d23b-ca60f9028771",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:672c4867-346a-935b-fd24-8beb050c8510" },
      effectiveDateTime: "2012-02-14T04:03:37-05:00",
      issued: "2012-02-14T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:6af9d02a-65f5-4e57-03bd-728601d17954",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:5e2bf011-9de0-e472-39ae-84b24e5c11d0",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:0d715919-54bf-9a18-0773-4b17ef402680",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:539e22e4-44fc-2084-0575-5e2fbe762488",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:41421aff-e7e4-2cbd-63af-0fa09a512bf9",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:91bcb236-d7cd-fc63-c59d-09afb7922c2e",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:ad11eb25-2e8a-e2ac-db65-f1f18965e279",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:99071e0a-6607-21a8-e5cd-03496af19eff",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:c044c18d-101f-cff0-38d5-6a879d93c516",
    resource: {
      resourceType: "DiagnosticReport",
      id: "c044c18d-101f-cff0-38d5-6a879d93c516",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:672c4867-346a-935b-fd24-8beb050c8510" },
      effectiveDateTime: "2012-02-14T04:03:37-05:00",
      issued: "2012-02-14T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:dd27a5df-8837-93cc-625f-d30cf1ecf3e0",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:6ebecab0-0e79-e9ad-879e-b5884904b29a",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:6cd57d21-2794-800b-b0e2-75a7f5a5dbae",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:ce17b750-f2cf-1211-06b9-53eeb5956484",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f7f95b4a-207c-2ce5-9083-cf52e88fa139",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f7f95b4a-207c-2ce5-9083-cf52e88fa139",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:63bc277f-d84d-b0cf-c01a-e775745f44b3" },
      effectiveDateTime: "2012-02-28T04:03:37-05:00",
      issued: "2012-02-28T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:285c0e12-b645-d890-d9a6-148ca431c9f6",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:4cfd7217-7e77-842e-8c4f-1c5ff3b41c58",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:5ba15255-551f-8035-c7bd-4f53d39c1810",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:24d5d4cf-c68f-a322-e921-e8a58ded22f6",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:509043b0-a054-9ed0-6d5d-6b5e99f83636",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:6230225a-31e5-f1fa-ac96-0f806575157b",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:0cf5ffb9-c1a4-edfe-12ab-4e7a40d55449",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:1a6499e2-0e9f-d4e3-cff1-42e348f7cdaa",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:25091fda-5d7c-0c38-b6e0-4750529b18c5",
    resource: {
      resourceType: "DiagnosticReport",
      id: "25091fda-5d7c-0c38-b6e0-4750529b18c5",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:63bc277f-d84d-b0cf-c01a-e775745f44b3" },
      effectiveDateTime: "2012-02-28T04:03:37-05:00",
      issued: "2012-02-28T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:ac5826d8-5b5a-539d-3d15-cf6751a9720c",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:5508d6ab-2a2c-dc8f-a4bc-c0fba3ca8f69",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:44eae2c7-0ce0-a650-a47f-605895bdf7a8",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:2aafbe8a-3746-52b1-60cf-26a7ff39a943",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:df9f5c49-59cd-ab4e-bb4b-994c5ed74b4e",
    resource: {
      resourceType: "DiagnosticReport",
      id: "df9f5c49-59cd-ab4e-bb4b-994c5ed74b4e",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:b6f1209a-1e9f-24bb-1513-890282e5c0d0" },
      effectiveDateTime: "2012-03-20T05:03:37-04:00",
      issued: "2012-03-20T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:7671ac65-d8f6-155d-11ae-b715ca896c8d",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:f06269a3-7049-4b6f-f9a6-8b1c0c711371",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:21710538-6c00-ffe7-d9e3-f9c533eb1d3b",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:6009188f-e148-9c89-04ee-a3f706f9284b",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:93882fbd-3a27-52f9-e2fd-24e27f2866d7",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:518f4687-8e02-5639-1ec4-272e8eba5e0e",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:d94682c9-144a-a870-4905-1978ed77f381",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:f771bff8-bb13-80ed-99ef-35fbcddd6cbe",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:70eba5a2-9ca7-ce40-78b1-705e5c07ad96",
    resource: {
      resourceType: "DiagnosticReport",
      id: "70eba5a2-9ca7-ce40-78b1-705e5c07ad96",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:b6f1209a-1e9f-24bb-1513-890282e5c0d0" },
      effectiveDateTime: "2012-03-20T05:03:37-04:00",
      issued: "2012-03-20T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:9509c005-5b9a-8e6a-c95c-d18b6514453e",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:f8f71563-c79b-9994-2922-25c76819fe80",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:09c91a6a-ffdd-4bca-8e42-0a8d44c14e75",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:1f1489df-56fd-1e25-2a30-52afd02d501e",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:d71e597a-931a-bbd7-3327-e37e842f444c",
    resource: {
      resourceType: "DiagnosticReport",
      id: "d71e597a-931a-bbd7-3327-e37e842f444c",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:3d3c4ce1-c970-b589-2e9d-a07e86682a2d" },
      effectiveDateTime: "2012-05-15T05:03:37-04:00",
      issued: "2012-05-15T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:69a1f064-d9a8-80e2-0c0d-ede57d08f479",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:73cebc2d-e5ab-1024-1a00-99d1a4af52e0",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:65088c6b-cc63-b28a-4cdb-241c325a0f9b",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:abf16ddd-8f7f-2b03-2863-c08510dbf242",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:00f5a964-d1f2-b627-4824-98f1129a3aec",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:99b6dcd6-b054-1478-04d1-445cc78f8018",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:21cf4d12-2a31-74eb-f518-390ee30406d0",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:22afc554-6b9f-03a6-01dc-ae0f47b0f90b",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:0902f0bd-6d74-4558-fb2a-2926a1e39f04",
    resource: {
      resourceType: "DiagnosticReport",
      id: "0902f0bd-6d74-4558-fb2a-2926a1e39f04",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:3d3c4ce1-c970-b589-2e9d-a07e86682a2d" },
      effectiveDateTime: "2012-05-15T05:03:37-04:00",
      issued: "2012-05-15T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:adab97c9-dd48-2109-e4a8-9fd4bc761e52",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:006b9365-e9ae-84f2-57ed-ec43541ffaa7",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:e63a02f5-3021-d23d-aea8-b9d5223677a1",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:85270970-7d9e-5e89-1364-9e15bbaa7bdb",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f47e3060-b28d-7ab4-0337-c382c27819c8",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f47e3060-b28d-7ab4-0337-c382c27819c8",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:321ea008-be26-7daf-839c-849600a6262a" },
      effectiveDateTime: "2012-06-26T05:03:37-04:00",
      issued: "2012-06-26T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:ae7d1026-2144-a693-228d-b5c3a015ba32",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:dbbdd74d-4b8f-37c8-0eaa-11dad1b8c49b",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:823b77b4-92e9-e092-b41a-84d44e1e6a59",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:78ae7d81-8826-5fe2-f2b9-74dd5c7cd96a",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:92a42248-d05f-0d5f-57da-d8173de015e0",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:8e5d2ae4-ff97-c4ae-a2df-788b2bdb20c3",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:415c4e8a-e06b-c0f2-5324-035caaea2935",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:698b7b19-d1bf-2c96-9475-5741a1642bd7",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:0652e91b-4500-07fc-0f44-4bc8632d20a9",
    resource: {
      resourceType: "DiagnosticReport",
      id: "0652e91b-4500-07fc-0f44-4bc8632d20a9",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:321ea008-be26-7daf-839c-849600a6262a" },
      effectiveDateTime: "2012-06-26T05:03:37-04:00",
      issued: "2012-06-26T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:2f808ab6-b593-6949-83d6-c62f68dca46b",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:4ddf3e98-d089-544a-49fe-3e51fabc35bb",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:b35f9320-508d-0ae5-66b5-8e4563e16bb8",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:5ddcc12c-1eda-f33c-af8f-38813488fbe5",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:7fd67dac-e45c-4d7e-5c26-1461025cc383",
    resource: {
      resourceType: "DiagnosticReport",
      id: "7fd67dac-e45c-4d7e-5c26-1461025cc383",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:d3e7ef49-ab58-8b43-2e38-4afb6b9777dc" },
      effectiveDateTime: "2012-07-24T05:03:37-04:00",
      issued: "2012-07-24T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:6de77347-0917-6b24-516b-a87b6ad53c3b",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:d202c426-799e-4390-467b-375e5326898a",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:f8caeb75-258a-7ef9-b622-07fda90ee7dd",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:f8e62a15-30a0-3205-e851-1646c86adb11",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:16c68389-55b5-95d2-6f1e-5523218c6531",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:8a654280-2117-72f3-5b5b-d7300a19131b",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:cc59b2b2-559a-b8b9-7dac-4eb46aa9af63",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:9fc123ed-c599-c4b3-be4b-18cd44f7bf76",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:265a9506-ffe3-6a5d-297c-31f1b17b8906",
    resource: {
      resourceType: "DiagnosticReport",
      id: "265a9506-ffe3-6a5d-297c-31f1b17b8906",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:d3e7ef49-ab58-8b43-2e38-4afb6b9777dc" },
      effectiveDateTime: "2012-07-24T05:03:37-04:00",
      issued: "2012-07-24T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:a73b8a74-6000-1e77-466d-47ebbc832f02",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:a3a1507e-ca6f-aba1-fa84-6184155ccd95",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:e84c2d26-38b6-a01b-a402-c2fc98688284",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:94161464-677d-ae9e-5ecc-e1ee34345b0e",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:2d976202-8761-2511-c71d-390e261bf925",
    resource: {
      resourceType: "DiagnosticReport",
      id: "2d976202-8761-2511-c71d-390e261bf925",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:15c5c6c8-9cd0-6693-24b4-da6e15b09679" },
      effectiveDateTime: "2012-09-25T05:03:37-04:00",
      issued: "2012-09-25T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:4df47d0b-a771-bc76-ee40-d4305f961788",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:79b73261-6a42-6e9a-ab44-3d362659509f",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:f1537865-bd6e-cefb-2f66-4b692da7729b",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:55097c8e-bf99-853c-1bff-be6489cd201b",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:4bc76d5c-f670-f96f-804a-1f121f854c4a",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:bac2f9aa-1ce0-02dd-75ce-41167644913d",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:5b5af145-0ad4-3f06-b1b4-e78af979089e",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:cf19dac0-8464-54e6-1330-80f1775c8a8f",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:c165c97b-b16b-08c5-eec9-f4e1f60b12cc",
    resource: {
      resourceType: "DiagnosticReport",
      id: "c165c97b-b16b-08c5-eec9-f4e1f60b12cc",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:15c5c6c8-9cd0-6693-24b4-da6e15b09679" },
      effectiveDateTime: "2012-09-25T05:03:37-04:00",
      issued: "2012-09-25T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:35eb928a-5a00-a87a-0f32-2e665d7176c8",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:b1254737-d4fd-4281-6e0b-8a1459a06c01",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:78206727-0b6b-f087-f3c1-e0ea156f9197",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:561e5346-c029-e11e-06ee-d38e0d325769",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:59ac45e8-15c1-8de9-8ee5-e92793bdd576",
    resource: {
      resourceType: "DiagnosticReport",
      id: "59ac45e8-15c1-8de9-8ee5-e92793bdd576",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:b1c45d44-c603-db32-3c01-70b138399788" },
      effectiveDateTime: "2012-10-23T05:03:37-04:00",
      issued: "2012-10-23T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:8e60b0ca-820a-b0b6-164d-eaeb87d3a49d",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:9ee93918-d1b0-1cc0-c341-b218af97c520",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:963ab040-922f-b990-d776-39d4fd8386a5",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:a739b0ed-ad2c-1c4f-6ba5-0af31a5f2573",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:22ef22e3-75a2-2a40-73a6-5ef6eaf6bf12",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:7ed92974-798a-d822-7a73-75a0f26bba52",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:b0b80536-d4ce-fbd8-7d80-2fcacbe62b92",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:c5dadcfb-7274-144b-e693-0373eb41b93e",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:36f97b79-2713-4d95-5b1e-c26e6c8e80bb",
    resource: {
      resourceType: "DiagnosticReport",
      id: "36f97b79-2713-4d95-5b1e-c26e6c8e80bb",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:b1c45d44-c603-db32-3c01-70b138399788" },
      effectiveDateTime: "2012-10-23T05:03:37-04:00",
      issued: "2012-10-23T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:63bba1f9-55f3-2b8f-861f-9d1b3405c499",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:90f88349-5219-3744-9b99-c25134b0dabc",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:63aca497-7ee2-9b3e-e27b-49895e5bb1dd",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:94110c16-32b9-b268-cb11-3b32563836d4",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:4a2ed491-7615-f179-b9b1-a6510bcb2067",
    resource: {
      resourceType: "DiagnosticReport",
      id: "4a2ed491-7615-f179-b9b1-a6510bcb2067",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:8a5947d2-d72a-5d09-d203-06498d0a5523" },
      effectiveDateTime: "2012-12-18T04:03:37-05:00",
      issued: "2012-12-18T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:b1f787e2-35ef-21b1-4b89-6272a46361c6",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:baa6ad96-786c-0d56-2a62-8f2d7a8778df",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:55a39e5e-d4c4-bcd3-9e52-09845db03322",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:b8ec7c7c-56f6-9dd2-63a5-e26ed8eda8f3",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:1e176941-3921-04af-d032-8a4a8e12884e",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:ed899b09-9ca2-bd5b-7f46-59edeffd6a53",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:40355e6c-b105-4684-f824-18fbe6e37d05",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:609a76ae-7abe-1af2-566f-1578b7f5854e",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:81dc144d-54b3-6e9d-1cc1-2d703767c299",
    resource: {
      resourceType: "DiagnosticReport",
      id: "81dc144d-54b3-6e9d-1cc1-2d703767c299",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:8a5947d2-d72a-5d09-d203-06498d0a5523" },
      effectiveDateTime: "2012-12-18T04:03:37-05:00",
      issued: "2012-12-18T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:ff879176-d970-ad34-6f88-a09ed7c47d46",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:0dd2c1c7-eae1-f97b-ff88-04f2095b52b4",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:352a362c-0f78-d1c5-4173-4991175789d4",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:ce7d9e2c-a534-483d-b9f0-56cd58a2c85a",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:bca3946f-deed-f907-ea75-456e916067c6",
    resource: {
      resourceType: "DiagnosticReport",
      id: "bca3946f-deed-f907-ea75-456e916067c6",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:c373a113-f248-839b-a873-e80334c95416" },
      effectiveDateTime: "2013-02-19T04:03:37-05:00",
      issued: "2013-02-19T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:bff2f162-d121-631c-bb8e-ecf5879e5a50",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:31d89adb-4c98-79f7-ca10-a0a28c74d938",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:4145b226-0ddc-ec5c-e244-cd868a2d2d7c",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:2a25a46b-26ab-0989-508a-488cc081a32a",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:95e674dc-f006-1f00-92e3-e1bf0211b947",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:adff4a2e-cf88-eaf6-cf2e-f0d4fc58f4ce",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:814ddf47-5160-50f1-e05d-970eb8115ff8",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:770dcb31-332a-34ac-b232-ca4428a839be",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:bbc33ec6-d1a6-ad7e-0658-8d5167289089",
    resource: {
      resourceType: "DiagnosticReport",
      id: "bbc33ec6-d1a6-ad7e-0658-8d5167289089",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:c373a113-f248-839b-a873-e80334c95416" },
      effectiveDateTime: "2013-02-19T04:03:37-05:00",
      issued: "2013-02-19T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:7ee7d456-6b2c-9f3d-544b-7d3886cf999b",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:6ac6c2ed-37f7-9279-9e21-7935a1a00b96",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:f80266b0-08c6-2e97-5369-bcd66769687f",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:0948c3d2-ad1a-0e12-6bf9-741f43826e78",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:d25b0820-5eb4-166b-12cd-8aabf6d29304",
    resource: {
      resourceType: "DiagnosticReport",
      id: "d25b0820-5eb4-166b-12cd-8aabf6d29304",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:68814c53-0f1d-3be6-ce02-e8ff38d19494" },
      effectiveDateTime: "2013-03-05T04:03:37-05:00",
      issued: "2013-03-05T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:2a3a3cba-e6a3-e23f-61f8-d21da077daf1",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:9da6f70c-5f42-7674-c297-0a33325d541b",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:ee50d47e-a914-6279-393e-ba71c13c41b3",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:dc9021a2-f733-7e5a-f4d8-5203618c49bb",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:35b179ab-4b18-62dc-174b-0b26e9813b73",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:4fe9c1a8-1b1d-169d-d7de-fb8894e77b1f",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:28b222fa-5d9a-e979-0a3f-55da5474e60d",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:82c4b903-8b80-222f-fd66-b09c237572d6",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:66227e37-8d38-82da-93d7-eb2350cbdb9e",
    resource: {
      resourceType: "DiagnosticReport",
      id: "66227e37-8d38-82da-93d7-eb2350cbdb9e",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:68814c53-0f1d-3be6-ce02-e8ff38d19494" },
      effectiveDateTime: "2013-03-05T04:03:37-05:00",
      issued: "2013-03-05T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:2f49e61e-6be0-6244-b008-663bef6b11e3",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:c25183cf-54cc-e426-35a7-626640ac9233",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:fcb2623b-22ef-f795-39bb-f094d1878e5a",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:981dcada-3b39-603e-0a4f-5fe7c725a5cc",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:dc7b95bd-c901-2bb9-f224-b41e9eaf86d3",
    resource: {
      resourceType: "DiagnosticReport",
      id: "dc7b95bd-c901-2bb9-f224-b41e9eaf86d3",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:9ec3ee74-ef5f-b56c-0e5d-ab16e3cad4a7" },
      effectiveDateTime: "2013-03-12T05:03:37-04:00",
      issued: "2013-03-12T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:4ee174b8-2dfc-259f-b2a7-9ba3941b6c09",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:592146b8-1875-9a22-de66-5ceb063cec4f",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:7db6671b-9a98-90c4-1bb8-eda3f1a66109",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:1f77841b-59eb-661c-ee2e-5adce97f1bff",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:9d330d11-35a9-f7f5-e737-733edcc48cb9",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:3357d5b8-6a23-da75-8e31-bf5d83817444",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:c5a83894-bde6-3b81-95b9-2b521d5e1136",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:95d86cb3-9e16-1860-a572-3586063887ee",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:ebd76965-dccc-45af-bb10-1b7b23e04753",
    resource: {
      resourceType: "DiagnosticReport",
      id: "ebd76965-dccc-45af-bb10-1b7b23e04753",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:9ec3ee74-ef5f-b56c-0e5d-ab16e3cad4a7" },
      effectiveDateTime: "2013-03-12T05:03:37-04:00",
      issued: "2013-03-12T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:8cd00295-ee85-a99e-6047-b6ceaaa50b20",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:4b51bc6a-555a-2932-6b34-97bfa6298890",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:e34c357a-8fc5-56e2-f163-073bb800de1d",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:c8490cea-27a8-5ee6-2cf0-064b6d6ddb00",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:89b74d2c-c81f-3efe-7b48-7c1821b33d01",
    resource: {
      resourceType: "DiagnosticReport",
      id: "89b74d2c-c81f-3efe-7b48-7c1821b33d01",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:ccef5b1e-52f1-8544-4af6-a7efd6e542f9" },
      effectiveDateTime: "2013-04-16T05:03:37-04:00",
      issued: "2013-04-16T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:7365ef64-d71f-15f7-47d2-7c8be2141f90",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:f8921a84-2521-2cc7-060b-e2b8dd2c970a",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:62bfadbb-843b-ea93-757e-b3a05f89bf0f",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:04d4cbc1-7c6e-932a-bd7d-a5966251f9c7",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:0b5d033c-1196-8621-1624-5fd72932cc2d",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:b72fcf01-9b72-8cf7-fb24-17de9a4952ce",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:41026588-820a-6779-902c-2ff78596bed0",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:a6028b96-cad8-3a67-2c25-ab13f6d11f36",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:b9ca757b-b46f-d0e0-f9c5-b53daf5f1524",
    resource: {
      resourceType: "DiagnosticReport",
      id: "b9ca757b-b46f-d0e0-f9c5-b53daf5f1524",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:ccef5b1e-52f1-8544-4af6-a7efd6e542f9" },
      effectiveDateTime: "2013-04-16T05:03:37-04:00",
      issued: "2013-04-16T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:953f5e3b-18c7-c458-1c91-89dc52a0fa61",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:38804800-73f9-7cda-eec7-6507e2607bd9",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:a0799560-0c76-01dd-1ad2-d8f007793a4d",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:e7515c77-06e0-7750-d083-966355c9d9d8",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:cce25ac5-95f3-d1f2-80ef-5e542b3484d5",
    resource: {
      resourceType: "DiagnosticReport",
      id: "cce25ac5-95f3-d1f2-80ef-5e542b3484d5",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:454e5aca-65a5-1a61-0866-d20e488399cd" },
      effectiveDateTime: "2013-07-09T05:03:37-04:00",
      issued: "2013-07-09T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:26924af0-e8b3-e2f2-cf47-b2e64ffc2fd2",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:3c1f3be1-29cd-11a8-c2b2-828831caf1ed",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:b0b5df45-bcf2-d37c-1572-05954e07d750",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:c4eb002c-aaca-402f-45a3-8c670e289de6",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:0c1b9467-ccf6-dcfd-5221-a6beefdcc60f",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:ab759ba2-9bbd-9023-a55e-6af95be69bc4",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:77c75bb8-84e4-c8a1-173e-7c7fc3192dfe",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:42158e42-d108-de41-5bf9-8582cb33d858",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:b21aaffc-25c6-a179-68f1-5eb26083e7d1",
    resource: {
      resourceType: "DiagnosticReport",
      id: "b21aaffc-25c6-a179-68f1-5eb26083e7d1",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:454e5aca-65a5-1a61-0866-d20e488399cd" },
      effectiveDateTime: "2013-07-09T05:03:37-04:00",
      issued: "2013-07-09T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:49ee5371-8a87-edd7-451c-17e7a5ba42f2",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:e577fe1d-d198-b5c9-db12-2980f371fc99",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:87980d1e-3054-36d1-f860-9f7cb61d1324",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:857fe5d9-7fb2-1d01-d727-9d20499b4e20",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f330bea5-b40d-7972-c9ed-12192561dde9",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f330bea5-b40d-7972-c9ed-12192561dde9",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:17bae8f7-019a-7f1c-fcff-1523b53b614d" },
      effectiveDateTime: "2013-09-17T05:03:37-04:00",
      issued: "2013-09-17T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:ae3eb4b9-5ee7-5761-fc28-b91e60908e52",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:fb33f2bd-e2a7-991c-bbfe-0a0b38c4dd21",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:09f6b8d0-9071-3dec-d53f-e9e9153c7182",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:65038f49-ebec-bbb1-c511-3989b97ff2cf",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:7e584715-0b41-ba80-c9a9-5ea21f11957f",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:cd8627a4-af0d-dd82-b914-a4dd92fe68a8",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:dfe48827-f184-b61b-a371-1c3a46f877c5",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:b3b747fc-48f9-454d-71ea-8892904ac4b9",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:1758df10-d2db-336f-b3b7-d307c905c49a",
    resource: {
      resourceType: "DiagnosticReport",
      id: "1758df10-d2db-336f-b3b7-d307c905c49a",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:17bae8f7-019a-7f1c-fcff-1523b53b614d" },
      effectiveDateTime: "2013-09-17T05:03:37-04:00",
      issued: "2013-09-17T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:ac5fda61-7333-af5f-eccd-367b74845e13",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:abe6d96d-fffc-05b9-4030-c94bedc81593",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:80975448-b46d-4b12-e539-567ec3829aed",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:6b444c92-6432-15cc-06fe-623e3820fecc",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:87505278-1a58-05c7-a03e-5fbc06deda1c",
    resource: {
      resourceType: "DiagnosticReport",
      id: "87505278-1a58-05c7-a03e-5fbc06deda1c",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:9c90d3c2-9169-e20d-f371-17742bc1d809" },
      effectiveDateTime: "2013-10-15T05:03:37-04:00",
      issued: "2013-10-15T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:9f6c928a-b134-e3f7-1a65-0202572473bd",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:a830c142-4fe2-8caf-4a56-84c8cb057282",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:931bf557-59d6-f6f7-b48a-e58472641211",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:beb8680f-66f0-91fa-b7b7-cf1ab6c51936",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:5209c9e4-de76-6610-d004-e5ccb727dc66",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:d548789a-63d4-1340-e371-bd657a92c9dc",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:66d1828f-ed38-b407-a7e8-7eb0459a1404",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:eec30b58-4ffa-a857-b1d0-f02906bc1e1d",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:cd97531d-fe66-54f5-23eb-b4e377ada636",
    resource: {
      resourceType: "DiagnosticReport",
      id: "cd97531d-fe66-54f5-23eb-b4e377ada636",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:9c90d3c2-9169-e20d-f371-17742bc1d809" },
      effectiveDateTime: "2013-10-15T05:03:37-04:00",
      issued: "2013-10-15T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:ab21e589-5c3e-8ce2-26fe-d5f5bd058f19",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:6ede75d2-c47f-e297-0011-dd1767292ec7",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:f4dc3353-5a7e-2a6c-910c-85dc7d55f133",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:46805927-f9f9-795e-d44a-c197e7d7d44c",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:d1bf0228-872c-23f0-3975-08c2d448653c",
    resource: {
      resourceType: "DiagnosticReport",
      id: "d1bf0228-872c-23f0-3975-08c2d448653c",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:f9a7d3f3-929c-304e-7e9f-0dd86f84e9bc" },
      effectiveDateTime: "2013-11-12T04:03:37-05:00",
      issued: "2013-11-12T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:e1aceb0e-4b40-d854-d500-631950cab817",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:010a09d9-164d-dcaf-e2f2-cfcc93e1d2a5",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:90e70803-5663-a634-bad7-83ccae6003b2",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:8ecef8e0-227a-f670-4ce2-3028b3edbaa5",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:755398e7-4531-0b4e-b295-5ab9531e033c",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:a863b2ca-82d0-a099-f5a4-9b4e4aaf4cb0",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:61fa41cc-362b-05bf-eaa0-f82932eeff17",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:59ece549-23c6-4bd7-7caa-15affaf68309",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:2e7fb2a0-6352-24bd-1603-3fbbfd34f932",
    resource: {
      resourceType: "DiagnosticReport",
      id: "2e7fb2a0-6352-24bd-1603-3fbbfd34f932",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:f9a7d3f3-929c-304e-7e9f-0dd86f84e9bc" },
      effectiveDateTime: "2013-11-12T04:03:37-05:00",
      issued: "2013-11-12T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:30f5799a-67b1-cfe5-53d6-2d5e6bbe9f86",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:ec7bea1c-7fa2-a55c-54ad-fffb2b705216",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:7b62908c-2d0d-a4e3-e339-370cd8288532",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:cd68b597-ca0d-235c-9aea-e98d44d648e2",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:0eeba41b-680d-1f8e-61e2-cacbf81ef752",
    resource: {
      resourceType: "DiagnosticReport",
      id: "0eeba41b-680d-1f8e-61e2-cacbf81ef752",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:42053615-ceed-921c-e874-c7822929b45e" },
      effectiveDateTime: "2013-12-10T04:03:37-05:00",
      issued: "2013-12-10T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:081d5053-25b0-d8c0-aeba-eabfd30361b8",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:4a5452a8-4ecb-c5fe-bf83-501a7d20d6c9",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:3b22ac84-68e9-ed3c-fb10-160d370ae38a",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:ea3f9be5-c964-b33e-ff21-1fb3eee1180b",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:8a15cb46-e290-68c6-fe82-9f34b5bd9483",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:e02ad611-d3bf-e7f0-222e-f15a4ad67f53",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:d6162051-da1a-23df-167a-1e5fe8325745",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:72e0f5ac-fb46-8e99-4034-140e84d8a614",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:417f506a-a1c1-d791-e5f6-148233e622e3",
    resource: {
      resourceType: "DiagnosticReport",
      id: "417f506a-a1c1-d791-e5f6-148233e622e3",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:42053615-ceed-921c-e874-c7822929b45e" },
      effectiveDateTime: "2013-12-10T04:03:37-05:00",
      issued: "2013-12-10T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:d3d5238f-d3df-792f-3eeb-ed0a56fcd730",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:0a5e82ab-00e7-d221-d94f-d968643936c1",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:15f723a0-0773-e5ff-0c4a-7c81aacc5cec",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:7c5d12f5-ae8b-0653-9e37-d40db52b8956",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:ef27cb7a-f33e-b857-6bfa-9c3cd4a7f7de",
    resource: {
      resourceType: "DiagnosticReport",
      id: "ef27cb7a-f33e-b857-6bfa-9c3cd4a7f7de",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:3ac1c4ac-97fe-0633-528c-b3d9df525666" },
      effectiveDateTime: "2014-01-14T04:03:37-05:00",
      issued: "2014-01-14T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:29c9a2a8-6538-4956-edbd-caf774c7c91c",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:7950a9a1-cff4-dd81-d9ca-90cd57df5fdd",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:1626bb97-6d35-56d9-2a2f-53cb81480598",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:ca20b2cf-12c2-ce76-25f3-fd366c658639",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:fcb957fb-5aec-a2e9-3837-47289fbcc9ac",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:d9679969-68c6-b15b-4b33-68ec5634aba3",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:82c48172-95af-7cf5-39f0-b48afe260b96",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:d675a038-0106-e882-870b-f9a53c0e590b",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:125476cb-a364-6863-7d77-4c000710febd",
    resource: {
      resourceType: "DiagnosticReport",
      id: "125476cb-a364-6863-7d77-4c000710febd",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:3ac1c4ac-97fe-0633-528c-b3d9df525666" },
      effectiveDateTime: "2014-01-14T04:03:37-05:00",
      issued: "2014-01-14T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:43e7dc8e-0e64-6653-a6ff-c18312282017",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:b831e036-1a25-c263-bbbc-b86ca0615a24",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:13349350-ee1d-eaba-bf4e-d838495f86f3",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:20835b13-4abd-5a15-c112-2822d5bdd1e4",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5d0575de-6ecf-c507-aa81-bb4bbf2b454b",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5d0575de-6ecf-c507-aa81-bb4bbf2b454b",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:9c3921d0-8eeb-5c5d-8b4b-e091c1a6f631" },
      effectiveDateTime: "2014-02-25T04:03:37-05:00",
      issued: "2014-02-25T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:27c8ceee-fe6d-c52b-530b-957dc98efa33",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:d1a2a1ec-efaa-414c-5330-29a8cc749381",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:7b5c016c-fb22-741c-4124-eec696f80dcd",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:43b62bb4-22e4-b42b-2b4a-9a269c1607b7",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:7e6c0e77-7cd5-cac2-06bd-430a64535fef",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:381f44b1-2215-7f24-4cf2-c698b4eafc1f",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:17b69db6-f00a-1216-d446-f71851d69a08",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:ed358189-33a9-6da2-7fbf-0a5bd4310eeb",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:d38ca1c9-5a8f-63dd-136a-49efe5ad7055",
    resource: {
      resourceType: "DiagnosticReport",
      id: "d38ca1c9-5a8f-63dd-136a-49efe5ad7055",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:9c3921d0-8eeb-5c5d-8b4b-e091c1a6f631" },
      effectiveDateTime: "2014-02-25T04:03:37-05:00",
      issued: "2014-02-25T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:66b4c669-83bf-0d17-58f0-fb79bd729929",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:ed9acbb0-ed59-e153-9c92-d3c164ee282d",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:51b9ede0-867d-b543-b201-0ee89200be89",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:b2d9a7f6-a2e7-d6ab-df4a-8e8ae8d2525f",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:bec52a3a-3b1e-0531-fdff-54c661af5dd0",
    resource: {
      resourceType: "DiagnosticReport",
      id: "bec52a3a-3b1e-0531-fdff-54c661af5dd0",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:41f64bc3-54a0-bd8b-8738-2169399f0776" },
      effectiveDateTime: "2014-06-17T05:03:37-04:00",
      issued: "2014-06-17T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:2199e283-cad4-f42f-5333-bc6f74c05d93",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:3d94ca61-3f23-b0ff-cc3b-194f53f98bfd",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:a007b346-4aa4-7155-652b-e87bc325c818",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:c742f298-521e-e138-1902-a9b3de50589f",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:1673e1e3-dbdf-b4e4-8b44-194eecbf0109",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:dd7eb213-6728-4dee-8614-d89357b02553",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:2cc5bddd-4711-0eaa-1bb2-c746ddf0e602",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:f4ef0f7a-f9b2-ffd0-1931-e28561ea7868",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:60524800-e826-0231-cfc6-450affa3d363",
    resource: {
      resourceType: "DiagnosticReport",
      id: "60524800-e826-0231-cfc6-450affa3d363",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:41f64bc3-54a0-bd8b-8738-2169399f0776" },
      effectiveDateTime: "2014-06-17T05:03:37-04:00",
      issued: "2014-06-17T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:16900da0-1a93-ac5d-9427-bcd453f63f25",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:47b283a9-4998-57b6-e40d-e37489bc66f0",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:44a57911-cc73-f213-2bd4-c4fcb5590b97",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:81bf8c2b-91d5-6f1a-6da5-ed2350402944",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:26e07811-fb11-ffef-86ae-0dff2e9f4aaf",
    resource: {
      resourceType: "DiagnosticReport",
      id: "26e07811-fb11-ffef-86ae-0dff2e9f4aaf",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:dce625a4-1cb8-6776-a923-754e8df99a6a" },
      effectiveDateTime: "2014-08-12T05:03:37-04:00",
      issued: "2014-08-12T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:2f8682bb-6bf5-231e-6211-c64266d9afa1",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:f5111c16-e0ef-fb99-ff2e-a45a6c8ea97d",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:2856f654-93df-66a8-7bf4-b4de86d5db79",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:e618356e-dd55-307a-4c0d-e5714ca36187",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:f3af18a0-8331-c614-6322-1c6b31cbadfa",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:07d01fa7-b7d0-c478-109a-8333eb61a749",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:7e0acf2b-eb4c-d603-e29e-a1d440b25e13",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:bb2dc879-6959-8216-2f8f-1fca79379f63",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:1373a871-4215-6565-9e33-0e24f6d75092",
    resource: {
      resourceType: "DiagnosticReport",
      id: "1373a871-4215-6565-9e33-0e24f6d75092",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:dce625a4-1cb8-6776-a923-754e8df99a6a" },
      effectiveDateTime: "2014-08-12T05:03:37-04:00",
      issued: "2014-08-12T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:bba82874-94f7-d2f8-752b-3e1c6daae734",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:682d61ce-6834-f5fb-d9cb-5eadbcf67737",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:af800671-ef70-39dc-c7ec-2cd6cd5a95d3",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:099b3443-a798-0f6f-abeb-3b3162f9396c",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e06c0867-d1b7-18cb-55d5-138b837953e8",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e06c0867-d1b7-18cb-55d5-138b837953e8",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:0bf72a22-5eed-24c6-d99f-c164bb4e554d" },
      effectiveDateTime: "2014-09-02T05:03:37-04:00",
      issued: "2014-09-02T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:912ca223-dc66-f6cb-7a00-eca3171958c7",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:5c3714b0-8414-0a05-447b-1ac738ec9d4f",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:20a6a4c9-dbcb-2b37-2f29-e588fd3be6ae",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:df2967e1-dd0f-1048-0091-fde0fb3056ce",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:1d69015c-ed9f-380b-8ae8-e2d90452b2fd",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:b65884ac-4c2f-24c5-fe5b-63c7a57b8c14",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:bdb5e498-b1f8-3aec-16fd-91c677db44dc",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:d26283e2-94c4-4831-a043-d45b12119aae",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:346ff800-eb7c-fd4b-3721-d970dddebb2e",
    resource: {
      resourceType: "DiagnosticReport",
      id: "346ff800-eb7c-fd4b-3721-d970dddebb2e",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:0bf72a22-5eed-24c6-d99f-c164bb4e554d" },
      effectiveDateTime: "2014-09-02T05:03:37-04:00",
      issued: "2014-09-02T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:195bbb0c-826a-f6c0-59ac-15797ea29459",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:ae556772-2d9c-b0c6-e739-38ab8990fb47",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:5c85d79d-0879-b833-43d2-518ec8c4c2e2",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:3b53a8d6-cc1c-76c0-f6ba-4d816c660233",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:bb45ac13-35bf-a845-b3f0-a03652e60c07",
    resource: {
      resourceType: "DiagnosticReport",
      id: "bb45ac13-35bf-a845-b3f0-a03652e60c07",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:c5b2ce7c-58ec-640a-1414-a6e9f81b7b89" },
      effectiveDateTime: "2014-10-14T05:03:37-04:00",
      issued: "2014-10-14T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:f6c92230-fa5b-86a6-c86d-a23f32843167",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:677a1bc8-bb8a-7702-2391-84666c9b79a5",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:53f23b85-1e1d-f801-09fa-e38ee6408345",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:b6eeefcd-a845-7796-becb-b5d2fe9c721f",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:c1e6a269-ba8c-9836-334e-85671bcef525",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:5df58cc8-d0e5-109a-d7e4-cf0d7438b5c8",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:28d2fd9f-1008-43c2-18d8-53ccacf2d99a",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:075ce3b1-dd0b-d53d-0c83-51e43d0a7a34",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:460549b9-07a1-5a8a-0d7b-271b4f668257",
    resource: {
      resourceType: "DiagnosticReport",
      id: "460549b9-07a1-5a8a-0d7b-271b4f668257",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:c5b2ce7c-58ec-640a-1414-a6e9f81b7b89" },
      effectiveDateTime: "2014-10-14T05:03:37-04:00",
      issued: "2014-10-14T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:11d0b1f4-28f4-bda7-270e-d8fcad213759",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:dfa5f0d3-ecc8-a373-7045-ad9e4182475b",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:b37010d0-3455-7bea-5ced-6fe463cda9bd",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:2f72524e-72e3-b873-a5fe-f9731f516019",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:c54bf69c-42b6-189e-7b6d-893709b08157",
    resource: {
      resourceType: "DiagnosticReport",
      id: "c54bf69c-42b6-189e-7b6d-893709b08157",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:fff07405-c860-4f74-fdd3-1a6bc9f38a9e" },
      effectiveDateTime: "2014-12-02T04:03:37-05:00",
      issued: "2014-12-02T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:d057e87a-8ad8-cda1-2fde-cb1874ec38b7",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:1416bc3c-1e06-7e75-7088-14761db79899",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:831b6f88-b447-5808-1f6c-825d5e4db8c4",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:e0ab3bbc-2511-3d3e-aba5-952027c72083",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:74426e2a-5a3a-1b53-75a3-e46ed19fde2f",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:a5b7a2bb-ca08-d2d7-416b-ee0d054141d4",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:4bbf93bd-c17d-2cfa-9044-9bc4ce9a1e13",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:113d92f5-cacb-6109-caf3-b49e597fb349",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:4ad7e3be-e59f-da8a-1fe1-e78fd92b69a9",
    resource: {
      resourceType: "DiagnosticReport",
      id: "4ad7e3be-e59f-da8a-1fe1-e78fd92b69a9",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:fff07405-c860-4f74-fdd3-1a6bc9f38a9e" },
      effectiveDateTime: "2014-12-02T04:03:37-05:00",
      issued: "2014-12-02T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:27f9fff7-a0cb-ee38-1eb3-ad4ca28fa8f0",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:3f194fb8-64e8-cda1-21d1-8bea6aedb945",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:2643795f-ae1d-408c-2898-d2e686bdf32b",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:8514dc63-852d-bef1-431e-a73cc0e6b64f",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:dba9c625-dd83-bfb5-5aa9-ad77602980b2",
    resource: {
      resourceType: "DiagnosticReport",
      id: "dba9c625-dd83-bfb5-5aa9-ad77602980b2",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:c1baaef8-1950-41a6-88ee-a4408425ad66" },
      effectiveDateTime: "2015-03-03T04:03:37-05:00",
      issued: "2015-03-03T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:54fbb90c-e213-ce5d-dad8-38abaecef270",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:2a41e7ee-812c-f203-4a8d-5287cf41a78b",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:c69c71c3-b678-3c76-675a-b55058aa6645",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:21c059bb-49e7-8b20-7b3e-038096cc910b",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:c779a69d-353b-f327-8e41-55f570aeeaa2",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:3e887b1f-5974-953a-699d-7e5160d6198e",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:23c6df77-2d70-698d-db99-7cc0b9197db8",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:6ee91031-4e12-4821-0cff-1ce7133d3c4a",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:a28f49d2-124d-fc84-58e7-35339b5f798c",
    resource: {
      resourceType: "DiagnosticReport",
      id: "a28f49d2-124d-fc84-58e7-35339b5f798c",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:c1baaef8-1950-41a6-88ee-a4408425ad66" },
      effectiveDateTime: "2015-03-03T04:03:37-05:00",
      issued: "2015-03-03T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:78f36642-7766-b148-da07-ee0ffcc6a5dd",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:5a9e2c5c-e83f-1a68-7f25-0aa87c2e5ad6",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:f390f584-eeae-c2fe-6937-62f041e5d20d",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:17e448e3-0811-55e6-6ff5-7eed56dc25ae",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:7370681c-fbc4-c094-fb03-cd881344ed7d",
    resource: {
      resourceType: "DiagnosticReport",
      id: "7370681c-fbc4-c094-fb03-cd881344ed7d",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:f09257ac-24ed-911a-db1b-e998a50ce4ca" },
      effectiveDateTime: "2015-03-24T05:03:37-04:00",
      issued: "2015-03-24T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:06d00c6d-8091-92aa-1b48-3c6c70149416",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:7fadd7df-fa3d-363a-de3e-eeb90552a921",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:5ac71be5-09bd-fa86-2b0d-51e008be9282",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:aca6a18f-362c-0a2f-95da-06106995a36f",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:509171a6-9d74-2138-a225-0af3730a9218",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:42678f04-bdde-5ac8-56bb-7420b219850b",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:0e258222-580d-972d-70cd-70d8b2c512d9",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:13ba89ea-9c80-be24-f430-9aee603117fa",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:283e5c8f-736d-66b3-a0ea-227113df28e2",
    resource: {
      resourceType: "DiagnosticReport",
      id: "283e5c8f-736d-66b3-a0ea-227113df28e2",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:f09257ac-24ed-911a-db1b-e998a50ce4ca" },
      effectiveDateTime: "2015-03-24T05:03:37-04:00",
      issued: "2015-03-24T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:74d085d7-286f-6157-5903-c0fe1afa86ed",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:965fed3a-fb6f-8326-4888-9fea4d7996a3",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:32bb67db-91ea-85a9-bf5b-3f81488df31d",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:df63dbc4-fc43-85f5-7975-e67e4b6ad453",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:50dff5e2-5e10-7da3-ac10-de38c160423f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "50dff5e2-5e10-7da3-ac10-de38c160423f",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:261e3c2f-35d2-5c1e-45af-c71fb7ed4abc" },
      effectiveDateTime: "2015-03-31T05:03:37-04:00",
      issued: "2015-03-31T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:706a1659-e90a-5cfe-03af-0f6e3ebb59d0",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:6ff2da9f-87b2-0779-5eef-88a0488a1c98",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:9dfa8e29-9d47-9fa8-edfd-4f7f2fcf82c4",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:32251aba-29d1-017b-9904-3ccd0ce394ec",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:eb01762e-1075-1288-ba89-6f6e5723e427",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:00b1bb5c-2acc-cc52-96d5-c35ea51767f4",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:73bb7c25-03c4-26cd-aa1c-43e6dd57d65d",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:fec2a0c4-6240-a721-ea59-0d0aeff5da59",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f10a73c3-b3fd-4b9b-94a6-d434017c187d",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f10a73c3-b3fd-4b9b-94a6-d434017c187d",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:261e3c2f-35d2-5c1e-45af-c71fb7ed4abc" },
      effectiveDateTime: "2015-03-31T05:03:37-04:00",
      issued: "2015-03-31T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:eb426866-f2db-96ae-88b8-50462b7fcc72",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:be7d5eff-f85a-2650-7f1c-70795928d1a7",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:8e165c5c-446e-01e3-f455-69206b088492",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:8851e072-e9ed-1809-5c0a-f4c67c498ccd",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:bc84aca3-bcde-248e-f1d9-a335718b5068",
    resource: {
      resourceType: "DiagnosticReport",
      id: "bc84aca3-bcde-248e-f1d9-a335718b5068",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:2cf73d7a-1315-b7fa-17e6-b6c996e928a8" },
      effectiveDateTime: "2015-05-05T05:03:37-04:00",
      issued: "2015-05-05T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:9232cb85-916e-a655-2eb8-278e5a758913",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:834267e1-5371-a68d-fc0e-0a731ce4b7c1",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:35fc867e-7ba0-0197-b8b9-a56864e9bc95",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:d8f23f4b-bcdd-c106-d370-a1919e29af7e",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:65f0dd78-c08a-93d8-2152-2585afced124",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:a2688c27-df53-0f1f-5e42-b31e8462762b",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:9b449a61-6642-d4e3-76c7-8e90f943e2b9",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:396f8a48-9497-c546-de49-02bdf7b2da35",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:37ad904c-e4db-6adb-7e9d-d83ae3cc7c68",
    resource: {
      resourceType: "DiagnosticReport",
      id: "37ad904c-e4db-6adb-7e9d-d83ae3cc7c68",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:2cf73d7a-1315-b7fa-17e6-b6c996e928a8" },
      effectiveDateTime: "2015-05-05T05:03:37-04:00",
      issued: "2015-05-05T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:e92c5f92-0434-9de9-ab44-16c7db8ce752",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:4311e134-0393-ab8e-ea69-88e6c048a04b",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:790bc25c-6300-71ff-4b31-227b33aa6b6f",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:7790e6a5-51e9-6e2d-0145-b9644b6287e0",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f73d4c31-7379-e95e-5dee-18de5fe8c08a",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f73d4c31-7379-e95e-5dee-18de5fe8c08a",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:06819231-51cd-af44-ed66-ca4c46f21b48" },
      effectiveDateTime: "2015-08-04T05:03:37-04:00",
      issued: "2015-08-04T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:073b678e-40d3-6d03-45d5-44eae0e58b0e",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:aca29262-d6e1-ce2b-2e5b-120b75de8224",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:57b8e39b-c4af-ab9c-f3ae-77e328b3eb85",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:a195cb01-185c-b5ec-1841-aab5da2c8bad",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:721ec358-8a99-d305-ad6f-4524494b5125",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:bf42fcfb-1ec1-b72a-1f1d-06dee4e03f29",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:81ae9da4-0df3-8a37-913f-4aa50d6ade8a",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:fdd1a98b-4adc-1d2c-9049-6769e03858d6",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:28bcf1f3-0c36-df60-b0b9-60930aeedea1",
    resource: {
      resourceType: "DiagnosticReport",
      id: "28bcf1f3-0c36-df60-b0b9-60930aeedea1",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:06819231-51cd-af44-ed66-ca4c46f21b48" },
      effectiveDateTime: "2015-08-04T05:03:37-04:00",
      issued: "2015-08-04T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:8943e9b2-7b9e-73eb-5da6-70d346a5a1b5",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:5b50637e-a714-a740-d319-0aeb20105295",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:8108358b-7eae-6322-1a98-451068871c89",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:92e5edb8-26c2-8538-e72a-b02dd3f4f46e",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:dff716ee-94cd-d3d2-f5c4-6868e658b857",
    resource: {
      resourceType: "DiagnosticReport",
      id: "dff716ee-94cd-d3d2-f5c4-6868e658b857",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:96acbd84-42ae-8a62-61d1-ad433d01d885" },
      effectiveDateTime: "2015-09-08T05:03:37-04:00",
      issued: "2015-09-08T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:d5dea678-eef5-29ae-6624-ee530a930e2f",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:9e94fcd6-b83f-dcc5-fa9b-bff1845cf363",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:12dfbcc8-5199-5198-23fe-1d0ba844c0aa",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:14e6ae37-c758-84d2-21bb-b66d3db043b5",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:48fcdbf3-ed7d-4c86-fd17-77c65cdc887a",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:399d587e-1696-9e74-0b04-8a9e9b8f5313",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:e8aefc20-5cd0-768a-7ddc-148bd04bd3e5",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:8ffd7042-9f1b-21ad-60f4-249e49dbfa05",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:95c67799-9ff5-d6d9-4556-46927416570b",
    resource: {
      resourceType: "DiagnosticReport",
      id: "95c67799-9ff5-d6d9-4556-46927416570b",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:96acbd84-42ae-8a62-61d1-ad433d01d885" },
      effectiveDateTime: "2015-09-08T05:03:37-04:00",
      issued: "2015-09-08T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:52e71bff-db35-f0b8-0bb3-841c1a3207d6",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:0b24c5f6-c183-97c4-ab45-5e728dbc4df6",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:5388ff5f-512e-bdaa-5cca-f46a457f305a",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:fae2ac5e-ce89-7fc5-5518-ce9938e7d9b7",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:65f44d4f-7620-8249-fbd3-78d8d0640a84",
    resource: {
      resourceType: "DiagnosticReport",
      id: "65f44d4f-7620-8249-fbd3-78d8d0640a84",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:9902a90d-0a9b-6822-f074-31628cb2ed0d" },
      effectiveDateTime: "2015-11-03T04:03:37-05:00",
      issued: "2015-11-03T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:235215e8-9061-15f9-7ebf-8da3ee708afb",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:63a9e9f7-fcde-03a3-8ec8-9ad7afebf1a2",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:bc5dae0f-13f7-c73b-aedf-e267c3b178f5",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:5dc8293a-ae4c-8ae5-c417-0e1257df59b2",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:b224f58a-216e-6fcf-3a6c-5f99d2627177",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:02e226e1-a2fa-0e72-a34c-65b93fb386a9",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:f8650b0d-de5e-3717-e445-8c5490ca6697",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:68d25719-7a40-b69c-e867-fbf0daa241de",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:6e4977d2-c02c-c9bc-afdc-66cd42e3b67a",
    resource: {
      resourceType: "DiagnosticReport",
      id: "6e4977d2-c02c-c9bc-afdc-66cd42e3b67a",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:9902a90d-0a9b-6822-f074-31628cb2ed0d" },
      effectiveDateTime: "2015-11-03T04:03:37-05:00",
      issued: "2015-11-03T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:329b55df-46e4-2377-4f7f-7c66097ceb0e",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:f196ebe0-32ae-f6fb-2efc-4ed2bcc8db8d",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:82868456-9d34-76da-2c3b-32d1106822bb",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:1e543b89-a824-32ea-062c-0aeb2354a357",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:582ddf52-07ca-017e-4e38-d3839be782bf",
    resource: {
      resourceType: "DiagnosticReport",
      id: "582ddf52-07ca-017e-4e38-d3839be782bf",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:5b1e8252-ce82-dbdb-2a07-e8c38fe7e422" },
      effectiveDateTime: "2015-12-08T04:03:37-05:00",
      issued: "2015-12-08T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:e14247d7-ef06-5ca6-8c1e-fb1ce81c527f",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:103b2c6c-9876-5f2f-8ac9-609c0acd7bdf",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:2def1dfe-91b2-6d95-5113-f99cbee0b928",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:d1de0ad2-70e8-2196-5f2d-a3a2271d0572",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:be5b494e-87b0-e44b-4704-67f11b33032c",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:f890ed17-e15d-1fb0-9e76-28cbc603733e",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:88bad95c-ec02-8463-15c2-6de484b37a6e",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:5c50246d-1802-67ac-3fe8-040fa5f55904",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:c40f3d35-1a3f-81ef-0994-d559f65b82a7",
    resource: {
      resourceType: "DiagnosticReport",
      id: "c40f3d35-1a3f-81ef-0994-d559f65b82a7",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:5b1e8252-ce82-dbdb-2a07-e8c38fe7e422" },
      effectiveDateTime: "2015-12-08T04:03:37-05:00",
      issued: "2015-12-08T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:9026a090-5189-7dbd-be10-6439e63278af",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:9d059e13-17da-743a-1ad6-1598a8adf4a9",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:6ada3aa2-a349-30fa-8552-7f23b585001a",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:af10d1dd-8ce4-b90f-49b2-dc4512e4ceb9",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e5931546-2940-6a0a-ded1-2d33b2444951",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e5931546-2940-6a0a-ded1-2d33b2444951",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:719a26df-8238-e7df-f6ef-07a945b2f06f" },
      effectiveDateTime: "2016-02-02T04:03:37-05:00",
      issued: "2016-02-02T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:a91f35ec-0ed0-6ca8-1673-ad0eab2d8d9d",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:0d2c1560-d3ba-064e-8314-bc7b1fd6862b",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:5d90acd5-341c-b37d-a442-7ea4270daae5",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:e81ee443-69da-d46b-2110-522d37b421a0",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:511275bf-1f48-ba6c-2765-d36739a9fa75",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:c6152beb-2307-774f-7ead-01e4ec2727c5",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:9ca413ae-adb2-bf07-a6c4-ab4f325d727e",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:9b299527-8d58-bf8d-c42e-2f75db8eee9b",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5a87846c-957e-73a7-ec5a-7a88b36de0d3",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5a87846c-957e-73a7-ec5a-7a88b36de0d3",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:719a26df-8238-e7df-f6ef-07a945b2f06f" },
      effectiveDateTime: "2016-02-02T04:03:37-05:00",
      issued: "2016-02-02T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:38eba7df-98bd-1305-4a4a-f1a8a478b3f1",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:672c963f-88d6-301f-9cef-0b45c7a9df27",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:98d00441-c406-fcc0-b8d4-1392e55b1f05",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:54bd2d69-aa8c-66e0-dfd0-10ce49db51f2",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:9a07b62a-61eb-369c-d007-4ef23602e595",
    resource: {
      resourceType: "DiagnosticReport",
      id: "9a07b62a-61eb-369c-d007-4ef23602e595",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:d244b9ef-84a3-7ac6-17ee-615bef2aa5ef" },
      effectiveDateTime: "2016-03-08T04:03:37-05:00",
      issued: "2016-03-08T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:7289ab12-9e3c-336f-4e73-e953e15deb09",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:f444e291-ee13-96aa-09c4-627e0719c2c4",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:b4f51cb3-86f5-f533-43fd-7ce2769f8e54",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:8672b7bd-7ccb-3c0a-8c58-1eba69f70bfe",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:5789dbdf-a510-acdb-f926-303acb8e5a5c",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:4a5466ab-8b9c-565f-b166-b62db29a4160",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:f28299c6-6a75-2f02-62e8-81bec9438798",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:23f380d7-a13f-b5c6-be47-89942bfdd7b3",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:2ff6cb20-78e9-58e8-3bef-828892840053",
    resource: {
      resourceType: "DiagnosticReport",
      id: "2ff6cb20-78e9-58e8-3bef-828892840053",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:d244b9ef-84a3-7ac6-17ee-615bef2aa5ef" },
      effectiveDateTime: "2016-03-08T04:03:37-05:00",
      issued: "2016-03-08T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:2a9942c8-9659-3d66-523e-40214c28fa43",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:5bb4d22e-70ba-45be-2d85-7b39dae567c4",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:2137b0ff-485a-8769-4f12-c0e9381176dc",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:51d1bb8c-b957-95ac-f92e-0d8154f4aae4",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:7c088b08-cd29-d0b4-00ea-c07511635ecd",
    resource: {
      resourceType: "DiagnosticReport",
      id: "7c088b08-cd29-d0b4-00ea-c07511635ecd",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:7ddd6108-2f21-abe4-e022-3dba457769b4" },
      effectiveDateTime: "2016-05-03T05:03:37-04:00",
      issued: "2016-05-03T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:50a97288-e058-fa13-9ba5-ef245ade1900",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:1eb54e70-ddee-d972-1e68-5a7a036df1ba",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:07678999-bff8-c837-a027-9947c494f443",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:2a35244f-e09f-8728-f81f-4770c4e76779",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:1c0f72b3-0b8a-537d-0107-a2fca88f1396",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:bd53bea9-c558-13c3-0032-812fc33f93b4",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:9dbe9517-b583-ef03-a8da-00d8725fbb92",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:5a2a324e-38d9-b223-3af7-8de6103d1598",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:3fee49ed-ab62-9478-f144-af2f80d7c4cd",
    resource: {
      resourceType: "DiagnosticReport",
      id: "3fee49ed-ab62-9478-f144-af2f80d7c4cd",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:7ddd6108-2f21-abe4-e022-3dba457769b4" },
      effectiveDateTime: "2016-05-03T05:03:37-04:00",
      issued: "2016-05-03T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:1062c1c0-3600-a78b-c34f-0a3fbaeabd18",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:72d264fa-0ce9-c50b-10c3-2fd55bbd18d6",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:8b7235d4-3f58-53fb-76c5-7ff17b6839ca",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:aa8cb7e3-fa8a-77a3-6f05-53d202dee223",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:1be77dca-81c7-7e61-b4ac-75d0c00cde8f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "1be77dca-81c7-7e61-b4ac-75d0c00cde8f",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:c285104c-3e5b-8bda-71e9-257cf5246f55" },
      effectiveDateTime: "2016-05-31T05:03:37-04:00",
      issued: "2016-05-31T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:135e78c4-51f2-5fb1-fde4-03878448e0e7",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:3b259a99-20b3-1a0d-b661-62d3efd0c2eb",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:5d93d7c8-a4b2-eb11-e705-78da59170d48",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:e3b60caa-2e00-4fc8-8169-8c1aa410fcde",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:426e9b71-724f-8bf0-6ced-6f54200d58fc",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:8f41e4c3-1cce-f903-d2ca-be38425f0405",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:c819358a-9542-c175-69d2-b15e6f8d724f",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:59e63e0d-4f0a-8c39-c9a0-bd7bbedb2b4e",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:cb3e8462-c15b-dff2-a0bb-7d3fb3609c80",
    resource: {
      resourceType: "DiagnosticReport",
      id: "cb3e8462-c15b-dff2-a0bb-7d3fb3609c80",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:c285104c-3e5b-8bda-71e9-257cf5246f55" },
      effectiveDateTime: "2016-05-31T05:03:37-04:00",
      issued: "2016-05-31T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:7e1e663a-f9d7-dc89-42fb-71d4ce50b8f1",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:bea69346-fd04-29e6-58c0-49ef877ca94b",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:f83d3278-97e1-f45e-014e-6689f4ff8676",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:45f99d42-3554-590d-cf2f-61cbf904e8b4",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:aea8efad-ca93-1003-d504-922e52421769",
    resource: {
      resourceType: "DiagnosticReport",
      id: "aea8efad-ca93-1003-d504-922e52421769",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:aab616ab-9ce8-1ebc-1245-d0b40f7ee3f0" },
      effectiveDateTime: "2016-07-05T05:03:37-04:00",
      issued: "2016-07-05T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:88cfb5c3-cf23-de35-2ea8-fa3c974373a1",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:09a7a6af-cfb1-4c70-953b-bf338aa3cfa9",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:a11b0068-05a4-f1db-45b4-b09fa6508338",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:708a19d2-7eab-5796-79c7-ee59500e95b3",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:3f8bfdc0-51bf-fd6e-9bd8-94360980e0d5",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:334cf660-caa8-f23a-09b2-749d8f4d79ae",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:f585dbf8-d7e9-0e87-cc8c-685eb54225ed",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:440d1ad3-8bc8-b577-f13f-47be4ff46161",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:49eccd51-9072-1a0e-4195-22a8a68d5a50",
    resource: {
      resourceType: "DiagnosticReport",
      id: "49eccd51-9072-1a0e-4195-22a8a68d5a50",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:aab616ab-9ce8-1ebc-1245-d0b40f7ee3f0" },
      effectiveDateTime: "2016-07-05T05:03:37-04:00",
      issued: "2016-07-05T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:bc9da478-10af-3fe5-e5ca-e0ce691db7bc",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:d97f4019-3805-75cd-6903-7f0488bd769a",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:ee7eee51-5b7b-b9eb-f3d7-d80a8614fbc1",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:f15d5410-1914-cba1-ea48-71d5192423aa",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:1f8f0cb0-4896-b694-ef2b-5d3eae3c47a2",
    resource: {
      resourceType: "DiagnosticReport",
      id: "1f8f0cb0-4896-b694-ef2b-5d3eae3c47a2",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:bdd09332-bca6-529e-86a0-f6206767e44f" },
      effectiveDateTime: "2016-07-26T05:03:37-04:00",
      issued: "2016-07-26T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:d85ac8e5-61d2-772b-b7c3-8cb0203fd5e1",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:968789a1-6e0e-57a5-9acf-3fcedb9783e7",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:045fcaee-c9e4-2d9b-ef4d-d98e909fd607",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:efd92f82-c9a4-2684-7039-a663aa2b906a",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:cf45100c-fd6f-da76-f9be-527bf3347574",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:332a5986-362d-6ded-2dc4-62339765c728",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:71ae7ccb-fce4-8bca-c2d7-3dce4b82faca",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:f2e54370-d562-7b9d-ceb3-c461351382c5",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:4d118e41-194d-1083-cfd0-508981daebf6",
    resource: {
      resourceType: "DiagnosticReport",
      id: "4d118e41-194d-1083-cfd0-508981daebf6",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:bdd09332-bca6-529e-86a0-f6206767e44f" },
      effectiveDateTime: "2016-07-26T05:03:37-04:00",
      issued: "2016-07-26T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:02889dce-ff12-d826-5038-9a0fbbe6d2cf",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:aa16be5f-69ce-aa18-2250-a57de392024a",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:17661649-883b-eb21-9e03-7081413ab0ed",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:8ca40740-1a73-b526-bc5e-6015211911a3",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:ee42ad8f-dcd6-beb8-e10a-4a198e20a0a4",
    resource: {
      resourceType: "DiagnosticReport",
      id: "ee42ad8f-dcd6-beb8-e10a-4a198e20a0a4",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:3959df15-21da-e248-2170-eff1ec357291" },
      effectiveDateTime: "2016-08-23T05:03:37-04:00",
      issued: "2016-08-23T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:3203be55-4df8-a17a-1e3f-16c0c5c9c160",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:bc6d300d-6e06-551d-5cba-ae5fcecd53c5",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:29ae2310-ab2c-c09d-6463-b6bd593210fb",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:95f6f342-f4fa-b13e-74f6-415ba568450b",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:65b586e8-6ead-3f2b-1c4b-ee28596207c1",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:5d3f0b7a-ed8b-abba-6bda-a65f14700e92",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:30982bbd-442c-5ff3-1b6f-92cd41ff38b9",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:f342130f-f72c-cf52-b5e6-c13c416039a2",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:7ee83e22-af24-3054-61b1-de183323683a",
    resource: {
      resourceType: "DiagnosticReport",
      id: "7ee83e22-af24-3054-61b1-de183323683a",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:3959df15-21da-e248-2170-eff1ec357291" },
      effectiveDateTime: "2016-08-23T05:03:37-04:00",
      issued: "2016-08-23T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:3783d204-903e-42cc-13b3-2d29e775058c",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:740cf832-a205-d00f-2412-1fbc5eb5e469",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:1747774a-426e-010e-4400-1af324ba4f08",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:867c2366-9dec-efbc-80b4-c41d688ffa75",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:9dcd02af-1683-5306-e264-bbae571f3fb3",
    resource: {
      resourceType: "DiagnosticReport",
      id: "9dcd02af-1683-5306-e264-bbae571f3fb3",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:5d6d1e89-eae8-afb8-2685-40b115dab1d9" },
      effectiveDateTime: "2016-12-20T04:03:37-05:00",
      issued: "2016-12-20T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:5a7bd88e-94cd-f337-7936-5c452faac08b",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:7a541375-23a2-6649-2cc6-f39e6d4022c6",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:ae5f593a-0559-d79e-a14b-29ed032c8813",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:545ca6ae-28d8-142d-2ef8-4eb7a2aa15b3",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:31105547-9d10-6c79-654d-4f6f818b8990",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:37d3b480-be5b-755d-1075-e2e5656ff2a5",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:7b74645f-4961-910b-c5f0-77fcc0cf0b9c",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:6d16454f-0e36-8451-8217-dba0069e1bb8",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e57deb1e-a408-5cff-c88c-b25399701c16",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e57deb1e-a408-5cff-c88c-b25399701c16",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:5d6d1e89-eae8-afb8-2685-40b115dab1d9" },
      effectiveDateTime: "2016-12-20T04:03:37-05:00",
      issued: "2016-12-20T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:a5a41137-5542-9c1e-24cc-c9f60ae781f5",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:aa87f1cb-e65a-2745-c68a-ded44fad4e6c",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:6026a820-412c-4880-63f7-997310118dfc",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:f12d197e-713e-64b6-a3b1-67622e452c27",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:17f1497e-14c2-1cc1-d2e0-7235dc630df8",
    resource: {
      resourceType: "DiagnosticReport",
      id: "17f1497e-14c2-1cc1-d2e0-7235dc630df8",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:7fb8b2c3-2341-c3d4-ceb2-8c6ee43c423a" },
      effectiveDateTime: "2017-01-24T04:03:37-05:00",
      issued: "2017-01-24T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:30fe9c4f-cbe0-2fd6-6210-fa370acc94a0",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:d723e58d-a9ed-e7cc-f2d1-47e20980cda1",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:a67b19a8-cc47-5535-6ab6-0e546c0204e8",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:930edcff-a2ee-a3b2-c2f7-e786d361f176",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:f9d58b04-0a23-70bd-fa1c-30066a706e80",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:e4130e07-b264-28ed-8904-d4e3656f644f",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:745fe05a-2dd1-7578-d85a-8cee43a1db67",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:38f68a96-e81c-7dfa-78c4-f12348169deb",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:c3089343-d79f-2ce7-d70b-c3f58b4b0090",
    resource: {
      resourceType: "DiagnosticReport",
      id: "c3089343-d79f-2ce7-d70b-c3f58b4b0090",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:7fb8b2c3-2341-c3d4-ceb2-8c6ee43c423a" },
      effectiveDateTime: "2017-01-24T04:03:37-05:00",
      issued: "2017-01-24T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:272a333b-7171-0274-cfa7-2863ea310b3f",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:c6fe1376-ac58-9196-c24f-1a66b17901ee",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:ecfee547-1aa4-5f40-c5f0-5df1256503ce",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:f8fc9ec2-fa3f-7f46-2aa3-5643af5ff862",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:405636bd-373d-d860-2a48-4fac6810fd3d",
    resource: {
      resourceType: "DiagnosticReport",
      id: "405636bd-373d-d860-2a48-4fac6810fd3d",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "58410-2",
            display:
              "Complete blood count (hemogram) panel - Blood by Automated count",
          },
        ],
        text: "Complete blood count (hemogram) panel - Blood by Automated count",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:7fb8b2c3-2341-c3d4-ceb2-8c6ee43c423a" },
      effectiveDateTime: "2017-01-24T04:03:37-05:00",
      issued: "2017-01-24T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:555d2e69-e6c5-e3d0-3814-cc41356b9631",
          display: "Leukocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:1d8c3ccb-67f4-4c25-ad7f-7d81bb5717de",
          display: "Erythrocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:c220f6af-687b-41c0-7308-905cc63dd5ac",
          display: "Hemoglobin [Mass/volume] in Blood",
        },
        {
          reference: "urn:uuid:c720806b-3559-7674-e2be-ce1dd43a9220",
          display: "Hematocrit [Volume Fraction] of Blood by Automated count",
        },
        {
          reference: "urn:uuid:330bd4aa-b0ef-75e4-02d3-3d86c4a45f07",
          display: "MCV [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:e28dcc85-19cb-0e01-bbcb-3b055511a398",
          display: "MCH [Entitic mass] by Automated count",
        },
        {
          reference: "urn:uuid:5b7914ca-0ca2-3bd0-5dbf-60255802e0da",
          display: "MCHC [Mass/volume] by Automated count",
        },
        {
          reference: "urn:uuid:441fa49d-9189-a070-855c-ee44f24ad843",
          display:
            "Erythrocyte distribution width [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:f292894a-2aae-c25b-da86-b08e357ff8a1",
          display: "Platelets [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:30f21b4f-c09e-9eec-aecd-89212c1d353d",
          display:
            "Platelet distribution width [Entitic volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:75e3f0be-e1a5-5020-b0c8-1d8f8db6ab3d",
          display:
            "Platelet mean volume [Entitic volume] in Blood by Automated count",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:59604a2c-b7c0-33de-a31d-a95bbcfef22b",
    resource: {
      resourceType: "DiagnosticReport",
      id: "59604a2c-b7c0-33de-a31d-a95bbcfef22b",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:962167d6-318e-1518-7ef5-4ed1047a8dae" },
      effectiveDateTime: "2017-02-28T04:03:37-05:00",
      issued: "2017-02-28T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:0d33fd35-7093-ac65-4e6e-40d2cec8ed46",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:de592732-1656-4e49-546d-6023583c509e",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:a2ec4e8b-6297-4572-9b93-2f41ad913800",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:01469832-a2fb-6af7-bcec-ddc718c512b8",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:d663efe9-6bef-d7f9-8b47-1524f74ffac7",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:6d83e1aa-da74-b408-4825-b14257e343e4",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:2e7a166c-2a5c-05c4-9b25-ee499bd376c4",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:2a3d6804-1812-69c7-daf5-1fbf4f103c9b",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f23393e5-b007-65ee-bca2-6b2ab38e42b5",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f23393e5-b007-65ee-bca2-6b2ab38e42b5",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:962167d6-318e-1518-7ef5-4ed1047a8dae" },
      effectiveDateTime: "2017-02-28T04:03:37-05:00",
      issued: "2017-02-28T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:62bfc067-4601-d3c2-3713-44d456b0fee1",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:35083818-8bfc-bde6-3d3a-0dfac9453f59",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:3e2c27e0-a522-6a84-b1b6-27bc1983ec4e",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:b45b21bb-f493-1bf7-7889-dec813e5351f",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:96afd115-be0e-cf43-716c-b7d2ca080294",
    resource: {
      resourceType: "DiagnosticReport",
      id: "96afd115-be0e-cf43-716c-b7d2ca080294",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:b2e6aea6-4a67-1e1d-1cb0-157e8c1324a7" },
      effectiveDateTime: "2017-03-14T05:03:37-04:00",
      issued: "2017-03-14T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:53d2be65-787b-68b4-cadf-7d984c3f6b42",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:51758229-6d15-b825-ac67-5b3921d0ba83",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:6b224895-02a7-43dd-2688-1e1237b35256",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:f15b3cd0-d76b-e772-0c50-7971161dadbd",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:51507174-8d5b-960d-9365-8f67d22fa932",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:83311c82-9b8e-194f-cb2c-0fe3bad0b633",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:3cc01e97-04e1-5a71-6c7b-b4fe7f3f4301",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:d44d495c-7c58-99ad-aa1d-b08fe7c85aa3",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:6c521f5c-40fc-c1c9-38b7-f1cd710b17a6",
    resource: {
      resourceType: "DiagnosticReport",
      id: "6c521f5c-40fc-c1c9-38b7-f1cd710b17a6",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:b2e6aea6-4a67-1e1d-1cb0-157e8c1324a7" },
      effectiveDateTime: "2017-03-14T05:03:37-04:00",
      issued: "2017-03-14T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:dc581942-262d-37dc-954b-df0a9b0ac131",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:7337d66c-88ef-f660-466f-d3879699104e",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:077050ef-dea3-d143-d6be-111b9d0297f5",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:5819ac39-a8a9-d7a0-743b-056e8d830779",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:8c1910dc-d8d6-ffb3-ce5b-b92a8396ad7f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "8c1910dc-d8d6-ffb3-ce5b-b92a8396ad7f",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:9513f01a-ecec-a50e-d1d7-f1933327e3c5" },
      effectiveDateTime: "2017-04-04T05:03:37-04:00",
      issued: "2017-04-04T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:2afdfeff-486c-9ecc-a552-727f76848fd4",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:66d8484a-dc16-caf1-f2e2-21bbe14a204e",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:a9d2dfc8-5d3d-0f7e-e20f-0caf04f49dce",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:554e0c10-4e6d-6395-50d3-9c67a03b32ef",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:1701004c-d503-c489-1247-02dbec6b8b66",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:cc424a32-86ba-3ec4-c71d-dbf83356618a",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:cc94ab31-06b6-20ea-f56b-4bf93b38e016",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:a28bd0e1-df92-bd3e-8925-2ef9f633dc2e",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:a1d34469-6d1e-6ca3-d548-4a31b6d8d1bc",
    resource: {
      resourceType: "DiagnosticReport",
      id: "a1d34469-6d1e-6ca3-d548-4a31b6d8d1bc",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:9513f01a-ecec-a50e-d1d7-f1933327e3c5" },
      effectiveDateTime: "2017-04-04T05:03:37-04:00",
      issued: "2017-04-04T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:d35fa0c8-b50c-5d44-6403-2dce3c6e2b9f",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:77bc0b3d-1cf4-4ba8-d479-cc0f560f9b6b",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:2ec699a2-4641-185e-5e0f-c37701164a83",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:ee322bd8-8c9c-7b09-725d-406db6e06cd6",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f45bc11f-2f88-710e-67aa-b277035cec8f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f45bc11f-2f88-710e-67aa-b277035cec8f",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:ce034565-7f4b-2750-cabf-c9bae3d07898" },
      effectiveDateTime: "2017-04-25T05:03:37-04:00",
      issued: "2017-04-25T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:aaf13b9e-4b33-e372-e148-fe06fb824688",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:2488ebb1-cec3-87d3-a3f4-a0758266ae55",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:e7e4a266-faeb-16a9-ba37-768cdf80b206",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:9d2e1d97-9374-0d67-6446-6ca3de60b839",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:51ad295a-2adc-3439-8770-95de184d1470",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:addf8073-2118-6769-882e-c3bde3848917",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:e949c00a-f070-1304-67dc-8300199865c4",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:14b762a3-3722-44bd-6443-91a58453c5c0",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:28993817-6d70-d1a7-d1b3-1d4ce227cbc9",
    resource: {
      resourceType: "DiagnosticReport",
      id: "28993817-6d70-d1a7-d1b3-1d4ce227cbc9",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:ce034565-7f4b-2750-cabf-c9bae3d07898" },
      effectiveDateTime: "2017-04-25T05:03:37-04:00",
      issued: "2017-04-25T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:548af646-ac2f-7810-e820-225003f9b2c5",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:011f01ff-15b1-80aa-3755-80d03dfc3009",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:1e4b4e8a-09dd-3707-7cef-ebfde4ea717b",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:ec29864e-475f-cb5d-6589-b8c80174c34b",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:c01b0606-9a8e-f220-8143-fcd188c9c16c",
    resource: {
      resourceType: "DiagnosticReport",
      id: "c01b0606-9a8e-f220-8143-fcd188c9c16c",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:b1af7038-df45-0cc7-0528-7dfd2d91cced" },
      effectiveDateTime: "2017-08-22T05:03:37-04:00",
      issued: "2017-08-22T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:93b284b5-438a-5f71-07c1-3a949cc02399",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:b306f9db-236d-6782-483a-ca9a6da2fe1f",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:8e0cf029-c182-66c3-13f3-297e1014f8f5",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:b79e7c23-00ff-568b-6145-4ee38fac3870",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:0cfef46b-cf56-04b3-5e85-b360c6ae20d5",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:ecc928c0-cdf0-b179-735c-6292e01700d7",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:21159427-b580-27a7-2be5-9a787d13605e",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:6594fe67-cb50-b2f3-5f6c-8bfbdbf8f789",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:2dff9531-8833-6646-eabf-bc551ce3d3c2",
    resource: {
      resourceType: "DiagnosticReport",
      id: "2dff9531-8833-6646-eabf-bc551ce3d3c2",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:b1af7038-df45-0cc7-0528-7dfd2d91cced" },
      effectiveDateTime: "2017-08-22T05:03:37-04:00",
      issued: "2017-08-22T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:dd2f40bb-088d-98a9-f5b9-10d3232991f6",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:477d21c1-b7b0-f687-a422-6a89382a6240",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:006f7cb7-b7d8-2be7-9426-5ed666de89c9",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:eae527ea-1693-3123-7165-4535a67bd8b8",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:03e5f10a-80b1-cafd-e96b-b340c5216bfb",
    resource: {
      resourceType: "DiagnosticReport",
      id: "03e5f10a-80b1-cafd-e96b-b340c5216bfb",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:ce37e551-5540-b45e-e10d-35871925bf77" },
      effectiveDateTime: "2017-09-19T05:03:37-04:00",
      issued: "2017-09-19T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:5dc889aa-ac42-a1c1-1d20-1faffb6044e1",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:95a2d414-16f9-64cd-af87-b83c8712d394",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:fb361196-80f6-b971-cd0e-41f01642e25c",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:b090a417-060a-0af4-7a78-4acdbe19b637",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:14949345-27f3-f7a8-090b-51be2884e9d2",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:d467560e-f8ed-4f4a-b6c5-ef140104ac97",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:1b903f55-3c35-13ae-ee99-726a68706de9",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:6b4481e1-99eb-5f9b-9a3f-09b5ac4478ae",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:b57b2cd0-5d84-fee7-87d4-724bab3ed6cc",
    resource: {
      resourceType: "DiagnosticReport",
      id: "b57b2cd0-5d84-fee7-87d4-724bab3ed6cc",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:ce37e551-5540-b45e-e10d-35871925bf77" },
      effectiveDateTime: "2017-09-19T05:03:37-04:00",
      issued: "2017-09-19T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:35daff98-f779-57f3-ae4f-c599562f430d",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:f45157ee-1724-8b17-2be8-0ef576bd7678",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:5c6ee997-c26e-6289-e694-61c0ae6ff3ec",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:eda9bb83-c9c6-8ad2-2ace-611f4b775877",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:be2d7a71-e177-8912-35f0-f0f2b158330f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "be2d7a71-e177-8912-35f0-f0f2b158330f",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:9e0d5bce-eece-1e88-6149-6bb12fc62d3a" },
      effectiveDateTime: "2017-10-17T05:03:37-04:00",
      issued: "2017-10-17T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:5724cffd-9f8f-5de7-6665-84df546454e2",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:9c266049-0370-99a8-b823-2b01fd83736a",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:41a8b8c0-5116-ed16-172e-230c155e2a0d",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:3546eee7-7551-7b5e-9518-dbeea4b32099",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:ea516d19-1326-b7ad-c29e-0e36c728d178",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:51b6dee1-0bc4-7cf3-26e4-f27e8734f114",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:6a9f0e87-cff3-5de9-c32d-eb2699086776",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:365d87ee-3020-7155-bb33-95437a0ec030",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:79470ac6-828d-06c5-bc8a-4db8848f83ae",
    resource: {
      resourceType: "DiagnosticReport",
      id: "79470ac6-828d-06c5-bc8a-4db8848f83ae",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:9e0d5bce-eece-1e88-6149-6bb12fc62d3a" },
      effectiveDateTime: "2017-10-17T05:03:37-04:00",
      issued: "2017-10-17T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:7e6b149c-8781-1e8c-ded7-74d60a1a347d",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:2e72651a-6508-ae38-a770-b03e8943b3a6",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:286d7b7d-e21f-a35b-6586-8ef184188da6",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:6296ab45-9789-2093-f227-af6b0525a410",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:2252495a-ab1b-e41d-675a-16b715c36f69",
    resource: {
      resourceType: "DiagnosticReport",
      id: "2252495a-ab1b-e41d-675a-16b715c36f69",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:679ca82f-583c-bbb8-08b1-fd8eb3e6c572" },
      effectiveDateTime: "2018-01-23T04:03:37-05:00",
      issued: "2018-01-23T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:acc86ec5-32c2-ae0c-7f47-88f21c430128",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:42688bd1-54d9-59e3-bf81-929ab6ff80be",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:2f20293e-e16e-1e93-35c9-ce7a2b7900a8",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:e4f1f815-760b-6b41-a4d8-90ef253c0fbe",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:4563c77f-0dd5-c94a-9313-14f0b2681b9b",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:6f5ff805-83fa-a163-4e03-c4655451b459",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:0dde6e00-f663-af00-429e-31b3131ec89e",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:db05b74b-3ca3-c5fa-c4d0-9696f21c1ddc",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:1714de47-90f3-1f69-406e-15f639b0bf29",
    resource: {
      resourceType: "DiagnosticReport",
      id: "1714de47-90f3-1f69-406e-15f639b0bf29",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:679ca82f-583c-bbb8-08b1-fd8eb3e6c572" },
      effectiveDateTime: "2018-01-23T04:03:37-05:00",
      issued: "2018-01-23T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:c94c5835-df37-ce6b-a6ad-ec33a8bb88d3",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:c02d73bd-e781-1adc-5098-f06e551eaa5a",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:43834301-1f8c-7ca2-4989-ac78610a345f",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:96cd0fee-2c0b-ba84-fe0c-50aab559fb2c",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:70fd5524-6cbc-2cde-deec-93251a154aa0",
    resource: {
      resourceType: "DiagnosticReport",
      id: "70fd5524-6cbc-2cde-deec-93251a154aa0",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:dd400350-a5fe-5092-4e43-2db83353d390" },
      effectiveDateTime: "2018-02-20T04:03:37-05:00",
      issued: "2018-02-20T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:0fb0059b-28ab-0309-3b01-1c81f1d39ca6",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:837331e0-32e1-1367-814a-57a50a86a2f0",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:e996fa16-5d24-16b3-9bd1-67c04717b4c3",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:83400906-e0df-fc8b-803b-c117b521c37b",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:c3113b4e-0d64-ea25-2e5b-73456d09ae67",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:ce42632d-11f9-1393-05ab-c3256f4d07af",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:b63ef59d-fc58-6549-91a8-f01464fdc372",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:39d9f4a7-7dc6-c1dc-bec2-98592427352e",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:8b687fac-310b-9a80-c216-82cfca4ed595",
    resource: {
      resourceType: "DiagnosticReport",
      id: "8b687fac-310b-9a80-c216-82cfca4ed595",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:dd400350-a5fe-5092-4e43-2db83353d390" },
      effectiveDateTime: "2018-02-20T04:03:37-05:00",
      issued: "2018-02-20T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:3025aaf2-7fe1-d80c-81ab-70e1fdbaff65",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:b8d30c9b-89ab-d504-c7c0-4434436ad97c",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:07e5d14c-ad18-76df-e46b-6c9bfabe4fe5",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:89c79b88-31fa-436e-ec09-3da99601e280",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:631c94db-f32d-b986-be7e-772b56cafec3",
    resource: {
      resourceType: "DiagnosticReport",
      id: "631c94db-f32d-b986-be7e-772b56cafec3",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:68777790-7be5-32ef-1958-7873b7d4ec2d" },
      effectiveDateTime: "2018-03-20T05:03:37-04:00",
      issued: "2018-03-20T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:c0b46a39-94b1-a6db-d55f-5138fdf1e524",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:eb51e214-01aa-10fb-e8d3-467aff25b926",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:eb521f57-693a-07b7-7304-bbc58137634d",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:06116af1-a8ad-0e6d-a276-748aa09af91d",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:faefdcf4-052c-b924-e4ca-755e4c97f7a0",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:dbe2a563-e47b-26d0-c6b1-2aeafe0c1144",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:69908e50-e464-5bd4-b02f-8c2983f27603",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:6cec0b27-648c-40c7-78e8-abd0ee54f9c4",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:a8b15908-2878-3326-2a3d-281f28aa6c91",
    resource: {
      resourceType: "DiagnosticReport",
      id: "a8b15908-2878-3326-2a3d-281f28aa6c91",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:68777790-7be5-32ef-1958-7873b7d4ec2d" },
      effectiveDateTime: "2018-03-20T05:03:37-04:00",
      issued: "2018-03-20T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:848e6944-0457-497a-79ea-6d09babebd01",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:c43cf5c9-e608-083a-6e44-4f658c9e3ba9",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:c23a2cb6-090c-3151-ccaa-86105a7ee646",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:fd924530-d417-d2d3-69d6-ce44dce0a962",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:640296f6-06e4-32e8-e4d5-b9ebcb71f162",
    resource: {
      resourceType: "DiagnosticReport",
      id: "640296f6-06e4-32e8-e4d5-b9ebcb71f162",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:1179e7d1-7f93-f1dd-4dc7-185021ec8eb6" },
      effectiveDateTime: "2018-04-24T05:03:37-04:00",
      issued: "2018-04-24T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:c150d8fa-11e8-c2af-6103-779fd3ff0f70",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:0a7b3fea-6e79-1133-6066-70984b07b28d",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:0f7cefc3-7dab-f09b-34fd-5172e0293cd8",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:e84253a1-dedd-cc51-cad6-c5ecdf0f60f5",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:da78b08b-dd22-cdda-4195-cd4956c7e59e",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:8a9ed680-e8ea-3a5d-2ab5-238540eb28c8",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:2b474eca-ba3b-a465-f0fb-89ce6a273104",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:321e9b95-f5ee-f5e5-3e07-a234f81ff128",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:60232de2-68ba-882c-3344-f660bfc5f3d0",
    resource: {
      resourceType: "DiagnosticReport",
      id: "60232de2-68ba-882c-3344-f660bfc5f3d0",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:1179e7d1-7f93-f1dd-4dc7-185021ec8eb6" },
      effectiveDateTime: "2018-04-24T05:03:37-04:00",
      issued: "2018-04-24T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:685d5cc4-86cc-967c-0e11-52a3629da22e",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:3e776e01-a693-31fa-3169-e309a22c575b",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:ce565217-16b4-e323-ce23-4adcb2de30a3",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:2d7e7f7b-8d75-c6b2-4dda-61c17913cf4b",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:83d17038-7d4a-2d03-3983-a2984bfe4880",
    resource: {
      resourceType: "DiagnosticReport",
      id: "83d17038-7d4a-2d03-3983-a2984bfe4880",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:53f37f76-46d0-c1bf-ea4a-26729ee3c613" },
      effectiveDateTime: "2018-05-22T05:03:37-04:00",
      issued: "2018-05-22T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:f59741e0-1ad5-468a-d8c8-c1ab98c52eb8",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:813a9018-de81-2de2-3be5-c668d2f8f12b",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:836880cb-55b0-57dd-130f-dd2abbc6bb79",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:e1518091-51c0-6347-9e25-21a22506332f",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:57534e05-2ad5-2c1d-5c86-49b05c99e44f",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:3bdad274-80a3-c82c-a1af-8f3d3b0f489b",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:2abe51d6-03de-29f8-ee95-e3475aa17f13",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:87f625f7-c2fb-8dde-8a3b-be3ba73177bb",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:be2a0533-92bb-4558-2410-9e619ce90bd5",
    resource: {
      resourceType: "DiagnosticReport",
      id: "be2a0533-92bb-4558-2410-9e619ce90bd5",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:53f37f76-46d0-c1bf-ea4a-26729ee3c613" },
      effectiveDateTime: "2018-05-22T05:03:37-04:00",
      issued: "2018-05-22T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:144978fb-2238-157c-b752-218aa7ae97a0",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:dde7b301-5f68-3550-14ef-9e783f97191d",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:b13e8f23-dce2-d89f-aeb0-762f53e7ac5a",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:0ee80baa-258f-5f97-ca30-271b9e461c15",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5ea53578-c46f-9450-2819-b7a5bef6fddd",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5ea53578-c46f-9450-2819-b7a5bef6fddd",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:75b15303-3599-f583-77db-d2b242160c20" },
      effectiveDateTime: "2018-06-26T05:03:37-04:00",
      issued: "2018-06-26T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:3d42d115-19b2-3a09-50eb-76f721f6f011",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:cd3b0b5f-07ae-842f-26d7-cf296064d418",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:cb531d6d-2e4d-497d-2965-fd9be6392181",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:e36a0b08-e3e1-34f9-ffc7-fb79a3d7c06d",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:5e3a3d74-98bf-48f1-1edb-085a6b5b234e",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:f8f61b9c-bd9a-651b-f9d4-1f8d9cdbb3aa",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:a819718e-d08e-8afd-73ad-eeb7e63ac71f",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:f0a55b29-a671-848f-6367-21a3493960a6",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:091f0782-91af-c512-0994-cfda5a65fb9b",
    resource: {
      resourceType: "DiagnosticReport",
      id: "091f0782-91af-c512-0994-cfda5a65fb9b",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:75b15303-3599-f583-77db-d2b242160c20" },
      effectiveDateTime: "2018-06-26T05:03:37-04:00",
      issued: "2018-06-26T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:1423a615-1734-d11d-0eb9-174ec863421b",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:8029def3-7a7e-fc72-88dc-544d7cdb11fc",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:48e37dd3-8b60-c432-9671-464d649c9970",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:22ade5ed-a96c-af87-99f9-2cf52e965e8b",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:9b553943-d29a-15ba-092f-34649353be4f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "9b553943-d29a-15ba-092f-34649353be4f",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:af4013a0-147b-4b4c-dc9d-36222379f535" },
      effectiveDateTime: "2018-07-17T05:03:37-04:00",
      issued: "2018-07-17T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:5d1bf3a1-f038-b47e-05d7-fff2493abe6c",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:e529a2f9-d19b-5214-1000-358c892af958",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:181c12c3-8e2c-0f20-e595-c674566b5b8c",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:492ca40b-878e-148a-ef53-742ead922788",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:35f78483-6529-2513-0370-648c667355a2",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:13c0cb91-f926-f6de-819b-d6d66709732a",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:6245d4b1-382e-2132-e7e2-784685eacfce",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:2e996af8-04b7-a27e-4030-0bba59199d40",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:8fa539ec-bd5a-9a57-bb5f-baf3172198a5",
    resource: {
      resourceType: "DiagnosticReport",
      id: "8fa539ec-bd5a-9a57-bb5f-baf3172198a5",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:af4013a0-147b-4b4c-dc9d-36222379f535" },
      effectiveDateTime: "2018-07-17T05:03:37-04:00",
      issued: "2018-07-17T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:815e99f5-5128-429c-0217-58a3d9c3e515",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:f49f37c0-4ea7-555a-c0b5-9544bf7278f0",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:4bb87c4d-0640-a135-8825-c018fb7440df",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:64a93a00-de77-6e67-2c4b-9c94b2458c04",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:12a2073e-1415-3f51-ffff-fb14023be946",
    resource: {
      resourceType: "DiagnosticReport",
      id: "12a2073e-1415-3f51-ffff-fb14023be946",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:51c47308-d5b1-3558-b99d-90b39974f69d" },
      effectiveDateTime: "2019-01-22T04:03:37-05:00",
      issued: "2019-01-22T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:fedf2556-b221-4fee-eebf-e04a9785a9c3",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:9add5b6c-1013-4e70-2e94-7a2d4e400d32",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:e0babd5e-ab46-32a0-0c13-418e67b68133",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:2c86ea81-ea68-6d28-9f0d-31a6581571e1",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:3c44b656-7c80-e72e-df95-9a656e9f672a",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:2cb2b262-0d96-2991-e924-f05eff44c7b2",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:ea320145-a90a-3471-8504-2802f23a65f7",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:ebdec70d-bd5d-caf5-0b36-101329893bb5",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:844bb6c2-c1c3-2b63-3e12-0c41bb03071e",
    resource: {
      resourceType: "DiagnosticReport",
      id: "844bb6c2-c1c3-2b63-3e12-0c41bb03071e",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:51c47308-d5b1-3558-b99d-90b39974f69d" },
      effectiveDateTime: "2019-01-22T04:03:37-05:00",
      issued: "2019-01-22T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:0c4ecaca-f6f6-3747-6277-5f4f4753f78a",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:3da01d5f-b7ac-cae3-0c45-69733c3540dd",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:26cad998-ef9f-9f11-f466-af645de3d5fc",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:3bc65181-6d2f-59af-db6f-bea4b977e884",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:b58f485f-34f3-92e6-91c5-fd2ad09f41af",
    resource: {
      resourceType: "DiagnosticReport",
      id: "b58f485f-34f3-92e6-91c5-fd2ad09f41af",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:0e31dab6-21e5-5c2e-2275-a05137779eb4" },
      effectiveDateTime: "2019-02-19T04:03:37-05:00",
      issued: "2019-02-19T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:dc9ce478-4e01-91d3-011b-699732bca14a",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:2374234a-8769-a264-bd91-d106c8656cc9",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:36fbb5f1-20d9-68ee-1323-9486844bf672",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:a2222eea-e955-f189-89d7-47812a28a061",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:edbb9c7f-1cfd-ffa4-4761-0a96a3c15d8f",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:4cc735ef-1c41-8527-f3fa-9df94ed0f79b",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:d94627ed-61f6-e7d8-4df9-c4f615f66ccc",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:644e344d-28b4-b8ff-af30-ced4f12daa56",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:82558991-8756-bc4a-e430-6dcb5e838a99",
    resource: {
      resourceType: "DiagnosticReport",
      id: "82558991-8756-bc4a-e430-6dcb5e838a99",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:0e31dab6-21e5-5c2e-2275-a05137779eb4" },
      effectiveDateTime: "2019-02-19T04:03:37-05:00",
      issued: "2019-02-19T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:4f7a18fc-7d1c-c34b-cb8e-58e4daa326dc",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:d184f22f-ae2f-92f6-4a2e-9dd281c82136",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:3afd0be0-e48d-dc28-0a61-e63a98a58773",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:cdcdd676-87ff-6398-4250-ee804ac7ca21",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:31842b0f-aa3f-c15e-2892-92612e40489e",
    resource: {
      resourceType: "DiagnosticReport",
      id: "31842b0f-aa3f-c15e-2892-92612e40489e",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:daa61ba9-0307-6ff2-bf8b-ea0b6b582353" },
      effectiveDateTime: "2019-03-19T05:03:37-04:00",
      issued: "2019-03-19T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:81d92bbd-3dfd-3b7d-6bd0-8377aa0122af",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:89692aa7-70aa-137c-6fb6-469dd9b00122",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:8459abd9-a624-9b4b-0996-0df2f3017427",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:1e103e69-86ee-d53d-d9d1-d2cb477d24d5",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:2008d1fb-2361-9421-a676-c1b618432e8e",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:906fe874-6deb-5cea-21ec-a55d1c27133f",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:29c1aef2-b329-3e91-1db0-aa90ffcf2fe6",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:0c8d31ff-e2da-c43a-36ef-d1a0f6b87554",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e3ab6cf0-f03d-479c-8099-7bebb88d7bc2",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e3ab6cf0-f03d-479c-8099-7bebb88d7bc2",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:daa61ba9-0307-6ff2-bf8b-ea0b6b582353" },
      effectiveDateTime: "2019-03-19T05:03:37-04:00",
      issued: "2019-03-19T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:22ba2104-4920-6595-2346-a0ea9bb66934",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:1ea2d4fa-d486-1987-6a30-ecb56283b34b",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:e73b8e68-1951-ef08-150d-c83caa77bb00",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:689b1e88-f7a8-d04e-9148-f40dd0ba191f",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:b6f7232c-d609-b72c-6663-d40c71ca9ab7",
    resource: {
      resourceType: "DiagnosticReport",
      id: "b6f7232c-d609-b72c-6663-d40c71ca9ab7",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:0a07bcda-eaaa-0b58-668f-0eeba5184730" },
      effectiveDateTime: "2019-03-26T05:03:37-04:00",
      issued: "2019-03-26T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:b0d70b5e-4e7f-9d60-f271-595808cdc988",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:cd45fa41-9abc-d49c-f081-fceee2f59fad",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:fd4fdd18-a73a-a636-def8-5b8fea1c4736",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:9b78d726-a801-e02e-f133-28742e8fc769",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:4410259f-743d-b530-6719-e8d3768017e0",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:dfaf0b10-acc0-34f5-abde-0e71ac88698d",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:d2f67e1f-a0ab-66e9-671a-a77f91957bfe",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:40ec8f77-0dbe-eb0e-269e-b7a34a8582e1",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5fa50146-b885-1e58-dc81-fef94cd68ad8",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5fa50146-b885-1e58-dc81-fef94cd68ad8",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:0a07bcda-eaaa-0b58-668f-0eeba5184730" },
      effectiveDateTime: "2019-03-26T05:03:37-04:00",
      issued: "2019-03-26T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:0df5bafc-5764-451f-575b-8e4beca25fca",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:b8759846-6492-35f8-21b1-ae5236df3434",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:9ce59e4c-9341-c734-2dec-1abdacce8fc5",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:3ce7ee5f-8eb5-ed18-3263-1ce44bd6bed6",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:409522a9-9962-4439-395c-bf6d280394a0",
    resource: {
      resourceType: "DiagnosticReport",
      id: "409522a9-9962-4439-395c-bf6d280394a0",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:20affa0e-8154-90fc-f7b2-186ad426fcdd" },
      effectiveDateTime: "2019-04-16T05:03:37-04:00",
      issued: "2019-04-16T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:e20f1bac-d0e4-15ea-3837-078fd70c1997",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:071c6bcd-5c82-1a4e-25dc-a96628276ac0",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:0521c9f6-53ad-4ecf-3c88-8c3016806abd",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:c6a4519d-43ed-1ab7-0471-23a8dd0ee42e",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:bab64945-af6f-549c-f499-fbaa803f2da7",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:e171fff5-7f3e-c4c0-f95f-14bdfce58cb3",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:34408ddd-b874-e9ba-d080-f5f098d6451a",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:9eff6c5e-04b0-e355-3cff-87ece658d866",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:23e1147c-e03b-f211-28b2-2a018cb5d0d2",
    resource: {
      resourceType: "DiagnosticReport",
      id: "23e1147c-e03b-f211-28b2-2a018cb5d0d2",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:20affa0e-8154-90fc-f7b2-186ad426fcdd" },
      effectiveDateTime: "2019-04-16T05:03:37-04:00",
      issued: "2019-04-16T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:08d3192e-3e57-a7b7-a35f-0d460a1139a4",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:4da438d5-72bf-e6c5-bcd3-cc13eb61f967",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:1727ec5d-e1ae-3fc6-a286-3cc245f6ae11",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:c52b4e4a-80ac-ad46-72ea-d224b8561c55",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:3d04b403-ae28-624a-f76f-4e55f6cf8873",
    resource: {
      resourceType: "DiagnosticReport",
      id: "3d04b403-ae28-624a-f76f-4e55f6cf8873",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:ca87b610-8121-902a-e3fe-9a2fe8471409" },
      effectiveDateTime: "2019-06-18T05:03:37-04:00",
      issued: "2019-06-18T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:ba92ad2f-4529-004b-9c4e-f9bd35300184",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:9302c09d-3f8c-d50a-9c34-d6d21a1e3ecb",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:19b969c0-ca78-d8cc-22d9-2c30199472aa",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:1d30f63f-c0bf-4e08-b195-ca88fa3a1084",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:e29a7004-937d-d832-e90a-6f74d5032daf",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:adce1454-54ec-2740-66e4-64a7b828029f",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:c7e3a81e-f86b-5769-1d24-5e6540b0da43",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:010b3d97-d9c5-092f-333f-4d355bc713ae",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:ae24f486-64da-a104-fd49-34433c6631f5",
    resource: {
      resourceType: "DiagnosticReport",
      id: "ae24f486-64da-a104-fd49-34433c6631f5",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:ca87b610-8121-902a-e3fe-9a2fe8471409" },
      effectiveDateTime: "2019-06-18T05:03:37-04:00",
      issued: "2019-06-18T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:82b43f07-1ef5-759f-de0e-16d3b0e219fa",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:a999d2dc-4bcc-02d7-e24b-6a6bf5f17669",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:9928ed07-8962-1cc9-959e-2404fd1360cc",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:ec25a186-dd20-563d-cf21-f339aa797228",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:0ba1b3e7-f300-958a-8870-4e8777aa00a6",
    resource: {
      resourceType: "DiagnosticReport",
      id: "0ba1b3e7-f300-958a-8870-4e8777aa00a6",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:28cdef4e-363c-6f5e-bdab-a1cdb7c01c9a" },
      effectiveDateTime: "2019-08-20T05:03:37-04:00",
      issued: "2019-08-20T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:45be4a1d-aa96-0636-ffa8-8461623f352b",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:e71d5d61-cd7a-778d-9587-7bb78354e01c",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:73504af7-ca90-07ba-57ad-6932036b634b",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:8c558759-0d4f-4319-ef80-5b911105621b",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:ce442fb4-dc00-95d6-dd52-939c7c7e83ac",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:a90019e0-1cac-4ed6-575c-973344198a5f",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:d10a6f89-f54d-6cd7-78dc-e1a28259df98",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:ffe448b3-4781-99d5-8011-c53a9e8397c6",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:bd2575c3-5522-94a7-f8d4-50b9f80d6d55",
    resource: {
      resourceType: "DiagnosticReport",
      id: "bd2575c3-5522-94a7-f8d4-50b9f80d6d55",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:28cdef4e-363c-6f5e-bdab-a1cdb7c01c9a" },
      effectiveDateTime: "2019-08-20T05:03:37-04:00",
      issued: "2019-08-20T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:c9dbf95c-e6b2-f8af-37f7-521e934932a0",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:07750682-485e-a90a-aefc-565ac25e9bb0",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:ef25f648-0ae5-2575-d37e-cb3b011d2f14",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:30266f72-267f-dfce-db11-43d93adcc683",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5bcbf9c1-55aa-b05b-6f8b-813495375a4d",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5bcbf9c1-55aa-b05b-6f8b-813495375a4d",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:a6684651-8faa-deb8-6ed7-d3d77eb93e8c" },
      effectiveDateTime: "2019-09-17T05:03:37-04:00",
      issued: "2019-09-17T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:e807c202-6b44-1470-c46c-1216db44dfa5",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:d01638e9-19ff-9935-4fa4-a52757f7627f",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:4fbd4413-b2b8-8249-1b8a-33de674f342f",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:23a2462c-9df8-f006-322c-4dc368e0a063",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:3dede317-000e-37a6-6774-7f57e0796541",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:664b523f-fa26-6909-e196-5e8f4bf638d2",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:cbda0238-0b99-ecb5-cd0f-6a7cfc20c09d",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:4b5d6186-de22-7e1d-6398-b24ba682df92",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:7f4ee110-88a9-f563-711f-1af0bb92e4be",
    resource: {
      resourceType: "DiagnosticReport",
      id: "7f4ee110-88a9-f563-711f-1af0bb92e4be",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:a6684651-8faa-deb8-6ed7-d3d77eb93e8c" },
      effectiveDateTime: "2019-09-17T05:03:37-04:00",
      issued: "2019-09-17T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:e45fe0b9-dc11-0625-2d17-7775dd867e2a",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:25bb81bf-10a8-19e5-a8b9-3f2ff80730cb",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:be4b8871-88d9-21ad-de3b-072293ed6070",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:2eb02076-81fe-6c48-2b22-91610ec0d989",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:d1c6c5e5-a94f-dfdc-1621-a849c9b267a7",
    resource: {
      resourceType: "DiagnosticReport",
      id: "d1c6c5e5-a94f-dfdc-1621-a849c9b267a7",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:e33b9e05-0c59-a368-d3cc-86b4bde04791" },
      effectiveDateTime: "2019-12-17T04:03:37-05:00",
      issued: "2019-12-17T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:41286737-b6c5-7fe4-a2af-a8ce71ecf614",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:effbda90-b250-d619-3dd5-990a0ad49991",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:3ed634d2-01a7-5a0d-9118-d80bdc65987d",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:4525d45f-c39a-8fe1-362d-6e3bc141dc54",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:d4a1bb64-6e17-87e4-f170-6e0de0e9b0d9",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:85f27b26-bef0-8959-cbe1-c1732c9e7682",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:bdae00a2-0550-257c-bbe8-da91efd39713",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:676b1654-d71b-f6c7-e2e7-3bb69aa7a088",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:ea556ff6-1da1-88dd-0a2d-7990ce01a37c",
    resource: {
      resourceType: "DiagnosticReport",
      id: "ea556ff6-1da1-88dd-0a2d-7990ce01a37c",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:e33b9e05-0c59-a368-d3cc-86b4bde04791" },
      effectiveDateTime: "2019-12-17T04:03:37-05:00",
      issued: "2019-12-17T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:7baaaf57-3d2d-9071-ce57-0a8ac019aa37",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:aaa24fae-4aac-6236-9c63-2284e64d6836",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:cad425df-c73b-945d-f0c9-5aa06f7290f9",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:d416a9c9-2d5b-1ff7-d6ae-f24da40a7940",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:318f54b4-62fc-5d5d-06ea-733832377e55",
    resource: {
      resourceType: "DiagnosticReport",
      id: "318f54b4-62fc-5d5d-06ea-733832377e55",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:0979f956-4e47-1c83-cd47-d010930479b7" },
      effectiveDateTime: "2020-01-07T04:03:37-05:00",
      issued: "2020-01-07T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:949cfd14-a367-2584-915c-51b1ab48fcd2",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:5729a4d9-65be-3840-b128-0f2240b92aee",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:c307b505-b042-9b9f-b344-f36647b2a102",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:abfaea3a-f659-d1bd-71b5-166b4ce2589d",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:cb55e71a-e867-379a-0d4b-07f6f578e896",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:eb92c941-0286-a8f9-3090-6fb4999ea597",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:72ab9972-70f2-fe8a-e5ee-1a8f90eac6df",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:d88d0b10-add3-ca4a-03b7-0942eaa19343",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:6f14b28b-6f64-022c-db70-fae86329680a",
    resource: {
      resourceType: "DiagnosticReport",
      id: "6f14b28b-6f64-022c-db70-fae86329680a",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:0979f956-4e47-1c83-cd47-d010930479b7" },
      effectiveDateTime: "2020-01-07T04:03:37-05:00",
      issued: "2020-01-07T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:edb13ed7-31ff-f62a-c0bd-54315539da75",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:1c977cc1-eaf9-28ee-8730-f87179ea3e88",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:92a9194d-ae3e-1558-2ef5-e22d7e0311b3",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:796af9e1-c350-1785-9d9f-c82c2ce1cc54",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:46244089-4ad5-c5fa-4584-6f87ae1c05cf",
    resource: {
      resourceType: "DiagnosticReport",
      id: "46244089-4ad5-c5fa-4584-6f87ae1c05cf",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:20df0fb5-d0df-fe4e-5ac6-2af2e8c8fb5e" },
      effectiveDateTime: "2020-02-11T04:03:37-05:00",
      issued: "2020-02-11T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:cf5a650e-d0e5-09da-49ea-1efc4dc2fff1",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:423a089b-a48b-129a-d08f-c84ee375f64a",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:590971c4-208f-bca6-b10a-bcdb448ef4d8",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:9058eb18-1610-6627-618e-c0d1287c9941",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:a355524c-2105-bec5-1a7f-525831a90618",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:fcfa5f2d-075b-358e-6654-4b9d5de0dd61",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:82ade5d0-9a74-e11b-af5e-122d1ed0df54",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:3310880f-0469-45f5-a5cc-e785fdf83161",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:31af1c42-35e7-34fc-4fb9-21efcac39cd7",
    resource: {
      resourceType: "DiagnosticReport",
      id: "31af1c42-35e7-34fc-4fb9-21efcac39cd7",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:20df0fb5-d0df-fe4e-5ac6-2af2e8c8fb5e" },
      effectiveDateTime: "2020-02-11T04:03:37-05:00",
      issued: "2020-02-11T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:8fa38a30-eea6-9f34-6284-2eea78c99174",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:65aabee8-2111-8d69-aa7b-bc765c95f97a",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:f5acbe7f-8125-4fbd-67fe-81736a7f7722",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:d062dd53-867b-eb5a-a437-29eb8a5b3be7",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:cd6ab3a0-c83e-9c81-7d58-7922485fb1ae",
    resource: {
      resourceType: "DiagnosticReport",
      id: "cd6ab3a0-c83e-9c81-7d58-7922485fb1ae",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "92143-7",
            display:
              "Respiratory pathogens DNA and RNA panel - Respiratory specimen by NAA with probe detection",
          },
        ],
        text: "Respiratory pathogens DNA and RNA panel - Respiratory specimen by NAA with probe detection",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:39c297e3-1533-8a63-7ed1-382ba22a446e" },
      effectiveDateTime: "2020-03-07T04:14:19-05:00",
      issued: "2020-03-07T04:14:19.519-05:00",
      result: [
        {
          reference: "urn:uuid:e14a0ab4-7c6b-ad76-3dda-f8c4f072b5e1",
          display:
            "Influenza virus A RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:8de5e076-5282-a4e9-3b65-d6b10c4ded80",
          display:
            "Influenza virus B RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:3a8edd29-3a92-9c19-e3f9-4e498e753bed",
          display:
            "Respiratory syncytial virus RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:9054a32f-82f9-8e5f-2402-57ae3d4bbbee",
          display:
            "Parainfluenza virus 1 RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:7af1a3a8-88aa-b850-1b48-064a19d08fae",
          display:
            "Parainfluenza virus 2 RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:091e86e1-0d7a-491c-1cb5-e8688f188abf",
          display:
            "Parainfluenza virus 3 RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:25cf280a-0328-463b-fdb4-4c0dd429f862",
          display:
            "Rhinovirus RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:7597182b-6dc3-8545-7cff-7d03a9d80206",
          display:
            "Human metapneumovirus RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:44dedc57-1627-e021-ee6c-50335c0f7a0e",
          display:
            "Adenovirus A+B+C+D+E DNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:dfa9f04d-4df8-c690-2e70-660c0b507948",
    resource: {
      resourceType: "DiagnosticReport",
      id: "dfa9f04d-4df8-c690-2e70-660c0b507948",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "94531-1",
            display: "SARS-CoV-2 RNA Pnl Resp NAA+probe",
          },
        ],
        text: "SARS-CoV-2 RNA Pnl Resp NAA+probe",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:39c297e3-1533-8a63-7ed1-382ba22a446e" },
      effectiveDateTime: "2020-03-07T04:50:45-05:00",
      issued: "2020-03-07T04:50:45.519-05:00",
      result: [
        {
          reference: "urn:uuid:f8725b20-ebe9-0762-9119-90344cdf0ed7",
          display: "SARS-CoV-2 RNA Pnl Resp NAA+probe",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:0de4cc46-61f2-5ac2-ed7f-ee16fc92fe07",
    resource: {
      resourceType: "DiagnosticReport",
      id: "0de4cc46-61f2-5ac2-ed7f-ee16fc92fe07",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:39c297e3-1533-8a63-7ed1-382ba22a446e" },
      effectiveDateTime: "2020-03-10T05:03:37-04:00",
      issued: "2020-03-10T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:70b08a2f-cb5b-8ba6-fdca-373043b20ab5",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:a93ba154-a13a-79c6-4ee2-79c0baeb79ec",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:41f1d696-97be-4c2b-2818-f128a8fca202",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:c8409669-3c4c-ba2f-48ef-0e474024a785",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:b17765ab-3992-d608-c44e-a01bd6cba2ad",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:69d9b162-54a6-346f-5475-0c9e3328499c",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:4fd165aa-961e-6a82-8818-c2cbeb1f7ae5",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:863f7fec-19ae-05ea-8eab-3a01e1336c52",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:989e7ea2-166f-903a-33ea-fa60ae0ec48d",
    resource: {
      resourceType: "DiagnosticReport",
      id: "989e7ea2-166f-903a-33ea-fa60ae0ec48d",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:39c297e3-1533-8a63-7ed1-382ba22a446e" },
      effectiveDateTime: "2020-03-10T05:03:37-04:00",
      issued: "2020-03-10T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:1f07104c-fd90-6340-34eb-128d787081e1",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:afc25e66-6094-06ac-4a1f-2b81bba21110",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:65592538-8fdf-5acf-928c-c1cab7f9945a",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:cb2a1a61-df07-f9e2-5a47-ec81c4f71300",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:516ec79c-6543-ae51-aef5-78e1615b4a60",
    resource: {
      resourceType: "DiagnosticReport",
      id: "516ec79c-6543-ae51-aef5-78e1615b4a60",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:f3cb4b64-00ec-da01-7c61-bdbb3cc6726b" },
      effectiveDateTime: "2020-03-31T05:03:37-04:00",
      issued: "2020-03-31T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:35eab02c-0d63-736d-9d80-6225183c6b1f",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:04ca5f45-40c5-955f-8c56-fac4653b6ea4",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:674ba9ef-401f-132a-621b-3dd02f6a71e1",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:62b00ffc-9ab2-440f-f284-5b8b4edd4228",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:5e047685-2bd5-086f-61e2-ad4d14de4256",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:23ba70d5-59b0-11b5-b558-2996c6b1cf59",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:d4d8a4a6-92d0-4473-991b-8566e98ce8f2",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:6950bd94-3269-98cb-3abb-96ccf44722bb",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f12b6010-31e1-ad15-8466-de19d0beffec",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f12b6010-31e1-ad15-8466-de19d0beffec",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:f3cb4b64-00ec-da01-7c61-bdbb3cc6726b" },
      effectiveDateTime: "2020-03-31T05:03:37-04:00",
      issued: "2020-03-31T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:defca3c5-873d-1d10-869d-ccbe6d4c216b",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:62abe9f2-5409-feac-504b-d026a8d12859",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:57c5a683-cc8b-bd43-c9d1-a244f8977b3e",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:6a922c1b-3d85-ec18-a0ae-cc32e3cc983e",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5fcff325-0987-5c3b-4031-3b56b1aef6ea",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5fcff325-0987-5c3b-4031-3b56b1aef6ea",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:acb8edfa-31d3-6708-9d76-3a6a63d284f4" },
      effectiveDateTime: "2020-04-21T05:03:37-04:00",
      issued: "2020-04-21T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:80961d4a-a68d-4763-0093-8b97023a2b47",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:9dfc3017-98bb-7e8f-deaa-fd962e20f06e",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:2e9f8436-3163-c3e9-8ce7-0dc963eea772",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:69c03cad-9fbd-03ed-bab8-0bd052a4b311",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:bebac58b-456d-9348-0eba-307d495fff7d",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:c8821c8c-5cdd-db77-9e34-77a6b78039a8",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:04a97113-9af6-adad-ebca-c33e5874b6c2",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:77534f64-c8b7-5ff9-3fc6-9ba04cf1cfff",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:7de2be3f-db10-1825-8a65-99fcac91ab85",
    resource: {
      resourceType: "DiagnosticReport",
      id: "7de2be3f-db10-1825-8a65-99fcac91ab85",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:acb8edfa-31d3-6708-9d76-3a6a63d284f4" },
      effectiveDateTime: "2020-04-21T05:03:37-04:00",
      issued: "2020-04-21T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:e80bcb0d-692e-18a8-9ebb-212a7639b69d",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:19f65c9f-541e-ebe7-527e-030fd9500425",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:530f66a6-534c-afad-5eb8-8f70bf9f8af0",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:edcc95d7-0220-a9d7-22f1-30a49d0e2aec",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:cefa5295-efe3-be7c-93e8-bce205fbc40e",
    resource: {
      resourceType: "DiagnosticReport",
      id: "cefa5295-efe3-be7c-93e8-bce205fbc40e",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:b3770587-e59b-8138-a1a0-2150f58a5e81" },
      effectiveDateTime: "2020-05-12T05:03:37-04:00",
      issued: "2020-05-12T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:e3b52b9c-9ff1-596e-16ec-518804e739b4",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:3c0b54a5-80ec-3eb6-46f9-eb4179a6420b",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:e0cef6d5-7c25-bf85-714d-71aa732babda",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:79d60788-4b2d-0140-d3c1-ac04b0a155d8",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:cd94583a-cada-f61f-ea41-e2e61ece2dd0",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:5bc7f13e-6622-b3c8-2e86-1c06986c21ef",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:db83e3a8-9e3e-103a-8236-bf57a415623e",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:1fc1c68c-970c-a8ec-20fc-f959bb05b66c",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f1868ed1-8a31-fb95-33f7-475f67a263ec",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f1868ed1-8a31-fb95-33f7-475f67a263ec",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:b3770587-e59b-8138-a1a0-2150f58a5e81" },
      effectiveDateTime: "2020-05-12T05:03:37-04:00",
      issued: "2020-05-12T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:f371536b-a339-b835-ba86-6eac9474ebd1",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:5180d5e9-c61f-5cee-35d8-14e77a1b9faf",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:1dd062c3-37a4-3855-38b5-44a58bc3e9ba",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:8cad09fe-82ba-8634-cc9d-58e795dbaad9",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:3e8f0388-5f61-6ff6-0104-c2c05b3cbab8",
    resource: {
      resourceType: "DiagnosticReport",
      id: "3e8f0388-5f61-6ff6-0104-c2c05b3cbab8",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:26d5d02c-7acf-6678-e6bb-0cfbdcf41797" },
      effectiveDateTime: "2020-07-14T05:03:37-04:00",
      issued: "2020-07-14T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:b966f03d-4cbf-57ad-942a-3b3ec6213c29",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:eb1c6e05-3552-cb81-4d2e-8f9cab7698ac",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:1fe9af0e-8951-86ee-7a19-7a8d99dfe616",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:06382379-b834-7002-9102-c46b48d1871a",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:559ff3e6-0510-819e-df58-c56c602cb3fa",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:66910401-aa4d-dc7d-5fcc-3c5e767f9d29",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:39f10a61-f0d0-6474-0696-5c90f0529431",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:49e2d195-6fb6-6dfb-a33d-471679a45ed6",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:4e6304ae-68f6-96c2-a37c-720cb4c3ba21",
    resource: {
      resourceType: "DiagnosticReport",
      id: "4e6304ae-68f6-96c2-a37c-720cb4c3ba21",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:26d5d02c-7acf-6678-e6bb-0cfbdcf41797" },
      effectiveDateTime: "2020-07-14T05:03:37-04:00",
      issued: "2020-07-14T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:d397f676-3916-3feb-c88a-632a4036187b",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:564fb7c1-8f6b-6d88-bea9-49ec346945c5",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:0abaaaea-daf1-4cc2-3f9d-39565d78fe7e",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:71246a2b-7638-0cb7-bea6-4269d70151bb",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:6836e099-658f-0348-cd9d-056178b46ae2",
    resource: {
      resourceType: "DiagnosticReport",
      id: "6836e099-658f-0348-cd9d-056178b46ae2",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:4ba716b0-13fa-5843-0a5a-706e10ed1e03" },
      effectiveDateTime: "2020-10-13T05:03:37-04:00",
      issued: "2020-10-13T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:851b8f61-b0c8-ec68-a580-bdae606bf922",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:54a28a16-4bb4-912b-2f44-37ad96deb542",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:c94fb869-3e1d-10ba-94a8-fe1f1be9ad01",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:17105e7e-1c3e-a20a-e0d0-fc3196369c43",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:c73164c2-7efb-a511-2a7b-31ffcdc7e8df",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:b8f64ef8-048f-ce43-6f15-d3bd16a8a3c7",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:f4c01090-b04c-0659-6176-a82da538f86c",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:a4dc523f-8fca-0253-b716-5a5825c7ae60",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:d6120b54-1598-acf7-8a98-425fea03e3ed",
    resource: {
      resourceType: "DiagnosticReport",
      id: "d6120b54-1598-acf7-8a98-425fea03e3ed",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:4ba716b0-13fa-5843-0a5a-706e10ed1e03" },
      effectiveDateTime: "2020-10-13T05:03:37-04:00",
      issued: "2020-10-13T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:478afccd-d572-d7c0-0342-b279490fa13c",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:78511d29-a424-113d-1e86-ea3b3f3a52c3",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:908d75c2-ba73-073a-60c8-9026b176fb47",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:79b4511a-2dc6-8103-398a-ae56b147bc4b",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e1fbddce-e3c0-efea-8f43-0e864c1e6278",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e1fbddce-e3c0-efea-8f43-0e864c1e6278",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:94d6c430-e563-8513-2571-259f0ac0ea2d" },
      effectiveDateTime: "2020-12-08T04:03:37-05:00",
      issued: "2020-12-08T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:9ad2f029-47cf-37d6-f976-7b8b54463f89",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:e4bc1a51-c269-5851-d55e-6c8041d5fc48",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:ff88d5c8-62c6-2cb5-cc0b-70166078b5ed",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:d6eec1d1-1777-98a3-aad4-1ea2c8d28bde",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:60d12ace-e6cd-e2fa-df06-0c582596d557",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:706f3a8c-be5d-c1a0-113a-e3b347789cd6",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:3ad459dc-1af4-dd82-82c0-3336e71cedb9",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:67f4975e-7984-12d8-cdc1-e25f0531d824",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:760e9320-9d92-0796-7d91-77182f95fd06",
    resource: {
      resourceType: "DiagnosticReport",
      id: "760e9320-9d92-0796-7d91-77182f95fd06",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:94d6c430-e563-8513-2571-259f0ac0ea2d" },
      effectiveDateTime: "2020-12-08T04:03:37-05:00",
      issued: "2020-12-08T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:f82827a1-6c36-f1ad-ef72-81cf7d974f28",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:a556526f-2c64-429e-df6b-eacce1b54521",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:1b516163-7a7b-93e1-cc35-e1ee49ecaa5f",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:a0ea63be-bcd0-1289-b987-b1142cc73207",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:d2e8ce02-fbb7-ed1f-959b-7b09b8c44160",
    resource: {
      resourceType: "DiagnosticReport",
      id: "d2e8ce02-fbb7-ed1f-959b-7b09b8c44160",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:3d791c6c-2e4c-dacf-1aae-1d516a824c62" },
      effectiveDateTime: "2021-03-09T04:03:37-05:00",
      issued: "2021-03-09T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:24843d57-17e4-5403-2879-1f8e05cb30d2",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:fa313c9f-ca80-6adf-9b02-be3bd7e15ce0",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:69203023-fe60-5157-f7ac-c05c30056069",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:bf1820dc-e90f-c4b8-080b-2e1bc36e5cf7",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:1745a2f5-3a98-6c12-cdbf-e9b616b20014",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:93c05355-a69b-483f-78a2-f92889139cea",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:1a721a80-8c42-a023-09b9-372b1378bc29",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:baaf489f-1baf-ed34-8730-9f5d6f3c462d",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f040b92e-c15c-2ee1-41a6-74a1a7e92ced",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f040b92e-c15c-2ee1-41a6-74a1a7e92ced",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:3d791c6c-2e4c-dacf-1aae-1d516a824c62" },
      effectiveDateTime: "2021-03-09T04:03:37-05:00",
      issued: "2021-03-09T04:03:37.519-05:00",
      result: [
        {
          reference: "urn:uuid:fe2bded4-9fbd-8c3c-5558-a9c00107ab5f",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:f5eb99db-c224-365d-ed00-6967746baeda",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:c78f91cf-a290-8655-d80b-626dd468b752",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:e23d8346-df35-0e03-e4a9-4b29a5b0ca31",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:b4f96703-f305-08f5-d847-05a00cf3cdf7",
    resource: {
      resourceType: "DiagnosticReport",
      id: "b4f96703-f305-08f5-d847-05a00cf3cdf7",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:4b2049b2-7b46-a972-442e-e2bd1f82bcdc" },
      effectiveDateTime: "2021-04-06T05:03:37-04:00",
      issued: "2021-04-06T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:17ee4336-a850-4d4e-1865-2845ad0e295d",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:857c6da6-0e7e-08bc-12b5-b8ad85f9651f",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:87dd7546-9c0a-a8c6-fa30-acf04731d66b",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:f3b46b18-7b18-bc61-0045-6b56575728cc",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:3d00b546-65b2-8b1e-794e-230eb0a1ef35",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:0b5eeae2-acbb-58d3-273e-f0fad3fcca46",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:92cf36d5-123e-bf7a-0e61-fdc572932ecd",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:858a7611-2a41-4358-dc6e-e93626a7908f",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:67dd0d28-f783-54b0-e16b-b2328eeb750b",
    resource: {
      resourceType: "DiagnosticReport",
      id: "67dd0d28-f783-54b0-e16b-b2328eeb750b",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:4b2049b2-7b46-a972-442e-e2bd1f82bcdc" },
      effectiveDateTime: "2021-04-06T05:03:37-04:00",
      issued: "2021-04-06T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:964e8509-61c3-8561-f05d-16c7a95af547",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:ac1d7062-cadb-b7da-df35-af79952c33ee",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:4ff27cea-64df-3940-1123-6ce20495643c",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:edab3ac8-f2d0-7968-3f4b-81880d92426e",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:cd590c32-dd25-ee0d-ad11-2ae9b7b42f63",
    resource: {
      resourceType: "DiagnosticReport",
      id: "cd590c32-dd25-ee0d-ad11-2ae9b7b42f63",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51990-0",
            display: "Basic Metabolic Panel",
          },
        ],
        text: "Basic Metabolic Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:501e3e27-4c40-1ab1-7da3-3fe2c10eb5fb" },
      effectiveDateTime: "2021-04-13T05:03:37-04:00",
      issued: "2021-04-13T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:e6612ef8-439c-d1c4-803b-f3c527138e29",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:eafd1467-3bd6-b8ad-2f17-0f3f45e0cd15",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:d5e5ba9d-3636-aa49-5bcc-cb8df5dcc26c",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:f76d2338-2944-b664-66d3-61624fb16cba",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:3b76f1d1-10e5-39fb-6868-739cb0404104",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:2c4f44b6-0874-dbdb-92a6-f925937b3209",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:c849e4dc-1195-2f88-9331-6ffc823067c9",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:6e100113-3366-225f-4be3-ad905c5b6b4a",
          display: "Carbon Dioxide",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:3414733e-e96c-e5d5-1aa7-d981ab74444e",
    resource: {
      resourceType: "DiagnosticReport",
      id: "3414733e-e96c-e5d5-1aa7-d981ab74444e",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:501e3e27-4c40-1ab1-7da3-3fe2c10eb5fb" },
      effectiveDateTime: "2021-04-13T05:03:37-04:00",
      issued: "2021-04-13T05:03:37.519-04:00",
      result: [
        {
          reference: "urn:uuid:bf31e87b-5b06-96fe-ed60-e04c0976ca99",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:b7f57836-2ef8-d2e3-7e87-96758675790e",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:65b1305e-71ad-a253-a21e-de3985bb6fd4",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:d58f2439-5643-567c-c5ac-d30444e152a9",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:70b3e0bd-3f1c-a7f1-279f-41d46fc2c43b",
    resource: {
      resourceType: "DiagnosticReport",
      id: "70b3e0bd-3f1c-a7f1-279f-41d46fc2c43b",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "58410-2",
            display:
              "Complete blood count (hemogram) panel - Blood by Automated count",
          },
        ],
        text: "Complete blood count (hemogram) panel - Blood by Automated count",
      },
      subject: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:685963bc-831e-61ff-4d5a-d722aca7912a" },
      effectiveDateTime: "2012-05-26T01:51:28-04:00",
      issued: "2012-05-26T01:51:28.467-04:00",
      result: [
        {
          reference: "urn:uuid:b045ac87-5a5e-7634-5dcd-c6e0c7a502a1",
          display: "Leukocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:6237d567-5df2-48fe-8c92-87d04d428810",
          display: "Erythrocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:41f5866f-1272-de3a-f48a-05d41b37c177",
          display: "Hemoglobin [Mass/volume] in Blood",
        },
        {
          reference: "urn:uuid:014faec2-54b0-23db-9ecb-455ba5d8394e",
          display: "Hematocrit [Volume Fraction] of Blood by Automated count",
        },
        {
          reference: "urn:uuid:a66cf8ad-e2e2-149c-983e-8c08321c9516",
          display: "MCV [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:53ebadc4-8f3f-3354-37ed-5b6ac5ac72d4",
          display: "MCH [Entitic mass] by Automated count",
        },
        {
          reference: "urn:uuid:18fb394b-b22e-e78e-ae10-d411bca429bc",
          display: "MCHC [Mass/volume] by Automated count",
        },
        {
          reference: "urn:uuid:1fa0ecd9-256c-8f58-bb74-c4c4e929622b",
          display:
            "Erythrocyte distribution width [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:4c71eb36-9169-5a5b-dd65-ea0c5a9cb8da",
          display: "Platelets [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:33465d8b-d488-422b-e8c6-21f43c65e150",
          display:
            "Platelet distribution width [Entitic volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:b60856bd-d9b0-b3e0-d749-98123a3afb98",
          display:
            "Platelet mean volume [Entitic volume] in Blood by Automated count",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:a68263c5-4741-119a-7e65-5457b3c39f66",
    resource: {
      resourceType: "DiagnosticReport",
      id: "a68263c5-4741-119a-7e65-5457b3c39f66",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "58410-2",
            display:
              "Complete blood count (hemogram) panel - Blood by Automated count",
          },
        ],
        text: "Complete blood count (hemogram) panel - Blood by Automated count",
      },
      subject: { reference: "urn:uuid:d6082275-bd0e-1ad4-4d3b-169b78db32f6" },
      encounter: { reference: "urn:uuid:076aebca-dc95-7f85-efba-eea53c1b3c4f" },
      effectiveDateTime: "2018-05-12T01:51:28-04:00",
      issued: "2018-05-12T01:51:28.467-04:00",
      result: [
        {
          reference: "urn:uuid:00ba3555-3026-7958-ad21-23e7ad1eb675",
          display: "Leukocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:4a3b8e85-7f3b-973a-56e7-beec30e02e4a",
          display: "Erythrocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:a19df566-cf5b-39bf-e63b-4ca89a66e01a",
          display: "Hemoglobin [Mass/volume] in Blood",
        },
        {
          reference: "urn:uuid:121c35ab-163a-a4d1-492b-af5a80a24e48",
          display: "Hematocrit [Volume Fraction] of Blood by Automated count",
        },
        {
          reference: "urn:uuid:a40a044e-9e69-c02c-b875-88da620d588d",
          display: "MCV [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:a6299e40-a47e-fb30-f152-b3d75214f5e7",
          display: "MCH [Entitic mass] by Automated count",
        },
        {
          reference: "urn:uuid:d26a2d47-c4fd-19f8-dd02-8d64fddc19d2",
          display: "MCHC [Mass/volume] by Automated count",
        },
        {
          reference: "urn:uuid:b92d1725-1b20-3faa-42ce-d2bb403c38b5",
          display:
            "Erythrocyte distribution width [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:ef6e9af5-35c0-ca10-a25a-1737d6e51f9f",
          display: "Platelets [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:bb1060d9-134f-d267-f551-16a5f9761332",
          display:
            "Platelet distribution width [Entitic volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:1b4adfd8-41da-6777-1968-67c2729569df",
          display:
            "Platelet mean volume [Entitic volume] in Blood by Automated count",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:d16de338-e1b6-9e99-bc2b-7ba655b93a3d",
    resource: {
      resourceType: "DiagnosticReport",
      id: "d16de338-e1b6-9e99-bc2b-7ba655b93a3d",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:745196cb-0d46-2c8e-fb60-a5ddd5477d62" },
      effectiveDateTime: "2012-06-26T00:29:59-04:00",
      issued: "2012-06-26T00:29:59.616-04:00",
      result: [
        {
          reference: "urn:uuid:d0301ff3-de37-c916-e760-4297434f0e4f",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:e0a1e02f-6db0-be46-7cf4-5a7cae612b05",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:0f468796-e294-c526-746c-be23008bbc9d",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:f4f23dad-64ea-b470-ef5c-2d8f847da543",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f9cf0be4-e61e-9cc9-c6b9-82437e51d643",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f9cf0be4-e61e-9cc9-c6b9-82437e51d643",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "58410-2",
            display:
              "Complete blood count (hemogram) panel - Blood by Automated count",
          },
        ],
        text: "Complete blood count (hemogram) panel - Blood by Automated count",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:40187567-1af0-275a-9fa8-a9286b832f48" },
      effectiveDateTime: "2013-07-02T00:29:59-04:00",
      issued: "2013-07-02T00:29:59.616-04:00",
      result: [
        {
          reference: "urn:uuid:46ec6742-6291-c473-fc6a-20cd27079f7f",
          display: "Leukocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:5254a1b2-ad45-3788-2aff-d682d25235e3",
          display: "Erythrocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:740f8be9-f996-dd0f-f12f-1e95de1347fe",
          display: "Hemoglobin [Mass/volume] in Blood",
        },
        {
          reference: "urn:uuid:9eb39372-907d-7398-6f55-ccbe2a4e2055",
          display: "Hematocrit [Volume Fraction] of Blood by Automated count",
        },
        {
          reference: "urn:uuid:8ed137c4-a895-5012-54ce-685130286498",
          display: "MCV [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:431af1ff-1b39-bd6d-2adb-3d1f748eb7e2",
          display: "MCH [Entitic mass] by Automated count",
        },
        {
          reference: "urn:uuid:44f763d2-81e2-327f-f9f1-257dbd0abd3e",
          display: "MCHC [Mass/volume] by Automated count",
        },
        {
          reference: "urn:uuid:379301c1-ff82-822b-0c1c-61a2c7983e6d",
          display:
            "Erythrocyte distribution width [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:5325ac89-53fb-69c0-500b-10335edf7ae5",
          display: "Platelets [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:b473edd9-e09b-219e-54ee-1c18c616e31d",
          display:
            "Platelet distribution width [Entitic volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:b4dacc4e-c283-d41f-e91a-b399732ec407",
          display:
            "Platelet mean volume [Entitic volume] in Blood by Automated count",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:83386f74-89f4-b2b0-e4cd-f4f7e2e05327",
    resource: {
      resourceType: "DiagnosticReport",
      id: "83386f74-89f4-b2b0-e4cd-f4f7e2e05327",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:bcfae662-a3ee-98f1-d05a-a213ab9cd4fa" },
      effectiveDateTime: "2015-07-14T00:29:59-04:00",
      issued: "2015-07-14T00:29:59.616-04:00",
      result: [
        {
          reference: "urn:uuid:26d71ef0-edb2-5c2a-39b1-3c77d4d6d069",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:c64cb4b1-5228-4b09-64c9-4593b96584a6",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:6a1c2b62-4f9d-396f-aa81-ed90a9c4db06",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:e8385194-b496-564e-9a2b-1ded3cbc1dc5",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:d092fb84-cc85-dec5-1978-2843c3016dce",
    resource: {
      resourceType: "DiagnosticReport",
      id: "d092fb84-cc85-dec5-1978-2843c3016dce",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:ebd0110c-cba9-5b6a-a6f5-d74103c34877" },
      effectiveDateTime: "2018-07-31T00:29:59-04:00",
      issued: "2018-07-31T00:29:59.616-04:00",
      result: [
        {
          reference: "urn:uuid:071391f6-02ab-402d-bc9b-a9642ffb649f",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:e24f5597-3f8a-1726-300a-2da9305baca3",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:c094d21c-3682-c6e7-c7f6-5f8723424cb7",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:90633073-36c8-85fe-e7a8-daa0a083a6d8",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:96c2dbd6-625a-5477-38ba-897ca35f417c",
    resource: {
      resourceType: "DiagnosticReport",
      id: "96c2dbd6-625a-5477-38ba-897ca35f417c",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "58410-2",
            display:
              "Complete blood count (hemogram) panel - Blood by Automated count",
          },
        ],
        text: "Complete blood count (hemogram) panel - Blood by Automated count",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:ebd0110c-cba9-5b6a-a6f5-d74103c34877" },
      effectiveDateTime: "2018-07-31T00:29:59-04:00",
      issued: "2018-07-31T00:29:59.616-04:00",
      result: [
        {
          reference: "urn:uuid:242a215f-1d18-f845-b658-45904f97ebcc",
          display: "Leukocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:ed217d8d-85cd-4f63-455a-c2191d669942",
          display: "Erythrocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:377252ea-6dbe-6f98-e701-aca1bcc93638",
          display: "Hemoglobin [Mass/volume] in Blood",
        },
        {
          reference: "urn:uuid:bb52f32d-f8c0-1cb8-532d-5edf9052f19c",
          display: "Hematocrit [Volume Fraction] of Blood by Automated count",
        },
        {
          reference: "urn:uuid:f6bcd7bc-ee33-7377-0d4d-e9d4c4a10736",
          display: "MCV [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:567c6ead-cd71-32e8-d160-faf938520ec4",
          display: "MCH [Entitic mass] by Automated count",
        },
        {
          reference: "urn:uuid:58c8252a-98d0-9a3f-99cc-60b700009966",
          display: "MCHC [Mass/volume] by Automated count",
        },
        {
          reference: "urn:uuid:b88d42fb-1717-dede-c9f7-e219b37fc13c",
          display:
            "Erythrocyte distribution width [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:5c766b5c-0c6f-7e8e-d880-5dc7f45e8f4d",
          display: "Platelets [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:5098d716-0dc1-f20c-5309-642d9ea15baa",
          display:
            "Platelet distribution width [Entitic volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:eaf29bcc-1805-83c8-9451-c0fc11ee8bd2",
          display:
            "Platelet mean volume [Entitic volume] in Blood by Automated count",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:39e87568-b661-5906-23c8-003e300c85f9",
    resource: {
      resourceType: "DiagnosticReport",
      id: "39e87568-b661-5906-23c8-003e300c85f9",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "92143-7",
            display:
              "Respiratory pathogens DNA and RNA panel - Respiratory specimen by NAA with probe detection",
          },
        ],
        text: "Respiratory pathogens DNA and RNA panel - Respiratory specimen by NAA with probe detection",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:823b4e28-229e-ec0f-9a30-c8233e002be9" },
      effectiveDateTime: "2020-02-22T23:42:25-05:00",
      issued: "2020-02-22T23:42:25.616-05:00",
      result: [
        {
          reference: "urn:uuid:6fd5db6e-196d-eda2-01cf-be72326a71a8",
          display:
            "Influenza virus A RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:fb96f182-0cf9-d514-868d-c2dc221b0cbd",
          display:
            "Influenza virus B RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:48686383-4cb2-e1c3-062c-377c0b5e6cbc",
          display:
            "Respiratory syncytial virus RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:3dd62c8b-3873-a227-c3a3-9c3190f32937",
          display:
            "Parainfluenza virus 1 RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:f456fefd-a1b9-7e68-79d2-7a67dcfc058a",
          display:
            "Parainfluenza virus 2 RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:2b52e7da-6ca5-bb20-5617-aa898e05bb42",
          display:
            "Parainfluenza virus 3 RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:b4a05353-36c5-6465-b846-fcb4dfb486bb",
          display:
            "Rhinovirus RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:91f4469d-db3e-6505-6773-38ae2dab5a0a",
          display:
            "Human metapneumovirus RNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
        {
          reference: "urn:uuid:0b3be30c-9120-4e13-7343-a9152bf8da1d",
          display:
            "Adenovirus A+B+C+D+E DNA [Presence] in Respiratory specimen by NAA with probe detection",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e661b737-e652-b07d-4497-f3dc7e59cd62",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e661b737-e652-b07d-4497-f3dc7e59cd62",
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "94531-1",
            display: "SARS-CoV-2 RNA Pnl Resp NAA+probe",
          },
        ],
        text: "SARS-CoV-2 RNA Pnl Resp NAA+probe",
      },
      subject: { reference: "urn:uuid:0b575c00-26a1-6156-8ff8-369e3071bb77" },
      encounter: { reference: "urn:uuid:823b4e28-229e-ec0f-9a30-c8233e002be9" },
      effectiveDateTime: "2020-02-23T00:25:08-05:00",
      issued: "2020-02-23T00:25:08.616-05:00",
      result: [
        {
          reference: "urn:uuid:35a2865a-8f7b-92a2-023a-a5d956748a21",
          display: "SARS-CoV-2 RNA Pnl Resp NAA+probe",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:200273f7-8c62-94e1-c340-e99cf9f078ad",
    resource: {
      resourceType: "DiagnosticReport",
      id: "200273f7-8c62-94e1-c340-e99cf9f078ad",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:e8bc0159-8b0b-8ff7-b614-85a6a650cb26" },
      effectiveDateTime: "1944-04-23T02:40:58-04:00",
      issued: "1944-04-23T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NDQtMDQtMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNSB5ZWFyLW9sZCBub24taGlzcGFuaWMgd2hpdGUgbWFsZS4KCiMgU29jaWFsIEhpc3RvcnkKIFBhdGllbnQgcXVpdGUgc21va2luZyBhdCBhZ2UgMjAgYW5kIGlzIGFuIGFsY29ob2xpYy4KCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KClBhdGllbnQgY3VycmVudGx5IGhhcyBCbHVlIENyb3NzIEJsdWUgU2hpZWxkLgoKIyBBbGxlcmdpZXMKTm8gS25vd24gQWxsZXJnaWVzLgoKIyBNZWRpY2F0aW9ucwpObyBBY3RpdmUgTWVkaWNhdGlvbnMuCgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KCgojIyBQbGFuCgpUaGUgcGF0aWVudCB3YXMgcGxhY2VkIG9uIGEgY2FyZXBsYW46Ci0gbXVzY3Vsb3NrZWxldGFsIGNhcmUK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:b482983d-a2d4-09ed-4b1f-d0d2d6dbb793",
    resource: {
      resourceType: "DiagnosticReport",
      id: "b482983d-a2d4-09ed-4b1f-d0d2d6dbb793",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:e1f0cb6f-8192-04eb-72db-7c5c3eceef2d" },
      effectiveDateTime: "1955-11-18T01:40:58-05:00",
      issued: "1955-11-18T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NTUtMTEtMTgKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMTcgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuCgojIFNvY2lhbCBIaXN0b3J5CiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KClBhdGllbnQgY3VycmVudGx5IGhhcyBBbnRoZW0uCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCByaXNrIGFjdGl2aXR5IGludm9sdmVtZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:6472afd6-d965-16ee-5439-78739cbfe85f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "6472afd6-d965-16ee-5439-78739cbfe85f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a63bab0b-bfa7-02f8-a81f-d134e8abae49" },
      effectiveDateTime: "1956-11-23T01:40:58-05:00",
      issued: "1956-11-23T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NTYtMTEtMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMTggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiByaXNrIGFjdGl2aXR5IGludm9sdmVtZW50IChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBBZXRuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIHJlY2VpdmVkIGNlcnRpZmljYXRlIG9mIGhpZ2ggc2Nob29sIGVxdWl2YWxlbmN5IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLiAKCiMjIFBsYW4KCg==",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:ee59392a-816f-964d-45e5-f35926b3ee88",
    resource: {
      resourceType: "DiagnosticReport",
      id: "ee59392a-816f-964d-45e5-f35926b3ee88",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ffe7916d-32bf-fd09-5444-3af0a42357ad" },
      effectiveDateTime: "1957-11-29T01:40:58-05:00",
      issued: "1957-11-29T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NTctMTEtMjkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMTkgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiByaXNrIGFjdGl2aXR5IGludm9sdmVtZW50IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCByZWNlaXZlZCBjZXJ0aWZpY2F0ZSBvZiBoaWdoIHNjaG9vbCBlcXVpdmFsZW5jeSAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIFVuaXRlZEhlYWx0aGNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e8b32bb4-e526-8af1-563c-89226b0325e2",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e8b32bb4-e526-8af1-563c-89226b0325e2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ab1b44a8-e592-358e-c82b-2ad93e761853" },
      effectiveDateTime: "1960-12-02T01:40:58-05:00",
      issued: "1960-12-02T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NjAtMTItMDIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMjIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiByaXNrIGFjdGl2aXR5IGludm9sdmVtZW50IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCByZWNlaXZlZCBjZXJ0aWZpY2F0ZSBvZiBoaWdoIHNjaG9vbCBlcXVpdmFsZW5jeSAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEJsdWUgQ3Jvc3MgQmx1ZSBTaGllbGQuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:7a74a663-b696-0aa9-0067-535ae6c09a3e",
    resource: {
      resourceType: "DiagnosticReport",
      id: "7a74a663-b696-0aa9-0067-535ae6c09a3e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:946b1ccf-b3fe-73e0-89fe-5c4eca918fbd" },
      effectiveDateTime: "1963-12-06T01:40:58-05:00",
      issued: "1963-12-06T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NjMtMTItMDYKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMjUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiByaXNrIGFjdGl2aXR5IGludm9sdmVtZW50IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCByZWNlaXZlZCBjZXJ0aWZpY2F0ZSBvZiBoaWdoIHNjaG9vbCBlcXVpdmFsZW5jeSAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIENpZ25hIEhlYWx0aC4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:cc81865f-4fb0-df6b-cbd3-76e4d528a22d",
    resource: {
      resourceType: "DiagnosticReport",
      id: "cc81865f-4fb0-df6b-cbd3-76e4d528a22d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a13656cd-5139-6065-fb02-e396ade6da0f" },
      effectiveDateTime: "1966-12-09T01:40:58-05:00",
      issued: "1966-12-09T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NjYtMTItMDkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMjggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiByaXNrIGFjdGl2aXR5IGludm9sdmVtZW50IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCByZWNlaXZlZCBjZXJ0aWZpY2F0ZSBvZiBoaWdoIHNjaG9vbCBlcXVpdmFsZW5jeSAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIFVuaXRlZEhlYWx0aGNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:48f10e7c-d49b-d8cb-b37b-d773c1b44c85",
    resource: {
      resourceType: "DiagnosticReport",
      id: "48f10e7c-d49b-d8cb-b37b-d773c1b44c85",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:c3c7e2bb-ffc3-a8a8-c1aa-5d4849c89735" },
      effectiveDateTime: "1969-12-12T01:40:58-05:00",
      issued: "1969-12-12T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NjktMTItMTIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMzEgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiByaXNrIGFjdGl2aXR5IGludm9sdmVtZW50IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCByZWNlaXZlZCBjZXJ0aWZpY2F0ZSBvZiBoaWdoIHNjaG9vbCBlcXVpdmFsZW5jeSAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEFldG5hLgoKIyBBbGxlcmdpZXMKTm8gS25vd24gQWxsZXJnaWVzLgoKIyBNZWRpY2F0aW9ucwpObyBBY3RpdmUgTWVkaWNhdGlvbnMuCgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KUGF0aWVudCBpcyBwcmVzZW50aW5nIHdpdGggZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLiAKCiMjIFBsYW4KCg==",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:35c3decb-b985-2d87-8636-9b0f673f5de2",
    resource: {
      resourceType: "DiagnosticReport",
      id: "35c3decb-b985-2d87-8636-9b0f673f5de2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:78d2eb6e-cb2c-b0d9-eef1-81ced734b85d" },
      effectiveDateTime: "1972-12-15T01:40:58-05:00",
      issued: "1972-12-15T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NzItMTItMTUKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMzQgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEFudGhlbS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:1cba3c0d-671d-ecfe-ac63-7d917446de20",
    resource: {
      resourceType: "DiagnosticReport",
      id: "1cba3c0d-671d-ecfe-ac63-7d917446de20",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a195ade9-6085-554c-a315-88ec3974dd78" },
      effectiveDateTime: "1975-12-19T01:40:58-05:00",
      issued: "1975-12-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NzUtMTItMTkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMzcgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEFudGhlbS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f138a734-670b-80b2-7098-f42bc48635e4",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f138a734-670b-80b2-7098-f42bc48635e4",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f3d0a0e4-3218-bbf7-717e-5d326d1b42bf" },
      effectiveDateTime: "1978-10-06T02:40:58-04:00",
      issued: "1978-10-06T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NzgtMTAtMDYKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNDAgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIENpZ25hIEhlYWx0aC4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5c68c4e9-c7e7-3dcb-522e-20e2f078dc12",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5c68c4e9-c7e7-3dcb-522e-20e2f078dc12",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:07ffec4d-5141-35f6-44fb-9f88c1223e2a" },
      effectiveDateTime: "1982-10-15T02:40:58-04:00",
      issued: "1982-10-15T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5ODItMTAtMTUKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNDQgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIENpZ25hIEhlYWx0aC4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGJvZHkgbWFzcyBpbmRleCAzMCsgLSBvYmVzaXR5IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:2baf9f1e-e5b8-3912-fb5a-46af2862b12e",
    resource: {
      resourceType: "DiagnosticReport",
      id: "2baf9f1e-e5b8-3912-fb5a-46af2862b12e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:d58530c3-bf6f-3109-beb2-7aace8344cf9" },
      effectiveDateTime: "1985-02-23T01:40:58-05:00",
      issued: "1985-02-23T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5ODUtMDItMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNDYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIFVuaXRlZEhlYWx0aGNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBvc3Rlb2FydGhyaXRpcyBvZiBoaXAuIAoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBuYXByb3hlbiBzb2RpdW0gMjIwIG1nIG9yYWwgdGFibGV0ClRoZSBwYXRpZW50IHdhcyBwbGFjZWQgb24gYSBjYXJlcGxhbjoKLSBtdXNjdWxvc2tlbGV0YWwgY2FyZQo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:6dd05fe6-6884-099a-53a5-fc717fd09f0e",
    resource: {
      resourceType: "DiagnosticReport",
      id: "6dd05fe6-6884-099a-53a5-fc717fd09f0e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:cc78a557-b4d0-642f-fa8e-70a154f184e8" },
      effectiveDateTime: "1986-10-24T02:40:58-04:00",
      issued: "1986-10-24T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5ODYtMTAtMjQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNDggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEh1bWFuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:87c94ad5-ab2d-af4b-0df8-792c7d18faa6",
    resource: {
      resourceType: "DiagnosticReport",
      id: "87c94ad5-ab2d-af4b-0df8-792c7d18faa6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a6f0d27d-801a-0af6-5be2-8e9ef2930c1e" },
      effectiveDateTime: "1988-09-30T02:40:58-04:00",
      issued: "1988-09-30T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5ODgtMDktMzAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTAgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEh1bWFuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:b7c3ee60-0dae-b975-10c1-91eaca74a542",
    resource: {
      resourceType: "DiagnosticReport",
      id: "b7c3ee60-0dae-b975-10c1-91eaca74a542",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b82c0a84-cd96-d86d-5812-c73e3794af9c" },
      effectiveDateTime: "1990-10-12T02:40:58-04:00",
      issued: "1990-10-12T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTAtMTAtMTIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEJsdWUgQ3Jvc3MgQmx1ZSBTaGllbGQuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:1142850f-bf19-901c-4e0b-ff65734d2a7e",
    resource: {
      resourceType: "DiagnosticReport",
      id: "1142850f-bf19-901c-4e0b-ff65734d2a7e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:baf9d9d4-62ba-4e7b-0e8f-ca4409adc107" },
      effectiveDateTime: "1991-10-18T02:40:58-04:00",
      issued: "1991-10-18T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTEtMTAtMTgKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTMgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEFldG5hLgoKIyBBbGxlcmdpZXMKTm8gS25vd24gQWxsZXJnaWVzLgoKIyBNZWRpY2F0aW9ucwpObyBBY3RpdmUgTWVkaWNhdGlvbnMuCgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KUGF0aWVudCBpcyBwcmVzZW50aW5nIHdpdGggZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCBoYXMgYSBjcmltaW5hbCByZWNvcmQgKGZpbmRpbmcpLiAKCiMjIFBsYW4KCg==",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:cb59c2f2-4ba8-7377-b074-59eed11c1be2",
    resource: {
      resourceType: "DiagnosticReport",
      id: "cb59c2f2-4ba8-7377-b074-59eed11c1be2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:cf267831-5a5f-01b0-79f9-3e84a5c9ef4c" },
      effectiveDateTime: "1993-10-29T02:40:58-04:00",
      issued: "1993-10-29T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTMtMTAtMjkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEh1bWFuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e139d56d-e1fb-bf50-ea2f-d6408f6f40b5",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e139d56d-e1fb-bf50-ea2f-d6408f6f40b5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:dd53132e-bce0-5363-1a6d-29ec0933cfc6" },
      effectiveDateTime: "1994-11-04T01:40:58-05:00",
      issued: "1994-11-04T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTQtMTEtMDQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIFVuaXRlZEhlYWx0aGNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBoeXBlcmxpcGlkZW1pYS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:57e8b5bf-3c99-c61b-b4bd-569eee163240",
    resource: {
      resourceType: "DiagnosticReport",
      id: "57e8b5bf-3c99-c61b-b4bd-569eee163240",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0d452394-2b0c-1f9e-da52-1af68a0bb062" },
      effectiveDateTime: "1994-11-25T01:40:58-05:00",
      issued: "1994-11-25T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTQtMTEtMjUKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIFVuaXRlZEhlYWx0aGNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKVGhlIHBhdGllbnQgd2FzIHBsYWNlZCBvbiBhIGNhcmVwbGFuOgotIGh5cGVybGlwaWRlbWlhIGNsaW5pY2FsIG1hbmFnZW1lbnQgcGxhbgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:86833a3d-c80a-9c17-0c83-e81825e6ce58",
    resource: {
      resourceType: "DiagnosticReport",
      id: "86833a3d-c80a-9c17-0c83-e81825e6ce58",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:1b75fab2-0e5e-8169-a796-be72bd4d5bcd" },
      effectiveDateTime: "1995-11-10T01:40:58-05:00",
      issued: "1995-11-10T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTUtMTEtMTAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTcgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEh1bWFuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:0ff5e7ef-771e-7f83-4ae2-5bc965028df8",
    resource: {
      resourceType: "DiagnosticReport",
      id: "0ff5e7ef-771e-7f83-4ae2-5bc965028df8",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:965abeb3-4174-d8ba-9515-a7b3e83d9172" },
      effectiveDateTime: "1995-11-25T01:40:58-05:00",
      issued: "1995-11-25T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTUtMTEtMjUKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTcgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEh1bWFuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:fb9ad0f9-29cc-f6d1-5ad8-23204d2ada24",
    resource: {
      resourceType: "DiagnosticReport",
      id: "fb9ad0f9-29cc-f6d1-5ad8-23204d2ada24",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:718fa39f-ba82-2900-67fa-3dba15c61ffa" },
      effectiveDateTime: "1996-11-15T01:40:58-05:00",
      issued: "1996-11-15T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTYtMTEtMTUKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIENpZ25hIEhlYWx0aC4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:eba75a9f-b79e-41f9-d35b-598a2ef34517",
    resource: {
      resourceType: "DiagnosticReport",
      id: "eba75a9f-b79e-41f9-d35b-598a2ef34517",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:2333b1cd-ad09-3073-0696-ee9c140737b6" },
      effectiveDateTime: "1996-11-24T01:40:58-05:00",
      issued: "1996-11-24T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTYtMTEtMjQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIENpZ25hIEhlYWx0aC4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e36603ec-b82c-f09e-e4c2-0701f32ae5bf",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e36603ec-b82c-f09e-e4c2-0701f32ae5bf",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:495d60aa-d26c-964a-ea81-a109ea280cad" },
      effectiveDateTime: "1997-11-24T01:40:58-05:00",
      issued: "1997-11-24T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTctMTEtMjQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTkgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIFVuaXRlZEhlYWx0aGNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCnNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0CgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KUGF0aWVudCBpcyBwcmVzZW50aW5nIHdpdGggZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLiAKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:dc4db679-3448-1519-71e9-3533e93df3c0",
    resource: {
      resourceType: "DiagnosticReport",
      id: "dc4db679-3448-1519-71e9-3533e93df3c0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:9bec8f7b-081f-26e5-22ad-290ec7e5fa28" },
      effectiveDateTime: "1998-11-24T01:40:58-05:00",
      issued: "1998-11-24T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTgtMTEtMjQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjAgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIFVuaXRlZEhlYWx0aGNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCnNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0CgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KUGF0aWVudCBpcyBwcmVzZW50aW5nIHdpdGggZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKS4gCgojIyBQbGFuCgpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIHNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0Cg==",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e9d8777b-45bc-329c-3fcd-7293a461f9a3",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e9d8777b-45bc-329c-3fcd-7293a461f9a3",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:1478d811-530a-72f3-d291-2bbdea8a5fde" },
      effectiveDateTime: "1999-11-24T01:40:58-05:00",
      issued: "1999-11-24T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTktMTEtMjQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjEgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBBZXRuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:25ed837e-ea1d-fbb2-471a-5f32b68e6668",
    resource: {
      resourceType: "DiagnosticReport",
      id: "25ed837e-ea1d-fbb2-471a-5f32b68e6668",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:784cf40a-63a4-811c-7a48-76166a7532df" },
      effectiveDateTime: "1999-12-03T01:40:58-05:00",
      issued: "1999-12-03T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTktMTItMDMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjEgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBBZXRuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:c092dbb7-3a48-1928-e9b1-1eb6922e2e9f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "c092dbb7-3a48-1928-e9b1-1eb6922e2e9f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:07b6f41f-e852-a015-9767-7bc44503fb3e" },
      effectiveDateTime: "2000-11-23T01:40:58-05:00",
      issued: "2000-11-23T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDAtMTEtMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBBbnRoZW0uCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCnNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0CgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KCgojIyBQbGFuCgpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIHNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0Cg==",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:98e190e4-1ad8-6edd-dab9-ca7a023a55ca",
    resource: {
      resourceType: "DiagnosticReport",
      id: "98e190e4-1ad8-6edd-dab9-ca7a023a55ca",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:2f8bd24b-1c19-084c-3350-c62c7b9c9ace" },
      effectiveDateTime: "2001-11-23T01:40:58-05:00",
      issued: "2001-11-23T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDEtMTEtMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjMgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBVbml0ZWRIZWFsdGhjYXJlLgoKIyBBbGxlcmdpZXMKTm8gS25vd24gQWxsZXJnaWVzLgoKIyBNZWRpY2F0aW9ucwpzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:06d8a3f1-27a2-ea32-5858-3a8a5c879b79",
    resource: {
      resourceType: "DiagnosticReport",
      id: "06d8a3f1-27a2-ea32-5858-3a8a5c879b79",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:67eace0b-9f1e-5b52-0c1f-4c1b91626ca0" },
      effectiveDateTime: "2001-12-14T01:40:58-05:00",
      issued: "2001-12-14T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDEtMTItMTQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjMgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBVbml0ZWRIZWFsdGhjYXJlLgoKIyBBbGxlcmdpZXMKTm8gS25vd24gQWxsZXJnaWVzLgoKIyBNZWRpY2F0aW9ucwpzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:38d9dd19-f6a7-5f5d-1bb5-439bf6ef89d8",
    resource: {
      resourceType: "DiagnosticReport",
      id: "38d9dd19-f6a7-5f5d-1bb5-439bf6ef89d8",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0065e2e0-f9e1-13d2-7a75-8bad676cb53e" },
      effectiveDateTime: "2002-11-23T01:40:58-05:00",
      issued: "2002-11-23T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDItMTEtMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjQgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBCbHVlIENyb3NzIEJsdWUgU2hpZWxkLgoKIyBBbGxlcmdpZXMKTm8gS25vd24gQWxsZXJnaWVzLgoKIyBNZWRpY2F0aW9ucwpzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:8c7f95e6-32f5-6679-3d96-44275802a2d6",
    resource: {
      resourceType: "DiagnosticReport",
      id: "8c7f95e6-32f5-6679-3d96-44275802a2d6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:1b000b85-ccb2-85e5-4228-caa08544105a" },
      effectiveDateTime: "2003-11-23T01:40:58-05:00",
      issued: "2003-11-23T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDMtMTEtMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:47e6d848-3a7d-9134-3eb7-b19e9d400cd2",
    resource: {
      resourceType: "DiagnosticReport",
      id: "47e6d848-3a7d-9134-3eb7-b19e9d400cd2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:6c46bd34-4e70-4fed-1b47-d0bc19abebf8" },
      effectiveDateTime: "2003-12-26T01:40:58-05:00",
      issued: "2003-12-26T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDMtMTItMjYKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:1f303571-d426-f8b5-00a9-2d9dae3bdf2f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "1f303571-d426-f8b5-00a9-2d9dae3bdf2f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bb71b8f5-15d4-337a-ab7f-310698989b95" },
      effectiveDateTime: "2004-11-22T01:40:58-05:00",
      issued: "2004-11-22T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDQtMTEtMjIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e9486dd8-1928-9ce0-4f14-34ef5ddfcb80",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e9486dd8-1928-9ce0-4f14-34ef5ddfcb80",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:55eb54d4-94a2-35f9-5396-a3184da89585" },
      effectiveDateTime: "2004-12-31T01:40:58-05:00",
      issued: "2004-12-31T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDQtMTItMzEKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5b887626-57dd-0c44-9e04-2d7998fd8946",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5b887626-57dd-0c44-9e04-2d7998fd8946",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:09103c57-d806-a5b3-bce1-e27a4311cd46" },
      effectiveDateTime: "2005-11-22T01:40:58-05:00",
      issued: "2005-11-22T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDUtMTEtMjIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjcgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:17c9aed2-4a0b-346d-b20f-67b3e91010ab",
    resource: {
      resourceType: "DiagnosticReport",
      id: "17c9aed2-4a0b-346d-b20f-67b3e91010ab",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:54ff763b-773d-17d9-5010-291d2e62dc59" },
      effectiveDateTime: "2006-11-22T01:40:58-05:00",
      issued: "2006-11-22T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDYtMTEtMjIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:b8febae5-48ac-67de-7edc-486cb2dbbd44",
    resource: {
      resourceType: "DiagnosticReport",
      id: "b8febae5-48ac-67de-7edc-486cb2dbbd44",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:e8bc1e87-0c82-b107-3fa9-8ac889079795" },
      effectiveDateTime: "2007-01-12T01:40:58-05:00",
      issued: "2007-01-12T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDctMDEtMTIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:8793c66a-0ee4-8930-025a-5c64b5d7dbec",
    resource: {
      resourceType: "DiagnosticReport",
      id: "8793c66a-0ee4-8930-025a-5c64b5d7dbec",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:fcbad825-7d87-65a6-6edb-457d75cb4909" },
      effectiveDateTime: "2007-11-22T01:40:58-05:00",
      issued: "2007-11-22T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDctMTEtMjIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjkgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:0b03f288-c2ff-f003-994f-8e191170d890",
    resource: {
      resourceType: "DiagnosticReport",
      id: "0b03f288-c2ff-f003-994f-8e191170d890",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:9afd5dd5-5d49-fbfd-8de1-467729f031df" },
      effectiveDateTime: "2008-11-21T01:40:58-05:00",
      issued: "2008-11-21T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDgtMTEtMjEKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzAgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:58d4da2d-9227-7398-5737-67896ea20749",
    resource: {
      resourceType: "DiagnosticReport",
      id: "58d4da2d-9227-7398-5737-67896ea20749",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a741082d-de56-2dcc-c2bc-9e2d734cec10" },
      effectiveDateTime: "2009-01-23T01:40:58-05:00",
      issued: "2009-01-23T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDktMDEtMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzAgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:69bd9536-c160-9805-eb3b-41e737369c18",
    resource: {
      resourceType: "DiagnosticReport",
      id: "69bd9536-c160-9805-eb3b-41e737369c18",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32805baa-8f71-da8d-4b1a-6661022b0270" },
      effectiveDateTime: "2009-11-21T01:40:58-05:00",
      issued: "2009-11-21T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDktMTEtMjEKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzEgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:617e192a-1e80-e733-0100-5e43f1539962",
    resource: {
      resourceType: "DiagnosticReport",
      id: "617e192a-1e80-e733-0100-5e43f1539962",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:e0df8625-5bef-8d32-c0cf-80ddea40b2bd" },
      effectiveDateTime: "2010-11-21T01:40:58-05:00",
      issued: "2010-11-21T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTAtMTEtMjEKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:d679d3a2-5a6e-a7a9-b99f-3e1b7c71caf7",
    resource: {
      resourceType: "DiagnosticReport",
      id: "d679d3a2-5a6e-a7a9-b99f-3e1b7c71caf7",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:e1c4709a-b1a2-d143-3564-eafbc2cfa0b9" },
      effectiveDateTime: "2011-02-04T01:40:58-05:00",
      issued: "2011-02-04T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTEtMDItMDQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:0265c1eb-c640-7b0f-3713-46cb1eb2fd5e",
    resource: {
      resourceType: "DiagnosticReport",
      id: "0265c1eb-c640-7b0f-3713-46cb1eb2fd5e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7b15ad1a-24c8-0d45-c32f-9941233f3e20" },
      effectiveDateTime: "2011-11-21T01:40:58-05:00",
      issued: "2011-11-21T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTEtMTEtMjEKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzMgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:9f3556d2-79ff-6bd1-dccf-dfe581e9e0ab",
    resource: {
      resourceType: "DiagnosticReport",
      id: "9f3556d2-79ff-6bd1-dccf-dfe581e9e0ab",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72109-2",
            display:
              "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
          },
        ],
        text: "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
      effectiveDateTime: "2012-02-10T02:55:11-05:00",
      issued: "2012-02-10T02:55:11.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:d279bb87-4bb6-075e-871c-28dca332bb5c",
          display: "Total score [AUDIT-C]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:69ec984a-dc95-9a53-ad4d-9cbbbc5c8a79",
    resource: {
      resourceType: "DiagnosticReport",
      id: "69ec984a-dc95-9a53-ad4d-9cbbbc5c8a79",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
      effectiveDateTime: "2012-02-10T01:40:58-05:00",
      issued: "2012-02-10T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTItMDItMTAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzMgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLiAKCiMjIFBsYW4KUGF0aWVudCB3YXMgZ2l2ZW4gdGhlIGZvbGxvd2luZyBpbW11bml6YXRpb25zOiBpbmZsdWVuemEsIHNlYXNvbmFsLCBpbmplY3RhYmxlLCBwcmVzZXJ2YXRpdmUgZnJlZS4gClRoZSBmb2xsb3dpbmcgcHJvY2VkdXJlcyB3ZXJlIGNvbmR1Y3RlZDoKLSBhc3Nlc3NtZW50IG9mIGhlYWx0aCBhbmQgc29jaWFsIGNhcmUgbmVlZHMgKHByb2NlZHVyZSkKLSBhc3Nlc3NtZW50IG9mIHN1YnN0YW5jZSB1c2UgKHByb2NlZHVyZSkKLSBhc3Nlc3NtZW50IHVzaW5nIGFsY29ob2wgdXNlIGRpc29yZGVycyBpZGVudGlmaWNhdGlvbiB0ZXN0IC0gY29uc3VtcHRpb24gKHByb2NlZHVyZSkK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:4d5f6a8d-9aec-bbf7-00c2-bad1b00cc49a",
    resource: {
      resourceType: "DiagnosticReport",
      id: "4d5f6a8d-9aec-bbf7-00c2-bad1b00cc49a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "24323-8",
            display: "Comprehensive metabolic 2000 panel - Serum or Plasma",
          },
        ],
        text: "Comprehensive metabolic 2000 panel - Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:5b0efda9-2d33-ae96-8122-f8136998b925",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:f345d7ee-7cc8-9beb-3f16-2fb7e9cf7d09",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:893a3c86-5401-b41e-d152-98e201c45051",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:702e27e6-7b44-91c4-a4d0-c6aa6c12ffc7",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:f28c554a-f799-a780-92eb-7e04576a5aeb",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:e8f09834-e888-8e60-42ca-ee53b67842f6",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:26d7d914-fa00-5686-f0f2-5f4698d9261b",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:1c06a944-42e1-be0a-af9a-67dfbd6d6b0f",
          display: "Carbon Dioxide",
        },
        {
          reference: "urn:uuid:7730a236-c1bb-721f-ea8f-02d0d39b90cc",
          display: "Glomerular filtration rate/1.73 sq M.predicted",
        },
        {
          reference: "urn:uuid:985a03f1-6fa6-be74-1cea-140bec2e0690",
          display: "Protein [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:8b1046b8-0735-4edc-db78-339847e8002b",
          display: "Albumin [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:592d940a-f946-e730-551e-d1a861dcca7a",
          display: "Globulin [Mass/volume] in Serum by calculation",
        },
        {
          reference: "urn:uuid:49a65ad1-95a8-3573-4078-07e7ea49642e",
          display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:fb1f72d6-87ca-2237-7c49-ac198c685ed2",
          display:
            "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:e2fe8374-72f3-4340-e4c2-77e13ab44c0b",
          display:
            "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:268da18d-9b43-5466-92c1-59dd498d3b20",
          display:
            "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:1f1b565e-1e8c-0f09-d6d6-e343ad9badc2",
    resource: {
      resourceType: "DiagnosticReport",
      id: "1f1b565e-1e8c-0f09-d6d6-e343ad9badc2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:cfe658c1-2bfa-dabf-c218-43f68c7a0abc",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:4ae793dc-3df7-55fd-68fd-0afcae8692f3",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:d2bd188f-5576-a413-62f0-2b7016cbeb82",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:edb68a62-9a3a-7b1e-4d8a-879c5740525a",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:78e05b6f-6f1a-9b7f-ec4c-25ed39e3e53f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "78e05b6f-6f1a-9b7f-ec4c-25ed39e3e53f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTItMTEtMjAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzQgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgbm90IGluIGxhYm9yIGZvcmNlIChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5fc3b6de-f6b9-f291-5437-8f396320fd3d",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5fc3b6de-f6b9-f291-5437-8f396320fd3d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T01:40:58-05:00",
      issued: "2013-02-15T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:4a7fcfc9-d415-3d7a-8ffb-807348d747ff",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:30f1678d-c013-6d7f-6dc4-7956777a76ba",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:a7c75832-8fe4-af42-21ac-6ff57c38b5d8",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:dcfd31d7-2e36-a57e-baa6-19eac7c2891b",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:2265d604-20b3-c373-6ad0-6e2892251a0f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "2265d604-20b3-c373-6ad0-6e2892251a0f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59453-1",
            display: "Morse Fall Scale panel",
          },
        ],
        text: "Morse Fall Scale panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T02:57:57-05:00",
      issued: "2013-02-15T02:57:57.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:12cabf2a-8b3e-cf49-aa95-ba56d9b222d9",
          display: "Fall risk total [Morse Fall Scale]",
        },
        {
          reference: "urn:uuid:d715141d-f296-d8a6-f48e-eaa761d37956",
          display: "Fall risk level [Morse Fall Scale]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:b326b532-76ef-5e12-c25d-1b99b8c2b1ed",
    resource: {
      resourceType: "DiagnosticReport",
      id: "b326b532-76ef-5e12-c25d-1b99b8c2b1ed",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "55757-9",
            display: "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          },
        ],
        text: "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T03:29:15-05:00",
      issued: "2013-02-15T03:29:15.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:d8a7514e-cd25-0b94-b733-91ee707bdf87",
          display:
            "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:7b39c955-709d-0b5c-ff3d-56128d0e76b9",
    resource: {
      resourceType: "DiagnosticReport",
      id: "7b39c955-709d-0b5c-ff3d-56128d0e76b9",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T01:40:58-05:00",
      issued: "2013-02-15T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTMtMDItMTUKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzQgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgbm90IGluIGxhYm9yIGZvcmNlIChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgpQYXRpZW50IHdhcyBnaXZlbiB0aGUgZm9sbG93aW5nIGltbXVuaXphdGlvbnM6IGluZmx1ZW56YSwgc2Vhc29uYWwsIGluamVjdGFibGUsIHByZXNlcnZhdGl2ZSBmcmVlLiAKVGhlIGZvbGxvd2luZyBwcm9jZWR1cmVzIHdlcmUgY29uZHVjdGVkOgotIGFzc2Vzc21lbnQgb2YgaGVhbHRoIGFuZCBzb2NpYWwgY2FyZSBuZWVkcyAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgbW9yc2UgZmFsbCBzY2FsZSAocHJvY2VkdXJlKQotIGRlcHJlc3Npb24gc2NyZWVuaW5nIChwcm9jZWR1cmUpCi0gZGVwcmVzc2lvbiBzY3JlZW5pbmcgdXNpbmcgcGF0aWVudCBoZWFsdGggcXVlc3Rpb25uYWlyZSB0d28taXRlbSBzY29yZSAocHJvY2VkdXJlKQo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:13dff6b6-5365-7618-2dcf-f5665d833292",
    resource: {
      resourceType: "DiagnosticReport",
      id: "13dff6b6-5365-7618-2dcf-f5665d833292",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "24323-8",
            display: "Comprehensive metabolic 2000 panel - Serum or Plasma",
          },
        ],
        text: "Comprehensive metabolic 2000 panel - Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:7f17e90d-632f-1304-1ddb-2c99f43257b7",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:5444cd41-a09e-0984-bea9-40d00fd7cd1e",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:8faafa19-0bc7-927d-965f-205f02846bfb",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:41729168-591b-d27f-b238-99cb64d24fa1",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:b293ce4d-bb8a-b4f0-2180-a24ae4e07fc2",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:62390a66-bbdc-db30-3a79-802910a46e34",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:4a1f623a-5c89-d9fe-a7ec-c64bbcaf0cf7",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:75f8acf6-04ea-6919-c786-f5129f1ec077",
          display: "Carbon Dioxide",
        },
        {
          reference: "urn:uuid:aac8bb5e-2b6b-692a-1f0b-d462a247b20d",
          display: "Glomerular filtration rate/1.73 sq M.predicted",
        },
        {
          reference: "urn:uuid:5c6311ff-9150-e3e1-59ad-db03633046cb",
          display: "Protein [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:cfcd92ac-59e6-6a5d-58a4-37264d97be78",
          display: "Albumin [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:0c9fc924-3cec-75d0-3fc0-4c491e193ed9",
          display: "Globulin [Mass/volume] in Serum by calculation",
        },
        {
          reference: "urn:uuid:1cbdcf10-4ee8-ae62-f17c-ba3f135dcf32",
          display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:3c48fb34-43f9-3c56-630d-41895574080c",
          display:
            "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:a28fcfe3-f929-876b-6198-18eaae8c7b37",
          display:
            "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:cb69dcb6-6749-0884-7336-883b76c61812",
          display:
            "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:89203d5b-c747-b2a8-839e-23c614531569",
    resource: {
      resourceType: "DiagnosticReport",
      id: "89203d5b-c747-b2a8-839e-23c614531569",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:e6038778-bf2b-118a-29e3-dc7aeda61009",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:c5e8f066-4c40-af91-915f-092a4b8aff5e",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:545e6595-35ec-0b39-fc74-8ad5c4235e2c",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:ae0819b2-53fe-eb56-cf6b-5ef5eceb7da9",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e62b9b07-d85b-0cad-c426-aecb2d87f971",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e62b9b07-d85b-0cad-c426-aecb2d87f971",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTMtMTEtMjAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgbm90IGluIGxhYm9yIGZvcmNlIChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:cd712de4-4555-5923-9891-8e7a0cfc2331",
    resource: {
      resourceType: "DiagnosticReport",
      id: "cd712de4-4555-5923-9891-8e7a0cfc2331",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a1aa9e96-e503-95ca-5897-96581cf9dcf5" },
      effectiveDateTime: "2014-02-02T01:40:58-05:00",
      issued: "2014-02-02T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTQtMDItMDIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgbm90IGluIGxhYm9yIGZvcmNlIChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBjaHJvbmljIGxvdyBiYWNrIHBhaW4gKGZpbmRpbmcpLCBmaWJyb215YWxnaWEgKGRpc29yZGVyKS4gCgojIyBQbGFuCgpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Cg==",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:682da361-4bbd-017d-b579-ecd04f833242",
    resource: {
      resourceType: "DiagnosticReport",
      id: "682da361-4bbd-017d-b579-ecd04f833242",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59453-1",
            display: "Morse Fall Scale panel",
          },
        ],
        text: "Morse Fall Scale panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      effectiveDateTime: "2014-02-21T02:51:43-05:00",
      issued: "2014-02-21T02:51:43.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:36e1273c-772b-9c27-8b37-4396b9275a7a",
          display: "Fall risk total [Morse Fall Scale]",
        },
        {
          reference: "urn:uuid:0d2097c3-a084-a627-dc8d-459084afd58a",
          display: "Fall risk level [Morse Fall Scale]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:053b012b-f251-01dc-a304-8b811bca6545",
    resource: {
      resourceType: "DiagnosticReport",
      id: "053b012b-f251-01dc-a304-8b811bca6545",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "55757-9",
            display: "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          },
        ],
        text: "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      effectiveDateTime: "2014-02-21T03:25:06-05:00",
      issued: "2014-02-21T03:25:06.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:8f8a66d6-4ea5-62d2-c472-a56665bc26f7",
          display:
            "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:10216489-00a4-1754-3a32-627667f410f9",
    resource: {
      resourceType: "DiagnosticReport",
      id: "10216489-00a4-1754-3a32-627667f410f9",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      effectiveDateTime: "2014-02-21T01:40:58-05:00",
      issued: "2014-02-21T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTQtMDItMjEKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgbm90IGluIGxhYm9yIGZvcmNlIChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQ7IGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0CgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KUGF0aWVudCBpcyBwcmVzZW50aW5nIHdpdGggcGFydC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCB2aWN0aW0gb2YgaW50aW1hdGUgcGFydG5lciBhYnVzZSAoZmluZGluZykuIAoKIyMgUGxhbgpQYXRpZW50IHdhcyBnaXZlbiB0aGUgZm9sbG93aW5nIGltbXVuaXphdGlvbnM6IGluZmx1ZW56YSwgc2Vhc29uYWwsIGluamVjdGFibGUsIHByZXNlcnZhdGl2ZSBmcmVlLiAKVGhlIGZvbGxvd2luZyBwcm9jZWR1cmVzIHdlcmUgY29uZHVjdGVkOgotIGFzc2Vzc21lbnQgb2YgaGVhbHRoIGFuZCBzb2NpYWwgY2FyZSBuZWVkcyAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgbW9yc2UgZmFsbCBzY2FsZSAocHJvY2VkdXJlKQotIGRlcHJlc3Npb24gc2NyZWVuaW5nIChwcm9jZWR1cmUpCi0gZGVwcmVzc2lvbiBzY3JlZW5pbmcgdXNpbmcgcGF0aWVudCBoZWFsdGggcXVlc3Rpb25uYWlyZSB0d28taXRlbSBzY29yZSAocHJvY2VkdXJlKQpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Cg==",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:4ad16258-6749-c57e-3a3e-fa4c176fc7bf",
    resource: {
      resourceType: "DiagnosticReport",
      id: "4ad16258-6749-c57e-3a3e-fa4c176fc7bf",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7ea69efc-73a8-74a1-0595-d98e36d47dc2" },
      effectiveDateTime: "2014-03-27T05:40:58-04:00",
      issued: "2014-03-27T05:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTQtMDMtMjcKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCnNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBhY2V0YW1pbm9waGVuIDMyNSBtZyAvIG94eWNvZG9uZSBoeWRyb2NobG9yaWRlIDEwIG1nIG9yYWwgdGFibGV0IFtwZXJjb2NldF0KVGhlIHBhdGllbnQgd2FzIHBsYWNlZCBvbiBhIGNhcmVwbGFuOgotIHRoZXJhcHkgKHJlZ2ltZS90aGVyYXB5KQo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:b5c04fce-0508-1064-861e-cb6e81a0d1c3",
    resource: {
      resourceType: "DiagnosticReport",
      id: "b5c04fce-0508-1064-861e-cb6e81a0d1c3",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "24323-8",
            display: "Comprehensive metabolic 2000 panel - Serum or Plasma",
          },
        ],
        text: "Comprehensive metabolic 2000 panel - Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:ce7bec28-fbf6-b090-38dd-3571f196defc",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:a21b979b-97ef-2c88-4965-b522842f70db",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:892639ed-f635-0092-d5a1-617ef95ca613",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:c6fad787-0d15-d55e-ce70-9de6dc651d4b",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:e36b6e64-494c-e2d1-d5d3-eb9d9aef274b",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:b4993406-5562-88e3-b02c-dae1acaf647a",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:d3823eac-13f2-12ca-9e74-7940712536a1",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:2c240dc3-67e6-0858-9139-d12381060af5",
          display: "Carbon Dioxide",
        },
        {
          reference: "urn:uuid:c059a59d-5bdd-b1a1-b650-4eaf7b84c053",
          display: "Glomerular filtration rate/1.73 sq M.predicted",
        },
        {
          reference: "urn:uuid:73d33261-47f4-b0e0-793f-1dcd56b2adcd",
          display: "Protein [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:eaf06641-d54f-d69a-55ff-d585320c0d64",
          display: "Albumin [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:bd2606f2-af60-9403-17ac-0492e319cf17",
          display: "Globulin [Mass/volume] in Serum by calculation",
        },
        {
          reference: "urn:uuid:b92a5e5a-7602-afa1-5e9e-73337a2f181c",
          display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:f4ab8283-1fae-202f-bc86-2e3ee0e8f26d",
          display:
            "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:460da8d6-9a31-31c3-d636-af7c497af085",
          display:
            "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:73def88c-a905-5932-dbe1-b730453bc96b",
          display:
            "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:3b7c4f0f-6d14-529d-ca2b-0427f5c950cc",
    resource: {
      resourceType: "DiagnosticReport",
      id: "3b7c4f0f-6d14-529d-ca2b-0427f5c950cc",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:6e91905e-f493-59b3-2e1c-aaf71e9130ef",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:d4e3b381-0be1-a0c2-29dc-8dd61e8a7033",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:8d6951cd-fc71-fc46-24b0-e5901d6d826c",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:97295f43-b8c2-0ef5-7e37-21378772b9ea",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:fd3ff796-8a89-98ce-d9cc-adb083d7f417",
    resource: {
      resourceType: "DiagnosticReport",
      id: "fd3ff796-8a89-98ce-d9cc-adb083d7f417",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTQtMTEtMjAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCnNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMyNSBtZyAvIG94eWNvZG9uZSBoeWRyb2NobG9yaWRlIDEwIG1nIG9yYWwgdGFibGV0IFtwZXJjb2NldF07IGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0CgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KCgojIyBQbGFuCgpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIHNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0Cg==",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:c1c815b7-810f-e9b4-b1d4-1f8323be60a3",
    resource: {
      resourceType: "DiagnosticReport",
      id: "c1c815b7-810f-e9b4-b1d4-1f8323be60a3",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:dc2fc493-9d4f-4ada-91d2-9e81690a983d" },
      effectiveDateTime: "2015-01-07T05:10:52-05:00",
      issued: "2015-01-07T05:10:52.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTUtMDEtMDcKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCnNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMyNSBtZyAvIG94eWNvZG9uZSBoeWRyb2NobG9yaWRlIDEwIG1nIG9yYWwgdGFibGV0IFtwZXJjb2NldF07IGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0CgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KCgojIyBQbGFuCgpUaGUgZm9sbG93aW5nIHByb2NlZHVyZXMgd2VyZSBjb25kdWN0ZWQ6Ci0gY29sb25vc2NvcHkK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f2712904-a7f4-1cbb-d400-6e362628ac1c",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f2712904-a7f4-1cbb-d400-6e362628ac1c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "55757-9",
            display: "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          },
        ],
        text: "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      effectiveDateTime: "2015-02-27T03:13:28-05:00",
      issued: "2015-02-27T03:13:28.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:7fed8b09-5924-2c83-5c64-5dac5cbc7469",
          display:
            "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:c3aba152-7254-b0fd-7059-7c2c67837c42",
    resource: {
      resourceType: "DiagnosticReport",
      id: "c3aba152-7254-b0fd-7059-7c2c67837c42",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72109-2",
            display:
              "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
          },
        ],
        text: "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      effectiveDateTime: "2015-02-27T03:49:08-05:00",
      issued: "2015-02-27T03:49:08.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:bce6bb79-f114-0992-0680-e1b34b960c42",
          display: "Total score [AUDIT-C]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f1c4a06e-63d4-77b7-b283-a4a3337bff6c",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f1c4a06e-63d4-77b7-b283-a4a3337bff6c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      effectiveDateTime: "2015-02-27T01:40:58-05:00",
      issued: "2015-02-27T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTUtMDItMjcKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCnNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMyNSBtZyAvIG94eWNvZG9uZSBoeWRyb2NobG9yaWRlIDEwIG1nIG9yYWwgdGFibGV0IFtwZXJjb2NldF07IGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0CgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KUGF0aWVudCBpcyBwcmVzZW50aW5nIHdpdGggYXRyaWFsIGZpYnJpbGxhdGlvbiwgcGFydC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLiAKCiMjIFBsYW4KUGF0aWVudCB3YXMgZ2l2ZW4gdGhlIGZvbGxvd2luZyBpbW11bml6YXRpb25zOiBpbmZsdWVuemEsIHNlYXNvbmFsLCBpbmplY3RhYmxlLCBwcmVzZXJ2YXRpdmUgZnJlZS4gClRoZSBmb2xsb3dpbmcgcHJvY2VkdXJlcyB3ZXJlIGNvbmR1Y3RlZDoKLSBjYXRoZXRlciBhYmxhdGlvbiBvZiB0aXNzdWUgb2YgaGVhcnQKLSBhc3Nlc3NtZW50IG9mIGhlYWx0aCBhbmQgc29jaWFsIGNhcmUgbmVlZHMgKHByb2NlZHVyZSkKLSBkZXByZXNzaW9uIHNjcmVlbmluZyAocHJvY2VkdXJlKQotIGRlcHJlc3Npb24gc2NyZWVuaW5nIHVzaW5nIHBhdGllbnQgaGVhbHRoIHF1ZXN0aW9ubmFpcmUgdHdvLWl0ZW0gc2NvcmUgKHByb2NlZHVyZSkKLSBhc3Nlc3NtZW50IG9mIHN1YnN0YW5jZSB1c2UgKHByb2NlZHVyZSkKLSBhc3Nlc3NtZW50IHVzaW5nIGFsY29ob2wgdXNlIGRpc29yZGVycyBpZGVudGlmaWNhdGlvbiB0ZXN0IC0gY29uc3VtcHRpb24gKHByb2NlZHVyZSkKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSB3YXJmYXJpbiBzb2RpdW0gNSBtZyBvcmFsIHRhYmxldAotIHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nCi0gZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldAotIGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XQotIHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nCi0gZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldAotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Ci0gd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:3a0b8187-1b0a-4de4-74d4-fc0f582c61c6",
    resource: {
      resourceType: "DiagnosticReport",
      id: "3a0b8187-1b0a-4de4-74d4-fc0f582c61c6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "24323-8",
            display: "Comprehensive metabolic 2000 panel - Serum or Plasma",
          },
        ],
        text: "Comprehensive metabolic 2000 panel - Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:4e7953f8-72d2-33bb-fef7-1160b692cfee",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:3374f3f5-0cfb-74fa-56bd-c50c24835fca",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:f706b823-04f7-223c-9abb-7b66873a2d1e",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:07827004-6248-470d-01b6-e446f70ff59a",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:e13c0cc7-0c1f-2064-8b0d-2f3e4b2ce206",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:1f3748b6-ab85-a108-0ec8-42309076bb3d",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:79e5d1f5-72a5-582e-bac9-45284dbeeb7c",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:4690ec66-2932-9e67-c0ef-9764f0f8cfdc",
          display: "Carbon Dioxide",
        },
        {
          reference: "urn:uuid:6266beee-7863-2cb8-c811-81b696c51e1c",
          display: "Glomerular filtration rate/1.73 sq M.predicted",
        },
        {
          reference: "urn:uuid:2ef2bfdd-2e94-820a-691d-3a0e9f2762a4",
          display: "Protein [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:964bf4a9-6628-bac4-280e-0c536c06dac6",
          display: "Albumin [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:1abaf8de-5a66-beb6-86ca-bc71f86c2f46",
          display: "Globulin [Mass/volume] in Serum by calculation",
        },
        {
          reference: "urn:uuid:1b450050-9a94-e938-f3bf-75b83681d31c",
          display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:83a8489a-f553-8f92-f056-db61d6750a78",
          display:
            "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:9629adc5-46af-099e-319b-0e740db1de05",
          display:
            "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:d75a563f-90b7-20ac-1880-bcca7cd47e71",
          display:
            "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:fde3b357-f5c8-6390-bd1b-1b133fa75fb0",
    resource: {
      resourceType: "DiagnosticReport",
      id: "fde3b357-f5c8-6390-bd1b-1b133fa75fb0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:0af7aa16-dae4-08a5-6ceb-8d6d7f4edc2d",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:c4770967-0e6f-4772-179c-7e281a697771",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:20f1f60d-d749-2e9e-d130-0659c632ac82",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:9a3ea4a0-d0b9-cb39-985b-130c4a600037",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:d207cb9c-4f69-4689-7cc0-7aebc58e7467",
    resource: {
      resourceType: "DiagnosticReport",
      id: "d207cb9c-4f69-4689-7cc0-7aebc58e7467",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTUtMTEtMjAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzcgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCndhcmZhcmluIHNvZGl1bSA1IG1nIG9yYWwgdGFibGV0OyB2ZXJhcGFtaWwgaHlkcm9jaGxvcmlkZSA0MCBtZzsgc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQ7IGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XTsgZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMDAgbWcgLyBoeWRyb2NvZG9uZSBiaXRhcnRyYXRlIDUgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:6712bad1-160c-a7a8-5957-4e2f42078ac4",
    resource: {
      resourceType: "DiagnosticReport",
      id: "6712bad1-160c-a7a8-5957-4e2f42078ac4",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:c8d07981-60fc-db10-e6c1-6dd07aef9611",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:ba2799e4-840d-1953-2ea0-a5ee8354a548",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:69d58e58-bc99-9858-699a-b8e1f630b07b",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:4b178257-bb4b-e90e-7294-ba02606ef95a",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:18717b01-9186-44f1-3aa9-50134046a2fa",
    resource: {
      resourceType: "DiagnosticReport",
      id: "18717b01-9186-44f1-3aa9-50134046a2fa",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "58410-2",
            display:
              "Complete blood count (hemogram) panel - Blood by Automated count",
          },
        ],
        text: "Complete blood count (hemogram) panel - Blood by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:21eb5afd-ada4-5265-30f8-411bbbff7eff",
          display: "Leukocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:1ecde5fd-cd13-0733-930a-3486a2c90078",
          display: "Erythrocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:c7b883d9-79d4-565b-6a1b-a0784a5a2382",
          display: "Hemoglobin [Mass/volume] in Blood",
        },
        {
          reference: "urn:uuid:0012c14b-bb9d-392b-3820-2f93bdbfc397",
          display: "Hematocrit [Volume Fraction] of Blood by Automated count",
        },
        {
          reference: "urn:uuid:839f9408-cb17-e406-32db-18c5acc2ad2b",
          display: "MCV [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:34b52ea9-8506-3d42-928c-9651e32f4931",
          display: "MCH [Entitic mass] by Automated count",
        },
        {
          reference: "urn:uuid:df899fe2-44da-5e53-ee17-3a29a3edfce3",
          display: "MCHC [Mass/volume] by Automated count",
        },
        {
          reference: "urn:uuid:2a4db0f4-eef3-8328-be35-b38052db41c3",
          display:
            "Erythrocyte distribution width [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:a772b768-dcb0-0bd5-c9ce-d99be9bab9dc",
          display: "Platelets [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:ac0f4dfc-bc6b-7471-efff-0fee0890c44d",
          display:
            "Platelet distribution width [Entitic volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:232228da-4789-6741-8e4b-57662c625607",
          display:
            "Platelet mean volume [Entitic volume] in Blood by Automated count",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:a090d8e0-7006-079b-f665-7549cd5f3140",
    resource: {
      resourceType: "DiagnosticReport",
      id: "a090d8e0-7006-079b-f665-7549cd5f3140",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72109-2",
            display:
              "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
          },
        ],
        text: "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T02:54:03-05:00",
      issued: "2016-03-04T02:54:03.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:56bccd4c-db9b-83f0-c9b7-47387e259ee4",
          display: "Total score [AUDIT-C]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5c55692e-d9f5-f11e-2c6f-f1888168067a",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5c55692e-d9f5-f11e-2c6f-f1888168067a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTYtMDMtMDQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzcgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCndhcmZhcmluIHNvZGl1bSA1IG1nIG9yYWwgdGFibGV0OyB2ZXJhcGFtaWwgaHlkcm9jaGxvcmlkZSA0MCBtZzsgc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQ7IGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XTsgZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMDAgbWcgLyBoeWRyb2NvZG9uZSBiaXRhcnRyYXRlIDUgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHN0cmVzcyAoZmluZGluZykuIAoKIyMgUGxhbgpQYXRpZW50IHdhcyBnaXZlbiB0aGUgZm9sbG93aW5nIGltbXVuaXphdGlvbnM6IGluZmx1ZW56YSwgc2Vhc29uYWwsIGluamVjdGFibGUsIHByZXNlcnZhdGl2ZSBmcmVlLiAKVGhlIGZvbGxvd2luZyBwcm9jZWR1cmVzIHdlcmUgY29uZHVjdGVkOgotIGVsZWN0cmljYWwgY2FyZGlvdmVyc2lvbgotIGFzc2Vzc21lbnQgb2YgaGVhbHRoIGFuZCBzb2NpYWwgY2FyZSBuZWVkcyAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgb2Ygc3Vic3RhbmNlIHVzZSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgYWxjb2hvbCB1c2UgZGlzb3JkZXJzIGlkZW50aWZpY2F0aW9uIHRlc3QgLSBjb25zdW1wdGlvbiAocHJvY2VkdXJlKQpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XQotIHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nCi0gZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldAotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Ci0gd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:2701e7e6-09d7-82c7-ed48-2c4522d2594a",
    resource: {
      resourceType: "DiagnosticReport",
      id: "2701e7e6-09d7-82c7-ed48-2c4522d2594a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "24323-8",
            display: "Comprehensive metabolic 2000 panel - Serum or Plasma",
          },
        ],
        text: "Comprehensive metabolic 2000 panel - Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:ec8bb500-fabd-55c2-dafe-080eb8678082",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:ab99156a-783f-e57a-a399-ad6c6077223b",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:615cf710-3301-eee7-0419-72ad1c3b19c5",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:e0c85322-36a3-70a4-b322-df01a5925ef6",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:5e06fa85-d90f-e5d2-52a3-1c4639873b34",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:5a79120c-f13e-e03b-1b7c-f04cb0d3ea37",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:6a4b9de9-2d61-a0b9-ba0c-777f160a0312",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:d349d05b-64a7-51d8-b293-74a926d8ed73",
          display: "Carbon Dioxide",
        },
        {
          reference: "urn:uuid:f7e80fb0-2737-c8ba-827a-4a11d2efe729",
          display: "Glomerular filtration rate/1.73 sq M.predicted",
        },
        {
          reference: "urn:uuid:fc24e76d-7e9e-f03b-0d7e-efccd7bc5de6",
          display: "Protein [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:d2eb58c8-b7e1-4254-adac-7b4d450da146",
          display: "Albumin [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:5d653e5a-c113-f3c4-378b-0c3e7fb3310f",
          display: "Globulin [Mass/volume] in Serum by calculation",
        },
        {
          reference: "urn:uuid:e163b712-94d9-b5ec-4aa1-32923cbb2bba",
          display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:73eecc6d-f8cf-32fa-865d-21d8b64aa132",
          display:
            "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:186cc7e5-7700-a84a-760d-45d4ca61cddb",
          display:
            "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:06e4eba5-9834-4308-d0f5-0c4cd87a81d5",
          display:
            "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:2002e671-c754-bf5d-45ad-624f1465a03f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "2002e671-c754-bf5d-45ad-624f1465a03f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:83e88284-836b-2319-af03-f8209d0f3881",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:dde87b34-f0b5-283b-8c82-519e4dfda443",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:dd6d02b1-e091-ed6a-f868-0813309fb289",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:5307d201-77db-9685-f747-98a466a24c0c",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:908ab929-e572-6b66-c75b-0a23091c7252",
    resource: {
      resourceType: "DiagnosticReport",
      id: "908ab929-e572-6b66-c75b-0a23091c7252",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTYtMTEtMTkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCndhcmZhcmluIHNvZGl1bSA1IG1nIG9yYWwgdGFibGV0OyB2ZXJhcGFtaWwgaHlkcm9jaGxvcmlkZSA0MCBtZzsgc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQ7IGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XTsgZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMDAgbWcgLyBoeWRyb2NvZG9uZSBiaXRhcnRyYXRlIDUgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5f728583-0a42-7752-75c0-b917e5cfa3a1",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5f728583-0a42-7752-75c0-b917e5cfa3a1",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "69737-5",
            display: "Generalized anxiety disorder 7 item (GAD-7)",
          },
        ],
        text: "Generalized anxiety disorder 7 item (GAD-7)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T02:51:14-05:00",
      issued: "2017-03-10T02:51:14.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:7417e47f-51d0-53ed-cab5-9da0b3532a7f",
          display:
            "Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:45757376-3230-027c-0b57-9c269fa3fcd6",
    resource: {
      resourceType: "DiagnosticReport",
      id: "45757376-3230-027c-0b57-9c269fa3fcd6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59453-1",
            display: "Morse Fall Scale panel",
          },
        ],
        text: "Morse Fall Scale panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T03:14:38-05:00",
      issued: "2017-03-10T03:14:38.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:18ac32b1-281c-9a09-f619-67c48d3e4257",
          display: "Fall risk total [Morse Fall Scale]",
        },
        {
          reference: "urn:uuid:d85bac24-3be5-0bef-88fb-2c553af388b6",
          display: "Fall risk level [Morse Fall Scale]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:55eca7af-c665-9033-f55f-4f7e2befc2cd",
    resource: {
      resourceType: "DiagnosticReport",
      id: "55eca7af-c665-9033-f55f-4f7e2befc2cd",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "76499-3",
            display: "Humiliation, Afraid, Rape, and Kick questionnaire [HARK]",
          },
        ],
        text: "Humiliation, Afraid, Rape, and Kick questionnaire [HARK]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T03:45:18-05:00",
      issued: "2017-03-10T03:45:18.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:33e29318-3495-f0e3-81fc-1ee31fb2672b",
          display: "Total score [HARK]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:dd7c06ed-5792-de80-1ddb-768669a9bade",
    resource: {
      resourceType: "DiagnosticReport",
      id: "dd7c06ed-5792-de80-1ddb-768669a9bade",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "55757-9",
            display: "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          },
        ],
        text: "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T04:17:19-05:00",
      issued: "2017-03-10T04:17:19.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:472240a4-12da-ad50-de90-39ca8418ba76",
          display:
            "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:b40b41aa-14d5-d90e-e5cb-e83eb299b86f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "b40b41aa-14d5-d90e-e5cb-e83eb299b86f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T01:40:58-05:00",
      issued: "2017-03-10T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTctMDMtMTAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCndhcmZhcmluIHNvZGl1bSA1IG1nIG9yYWwgdGFibGV0OyB2ZXJhcGFtaWwgaHlkcm9jaGxvcmlkZSA0MCBtZzsgc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQ7IGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XTsgZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMDAgbWcgLyBoeWRyb2NvZG9uZSBiaXRhcnRyYXRlIDUgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHJlcG9ydHMgb2YgdmlvbGVuY2UgaW4gdGhlIGVudmlyb25tZW50IChmaW5kaW5nKS4gCgojIyBQbGFuClBhdGllbnQgd2FzIGdpdmVuIHRoZSBmb2xsb3dpbmcgaW1tdW5pemF0aW9uczogaW5mbHVlbnphLCBzZWFzb25hbCwgaW5qZWN0YWJsZSwgcHJlc2VydmF0aXZlIGZyZWUuIApUaGUgZm9sbG93aW5nIHByb2NlZHVyZXMgd2VyZSBjb25kdWN0ZWQ6Ci0gZWxlY3RyaWNhbCBjYXJkaW92ZXJzaW9uCi0gYXNzZXNzbWVudCBvZiBoZWFsdGggYW5kIHNvY2lhbCBjYXJlIG5lZWRzIChwcm9jZWR1cmUpCi0gYXNzZXNzbWVudCBvZiBhbnhpZXR5IChwcm9jZWR1cmUpCi0gYXNzZXNzbWVudCB1c2luZyBtb3JzZSBmYWxsIHNjYWxlIChwcm9jZWR1cmUpCi0gc2NyZWVuaW5nIGZvciBkb21lc3RpYyBhYnVzZSAocHJvY2VkdXJlKQotIGRlcHJlc3Npb24gc2NyZWVuaW5nIChwcm9jZWR1cmUpCi0gZGVwcmVzc2lvbiBzY3JlZW5pbmcgdXNpbmcgcGF0aWVudCBoZWFsdGggcXVlc3Rpb25uYWlyZSB0d28taXRlbSBzY29yZSAocHJvY2VkdXJlKQpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XQotIHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nCi0gZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldAotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Ci0gd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:bf5f3c8b-a26f-8212-b2f0-69b164338e57",
    resource: {
      resourceType: "DiagnosticReport",
      id: "bf5f3c8b-a26f-8212-b2f0-69b164338e57",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:9ccbf5a3-78c2-dd31-5e05-6ad80a34e923" },
      effectiveDateTime: "2017-06-07T13:40:58-04:00",
      issued: "2017-06-07T13:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTctMDYtMDcKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGFjdXRlIHZpcmFsIHBoYXJ5bmdpdGlzIChkaXNvcmRlcikuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:953ca796-06d5-e97f-4b1c-699cc13ef40c",
    resource: {
      resourceType: "DiagnosticReport",
      id: "953ca796-06d5-e97f-4b1c-699cc13ef40c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "24323-8",
            display: "Comprehensive metabolic 2000 panel - Serum or Plasma",
          },
        ],
        text: "Comprehensive metabolic 2000 panel - Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:f93a3d5c-1103-006d-d630-8ccd97fa81a5",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:3af41d67-f5ce-983c-1abd-36ee144201e6",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:e70423b7-c443-18ed-ca17-74b53556b1f6",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:12922f9c-58d2-e98c-3bae-7840b920d1d3",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:bdb68166-0ff1-ab08-318b-5e85b42435c5",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:a5ceff61-1945-cc17-dd7b-ff60661cd6e7",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:27af5600-cb04-f756-2b92-2ae9a4b567e6",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:d5b6675b-2226-bfb3-82c8-e810608bf208",
          display: "Carbon Dioxide",
        },
        {
          reference: "urn:uuid:7786bdd7-30eb-2f0e-6fa6-88620974be70",
          display: "Glomerular filtration rate/1.73 sq M.predicted",
        },
        {
          reference: "urn:uuid:dac6f623-24e9-1b1e-12cb-a52abf2c0f9f",
          display: "Protein [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:b92a5469-92b2-6491-53cc-59c1bfab6f3e",
          display: "Albumin [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:ff50f8c5-055a-8477-f0b2-4f1edc5f941a",
          display: "Globulin [Mass/volume] in Serum by calculation",
        },
        {
          reference: "urn:uuid:a51266f1-3e0e-0be0-915b-6cafa7c8246f",
          display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:b1bc5541-d1af-f9c3-24d2-426cc5dad868",
          display:
            "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:d0faf6d7-c25c-0b21-6afa-802a5717c0e6",
          display:
            "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:56bf350e-8efb-6969-a7bd-0e2ae0d4b680",
          display:
            "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5f8dd757-9d99-095c-9131-356f821ed76e",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5f8dd757-9d99-095c-9131-356f821ed76e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:bcca8c3a-de0b-5b1e-eb84-9afca92234ca",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:7acf7f95-288b-dab6-0894-b2830a0c25da",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:c590d86e-8906-37c5-72d2-b24e5b1d6207",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:e15924af-5efa-265a-b939-2f325134e7f4",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:165871b1-863d-1aa2-cb9a-d605e81dbdfd",
    resource: {
      resourceType: "DiagnosticReport",
      id: "165871b1-863d-1aa2-cb9a-d605e81dbdfd",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTctMTEtMTkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzkgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f3930b5a-e99a-9016-b88f-f229039ba5db",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f3930b5a-e99a-9016-b88f-f229039ba5db",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59453-1",
            display: "Morse Fall Scale panel",
          },
        ],
        text: "Morse Fall Scale panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      effectiveDateTime: "2018-03-16T04:05:09-04:00",
      issued: "2018-03-16T04:05:09.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:f280f849-2c8f-3617-d516-9714c78095d1",
          display: "Fall risk total [Morse Fall Scale]",
        },
        {
          reference: "urn:uuid:d33a2a74-5b77-e02d-8c0a-2f033723c20a",
          display: "Fall risk level [Morse Fall Scale]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:452d1876-7b1c-f03d-1faf-c0eb349b9669",
    resource: {
      resourceType: "DiagnosticReport",
      id: "452d1876-7b1c-f03d-1faf-c0eb349b9669",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "55757-9",
            display: "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          },
        ],
        text: "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      effectiveDateTime: "2018-03-16T04:40:38-04:00",
      issued: "2018-03-16T04:40:38.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:6ec008c2-88f0-4b17-c12b-783edcd0a960",
          display:
            "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:8bb9ff86-1fdb-d736-f0b8-b4e21c1cd37a",
    resource: {
      resourceType: "DiagnosticReport",
      id: "8bb9ff86-1fdb-d736-f0b8-b4e21c1cd37a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72109-2",
            display:
              "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
          },
        ],
        text: "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      effectiveDateTime: "2018-03-16T05:22:28-04:00",
      issued: "2018-03-16T05:22:28.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:23551a06-334c-a90e-926b-7505a1639641",
          display: "Total score [AUDIT-C]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:947c3bfd-f779-d903-fc2d-828fcb5bb98f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "947c3bfd-f779-d903-fc2d-828fcb5bb98f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      effectiveDateTime: "2018-03-16T02:40:58-04:00",
      issued: "2018-03-16T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTgtMDMtMTYKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzkgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuClBhdGllbnQgd2FzIGdpdmVuIHRoZSBmb2xsb3dpbmcgaW1tdW5pemF0aW9uczogaW5mbHVlbnphLCBzZWFzb25hbCwgaW5qZWN0YWJsZSwgcHJlc2VydmF0aXZlIGZyZWUuIApUaGUgZm9sbG93aW5nIHByb2NlZHVyZXMgd2VyZSBjb25kdWN0ZWQ6Ci0gZWxlY3RyaWNhbCBjYXJkaW92ZXJzaW9uCi0gYXNzZXNzbWVudCBvZiBoZWFsdGggYW5kIHNvY2lhbCBjYXJlIG5lZWRzIChwcm9jZWR1cmUpCi0gbWVkaWNhdGlvbiByZWNvbmNpbGlhdGlvbiAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgbW9yc2UgZmFsbCBzY2FsZSAocHJvY2VkdXJlKQotIGRlcHJlc3Npb24gc2NyZWVuaW5nIChwcm9jZWR1cmUpCi0gZGVwcmVzc2lvbiBzY3JlZW5pbmcgdXNpbmcgcGF0aWVudCBoZWFsdGggcXVlc3Rpb25uYWlyZSB0d28taXRlbSBzY29yZSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgb2Ygc3Vic3RhbmNlIHVzZSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgYWxjb2hvbCB1c2UgZGlzb3JkZXJzIGlkZW50aWZpY2F0aW9uIHRlc3QgLSBjb25zdW1wdGlvbiAocHJvY2VkdXJlKQpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XQotIHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nCi0gZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldAotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Ci0gd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:94d792ad-53eb-f258-2c1c-8be9aaf45624",
    resource: {
      resourceType: "DiagnosticReport",
      id: "94d792ad-53eb-f258-2c1c-8be9aaf45624",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "24323-8",
            display: "Comprehensive metabolic 2000 panel - Serum or Plasma",
          },
        ],
        text: "Comprehensive metabolic 2000 panel - Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:0b715acf-c532-cf92-1c36-195eab87d3cd",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:e3d6a204-5175-69c3-3449-742f44ccb68a",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:789a4faf-6928-3a24-3e5b-b008d86b80a5",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:b5afa0d0-224a-3879-24be-4706f02b0d31",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:851e2ee0-6fbb-7884-2af1-724eec167765",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:2e88744a-5b73-c762-987d-05ab5a8990a0",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:4a31a418-b1bb-3b34-1442-f058958032ac",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:ce5cc8f3-4969-9900-0338-771e6411f246",
          display: "Carbon Dioxide",
        },
        {
          reference: "urn:uuid:fd0a5f44-d61b-b4da-d6b0-7ba0a597f5de",
          display: "Glomerular filtration rate/1.73 sq M.predicted",
        },
        {
          reference: "urn:uuid:36b8debe-ee9c-303e-1e32-64f4bf92f49a",
          display: "Protein [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:f81fe701-8daf-3ac0-3c7e-7d76f443a1a0",
          display: "Albumin [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:84250397-9447-38e6-b819-d9d8be480794",
          display: "Globulin [Mass/volume] in Serum by calculation",
        },
        {
          reference: "urn:uuid:1bc43b23-a422-7554-82c9-1d7f61b4985f",
          display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:ca95ddda-5730-402a-1202-b008ad47f532",
          display:
            "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:0b3e4730-551e-20a9-61d6-383042c4b2ca",
          display:
            "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:22ab86d4-eb53-fd1c-b550-6fd50c6c9df5",
          display:
            "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:2ffefbaa-d8d6-2d7a-ceca-ee440a3aaa90",
    resource: {
      resourceType: "DiagnosticReport",
      id: "2ffefbaa-d8d6-2d7a-ceca-ee440a3aaa90",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:86d024e1-8eb0-5cf5-283f-a556eb4d4454",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:e4c9754f-6fc4-2935-8fae-7e244ec5c561",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:06532ea7-0c5f-8f11-2daf-ce91b5aa2fb3",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:865137ff-5237-e8d2-eb6f-9aef04e8ee80",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5a35ebce-dd87-08eb-88aa-76e939d2bb78",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5a35ebce-dd87-08eb-88aa-76e939d2bb78",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTgtMTEtMTkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODAgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e054df93-1089-5ab2-ce17-0ae6f8888739",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e054df93-1089-5ab2-ce17-0ae6f8888739",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T02:40:58-04:00",
      issued: "2019-03-22T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:3d1e351f-0cb1-3d24-da5c-66f12700a9ac",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:e259b379-776a-ae83-b7f4-e8a41cf2c7ac",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:892204ce-7721-691d-f7cd-87e5e11599af",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:6bb08236-a0c7-248b-f22a-37440276e8eb",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:cd9be7e1-ba0a-90f8-326b-a0a2a55a36d0",
    resource: {
      resourceType: "DiagnosticReport",
      id: "cd9be7e1-ba0a-90f8-326b-a0a2a55a36d0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "69737-5",
            display: "Generalized anxiety disorder 7 item (GAD-7)",
          },
        ],
        text: "Generalized anxiety disorder 7 item (GAD-7)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T03:53:01-04:00",
      issued: "2019-03-22T03:53:01.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:761f4f7d-319f-02dc-2c2e-ded39f97a44b",
          display:
            "Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:67bbebfb-d5b3-f09d-b8bb-a943c3d876df",
    resource: {
      resourceType: "DiagnosticReport",
      id: "67bbebfb-d5b3-f09d-b8bb-a943c3d876df",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59453-1",
            display: "Morse Fall Scale panel",
          },
        ],
        text: "Morse Fall Scale panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T04:18:39-04:00",
      issued: "2019-03-22T04:18:39.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:00eb811a-7556-8f51-f274-59de71f4537d",
          display: "Fall risk total [Morse Fall Scale]",
        },
        {
          reference: "urn:uuid:777acd43-753b-d61f-5a65-ec338f64395b",
          display: "Fall risk level [Morse Fall Scale]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:4d580930-bbae-d379-d23e-bfb6af00fb07",
    resource: {
      resourceType: "DiagnosticReport",
      id: "4d580930-bbae-d379-d23e-bfb6af00fb07",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "76499-3",
            display: "Humiliation, Afraid, Rape, and Kick questionnaire [HARK]",
          },
        ],
        text: "Humiliation, Afraid, Rape, and Kick questionnaire [HARK]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T04:57:36-04:00",
      issued: "2019-03-22T04:57:36.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:bd001317-76d3-5d0f-52ab-cc74cfc9a06b",
          display: "Total score [HARK]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:48236e49-c8cf-c05a-71aa-7af12ea0b011",
    resource: {
      resourceType: "DiagnosticReport",
      id: "48236e49-c8cf-c05a-71aa-7af12ea0b011",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T02:40:58-04:00",
      issued: "2019-03-22T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTktMDMtMjIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODAgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuClBhdGllbnQgd2FzIGdpdmVuIHRoZSBmb2xsb3dpbmcgaW1tdW5pemF0aW9uczogaW5mbHVlbnphLCBzZWFzb25hbCwgaW5qZWN0YWJsZSwgcHJlc2VydmF0aXZlIGZyZWUuIApUaGUgZm9sbG93aW5nIHByb2NlZHVyZXMgd2VyZSBjb25kdWN0ZWQ6Ci0gZWxlY3RyaWNhbCBjYXJkaW92ZXJzaW9uCi0gYXNzZXNzbWVudCBvZiBoZWFsdGggYW5kIHNvY2lhbCBjYXJlIG5lZWRzIChwcm9jZWR1cmUpCi0gbWVkaWNhdGlvbiByZWNvbmNpbGlhdGlvbiAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgb2YgYW54aWV0eSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgbW9yc2UgZmFsbCBzY2FsZSAocHJvY2VkdXJlKQotIHNjcmVlbmluZyBmb3IgZG9tZXN0aWMgYWJ1c2UgKHByb2NlZHVyZSkKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBhY2V0YW1pbm9waGVuIDMyNSBtZyAvIG94eWNvZG9uZSBoeWRyb2NobG9yaWRlIDEwIG1nIG9yYWwgdGFibGV0IFtwZXJjb2NldF0KLSB2ZXJhcGFtaWwgaHlkcm9jaGxvcmlkZSA0MCBtZwotIGRpZ294aW4gMC4xMjUgbWcgb3JhbCB0YWJsZXQKLSBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAotIHdhcmZhcmluIHNvZGl1bSA1IG1nIG9yYWwgdGFibGV0Cg==",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:8e58d922-a84e-bc21-7b2c-8fe5b866a59d",
    resource: {
      resourceType: "DiagnosticReport",
      id: "8e58d922-a84e-bc21-7b2c-8fe5b866a59d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "24323-8",
            display: "Comprehensive metabolic 2000 panel - Serum or Plasma",
          },
        ],
        text: "Comprehensive metabolic 2000 panel - Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:10e13da2-eedc-d637-8864-1612bc1b2078",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:76bd963e-51ef-47c6-34ef-8b8422b9947a",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:4c8f2f4e-9c69-b6ba-0924-d203cd8c4b93",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:4b828ccd-1305-a8c7-6591-12c31001913b",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:32a90138-f40c-4a1d-3463-c8346a4be935",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:e54bbf5b-6c8c-af0d-cbb2-08df28b363cc",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:f8f1d32f-8782-0bf2-5523-2b753df1725f",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:91183621-d54b-074e-40bb-1823b9d70020",
          display: "Carbon Dioxide",
        },
        {
          reference: "urn:uuid:eada7278-ac41-8a33-fee7-db2bab34d318",
          display: "Glomerular filtration rate/1.73 sq M.predicted",
        },
        {
          reference: "urn:uuid:3bbd8a11-1654-b2e3-623d-4cb1e4fa796e",
          display: "Protein [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:1bb6144c-a97c-cdba-24a2-e1d3f30046e7",
          display: "Albumin [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:669dc74a-b3fb-784c-fb64-fafd3f3526b0",
          display: "Globulin [Mass/volume] in Serum by calculation",
        },
        {
          reference: "urn:uuid:93dbe057-bfd8-52ca-dadc-4378b431455b",
          display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:e7471fa5-8d2c-e3a9-ca72-f64b0abad727",
          display:
            "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:7b7f4b3c-36d8-9184-4df9-1c3de4da7e84",
          display:
            "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:17676d2d-5b5f-d741-9eb6-173926f116d5",
          display:
            "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:d72c0aef-fa8e-4858-e709-65d34e6fa8c0",
    resource: {
      resourceType: "DiagnosticReport",
      id: "d72c0aef-fa8e-4858-e709-65d34e6fa8c0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:9549410c-5a48-1673-f6b7-0ed6ee18e777",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:9dbd849e-1f73-abff-20bf-12369f388301",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:d1fc1fd0-9818-2b01-8037-030fe3cdd6cd",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:a3f257ec-f222-e1f0-53c8-9e06d4dc2eb7",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:aae9d803-9fdb-487f-dfd3-63fbda1cfa5c",
    resource: {
      resourceType: "DiagnosticReport",
      id: "aae9d803-9fdb-487f-dfd3-63fbda1cfa5c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTktMTEtMTkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODEgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:c5631dfb-e0c8-f6f7-dba9-99c9ac41fc59",
    resource: {
      resourceType: "DiagnosticReport",
      id: "c5631dfb-e0c8-f6f7-dba9-99c9ac41fc59",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "69737-5",
            display: "Generalized anxiety disorder 7 item (GAD-7)",
          },
        ],
        text: "Generalized anxiety disorder 7 item (GAD-7)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      effectiveDateTime: "2020-03-27T03:44:01-04:00",
      issued: "2020-03-27T03:44:01.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:f079cf3d-7f77-d610-bc2d-e732e3949358",
          display:
            "Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:0f99a1ba-c90c-6b54-155b-f1856e7aca1b",
    resource: {
      resourceType: "DiagnosticReport",
      id: "0f99a1ba-c90c-6b54-155b-f1856e7aca1b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59453-1",
            display: "Morse Fall Scale panel",
          },
        ],
        text: "Morse Fall Scale panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      effectiveDateTime: "2020-03-27T04:10:46-04:00",
      issued: "2020-03-27T04:10:46.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:02515dc1-91a7-c81f-615e-224f9b3ba2dd",
          display: "Fall risk total [Morse Fall Scale]",
        },
        {
          reference: "urn:uuid:4b788c31-37bd-4b92-7484-5eda5a171c4c",
          display: "Fall risk level [Morse Fall Scale]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e5c9e9ed-0ffb-9230-58ae-952615da9d58",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e5c9e9ed-0ffb-9230-58ae-952615da9d58",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72109-2",
            display:
              "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
          },
        ],
        text: "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      effectiveDateTime: "2020-03-27T04:49:20-04:00",
      issued: "2020-03-27T04:49:20.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:50998216-8562-fdcc-0ca1-c256344cdfb4",
          display: "Total score [AUDIT-C]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:4b4952bb-0f14-6432-3429-6b020e0881d5",
    resource: {
      resourceType: "DiagnosticReport",
      id: "4b4952bb-0f14-6432-3429-6b020e0881d5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      effectiveDateTime: "2020-03-27T02:40:58-04:00",
      issued: "2020-03-27T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMjAtMDMtMjcKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODEgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuClBhdGllbnQgd2FzIGdpdmVuIHRoZSBmb2xsb3dpbmcgaW1tdW5pemF0aW9uczogaW5mbHVlbnphLCBzZWFzb25hbCwgaW5qZWN0YWJsZSwgcHJlc2VydmF0aXZlIGZyZWUsIHRkIChhZHVsdCkgcHJlc2VydmF0aXZlIGZyZWUuIApUaGUgZm9sbG93aW5nIHByb2NlZHVyZXMgd2VyZSBjb25kdWN0ZWQ6Ci0gY2F0aGV0ZXIgYWJsYXRpb24gb2YgdGlzc3VlIG9mIGhlYXJ0Ci0gYXNzZXNzbWVudCBvZiBoZWFsdGggYW5kIHNvY2lhbCBjYXJlIG5lZWRzIChwcm9jZWR1cmUpCi0gbWVkaWNhdGlvbiByZWNvbmNpbGlhdGlvbiAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgb2YgYW54aWV0eSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgbW9yc2UgZmFsbCBzY2FsZSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgb2Ygc3Vic3RhbmNlIHVzZSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgYWxjb2hvbCB1c2UgZGlzb3JkZXJzIGlkZW50aWZpY2F0aW9uIHRlc3QgLSBjb25zdW1wdGlvbiAocHJvY2VkdXJlKQpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XQotIHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nCi0gZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldAotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Ci0gd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:371f9f97-d671-62ba-47c3-be451f699c38",
    resource: {
      resourceType: "DiagnosticReport",
      id: "371f9f97-d671-62ba-47c3-be451f699c38",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "24323-8",
            display: "Comprehensive metabolic 2000 panel - Serum or Plasma",
          },
        ],
        text: "Comprehensive metabolic 2000 panel - Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:4a692b56-5c6b-f88b-8843-920623b8b770",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:770a1ed7-3128-3c54-e70f-1c8895819093",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:0525d3ee-b294-961a-30c2-206615ed2b2c",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:a864d24e-d5ee-8447-e174-c38cfe2a0392",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:57817565-f563-e77f-b90c-54383cad2681",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:49e6a4d2-094f-c405-b009-7883042b6b1a",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:559d2012-ba37-355e-b651-4340bb5dc92d",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:ea155180-8d2f-7833-1db2-420c34be4fbb",
          display: "Carbon Dioxide",
        },
        {
          reference: "urn:uuid:4ac6dc7f-6380-2e7b-c463-d89d3c3f7fb6",
          display: "Glomerular filtration rate/1.73 sq M.predicted",
        },
        {
          reference: "urn:uuid:467e5af0-9de3-41d9-e8cf-7d5dc0d80f0a",
          display: "Protein [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:b8c4fdea-8df6-0842-1cd8-ab3cd4d957e0",
          display: "Albumin [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:e15505a9-8385-8ee2-3cd1-9cc282a6f820",
          display: "Globulin [Mass/volume] in Serum by calculation",
        },
        {
          reference: "urn:uuid:754944c6-d99a-2f40-1a98-2463d7ca6538",
          display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:1de522a9-7ec4-d29f-c937-361866c5781c",
          display:
            "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:74b5d13a-bf72-87a7-061e-f629f4b3358d",
          display:
            "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:fba4a9dd-ae31-4e44-1bce-614eb2f6569c",
          display:
            "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f85daafd-f186-c628-71e6-54994603f67b",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f85daafd-f186-c628-71e6-54994603f67b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:cc9de5a0-9f1b-3dce-13e6-e1f8ab295571",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:f6ee24af-674b-696a-0553-66ed4c7c0248",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:9bac7907-b192-26af-73b1-cf1301e6e4bc",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:adade872-e4d4-9a8c-d8c6-be8b905ced48",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e2052ee2-0c71-ef8d-f643-76815df6fcea",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e2052ee2-0c71-ef8d-f643-76815df6fcea",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMjAtMTEtMTgKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:fca2ea54-35e2-3a9f-6726-32fa9c96e477",
    resource: {
      resourceType: "DiagnosticReport",
      id: "fca2ea54-35e2-3a9f-6726-32fa9c96e477",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5ef6b653-7ec7-85ff-8931-2c8eec210e3d" },
      effectiveDateTime: "2021-03-12T01:40:58-05:00",
      issued: "2021-03-12T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMjEtMDMtMTIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgpQYXRpZW50IHdhcyBnaXZlbiB0aGUgZm9sbG93aW5nIGltbXVuaXphdGlvbnM6IHNhcnMtY292LTIgKGNvdmlkLTE5KSB2YWNjaW5lLCBtcm5hLCBzcGlrZSBwcm90ZWluLCBsbnAsIHByZXNlcnZhdGl2ZSBmcmVlLCAxMDAgbWNnLzAuNW1sIGRvc2UuIAo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:6865d493-838f-1674-1f55-08d58dbfa23d",
    resource: {
      resourceType: "DiagnosticReport",
      id: "6865d493-838f-1674-1f55-08d58dbfa23d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "58410-2",
            display:
              "Complete blood count (hemogram) panel - Blood by Automated count",
          },
        ],
        text: "Complete blood count (hemogram) panel - Blood by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:05f0cdf9-5295-0130-4dee-d26c500e1624",
          display: "Leukocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:0823534e-b22f-4e9d-fd5d-5dd9973b19ea",
          display: "Erythrocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:bec5c14c-6356-937d-d09d-9a4084c66aa1",
          display: "Hemoglobin [Mass/volume] in Blood",
        },
        {
          reference: "urn:uuid:8fc2f583-cd72-e4fd-7f3f-a3d4d0020ad2",
          display: "Hematocrit [Volume Fraction] of Blood by Automated count",
        },
        {
          reference: "urn:uuid:ead00780-4c8a-2a14-40c1-05b2be84c5d6",
          display: "MCV [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:96d1a8f5-01c8-c99f-2463-3733a087049b",
          display: "MCH [Entitic mass] by Automated count",
        },
        {
          reference: "urn:uuid:293ad538-0f64-96cd-155c-1a8533b1aaa7",
          display: "MCHC [Mass/volume] by Automated count",
        },
        {
          reference: "urn:uuid:2a6283f0-e597-9fbc-ae77-5076cf8f3f5d",
          display:
            "Erythrocyte distribution width [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:af75530e-3226-c264-1a58-75930b0fe77f",
          display: "Platelets [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:e3835bfb-4cc2-2bb3-57fb-9c70f294f2f4",
          display:
            "Platelet distribution width [Entitic volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:1479a80e-cecc-24fa-8712-9949620102ca",
          display:
            "Platelet mean volume [Entitic volume] in Blood by Automated count",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:59a6217d-35ae-6b63-1859-e33fdd4d29d7",
    resource: {
      resourceType: "DiagnosticReport",
      id: "59a6217d-35ae-6b63-1859-e33fdd4d29d7",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59453-1",
            display: "Morse Fall Scale panel",
          },
        ],
        text: "Morse Fall Scale panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T03:48:55-04:00",
      issued: "2021-04-02T03:48:55.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:a8c51444-bcf2-af5c-9446-5c7cc354eddd",
          display: "Fall risk total [Morse Fall Scale]",
        },
        {
          reference: "urn:uuid:64835b06-4cb9-ff95-6d63-c7498eff8181",
          display: "Fall risk level [Morse Fall Scale]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:fcdb472a-4cb3-20ec-759b-8ea5aa9526d8",
    resource: {
      resourceType: "DiagnosticReport",
      id: "fcdb472a-4cb3-20ec-759b-8ea5aa9526d8",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72109-2",
            display:
              "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
          },
        ],
        text: "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T04:30:17-04:00",
      issued: "2021-04-02T04:30:17.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:2dab3210-6744-29fd-f8d2-6a5a933d4c3a",
          display: "Total score [AUDIT-C]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:798aeb4d-8507-950c-67af-748af40986e0",
    resource: {
      resourceType: "DiagnosticReport",
      id: "798aeb4d-8507-950c-67af-748af40986e0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMjEtMDQtMDIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuClBhdGllbnQgd2FzIGdpdmVuIHRoZSBmb2xsb3dpbmcgaW1tdW5pemF0aW9uczogaW5mbHVlbnphLCBzZWFzb25hbCwgaW5qZWN0YWJsZSwgcHJlc2VydmF0aXZlIGZyZWUuIApUaGUgZm9sbG93aW5nIHByb2NlZHVyZXMgd2VyZSBjb25kdWN0ZWQ6Ci0gY2F0aGV0ZXIgYWJsYXRpb24gb2YgdGlzc3VlIG9mIGhlYXJ0Ci0gYXNzZXNzbWVudCBvZiBoZWFsdGggYW5kIHNvY2lhbCBjYXJlIG5lZWRzIChwcm9jZWR1cmUpCi0gbWVkaWNhdGlvbiByZWNvbmNpbGlhdGlvbiAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgbW9yc2UgZmFsbCBzY2FsZSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgb2Ygc3Vic3RhbmNlIHVzZSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgYWxjb2hvbCB1c2UgZGlzb3JkZXJzIGlkZW50aWZpY2F0aW9uIHRlc3QgLSBjb25zdW1wdGlvbiAocHJvY2VkdXJlKQpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XQotIHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nCi0gZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldAotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Ci0gd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e9efbb33-3b66-b9f2-d36a-c88d572204fc",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e9efbb33-3b66-b9f2-d36a-c88d572204fc",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:001e2916-2a73-95a5-7171-7e4d8ca549c8" },
      effectiveDateTime: "2021-04-09T02:40:58-04:00",
      issued: "2021-04-09T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMjEtMDQtMDkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgpQYXRpZW50IHdhcyBnaXZlbiB0aGUgZm9sbG93aW5nIGltbXVuaXphdGlvbnM6IHNhcnMtY292LTIgKGNvdmlkLTE5KSB2YWNjaW5lLCBtcm5hLCBzcGlrZSBwcm90ZWluLCBsbnAsIHByZXNlcnZhdGl2ZSBmcmVlLCAxMDAgbWNnLzAuNW1sIGRvc2UuIAo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:b5338d94-48dd-cd6b-8d58-11f8cfddee92",
    resource: {
      resourceType: "DiagnosticReport",
      id: "b5338d94-48dd-cd6b-8d58-11f8cfddee92",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "24323-8",
            display: "Comprehensive metabolic 2000 panel - Serum or Plasma",
          },
        ],
        text: "Comprehensive metabolic 2000 panel - Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:3ebf2acd-101f-97ea-c400-c24e74efceec",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:764fb74c-eb2d-94ba-5335-350d7a214478",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:bd49bb5d-b67d-262c-82b8-8904bebbe363",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:147a4749-be28-f69a-5324-dfaf0bcc7dd5",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:fe6f6020-1eda-52fd-9900-5f1c5912f103",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:caaac0a5-dcb0-8ad7-bb97-de03812761b4",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:ff8b358c-bc63-ea53-66cf-bd1dcc183d00",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:00f308e6-639b-b2a9-4118-81b103e1015a",
          display: "Carbon Dioxide",
        },
        {
          reference: "urn:uuid:472530d4-9300-b4c7-237a-056a4d9613d1",
          display: "Glomerular filtration rate/1.73 sq M.predicted",
        },
        {
          reference: "urn:uuid:caba3582-b90c-722d-bd81-4f701d222592",
          display: "Protein [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:03290258-322e-e818-570a-6ab57c35edb1",
          display: "Albumin [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:b46f166a-37e3-68e2-77a0-cd8ebfd33b28",
          display: "Globulin [Mass/volume] in Serum by calculation",
        },
        {
          reference: "urn:uuid:4126c830-56ef-27a8-63c6-268626e8a31f",
          display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:b0119079-bb8a-5a2d-7518-a26eb8034f6d",
          display:
            "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:aa0790a5-52df-14fd-804e-ffb8d070b15e",
          display:
            "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:769cc808-aa57-45d5-8492-0305fc821cb6",
          display:
            "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:97c71cb0-8ff7-956d-99ae-07f40e46be39",
    resource: {
      resourceType: "DiagnosticReport",
      id: "97c71cb0-8ff7-956d-99ae-07f40e46be39",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:2ddfacb6-38e5-7042-5820-20fceb408ef6",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:ab9c1b5f-e30a-1087-97a1-715e2fff26dd",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:37c8d296-ba11-c8c3-c55f-3f565e1f1031",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:af74ed3a-4026-bc53-d4f3-cb13373fe7be",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:8f241f9a-577f-b862-19f0-9e6e4a3631a3",
    resource: {
      resourceType: "DiagnosticReport",
      id: "8f241f9a-577f-b862-19f0-9e6e4a3631a3",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://loinc.org",
              code: "34117-2",
              display: "History and physical note",
            },
            {
              system: "http://loinc.org",
              code: "51847-2",
              display: "Evaluation+Plan note",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMjEtMTEtMTgKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODMgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
];

export default entities;
