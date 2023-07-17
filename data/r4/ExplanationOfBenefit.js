const entities = [
  {
    fullUrl: "urn:uuid:7299657c-d74d-d447-14e7-d8607d9508fd",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "7299657c-d74d-d447-14e7-d8607d9508fd",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Blue Cross Blue Shield" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Blue Cross Blue Shield" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "5c6abe04-e164-eb86-b0e1-5710e15054ff",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1944-04-23T03:40:58-04:00",
        end: "1945-04-23T03:40:58-04:00",
      },
      created: "1944-04-23T03:40:58-04:00",
      insurer: { display: "Blue Cross Blue Shield" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:5c6abe04-e164-eb86-b0e1-5710e15054ff" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: {
            reference: "#coverage",
            display: "Blue Cross Blue Shield",
          },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "50849002",
                display: "Emergency room admission (procedure)",
              },
            ],
            text: "Emergency room admission (procedure)",
          },
          servicedPeriod: {
            start: "1944-04-23T02:40:58-04:00",
            end: "1944-04-23T03:40:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "20",
                display: "Urgent Care Facility",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:e8bc0159-8b0b-8ff7-b614-85a6a650cb26" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 129.16, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:6785cf18-89a6-4863-2572-fb77f47b3f64",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "6785cf18-89a6-4863-2572-fb77f47b3f64",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Anthem" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Anthem" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "33146222-85b6-d50f-4340-c69c08a862d1",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1955-11-18T01:55:58-05:00",
        end: "1956-11-18T01:55:58-05:00",
      },
      created: "1955-11-18T01:55:58-05:00",
      insurer: { display: "Anthem" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:33146222-85b6-d50f-4340-c69c08a862d1" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:7663291d-7763-5c77-227d-b36061ae3be2",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Anthem" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "410620009",
                display: "Well child visit (procedure)",
              },
            ],
            text: "Well child visit (procedure)",
          },
          servicedPeriod: {
            start: "1955-11-18T01:40:58-05:00",
            end: "1955-11-18T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:e1f0cb6f-8192-04eb-72db-7c5c3eceef2d" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160968000",
                display: "Risk activity involvement (finding)",
              },
            ],
            text: "Risk activity involvement (finding)",
          },
          servicedPeriod: {
            start: "1955-11-18T01:40:58-05:00",
            end: "1955-11-18T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 1591.48, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:0ac6868b-d359-766f-7883-4d16072819e9",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "0ac6868b-d359-766f-7883-4d16072819e9",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Aetna" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Aetna" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "42f5313e-74a3-13bc-1597-499c0e1ff4cc",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1956-11-23T01:55:58-05:00",
        end: "1957-11-23T01:55:58-05:00",
      },
      created: "1956-11-23T01:55:58-05:00",
      insurer: { display: "Aetna" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:42f5313e-74a3-13bc-1597-499c0e1ff4cc" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:379841ea-5636-858b-f58b-3d2737d077e7",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
        {
          sequence: 2,
          diagnosisReference: {
            reference: "urn:uuid:c5380b94-dad2-92f0-e2c4-bbeaca0834a2",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        { focal: true, coverage: { reference: "#coverage", display: "Aetna" } },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "1956-11-23T01:40:58-05:00",
            end: "1956-11-23T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:a63bab0b-bfa7-02f8-a81f-d134e8abae49" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
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
          servicedPeriod: {
            start: "1956-11-23T01:40:58-05:00",
            end: "1956-11-23T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
        {
          sequence: 3,
          diagnosisSequence: [2],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "1956-11-23T01:40:58-05:00",
            end: "1956-11-23T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 786.3299999999999, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:fa269ea4-d97d-20b9-f858-761d51b0a406",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "fa269ea4-d97d-20b9-f858-761d51b0a406",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "UnitedHealthcare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "UnitedHealthcare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "9923e930-0782-4de4-750f-b4cc4eaa9666",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1957-11-29T01:55:58-05:00",
        end: "1958-11-29T01:55:58-05:00",
      },
      created: "1957-11-29T01:55:58-05:00",
      insurer: { display: "UnitedHealthcare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:9923e930-0782-4de4-750f-b4cc4eaa9666" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:85830a3a-7efb-3a3d-5a96-abcca64a58f9",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "UnitedHealthcare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "1957-11-29T01:40:58-05:00",
            end: "1957-11-29T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:ffe7916d-32bf-fd09-5444-3af0a42357ad" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "1957-11-29T01:40:58-05:00",
            end: "1957-11-29T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 786.3299999999999, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:2854acfd-25db-7b24-a3f7-f67ce929131c",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "2854acfd-25db-7b24-a3f7-f67ce929131c",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Blue Cross Blue Shield" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Blue Cross Blue Shield" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "4526e5e9-d88f-d012-8b9b-f9dab5f765a8",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1960-12-02T01:55:58-05:00",
        end: "1961-12-02T01:55:58-05:00",
      },
      created: "1960-12-02T01:55:58-05:00",
      insurer: { display: "Blue Cross Blue Shield" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:4526e5e9-d88f-d012-8b9b-f9dab5f765a8" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:58ca645b-3295-4108-82f6-d87227ebf93d",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: {
            reference: "#coverage",
            display: "Blue Cross Blue Shield",
          },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "1960-12-02T01:40:58-05:00",
            end: "1960-12-02T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:ab1b44a8-e592-358e-c82b-2ad93e761853" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "1960-12-02T01:40:58-05:00",
            end: "1960-12-02T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 1554.57, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:58df53af-40da-3062-f2cb-57fa71f357ac",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "58df53af-40da-3062-f2cb-57fa71f357ac",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Cigna Health" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Cigna Health" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "ff9e1f97-507f-16a3-f0de-a3f11a43f5cd",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1963-12-06T01:55:58-05:00",
        end: "1964-12-06T01:55:58-05:00",
      },
      created: "1963-12-06T01:55:58-05:00",
      insurer: { display: "Cigna Health" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:ff9e1f97-507f-16a3-f0de-a3f11a43f5cd" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:67ab0d9b-7bbf-38eb-085d-8c66f42acb16",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Cigna Health" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "1963-12-06T01:40:58-05:00",
            end: "1963-12-06T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:946b1ccf-b3fe-73e0-89fe-5c4eca918fbd" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "1963-12-06T01:40:58-05:00",
            end: "1963-12-06T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 1373.19, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:7422dcca-9044-a607-08a5-8f6fbdf7f1b9",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "7422dcca-9044-a607-08a5-8f6fbdf7f1b9",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "UnitedHealthcare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "UnitedHealthcare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "71b75f19-2bd7-3295-444b-e00b04e43954",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1966-12-09T01:55:58-05:00",
        end: "1967-12-09T01:55:58-05:00",
      },
      created: "1966-12-09T01:55:58-05:00",
      insurer: { display: "UnitedHealthcare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:71b75f19-2bd7-3295-444b-e00b04e43954" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:9d38fc8f-eadb-2d63-abb0-d04e8e346ab1",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "UnitedHealthcare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "1966-12-09T01:40:58-05:00",
            end: "1966-12-09T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:a13656cd-5139-6065-fb02-e396ade6da0f" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "1966-12-09T01:40:58-05:00",
            end: "1966-12-09T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 786.3299999999999, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:3f5449d0-edee-960c-70e7-584b7f55e64d",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "3f5449d0-edee-960c-70e7-584b7f55e64d",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Aetna" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Aetna" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "176f5583-f5c6-cb0c-54c7-2076eb461f7e",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1969-12-12T01:55:58-05:00",
        end: "1970-12-12T01:55:58-05:00",
      },
      created: "1969-12-12T01:55:58-05:00",
      insurer: { display: "Aetna" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:176f5583-f5c6-cb0c-54c7-2076eb461f7e" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:309f5a46-686f-dd52-c6d2-e65fa4c5f03e",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        { focal: true, coverage: { reference: "#coverage", display: "Aetna" } },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "1969-12-12T01:40:58-05:00",
            end: "1969-12-12T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:c3c7e2bb-ffc3-a8a8-c1aa-5d4849c89735" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "1969-12-12T01:40:58-05:00",
            end: "1969-12-12T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 1686.05, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:f66db33a-9925-b850-4c2d-600e50a044f4",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "f66db33a-9925-b850-4c2d-600e50a044f4",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Anthem" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Anthem" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "7b3f03a1-a5f6-2ecf-30cd-9059aec9c1d3",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1972-12-15T01:55:58-05:00",
        end: "1973-12-15T01:55:58-05:00",
      },
      created: "1972-12-15T01:55:58-05:00",
      insurer: { display: "Anthem" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:7b3f03a1-a5f6-2ecf-30cd-9059aec9c1d3" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:faae01bb-4cf5-047c-baa6-95e35fd51572",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Anthem" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "1972-12-15T01:40:58-05:00",
            end: "1972-12-15T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:78d2eb6e-cb2c-b0d9-eef1-81ced734b85d" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "1972-12-15T01:40:58-05:00",
            end: "1972-12-15T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 1274.44, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:ea49f7f2-3228-7c14-0e86-41cf0bcf3d3d",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "ea49f7f2-3228-7c14-0e86-41cf0bcf3d3d",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Anthem" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Anthem" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "84a3716f-292d-75c9-794b-572bb634219c",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1975-12-19T01:55:58-05:00",
        end: "1976-12-19T01:55:58-05:00",
      },
      created: "1975-12-19T01:55:58-05:00",
      insurer: { display: "Anthem" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:84a3716f-292d-75c9-794b-572bb634219c" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:6a224f62-1840-b50d-c907-46b671e8eb04",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Anthem" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "1975-12-19T01:40:58-05:00",
            end: "1975-12-19T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:a195ade9-6085-554c-a315-88ec3974dd78" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "1975-12-19T01:40:58-05:00",
            end: "1975-12-19T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 1363.53, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:a07dbcd4-c917-d17d-d96e-51b6ed4ac43e",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "a07dbcd4-c917-d17d-d96e-51b6ed4ac43e",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Cigna Health" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Cigna Health" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "ba2db59b-d2e4-b28b-ea79-ac38b3c27567",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1978-10-06T02:55:58-04:00",
        end: "1979-10-06T02:55:58-04:00",
      },
      created: "1978-10-06T02:55:58-04:00",
      insurer: { display: "Cigna Health" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:ba2db59b-d2e4-b28b-ea79-ac38b3c27567" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:f4b940a2-e88b-c10f-fa72-eccba5081e31",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Cigna Health" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "1978-10-06T02:40:58-04:00",
            end: "1978-10-06T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:f3d0a0e4-3218-bbf7-717e-5d326d1b42bf" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "1978-10-06T02:40:58-04:00",
            end: "1978-10-06T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 786.3299999999999, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:c5bbbc38-7c1a-0314-a20f-38845cb4ca0f",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "c5bbbc38-7c1a-0314-a20f-38845cb4ca0f",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Cigna Health" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Cigna Health" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "77094d0d-8414-33c7-5f63-ba2043240688",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1982-10-15T02:55:58-04:00",
        end: "1983-10-15T02:55:58-04:00",
      },
      created: "1982-10-15T02:55:58-04:00",
      insurer: { display: "Cigna Health" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:77094d0d-8414-33c7-5f63-ba2043240688" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:6658e357-3343-33f6-0463-c3a96762ce3a",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Cigna Health" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "1982-10-15T02:40:58-04:00",
            end: "1982-10-15T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:07ffec4d-5141-35f6-44fb-9f88c1223e2a" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162864005",
                display: "Body mass index 30+ - obesity (finding)",
              },
            ],
            text: "Body mass index 30+ - obesity (finding)",
          },
          servicedPeriod: {
            start: "1982-10-15T02:40:58-04:00",
            end: "1982-10-15T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 786.3299999999999, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:31906d46-af18-7823-6dfa-16d5149736bb",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "31906d46-af18-7823-6dfa-16d5149736bb",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "UnitedHealthcare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "UnitedHealthcare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "1f79fa2d-4161-fbff-c10c-e9d6e9e0379e",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1985-02-23T01:55:58-05:00",
        end: "1986-02-23T01:55:58-05:00",
      },
      created: "1985-02-23T01:55:58-05:00",
      insurer: { display: "UnitedHealthcare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:1f79fa2d-4161-fbff-c10c-e9d6e9e0379e" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:6adf154e-bc1c-dc17-b297-d9e8801df1e3",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "UnitedHealthcare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "185347001",
                display: "Encounter for problem",
              },
            ],
            text: "Encounter for problem",
          },
          servicedPeriod: {
            start: "1985-02-23T01:40:58-05:00",
            end: "1985-02-23T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:d58530c3-bf6f-3109-beb2-7aace8344cf9" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "239872002",
                display: "Osteoarthritis of hip",
              },
            ],
            text: "Osteoarthritis of hip",
          },
          servicedPeriod: {
            start: "1985-02-23T01:40:58-05:00",
            end: "1985-02-23T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:7343785b-f43b-4959-dba6-ca54450fe922",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "7343785b-f43b-4959-dba6-ca54450fe922",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Humana" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Humana" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "ba54910d-8630-3f1c-90cd-19c15f531b9c",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1986-10-24T02:55:58-04:00",
        end: "1987-10-24T02:55:58-04:00",
      },
      created: "1986-10-24T02:55:58-04:00",
      insurer: { display: "Humana" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:ba54910d-8630-3f1c-90cd-19c15f531b9c" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:e790cc0a-6623-71e6-a20d-29aa14682a95",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Humana" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "1986-10-24T02:40:58-04:00",
            end: "1986-10-24T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:cc78a557-b4d0-642f-fa8e-70a154f184e8" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "1986-10-24T02:40:58-04:00",
            end: "1986-10-24T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 786.3299999999999, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:3033a865-44d5-6553-aa0b-04ff53de55c7",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "3033a865-44d5-6553-aa0b-04ff53de55c7",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Humana" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Humana" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "021bd82a-b60c-c2a4-a057-be1e1898f647",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1988-09-30T02:55:58-04:00",
        end: "1989-09-30T02:55:58-04:00",
      },
      created: "1988-09-30T02:55:58-04:00",
      insurer: { display: "Humana" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:021bd82a-b60c-c2a4-a057-be1e1898f647" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:0a20e7e3-8272-8da9-c9aa-03e367650e10",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Humana" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "185349003",
                display: "Encounter for 'check-up'",
              },
            ],
            text: "Encounter for 'check-up'",
          },
          servicedPeriod: {
            start: "1988-09-30T02:40:58-04:00",
            end: "1988-09-30T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:a6f0d27d-801a-0af6-5be2-8e9ef2930c1e" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "1988-09-30T02:40:58-04:00",
            end: "1988-09-30T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 14791.14, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:6bc1f6fb-fa78-b844-8541-341cfb1a4aa9",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "6bc1f6fb-fa78-b844-8541-341cfb1a4aa9",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Blue Cross Blue Shield" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Blue Cross Blue Shield" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "7b13a72f-333e-2c72-4441-0d9598ea6059",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1990-10-12T02:55:58-04:00",
        end: "1991-10-12T02:55:58-04:00",
      },
      created: "1990-10-12T02:55:58-04:00",
      insurer: { display: "Blue Cross Blue Shield" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:7b13a72f-333e-2c72-4441-0d9598ea6059" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:cca52410-7ae1-65a7-0739-3bc01168dce3",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: {
            reference: "#coverage",
            display: "Blue Cross Blue Shield",
          },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "1990-10-12T02:40:58-04:00",
            end: "1990-10-12T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:b82c0a84-cd96-d86d-5812-c73e3794af9c" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "1990-10-12T02:40:58-04:00",
            end: "1990-10-12T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 1210.21, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:f62ed00a-2feb-042c-0278-9fc6a89ca5c9",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "f62ed00a-2feb-042c-0278-9fc6a89ca5c9",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Aetna" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Aetna" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "614155af-d272-f940-0ad2-0005984eb54d",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1991-10-18T02:55:58-04:00",
        end: "1992-10-18T02:55:58-04:00",
      },
      created: "1991-10-18T02:55:58-04:00",
      insurer: { display: "Aetna" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:614155af-d272-f940-0ad2-0005984eb54d" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:1e273ea7-4ab4-f6de-253a-ad63da2540bd",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
        {
          sequence: 2,
          diagnosisReference: {
            reference: "urn:uuid:68fee72a-3caa-7b8c-7621-f70f02e75af5",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        { focal: true, coverage: { reference: "#coverage", display: "Aetna" } },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "1991-10-18T02:40:58-04:00",
            end: "1991-10-18T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:baf9d9d4-62ba-4e7b-0e8f-ca4409adc107" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "1991-10-18T02:40:58-04:00",
            end: "1991-10-18T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
        {
          sequence: 3,
          diagnosisSequence: [2],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "266948004",
                display: "Has a criminal record (finding)",
              },
            ],
            text: "Has a criminal record (finding)",
          },
          servicedPeriod: {
            start: "1991-10-18T02:40:58-04:00",
            end: "1991-10-18T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 786.3299999999999, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:c96f0778-227b-572e-92f7-3bb41416a491",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "c96f0778-227b-572e-92f7-3bb41416a491",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Humana" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Humana" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "126fbd83-a546-43c1-c3f6-a7a9b2ef983b",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1993-10-29T02:55:58-04:00",
        end: "1994-10-29T02:55:58-04:00",
      },
      created: "1993-10-29T02:55:58-04:00",
      insurer: { display: "Humana" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:126fbd83-a546-43c1-c3f6-a7a9b2ef983b" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:f2df878a-d26f-5ea6-6ab3-e7cc58f92016",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Humana" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "1993-10-29T02:40:58-04:00",
            end: "1993-10-29T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:cf267831-5a5f-01b0-79f9-3e84a5c9ef4c" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "1993-10-29T02:40:58-04:00",
            end: "1993-10-29T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 1395.31, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:d1defca1-4f92-2d56-c033-e14b4cce42d1",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "d1defca1-4f92-2d56-c033-e14b4cce42d1",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "UnitedHealthcare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "UnitedHealthcare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "bf108e6e-0f30-c125-0ba5-2c08f89d9080",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1994-11-04T01:55:58-05:00",
        end: "1995-11-04T01:55:58-05:00",
      },
      created: "1994-11-04T01:55:58-05:00",
      insurer: { display: "UnitedHealthcare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:bf108e6e-0f30-c125-0ba5-2c08f89d9080" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:9eb5cf11-05c4-4300-0296-b5a7dec23ebe",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "UnitedHealthcare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "1994-11-04T01:40:58-05:00",
            end: "1994-11-04T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:dd53132e-bce0-5363-1a6d-29ec0933cfc6" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "55822004",
                display: "Hyperlipidemia",
              },
            ],
            text: "Hyperlipidemia",
          },
          servicedPeriod: {
            start: "1994-11-04T01:40:58-05:00",
            end: "1994-11-04T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 786.3299999999999, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:04c94166-8733-e6ba-ff32-93b40b97c13b",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "04c94166-8733-e6ba-ff32-93b40b97c13b",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "UnitedHealthcare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "UnitedHealthcare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "1940b0c1-eee8-9d11-80ae-4f85b1a6eee5",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1994-11-25T01:55:58-05:00",
        end: "1995-11-25T01:55:58-05:00",
      },
      created: "1994-11-25T01:55:58-05:00",
      insurer: { display: "UnitedHealthcare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:1940b0c1-eee8-9d11-80ae-4f85b1a6eee5" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "UnitedHealthcare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "1994-11-25T01:40:58-05:00",
            end: "1994-11-25T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:0d452394-2b0c-1f9e-da52-1af68a0bb062" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:4164e39c-b9c7-9be2-34e2-ea85d82c3f44",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "4164e39c-b9c7-9be2-34e2-ea85d82c3f44",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Humana" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Humana" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "fa26bf8b-e079-7474-71e2-19b9bdec3aec",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1995-11-10T01:55:58-05:00",
        end: "1996-11-10T01:55:58-05:00",
      },
      created: "1995-11-10T01:55:58-05:00",
      insurer: { display: "Humana" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:fa26bf8b-e079-7474-71e2-19b9bdec3aec" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:9b095b26-0a77-a87c-3f25-4e64aa264ad3",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Humana" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "1995-11-10T01:40:58-05:00",
            end: "1995-11-10T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:1b75fab2-0e5e-8169-a796-be72bd4d5bcd" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "1995-11-10T01:40:58-05:00",
            end: "1995-11-10T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 1587.1399999999999, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:25358805-0439-5541-7725-d1d6a3a58307",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "25358805-0439-5541-7725-d1d6a3a58307",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Humana" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Humana" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "d66cfae2-1d6c-cfb5-a697-b57f75d0d064",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1995-11-25T01:55:58-05:00",
        end: "1996-11-25T01:55:58-05:00",
      },
      created: "1995-11-25T01:55:58-05:00",
      insurer: { display: "Humana" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:d66cfae2-1d6c-cfb5-a697-b57f75d0d064" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Humana" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "1995-11-25T01:40:58-05:00",
            end: "1995-11-25T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:965abeb3-4174-d8ba-9515-a7b3e83d9172" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:b71f45f7-3067-6bf9-22ae-64252dbdfd66",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "b71f45f7-3067-6bf9-22ae-64252dbdfd66",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Cigna Health" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Cigna Health" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "048f3d75-360d-183b-31c3-292828b43291",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1996-11-15T01:55:58-05:00",
        end: "1997-11-15T01:55:58-05:00",
      },
      created: "1996-11-15T01:55:58-05:00",
      insurer: { display: "Cigna Health" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:048f3d75-360d-183b-31c3-292828b43291" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:c0f4c61a-7f86-cada-e986-f5bcbb82ac40",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Cigna Health" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "1996-11-15T01:40:58-05:00",
            end: "1996-11-15T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:718fa39f-ba82-2900-67fa-3dba15c61ffa" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "1996-11-15T01:40:58-05:00",
            end: "1996-11-15T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 1384.54, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:4cc21ee0-d348-7aad-6e83-51e8389bd3e6",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "4cc21ee0-d348-7aad-6e83-51e8389bd3e6",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Cigna Health" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Cigna Health" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "951f8487-d90d-0282-f513-d3b80d7668ad",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1996-11-24T01:55:58-05:00",
        end: "1997-11-24T01:55:58-05:00",
      },
      created: "1996-11-24T01:55:58-05:00",
      insurer: { display: "Cigna Health" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:951f8487-d90d-0282-f513-d3b80d7668ad" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Cigna Health" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "1996-11-24T01:40:58-05:00",
            end: "1996-11-24T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:2333b1cd-ad09-3073-0696-ee9c140737b6" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:6e24035b-0162-52e1-7118-4572a631513f",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "6e24035b-0162-52e1-7118-4572a631513f",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "UnitedHealthcare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "UnitedHealthcare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "96f68490-bac2-6c66-4be4-ebce9dc6cb09",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1997-11-24T01:55:58-05:00",
        end: "1998-11-24T01:55:58-05:00",
      },
      created: "1997-11-24T01:55:58-05:00",
      insurer: { display: "UnitedHealthcare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:96f68490-bac2-6c66-4be4-ebce9dc6cb09" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:09103d8a-7e17-a28d-f708-8f15e24a5135",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "UnitedHealthcare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "1997-11-24T01:40:58-05:00",
            end: "1997-11-24T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:495d60aa-d26c-964a-ea81-a109ea280cad" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "1997-11-24T01:40:58-05:00",
            end: "1997-11-24T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:d1db880d-1cd7-6653-fe52-0e1af402d5a1",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "d1db880d-1cd7-6653-fe52-0e1af402d5a1",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "UnitedHealthcare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "UnitedHealthcare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "465d1609-b09a-f0de-042b-473121f5cde5",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1998-11-24T01:55:58-05:00",
        end: "1999-11-24T01:55:58-05:00",
      },
      created: "1998-11-24T01:55:58-05:00",
      insurer: { display: "UnitedHealthcare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:465d1609-b09a-f0de-042b-473121f5cde5" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:a610d23c-e460-4b0a-08c9-8b5292239d2a",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
        {
          sequence: 2,
          diagnosisReference: {
            reference: "urn:uuid:a5a0a00f-9f4f-91b5-7373-4945199efbc3",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "UnitedHealthcare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "1998-11-24T01:40:58-05:00",
            end: "1998-11-24T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:9bec8f7b-081f-26e5-22ad-290ec7e5fa28" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "1998-11-24T01:40:58-05:00",
            end: "1998-11-24T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
        },
        {
          sequence: 3,
          diagnosisSequence: [2],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "423315002",
                display: "Limited social contact (finding)",
              },
            ],
            text: "Limited social contact (finding)",
          },
          servicedPeriod: {
            start: "1998-11-24T01:40:58-05:00",
            end: "1998-11-24T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:2e923618-5f03-48ad-f793-6e882d65b11e",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "2e923618-5f03-48ad-f793-6e882d65b11e",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Aetna" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Aetna" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "e499c5b5-7e2f-c5a7-4153-84ed76090f8a",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1999-11-24T01:55:58-05:00",
        end: "2000-11-24T01:55:58-05:00",
      },
      created: "1999-11-24T01:55:58-05:00",
      insurer: { display: "Aetna" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:e499c5b5-7e2f-c5a7-4153-84ed76090f8a" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        { focal: true, coverage: { reference: "#coverage", display: "Aetna" } },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "1999-11-24T01:40:58-05:00",
            end: "1999-11-24T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:1478d811-530a-72f3-d291-2bbdea8a5fde" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:2bda28b9-1e61-9a14-eedc-8b4c64ede245",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "2bda28b9-1e61-9a14-eedc-8b4c64ede245",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Aetna" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Aetna" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "4814150c-e52b-9f05-f468-fc7e1b53146e",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "1999-12-03T01:55:58-05:00",
        end: "2000-12-03T01:55:58-05:00",
      },
      created: "1999-12-03T01:55:58-05:00",
      insurer: { display: "Aetna" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:4814150c-e52b-9f05-f468-fc7e1b53146e" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:d16aeb2b-cefe-8750-b0ab-0cbb8615a197",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        { focal: true, coverage: { reference: "#coverage", display: "Aetna" } },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "1999-12-03T01:40:58-05:00",
            end: "1999-12-03T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:784cf40a-63a4-811c-7a48-76166a7532df" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "1999-12-03T01:40:58-05:00",
            end: "1999-12-03T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 1238.37, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:ac7f6e05-0473-f514-a0b8-67b33712862b",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "ac7f6e05-0473-f514-a0b8-67b33712862b",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Anthem" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Anthem" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "e261bc5b-0ca2-9c35-2bfa-9cf968143b8f",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2000-11-23T01:55:58-05:00",
        end: "2001-11-23T01:55:58-05:00",
      },
      created: "2000-11-23T01:55:58-05:00",
      insurer: { display: "Anthem" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:e261bc5b-0ca2-9c35-2bfa-9cf968143b8f" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Anthem" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2000-11-23T01:40:58-05:00",
            end: "2000-11-23T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:07b6f41f-e852-a015-9767-7bc44503fb3e" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:282e2761-abcb-7073-fc91-43f95c0a7d55",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "282e2761-abcb-7073-fc91-43f95c0a7d55",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "UnitedHealthcare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "UnitedHealthcare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "bf8ca560-a4cb-8840-2825-92e4b934b58a",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2001-11-23T01:55:58-05:00",
        end: "2002-11-23T01:55:58-05:00",
      },
      created: "2001-11-23T01:55:58-05:00",
      insurer: { display: "UnitedHealthcare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:bf8ca560-a4cb-8840-2825-92e4b934b58a" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "UnitedHealthcare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2001-11-23T01:40:58-05:00",
            end: "2001-11-23T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:2f8bd24b-1c19-084c-3350-c62c7b9c9ace" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:25dd99bc-6c05-ad6a-b9cd-3b4211ef2fb8",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "25dd99bc-6c05-ad6a-b9cd-3b4211ef2fb8",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "UnitedHealthcare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "UnitedHealthcare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "a607d910-c842-0ee5-2862-66b46bb5d707",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2001-12-14T01:55:58-05:00",
        end: "2002-12-14T01:55:58-05:00",
      },
      created: "2001-12-14T01:55:58-05:00",
      insurer: { display: "UnitedHealthcare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:a607d910-c842-0ee5-2862-66b46bb5d707" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:06183308-4c45-910d-fd4f-d8241b728092",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "UnitedHealthcare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "2001-12-14T01:40:58-05:00",
            end: "2001-12-14T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:67eace0b-9f1e-5b52-0c1f-4c1b91626ca0" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "2001-12-14T01:40:58-05:00",
            end: "2001-12-14T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 786.3299999999999, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:c4cac348-814a-2467-2beb-e57c04fc5129",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "c4cac348-814a-2467-2beb-e57c04fc5129",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Blue Cross Blue Shield" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Blue Cross Blue Shield" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "0b5d4716-88cb-66b7-6949-540e68d99d6b",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2002-11-23T01:55:58-05:00",
        end: "2003-11-23T01:55:58-05:00",
      },
      created: "2002-11-23T01:55:58-05:00",
      insurer: { display: "Blue Cross Blue Shield" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:0b5d4716-88cb-66b7-6949-540e68d99d6b" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: {
            reference: "#coverage",
            display: "Blue Cross Blue Shield",
          },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2002-11-23T01:40:58-05:00",
            end: "2002-11-23T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:0065e2e0-f9e1-13d2-7a75-8bad676cb53e" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:93b05951-f0f3-1816-b495-9281d172dac1",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "93b05951-f0f3-1816-b495-9281d172dac1",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "0024aac5-3da6-2c31-4644-ca258af9be00",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2003-11-23T01:55:58-05:00",
        end: "2004-11-23T01:55:58-05:00",
      },
      created: "2003-11-23T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:0024aac5-3da6-2c31-4644-ca258af9be00" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2003-11-23T01:40:58-05:00",
            end: "2003-11-23T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:1b000b85-ccb2-85e5-4228-caa08544105a" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:ad3e59d8-5630-2ccb-c379-d4af6df4b409",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "ad3e59d8-5630-2ccb-c379-d4af6df4b409",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "f9645908-a4b1-cc73-5b0f-eb997ad3c227",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2003-12-26T01:55:58-05:00",
        end: "2004-12-26T01:55:58-05:00",
      },
      created: "2003-12-26T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:f9645908-a4b1-cc73-5b0f-eb997ad3c227" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:92aba35f-d6ea-87fb-146f-949cede3156a",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "2003-12-26T01:40:58-05:00",
            end: "2003-12-26T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:6c46bd34-4e70-4fed-1b47-d0bc19abebf8" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "2003-12-26T01:40:58-05:00",
            end: "2003-12-26T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 786.3299999999999, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:60d3d9db-ef73-c4bb-b2a8-33def35af551",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "60d3d9db-ef73-c4bb-b2a8-33def35af551",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "cb895a30-6916-a401-1c83-1449d4f560df",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2004-11-22T01:55:58-05:00",
        end: "2005-11-22T01:55:58-05:00",
      },
      created: "2004-11-22T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:cb895a30-6916-a401-1c83-1449d4f560df" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2004-11-22T01:40:58-05:00",
            end: "2004-11-22T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:bb71b8f5-15d4-337a-ab7f-310698989b95" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:4db89143-5072-9fc8-19f5-cf7691eae882",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "4db89143-5072-9fc8-19f5-cf7691eae882",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "b062c9e4-7c50-411a-e687-7e0b4bbbd1f3",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2004-12-31T01:55:58-05:00",
        end: "2005-12-31T01:55:58-05:00",
      },
      created: "2004-12-31T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:b062c9e4-7c50-411a-e687-7e0b4bbbd1f3" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:6be4dddc-ce63-b253-91ca-21d5f8532914",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "2004-12-31T01:40:58-05:00",
            end: "2004-12-31T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:55eb54d4-94a2-35f9-5396-a3184da89585" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "2004-12-31T01:40:58-05:00",
            end: "2004-12-31T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 1366.74, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:e2479cde-301f-ee33-9d20-c24c350015fd",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "e2479cde-301f-ee33-9d20-c24c350015fd",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "27189db6-260a-f7dc-c533-ac57fcebca44",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2005-11-22T01:55:58-05:00",
        end: "2006-11-22T01:55:58-05:00",
      },
      created: "2005-11-22T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:27189db6-260a-f7dc-c533-ac57fcebca44" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2005-11-22T01:40:58-05:00",
            end: "2005-11-22T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:09103c57-d806-a5b3-bce1-e27a4311cd46" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:ee6a2efc-50bd-90bc-064c-3c856351c597",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "ee6a2efc-50bd-90bc-064c-3c856351c597",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "3b8890d5-d15a-6df0-60c9-6ec5d31ac390",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2006-11-22T01:55:58-05:00",
        end: "2007-11-22T01:55:58-05:00",
      },
      created: "2006-11-22T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:3b8890d5-d15a-6df0-60c9-6ec5d31ac390" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2006-11-22T01:40:58-05:00",
            end: "2006-11-22T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:54ff763b-773d-17d9-5010-291d2e62dc59" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:5f15b77a-1012-d391-5386-bce2d8f960e4",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "5f15b77a-1012-d391-5386-bce2d8f960e4",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "d0e06e22-13f4-0bc2-6942-feb722ce02e5",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2007-01-12T01:55:58-05:00",
        end: "2008-01-12T01:55:58-05:00",
      },
      created: "2007-01-12T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:d0e06e22-13f4-0bc2-6942-feb722ce02e5" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:7b8bf310-0109-5bce-46b2-6c73a3845e8f",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "2007-01-12T01:40:58-05:00",
            end: "2007-01-12T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:e8bc1e87-0c82-b107-3fa9-8ac889079795" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "2007-01-12T01:40:58-05:00",
            end: "2007-01-12T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 786.3299999999999, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:676c25dd-d19f-45df-7dd2-b0124b384499",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "676c25dd-d19f-45df-7dd2-b0124b384499",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "8e8ccb18-8ae9-cb8d-ce4c-7758473a2812",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2007-11-22T01:55:58-05:00",
        end: "2008-11-22T01:55:58-05:00",
      },
      created: "2007-11-22T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:8e8ccb18-8ae9-cb8d-ce4c-7758473a2812" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2007-11-22T01:40:58-05:00",
            end: "2007-11-22T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:fcbad825-7d87-65a6-6edb-457d75cb4909" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:c2c4fb2d-7f5a-7d56-2713-36564e387931",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "c2c4fb2d-7f5a-7d56-2713-36564e387931",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "434c0d79-e65f-f4a0-21bb-edd9c48fa361",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2008-11-21T01:55:58-05:00",
        end: "2009-11-21T01:55:58-05:00",
      },
      created: "2008-11-21T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:434c0d79-e65f-f4a0-21bb-edd9c48fa361" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2008-11-21T01:40:58-05:00",
            end: "2008-11-21T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:9afd5dd5-5d49-fbfd-8de1-467729f031df" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:48b4af4d-2059-0a5a-f67e-31b1f8de8f3b",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "48b4af4d-2059-0a5a-f67e-31b1f8de8f3b",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "64ca2932-1065-823a-13f7-8dbb047b4482",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2009-01-23T01:55:58-05:00",
        end: "2010-01-23T01:55:58-05:00",
      },
      created: "2009-01-23T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:64ca2932-1065-823a-13f7-8dbb047b4482" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:32a57231-cb64-75a0-c102-f68113c588ae",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "2009-01-23T01:40:58-05:00",
            end: "2009-01-23T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:a741082d-de56-2dcc-c2bc-9e2d734cec10" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "2009-01-23T01:40:58-05:00",
            end: "2009-01-23T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 1288.9699999999998, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:3159d72a-82b8-564d-5e18-9b3974fe4722",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "3159d72a-82b8-564d-5e18-9b3974fe4722",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "ce9cb072-6105-ec34-a0fa-d8420b602887",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2009-11-21T01:55:58-05:00",
        end: "2010-11-21T01:55:58-05:00",
      },
      created: "2009-11-21T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:ce9cb072-6105-ec34-a0fa-d8420b602887" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2009-11-21T01:40:58-05:00",
            end: "2009-11-21T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:32805baa-8f71-da8d-4b1a-6661022b0270" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:4005c22e-33db-09b8-c041-b57c612afb94",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "4005c22e-33db-09b8-c041-b57c612afb94",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "cb8d09cc-d605-ce6f-25f4-251ef25f4e7a",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2010-11-21T01:55:58-05:00",
        end: "2011-11-21T01:55:58-05:00",
      },
      created: "2010-11-21T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:cb8d09cc-d605-ce6f-25f4-251ef25f4e7a" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2010-11-21T01:40:58-05:00",
            end: "2010-11-21T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:e0df8625-5bef-8d32-c0cf-80ddea40b2bd" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:5441cdda-cc8d-292f-163e-626ca9e9e7dc",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "5441cdda-cc8d-292f-163e-626ca9e9e7dc",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "ba73b024-a9a2-02be-266d-1910083d9fcf",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2011-02-04T01:55:58-05:00",
        end: "2012-02-04T01:55:58-05:00",
      },
      created: "2011-02-04T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:ba73b024-a9a2-02be-266d-1910083d9fcf" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:f23d3622-0b93-5796-8d85-5043a3d6ac86",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "2011-02-04T01:40:58-05:00",
            end: "2011-02-04T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:e1c4709a-b1a2-d143-3564-eafbc2cfa0b9" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "2011-02-04T01:40:58-05:00",
            end: "2011-02-04T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 786.3299999999999, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:4d214253-a5ed-6039-c9cd-e23c5b260d1d",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "4d214253-a5ed-6039-c9cd-e23c5b260d1d",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "07665841-df85-b8bc-3a5a-2800a4affcd8",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2011-11-21T01:55:58-05:00",
        end: "2012-11-21T01:55:58-05:00",
      },
      created: "2011-11-21T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:07665841-df85-b8bc-3a5a-2800a4affcd8" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2011-11-21T01:40:58-05:00",
            end: "2011-11-21T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:7b15ad1a-24c8-0d45-c32f-9941233f3e20" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:7016ae47-1aad-7bc2-87ad-4b9b9faef584",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "7016ae47-1aad-7bc2-87ad-4b9b9faef584",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "947572a6-8f0b-8745-6722-4637879b3e12",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2012-02-10T01:55:58-05:00",
        end: "2013-02-10T01:55:58-05:00",
      },
      created: "2012-02-10T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:947572a6-8f0b-8745-6722-4637879b3e12" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:dd07f044-1b00-666d-976a-497dd86d28da",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
        {
          sequence: 2,
          diagnosisReference: {
            reference: "urn:uuid:8ee81c17-4e1c-b740-6c80-286c80f994ec",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "2012-02-10T01:40:58-05:00",
            end: "2012-02-10T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
          ],
        },
        {
          sequence: 2,
          informationSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "140",
                display: "Influenza, seasonal, injectable, preservative free",
              },
            ],
            text: "Influenza, seasonal, injectable, preservative free",
          },
          servicedPeriod: {
            start: "2012-02-10T01:40:58-05:00",
            end: "2012-02-10T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 140.52, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 28.104000000000003, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 112.41600000000001, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 3,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710824005",
                display:
                  "Assessment of health and social care needs (procedure)",
              },
            ],
            text: "Assessment of health and social care needs (procedure)",
          },
          servicedPeriod: {
            start: "2012-02-10T01:40:58-05:00",
            end: "2012-02-10T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 4,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "741062008",
                display: "Not in labor force (finding)",
              },
            ],
            text: "Not in labor force (finding)",
          },
          servicedPeriod: {
            start: "2012-02-10T01:40:58-05:00",
            end: "2012-02-10T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
        {
          sequence: 5,
          diagnosisSequence: [2],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "73595000",
                display: "Stress (finding)",
              },
            ],
            text: "Stress (finding)",
          },
          servicedPeriod: {
            start: "2012-02-10T01:40:58-05:00",
            end: "2012-02-10T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
        {
          sequence: 6,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "428211000124100",
                display: "Assessment of substance use (procedure)",
              },
            ],
            text: "Assessment of substance use (procedure)",
          },
          servicedPeriod: {
            start: "2012-02-10T01:40:58-05:00",
            end: "2012-02-10T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 7,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
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
          servicedPeriod: {
            start: "2012-02-10T01:40:58-05:00",
            end: "2012-02-10T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 786.3299999999999, currency: "USD" },
        },
      ],
      payment: { amount: { value: 1352.376, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:9a84ac94-f420-1217-3a59-c6712d3b832f",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "9a84ac94-f420-1217-3a59-c6712d3b832f",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "9ddf0934-c65e-bfcc-ac13-cfd329ae519d",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2012-11-20T01:55:58-05:00",
        end: "2013-11-20T01:55:58-05:00",
      },
      created: "2012-11-20T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:9ddf0934-c65e-bfcc-ac13-cfd329ae519d" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2012-11-20T01:40:58-05:00",
            end: "2012-11-20T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:d1d7cd12-3ef1-d64a-3a05-48a29c0d710b",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "d1d7cd12-3ef1-d64a-3a05-48a29c0d710b",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "18c106ae-1013-f85b-2526-c208bc18be9f",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2013-02-15T01:55:58-05:00",
        end: "2014-02-15T01:55:58-05:00",
      },
      created: "2013-02-15T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:18c106ae-1013-f85b-2526-c208bc18be9f" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:18a5a5fa-5bcf-fa3c-4ff7-784105a8428e",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "2013-02-15T01:40:58-05:00",
            end: "2013-02-15T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
          ],
        },
        {
          sequence: 2,
          informationSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "140",
                display: "Influenza, seasonal, injectable, preservative free",
              },
            ],
            text: "Influenza, seasonal, injectable, preservative free",
          },
          servicedPeriod: {
            start: "2013-02-15T01:40:58-05:00",
            end: "2013-02-15T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 140.52, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 28.104000000000003, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 112.41600000000001, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 3,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710824005",
                display:
                  "Assessment of health and social care needs (procedure)",
              },
            ],
            text: "Assessment of health and social care needs (procedure)",
          },
          servicedPeriod: {
            start: "2013-02-15T01:40:58-05:00",
            end: "2013-02-15T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 4,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "2013-02-15T01:40:58-05:00",
            end: "2013-02-15T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
        {
          sequence: 5,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "762993000",
                display: "Assessment using Morse Fall Scale (procedure)",
              },
            ],
            text: "Assessment using Morse Fall Scale (procedure)",
          },
          servicedPeriod: {
            start: "2013-02-15T01:40:58-05:00",
            end: "2013-02-15T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 6,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "171207006",
                display: "Depression screening (procedure)",
              },
            ],
            text: "Depression screening (procedure)",
          },
          servicedPeriod: {
            start: "2013-02-15T01:40:58-05:00",
            end: "2013-02-15T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 7,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
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
          servicedPeriod: {
            start: "2013-02-15T01:40:58-05:00",
            end: "2013-02-15T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 786.3299999999999, currency: "USD" },
        },
      ],
      payment: { amount: { value: 1765.696, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:4985e039-a2de-cd1a-ac6d-9737858f8959",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "4985e039-a2de-cd1a-ac6d-9737858f8959",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "bdadcd7b-5661-fe9a-854f-da57d6f003e0",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2013-11-20T01:55:58-05:00",
        end: "2014-11-20T01:55:58-05:00",
      },
      created: "2013-11-20T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:bdadcd7b-5661-fe9a-854f-da57d6f003e0" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2013-11-20T01:40:58-05:00",
            end: "2013-11-20T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:2a603673-9f3a-6955-2d39-039657db6bb8",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "2a603673-9f3a-6955-2d39-039657db6bb8",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "85e5dda0-c2ba-dff3-d738-5d3adbe92dee",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2014-02-02T01:55:58-05:00",
        end: "2015-02-02T01:55:58-05:00",
      },
      created: "2014-02-02T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:85e5dda0-c2ba-dff3-d738-5d3adbe92dee" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:a7d570a8-c3af-59af-ea8d-fba9f84e27a0",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
        {
          sequence: 2,
          diagnosisReference: {
            reference: "urn:uuid:074c2b59-28dc-a18e-70a1-a4a7b89badcf",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "185347001",
                display: "Encounter for problem (procedure)",
              },
            ],
            text: "Encounter for problem (procedure)",
          },
          servicedPeriod: {
            start: "2014-02-02T01:40:58-05:00",
            end: "2014-02-02T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:a1aa9e96-e503-95ca-5897-96581cf9dcf5" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "278860009",
                display: "Chronic low back pain (finding)",
              },
            ],
            text: "Chronic low back pain (finding)",
          },
          servicedPeriod: {
            start: "2014-02-02T01:40:58-05:00",
            end: "2014-02-02T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
        },
        {
          sequence: 3,
          diagnosisSequence: [2],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "203082005",
                display: "Fibromyalgia (disorder)",
              },
            ],
            text: "Fibromyalgia (disorder)",
          },
          servicedPeriod: {
            start: "2014-02-02T01:40:58-05:00",
            end: "2014-02-02T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:89edacbd-e1df-bada-a932-badafad8f5a9",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "89edacbd-e1df-bada-a932-badafad8f5a9",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "e760024c-e46b-534c-5d44-4fdf87ff4371",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2014-02-21T01:55:58-05:00",
        end: "2015-02-21T01:55:58-05:00",
      },
      created: "2014-02-21T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:e760024c-e46b-534c-5d44-4fdf87ff4371" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:971a931d-3440-715a-a9e3-bdaf39f821aa",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
        {
          sequence: 2,
          diagnosisReference: {
            reference: "urn:uuid:0a692b16-b02c-78e7-d0a0-f36a38c3d14d",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "2014-02-21T01:40:58-05:00",
            end: "2014-02-21T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
          ],
        },
        {
          sequence: 2,
          informationSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "140",
                display: "Influenza, seasonal, injectable, preservative free",
              },
            ],
            text: "Influenza, seasonal, injectable, preservative free",
          },
          servicedPeriod: {
            start: "2014-02-21T01:40:58-05:00",
            end: "2014-02-21T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 140.52, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 28.104000000000003, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 112.41600000000001, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 3,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710824005",
                display:
                  "Assessment of health and social care needs (procedure)",
              },
            ],
            text: "Assessment of health and social care needs (procedure)",
          },
          servicedPeriod: {
            start: "2014-02-21T01:40:58-05:00",
            end: "2014-02-21T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 4,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160904001",
                display: "Part-time employment (finding)",
              },
            ],
            text: "Part-time employment (finding)",
          },
          servicedPeriod: {
            start: "2014-02-21T01:40:58-05:00",
            end: "2014-02-21T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
        {
          sequence: 5,
          diagnosisSequence: [2],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "706893006",
                display: "Victim of intimate partner abuse (finding)",
              },
            ],
            text: "Victim of intimate partner abuse (finding)",
          },
          servicedPeriod: {
            start: "2014-02-21T01:40:58-05:00",
            end: "2014-02-21T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
        {
          sequence: 6,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "762993000",
                display: "Assessment using Morse Fall Scale (procedure)",
              },
            ],
            text: "Assessment using Morse Fall Scale (procedure)",
          },
          servicedPeriod: {
            start: "2014-02-21T01:40:58-05:00",
            end: "2014-02-21T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 7,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "171207006",
                display: "Depression screening (procedure)",
              },
            ],
            text: "Depression screening (procedure)",
          },
          servicedPeriod: {
            start: "2014-02-21T01:40:58-05:00",
            end: "2014-02-21T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 8,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
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
          servicedPeriod: {
            start: "2014-02-21T01:40:58-05:00",
            end: "2014-02-21T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 786.3299999999999, currency: "USD" },
        },
      ],
      payment: { amount: { value: 1765.696, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:ed6a6323-ca71-9c71-3158-2a5562aee1d0",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "ed6a6323-ca71-9c71-3158-2a5562aee1d0",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "7165bc8e-9dd0-5e5e-7c6d-fd70cc793598",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2014-03-27T05:55:58-04:00",
        end: "2015-03-27T05:55:58-04:00",
      },
      created: "2014-03-27T05:55:58-04:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:7165bc8e-9dd0-5e5e-7c6d-fd70cc793598" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter (procedure)",
              },
            ],
            text: "Follow-up encounter (procedure)",
          },
          servicedPeriod: {
            start: "2014-03-27T05:40:58-04:00",
            end: "2014-03-27T05:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:7ea69efc-73a8-74a1-0595-d98e36d47dc2" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:6c3fc321-97cf-b7bc-f513-7abe2e2abe8b",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "6c3fc321-97cf-b7bc-f513-7abe2e2abe8b",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "5fac84ba-2b88-5a9d-9650-fa06b7c6e972",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2014-11-20T01:55:58-05:00",
        end: "2015-11-20T01:55:58-05:00",
      },
      created: "2014-11-20T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:5fac84ba-2b88-5a9d-9650-fa06b7c6e972" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2014-11-20T01:40:58-05:00",
            end: "2014-11-20T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:7746b371-6988-4945-4afb-5fa66eb1c87e",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "7746b371-6988-4945-4afb-5fa66eb1c87e",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "f88dda6c-8953-02fc-9f28-8e44a7401112",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2015-01-07T05:53:33-05:00",
        end: "2016-01-07T05:53:33-05:00",
      },
      created: "2015-01-07T05:53:33-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:f88dda6c-8953-02fc-9f28-8e44a7401112" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "185349003",
                display: "Encounter for 'check-up'",
              },
            ],
            text: "Encounter for 'check-up'",
          },
          servicedPeriod: {
            start: "2015-01-07T05:10:52-05:00",
            end: "2015-01-07T05:53:33-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:dc2fc493-9d4f-4ada-91d2-9e81690a983d" },
          ],
        },
        {
          sequence: 2,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "73761001",
                display: "Colonoscopy",
              },
            ],
            text: "Colonoscopy",
          },
          servicedPeriod: {
            start: "2015-01-07T05:10:52-05:00",
            end: "2015-01-07T05:53:33-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          net: { value: 13233.82, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 2646.764, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 10587.056, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 13233.82, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 13233.82, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 13311.31, currency: "USD" },
        },
      ],
      payment: { amount: { value: 10587.056, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:7cc334ed-b298-738c-c6fc-1ec1f6d200e3",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "7cc334ed-b298-738c-c6fc-1ec1f6d200e3",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "6680b99f-aaa1-7c91-3427-ed2091371c12",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2015-02-27T01:55:58-05:00",
        end: "2016-02-27T01:55:58-05:00",
      },
      created: "2015-02-27T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:6680b99f-aaa1-7c91-3427-ed2091371c12" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:f0528934-1d9e-63de-0358-2c0e1c24c1c4",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
        {
          sequence: 2,
          diagnosisReference: {
            reference: "urn:uuid:21e2b927-a953-c153-fbab-31092d30b61e",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "2015-02-27T01:40:58-05:00",
            end: "2015-02-27T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "49436004",
                display: "Atrial Fibrillation",
              },
            ],
            text: "Atrial Fibrillation",
          },
          servicedPeriod: {
            start: "2015-02-27T01:40:58-05:00",
            end: "2015-02-27T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
        {
          sequence: 3,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "18286008",
                display: "Catheter ablation of tissue of heart",
              },
            ],
            text: "Catheter ablation of tissue of heart",
          },
          servicedPeriod: {
            start: "2015-02-27T01:40:58-05:00",
            end: "2015-02-27T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 8936.53, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 1787.3060000000003, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 7149.224000000001, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 8936.53, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 8936.53, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 4,
          informationSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "140",
                display: "Influenza, seasonal, injectable, preservative free",
              },
            ],
            text: "Influenza, seasonal, injectable, preservative free",
          },
          servicedPeriod: {
            start: "2015-02-27T01:40:58-05:00",
            end: "2015-02-27T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 140.52, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 28.104000000000003, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 112.41600000000001, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 5,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710824005",
                display:
                  "Assessment of health and social care needs (procedure)",
              },
            ],
            text: "Assessment of health and social care needs (procedure)",
          },
          servicedPeriod: {
            start: "2015-02-27T01:40:58-05:00",
            end: "2015-02-27T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 6,
          diagnosisSequence: [2],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160904001",
                display: "Part-time employment (finding)",
              },
            ],
            text: "Part-time employment (finding)",
          },
          servicedPeriod: {
            start: "2015-02-27T01:40:58-05:00",
            end: "2015-02-27T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
        {
          sequence: 7,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "171207006",
                display: "Depression screening (procedure)",
              },
            ],
            text: "Depression screening (procedure)",
          },
          servicedPeriod: {
            start: "2015-02-27T01:40:58-05:00",
            end: "2015-02-27T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 8,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
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
          servicedPeriod: {
            start: "2015-02-27T01:40:58-05:00",
            end: "2015-02-27T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 9,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "428211000124100",
                display: "Assessment of substance use (procedure)",
              },
            ],
            text: "Assessment of substance use (procedure)",
          },
          servicedPeriod: {
            start: "2015-02-27T01:40:58-05:00",
            end: "2015-02-27T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 10,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
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
          servicedPeriod: {
            start: "2015-02-27T01:40:58-05:00",
            end: "2015-02-27T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 9722.86, currency: "USD" },
        },
      ],
      payment: { amount: { value: 9328.24, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:05dbd0f7-9f24-3d1f-f0b4-e1fdfa184035",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "05dbd0f7-9f24-3d1f-f0b4-e1fdfa184035",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "fe360f77-bf0a-d5d1-a288-14e34f540d9b",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2015-11-20T01:55:58-05:00",
        end: "2016-11-20T01:55:58-05:00",
      },
      created: "2015-11-20T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:fe360f77-bf0a-d5d1-a288-14e34f540d9b" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2015-11-20T01:40:58-05:00",
            end: "2015-11-20T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:aa02eb49-3a1a-8e8d-058c-3e59f651cc28",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "aa02eb49-3a1a-8e8d-058c-3e59f651cc28",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "607eeddd-54b0-34b7-5e59-367d37291e4a",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2016-03-04T01:55:58-05:00",
        end: "2017-03-04T01:55:58-05:00",
      },
      created: "2016-03-04T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:607eeddd-54b0-34b7-5e59-367d37291e4a" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:de15e96a-2b1e-0506-c32d-59c7bc63d039",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
        {
          sequence: 2,
          diagnosisReference: {
            reference: "urn:uuid:c4e3ba64-4b4f-8f07-22ff-636115d64408",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "2016-03-04T01:40:58-05:00",
            end: "2016-03-04T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
          ],
        },
        {
          sequence: 2,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "180325003",
                display: "Electrical cardioversion",
              },
            ],
            text: "Electrical cardioversion",
          },
          servicedPeriod: {
            start: "2016-03-04T01:40:58-05:00",
            end: "2016-03-04T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 27025.84, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 5405.168000000001, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 21620.672000000002, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 27025.84, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 27025.84, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 3,
          informationSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "140",
                display: "Influenza, seasonal, injectable, preservative free",
              },
            ],
            text: "Influenza, seasonal, injectable, preservative free",
          },
          servicedPeriod: {
            start: "2016-03-04T01:40:58-05:00",
            end: "2016-03-04T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 140.52, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 28.104000000000003, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 112.41600000000001, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 4,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710824005",
                display:
                  "Assessment of health and social care needs (procedure)",
              },
            ],
            text: "Assessment of health and social care needs (procedure)",
          },
          servicedPeriod: {
            start: "2016-03-04T01:40:58-05:00",
            end: "2016-03-04T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 5,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "2016-03-04T01:40:58-05:00",
            end: "2016-03-04T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
        {
          sequence: 6,
          diagnosisSequence: [2],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "73595000",
                display: "Stress (finding)",
              },
            ],
            text: "Stress (finding)",
          },
          servicedPeriod: {
            start: "2016-03-04T01:40:58-05:00",
            end: "2016-03-04T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
        {
          sequence: 7,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "428211000124100",
                display: "Assessment of substance use (procedure)",
              },
            ],
            text: "Assessment of substance use (procedure)",
          },
          servicedPeriod: {
            start: "2016-03-04T01:40:58-05:00",
            end: "2016-03-04T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 8,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
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
          servicedPeriod: {
            start: "2016-03-04T01:40:58-05:00",
            end: "2016-03-04T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 27812.170000000002, currency: "USD" },
        },
      ],
      payment: { amount: { value: 22973.048000000003, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:2976693d-7935-18f0-9143-779baef8c335",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "2976693d-7935-18f0-9143-779baef8c335",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "357a6d75-7946-3fb0-4a8c-25e609af3c58",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2016-11-19T01:55:58-05:00",
        end: "2017-11-19T01:55:58-05:00",
      },
      created: "2016-11-19T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:357a6d75-7946-3fb0-4a8c-25e609af3c58" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2016-11-19T01:40:58-05:00",
            end: "2016-11-19T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:0854a310-97d0-9cdd-c591-07b4a0e12f5e",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "0854a310-97d0-9cdd-c591-07b4a0e12f5e",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "36bfc76a-b860-5f5a-eb12-df687d3aa739",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2017-03-10T01:55:58-05:00",
        end: "2018-03-10T01:55:58-05:00",
      },
      created: "2017-03-10T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:36bfc76a-b860-5f5a-eb12-df687d3aa739" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:bb03c85d-dfee-464c-4cf7-d1c69b9f5572",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
        {
          sequence: 2,
          diagnosisReference: {
            reference: "urn:uuid:4dd2f094-2ceb-71b8-6f3a-41b4a812d629",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "2017-03-10T01:40:58-05:00",
            end: "2017-03-10T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
          ],
        },
        {
          sequence: 2,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "180325003",
                display: "Electrical cardioversion",
              },
            ],
            text: "Electrical cardioversion",
          },
          servicedPeriod: {
            start: "2017-03-10T01:40:58-05:00",
            end: "2017-03-10T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 36780.34, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 7356.067999999999, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 29424.271999999997, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 36780.34, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 36780.34, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 3,
          informationSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "140",
                display: "Influenza, seasonal, injectable, preservative free",
              },
            ],
            text: "Influenza, seasonal, injectable, preservative free",
          },
          servicedPeriod: {
            start: "2017-03-10T01:40:58-05:00",
            end: "2017-03-10T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 140.52, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 28.104000000000003, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 112.41600000000001, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 4,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710824005",
                display:
                  "Assessment of health and social care needs (procedure)",
              },
            ],
            text: "Assessment of health and social care needs (procedure)",
          },
          servicedPeriod: {
            start: "2017-03-10T01:40:58-05:00",
            end: "2017-03-10T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 5,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "2017-03-10T01:40:58-05:00",
            end: "2017-03-10T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
        {
          sequence: 6,
          diagnosisSequence: [2],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "424393004",
                display: "Reports of violence in the environment (finding)",
              },
            ],
            text: "Reports of violence in the environment (finding)",
          },
          servicedPeriod: {
            start: "2017-03-10T01:40:58-05:00",
            end: "2017-03-10T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
        {
          sequence: 7,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710841007",
                display: "Assessment of anxiety (procedure)",
              },
            ],
            text: "Assessment of anxiety (procedure)",
          },
          servicedPeriod: {
            start: "2017-03-10T01:40:58-05:00",
            end: "2017-03-10T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 8,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "762993000",
                display: "Assessment using Morse Fall Scale (procedure)",
              },
            ],
            text: "Assessment using Morse Fall Scale (procedure)",
          },
          servicedPeriod: {
            start: "2017-03-10T01:40:58-05:00",
            end: "2017-03-10T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 9,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "866148006",
                display: "Screening for domestic abuse (procedure)",
              },
            ],
            text: "Screening for domestic abuse (procedure)",
          },
          servicedPeriod: {
            start: "2017-03-10T01:40:58-05:00",
            end: "2017-03-10T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 10,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "171207006",
                display: "Depression screening (procedure)",
              },
            ],
            text: "Depression screening (procedure)",
          },
          servicedPeriod: {
            start: "2017-03-10T01:40:58-05:00",
            end: "2017-03-10T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 11,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
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
          servicedPeriod: {
            start: "2017-03-10T01:40:58-05:00",
            end: "2017-03-10T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 37566.67, currency: "USD" },
        },
      ],
      payment: { amount: { value: 32016.607999999997, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:830958e9-fa86-b116-92ad-7d768edcd0c4",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "830958e9-fa86-b116-92ad-7d768edcd0c4",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "19a7bbe2-702d-f95d-1a69-22fa2ee99c83",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2017-06-07T13:55:58-04:00",
        end: "2018-06-07T13:55:58-04:00",
      },
      created: "2017-06-07T13:55:58-04:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:19a7bbe2-702d-f95d-1a69-22fa2ee99c83" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:1af2b5bb-807c-4789-8dce-bbe4fd205ae6",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "185345009",
                display: "Encounter for symptom",
              },
            ],
            text: "Encounter for symptom",
          },
          servicedPeriod: {
            start: "2017-06-07T13:40:58-04:00",
            end: "2017-06-07T13:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:9ccbf5a3-78c2-dd31-5e05-6ad80a34e923" },
          ],
        },
        {
          sequence: 2,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "195662009",
                display: "Acute viral pharyngitis (disorder)",
              },
            ],
            text: "Acute viral pharyngitis (disorder)",
          },
          servicedPeriod: {
            start: "2017-06-07T13:40:58-04:00",
            end: "2017-06-07T13:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:89b3b400-c7fe-06be-0afa-ed61d60ee429",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "89b3b400-c7fe-06be-0afa-ed61d60ee429",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "599b75f0-9ba1-e190-39d4-54c3687e449b",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2017-11-19T01:55:58-05:00",
        end: "2018-11-19T01:55:58-05:00",
      },
      created: "2017-11-19T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:599b75f0-9ba1-e190-39d4-54c3687e449b" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2017-11-19T01:40:58-05:00",
            end: "2017-11-19T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:9c9ca63f-d61a-f9f0-dca4-d8fbdd50fa82",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "9c9ca63f-d61a-f9f0-dca4-d8fbdd50fa82",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "649522ba-2b84-01d2-e329-3bc29836e3e0",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2018-03-16T02:55:58-04:00",
        end: "2019-03-16T02:55:58-04:00",
      },
      created: "2018-03-16T02:55:58-04:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:649522ba-2b84-01d2-e329-3bc29836e3e0" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:f0fd12ce-22db-3c13-72f7-e81db2a343e1",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "2018-03-16T02:40:58-04:00",
            end: "2018-03-16T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
          ],
        },
        {
          sequence: 2,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "180325003",
                display: "Electrical cardioversion",
              },
            ],
            text: "Electrical cardioversion",
          },
          servicedPeriod: {
            start: "2018-03-16T02:40:58-04:00",
            end: "2018-03-16T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 27358.34, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 5471.668000000001, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 21886.672000000002, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 27358.34, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 27358.34, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 3,
          informationSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "140",
                display: "Influenza, seasonal, injectable, preservative free",
              },
            ],
            text: "Influenza, seasonal, injectable, preservative free",
          },
          servicedPeriod: {
            start: "2018-03-16T02:40:58-04:00",
            end: "2018-03-16T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 140.52, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 28.104000000000003, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 112.41600000000001, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 4,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710824005",
                display:
                  "Assessment of health and social care needs (procedure)",
              },
            ],
            text: "Assessment of health and social care needs (procedure)",
          },
          servicedPeriod: {
            start: "2018-03-16T02:40:58-04:00",
            end: "2018-03-16T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 5,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "430193006",
                display: "Medication Reconciliation (procedure)",
              },
            ],
            text: "Medication Reconciliation (procedure)",
          },
          servicedPeriod: {
            start: "2018-03-16T02:40:58-04:00",
            end: "2018-03-16T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 453.77, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 90.754, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 363.016, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 453.77, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 453.77, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 6,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "2018-03-16T02:40:58-04:00",
            end: "2018-03-16T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
        {
          sequence: 7,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "762993000",
                display: "Assessment using Morse Fall Scale (procedure)",
              },
            ],
            text: "Assessment using Morse Fall Scale (procedure)",
          },
          servicedPeriod: {
            start: "2018-03-16T02:40:58-04:00",
            end: "2018-03-16T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 8,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "171207006",
                display: "Depression screening (procedure)",
              },
            ],
            text: "Depression screening (procedure)",
          },
          servicedPeriod: {
            start: "2018-03-16T02:40:58-04:00",
            end: "2018-03-16T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 9,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
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
          servicedPeriod: {
            start: "2018-03-16T02:40:58-04:00",
            end: "2018-03-16T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 10,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "428211000124100",
                display: "Assessment of substance use (procedure)",
              },
            ],
            text: "Assessment of substance use (procedure)",
          },
          servicedPeriod: {
            start: "2018-03-16T02:40:58-04:00",
            end: "2018-03-16T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 11,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
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
          servicedPeriod: {
            start: "2018-03-16T02:40:58-04:00",
            end: "2018-03-16T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 28598.440000000002, currency: "USD" },
        },
      ],
      payment: { amount: { value: 24842.024, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:202405ad-1575-3ac4-18e4-fe2fd6028bbe",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "202405ad-1575-3ac4-18e4-fe2fd6028bbe",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "35b043c6-5723-9120-0efb-28c460426826",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2018-11-19T01:55:58-05:00",
        end: "2019-11-19T01:55:58-05:00",
      },
      created: "2018-11-19T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:35b043c6-5723-9120-0efb-28c460426826" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2018-11-19T01:40:58-05:00",
            end: "2018-11-19T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:ccb7cf56-d351-66e2-545f-dfa3128c9568",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "ccb7cf56-d351-66e2-545f-dfa3128c9568",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "b98670b5-3408-b6eb-fa3c-d294bb737dee",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2019-03-22T02:55:58-04:00",
        end: "2020-03-22T02:55:58-04:00",
      },
      created: "2019-03-22T02:55:58-04:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:b98670b5-3408-b6eb-fa3c-d294bb737dee" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:f696ef9c-ced7-0d83-c09a-0dc3eb8bc4f0",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "2019-03-22T02:40:58-04:00",
            end: "2019-03-22T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
          ],
        },
        {
          sequence: 2,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "180325003",
                display: "Electrical cardioversion",
              },
            ],
            text: "Electrical cardioversion",
          },
          servicedPeriod: {
            start: "2019-03-22T02:40:58-04:00",
            end: "2019-03-22T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 46811.81, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 9362.362, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 37449.448, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 46811.81, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 46811.81, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 3,
          informationSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "140",
                display: "Influenza, seasonal, injectable, preservative free",
              },
            ],
            text: "Influenza, seasonal, injectable, preservative free",
          },
          servicedPeriod: {
            start: "2019-03-22T02:40:58-04:00",
            end: "2019-03-22T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 140.52, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 28.104000000000003, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 112.41600000000001, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 4,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710824005",
                display:
                  "Assessment of health and social care needs (procedure)",
              },
            ],
            text: "Assessment of health and social care needs (procedure)",
          },
          servicedPeriod: {
            start: "2019-03-22T02:40:58-04:00",
            end: "2019-03-22T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 5,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "430193006",
                display: "Medication Reconciliation (procedure)",
              },
            ],
            text: "Medication Reconciliation (procedure)",
          },
          servicedPeriod: {
            start: "2019-03-22T02:40:58-04:00",
            end: "2019-03-22T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 588.8, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 117.75999999999999, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 471.03999999999996, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 588.8, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 588.8, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 6,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "2019-03-22T02:40:58-04:00",
            end: "2019-03-22T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
        {
          sequence: 7,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710841007",
                display: "Assessment of anxiety (procedure)",
              },
            ],
            text: "Assessment of anxiety (procedure)",
          },
          servicedPeriod: {
            start: "2019-03-22T02:40:58-04:00",
            end: "2019-03-22T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 8,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "762993000",
                display: "Assessment using Morse Fall Scale (procedure)",
              },
            ],
            text: "Assessment using Morse Fall Scale (procedure)",
          },
          servicedPeriod: {
            start: "2019-03-22T02:40:58-04:00",
            end: "2019-03-22T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 9,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "866148006",
                display: "Screening for domestic abuse (procedure)",
              },
            ],
            text: "Screening for domestic abuse (procedure)",
          },
          servicedPeriod: {
            start: "2019-03-22T02:40:58-04:00",
            end: "2019-03-22T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 48186.94, currency: "USD" },
        },
      ],
      payment: { amount: { value: 39686.183999999994, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:7c2dacdb-3d2b-bcbb-232b-ba49c17c2b98",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "7c2dacdb-3d2b-bcbb-232b-ba49c17c2b98",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "58e5ad84-eecf-c516-8dbf-5d9dad46690c",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2019-11-19T01:55:58-05:00",
        end: "2020-11-19T01:55:58-05:00",
      },
      created: "2019-11-19T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:58e5ad84-eecf-c516-8dbf-5d9dad46690c" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2019-11-19T01:40:58-05:00",
            end: "2019-11-19T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:ad49e0f8-daa1-9bd5-4f61-e221ce0eb3d2",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "ad49e0f8-daa1-9bd5-4f61-e221ce0eb3d2",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "dee7decb-a0c1-5434-657a-47b37ed253fb",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2020-03-27T02:55:58-04:00",
        end: "2021-03-27T02:55:58-04:00",
      },
      created: "2020-03-27T02:55:58-04:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:dee7decb-a0c1-5434-657a-47b37ed253fb" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:9a9025cd-d028-d66d-40b5-082b5896a770",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "2020-03-27T02:40:58-04:00",
            end: "2020-03-27T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
          ],
        },
        {
          sequence: 2,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "18286008",
                display: "Catheter ablation of tissue of heart",
              },
            ],
            text: "Catheter ablation of tissue of heart",
          },
          servicedPeriod: {
            start: "2020-03-27T02:40:58-04:00",
            end: "2020-03-27T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 7998.16, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 1599.632, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 6398.528, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 7998.16, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 7998.16, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 3,
          informationSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "140",
                display: "Influenza, seasonal, injectable, preservative free",
              },
            ],
            text: "Influenza, seasonal, injectable, preservative free",
          },
          servicedPeriod: {
            start: "2020-03-27T02:40:58-04:00",
            end: "2020-03-27T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 140.52, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 28.104000000000003, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 112.41600000000001, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 4,
          informationSequence: [2],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "113",
                display: "Td (adult) preservative free",
              },
            ],
            text: "Td (adult) preservative free",
          },
          servicedPeriod: {
            start: "2020-03-27T02:40:58-04:00",
            end: "2020-03-27T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 140.52, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 28.104000000000003, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 112.41600000000001, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 5,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710824005",
                display:
                  "Assessment of health and social care needs (procedure)",
              },
            ],
            text: "Assessment of health and social care needs (procedure)",
          },
          servicedPeriod: {
            start: "2020-03-27T02:40:58-04:00",
            end: "2020-03-27T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 6,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "430193006",
                display: "Medication Reconciliation (procedure)",
              },
            ],
            text: "Medication Reconciliation (procedure)",
          },
          servicedPeriod: {
            start: "2020-03-27T02:40:58-04:00",
            end: "2020-03-27T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 829.64, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 165.928, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 663.712, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 829.64, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 829.64, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 7,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "2020-03-27T02:40:58-04:00",
            end: "2020-03-27T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
        {
          sequence: 8,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710841007",
                display: "Assessment of anxiety (procedure)",
              },
            ],
            text: "Assessment of anxiety (procedure)",
          },
          servicedPeriod: {
            start: "2020-03-27T02:40:58-04:00",
            end: "2020-03-27T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 9,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "762993000",
                display: "Assessment using Morse Fall Scale (procedure)",
              },
            ],
            text: "Assessment using Morse Fall Scale (procedure)",
          },
          servicedPeriod: {
            start: "2020-03-27T02:40:58-04:00",
            end: "2020-03-27T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 10,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "428211000124100",
                display: "Assessment of substance use (procedure)",
              },
            ],
            text: "Assessment of substance use (procedure)",
          },
          servicedPeriod: {
            start: "2020-03-27T02:40:58-04:00",
            end: "2020-03-27T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 11,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
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
          servicedPeriod: {
            start: "2020-03-27T02:40:58-04:00",
            end: "2020-03-27T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 9754.65, currency: "USD" },
        },
      ],
      payment: { amount: { value: 9353.671999999999, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:a9326a54-0e0c-a1cc-34a5-04d0ec2bf4d0",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "a9326a54-0e0c-a1cc-34a5-04d0ec2bf4d0",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "a2c90a6f-903a-d36a-f91d-f94e4affd708",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2020-11-18T01:55:58-05:00",
        end: "2021-11-18T01:55:58-05:00",
      },
      created: "2020-11-18T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:a2c90a6f-903a-d36a-f91d-f94e4affd708" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2020-11-18T01:40:58-05:00",
            end: "2020-11-18T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:45cfdfba-6cff-c8d2-eef3-03d585d34e3a",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "45cfdfba-6cff-c8d2-eef3-03d585d34e3a",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "efb2d46a-cf3a-30bf-8644-b29d9888fe6a",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2021-03-12T01:55:58-05:00",
        end: "2022-03-12T01:55:58-05:00",
      },
      created: "2021-03-12T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:efb2d46a-cf3a-30bf-8644-b29d9888fe6a" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "33879002",
                display:
                  "Administration of vaccine to produce active immunity (procedure)",
              },
            ],
            text: "Administration of vaccine to produce active immunity (procedure)",
          },
          servicedPeriod: {
            start: "2021-03-12T01:40:58-05:00",
            end: "2021-03-12T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:5ef6b653-7ec7-85ff-8931-2c8eec210e3d" },
          ],
        },
        {
          sequence: 2,
          informationSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
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
          servicedPeriod: {
            start: "2021-03-12T01:40:58-05:00",
            end: "2021-03-12T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          net: { value: 140.52, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 28.104000000000003, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 112.41600000000001, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 269.68, currency: "USD" },
        },
      ],
      payment: { amount: { value: 112.41600000000001, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:126dcd76-97e5-cfa2-c085-a240658f12ff",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "126dcd76-97e5-cfa2-c085-a240658f12ff",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "68dec48e-730b-af78-b781-923222adadf8",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2021-04-02T02:55:58-04:00",
        end: "2022-04-02T02:55:58-04:00",
      },
      created: "2021-04-02T02:55:58-04:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|368a65c9-2432-379d-926f-38708c0446fc",
        display: "PCP39516",
      },
      claim: { reference: "urn:uuid:68dec48e-730b-af78-b781-923222adadf8" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      diagnosis: [
        {
          sequence: 1,
          diagnosisReference: {
            reference: "urn:uuid:fa5e6ef3-3f56-832b-6f21-5f789288a481",
          },
          type: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                  code: "principal",
                },
              ],
            },
          ],
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "162673000",
                display: "General examination of patient (procedure)",
              },
            ],
            text: "General examination of patient (procedure)",
          },
          servicedPeriod: {
            start: "2021-04-02T02:40:58-04:00",
            end: "2021-04-02T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
          ],
        },
        {
          sequence: 2,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "18286008",
                display: "Catheter ablation of tissue of heart",
              },
            ],
            text: "Catheter ablation of tissue of heart",
          },
          servicedPeriod: {
            start: "2021-04-02T02:40:58-04:00",
            end: "2021-04-02T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 14967.34, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 2993.4680000000003, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 11973.872000000001, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 14967.34, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 14967.34, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 3,
          informationSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/cvx",
                code: "140",
                display: "Influenza, seasonal, injectable, preservative free",
              },
            ],
            text: "Influenza, seasonal, injectable, preservative free",
          },
          servicedPeriod: {
            start: "2021-04-02T02:40:58-04:00",
            end: "2021-04-02T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 140.52, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 28.104000000000003, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 112.41600000000001, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 4,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "710824005",
                display:
                  "Assessment of health and social care needs (procedure)",
              },
            ],
            text: "Assessment of health and social care needs (procedure)",
          },
          servicedPeriod: {
            start: "2021-04-02T02:40:58-04:00",
            end: "2021-04-02T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 5,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "430193006",
                display: "Medication Reconciliation (procedure)",
              },
            ],
            text: "Medication Reconciliation (procedure)",
          },
          servicedPeriod: {
            start: "2021-04-02T02:40:58-04:00",
            end: "2021-04-02T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 567.05, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 113.41, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 453.64, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 567.05, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 567.05, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 6,
          diagnosisSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160903007",
                display: "Full-time employment (finding)",
              },
            ],
            text: "Full-time employment (finding)",
          },
          servicedPeriod: {
            start: "2021-04-02T02:40:58-04:00",
            end: "2021-04-02T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
        },
        {
          sequence: 7,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "762993000",
                display: "Assessment using Morse Fall Scale (procedure)",
              },
            ],
            text: "Assessment using Morse Fall Scale (procedure)",
          },
          servicedPeriod: {
            start: "2021-04-02T02:40:58-04:00",
            end: "2021-04-02T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 8,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "428211000124100",
                display: "Assessment of substance use (procedure)",
              },
            ],
            text: "Assessment of substance use (procedure)",
          },
          servicedPeriod: {
            start: "2021-04-02T02:40:58-04:00",
            end: "2021-04-02T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
        {
          sequence: 9,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
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
          servicedPeriod: {
            start: "2021-04-02T02:40:58-04:00",
            end: "2021-04-02T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "19",
                display: "Off Campus-Outpatient Hospital",
              },
            ],
          },
          net: { value: 516.65, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 103.33, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 413.32, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 516.65, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 16320.72, currency: "USD" },
        },
      ],
      payment: { amount: { value: 14193.207999999999, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:7c4a5825-b19c-f864-77cd-e5be46786130",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "7c4a5825-b19c-f864-77cd-e5be46786130",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "b10f1e24-f6c9-2ea4-c17f-ecb0587206c7",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2021-04-09T02:55:58-04:00",
        end: "2022-04-09T02:55:58-04:00",
      },
      created: "2021-04-09T02:55:58-04:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:b10f1e24-f6c9-2ea4-c17f-ecb0587206c7" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "33879002",
                display:
                  "Administration of vaccine to produce active immunity (procedure)",
              },
            ],
            text: "Administration of vaccine to produce active immunity (procedure)",
          },
          servicedPeriod: {
            start: "2021-04-09T02:40:58-04:00",
            end: "2021-04-09T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:001e2916-2a73-95a5-7171-7e4d8ca549c8" },
          ],
        },
        {
          sequence: 2,
          informationSequence: [1],
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
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
          servicedPeriod: {
            start: "2021-04-09T02:40:58-04:00",
            end: "2021-04-09T02:55:58-04:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          net: { value: 140.52, currency: "USD" },
          adjudication: [
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                    display: "Line Beneficiary Coinsurance Amount",
                  },
                ],
              },
              amount: { value: 28.104000000000003, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                    display: "Line Provider Payment Amount",
                  },
                ],
              },
              amount: { value: 112.41600000000001, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                    display: "Line Submitted Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                    display: "Line Allowed Charge Amount",
                  },
                ],
              },
              amount: { value: 140.52, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                    display: "Line Beneficiary Part B Deductible Amount",
                  },
                ],
              },
              amount: { value: 0, currency: "USD" },
            },
            {
              category: {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                    code: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                    display: "Line Processing Indicator Code",
                  },
                ],
              },
            },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 269.68, currency: "USD" },
        },
      ],
      payment: { amount: { value: 112.41600000000001, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
  {
    fullUrl: "urn:uuid:657a0463-a128-0074-7109-a525e7713260",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "657a0463-a128-0074-7109-a525e7713260",
      contained: [
        {
          resourceType: "ServiceRequest",
          id: "referral",
          status: "completed",
          intent: "order",
          subject: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          requester: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          performer: [
            {
              reference:
                "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
            },
          ],
        },
        {
          resourceType: "Coverage",
          id: "coverage",
          status: "active",
          type: { text: "Medicare" },
          beneficiary: {
            reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1",
          },
          payor: [{ display: "Medicare" }],
        },
      ],
      identifier: [
        {
          system: "https://bluebutton.cms.gov/resources/variables/clm_id",
          value: "3c0eaa41-3c14-6f36-71c5-554d90e01d2b",
        },
        {
          system: "https://bluebutton.cms.gov/resources/identifier/claim-group",
          value: "99999999999",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
          },
        ],
      },
      use: "claim",
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      billablePeriod: {
        start: "2021-11-18T01:55:58-05:00",
        end: "2022-11-18T01:55:58-05:00",
      },
      created: "2021-11-18T01:55:58-05:00",
      insurer: { display: "Medicare" },
      provider: {
        reference:
          "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
      },
      referral: { reference: "#referral" },
      facility: {
        reference:
          "Location?identifier=https://github.com/synthetichealth/synthea|8a883371-6aed-3948-b487-a874cfdb8cea",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      claim: { reference: "urn:uuid:3c0eaa41-3c14-6f36-71c5-554d90e01d2b" },
      outcome: "complete",
      careTeam: [
        {
          sequence: 1,
          provider: {
            reference:
              "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          },
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
                code: "primary",
                display: "Primary Care Practitioner",
              },
            ],
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: { reference: "#coverage", display: "Medicare" },
        },
      ],
      item: [
        {
          sequence: 1,
          category: {
            coding: [
              {
                system:
                  "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                code: "1",
                display: "Medical care",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "390906007",
                display: "Follow-up encounter",
              },
            ],
            text: "Follow-up encounter",
          },
          servicedPeriod: {
            start: "2021-11-18T01:40:58-05:00",
            end: "2021-11-18T01:55:58-05:00",
          },
          locationCodeableConcept: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
                code: "21",
                display: "Inpatient Hospital",
              },
            ],
          },
          encounter: [
            { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
          ],
        },
      ],
      total: [
        {
          category: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/adjudication",
                code: "submitted",
                display: "Submitted Amount",
              },
            ],
            text: "Submitted Amount",
          },
          amount: { value: 77.49, currency: "USD" },
        },
      ],
      payment: { amount: { value: 0, currency: "USD" } },
    },
    request: { method: "POST", url: "ExplanationOfBenefit" },
  },
];

export default entities;
