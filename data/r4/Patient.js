const entities = [
  {
    fullUrl: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
    resource: {
      resourceType: "Patient",
      id: "9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient",
        ],
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated by <a href="https://github.com/synthetichealth/synthea">Synthea</a>.Version identifier: master-branch-latest-7-gcc27279b\n .   Person seed: -3777822747964213901  Population seed: 0</div>',
      },
      extension: [
        {
          url: "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
          extension: [
            {
              url: "ombCategory",
              valueCoding: {
                system: "urn:oid:2.16.840.1.113883.6.238",
                code: "2106-3",
                display: "White",
              },
            },
            { url: "text", valueString: "White" },
          ],
        },
        {
          url: "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
          extension: [
            {
              url: "ombCategory",
              valueCoding: {
                system: "urn:oid:2.16.840.1.113883.6.238",
                code: "2186-5",
                display: "Not Hispanic or Latino",
              },
            },
            { url: "text", valueString: "Not Hispanic or Latino" },
          ],
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName",
          valueString: "Alethia102 Davis923",
        },
        {
          url: "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
          valueCode: "M",
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/patient-birthPlace",
          valueAddress: {
            city: "Somerville",
            state: "Massachusetts",
            country: "US",
          },
        },
        {
          url: "http://synthetichealth.github.io/synthea/disability-adjusted-life-years",
          valueDecimal: 1.1507989662318237,
        },
        {
          url: "http://synthetichealth.github.io/synthea/quality-adjusted-life-years",
          valueDecimal: 80.84920103376818,
        },
      ],
      identifier: [
        {
          system: "https://github.com/synthetichealth/synthea",
          value: "9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        },
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "MR",
                display: "Medical Record Number",
              },
            ],
            text: "Medical Record Number",
          },
          system: "http://hospital.smarthealthit.org",
          value: "9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
        },
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "SS",
                display: "Social Security Number",
              },
            ],
            text: "Social Security Number",
          },
          system: "http://hl7.org/fhir/sid/us-ssn",
          value: "999-97-2103",
        },
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "DL",
                display: "Driver's License",
              },
            ],
            text: "Driver's License",
          },
          system: "urn:oid:2.16.840.1.113883.4.3.25",
          value: "S99989635",
        },
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "PPN",
                display: "Passport Number",
              },
            ],
            text: "Passport Number",
          },
          system:
            "http://standardhealthrecord.org/fhir/StructureDefinition/passportNumber",
          value: "X88158957X",
        },
      ],
      name: [
        {
          use: "official",
          family: "Smitham825",
          given: ["Frances376"],
          prefix: ["Mr."],
        },
      ],
      telecom: [{ system: "phone", value: "555-626-6810", use: "home" }],
      gender: "male",
      birthDate: "1938-09-30",
      address: [
        {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/geolocation",
              extension: [
                { url: "latitude", valueDecimal: 41.79897293913609 },
                { url: "longitude", valueDecimal: -70.58998489286049 },
              ],
            },
          ],
          line: ["898 Bernier Mews"],
          city: "Bourne",
          state: "MA",
          country: "US",
        },
      ],
      maritalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
            code: "M",
            display: "M",
          },
        ],
        text: "M",
      },
      multipleBirthBoolean: false,
      communication: [
        {
          language: {
            coding: [
              { system: "urn:ietf:bcp:47", code: "en-US", display: "English" },
            ],
            text: "English",
          },
        },
      ],
    },
    request: { method: "POST", url: "Patient" },
  },
];

export default entities;