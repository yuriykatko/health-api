const entities = [
  {
    fullUrl: "urn:uuid:e3443a83-99c6-03fa-5165-c6ef76ab2de8",
    resource: {
      resourceType: "Observation",
      id: "e3443a83-99c6-03fa-5165-c6ef76ab2de8",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bodyheight",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "8302-2",
            display: "Body Height",
          },
        ],
        text: "Body Height",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
      effectiveDateTime: "2012-02-10T01:40:58-05:00",
      issued: "2012-02-10T01:40:58.908-05:00",
      valueQuantity: {
        value: 180.6,
        unit: "cm",
        system: "http://unitsofmeasure.org",
        code: "cm",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:48afa02a-dd42-6d24-6f92-9f5b58602a0e",
    resource: {
      resourceType: "Observation",
      id: "48afa02a-dd42-6d24-6f92-9f5b58602a0e",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72514-3",
            display:
              "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          },
        ],
        text: "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
      effectiveDateTime: "2012-02-10T01:40:58-05:00",
      issued: "2012-02-10T01:40:58.908-05:00",
      valueQuantity: {
        value: 3,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:60da66c1-3366-47fa-7735-c16ed831533d",
    resource: {
      resourceType: "Observation",
      id: "60da66c1-3366-47fa-7735-c16ed831533d",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bodyweight",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "29463-7",
            display: "Body Weight",
          },
        ],
        text: "Body Weight",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
      effectiveDateTime: "2012-02-10T01:40:58-05:00",
      issued: "2012-02-10T01:40:58.908-05:00",
      valueQuantity: {
        value: 97.3,
        unit: "kg",
        system: "http://unitsofmeasure.org",
        code: "kg",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:718ee300-1b68-8f4e-a946-bb606c7d3c74",
    resource: {
      resourceType: "Observation",
      id: "718ee300-1b68-8f4e-a946-bb606c7d3c74",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bmi",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "39156-5",
            display: "Body Mass Index",
          },
        ],
        text: "Body Mass Index",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
      effectiveDateTime: "2012-02-10T01:40:58-05:00",
      issued: "2012-02-10T01:40:58.908-05:00",
      valueQuantity: {
        value: 29.82,
        unit: "kg/m2",
        system: "http://unitsofmeasure.org",
        code: "kg/m2",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:a63c05df-6812-feab-2493-8030c932cb96",
    resource: {
      resourceType: "Observation",
      id: "a63c05df-6812-feab-2493-8030c932cb96",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bp",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "85354-9",
            display: "Blood Pressure",
          },
        ],
        text: "Blood Pressure",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
      effectiveDateTime: "2012-02-10T01:40:58-05:00",
      issued: "2012-02-10T01:40:58.908-05:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "8462-4",
                display: "Diastolic Blood Pressure",
              },
            ],
            text: "Diastolic Blood Pressure",
          },
          valueQuantity: {
            value: 78,
            unit: "mm[Hg]",
            system: "http://unitsofmeasure.org",
            code: "mm[Hg]",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "8480-6",
                display: "Systolic Blood Pressure",
              },
            ],
            text: "Systolic Blood Pressure",
          },
          valueQuantity: {
            value: 126,
            unit: "mm[Hg]",
            system: "http://unitsofmeasure.org",
            code: "mm[Hg]",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:a5281d03-6236-3bbc-ce95-df4860941b6d",
    resource: {
      resourceType: "Observation",
      id: "a5281d03-6236-3bbc-ce95-df4860941b6d",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/heartrate",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "8867-4", display: "Heart rate" },
        ],
        text: "Heart rate",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
      effectiveDateTime: "2012-02-10T01:40:58-05:00",
      issued: "2012-02-10T01:40:58.908-05:00",
      valueQuantity: {
        value: 95,
        unit: "/min",
        system: "http://unitsofmeasure.org",
        code: "/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:4d2aa673-c6ec-b1ee-5a70-613cf6b6f9f0",
    resource: {
      resourceType: "Observation",
      id: "4d2aa673-c6ec-b1ee-5a70-613cf6b6f9f0",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/resprate",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "9279-1",
            display: "Respiratory rate",
          },
        ],
        text: "Respiratory rate",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
      effectiveDateTime: "2012-02-10T01:40:58-05:00",
      issued: "2012-02-10T01:40:58.908-05:00",
      valueQuantity: {
        value: 13,
        unit: "/min",
        system: "http://unitsofmeasure.org",
        code: "/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:53832b94-75bd-0454-161b-9df56b9886c8",
    resource: {
      resourceType: "Observation",
      id: "53832b94-75bd-0454-161b-9df56b9886c8",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-smokingstatus",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72166-2",
            display: "Tobacco smoking status NHIS",
          },
        ],
        text: "Tobacco smoking status NHIS",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
      effectiveDateTime: "2012-02-10T01:40:58-05:00",
      issued: "2012-02-10T01:40:58.908-05:00",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "8517006",
            display: "Former smoker",
          },
        ],
        text: "Former smoker",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:884e574c-5857-39cb-74ca-5fef08edb610",
    resource: {
      resourceType: "Observation",
      id: "884e574c-5857-39cb-74ca-5fef08edb610",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "93025-5",
            display:
              "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]",
          },
        ],
        text: "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
      effectiveDateTime: "2012-02-10T02:15:08-05:00",
      issued: "2012-02-10T02:15:08.908-05:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "76501-6",
                display:
                  "In the past year, have you been afraid of your partner or ex-partner?",
              },
            ],
            text: "In the past year, have you been afraid of your partner or ex-partner?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93026-3",
                display:
                  "Do you feel physically and emotionally safe where you currently live?",
              },
            ],
            text: "Do you feel physically and emotionally safe where you currently live?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA33-6", display: "Yes" },
            ],
            text: "Yes",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93027-1",
                display: "Are you a refugee?",
              },
            ],
            text: "Are you a refugee?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93028-9",
                display:
                  "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?",
              },
            ],
            text: "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA33-6", display: "Yes" },
            ],
            text: "Yes",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93038-8",
                display:
                  "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?",
              },
            ],
            text: "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA13914-9",
                display: "Very much",
              },
            ],
            text: "Very much",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93029-7",
                display:
                  "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?",
              },
            ],
            text: "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30131-9",
                display: "3 to 5 times a week",
              },
            ],
            text: "3 to 5 times a week",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93030-5",
                display:
                  "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?",
              },
            ],
            text: "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93031-3",
                display:
                  "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?",
              },
            ],
            text: "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30122-8",
                display: "I choose not to answer this question",
              },
            ],
            text: "I choose not to answer this question",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "63586-2",
                display:
                  "During the past year, what was the total combined income for you and the family members you live with? This information will help us determine if you are eligible for any benefits.",
              },
            ],
            text: "During the past year, what was the total combined income for you and the family members you live with? This information will help us determine if you are eligible for any benefits.",
          },
          valueQuantity: {
            value: 67216,
            unit: "/a",
            system: "http://unitsofmeasure.org",
            code: "/a",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "76437-3",
                display: "What is your main insurance?",
              },
            ],
            text: "What is your main insurance?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA15652-3",
                display: "Medicare",
              },
            ],
            text: "Medicare",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "67875-5",
                display: "What is your current work situation?",
              },
            ],
            text: "What is your current work situation?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30137-6",
                display: "Otherwise unemployed but not seeking work",
              },
            ],
            text: "Otherwise unemployed but not seeking work",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "82589-3",
                display:
                  "What is the highest level of school that you have finished?",
              },
            ],
            text: "What is the highest level of school that you have finished?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30192-1",
                display: "High school diploma or GED",
              },
            ],
            text: "High school diploma or GED",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "56799-0",
                display: "What address do you live at?",
              },
            ],
            text: "What address do you live at?",
          },
          valueString: "898 Bernier Mews",
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93033-9",
                display: "Are you worried about losing your housing?",
              },
            ],
            text: "Are you worried about losing your housing?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "71802-3",
                display: "What is your housing situation today?",
              },
            ],
            text: "What is your housing situation today?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30189-7",
                display: "I have housing",
              },
            ],
            text: "I have housing",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "63512-8",
                display:
                  "How many family members, including yourself, do you currently live with?",
              },
            ],
            text: "How many family members, including yourself, do you currently live with?",
          },
          valueQuantity: {
            value: 5,
            unit: "{#}",
            system: "http://unitsofmeasure.org",
            code: "{#}",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "54899-0",
                display: "What language are you most comfortable speaking?",
              },
            ],
            text: "What language are you most comfortable speaking?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA43-5",
                display: "English",
              },
            ],
            text: "English",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93034-7",
                display:
                  "Have you been discharged from the armed forces of the United States?",
              },
            ],
            text: "Have you been discharged from the armed forces of the United States?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93035-4",
                display:
                  "At any point in the past 2 years, has season or migrant farm work been your or your family's main source of income?",
              },
            ],
            text: "At any point in the past 2 years, has season or migrant farm work been your or your family's main source of income?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "32624-9",
                display: "Which race(s) are you?",
              },
            ],
            text: "Which race(s) are you?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA4457-3",
                display: "White",
              },
            ],
            text: "White",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "56051-6",
                display: "Are you Hispanic or Latino?",
              },
            ],
            text: "Are you Hispanic or Latino?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:d279bb87-4bb6-075e-871c-28dca332bb5c",
    resource: {
      resourceType: "Observation",
      id: "d279bb87-4bb6-075e-871c-28dca332bb5c",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "75626-2",
            display: "Total score [AUDIT-C]",
          },
        ],
        text: "Total score [AUDIT-C]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
      effectiveDateTime: "2012-02-10T02:55:11-05:00",
      issued: "2012-02-10T02:55:11.908-05:00",
      valueQuantity: {
        value: 2,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:5b0efda9-2d33-ae96-8122-f8136998b925",
    resource: {
      resourceType: "Observation",
      id: "5b0efda9-2d33-ae96-8122-f8136998b925",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2339-0", display: "Glucose" },
        ],
        text: "Glucose",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 69.57,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:f345d7ee-7cc8-9beb-3f16-2fb7e9cf7d09",
    resource: {
      resourceType: "Observation",
      id: "f345d7ee-7cc8-9beb-3f16-2fb7e9cf7d09",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6299-2",
            display: "Urea Nitrogen",
          },
        ],
        text: "Urea Nitrogen",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 11.95,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:893a3c86-5401-b41e-d152-98e201c45051",
    resource: {
      resourceType: "Observation",
      id: "893a3c86-5401-b41e-d152-98e201c45051",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "38483-4",
            display: "Creatinine",
          },
        ],
        text: "Creatinine",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 3.0724,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:702e27e6-7b44-91c4-a4d0-c6aa6c12ffc7",
    resource: {
      resourceType: "Observation",
      id: "702e27e6-7b44-91c4-a4d0-c6aa6c12ffc7",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "49765-1", display: "Calcium" },
        ],
        text: "Calcium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 9.32,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:f28c554a-f799-a780-92eb-7e04576a5aeb",
    resource: {
      resourceType: "Observation",
      id: "f28c554a-f799-a780-92eb-7e04576a5aeb",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2947-0", display: "Sodium" },
        ],
        text: "Sodium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 143.1,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:e8f09834-e888-8e60-42ca-ee53b67842f6",
    resource: {
      resourceType: "Observation",
      id: "e8f09834-e888-8e60-42ca-ee53b67842f6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "6298-4", display: "Potassium" },
        ],
        text: "Potassium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 4.97,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:26d7d914-fa00-5686-f0f2-5f4698d9261b",
    resource: {
      resourceType: "Observation",
      id: "26d7d914-fa00-5686-f0f2-5f4698d9261b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2069-3", display: "Chloride" },
        ],
        text: "Chloride",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 106.64,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:1c06a944-42e1-be0a-af9a-67dfbd6d6b0f",
    resource: {
      resourceType: "Observation",
      id: "1c06a944-42e1-be0a-af9a-67dfbd6d6b0f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "20565-8",
            display: "Carbon Dioxide",
          },
        ],
        text: "Carbon Dioxide",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 21.28,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:7730a236-c1bb-721f-ea8f-02d0d39b90cc",
    resource: {
      resourceType: "Observation",
      id: "7730a236-c1bb-721f-ea8f-02d0d39b90cc",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "33914-3",
            display: "Glomerular filtration rate/1.73 sq M.predicted",
          },
        ],
        text: "Glomerular filtration rate/1.73 sq M.predicted",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 87.991,
        unit: "mL/min",
        system: "http://unitsofmeasure.org",
        code: "mL/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:985a03f1-6fa6-be74-1cea-140bec2e0690",
    resource: {
      resourceType: "Observation",
      id: "985a03f1-6fa6-be74-1cea-140bec2e0690",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2885-2",
            display: "Protein [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Protein [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 63.323,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:8b1046b8-0735-4edc-db78-339847e8002b",
    resource: {
      resourceType: "Observation",
      id: "8b1046b8-0735-4edc-db78-339847e8002b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1751-7",
            display: "Albumin [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Albumin [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 4.2499,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:592d940a-f946-e730-551e-d1a861dcca7a",
    resource: {
      resourceType: "Observation",
      id: "592d940a-f946-e730-551e-d1a861dcca7a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "10834-0",
            display: "Globulin [Mass/volume] in Serum by calculation",
          },
        ],
        text: "Globulin [Mass/volume] in Serum by calculation",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 3.2262,
        unit: "g/L",
        system: "http://unitsofmeasure.org",
        code: "g/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:49a65ad1-95a8-3573-4078-07e7ea49642e",
    resource: {
      resourceType: "Observation",
      id: "49a65ad1-95a8-3573-4078-07e7ea49642e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1975-2",
            display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Bilirubin.total [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 0.67142,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:fb1f72d6-87ca-2237-7c49-ac198c685ed2",
    resource: {
      resourceType: "Observation",
      id: "fb1f72d6-87ca-2237-7c49-ac198c685ed2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6768-6",
            display:
              "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 127.76,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:e2fe8374-72f3-4340-e4c2-77e13ab44c0b",
    resource: {
      resourceType: "Observation",
      id: "e2fe8374-72f3-4340-e4c2-77e13ab44c0b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1742-6",
            display:
              "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 42.632,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:268da18d-9b43-5466-92c1-59dd498d3b20",
    resource: {
      resourceType: "Observation",
      id: "268da18d-9b43-5466-92c1-59dd498d3b20",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1920-8",
            display:
              "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 29.93,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:cfe658c1-2bfa-dabf-c218-43f68c7a0abc",
    resource: {
      resourceType: "Observation",
      id: "cfe658c1-2bfa-dabf-c218-43f68c7a0abc",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2093-3",
            display: "Total Cholesterol",
          },
        ],
        text: "Total Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 151.34,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:4ae793dc-3df7-55fd-68fd-0afcae8692f3",
    resource: {
      resourceType: "Observation",
      id: "4ae793dc-3df7-55fd-68fd-0afcae8692f3",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2571-8",
            display: "Triglycerides",
          },
        ],
        text: "Triglycerides",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 170.69,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:d2bd188f-5576-a413-62f0-2b7016cbeb82",
    resource: {
      resourceType: "Observation",
      id: "d2bd188f-5576-a413-62f0-2b7016cbeb82",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "18262-6",
            display: "Low Density Lipoprotein Cholesterol",
          },
        ],
        text: "Low Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 118.43,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:edb68a62-9a3a-7b1e-4d8a-879c5740525a",
    resource: {
      resourceType: "Observation",
      id: "edb68a62-9a3a-7b1e-4d8a-879c5740525a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2085-9",
            display: "High Density Lipoprotein Cholesterol",
          },
        ],
        text: "High Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 33.031,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:c5fcff88-8580-deb4-4d5f-2180accf3112",
    resource: {
      resourceType: "Observation",
      id: "c5fcff88-8580-deb4-4d5f-2180accf3112",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bodyheight",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "8302-2",
            display: "Body Height",
          },
        ],
        text: "Body Height",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T01:40:58-05:00",
      issued: "2013-02-15T01:40:58.908-05:00",
      valueQuantity: {
        value: 180.6,
        unit: "cm",
        system: "http://unitsofmeasure.org",
        code: "cm",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:58b7235c-f216-e47a-5274-2bfedc8930bc",
    resource: {
      resourceType: "Observation",
      id: "58b7235c-f216-e47a-5274-2bfedc8930bc",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72514-3",
            display:
              "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          },
        ],
        text: "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T01:40:58-05:00",
      issued: "2013-02-15T01:40:58.908-05:00",
      valueQuantity: {
        value: 1,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:897f1869-5f01-8b67-3305-671c0ceda29c",
    resource: {
      resourceType: "Observation",
      id: "897f1869-5f01-8b67-3305-671c0ceda29c",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bodyweight",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "29463-7",
            display: "Body Weight",
          },
        ],
        text: "Body Weight",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T01:40:58-05:00",
      issued: "2013-02-15T01:40:58.908-05:00",
      valueQuantity: {
        value: 99.1,
        unit: "kg",
        system: "http://unitsofmeasure.org",
        code: "kg",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:9711260e-3efb-b630-cf31-68575c342368",
    resource: {
      resourceType: "Observation",
      id: "9711260e-3efb-b630-cf31-68575c342368",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bmi",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "39156-5",
            display: "Body Mass Index",
          },
        ],
        text: "Body Mass Index",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T01:40:58-05:00",
      issued: "2013-02-15T01:40:58.908-05:00",
      valueQuantity: {
        value: 30.38,
        unit: "kg/m2",
        system: "http://unitsofmeasure.org",
        code: "kg/m2",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:981723d0-1665-520f-b560-44281d86b5c3",
    resource: {
      resourceType: "Observation",
      id: "981723d0-1665-520f-b560-44281d86b5c3",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bp",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "85354-9",
            display: "Blood Pressure",
          },
        ],
        text: "Blood Pressure",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T01:40:58-05:00",
      issued: "2013-02-15T01:40:58.908-05:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "8462-4",
                display: "Diastolic Blood Pressure",
              },
            ],
            text: "Diastolic Blood Pressure",
          },
          valueQuantity: {
            value: 79,
            unit: "mm[Hg]",
            system: "http://unitsofmeasure.org",
            code: "mm[Hg]",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "8480-6",
                display: "Systolic Blood Pressure",
              },
            ],
            text: "Systolic Blood Pressure",
          },
          valueQuantity: {
            value: 135,
            unit: "mm[Hg]",
            system: "http://unitsofmeasure.org",
            code: "mm[Hg]",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:0b4d904a-ee9d-54a3-dfdf-800c3255ccc2",
    resource: {
      resourceType: "Observation",
      id: "0b4d904a-ee9d-54a3-dfdf-800c3255ccc2",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/heartrate",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "8867-4", display: "Heart rate" },
        ],
        text: "Heart rate",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T01:40:58-05:00",
      issued: "2013-02-15T01:40:58.908-05:00",
      valueQuantity: {
        value: 83,
        unit: "/min",
        system: "http://unitsofmeasure.org",
        code: "/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:8b6ea367-0363-3414-1282-91e15383faab",
    resource: {
      resourceType: "Observation",
      id: "8b6ea367-0363-3414-1282-91e15383faab",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/resprate",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "9279-1",
            display: "Respiratory rate",
          },
        ],
        text: "Respiratory rate",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T01:40:58-05:00",
      issued: "2013-02-15T01:40:58.908-05:00",
      valueQuantity: {
        value: 15,
        unit: "/min",
        system: "http://unitsofmeasure.org",
        code: "/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:4a7fcfc9-d415-3d7a-8ffb-807348d747ff",
    resource: {
      resourceType: "Observation",
      id: "4a7fcfc9-d415-3d7a-8ffb-807348d747ff",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2093-3",
            display: "Total Cholesterol",
          },
        ],
        text: "Total Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T01:40:58-05:00",
      issued: "2013-02-15T01:40:58.908-05:00",
      valueQuantity: {
        value: 189.89,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:30f1678d-c013-6d7f-6dc4-7956777a76ba",
    resource: {
      resourceType: "Observation",
      id: "30f1678d-c013-6d7f-6dc4-7956777a76ba",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2571-8",
            display: "Triglycerides",
          },
        ],
        text: "Triglycerides",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T01:40:58-05:00",
      issued: "2013-02-15T01:40:58.908-05:00",
      valueQuantity: {
        value: 103.21,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:a7c75832-8fe4-af42-21ac-6ff57c38b5d8",
    resource: {
      resourceType: "Observation",
      id: "a7c75832-8fe4-af42-21ac-6ff57c38b5d8",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "18262-6",
            display: "Low Density Lipoprotein Cholesterol",
          },
        ],
        text: "Low Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T01:40:58-05:00",
      issued: "2013-02-15T01:40:58.908-05:00",
      valueQuantity: {
        value: 100.46,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:dcfd31d7-2e36-a57e-baa6-19eac7c2891b",
    resource: {
      resourceType: "Observation",
      id: "dcfd31d7-2e36-a57e-baa6-19eac7c2891b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2085-9",
            display: "High Density Lipoprotein Cholesterol",
          },
        ],
        text: "High Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T01:40:58-05:00",
      issued: "2013-02-15T01:40:58.908-05:00",
      valueQuantity: {
        value: 68.78,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:d5c6eda4-2aae-61eb-e099-dc9082f2e90b",
    resource: {
      resourceType: "Observation",
      id: "d5c6eda4-2aae-61eb-e099-dc9082f2e90b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-smokingstatus",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72166-2",
            display: "Tobacco smoking status NHIS",
          },
        ],
        text: "Tobacco smoking status NHIS",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T01:40:58-05:00",
      issued: "2013-02-15T01:40:58.908-05:00",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "8517006",
            display: "Former smoker",
          },
        ],
        text: "Former smoker",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:b6732788-df02-aee3-59f0-7fd6baf7df3e",
    resource: {
      resourceType: "Observation",
      id: "b6732788-df02-aee3-59f0-7fd6baf7df3e",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "93025-5",
            display:
              "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]",
          },
        ],
        text: "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T02:31:40-05:00",
      issued: "2013-02-15T02:31:40.908-05:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "76501-6",
                display:
                  "In the past year, have you been afraid of your partner or ex-partner?",
              },
            ],
            text: "In the past year, have you been afraid of your partner or ex-partner?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93026-3",
                display:
                  "Do you feel physically and emotionally safe where you currently live?",
              },
            ],
            text: "Do you feel physically and emotionally safe where you currently live?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA33-6", display: "Yes" },
            ],
            text: "Yes",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93027-1",
                display: "Are you a refugee?",
              },
            ],
            text: "Are you a refugee?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93028-9",
                display:
                  "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?",
              },
            ],
            text: "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA33-6", display: "Yes" },
            ],
            text: "Yes",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93038-8",
                display:
                  "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?",
              },
            ],
            text: "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA6568-5",
                display: "Not at all",
              },
            ],
            text: "Not at all",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93029-7",
                display:
                  "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?",
              },
            ],
            text: "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30131-9",
                display: "3 to 5 times a week",
              },
            ],
            text: "3 to 5 times a week",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93030-5",
                display:
                  "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?",
              },
            ],
            text: "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93031-3",
                display:
                  "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?",
              },
            ],
            text: "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30122-8",
                display: "I choose not to answer this question",
              },
            ],
            text: "I choose not to answer this question",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "63586-2",
                display:
                  "During the past year, what was the total combined income for you and the family members you live with? This information will help us determine if you are eligible for any benefits.",
              },
            ],
            text: "During the past year, what was the total combined income for you and the family members you live with? This information will help us determine if you are eligible for any benefits.",
          },
          valueQuantity: {
            value: 67216,
            unit: "/a",
            system: "http://unitsofmeasure.org",
            code: "/a",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "76437-3",
                display: "What is your main insurance?",
              },
            ],
            text: "What is your main insurance?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA15652-3",
                display: "Medicare",
              },
            ],
            text: "Medicare",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "67875-5",
                display: "What is your current work situation?",
              },
            ],
            text: "What is your current work situation?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30136-8",
                display: "Full-time work",
              },
            ],
            text: "Full-time work",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "82589-3",
                display:
                  "What is the highest level of school that you have finished?",
              },
            ],
            text: "What is the highest level of school that you have finished?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30192-1",
                display: "High school diploma or GED",
              },
            ],
            text: "High school diploma or GED",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "56799-0",
                display: "What address do you live at?",
              },
            ],
            text: "What address do you live at?",
          },
          valueString: "898 Bernier Mews",
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93033-9",
                display: "Are you worried about losing your housing?",
              },
            ],
            text: "Are you worried about losing your housing?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "71802-3",
                display: "What is your housing situation today?",
              },
            ],
            text: "What is your housing situation today?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30189-7",
                display: "I have housing",
              },
            ],
            text: "I have housing",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "63512-8",
                display:
                  "How many family members, including yourself, do you currently live with?",
              },
            ],
            text: "How many family members, including yourself, do you currently live with?",
          },
          valueQuantity: {
            value: 5,
            unit: "{#}",
            system: "http://unitsofmeasure.org",
            code: "{#}",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "54899-0",
                display: "What language are you most comfortable speaking?",
              },
            ],
            text: "What language are you most comfortable speaking?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA43-5",
                display: "English",
              },
            ],
            text: "English",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93034-7",
                display:
                  "Have you been discharged from the armed forces of the United States?",
              },
            ],
            text: "Have you been discharged from the armed forces of the United States?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93035-4",
                display:
                  "At any point in the past 2 years, has season or migrant farm work been your or your family's main source of income?",
              },
            ],
            text: "At any point in the past 2 years, has season or migrant farm work been your or your family's main source of income?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "32624-9",
                display: "Which race(s) are you?",
              },
            ],
            text: "Which race(s) are you?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA4457-3",
                display: "White",
              },
            ],
            text: "White",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "56051-6",
                display: "Are you Hispanic or Latino?",
              },
            ],
            text: "Are you Hispanic or Latino?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:12cabf2a-8b3e-cf49-aa95-ba56d9b222d9",
    resource: {
      resourceType: "Observation",
      id: "12cabf2a-8b3e-cf49-aa95-ba56d9b222d9",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59460-6",
            display: "Fall risk total [Morse Fall Scale]",
          },
        ],
        text: "Fall risk total [Morse Fall Scale]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T02:57:57-05:00",
      issued: "2013-02-15T02:57:57.908-05:00",
      valueQuantity: {
        value: 63,
        unit: "{#}",
        system: "http://unitsofmeasure.org",
        code: "{#}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:d715141d-f296-d8a6-f48e-eaa761d37956",
    resource: {
      resourceType: "Observation",
      id: "d715141d-f296-d8a6-f48e-eaa761d37956",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59461-4",
            display: "Fall risk level [Morse Fall Scale]",
          },
        ],
        text: "Fall risk level [Morse Fall Scale]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T02:57:57-05:00",
      issued: "2013-02-15T02:57:57.908-05:00",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://loinc.org",
            code: "LA13040-3",
            display: "High Risk (MFS Score 50+)",
          },
        ],
        text: "High Risk (MFS Score 50+)",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:d8a7514e-cd25-0b94-b733-91ee707bdf87",
    resource: {
      resourceType: "Observation",
      id: "d8a7514e-cd25-0b94-b733-91ee707bdf87",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "55758-7",
            display:
              "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",
          },
        ],
        text: "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T03:29:15-05:00",
      issued: "2013-02-15T03:29:15.908-05:00",
      valueQuantity: {
        value: 1,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:7f17e90d-632f-1304-1ddb-2c99f43257b7",
    resource: {
      resourceType: "Observation",
      id: "7f17e90d-632f-1304-1ddb-2c99f43257b7",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2339-0", display: "Glucose" },
        ],
        text: "Glucose",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 82.16,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:5444cd41-a09e-0984-bea9-40d00fd7cd1e",
    resource: {
      resourceType: "Observation",
      id: "5444cd41-a09e-0984-bea9-40d00fd7cd1e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6299-2",
            display: "Urea Nitrogen",
          },
        ],
        text: "Urea Nitrogen",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 14.11,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:8faafa19-0bc7-927d-965f-205f02846bfb",
    resource: {
      resourceType: "Observation",
      id: "8faafa19-0bc7-927d-965f-205f02846bfb",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "38483-4",
            display: "Creatinine",
          },
        ],
        text: "Creatinine",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 3.2531,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:41729168-591b-d27f-b238-99cb64d24fa1",
    resource: {
      resourceType: "Observation",
      id: "41729168-591b-d27f-b238-99cb64d24fa1",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "49765-1", display: "Calcium" },
        ],
        text: "Calcium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 9.65,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:b293ce4d-bb8a-b4f0-2180-a24ae4e07fc2",
    resource: {
      resourceType: "Observation",
      id: "b293ce4d-bb8a-b4f0-2180-a24ae4e07fc2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2947-0", display: "Sodium" },
        ],
        text: "Sodium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 136.35,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:62390a66-bbdc-db30-3a79-802910a46e34",
    resource: {
      resourceType: "Observation",
      id: "62390a66-bbdc-db30-3a79-802910a46e34",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "6298-4", display: "Potassium" },
        ],
        text: "Potassium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 4.77,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:4a1f623a-5c89-d9fe-a7ec-c64bbcaf0cf7",
    resource: {
      resourceType: "Observation",
      id: "4a1f623a-5c89-d9fe-a7ec-c64bbcaf0cf7",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2069-3", display: "Chloride" },
        ],
        text: "Chloride",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 104.78,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:75f8acf6-04ea-6919-c786-f5129f1ec077",
    resource: {
      resourceType: "Observation",
      id: "75f8acf6-04ea-6919-c786-f5129f1ec077",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "20565-8",
            display: "Carbon Dioxide",
          },
        ],
        text: "Carbon Dioxide",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 27.06,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:aac8bb5e-2b6b-692a-1f0b-d462a247b20d",
    resource: {
      resourceType: "Observation",
      id: "aac8bb5e-2b6b-692a-1f0b-d462a247b20d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "33914-3",
            display: "Glomerular filtration rate/1.73 sq M.predicted",
          },
        ],
        text: "Glomerular filtration rate/1.73 sq M.predicted",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 88.145,
        unit: "mL/min",
        system: "http://unitsofmeasure.org",
        code: "mL/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:5c6311ff-9150-e3e1-59ad-db03633046cb",
    resource: {
      resourceType: "Observation",
      id: "5c6311ff-9150-e3e1-59ad-db03633046cb",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2885-2",
            display: "Protein [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Protein [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 62.897,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:cfcd92ac-59e6-6a5d-58a4-37264d97be78",
    resource: {
      resourceType: "Observation",
      id: "cfcd92ac-59e6-6a5d-58a4-37264d97be78",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1751-7",
            display: "Albumin [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Albumin [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 4.2694,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:0c9fc924-3cec-75d0-3fc0-4c491e193ed9",
    resource: {
      resourceType: "Observation",
      id: "0c9fc924-3cec-75d0-3fc0-4c491e193ed9",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "10834-0",
            display: "Globulin [Mass/volume] in Serum by calculation",
          },
        ],
        text: "Globulin [Mass/volume] in Serum by calculation",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 2.2727,
        unit: "g/L",
        system: "http://unitsofmeasure.org",
        code: "g/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:1cbdcf10-4ee8-ae62-f17c-ba3f135dcf32",
    resource: {
      resourceType: "Observation",
      id: "1cbdcf10-4ee8-ae62-f17c-ba3f135dcf32",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1975-2",
            display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Bilirubin.total [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 0.30555,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:3c48fb34-43f9-3c56-630d-41895574080c",
    resource: {
      resourceType: "Observation",
      id: "3c48fb34-43f9-3c56-630d-41895574080c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6768-6",
            display:
              "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 37.896,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:a28fcfe3-f929-876b-6198-18eaae8c7b37",
    resource: {
      resourceType: "Observation",
      id: "a28fcfe3-f929-876b-6198-18eaae8c7b37",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1742-6",
            display:
              "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 35.332,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:cb69dcb6-6749-0884-7336-883b76c61812",
    resource: {
      resourceType: "Observation",
      id: "cb69dcb6-6749-0884-7336-883b76c61812",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1920-8",
            display:
              "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 15.69,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:e6038778-bf2b-118a-29e3-dc7aeda61009",
    resource: {
      resourceType: "Observation",
      id: "e6038778-bf2b-118a-29e3-dc7aeda61009",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2093-3",
            display: "Total Cholesterol",
          },
        ],
        text: "Total Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 206.79,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:c5e8f066-4c40-af91-915f-092a4b8aff5e",
    resource: {
      resourceType: "Observation",
      id: "c5e8f066-4c40-af91-915f-092a4b8aff5e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2571-8",
            display: "Triglycerides",
          },
        ],
        text: "Triglycerides",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 178.83,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:545e6595-35ec-0b39-fc74-8ad5c4235e2c",
    resource: {
      resourceType: "Observation",
      id: "545e6595-35ec-0b39-fc74-8ad5c4235e2c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "18262-6",
            display: "Low Density Lipoprotein Cholesterol",
          },
        ],
        text: "Low Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 113.93,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:ae0819b2-53fe-eb56-cf6b-5ef5eceb7da9",
    resource: {
      resourceType: "Observation",
      id: "ae0819b2-53fe-eb56-cf6b-5ef5eceb7da9",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2085-9",
            display: "High Density Lipoprotein Cholesterol",
          },
        ],
        text: "High Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 30.4,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:b467c610-2f2c-938e-eb8d-b71a8f4617c4",
    resource: {
      resourceType: "Observation",
      id: "b467c610-2f2c-938e-eb8d-b71a8f4617c4",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "91148-7",
            display:
              "Pain intensity, Enjoyment of life, General activity (PEG) 3 item pain scale",
          },
        ],
        text: "Pain intensity, Enjoyment of life, General activity (PEG) 3 item pain scale",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a1aa9e96-e503-95ca-5897-96581cf9dcf5" },
      effectiveDateTime: "2014-02-02T01:40:58-05:00",
      issued: "2014-02-02T01:40:58.908-05:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "91146-1",
                display:
                  "What number best describes how, during the past week, pain has interfered with your general activity?",
              },
            ],
            text: "What number best describes how, during the past week, pain has interfered with your general activity?",
          },
          valueQuantity: {
            value: 6.0629,
            unit: "{score}",
            system: "http://unitsofmeasure.org",
            code: "{score}",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "91145-3",
                display:
                  "What number best describes how, during the past week, pain has interfered with your enjoyment of life?",
              },
            ],
            text: "What number best describes how, during the past week, pain has interfered with your enjoyment of life?",
          },
          valueQuantity: {
            value: 9.6617,
            unit: "{score}",
            system: "http://unitsofmeasure.org",
            code: "{score}",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "75893-8",
                display:
                  "What number best describes your pain on average in the past week?",
              },
            ],
            text: "What number best describes your pain on average in the past week?",
          },
          valueQuantity: {
            value: 1.3009,
            unit: "{score}",
            system: "http://unitsofmeasure.org",
            code: "{score}",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:48e437b1-795b-3f1a-b55a-c9396d2f7a0f",
    resource: {
      resourceType: "Observation",
      id: "48e437b1-795b-3f1a-b55a-c9396d2f7a0f",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "65750-2",
            display: "Drugs of abuse 5 panel - Urine by Screen method",
          },
        ],
        text: "Drugs of abuse 5 panel - Urine by Screen method",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a1aa9e96-e503-95ca-5897-96581cf9dcf5" },
      effectiveDateTime: "2014-02-02T01:40:58-05:00",
      issued: "2014-02-02T01:40:58.908-05:00",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "260385009",
            display: "Negative (qualifier value)",
          },
        ],
        text: "Negative (qualifier value)",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:fa080adb-ac5f-f709-2658-4c6f16855863",
    resource: {
      resourceType: "Observation",
      id: "fa080adb-ac5f-f709-2658-4c6f16855863",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bodyheight",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "8302-2",
            display: "Body Height",
          },
        ],
        text: "Body Height",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      effectiveDateTime: "2014-02-21T01:40:58-05:00",
      issued: "2014-02-21T01:40:58.908-05:00",
      valueQuantity: {
        value: 180.6,
        unit: "cm",
        system: "http://unitsofmeasure.org",
        code: "cm",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:a789c7d6-b20b-717a-2432-b2212a4a507a",
    resource: {
      resourceType: "Observation",
      id: "a789c7d6-b20b-717a-2432-b2212a4a507a",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72514-3",
            display:
              "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          },
        ],
        text: "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      effectiveDateTime: "2014-02-21T01:40:58-05:00",
      issued: "2014-02-21T01:40:58.908-05:00",
      valueQuantity: {
        value: 2,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:dff377d8-b22b-dd6c-ae0b-c0be4baca91d",
    resource: {
      resourceType: "Observation",
      id: "dff377d8-b22b-dd6c-ae0b-c0be4baca91d",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bodyweight",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "29463-7",
            display: "Body Weight",
          },
        ],
        text: "Body Weight",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      effectiveDateTime: "2014-02-21T01:40:58-05:00",
      issued: "2014-02-21T01:40:58.908-05:00",
      valueQuantity: {
        value: 99.1,
        unit: "kg",
        system: "http://unitsofmeasure.org",
        code: "kg",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:010a084e-3fc1-78a7-8812-93ac954d1f9d",
    resource: {
      resourceType: "Observation",
      id: "010a084e-3fc1-78a7-8812-93ac954d1f9d",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bmi",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "39156-5",
            display: "Body Mass Index",
          },
        ],
        text: "Body Mass Index",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      effectiveDateTime: "2014-02-21T01:40:58-05:00",
      issued: "2014-02-21T01:40:58.908-05:00",
      valueQuantity: {
        value: 30.38,
        unit: "kg/m2",
        system: "http://unitsofmeasure.org",
        code: "kg/m2",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:2fc154b0-d638-90f4-fcba-831a7316ef14",
    resource: {
      resourceType: "Observation",
      id: "2fc154b0-d638-90f4-fcba-831a7316ef14",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bp",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "85354-9",
            display: "Blood Pressure",
          },
        ],
        text: "Blood Pressure",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      effectiveDateTime: "2014-02-21T01:40:58-05:00",
      issued: "2014-02-21T01:40:58.908-05:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "8462-4",
                display: "Diastolic Blood Pressure",
              },
            ],
            text: "Diastolic Blood Pressure",
          },
          valueQuantity: {
            value: 76,
            unit: "mm[Hg]",
            system: "http://unitsofmeasure.org",
            code: "mm[Hg]",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "8480-6",
                display: "Systolic Blood Pressure",
              },
            ],
            text: "Systolic Blood Pressure",
          },
          valueQuantity: {
            value: 117,
            unit: "mm[Hg]",
            system: "http://unitsofmeasure.org",
            code: "mm[Hg]",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:f6e1b041-298c-ddbe-9981-a6c3cfbffca6",
    resource: {
      resourceType: "Observation",
      id: "f6e1b041-298c-ddbe-9981-a6c3cfbffca6",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/heartrate",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "8867-4", display: "Heart rate" },
        ],
        text: "Heart rate",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      effectiveDateTime: "2014-02-21T01:40:58-05:00",
      issued: "2014-02-21T01:40:58.908-05:00",
      valueQuantity: {
        value: 61,
        unit: "/min",
        system: "http://unitsofmeasure.org",
        code: "/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:950fd6f4-3b16-4ff5-6b1c-3214e269040a",
    resource: {
      resourceType: "Observation",
      id: "950fd6f4-3b16-4ff5-6b1c-3214e269040a",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/resprate",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "9279-1",
            display: "Respiratory rate",
          },
        ],
        text: "Respiratory rate",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      effectiveDateTime: "2014-02-21T01:40:58-05:00",
      issued: "2014-02-21T01:40:58.908-05:00",
      valueQuantity: {
        value: 14,
        unit: "/min",
        system: "http://unitsofmeasure.org",
        code: "/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:f3ae79ac-7378-7c35-32f0-fd7249758848",
    resource: {
      resourceType: "Observation",
      id: "f3ae79ac-7378-7c35-32f0-fd7249758848",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-smokingstatus",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72166-2",
            display: "Tobacco smoking status NHIS",
          },
        ],
        text: "Tobacco smoking status NHIS",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      effectiveDateTime: "2014-02-21T01:40:58-05:00",
      issued: "2014-02-21T01:40:58.908-05:00",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "8517006",
            display: "Former smoker",
          },
        ],
        text: "Former smoker",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:03cfd9a8-2e1c-0327-d1c4-d0d472eb8cc3",
    resource: {
      resourceType: "Observation",
      id: "03cfd9a8-2e1c-0327-d1c4-d0d472eb8cc3",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "93025-5",
            display:
              "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]",
          },
        ],
        text: "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      effectiveDateTime: "2014-02-21T02:24:36-05:00",
      issued: "2014-02-21T02:24:36.908-05:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "76501-6",
                display:
                  "In the past year, have you been afraid of your partner or ex-partner?",
              },
            ],
            text: "In the past year, have you been afraid of your partner or ex-partner?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA33-6", display: "Yes" },
            ],
            text: "Yes",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93026-3",
                display:
                  "Do you feel physically and emotionally safe where you currently live?",
              },
            ],
            text: "Do you feel physically and emotionally safe where you currently live?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA33-6", display: "Yes" },
            ],
            text: "Yes",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93027-1",
                display: "Are you a refugee?",
              },
            ],
            text: "Are you a refugee?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93028-9",
                display:
                  "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?",
              },
            ],
            text: "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA33-6", display: "Yes" },
            ],
            text: "Yes",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93038-8",
                display:
                  "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?",
              },
            ],
            text: "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA6568-5",
                display: "Not at all",
              },
            ],
            text: "Not at all",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93029-7",
                display:
                  "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?",
              },
            ],
            text: "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30131-9",
                display: "3 to 5 times a week",
              },
            ],
            text: "3 to 5 times a week",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93030-5",
                display:
                  "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?",
              },
            ],
            text: "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93031-3",
                display:
                  "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?",
              },
            ],
            text: "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30127-7",
                display: "Childcare",
              },
            ],
            text: "Childcare",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "63586-2",
                display:
                  "During the past year, what was the total combined income for you and the family members you live with? This information will help us determine if you are eligible for any benefits.",
              },
            ],
            text: "During the past year, what was the total combined income for you and the family members you live with? This information will help us determine if you are eligible for any benefits.",
          },
          valueQuantity: {
            value: 67216,
            unit: "/a",
            system: "http://unitsofmeasure.org",
            code: "/a",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "76437-3",
                display: "What is your main insurance?",
              },
            ],
            text: "What is your main insurance?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA15652-3",
                display: "Medicare",
              },
            ],
            text: "Medicare",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "67875-5",
                display: "What is your current work situation?",
              },
            ],
            text: "What is your current work situation?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30138-4",
                display: "Part-time or temporary work",
              },
            ],
            text: "Part-time or temporary work",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "82589-3",
                display:
                  "What is the highest level of school that you have finished?",
              },
            ],
            text: "What is the highest level of school that you have finished?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30192-1",
                display: "High school diploma or GED",
              },
            ],
            text: "High school diploma or GED",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "56799-0",
                display: "What address do you live at?",
              },
            ],
            text: "What address do you live at?",
          },
          valueString: "898 Bernier Mews",
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93033-9",
                display: "Are you worried about losing your housing?",
              },
            ],
            text: "Are you worried about losing your housing?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "71802-3",
                display: "What is your housing situation today?",
              },
            ],
            text: "What is your housing situation today?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30189-7",
                display: "I have housing",
              },
            ],
            text: "I have housing",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "63512-8",
                display:
                  "How many family members, including yourself, do you currently live with?",
              },
            ],
            text: "How many family members, including yourself, do you currently live with?",
          },
          valueQuantity: {
            value: 5,
            unit: "{#}",
            system: "http://unitsofmeasure.org",
            code: "{#}",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "54899-0",
                display: "What language are you most comfortable speaking?",
              },
            ],
            text: "What language are you most comfortable speaking?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA43-5",
                display: "English",
              },
            ],
            text: "English",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93034-7",
                display:
                  "Have you been discharged from the armed forces of the United States?",
              },
            ],
            text: "Have you been discharged from the armed forces of the United States?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93035-4",
                display:
                  "At any point in the past 2 years, has season or migrant farm work been your or your family's main source of income?",
              },
            ],
            text: "At any point in the past 2 years, has season or migrant farm work been your or your family's main source of income?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "32624-9",
                display: "Which race(s) are you?",
              },
            ],
            text: "Which race(s) are you?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA4457-3",
                display: "White",
              },
            ],
            text: "White",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "56051-6",
                display: "Are you Hispanic or Latino?",
              },
            ],
            text: "Are you Hispanic or Latino?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:36e1273c-772b-9c27-8b37-4396b9275a7a",
    resource: {
      resourceType: "Observation",
      id: "36e1273c-772b-9c27-8b37-4396b9275a7a",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59460-6",
            display: "Fall risk total [Morse Fall Scale]",
          },
        ],
        text: "Fall risk total [Morse Fall Scale]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      effectiveDateTime: "2014-02-21T02:51:43-05:00",
      issued: "2014-02-21T02:51:43.908-05:00",
      valueQuantity: {
        value: 7,
        unit: "{#}",
        system: "http://unitsofmeasure.org",
        code: "{#}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:0d2097c3-a084-a627-dc8d-459084afd58a",
    resource: {
      resourceType: "Observation",
      id: "0d2097c3-a084-a627-dc8d-459084afd58a",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59461-4",
            display: "Fall risk level [Morse Fall Scale]",
          },
        ],
        text: "Fall risk level [Morse Fall Scale]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      effectiveDateTime: "2014-02-21T02:51:43-05:00",
      issued: "2014-02-21T02:51:43.908-05:00",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://loinc.org",
            code: "LA13038-7",
            display: "Low Risk (MFS Score 0 - 24)",
          },
        ],
        text: "Low Risk (MFS Score 0 - 24)",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:8f8a66d6-4ea5-62d2-c472-a56665bc26f7",
    resource: {
      resourceType: "Observation",
      id: "8f8a66d6-4ea5-62d2-c472-a56665bc26f7",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "55758-7",
            display:
              "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",
          },
        ],
        text: "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      effectiveDateTime: "2014-02-21T03:25:06-05:00",
      issued: "2014-02-21T03:25:06.908-05:00",
      valueQuantity: {
        value: 2,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:41df7476-d352-4e18-8c5f-4202c73e3c00",
    resource: {
      resourceType: "Observation",
      id: "41df7476-d352-4e18-8c5f-4202c73e3c00",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "65750-2",
            display: "Drugs of abuse 5 panel - Urine by Screen method",
          },
        ],
        text: "Drugs of abuse 5 panel - Urine by Screen method",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7ea69efc-73a8-74a1-0595-d98e36d47dc2" },
      effectiveDateTime: "2014-03-27T05:40:58-04:00",
      issued: "2014-03-27T05:40:58.908-04:00",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "260385009",
            display: "Negative (qualifier value)",
          },
        ],
        text: "Negative (qualifier value)",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:c1629c19-7cb4-dbaf-724f-1852e6abf3c8",
    resource: {
      resourceType: "Observation",
      id: "c1629c19-7cb4-dbaf-724f-1852e6abf3c8",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "91148-7",
            display:
              "Pain intensity, Enjoyment of life, General activity (PEG) 3 item pain scale",
          },
        ],
        text: "Pain intensity, Enjoyment of life, General activity (PEG) 3 item pain scale",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7ea69efc-73a8-74a1-0595-d98e36d47dc2" },
      effectiveDateTime: "2014-03-27T05:40:58-04:00",
      issued: "2014-03-27T05:40:58.908-04:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "91146-1",
                display:
                  "What number best describes how, during the past week, pain has interfered with your general activity?",
              },
            ],
            text: "What number best describes how, during the past week, pain has interfered with your general activity?",
          },
          valueQuantity: {
            value: 1.9149,
            unit: "{score}",
            system: "http://unitsofmeasure.org",
            code: "{score}",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "91145-3",
                display:
                  "What number best describes how, during the past week, pain has interfered with your enjoyment of life?",
              },
            ],
            text: "What number best describes how, during the past week, pain has interfered with your enjoyment of life?",
          },
          valueQuantity: {
            value: 8.7849,
            unit: "{score}",
            system: "http://unitsofmeasure.org",
            code: "{score}",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "75893-8",
                display:
                  "What number best describes your pain on average in the past week?",
              },
            ],
            text: "What number best describes your pain on average in the past week?",
          },
          valueQuantity: {
            value: 9.5321,
            unit: "{score}",
            system: "http://unitsofmeasure.org",
            code: "{score}",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:ce7bec28-fbf6-b090-38dd-3571f196defc",
    resource: {
      resourceType: "Observation",
      id: "ce7bec28-fbf6-b090-38dd-3571f196defc",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2339-0", display: "Glucose" },
        ],
        text: "Glucose",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 93.05,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:a21b979b-97ef-2c88-4965-b522842f70db",
    resource: {
      resourceType: "Observation",
      id: "a21b979b-97ef-2c88-4965-b522842f70db",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6299-2",
            display: "Urea Nitrogen",
          },
        ],
        text: "Urea Nitrogen",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 16.62,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:892639ed-f635-0092-d5a1-617ef95ca613",
    resource: {
      resourceType: "Observation",
      id: "892639ed-f635-0092-d5a1-617ef95ca613",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "38483-4",
            display: "Creatinine",
          },
        ],
        text: "Creatinine",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 3.2568,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:c6fad787-0d15-d55e-ce70-9de6dc651d4b",
    resource: {
      resourceType: "Observation",
      id: "c6fad787-0d15-d55e-ce70-9de6dc651d4b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "49765-1", display: "Calcium" },
        ],
        text: "Calcium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 8.63,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:e36b6e64-494c-e2d1-d5d3-eb9d9aef274b",
    resource: {
      resourceType: "Observation",
      id: "e36b6e64-494c-e2d1-d5d3-eb9d9aef274b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2947-0", display: "Sodium" },
        ],
        text: "Sodium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 139.49,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:b4993406-5562-88e3-b02c-dae1acaf647a",
    resource: {
      resourceType: "Observation",
      id: "b4993406-5562-88e3-b02c-dae1acaf647a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "6298-4", display: "Potassium" },
        ],
        text: "Potassium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 4.72,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:d3823eac-13f2-12ca-9e74-7940712536a1",
    resource: {
      resourceType: "Observation",
      id: "d3823eac-13f2-12ca-9e74-7940712536a1",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2069-3", display: "Chloride" },
        ],
        text: "Chloride",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 110.06,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:2c240dc3-67e6-0858-9139-d12381060af5",
    resource: {
      resourceType: "Observation",
      id: "2c240dc3-67e6-0858-9139-d12381060af5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "20565-8",
            display: "Carbon Dioxide",
          },
        ],
        text: "Carbon Dioxide",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 22.41,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:c059a59d-5bdd-b1a1-b650-4eaf7b84c053",
    resource: {
      resourceType: "Observation",
      id: "c059a59d-5bdd-b1a1-b650-4eaf7b84c053",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "33914-3",
            display: "Glomerular filtration rate/1.73 sq M.predicted",
          },
        ],
        text: "Glomerular filtration rate/1.73 sq M.predicted",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 75.633,
        unit: "mL/min",
        system: "http://unitsofmeasure.org",
        code: "mL/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:73d33261-47f4-b0e0-793f-1dcd56b2adcd",
    resource: {
      resourceType: "Observation",
      id: "73d33261-47f4-b0e0-793f-1dcd56b2adcd",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2885-2",
            display: "Protein [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Protein [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 75.672,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:eaf06641-d54f-d69a-55ff-d585320c0d64",
    resource: {
      resourceType: "Observation",
      id: "eaf06641-d54f-d69a-55ff-d585320c0d64",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1751-7",
            display: "Albumin [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Albumin [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 3.6474,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:bd2606f2-af60-9403-17ac-0492e319cf17",
    resource: {
      resourceType: "Observation",
      id: "bd2606f2-af60-9403-17ac-0492e319cf17",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "10834-0",
            display: "Globulin [Mass/volume] in Serum by calculation",
          },
        ],
        text: "Globulin [Mass/volume] in Serum by calculation",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 2.5652,
        unit: "g/L",
        system: "http://unitsofmeasure.org",
        code: "g/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:b92a5e5a-7602-afa1-5e9e-73337a2f181c",
    resource: {
      resourceType: "Observation",
      id: "b92a5e5a-7602-afa1-5e9e-73337a2f181c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1975-2",
            display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Bilirubin.total [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 0.50761,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:f4ab8283-1fae-202f-bc86-2e3ee0e8f26d",
    resource: {
      resourceType: "Observation",
      id: "f4ab8283-1fae-202f-bc86-2e3ee0e8f26d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6768-6",
            display:
              "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 136.69,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:460da8d6-9a31-31c3-d636-af7c497af085",
    resource: {
      resourceType: "Observation",
      id: "460da8d6-9a31-31c3-d636-af7c497af085",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1742-6",
            display:
              "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 31.669,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:73def88c-a905-5932-dbe1-b730453bc96b",
    resource: {
      resourceType: "Observation",
      id: "73def88c-a905-5932-dbe1-b730453bc96b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1920-8",
            display:
              "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 33.503,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:6e91905e-f493-59b3-2e1c-aaf71e9130ef",
    resource: {
      resourceType: "Observation",
      id: "6e91905e-f493-59b3-2e1c-aaf71e9130ef",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2093-3",
            display: "Total Cholesterol",
          },
        ],
        text: "Total Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 184.81,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:d4e3b381-0be1-a0c2-29dc-8dd61e8a7033",
    resource: {
      resourceType: "Observation",
      id: "d4e3b381-0be1-a0c2-29dc-8dd61e8a7033",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2571-8",
            display: "Triglycerides",
          },
        ],
        text: "Triglycerides",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 160.63,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:8d6951cd-fc71-fc46-24b0-e5901d6d826c",
    resource: {
      resourceType: "Observation",
      id: "8d6951cd-fc71-fc46-24b0-e5901d6d826c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "18262-6",
            display: "Low Density Lipoprotein Cholesterol",
          },
        ],
        text: "Low Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 106.62,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:97295f43-b8c2-0ef5-7e37-21378772b9ea",
    resource: {
      resourceType: "Observation",
      id: "97295f43-b8c2-0ef5-7e37-21378772b9ea",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2085-9",
            display: "High Density Lipoprotein Cholesterol",
          },
        ],
        text: "High Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 36.863,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:9b2250b3-a225-0809-d375-5ee78aef347b",
    resource: {
      resourceType: "Observation",
      id: "9b2250b3-a225-0809-d375-5ee78aef347b",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bodyheight",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "8302-2",
            display: "Body Height",
          },
        ],
        text: "Body Height",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      effectiveDateTime: "2015-02-27T01:40:58-05:00",
      issued: "2015-02-27T01:40:58.908-05:00",
      valueQuantity: {
        value: 180.6,
        unit: "cm",
        system: "http://unitsofmeasure.org",
        code: "cm",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:24f710bf-7684-1cbb-9d5f-521e84e3e76d",
    resource: {
      resourceType: "Observation",
      id: "24f710bf-7684-1cbb-9d5f-521e84e3e76d",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72514-3",
            display:
              "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          },
        ],
        text: "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      effectiveDateTime: "2015-02-27T01:40:58-05:00",
      issued: "2015-02-27T01:40:58.908-05:00",
      valueQuantity: {
        value: 4,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:3ef525dd-90f5-3145-c488-aa81b56f4970",
    resource: {
      resourceType: "Observation",
      id: "3ef525dd-90f5-3145-c488-aa81b56f4970",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bodyweight",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "29463-7",
            display: "Body Weight",
          },
        ],
        text: "Body Weight",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      effectiveDateTime: "2015-02-27T01:40:58-05:00",
      issued: "2015-02-27T01:40:58.908-05:00",
      valueQuantity: {
        value: 99.1,
        unit: "kg",
        system: "http://unitsofmeasure.org",
        code: "kg",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:fd1aec08-f4c4-d043-47b0-581b126dd32a",
    resource: {
      resourceType: "Observation",
      id: "fd1aec08-f4c4-d043-47b0-581b126dd32a",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bmi",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "39156-5",
            display: "Body Mass Index",
          },
        ],
        text: "Body Mass Index",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      effectiveDateTime: "2015-02-27T01:40:58-05:00",
      issued: "2015-02-27T01:40:58.908-05:00",
      valueQuantity: {
        value: 30.38,
        unit: "kg/m2",
        system: "http://unitsofmeasure.org",
        code: "kg/m2",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:bdd8b991-70a0-7ef7-5bd4-613ca9a549f4",
    resource: {
      resourceType: "Observation",
      id: "bdd8b991-70a0-7ef7-5bd4-613ca9a549f4",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bp",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "85354-9",
            display: "Blood Pressure",
          },
        ],
        text: "Blood Pressure",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      effectiveDateTime: "2015-02-27T01:40:58-05:00",
      issued: "2015-02-27T01:40:58.908-05:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "8462-4",
                display: "Diastolic Blood Pressure",
              },
            ],
            text: "Diastolic Blood Pressure",
          },
          valueQuantity: {
            value: 77,
            unit: "mm[Hg]",
            system: "http://unitsofmeasure.org",
            code: "mm[Hg]",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "8480-6",
                display: "Systolic Blood Pressure",
              },
            ],
            text: "Systolic Blood Pressure",
          },
          valueQuantity: {
            value: 117,
            unit: "mm[Hg]",
            system: "http://unitsofmeasure.org",
            code: "mm[Hg]",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:72d5e551-6dfd-196f-dabf-75d88ed9f298",
    resource: {
      resourceType: "Observation",
      id: "72d5e551-6dfd-196f-dabf-75d88ed9f298",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/heartrate",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "8867-4", display: "Heart rate" },
        ],
        text: "Heart rate",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      effectiveDateTime: "2015-02-27T01:40:58-05:00",
      issued: "2015-02-27T01:40:58.908-05:00",
      valueQuantity: {
        value: 70,
        unit: "/min",
        system: "http://unitsofmeasure.org",
        code: "/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:d0437c23-4544-4ce6-828b-e40f5ebdac5c",
    resource: {
      resourceType: "Observation",
      id: "d0437c23-4544-4ce6-828b-e40f5ebdac5c",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/resprate",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "9279-1",
            display: "Respiratory rate",
          },
        ],
        text: "Respiratory rate",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      effectiveDateTime: "2015-02-27T01:40:58-05:00",
      issued: "2015-02-27T01:40:58.908-05:00",
      valueQuantity: {
        value: 14,
        unit: "/min",
        system: "http://unitsofmeasure.org",
        code: "/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:3ea05995-3a74-d46a-9b88-c2082c87383f",
    resource: {
      resourceType: "Observation",
      id: "3ea05995-3a74-d46a-9b88-c2082c87383f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-smokingstatus",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72166-2",
            display: "Tobacco smoking status NHIS",
          },
        ],
        text: "Tobacco smoking status NHIS",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      effectiveDateTime: "2015-02-27T01:40:58-05:00",
      issued: "2015-02-27T01:40:58.908-05:00",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "8517006",
            display: "Former smoker",
          },
        ],
        text: "Former smoker",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:98d997dd-6277-5bbf-c367-610248203082",
    resource: {
      resourceType: "Observation",
      id: "98d997dd-6277-5bbf-c367-610248203082",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "93025-5",
            display:
              "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]",
          },
        ],
        text: "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      effectiveDateTime: "2015-02-27T02:39:07-05:00",
      issued: "2015-02-27T02:39:07.908-05:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "76501-6",
                display:
                  "In the past year, have you been afraid of your partner or ex-partner?",
              },
            ],
            text: "In the past year, have you been afraid of your partner or ex-partner?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93026-3",
                display:
                  "Do you feel physically and emotionally safe where you currently live?",
              },
            ],
            text: "Do you feel physically and emotionally safe where you currently live?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA33-6", display: "Yes" },
            ],
            text: "Yes",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93027-1",
                display: "Are you a refugee?",
              },
            ],
            text: "Are you a refugee?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93028-9",
                display:
                  "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?",
              },
            ],
            text: "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA33-6", display: "Yes" },
            ],
            text: "Yes",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93038-8",
                display:
                  "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?",
              },
            ],
            text: "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA6568-5",
                display: "Not at all",
              },
            ],
            text: "Not at all",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93029-7",
                display:
                  "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?",
              },
            ],
            text: "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30132-7",
                display: "5 or more times a week",
              },
            ],
            text: "5 or more times a week",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93030-5",
                display:
                  "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?",
              },
            ],
            text: "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93031-3",
                display:
                  "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?",
              },
            ],
            text: "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30122-8",
                display: "I choose not to answer this question",
              },
            ],
            text: "I choose not to answer this question",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "63586-2",
                display:
                  "During the past year, what was the total combined income for you and the family members you live with? This information will help us determine if you are eligible for any benefits.",
              },
            ],
            text: "During the past year, what was the total combined income for you and the family members you live with? This information will help us determine if you are eligible for any benefits.",
          },
          valueQuantity: {
            value: 67216,
            unit: "/a",
            system: "http://unitsofmeasure.org",
            code: "/a",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "76437-3",
                display: "What is your main insurance?",
              },
            ],
            text: "What is your main insurance?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA15652-3",
                display: "Medicare",
              },
            ],
            text: "Medicare",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "67875-5",
                display: "What is your current work situation?",
              },
            ],
            text: "What is your current work situation?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30138-4",
                display: "Part-time or temporary work",
              },
            ],
            text: "Part-time or temporary work",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "82589-3",
                display:
                  "What is the highest level of school that you have finished?",
              },
            ],
            text: "What is the highest level of school that you have finished?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30192-1",
                display: "High school diploma or GED",
              },
            ],
            text: "High school diploma or GED",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "56799-0",
                display: "What address do you live at?",
              },
            ],
            text: "What address do you live at?",
          },
          valueString: "898 Bernier Mews",
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93033-9",
                display: "Are you worried about losing your housing?",
              },
            ],
            text: "Are you worried about losing your housing?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "71802-3",
                display: "What is your housing situation today?",
              },
            ],
            text: "What is your housing situation today?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30189-7",
                display: "I have housing",
              },
            ],
            text: "I have housing",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "63512-8",
                display:
                  "How many family members, including yourself, do you currently live with?",
              },
            ],
            text: "How many family members, including yourself, do you currently live with?",
          },
          valueQuantity: {
            value: 5,
            unit: "{#}",
            system: "http://unitsofmeasure.org",
            code: "{#}",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "54899-0",
                display: "What language are you most comfortable speaking?",
              },
            ],
            text: "What language are you most comfortable speaking?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA43-5",
                display: "English",
              },
            ],
            text: "English",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93034-7",
                display:
                  "Have you been discharged from the armed forces of the United States?",
              },
            ],
            text: "Have you been discharged from the armed forces of the United States?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93035-4",
                display:
                  "At any point in the past 2 years, has season or migrant farm work been your or your family's main source of income?",
              },
            ],
            text: "At any point in the past 2 years, has season or migrant farm work been your or your family's main source of income?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "32624-9",
                display: "Which race(s) are you?",
              },
            ],
            text: "Which race(s) are you?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA4457-3",
                display: "White",
              },
            ],
            text: "White",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "56051-6",
                display: "Are you Hispanic or Latino?",
              },
            ],
            text: "Are you Hispanic or Latino?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:7fed8b09-5924-2c83-5c64-5dac5cbc7469",
    resource: {
      resourceType: "Observation",
      id: "7fed8b09-5924-2c83-5c64-5dac5cbc7469",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "55758-7",
            display:
              "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",
          },
        ],
        text: "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      effectiveDateTime: "2015-02-27T03:13:28-05:00",
      issued: "2015-02-27T03:13:28.908-05:00",
      valueQuantity: {
        value: 2,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:bce6bb79-f114-0992-0680-e1b34b960c42",
    resource: {
      resourceType: "Observation",
      id: "bce6bb79-f114-0992-0680-e1b34b960c42",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "75626-2",
            display: "Total score [AUDIT-C]",
          },
        ],
        text: "Total score [AUDIT-C]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      effectiveDateTime: "2015-02-27T03:49:08-05:00",
      issued: "2015-02-27T03:49:08.908-05:00",
      valueQuantity: {
        value: 2,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:4e7953f8-72d2-33bb-fef7-1160b692cfee",
    resource: {
      resourceType: "Observation",
      id: "4e7953f8-72d2-33bb-fef7-1160b692cfee",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2339-0", display: "Glucose" },
        ],
        text: "Glucose",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 69.75,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:3374f3f5-0cfb-74fa-56bd-c50c24835fca",
    resource: {
      resourceType: "Observation",
      id: "3374f3f5-0cfb-74fa-56bd-c50c24835fca",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6299-2",
            display: "Urea Nitrogen",
          },
        ],
        text: "Urea Nitrogen",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 9.48,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:f706b823-04f7-223c-9abb-7b66873a2d1e",
    resource: {
      resourceType: "Observation",
      id: "f706b823-04f7-223c-9abb-7b66873a2d1e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "38483-4",
            display: "Creatinine",
          },
        ],
        text: "Creatinine",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 3.1281,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:07827004-6248-470d-01b6-e446f70ff59a",
    resource: {
      resourceType: "Observation",
      id: "07827004-6248-470d-01b6-e446f70ff59a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "49765-1", display: "Calcium" },
        ],
        text: "Calcium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 9.28,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:e13c0cc7-0c1f-2064-8b0d-2f3e4b2ce206",
    resource: {
      resourceType: "Observation",
      id: "e13c0cc7-0c1f-2064-8b0d-2f3e4b2ce206",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2947-0", display: "Sodium" },
        ],
        text: "Sodium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 143.84,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:1f3748b6-ab85-a108-0ec8-42309076bb3d",
    resource: {
      resourceType: "Observation",
      id: "1f3748b6-ab85-a108-0ec8-42309076bb3d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "6298-4", display: "Potassium" },
        ],
        text: "Potassium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 3.98,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:79e5d1f5-72a5-582e-bac9-45284dbeeb7c",
    resource: {
      resourceType: "Observation",
      id: "79e5d1f5-72a5-582e-bac9-45284dbeeb7c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2069-3", display: "Chloride" },
        ],
        text: "Chloride",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 101.15,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:4690ec66-2932-9e67-c0ef-9764f0f8cfdc",
    resource: {
      resourceType: "Observation",
      id: "4690ec66-2932-9e67-c0ef-9764f0f8cfdc",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "20565-8",
            display: "Carbon Dioxide",
          },
        ],
        text: "Carbon Dioxide",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 21.43,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:6266beee-7863-2cb8-c811-81b696c51e1c",
    resource: {
      resourceType: "Observation",
      id: "6266beee-7863-2cb8-c811-81b696c51e1c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "33914-3",
            display: "Glomerular filtration rate/1.73 sq M.predicted",
          },
        ],
        text: "Glomerular filtration rate/1.73 sq M.predicted",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 66.677,
        unit: "mL/min",
        system: "http://unitsofmeasure.org",
        code: "mL/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:2ef2bfdd-2e94-820a-691d-3a0e9f2762a4",
    resource: {
      resourceType: "Observation",
      id: "2ef2bfdd-2e94-820a-691d-3a0e9f2762a4",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2885-2",
            display: "Protein [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Protein [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 71.298,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:964bf4a9-6628-bac4-280e-0c536c06dac6",
    resource: {
      resourceType: "Observation",
      id: "964bf4a9-6628-bac4-280e-0c536c06dac6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1751-7",
            display: "Albumin [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Albumin [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 3.8775,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:1abaf8de-5a66-beb6-86ca-bc71f86c2f46",
    resource: {
      resourceType: "Observation",
      id: "1abaf8de-5a66-beb6-86ca-bc71f86c2f46",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "10834-0",
            display: "Globulin [Mass/volume] in Serum by calculation",
          },
        ],
        text: "Globulin [Mass/volume] in Serum by calculation",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 2.1962,
        unit: "g/L",
        system: "http://unitsofmeasure.org",
        code: "g/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:1b450050-9a94-e938-f3bf-75b83681d31c",
    resource: {
      resourceType: "Observation",
      id: "1b450050-9a94-e938-f3bf-75b83681d31c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1975-2",
            display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Bilirubin.total [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 1.1794,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:83a8489a-f553-8f92-f056-db61d6750a78",
    resource: {
      resourceType: "Observation",
      id: "83a8489a-f553-8f92-f056-db61d6750a78",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6768-6",
            display:
              "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 89.26,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:9629adc5-46af-099e-319b-0e740db1de05",
    resource: {
      resourceType: "Observation",
      id: "9629adc5-46af-099e-319b-0e740db1de05",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1742-6",
            display:
              "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 24.671,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:d75a563f-90b7-20ac-1880-bcca7cd47e71",
    resource: {
      resourceType: "Observation",
      id: "d75a563f-90b7-20ac-1880-bcca7cd47e71",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1920-8",
            display:
              "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 27.388,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:0af7aa16-dae4-08a5-6ceb-8d6d7f4edc2d",
    resource: {
      resourceType: "Observation",
      id: "0af7aa16-dae4-08a5-6ceb-8d6d7f4edc2d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2093-3",
            display: "Total Cholesterol",
          },
        ],
        text: "Total Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 204.18,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:c4770967-0e6f-4772-179c-7e281a697771",
    resource: {
      resourceType: "Observation",
      id: "c4770967-0e6f-4772-179c-7e281a697771",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2571-8",
            display: "Triglycerides",
          },
        ],
        text: "Triglycerides",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 170.15,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:20f1f60d-d749-2e9e-d130-0659c632ac82",
    resource: {
      resourceType: "Observation",
      id: "20f1f60d-d749-2e9e-d130-0659c632ac82",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "18262-6",
            display: "Low Density Lipoprotein Cholesterol",
          },
        ],
        text: "Low Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 82.504,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:9a3ea4a0-d0b9-cb39-985b-130c4a600037",
    resource: {
      resourceType: "Observation",
      id: "9a3ea4a0-d0b9-cb39-985b-130c4a600037",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2085-9",
            display: "High Density Lipoprotein Cholesterol",
          },
        ],
        text: "High Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      valueQuantity: {
        value: 40.53,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:3a6e1b56-ee3e-699a-d35d-f627b223cd5f",
    resource: {
      resourceType: "Observation",
      id: "3a6e1b56-ee3e-699a-d35d-f627b223cd5f",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bodyheight",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "8302-2",
            display: "Body Height",
          },
        ],
        text: "Body Height",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueQuantity: {
        value: 180.6,
        unit: "cm",
        system: "http://unitsofmeasure.org",
        code: "cm",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:8c910da4-999b-896d-0436-e49b030d1514",
    resource: {
      resourceType: "Observation",
      id: "8c910da4-999b-896d-0436-e49b030d1514",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72514-3",
            display:
              "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          },
        ],
        text: "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueQuantity: {
        value: 1,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:3c204bfb-e59d-fd6c-b108-1b38ecb1f604",
    resource: {
      resourceType: "Observation",
      id: "3c204bfb-e59d-fd6c-b108-1b38ecb1f604",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bodyweight",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "29463-7",
            display: "Body Weight",
          },
        ],
        text: "Body Weight",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueQuantity: {
        value: 99.1,
        unit: "kg",
        system: "http://unitsofmeasure.org",
        code: "kg",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:8a86480f-9b94-ac66-a07e-b7566e40ad57",
    resource: {
      resourceType: "Observation",
      id: "8a86480f-9b94-ac66-a07e-b7566e40ad57",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bmi",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "39156-5",
            display: "Body Mass Index",
          },
        ],
        text: "Body Mass Index",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueQuantity: {
        value: 30.38,
        unit: "kg/m2",
        system: "http://unitsofmeasure.org",
        code: "kg/m2",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:2868cf89-a723-c8f0-dff0-372dc0314b08",
    resource: {
      resourceType: "Observation",
      id: "2868cf89-a723-c8f0-dff0-372dc0314b08",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bp",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "85354-9",
            display: "Blood Pressure",
          },
        ],
        text: "Blood Pressure",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "8462-4",
                display: "Diastolic Blood Pressure",
              },
            ],
            text: "Diastolic Blood Pressure",
          },
          valueQuantity: {
            value: 87,
            unit: "mm[Hg]",
            system: "http://unitsofmeasure.org",
            code: "mm[Hg]",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "8480-6",
                display: "Systolic Blood Pressure",
              },
            ],
            text: "Systolic Blood Pressure",
          },
          valueQuantity: {
            value: 137,
            unit: "mm[Hg]",
            system: "http://unitsofmeasure.org",
            code: "mm[Hg]",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:adbe8c3e-d08b-1f89-7eae-173d17a926a4",
    resource: {
      resourceType: "Observation",
      id: "adbe8c3e-d08b-1f89-7eae-173d17a926a4",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/heartrate",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "8867-4", display: "Heart rate" },
        ],
        text: "Heart rate",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueQuantity: {
        value: 93,
        unit: "/min",
        system: "http://unitsofmeasure.org",
        code: "/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:c2bfd3a4-5c80-a2fe-1c65-70ccb61a5c51",
    resource: {
      resourceType: "Observation",
      id: "c2bfd3a4-5c80-a2fe-1c65-70ccb61a5c51",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/resprate",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "9279-1",
            display: "Respiratory rate",
          },
        ],
        text: "Respiratory rate",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueQuantity: {
        value: 13,
        unit: "/min",
        system: "http://unitsofmeasure.org",
        code: "/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:c8d07981-60fc-db10-e6c1-6dd07aef9611",
    resource: {
      resourceType: "Observation",
      id: "c8d07981-60fc-db10-e6c1-6dd07aef9611",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2093-3",
            display: "Total Cholesterol",
          },
        ],
        text: "Total Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueQuantity: {
        value: 178.53,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:ba2799e4-840d-1953-2ea0-a5ee8354a548",
    resource: {
      resourceType: "Observation",
      id: "ba2799e4-840d-1953-2ea0-a5ee8354a548",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2571-8",
            display: "Triglycerides",
          },
        ],
        text: "Triglycerides",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueQuantity: {
        value: 134.52,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:69d58e58-bc99-9858-699a-b8e1f630b07b",
    resource: {
      resourceType: "Observation",
      id: "69d58e58-bc99-9858-699a-b8e1f630b07b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "18262-6",
            display: "Low Density Lipoprotein Cholesterol",
          },
        ],
        text: "Low Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueQuantity: {
        value: 80.65,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:4b178257-bb4b-e90e-7294-ba02606ef95a",
    resource: {
      resourceType: "Observation",
      id: "4b178257-bb4b-e90e-7294-ba02606ef95a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2085-9",
            display: "High Density Lipoprotein Cholesterol",
          },
        ],
        text: "High Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueQuantity: {
        value: 70.98,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:21eb5afd-ada4-5265-30f8-411bbbff7eff",
    resource: {
      resourceType: "Observation",
      id: "21eb5afd-ada4-5265-30f8-411bbbff7eff",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6690-2",
            display: "Leukocytes [#/volume] in Blood by Automated count",
          },
        ],
        text: "Leukocytes [#/volume] in Blood by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueQuantity: {
        value: 7.8092,
        unit: "10*3/uL",
        system: "http://unitsofmeasure.org",
        code: "10*3/uL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:1ecde5fd-cd13-0733-930a-3486a2c90078",
    resource: {
      resourceType: "Observation",
      id: "1ecde5fd-cd13-0733-930a-3486a2c90078",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "789-8",
            display: "Erythrocytes [#/volume] in Blood by Automated count",
          },
        ],
        text: "Erythrocytes [#/volume] in Blood by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueQuantity: {
        value: 4.4326,
        unit: "10*6/uL",
        system: "http://unitsofmeasure.org",
        code: "10*6/uL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:c7b883d9-79d4-565b-6a1b-a0784a5a2382",
    resource: {
      resourceType: "Observation",
      id: "c7b883d9-79d4-565b-6a1b-a0784a5a2382",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "718-7",
            display: "Hemoglobin [Mass/volume] in Blood",
          },
        ],
        text: "Hemoglobin [Mass/volume] in Blood",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueQuantity: {
        value: 16.173,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:0012c14b-bb9d-392b-3820-2f93bdbfc397",
    resource: {
      resourceType: "Observation",
      id: "0012c14b-bb9d-392b-3820-2f93bdbfc397",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "4544-3",
            display: "Hematocrit [Volume Fraction] of Blood by Automated count",
          },
        ],
        text: "Hematocrit [Volume Fraction] of Blood by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueQuantity: {
        value: 40.488,
        unit: "%",
        system: "http://unitsofmeasure.org",
        code: "%",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:839f9408-cb17-e406-32db-18c5acc2ad2b",
    resource: {
      resourceType: "Observation",
      id: "839f9408-cb17-e406-32db-18c5acc2ad2b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "787-2",
            display: "MCV [Entitic volume] by Automated count",
          },
        ],
        text: "MCV [Entitic volume] by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueQuantity: {
        value: 80.056,
        unit: "fL",
        system: "http://unitsofmeasure.org",
        code: "fL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:34b52ea9-8506-3d42-928c-9651e32f4931",
    resource: {
      resourceType: "Observation",
      id: "34b52ea9-8506-3d42-928c-9651e32f4931",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "785-6",
            display: "MCH [Entitic mass] by Automated count",
          },
        ],
        text: "MCH [Entitic mass] by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueQuantity: {
        value: 31.451,
        unit: "pg",
        system: "http://unitsofmeasure.org",
        code: "pg",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:df899fe2-44da-5e53-ee17-3a29a3edfce3",
    resource: {
      resourceType: "Observation",
      id: "df899fe2-44da-5e53-ee17-3a29a3edfce3",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "786-4",
            display: "MCHC [Mass/volume] by Automated count",
          },
        ],
        text: "MCHC [Mass/volume] by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueQuantity: {
        value: 35.29,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:2a4db0f4-eef3-8328-be35-b38052db41c3",
    resource: {
      resourceType: "Observation",
      id: "2a4db0f4-eef3-8328-be35-b38052db41c3",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "21000-5",
            display:
              "Erythrocyte distribution width [Entitic volume] by Automated count",
          },
        ],
        text: "Erythrocyte distribution width [Entitic volume] by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueQuantity: {
        value: 40.244,
        unit: "fL",
        system: "http://unitsofmeasure.org",
        code: "fL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:a772b768-dcb0-0bd5-c9ce-d99be9bab9dc",
    resource: {
      resourceType: "Observation",
      id: "a772b768-dcb0-0bd5-c9ce-d99be9bab9dc",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "777-3",
            display: "Platelets [#/volume] in Blood by Automated count",
          },
        ],
        text: "Platelets [#/volume] in Blood by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueQuantity: {
        value: 373.96,
        unit: "10*3/uL",
        system: "http://unitsofmeasure.org",
        code: "10*3/uL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:ac0f4dfc-bc6b-7471-efff-0fee0890c44d",
    resource: {
      resourceType: "Observation",
      id: "ac0f4dfc-bc6b-7471-efff-0fee0890c44d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "32207-3",
            display:
              "Platelet distribution width [Entitic volume] in Blood by Automated count",
          },
        ],
        text: "Platelet distribution width [Entitic volume] in Blood by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueQuantity: {
        value: 506.34,
        unit: "fL",
        system: "http://unitsofmeasure.org",
        code: "fL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:232228da-4789-6741-8e4b-57662c625607",
    resource: {
      resourceType: "Observation",
      id: "232228da-4789-6741-8e4b-57662c625607",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "32623-1",
            display:
              "Platelet mean volume [Entitic volume] in Blood by Automated count",
          },
        ],
        text: "Platelet mean volume [Entitic volume] in Blood by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueQuantity: {
        value: 11.032,
        unit: "fL",
        system: "http://unitsofmeasure.org",
        code: "fL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:06b17908-4f1d-4d15-43e3-a102e1131ad5",
    resource: {
      resourceType: "Observation",
      id: "06b17908-4f1d-4d15-43e3-a102e1131ad5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-smokingstatus",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72166-2",
            display: "Tobacco smoking status NHIS",
          },
        ],
        text: "Tobacco smoking status NHIS",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "8517006",
            display: "Former smoker",
          },
        ],
        text: "Former smoker",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:14b89323-0ecf-fff2-831f-35aa0816229c",
    resource: {
      resourceType: "Observation",
      id: "14b89323-0ecf-fff2-831f-35aa0816229c",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "93025-5",
            display:
              "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]",
          },
        ],
        text: "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T02:17:53-05:00",
      issued: "2016-03-04T02:17:53.908-05:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "76501-6",
                display:
                  "In the past year, have you been afraid of your partner or ex-partner?",
              },
            ],
            text: "In the past year, have you been afraid of your partner or ex-partner?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93026-3",
                display:
                  "Do you feel physically and emotionally safe where you currently live?",
              },
            ],
            text: "Do you feel physically and emotionally safe where you currently live?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA33-6", display: "Yes" },
            ],
            text: "Yes",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93027-1",
                display: "Are you a refugee?",
              },
            ],
            text: "Are you a refugee?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93028-9",
                display:
                  "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?",
              },
            ],
            text: "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA33-6", display: "Yes" },
            ],
            text: "Yes",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93038-8",
                display:
                  "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?",
              },
            ],
            text: "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA13902-4",
                display: "Quite a bit",
              },
            ],
            text: "Quite a bit",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93029-7",
                display:
                  "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?",
              },
            ],
            text: "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30132-7",
                display: "5 or more times a week",
              },
            ],
            text: "5 or more times a week",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93030-5",
                display:
                  "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?",
              },
            ],
            text: "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93031-3",
                display:
                  "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?",
              },
            ],
            text: "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30122-8",
                display: "I choose not to answer this question",
              },
            ],
            text: "I choose not to answer this question",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "63586-2",
                display:
                  "During the past year, what was the total combined income for you and the family members you live with? This information will help us determine if you are eligible for any benefits.",
              },
            ],
            text: "During the past year, what was the total combined income for you and the family members you live with? This information will help us determine if you are eligible for any benefits.",
          },
          valueQuantity: {
            value: 67216,
            unit: "/a",
            system: "http://unitsofmeasure.org",
            code: "/a",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "76437-3",
                display: "What is your main insurance?",
              },
            ],
            text: "What is your main insurance?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA15652-3",
                display: "Medicare",
              },
            ],
            text: "Medicare",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "67875-5",
                display: "What is your current work situation?",
              },
            ],
            text: "What is your current work situation?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30136-8",
                display: "Full-time work",
              },
            ],
            text: "Full-time work",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "82589-3",
                display:
                  "What is the highest level of school that you have finished?",
              },
            ],
            text: "What is the highest level of school that you have finished?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30192-1",
                display: "High school diploma or GED",
              },
            ],
            text: "High school diploma or GED",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "56799-0",
                display: "What address do you live at?",
              },
            ],
            text: "What address do you live at?",
          },
          valueString: "898 Bernier Mews",
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93033-9",
                display: "Are you worried about losing your housing?",
              },
            ],
            text: "Are you worried about losing your housing?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "71802-3",
                display: "What is your housing situation today?",
              },
            ],
            text: "What is your housing situation today?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30189-7",
                display: "I have housing",
              },
            ],
            text: "I have housing",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "63512-8",
                display:
                  "How many family members, including yourself, do you currently live with?",
              },
            ],
            text: "How many family members, including yourself, do you currently live with?",
          },
          valueQuantity: {
            value: 5,
            unit: "{#}",
            system: "http://unitsofmeasure.org",
            code: "{#}",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "54899-0",
                display: "What language are you most comfortable speaking?",
              },
            ],
            text: "What language are you most comfortable speaking?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA43-5",
                display: "English",
              },
            ],
            text: "English",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93034-7",
                display:
                  "Have you been discharged from the armed forces of the United States?",
              },
            ],
            text: "Have you been discharged from the armed forces of the United States?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93035-4",
                display:
                  "At any point in the past 2 years, has season or migrant farm work been your or your family's main source of income?",
              },
            ],
            text: "At any point in the past 2 years, has season or migrant farm work been your or your family's main source of income?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "32624-9",
                display: "Which race(s) are you?",
              },
            ],
            text: "Which race(s) are you?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA4457-3",
                display: "White",
              },
            ],
            text: "White",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "56051-6",
                display: "Are you Hispanic or Latino?",
              },
            ],
            text: "Are you Hispanic or Latino?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:56bccd4c-db9b-83f0-c9b7-47387e259ee4",
    resource: {
      resourceType: "Observation",
      id: "56bccd4c-db9b-83f0-c9b7-47387e259ee4",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "75626-2",
            display: "Total score [AUDIT-C]",
          },
        ],
        text: "Total score [AUDIT-C]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T02:54:03-05:00",
      issued: "2016-03-04T02:54:03.908-05:00",
      valueQuantity: {
        value: 0,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:ec8bb500-fabd-55c2-dafe-080eb8678082",
    resource: {
      resourceType: "Observation",
      id: "ec8bb500-fabd-55c2-dafe-080eb8678082",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2339-0", display: "Glucose" },
        ],
        text: "Glucose",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 66.98,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:ab99156a-783f-e57a-a399-ad6c6077223b",
    resource: {
      resourceType: "Observation",
      id: "ab99156a-783f-e57a-a399-ad6c6077223b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6299-2",
            display: "Urea Nitrogen",
          },
        ],
        text: "Urea Nitrogen",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 17.29,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:615cf710-3301-eee7-0419-72ad1c3b19c5",
    resource: {
      resourceType: "Observation",
      id: "615cf710-3301-eee7-0419-72ad1c3b19c5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "38483-4",
            display: "Creatinine",
          },
        ],
        text: "Creatinine",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 3.2314,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:e0c85322-36a3-70a4-b322-df01a5925ef6",
    resource: {
      resourceType: "Observation",
      id: "e0c85322-36a3-70a4-b322-df01a5925ef6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "49765-1", display: "Calcium" },
        ],
        text: "Calcium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 9.63,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:5e06fa85-d90f-e5d2-52a3-1c4639873b34",
    resource: {
      resourceType: "Observation",
      id: "5e06fa85-d90f-e5d2-52a3-1c4639873b34",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2947-0", display: "Sodium" },
        ],
        text: "Sodium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 137.28,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:5a79120c-f13e-e03b-1b7c-f04cb0d3ea37",
    resource: {
      resourceType: "Observation",
      id: "5a79120c-f13e-e03b-1b7c-f04cb0d3ea37",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "6298-4", display: "Potassium" },
        ],
        text: "Potassium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 4.99,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:6a4b9de9-2d61-a0b9-ba0c-777f160a0312",
    resource: {
      resourceType: "Observation",
      id: "6a4b9de9-2d61-a0b9-ba0c-777f160a0312",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2069-3", display: "Chloride" },
        ],
        text: "Chloride",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 101.59,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:d349d05b-64a7-51d8-b293-74a926d8ed73",
    resource: {
      resourceType: "Observation",
      id: "d349d05b-64a7-51d8-b293-74a926d8ed73",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "20565-8",
            display: "Carbon Dioxide",
          },
        ],
        text: "Carbon Dioxide",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 23.24,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:f7e80fb0-2737-c8ba-827a-4a11d2efe729",
    resource: {
      resourceType: "Observation",
      id: "f7e80fb0-2737-c8ba-827a-4a11d2efe729",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "33914-3",
            display: "Glomerular filtration rate/1.73 sq M.predicted",
          },
        ],
        text: "Glomerular filtration rate/1.73 sq M.predicted",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 82.415,
        unit: "mL/min",
        system: "http://unitsofmeasure.org",
        code: "mL/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:fc24e76d-7e9e-f03b-0d7e-efccd7bc5de6",
    resource: {
      resourceType: "Observation",
      id: "fc24e76d-7e9e-f03b-0d7e-efccd7bc5de6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2885-2",
            display: "Protein [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Protein [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 67.867,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:d2eb58c8-b7e1-4254-adac-7b4d450da146",
    resource: {
      resourceType: "Observation",
      id: "d2eb58c8-b7e1-4254-adac-7b4d450da146",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1751-7",
            display: "Albumin [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Albumin [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 5.2526,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:5d653e5a-c113-f3c4-378b-0c3e7fb3310f",
    resource: {
      resourceType: "Observation",
      id: "5d653e5a-c113-f3c4-378b-0c3e7fb3310f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "10834-0",
            display: "Globulin [Mass/volume] in Serum by calculation",
          },
        ],
        text: "Globulin [Mass/volume] in Serum by calculation",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 2.174,
        unit: "g/L",
        system: "http://unitsofmeasure.org",
        code: "g/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:e163b712-94d9-b5ec-4aa1-32923cbb2bba",
    resource: {
      resourceType: "Observation",
      id: "e163b712-94d9-b5ec-4aa1-32923cbb2bba",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1975-2",
            display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Bilirubin.total [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 1.1813,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:73eecc6d-f8cf-32fa-865d-21d8b64aa132",
    resource: {
      resourceType: "Observation",
      id: "73eecc6d-f8cf-32fa-865d-21d8b64aa132",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6768-6",
            display:
              "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 104.19,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:186cc7e5-7700-a84a-760d-45d4ca61cddb",
    resource: {
      resourceType: "Observation",
      id: "186cc7e5-7700-a84a-760d-45d4ca61cddb",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1742-6",
            display:
              "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 58.759,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:06e4eba5-9834-4308-d0f5-0c4cd87a81d5",
    resource: {
      resourceType: "Observation",
      id: "06e4eba5-9834-4308-d0f5-0c4cd87a81d5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1920-8",
            display:
              "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 16.553,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:83e88284-836b-2319-af03-f8209d0f3881",
    resource: {
      resourceType: "Observation",
      id: "83e88284-836b-2319-af03-f8209d0f3881",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2093-3",
            display: "Total Cholesterol",
          },
        ],
        text: "Total Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 175.25,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:dde87b34-f0b5-283b-8c82-519e4dfda443",
    resource: {
      resourceType: "Observation",
      id: "dde87b34-f0b5-283b-8c82-519e4dfda443",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2571-8",
            display: "Triglycerides",
          },
        ],
        text: "Triglycerides",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 165.14,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:dd6d02b1-e091-ed6a-f868-0813309fb289",
    resource: {
      resourceType: "Observation",
      id: "dd6d02b1-e091-ed6a-f868-0813309fb289",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "18262-6",
            display: "Low Density Lipoprotein Cholesterol",
          },
        ],
        text: "Low Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 87.19,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:5307d201-77db-9685-f747-98a466a24c0c",
    resource: {
      resourceType: "Observation",
      id: "5307d201-77db-9685-f747-98a466a24c0c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2085-9",
            display: "High Density Lipoprotein Cholesterol",
          },
        ],
        text: "High Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 33.214,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:52d735e8-1813-98e0-8b6b-1417443ebdf8",
    resource: {
      resourceType: "Observation",
      id: "52d735e8-1813-98e0-8b6b-1417443ebdf8",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bodyheight",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "8302-2",
            display: "Body Height",
          },
        ],
        text: "Body Height",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T01:40:58-05:00",
      issued: "2017-03-10T01:40:58.908-05:00",
      valueQuantity: {
        value: 180.6,
        unit: "cm",
        system: "http://unitsofmeasure.org",
        code: "cm",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:68935344-a956-8c2a-2361-8c00c2e91664",
    resource: {
      resourceType: "Observation",
      id: "68935344-a956-8c2a-2361-8c00c2e91664",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72514-3",
            display:
              "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          },
        ],
        text: "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T01:40:58-05:00",
      issued: "2017-03-10T01:40:58.908-05:00",
      valueQuantity: {
        value: 2,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:fe8814ae-cece-e01a-f10d-013188e35e33",
    resource: {
      resourceType: "Observation",
      id: "fe8814ae-cece-e01a-f10d-013188e35e33",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bodyweight",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "29463-7",
            display: "Body Weight",
          },
        ],
        text: "Body Weight",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T01:40:58-05:00",
      issued: "2017-03-10T01:40:58.908-05:00",
      valueQuantity: {
        value: 99.1,
        unit: "kg",
        system: "http://unitsofmeasure.org",
        code: "kg",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:08dd85b8-4676-ecaf-2e29-75af0fc13179",
    resource: {
      resourceType: "Observation",
      id: "08dd85b8-4676-ecaf-2e29-75af0fc13179",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bmi",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "39156-5",
            display: "Body Mass Index",
          },
        ],
        text: "Body Mass Index",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T01:40:58-05:00",
      issued: "2017-03-10T01:40:58.908-05:00",
      valueQuantity: {
        value: 30.38,
        unit: "kg/m2",
        system: "http://unitsofmeasure.org",
        code: "kg/m2",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:9ecc1337-af23-df0d-dc2f-708d9902edd2",
    resource: {
      resourceType: "Observation",
      id: "9ecc1337-af23-df0d-dc2f-708d9902edd2",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bp",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "85354-9",
            display: "Blood Pressure",
          },
        ],
        text: "Blood Pressure",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T01:40:58-05:00",
      issued: "2017-03-10T01:40:58.908-05:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "8462-4",
                display: "Diastolic Blood Pressure",
              },
            ],
            text: "Diastolic Blood Pressure",
          },
          valueQuantity: {
            value: 76,
            unit: "mm[Hg]",
            system: "http://unitsofmeasure.org",
            code: "mm[Hg]",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "8480-6",
                display: "Systolic Blood Pressure",
              },
            ],
            text: "Systolic Blood Pressure",
          },
          valueQuantity: {
            value: 124,
            unit: "mm[Hg]",
            system: "http://unitsofmeasure.org",
            code: "mm[Hg]",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:fa09943c-18ed-c15b-b5e6-3211be8fd6eb",
    resource: {
      resourceType: "Observation",
      id: "fa09943c-18ed-c15b-b5e6-3211be8fd6eb",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/heartrate",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "8867-4", display: "Heart rate" },
        ],
        text: "Heart rate",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T01:40:58-05:00",
      issued: "2017-03-10T01:40:58.908-05:00",
      valueQuantity: {
        value: 99,
        unit: "/min",
        system: "http://unitsofmeasure.org",
        code: "/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:d9496e3d-8e35-9cee-badc-94f8010f7f47",
    resource: {
      resourceType: "Observation",
      id: "d9496e3d-8e35-9cee-badc-94f8010f7f47",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/resprate",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "9279-1",
            display: "Respiratory rate",
          },
        ],
        text: "Respiratory rate",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T01:40:58-05:00",
      issued: "2017-03-10T01:40:58.908-05:00",
      valueQuantity: {
        value: 14,
        unit: "/min",
        system: "http://unitsofmeasure.org",
        code: "/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:fd1e4896-0de9-1aa6-147e-310f876a7940",
    resource: {
      resourceType: "Observation",
      id: "fd1e4896-0de9-1aa6-147e-310f876a7940",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-smokingstatus",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72166-2",
            display: "Tobacco smoking status NHIS",
          },
        ],
        text: "Tobacco smoking status NHIS",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T01:40:58-05:00",
      issued: "2017-03-10T01:40:58.908-05:00",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "8517006",
            display: "Former smoker",
          },
        ],
        text: "Former smoker",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:f87f0330-4fb5-4598-e1bf-930de0b6944a",
    resource: {
      resourceType: "Observation",
      id: "f87f0330-4fb5-4598-e1bf-930de0b6944a",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "93025-5",
            display:
              "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]",
          },
        ],
        text: "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T02:25:37-05:00",
      issued: "2017-03-10T02:25:37.908-05:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "76501-6",
                display:
                  "In the past year, have you been afraid of your partner or ex-partner?",
              },
            ],
            text: "In the past year, have you been afraid of your partner or ex-partner?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93026-3",
                display:
                  "Do you feel physically and emotionally safe where you currently live?",
              },
            ],
            text: "Do you feel physically and emotionally safe where you currently live?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93027-1",
                display: "Are you a refugee?",
              },
            ],
            text: "Are you a refugee?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93028-9",
                display:
                  "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?",
              },
            ],
            text: "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA33-6", display: "Yes" },
            ],
            text: "Yes",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93038-8",
                display:
                  "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?",
              },
            ],
            text: "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA13863-8",
                display: "A little bit",
              },
            ],
            text: "A little bit",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93029-7",
                display:
                  "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?",
              },
            ],
            text: "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30131-9",
                display: "3 to 5 times a week",
              },
            ],
            text: "3 to 5 times a week",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93030-5",
                display:
                  "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?",
              },
            ],
            text: "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93031-3",
                display:
                  "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?",
              },
            ],
            text: "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30122-8",
                display: "I choose not to answer this question",
              },
            ],
            text: "I choose not to answer this question",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "63586-2",
                display:
                  "During the past year, what was the total combined income for you and the family members you live with? This information will help us determine if you are eligible for any benefits.",
              },
            ],
            text: "During the past year, what was the total combined income for you and the family members you live with? This information will help us determine if you are eligible for any benefits.",
          },
          valueQuantity: {
            value: 67216,
            unit: "/a",
            system: "http://unitsofmeasure.org",
            code: "/a",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "76437-3",
                display: "What is your main insurance?",
              },
            ],
            text: "What is your main insurance?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA15652-3",
                display: "Medicare",
              },
            ],
            text: "Medicare",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "67875-5",
                display: "What is your current work situation?",
              },
            ],
            text: "What is your current work situation?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30136-8",
                display: "Full-time work",
              },
            ],
            text: "Full-time work",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "82589-3",
                display:
                  "What is the highest level of school that you have finished?",
              },
            ],
            text: "What is the highest level of school that you have finished?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30192-1",
                display: "High school diploma or GED",
              },
            ],
            text: "High school diploma or GED",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "56799-0",
                display: "What address do you live at?",
              },
            ],
            text: "What address do you live at?",
          },
          valueString: "898 Bernier Mews",
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93033-9",
                display: "Are you worried about losing your housing?",
              },
            ],
            text: "Are you worried about losing your housing?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "71802-3",
                display: "What is your housing situation today?",
              },
            ],
            text: "What is your housing situation today?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30189-7",
                display: "I have housing",
              },
            ],
            text: "I have housing",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "63512-8",
                display:
                  "How many family members, including yourself, do you currently live with?",
              },
            ],
            text: "How many family members, including yourself, do you currently live with?",
          },
          valueQuantity: {
            value: 5,
            unit: "{#}",
            system: "http://unitsofmeasure.org",
            code: "{#}",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "54899-0",
                display: "What language are you most comfortable speaking?",
              },
            ],
            text: "What language are you most comfortable speaking?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA43-5",
                display: "English",
              },
            ],
            text: "English",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93034-7",
                display:
                  "Have you been discharged from the armed forces of the United States?",
              },
            ],
            text: "Have you been discharged from the armed forces of the United States?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93035-4",
                display:
                  "At any point in the past 2 years, has season or migrant farm work been your or your family's main source of income?",
              },
            ],
            text: "At any point in the past 2 years, has season or migrant farm work been your or your family's main source of income?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "32624-9",
                display: "Which race(s) are you?",
              },
            ],
            text: "Which race(s) are you?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA4457-3",
                display: "White",
              },
            ],
            text: "White",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "56051-6",
                display: "Are you Hispanic or Latino?",
              },
            ],
            text: "Are you Hispanic or Latino?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:7417e47f-51d0-53ed-cab5-9da0b3532a7f",
    resource: {
      resourceType: "Observation",
      id: "7417e47f-51d0-53ed-cab5-9da0b3532a7f",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "70274-6",
            display:
              "Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]",
          },
        ],
        text: "Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T02:51:14-05:00",
      issued: "2017-03-10T02:51:14.908-05:00",
      valueQuantity: {
        value: 14,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:18ac32b1-281c-9a09-f619-67c48d3e4257",
    resource: {
      resourceType: "Observation",
      id: "18ac32b1-281c-9a09-f619-67c48d3e4257",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59460-6",
            display: "Fall risk total [Morse Fall Scale]",
          },
        ],
        text: "Fall risk total [Morse Fall Scale]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T03:14:38-05:00",
      issued: "2017-03-10T03:14:38.908-05:00",
      valueQuantity: {
        value: 6,
        unit: "{#}",
        system: "http://unitsofmeasure.org",
        code: "{#}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:d85bac24-3be5-0bef-88fb-2c553af388b6",
    resource: {
      resourceType: "Observation",
      id: "d85bac24-3be5-0bef-88fb-2c553af388b6",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59461-4",
            display: "Fall risk level [Morse Fall Scale]",
          },
        ],
        text: "Fall risk level [Morse Fall Scale]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T03:14:38-05:00",
      issued: "2017-03-10T03:14:38.908-05:00",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://loinc.org",
            code: "LA13038-7",
            display: "Low Risk (MFS Score 0 - 24)",
          },
        ],
        text: "Low Risk (MFS Score 0 - 24)",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:33e29318-3495-f0e3-81fc-1ee31fb2672b",
    resource: {
      resourceType: "Observation",
      id: "33e29318-3495-f0e3-81fc-1ee31fb2672b",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "76504-0",
            display: "Total score [HARK]",
          },
        ],
        text: "Total score [HARK]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T03:45:18-05:00",
      issued: "2017-03-10T03:45:18.908-05:00",
      valueQuantity: {
        value: 0,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:472240a4-12da-ad50-de90-39ca8418ba76",
    resource: {
      resourceType: "Observation",
      id: "472240a4-12da-ad50-de90-39ca8418ba76",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "55758-7",
            display:
              "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",
          },
        ],
        text: "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T04:17:19-05:00",
      issued: "2017-03-10T04:17:19.908-05:00",
      valueQuantity: {
        value: 1,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:8bf6b432-0baf-29d0-4fc3-80c137ae33e8",
    resource: {
      resourceType: "Observation",
      id: "8bf6b432-0baf-29d0-4fc3-80c137ae33e8",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bodytemp",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "8310-5",
            display: "Body temperature",
          },
          {
            system: "http://loinc.org",
            code: "8331-1",
            display: "Oral temperature",
          },
        ],
        text: "Body temperature",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:9ccbf5a3-78c2-dd31-5e05-6ad80a34e923" },
      effectiveDateTime: "2017-06-07T13:40:58-04:00",
      issued: "2017-06-07T13:40:58.908-04:00",
      valueQuantity: {
        value: 37.933,
        unit: "Cel",
        system: "http://unitsofmeasure.org",
        code: "Cel",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:f93a3d5c-1103-006d-d630-8ccd97fa81a5",
    resource: {
      resourceType: "Observation",
      id: "f93a3d5c-1103-006d-d630-8ccd97fa81a5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2339-0", display: "Glucose" },
        ],
        text: "Glucose",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 71.24,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:3af41d67-f5ce-983c-1abd-36ee144201e6",
    resource: {
      resourceType: "Observation",
      id: "3af41d67-f5ce-983c-1abd-36ee144201e6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6299-2",
            display: "Urea Nitrogen",
          },
        ],
        text: "Urea Nitrogen",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 18.26,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:e70423b7-c443-18ed-ca17-74b53556b1f6",
    resource: {
      resourceType: "Observation",
      id: "e70423b7-c443-18ed-ca17-74b53556b1f6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "38483-4",
            display: "Creatinine",
          },
        ],
        text: "Creatinine",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 2.8246,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:12922f9c-58d2-e98c-3bae-7840b920d1d3",
    resource: {
      resourceType: "Observation",
      id: "12922f9c-58d2-e98c-3bae-7840b920d1d3",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "49765-1", display: "Calcium" },
        ],
        text: "Calcium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 8.89,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:bdb68166-0ff1-ab08-318b-5e85b42435c5",
    resource: {
      resourceType: "Observation",
      id: "bdb68166-0ff1-ab08-318b-5e85b42435c5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2947-0", display: "Sodium" },
        ],
        text: "Sodium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 136.77,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:a5ceff61-1945-cc17-dd7b-ff60661cd6e7",
    resource: {
      resourceType: "Observation",
      id: "a5ceff61-1945-cc17-dd7b-ff60661cd6e7",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "6298-4", display: "Potassium" },
        ],
        text: "Potassium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 4.93,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:27af5600-cb04-f756-2b92-2ae9a4b567e6",
    resource: {
      resourceType: "Observation",
      id: "27af5600-cb04-f756-2b92-2ae9a4b567e6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2069-3", display: "Chloride" },
        ],
        text: "Chloride",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 103.07,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:d5b6675b-2226-bfb3-82c8-e810608bf208",
    resource: {
      resourceType: "Observation",
      id: "d5b6675b-2226-bfb3-82c8-e810608bf208",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "20565-8",
            display: "Carbon Dioxide",
          },
        ],
        text: "Carbon Dioxide",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 26.1,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:7786bdd7-30eb-2f0e-6fa6-88620974be70",
    resource: {
      resourceType: "Observation",
      id: "7786bdd7-30eb-2f0e-6fa6-88620974be70",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "33914-3",
            display: "Glomerular filtration rate/1.73 sq M.predicted",
          },
        ],
        text: "Glomerular filtration rate/1.73 sq M.predicted",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 75.398,
        unit: "mL/min",
        system: "http://unitsofmeasure.org",
        code: "mL/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:dac6f623-24e9-1b1e-12cb-a52abf2c0f9f",
    resource: {
      resourceType: "Observation",
      id: "dac6f623-24e9-1b1e-12cb-a52abf2c0f9f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2885-2",
            display: "Protein [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Protein [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 74.935,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:b92a5469-92b2-6491-53cc-59c1bfab6f3e",
    resource: {
      resourceType: "Observation",
      id: "b92a5469-92b2-6491-53cc-59c1bfab6f3e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1751-7",
            display: "Albumin [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Albumin [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 5.2469,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:ff50f8c5-055a-8477-f0b2-4f1edc5f941a",
    resource: {
      resourceType: "Observation",
      id: "ff50f8c5-055a-8477-f0b2-4f1edc5f941a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "10834-0",
            display: "Globulin [Mass/volume] in Serum by calculation",
          },
        ],
        text: "Globulin [Mass/volume] in Serum by calculation",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 2.8906,
        unit: "g/L",
        system: "http://unitsofmeasure.org",
        code: "g/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:a51266f1-3e0e-0be0-915b-6cafa7c8246f",
    resource: {
      resourceType: "Observation",
      id: "a51266f1-3e0e-0be0-915b-6cafa7c8246f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1975-2",
            display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Bilirubin.total [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 0.76873,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:b1bc5541-d1af-f9c3-24d2-426cc5dad868",
    resource: {
      resourceType: "Observation",
      id: "b1bc5541-d1af-f9c3-24d2-426cc5dad868",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6768-6",
            display:
              "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 81.619,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:d0faf6d7-c25c-0b21-6afa-802a5717c0e6",
    resource: {
      resourceType: "Observation",
      id: "d0faf6d7-c25c-0b21-6afa-802a5717c0e6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1742-6",
            display:
              "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 38.906,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:56bf350e-8efb-6969-a7bd-0e2ae0d4b680",
    resource: {
      resourceType: "Observation",
      id: "56bf350e-8efb-6969-a7bd-0e2ae0d4b680",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1920-8",
            display:
              "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 37.791,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:bcca8c3a-de0b-5b1e-eb84-9afca92234ca",
    resource: {
      resourceType: "Observation",
      id: "bcca8c3a-de0b-5b1e-eb84-9afca92234ca",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2093-3",
            display: "Total Cholesterol",
          },
        ],
        text: "Total Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 160.43,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:7acf7f95-288b-dab6-0894-b2830a0c25da",
    resource: {
      resourceType: "Observation",
      id: "7acf7f95-288b-dab6-0894-b2830a0c25da",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2571-8",
            display: "Triglycerides",
          },
        ],
        text: "Triglycerides",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 192.3,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:c590d86e-8906-37c5-72d2-b24e5b1d6207",
    resource: {
      resourceType: "Observation",
      id: "c590d86e-8906-37c5-72d2-b24e5b1d6207",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "18262-6",
            display: "Low Density Lipoprotein Cholesterol",
          },
        ],
        text: "Low Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 82.352,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:e15924af-5efa-265a-b939-2f325134e7f4",
    resource: {
      resourceType: "Observation",
      id: "e15924af-5efa-265a-b939-2f325134e7f4",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2085-9",
            display: "High Density Lipoprotein Cholesterol",
          },
        ],
        text: "High Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 42.199,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:ac760864-3be7-b37a-03e4-27ac847fdd9f",
    resource: {
      resourceType: "Observation",
      id: "ac760864-3be7-b37a-03e4-27ac847fdd9f",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bodyheight",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "8302-2",
            display: "Body Height",
          },
        ],
        text: "Body Height",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      effectiveDateTime: "2018-03-16T02:40:58-04:00",
      issued: "2018-03-16T02:40:58.908-04:00",
      valueQuantity: {
        value: 180.6,
        unit: "cm",
        system: "http://unitsofmeasure.org",
        code: "cm",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:618cc8de-0568-c913-0b9c-3cc5cd2bad9c",
    resource: {
      resourceType: "Observation",
      id: "618cc8de-0568-c913-0b9c-3cc5cd2bad9c",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72514-3",
            display:
              "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          },
        ],
        text: "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      effectiveDateTime: "2018-03-16T02:40:58-04:00",
      issued: "2018-03-16T02:40:58.908-04:00",
      valueQuantity: {
        value: 4,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:bca6eb61-b945-a7a5-e866-1ee5d590774f",
    resource: {
      resourceType: "Observation",
      id: "bca6eb61-b945-a7a5-e866-1ee5d590774f",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bodyweight",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "29463-7",
            display: "Body Weight",
          },
        ],
        text: "Body Weight",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      effectiveDateTime: "2018-03-16T02:40:58-04:00",
      issued: "2018-03-16T02:40:58.908-04:00",
      valueQuantity: {
        value: 98,
        unit: "kg",
        system: "http://unitsofmeasure.org",
        code: "kg",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:a0c1673c-bdeb-ae2b-ee17-be25210586f2",
    resource: {
      resourceType: "Observation",
      id: "a0c1673c-bdeb-ae2b-ee17-be25210586f2",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bmi",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "39156-5",
            display: "Body Mass Index",
          },
        ],
        text: "Body Mass Index",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      effectiveDateTime: "2018-03-16T02:40:58-04:00",
      issued: "2018-03-16T02:40:58.908-04:00",
      valueQuantity: {
        value: 30.05,
        unit: "kg/m2",
        system: "http://unitsofmeasure.org",
        code: "kg/m2",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:43142716-2d24-d4fb-e36e-6b8958b29541",
    resource: {
      resourceType: "Observation",
      id: "43142716-2d24-d4fb-e36e-6b8958b29541",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bp",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "85354-9",
            display: "Blood Pressure",
          },
        ],
        text: "Blood Pressure",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      effectiveDateTime: "2018-03-16T02:40:58-04:00",
      issued: "2018-03-16T02:40:58.908-04:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "8462-4",
                display: "Diastolic Blood Pressure",
              },
            ],
            text: "Diastolic Blood Pressure",
          },
          valueQuantity: {
            value: 77,
            unit: "mm[Hg]",
            system: "http://unitsofmeasure.org",
            code: "mm[Hg]",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "8480-6",
                display: "Systolic Blood Pressure",
              },
            ],
            text: "Systolic Blood Pressure",
          },
          valueQuantity: {
            value: 133,
            unit: "mm[Hg]",
            system: "http://unitsofmeasure.org",
            code: "mm[Hg]",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:2d7f1b65-760c-c12b-bf03-f297e156a381",
    resource: {
      resourceType: "Observation",
      id: "2d7f1b65-760c-c12b-bf03-f297e156a381",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/heartrate",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "8867-4", display: "Heart rate" },
        ],
        text: "Heart rate",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      effectiveDateTime: "2018-03-16T02:40:58-04:00",
      issued: "2018-03-16T02:40:58.908-04:00",
      valueQuantity: {
        value: 75,
        unit: "/min",
        system: "http://unitsofmeasure.org",
        code: "/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:f9918024-e1b9-2a30-5983-382e45d213c3",
    resource: {
      resourceType: "Observation",
      id: "f9918024-e1b9-2a30-5983-382e45d213c3",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/resprate",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "9279-1",
            display: "Respiratory rate",
          },
        ],
        text: "Respiratory rate",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      effectiveDateTime: "2018-03-16T02:40:58-04:00",
      issued: "2018-03-16T02:40:58.908-04:00",
      valueQuantity: {
        value: 12,
        unit: "/min",
        system: "http://unitsofmeasure.org",
        code: "/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:15d349c6-9450-75c7-a287-729151038169",
    resource: {
      resourceType: "Observation",
      id: "15d349c6-9450-75c7-a287-729151038169",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-smokingstatus",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72166-2",
            display: "Tobacco smoking status NHIS",
          },
        ],
        text: "Tobacco smoking status NHIS",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      effectiveDateTime: "2018-03-16T02:40:58-04:00",
      issued: "2018-03-16T02:40:58.908-04:00",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "8517006",
            display: "Former smoker",
          },
        ],
        text: "Former smoker",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:4503ed69-ca93-ae17-e8ae-4ec24c7b1de9",
    resource: {
      resourceType: "Observation",
      id: "4503ed69-ca93-ae17-e8ae-4ec24c7b1de9",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "93025-5",
            display:
              "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]",
          },
        ],
        text: "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      effectiveDateTime: "2018-03-16T03:40:36-04:00",
      issued: "2018-03-16T03:40:36.908-04:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "76501-6",
                display:
                  "In the past year, have you been afraid of your partner or ex-partner?",
              },
            ],
            text: "In the past year, have you been afraid of your partner or ex-partner?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93026-3",
                display:
                  "Do you feel physically and emotionally safe where you currently live?",
              },
            ],
            text: "Do you feel physically and emotionally safe where you currently live?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93027-1",
                display: "Are you a refugee?",
              },
            ],
            text: "Are you a refugee?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93028-9",
                display:
                  "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?",
              },
            ],
            text: "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA33-6", display: "Yes" },
            ],
            text: "Yes",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93038-8",
                display:
                  "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?",
              },
            ],
            text: "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA13902-4",
                display: "Quite a bit",
              },
            ],
            text: "Quite a bit",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93029-7",
                display:
                  "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?",
              },
            ],
            text: "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30132-7",
                display: "5 or more times a week",
              },
            ],
            text: "5 or more times a week",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93030-5",
                display:
                  "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?",
              },
            ],
            text: "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93031-3",
                display:
                  "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?",
              },
            ],
            text: "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30122-8",
                display: "I choose not to answer this question",
              },
            ],
            text: "I choose not to answer this question",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "63586-2",
                display:
                  "During the past year, what was the total combined income for you and the family members you live with? This information will help us determine if you are eligible for any benefits.",
              },
            ],
            text: "During the past year, what was the total combined income for you and the family members you live with? This information will help us determine if you are eligible for any benefits.",
          },
          valueQuantity: {
            value: 67216,
            unit: "/a",
            system: "http://unitsofmeasure.org",
            code: "/a",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "76437-3",
                display: "What is your main insurance?",
              },
            ],
            text: "What is your main insurance?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA15652-3",
                display: "Medicare",
              },
            ],
            text: "Medicare",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "67875-5",
                display: "What is your current work situation?",
              },
            ],
            text: "What is your current work situation?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30136-8",
                display: "Full-time work",
              },
            ],
            text: "Full-time work",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "82589-3",
                display:
                  "What is the highest level of school that you have finished?",
              },
            ],
            text: "What is the highest level of school that you have finished?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30192-1",
                display: "High school diploma or GED",
              },
            ],
            text: "High school diploma or GED",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "56799-0",
                display: "What address do you live at?",
              },
            ],
            text: "What address do you live at?",
          },
          valueString: "898 Bernier Mews",
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93033-9",
                display: "Are you worried about losing your housing?",
              },
            ],
            text: "Are you worried about losing your housing?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "71802-3",
                display: "What is your housing situation today?",
              },
            ],
            text: "What is your housing situation today?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30189-7",
                display: "I have housing",
              },
            ],
            text: "I have housing",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "63512-8",
                display:
                  "How many family members, including yourself, do you currently live with?",
              },
            ],
            text: "How many family members, including yourself, do you currently live with?",
          },
          valueQuantity: {
            value: 5,
            unit: "{#}",
            system: "http://unitsofmeasure.org",
            code: "{#}",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "54899-0",
                display: "What language are you most comfortable speaking?",
              },
            ],
            text: "What language are you most comfortable speaking?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA43-5",
                display: "English",
              },
            ],
            text: "English",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93034-7",
                display:
                  "Have you been discharged from the armed forces of the United States?",
              },
            ],
            text: "Have you been discharged from the armed forces of the United States?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93035-4",
                display:
                  "At any point in the past 2 years, has season or migrant farm work been your or your family's main source of income?",
              },
            ],
            text: "At any point in the past 2 years, has season or migrant farm work been your or your family's main source of income?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "32624-9",
                display: "Which race(s) are you?",
              },
            ],
            text: "Which race(s) are you?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA4457-3",
                display: "White",
              },
            ],
            text: "White",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "56051-6",
                display: "Are you Hispanic or Latino?",
              },
            ],
            text: "Are you Hispanic or Latino?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:f280f849-2c8f-3617-d516-9714c78095d1",
    resource: {
      resourceType: "Observation",
      id: "f280f849-2c8f-3617-d516-9714c78095d1",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59460-6",
            display: "Fall risk total [Morse Fall Scale]",
          },
        ],
        text: "Fall risk total [Morse Fall Scale]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      effectiveDateTime: "2018-03-16T04:05:09-04:00",
      issued: "2018-03-16T04:05:09.908-04:00",
      valueQuantity: {
        value: 13,
        unit: "{#}",
        system: "http://unitsofmeasure.org",
        code: "{#}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:d33a2a74-5b77-e02d-8c0a-2f033723c20a",
    resource: {
      resourceType: "Observation",
      id: "d33a2a74-5b77-e02d-8c0a-2f033723c20a",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59461-4",
            display: "Fall risk level [Morse Fall Scale]",
          },
        ],
        text: "Fall risk level [Morse Fall Scale]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      effectiveDateTime: "2018-03-16T04:05:09-04:00",
      issued: "2018-03-16T04:05:09.908-04:00",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://loinc.org",
            code: "LA13038-7",
            display: "Low Risk (MFS Score 0 - 24)",
          },
        ],
        text: "Low Risk (MFS Score 0 - 24)",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:6ec008c2-88f0-4b17-c12b-783edcd0a960",
    resource: {
      resourceType: "Observation",
      id: "6ec008c2-88f0-4b17-c12b-783edcd0a960",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "55758-7",
            display:
              "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",
          },
        ],
        text: "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      effectiveDateTime: "2018-03-16T04:40:38-04:00",
      issued: "2018-03-16T04:40:38.908-04:00",
      valueQuantity: {
        value: 0,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:23551a06-334c-a90e-926b-7505a1639641",
    resource: {
      resourceType: "Observation",
      id: "23551a06-334c-a90e-926b-7505a1639641",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "75626-2",
            display: "Total score [AUDIT-C]",
          },
        ],
        text: "Total score [AUDIT-C]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      effectiveDateTime: "2018-03-16T05:22:28-04:00",
      issued: "2018-03-16T05:22:28.908-04:00",
      valueQuantity: {
        value: 1,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:0b715acf-c532-cf92-1c36-195eab87d3cd",
    resource: {
      resourceType: "Observation",
      id: "0b715acf-c532-cf92-1c36-195eab87d3cd",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2339-0", display: "Glucose" },
        ],
        text: "Glucose",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 68.25,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:e3d6a204-5175-69c3-3449-742f44ccb68a",
    resource: {
      resourceType: "Observation",
      id: "e3d6a204-5175-69c3-3449-742f44ccb68a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6299-2",
            display: "Urea Nitrogen",
          },
        ],
        text: "Urea Nitrogen",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 18.13,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:789a4faf-6928-3a24-3e5b-b008d86b80a5",
    resource: {
      resourceType: "Observation",
      id: "789a4faf-6928-3a24-3e5b-b008d86b80a5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "38483-4",
            display: "Creatinine",
          },
        ],
        text: "Creatinine",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 3.2861,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:b5afa0d0-224a-3879-24be-4706f02b0d31",
    resource: {
      resourceType: "Observation",
      id: "b5afa0d0-224a-3879-24be-4706f02b0d31",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "49765-1", display: "Calcium" },
        ],
        text: "Calcium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 9.41,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:851e2ee0-6fbb-7884-2af1-724eec167765",
    resource: {
      resourceType: "Observation",
      id: "851e2ee0-6fbb-7884-2af1-724eec167765",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2947-0", display: "Sodium" },
        ],
        text: "Sodium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 138.35,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:2e88744a-5b73-c762-987d-05ab5a8990a0",
    resource: {
      resourceType: "Observation",
      id: "2e88744a-5b73-c762-987d-05ab5a8990a0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "6298-4", display: "Potassium" },
        ],
        text: "Potassium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 3.81,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:4a31a418-b1bb-3b34-1442-f058958032ac",
    resource: {
      resourceType: "Observation",
      id: "4a31a418-b1bb-3b34-1442-f058958032ac",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2069-3", display: "Chloride" },
        ],
        text: "Chloride",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 108.69,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:ce5cc8f3-4969-9900-0338-771e6411f246",
    resource: {
      resourceType: "Observation",
      id: "ce5cc8f3-4969-9900-0338-771e6411f246",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "20565-8",
            display: "Carbon Dioxide",
          },
        ],
        text: "Carbon Dioxide",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 24.62,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:fd0a5f44-d61b-b4da-d6b0-7ba0a597f5de",
    resource: {
      resourceType: "Observation",
      id: "fd0a5f44-d61b-b4da-d6b0-7ba0a597f5de",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "33914-3",
            display: "Glomerular filtration rate/1.73 sq M.predicted",
          },
        ],
        text: "Glomerular filtration rate/1.73 sq M.predicted",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 78.081,
        unit: "mL/min",
        system: "http://unitsofmeasure.org",
        code: "mL/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:36b8debe-ee9c-303e-1e32-64f4bf92f49a",
    resource: {
      resourceType: "Observation",
      id: "36b8debe-ee9c-303e-1e32-64f4bf92f49a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2885-2",
            display: "Protein [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Protein [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 68.086,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:f81fe701-8daf-3ac0-3c7e-7d76f443a1a0",
    resource: {
      resourceType: "Observation",
      id: "f81fe701-8daf-3ac0-3c7e-7d76f443a1a0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1751-7",
            display: "Albumin [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Albumin [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 5.2578,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:84250397-9447-38e6-b819-d9d8be480794",
    resource: {
      resourceType: "Observation",
      id: "84250397-9447-38e6-b819-d9d8be480794",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "10834-0",
            display: "Globulin [Mass/volume] in Serum by calculation",
          },
        ],
        text: "Globulin [Mass/volume] in Serum by calculation",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 3.4183,
        unit: "g/L",
        system: "http://unitsofmeasure.org",
        code: "g/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:1bc43b23-a422-7554-82c9-1d7f61b4985f",
    resource: {
      resourceType: "Observation",
      id: "1bc43b23-a422-7554-82c9-1d7f61b4985f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1975-2",
            display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Bilirubin.total [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 0.10186,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:ca95ddda-5730-402a-1202-b008ad47f532",
    resource: {
      resourceType: "Observation",
      id: "ca95ddda-5730-402a-1202-b008ad47f532",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6768-6",
            display:
              "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 67.704,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:0b3e4730-551e-20a9-61d6-383042c4b2ca",
    resource: {
      resourceType: "Observation",
      id: "0b3e4730-551e-20a9-61d6-383042c4b2ca",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1742-6",
            display:
              "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 21.616,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:22ab86d4-eb53-fd1c-b550-6fd50c6c9df5",
    resource: {
      resourceType: "Observation",
      id: "22ab86d4-eb53-fd1c-b550-6fd50c6c9df5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1920-8",
            display:
              "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 39.728,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:86d024e1-8eb0-5cf5-283f-a556eb4d4454",
    resource: {
      resourceType: "Observation",
      id: "86d024e1-8eb0-5cf5-283f-a556eb4d4454",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2093-3",
            display: "Total Cholesterol",
          },
        ],
        text: "Total Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 200.93,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:e4c9754f-6fc4-2935-8fae-7e244ec5c561",
    resource: {
      resourceType: "Observation",
      id: "e4c9754f-6fc4-2935-8fae-7e244ec5c561",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2571-8",
            display: "Triglycerides",
          },
        ],
        text: "Triglycerides",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 196.42,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:06532ea7-0c5f-8f11-2daf-ce91b5aa2fb3",
    resource: {
      resourceType: "Observation",
      id: "06532ea7-0c5f-8f11-2daf-ce91b5aa2fb3",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "18262-6",
            display: "Low Density Lipoprotein Cholesterol",
          },
        ],
        text: "Low Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 130.71,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:865137ff-5237-e8d2-eb6f-9aef04e8ee80",
    resource: {
      resourceType: "Observation",
      id: "865137ff-5237-e8d2-eb6f-9aef04e8ee80",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2085-9",
            display: "High Density Lipoprotein Cholesterol",
          },
        ],
        text: "High Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 35.8,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:46db3db8-3af9-9c49-3d2d-9aee059c3c02",
    resource: {
      resourceType: "Observation",
      id: "46db3db8-3af9-9c49-3d2d-9aee059c3c02",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bodyheight",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "8302-2",
            display: "Body Height",
          },
        ],
        text: "Body Height",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T02:40:58-04:00",
      issued: "2019-03-22T02:40:58.908-04:00",
      valueQuantity: {
        value: 180.6,
        unit: "cm",
        system: "http://unitsofmeasure.org",
        code: "cm",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:ade8291a-b90a-cea2-0332-305144d6e3e1",
    resource: {
      resourceType: "Observation",
      id: "ade8291a-b90a-cea2-0332-305144d6e3e1",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72514-3",
            display:
              "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          },
        ],
        text: "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T02:40:58-04:00",
      issued: "2019-03-22T02:40:58.908-04:00",
      valueQuantity: {
        value: 3,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:d85a2833-3dd3-1dc6-acf8-24bf9e2f1b92",
    resource: {
      resourceType: "Observation",
      id: "d85a2833-3dd3-1dc6-acf8-24bf9e2f1b92",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bodyweight",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "29463-7",
            display: "Body Weight",
          },
        ],
        text: "Body Weight",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T02:40:58-04:00",
      issued: "2019-03-22T02:40:58.908-04:00",
      valueQuantity: {
        value: 91.2,
        unit: "kg",
        system: "http://unitsofmeasure.org",
        code: "kg",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:26788e8b-f2d4-3cb9-173f-b95d952b0634",
    resource: {
      resourceType: "Observation",
      id: "26788e8b-f2d4-3cb9-173f-b95d952b0634",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bmi",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "39156-5",
            display: "Body Mass Index",
          },
        ],
        text: "Body Mass Index",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T02:40:58-04:00",
      issued: "2019-03-22T02:40:58.908-04:00",
      valueQuantity: {
        value: 27.96,
        unit: "kg/m2",
        system: "http://unitsofmeasure.org",
        code: "kg/m2",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:9710f786-cd83-3ef4-dae2-e57455bfcc41",
    resource: {
      resourceType: "Observation",
      id: "9710f786-cd83-3ef4-dae2-e57455bfcc41",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bp",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "85354-9",
            display: "Blood Pressure",
          },
        ],
        text: "Blood Pressure",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T02:40:58-04:00",
      issued: "2019-03-22T02:40:58.908-04:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "8462-4",
                display: "Diastolic Blood Pressure",
              },
            ],
            text: "Diastolic Blood Pressure",
          },
          valueQuantity: {
            value: 74,
            unit: "mm[Hg]",
            system: "http://unitsofmeasure.org",
            code: "mm[Hg]",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "8480-6",
                display: "Systolic Blood Pressure",
              },
            ],
            text: "Systolic Blood Pressure",
          },
          valueQuantity: {
            value: 115,
            unit: "mm[Hg]",
            system: "http://unitsofmeasure.org",
            code: "mm[Hg]",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:cf92284a-0eac-0545-f82f-8b83fbda2d14",
    resource: {
      resourceType: "Observation",
      id: "cf92284a-0eac-0545-f82f-8b83fbda2d14",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/heartrate",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "8867-4", display: "Heart rate" },
        ],
        text: "Heart rate",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T02:40:58-04:00",
      issued: "2019-03-22T02:40:58.908-04:00",
      valueQuantity: {
        value: 83,
        unit: "/min",
        system: "http://unitsofmeasure.org",
        code: "/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:e19e9cf7-50a4-14f3-1d07-6b9e602024aa",
    resource: {
      resourceType: "Observation",
      id: "e19e9cf7-50a4-14f3-1d07-6b9e602024aa",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/resprate",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "9279-1",
            display: "Respiratory rate",
          },
        ],
        text: "Respiratory rate",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T02:40:58-04:00",
      issued: "2019-03-22T02:40:58.908-04:00",
      valueQuantity: {
        value: 13,
        unit: "/min",
        system: "http://unitsofmeasure.org",
        code: "/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:3d1e351f-0cb1-3d24-da5c-66f12700a9ac",
    resource: {
      resourceType: "Observation",
      id: "3d1e351f-0cb1-3d24-da5c-66f12700a9ac",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2093-3",
            display: "Total Cholesterol",
          },
        ],
        text: "Total Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T02:40:58-04:00",
      issued: "2019-03-22T02:40:58.908-04:00",
      valueQuantity: {
        value: 176.4,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:e259b379-776a-ae83-b7f4-e8a41cf2c7ac",
    resource: {
      resourceType: "Observation",
      id: "e259b379-776a-ae83-b7f4-e8a41cf2c7ac",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2571-8",
            display: "Triglycerides",
          },
        ],
        text: "Triglycerides",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T02:40:58-04:00",
      issued: "2019-03-22T02:40:58.908-04:00",
      valueQuantity: {
        value: 113.36,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:892204ce-7721-691d-f7cd-87e5e11599af",
    resource: {
      resourceType: "Observation",
      id: "892204ce-7721-691d-f7cd-87e5e11599af",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "18262-6",
            display: "Low Density Lipoprotein Cholesterol",
          },
        ],
        text: "Low Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T02:40:58-04:00",
      issued: "2019-03-22T02:40:58.908-04:00",
      valueQuantity: {
        value: 79.94,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:6bb08236-a0c7-248b-f22a-37440276e8eb",
    resource: {
      resourceType: "Observation",
      id: "6bb08236-a0c7-248b-f22a-37440276e8eb",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2085-9",
            display: "High Density Lipoprotein Cholesterol",
          },
        ],
        text: "High Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T02:40:58-04:00",
      issued: "2019-03-22T02:40:58.908-04:00",
      valueQuantity: {
        value: 73.79,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:850ca28a-5599-1656-c1ba-95388c5e73d1",
    resource: {
      resourceType: "Observation",
      id: "850ca28a-5599-1656-c1ba-95388c5e73d1",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-smokingstatus",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72166-2",
            display: "Tobacco smoking status NHIS",
          },
        ],
        text: "Tobacco smoking status NHIS",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T02:40:58-04:00",
      issued: "2019-03-22T02:40:58.908-04:00",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "8517006",
            display: "Former smoker",
          },
        ],
        text: "Former smoker",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:de96cf10-b046-3a96-d15a-320b5758214d",
    resource: {
      resourceType: "Observation",
      id: "de96cf10-b046-3a96-d15a-320b5758214d",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "93025-5",
            display:
              "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]",
          },
        ],
        text: "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T03:27:57-04:00",
      issued: "2019-03-22T03:27:57.908-04:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "76501-6",
                display:
                  "In the past year, have you been afraid of your partner or ex-partner?",
              },
            ],
            text: "In the past year, have you been afraid of your partner or ex-partner?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93026-3",
                display:
                  "Do you feel physically and emotionally safe where you currently live?",
              },
            ],
            text: "Do you feel physically and emotionally safe where you currently live?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA33-6", display: "Yes" },
            ],
            text: "Yes",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93027-1",
                display: "Are you a refugee?",
              },
            ],
            text: "Are you a refugee?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93028-9",
                display:
                  "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?",
              },
            ],
            text: "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA33-6", display: "Yes" },
            ],
            text: "Yes",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93038-8",
                display:
                  "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?",
              },
            ],
            text: "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA13909-9",
                display: "Somewhat",
              },
            ],
            text: "Somewhat",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93029-7",
                display:
                  "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?",
              },
            ],
            text: "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30132-7",
                display: "5 or more times a week",
              },
            ],
            text: "5 or more times a week",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93030-5",
                display:
                  "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?",
              },
            ],
            text: "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93031-3",
                display:
                  "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?",
              },
            ],
            text: "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30122-8",
                display: "I choose not to answer this question",
              },
            ],
            text: "I choose not to answer this question",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "63586-2",
                display:
                  "During the past year, what was the total combined income for you and the family members you live with? This information will help us determine if you are eligible for any benefits.",
              },
            ],
            text: "During the past year, what was the total combined income for you and the family members you live with? This information will help us determine if you are eligible for any benefits.",
          },
          valueQuantity: {
            value: 67216,
            unit: "/a",
            system: "http://unitsofmeasure.org",
            code: "/a",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "76437-3",
                display: "What is your main insurance?",
              },
            ],
            text: "What is your main insurance?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA15652-3",
                display: "Medicare",
              },
            ],
            text: "Medicare",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "67875-5",
                display: "What is your current work situation?",
              },
            ],
            text: "What is your current work situation?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30136-8",
                display: "Full-time work",
              },
            ],
            text: "Full-time work",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "82589-3",
                display:
                  "What is the highest level of school that you have finished?",
              },
            ],
            text: "What is the highest level of school that you have finished?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30192-1",
                display: "High school diploma or GED",
              },
            ],
            text: "High school diploma or GED",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "56799-0",
                display: "What address do you live at?",
              },
            ],
            text: "What address do you live at?",
          },
          valueString: "898 Bernier Mews",
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93033-9",
                display: "Are you worried about losing your housing?",
              },
            ],
            text: "Are you worried about losing your housing?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "71802-3",
                display: "What is your housing situation today?",
              },
            ],
            text: "What is your housing situation today?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30189-7",
                display: "I have housing",
              },
            ],
            text: "I have housing",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "63512-8",
                display:
                  "How many family members, including yourself, do you currently live with?",
              },
            ],
            text: "How many family members, including yourself, do you currently live with?",
          },
          valueQuantity: {
            value: 5,
            unit: "{#}",
            system: "http://unitsofmeasure.org",
            code: "{#}",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "54899-0",
                display: "What language are you most comfortable speaking?",
              },
            ],
            text: "What language are you most comfortable speaking?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA43-5",
                display: "English",
              },
            ],
            text: "English",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93034-7",
                display:
                  "Have you been discharged from the armed forces of the United States?",
              },
            ],
            text: "Have you been discharged from the armed forces of the United States?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93035-4",
                display:
                  "At any point in the past 2 years, has season or migrant farm work been your or your family's main source of income?",
              },
            ],
            text: "At any point in the past 2 years, has season or migrant farm work been your or your family's main source of income?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "32624-9",
                display: "Which race(s) are you?",
              },
            ],
            text: "Which race(s) are you?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA4457-3",
                display: "White",
              },
            ],
            text: "White",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "56051-6",
                display: "Are you Hispanic or Latino?",
              },
            ],
            text: "Are you Hispanic or Latino?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:761f4f7d-319f-02dc-2c2e-ded39f97a44b",
    resource: {
      resourceType: "Observation",
      id: "761f4f7d-319f-02dc-2c2e-ded39f97a44b",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "70274-6",
            display:
              "Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]",
          },
        ],
        text: "Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T03:53:01-04:00",
      issued: "2019-03-22T03:53:01.908-04:00",
      valueQuantity: {
        value: 0,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:00eb811a-7556-8f51-f274-59de71f4537d",
    resource: {
      resourceType: "Observation",
      id: "00eb811a-7556-8f51-f274-59de71f4537d",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59460-6",
            display: "Fall risk total [Morse Fall Scale]",
          },
        ],
        text: "Fall risk total [Morse Fall Scale]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T04:18:39-04:00",
      issued: "2019-03-22T04:18:39.908-04:00",
      valueQuantity: {
        value: 33,
        unit: "{#}",
        system: "http://unitsofmeasure.org",
        code: "{#}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:777acd43-753b-d61f-5a65-ec338f64395b",
    resource: {
      resourceType: "Observation",
      id: "777acd43-753b-d61f-5a65-ec338f64395b",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59461-4",
            display: "Fall risk level [Morse Fall Scale]",
          },
        ],
        text: "Fall risk level [Morse Fall Scale]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T04:18:39-04:00",
      issued: "2019-03-22T04:18:39.908-04:00",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://loinc.org",
            code: "LA13039-5",
            display: "Moderate Risk (MFS Score 25 - 45)",
          },
        ],
        text: "Moderate Risk (MFS Score 25 - 45)",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:bd001317-76d3-5d0f-52ab-cc74cfc9a06b",
    resource: {
      resourceType: "Observation",
      id: "bd001317-76d3-5d0f-52ab-cc74cfc9a06b",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "76504-0",
            display: "Total score [HARK]",
          },
        ],
        text: "Total score [HARK]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T04:57:36-04:00",
      issued: "2019-03-22T04:57:36.908-04:00",
      valueQuantity: {
        value: 0,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:10e13da2-eedc-d637-8864-1612bc1b2078",
    resource: {
      resourceType: "Observation",
      id: "10e13da2-eedc-d637-8864-1612bc1b2078",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2339-0", display: "Glucose" },
        ],
        text: "Glucose",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 81.65,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:76bd963e-51ef-47c6-34ef-8b8422b9947a",
    resource: {
      resourceType: "Observation",
      id: "76bd963e-51ef-47c6-34ef-8b8422b9947a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6299-2",
            display: "Urea Nitrogen",
          },
        ],
        text: "Urea Nitrogen",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 18.13,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:4c8f2f4e-9c69-b6ba-0924-d203cd8c4b93",
    resource: {
      resourceType: "Observation",
      id: "4c8f2f4e-9c69-b6ba-0924-d203cd8c4b93",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "38483-4",
            display: "Creatinine",
          },
        ],
        text: "Creatinine",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 3.3242,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:4b828ccd-1305-a8c7-6591-12c31001913b",
    resource: {
      resourceType: "Observation",
      id: "4b828ccd-1305-a8c7-6591-12c31001913b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "49765-1", display: "Calcium" },
        ],
        text: "Calcium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 8.55,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:32a90138-f40c-4a1d-3463-c8346a4be935",
    resource: {
      resourceType: "Observation",
      id: "32a90138-f40c-4a1d-3463-c8346a4be935",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2947-0", display: "Sodium" },
        ],
        text: "Sodium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 138.21,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:e54bbf5b-6c8c-af0d-cbb2-08df28b363cc",
    resource: {
      resourceType: "Observation",
      id: "e54bbf5b-6c8c-af0d-cbb2-08df28b363cc",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "6298-4", display: "Potassium" },
        ],
        text: "Potassium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 4.91,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:f8f1d32f-8782-0bf2-5523-2b753df1725f",
    resource: {
      resourceType: "Observation",
      id: "f8f1d32f-8782-0bf2-5523-2b753df1725f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2069-3", display: "Chloride" },
        ],
        text: "Chloride",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 104.69,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:91183621-d54b-074e-40bb-1823b9d70020",
    resource: {
      resourceType: "Observation",
      id: "91183621-d54b-074e-40bb-1823b9d70020",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "20565-8",
            display: "Carbon Dioxide",
          },
        ],
        text: "Carbon Dioxide",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 28.36,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:eada7278-ac41-8a33-fee7-db2bab34d318",
    resource: {
      resourceType: "Observation",
      id: "eada7278-ac41-8a33-fee7-db2bab34d318",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "33914-3",
            display: "Glomerular filtration rate/1.73 sq M.predicted",
          },
        ],
        text: "Glomerular filtration rate/1.73 sq M.predicted",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 82.254,
        unit: "mL/min",
        system: "http://unitsofmeasure.org",
        code: "mL/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:3bbd8a11-1654-b2e3-623d-4cb1e4fa796e",
    resource: {
      resourceType: "Observation",
      id: "3bbd8a11-1654-b2e3-623d-4cb1e4fa796e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2885-2",
            display: "Protein [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Protein [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 64.176,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:1bb6144c-a97c-cdba-24a2-e1d3f30046e7",
    resource: {
      resourceType: "Observation",
      id: "1bb6144c-a97c-cdba-24a2-e1d3f30046e7",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1751-7",
            display: "Albumin [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Albumin [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 5.2263,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:669dc74a-b3fb-784c-fb64-fafd3f3526b0",
    resource: {
      resourceType: "Observation",
      id: "669dc74a-b3fb-784c-fb64-fafd3f3526b0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "10834-0",
            display: "Globulin [Mass/volume] in Serum by calculation",
          },
        ],
        text: "Globulin [Mass/volume] in Serum by calculation",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 2.9439,
        unit: "g/L",
        system: "http://unitsofmeasure.org",
        code: "g/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:93dbe057-bfd8-52ca-dadc-4378b431455b",
    resource: {
      resourceType: "Observation",
      id: "93dbe057-bfd8-52ca-dadc-4378b431455b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1975-2",
            display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Bilirubin.total [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 0.51985,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:e7471fa5-8d2c-e3a9-ca72-f64b0abad727",
    resource: {
      resourceType: "Observation",
      id: "e7471fa5-8d2c-e3a9-ca72-f64b0abad727",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6768-6",
            display:
              "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 93.295,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:7b7f4b3c-36d8-9184-4df9-1c3de4da7e84",
    resource: {
      resourceType: "Observation",
      id: "7b7f4b3c-36d8-9184-4df9-1c3de4da7e84",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1742-6",
            display:
              "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 37.488,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:17676d2d-5b5f-d741-9eb6-173926f116d5",
    resource: {
      resourceType: "Observation",
      id: "17676d2d-5b5f-d741-9eb6-173926f116d5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1920-8",
            display:
              "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 10.551,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:9549410c-5a48-1673-f6b7-0ed6ee18e777",
    resource: {
      resourceType: "Observation",
      id: "9549410c-5a48-1673-f6b7-0ed6ee18e777",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2093-3",
            display: "Total Cholesterol",
          },
        ],
        text: "Total Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 181.08,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:9dbd849e-1f73-abff-20bf-12369f388301",
    resource: {
      resourceType: "Observation",
      id: "9dbd849e-1f73-abff-20bf-12369f388301",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2571-8",
            display: "Triglycerides",
          },
        ],
        text: "Triglycerides",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 129.04,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:d1fc1fd0-9818-2b01-8037-030fe3cdd6cd",
    resource: {
      resourceType: "Observation",
      id: "d1fc1fd0-9818-2b01-8037-030fe3cdd6cd",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "18262-6",
            display: "Low Density Lipoprotein Cholesterol",
          },
        ],
        text: "Low Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 138.29,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:a3f257ec-f222-e1f0-53c8-9e06d4dc2eb7",
    resource: {
      resourceType: "Observation",
      id: "a3f257ec-f222-e1f0-53c8-9e06d4dc2eb7",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2085-9",
            display: "High Density Lipoprotein Cholesterol",
          },
        ],
        text: "High Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      valueQuantity: {
        value: 30.177,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:0cf1128b-e503-3451-9795-78567bbe5773",
    resource: {
      resourceType: "Observation",
      id: "0cf1128b-e503-3451-9795-78567bbe5773",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bodyheight",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "8302-2",
            display: "Body Height",
          },
        ],
        text: "Body Height",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      effectiveDateTime: "2020-03-27T02:40:58-04:00",
      issued: "2020-03-27T02:40:58.908-04:00",
      valueQuantity: {
        value: 180.6,
        unit: "cm",
        system: "http://unitsofmeasure.org",
        code: "cm",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:b96b5792-ddca-039a-10b1-2c5855dd5a29",
    resource: {
      resourceType: "Observation",
      id: "b96b5792-ddca-039a-10b1-2c5855dd5a29",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72514-3",
            display:
              "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          },
        ],
        text: "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      effectiveDateTime: "2020-03-27T02:40:58-04:00",
      issued: "2020-03-27T02:40:58.908-04:00",
      valueQuantity: {
        value: 4,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:99bcda07-8843-51e1-fdda-218114ccac91",
    resource: {
      resourceType: "Observation",
      id: "99bcda07-8843-51e1-fdda-218114ccac91",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bodyweight",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "29463-7",
            display: "Body Weight",
          },
        ],
        text: "Body Weight",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      effectiveDateTime: "2020-03-27T02:40:58-04:00",
      issued: "2020-03-27T02:40:58.908-04:00",
      valueQuantity: {
        value: 93.3,
        unit: "kg",
        system: "http://unitsofmeasure.org",
        code: "kg",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:7a130686-8f22-644e-3023-63e373b4cd28",
    resource: {
      resourceType: "Observation",
      id: "7a130686-8f22-644e-3023-63e373b4cd28",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bmi",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "39156-5",
            display: "Body Mass Index",
          },
        ],
        text: "Body Mass Index",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      effectiveDateTime: "2020-03-27T02:40:58-04:00",
      issued: "2020-03-27T02:40:58.908-04:00",
      valueQuantity: {
        value: 28.6,
        unit: "kg/m2",
        system: "http://unitsofmeasure.org",
        code: "kg/m2",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:1dd60d0e-995d-7682-0b14-2d68d42def6b",
    resource: {
      resourceType: "Observation",
      id: "1dd60d0e-995d-7682-0b14-2d68d42def6b",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bp",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "85354-9",
            display: "Blood Pressure",
          },
        ],
        text: "Blood Pressure",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      effectiveDateTime: "2020-03-27T02:40:58-04:00",
      issued: "2020-03-27T02:40:58.908-04:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "8462-4",
                display: "Diastolic Blood Pressure",
              },
            ],
            text: "Diastolic Blood Pressure",
          },
          valueQuantity: {
            value: 76,
            unit: "mm[Hg]",
            system: "http://unitsofmeasure.org",
            code: "mm[Hg]",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "8480-6",
                display: "Systolic Blood Pressure",
              },
            ],
            text: "Systolic Blood Pressure",
          },
          valueQuantity: {
            value: 107,
            unit: "mm[Hg]",
            system: "http://unitsofmeasure.org",
            code: "mm[Hg]",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:d657683c-fbe6-03b6-6705-622c1331639b",
    resource: {
      resourceType: "Observation",
      id: "d657683c-fbe6-03b6-6705-622c1331639b",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/heartrate",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "8867-4", display: "Heart rate" },
        ],
        text: "Heart rate",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      effectiveDateTime: "2020-03-27T02:40:58-04:00",
      issued: "2020-03-27T02:40:58.908-04:00",
      valueQuantity: {
        value: 61,
        unit: "/min",
        system: "http://unitsofmeasure.org",
        code: "/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:b18523bc-3839-fe24-b4e9-fe09345336c0",
    resource: {
      resourceType: "Observation",
      id: "b18523bc-3839-fe24-b4e9-fe09345336c0",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/resprate",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "9279-1",
            display: "Respiratory rate",
          },
        ],
        text: "Respiratory rate",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      effectiveDateTime: "2020-03-27T02:40:58-04:00",
      issued: "2020-03-27T02:40:58.908-04:00",
      valueQuantity: {
        value: 15,
        unit: "/min",
        system: "http://unitsofmeasure.org",
        code: "/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:22e695fb-48c6-98a5-60b8-476e7fa74eef",
    resource: {
      resourceType: "Observation",
      id: "22e695fb-48c6-98a5-60b8-476e7fa74eef",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-smokingstatus",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72166-2",
            display: "Tobacco smoking status NHIS",
          },
        ],
        text: "Tobacco smoking status NHIS",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      effectiveDateTime: "2020-03-27T02:40:58-04:00",
      issued: "2020-03-27T02:40:58.908-04:00",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "8517006",
            display: "Former smoker",
          },
        ],
        text: "Former smoker",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:9c3e8121-407b-869b-acb2-db73fb2587ce",
    resource: {
      resourceType: "Observation",
      id: "9c3e8121-407b-869b-acb2-db73fb2587ce",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "93025-5",
            display:
              "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]",
          },
        ],
        text: "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      effectiveDateTime: "2020-03-27T03:15:37-04:00",
      issued: "2020-03-27T03:15:37.908-04:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "76501-6",
                display:
                  "In the past year, have you been afraid of your partner or ex-partner?",
              },
            ],
            text: "In the past year, have you been afraid of your partner or ex-partner?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93026-3",
                display:
                  "Do you feel physically and emotionally safe where you currently live?",
              },
            ],
            text: "Do you feel physically and emotionally safe where you currently live?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA33-6", display: "Yes" },
            ],
            text: "Yes",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93027-1",
                display: "Are you a refugee?",
              },
            ],
            text: "Are you a refugee?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93028-9",
                display:
                  "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?",
              },
            ],
            text: "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA33-6", display: "Yes" },
            ],
            text: "Yes",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93038-8",
                display:
                  "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?",
              },
            ],
            text: "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA13909-9",
                display: "Somewhat",
              },
            ],
            text: "Somewhat",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93029-7",
                display:
                  "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?",
              },
            ],
            text: "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30132-7",
                display: "5 or more times a week",
              },
            ],
            text: "5 or more times a week",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93030-5",
                display:
                  "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?",
              },
            ],
            text: "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93031-3",
                display:
                  "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?",
              },
            ],
            text: "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30122-8",
                display: "I choose not to answer this question",
              },
            ],
            text: "I choose not to answer this question",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "63586-2",
                display:
                  "During the past year, what was the total combined income for you and the family members you live with? This information will help us determine if you are eligible for any benefits.",
              },
            ],
            text: "During the past year, what was the total combined income for you and the family members you live with? This information will help us determine if you are eligible for any benefits.",
          },
          valueQuantity: {
            value: 67216,
            unit: "/a",
            system: "http://unitsofmeasure.org",
            code: "/a",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "76437-3",
                display: "What is your main insurance?",
              },
            ],
            text: "What is your main insurance?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA15652-3",
                display: "Medicare",
              },
            ],
            text: "Medicare",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "67875-5",
                display: "What is your current work situation?",
              },
            ],
            text: "What is your current work situation?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30136-8",
                display: "Full-time work",
              },
            ],
            text: "Full-time work",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "82589-3",
                display:
                  "What is the highest level of school that you have finished?",
              },
            ],
            text: "What is the highest level of school that you have finished?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30192-1",
                display: "High school diploma or GED",
              },
            ],
            text: "High school diploma or GED",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "56799-0",
                display: "What address do you live at?",
              },
            ],
            text: "What address do you live at?",
          },
          valueString: "898 Bernier Mews",
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93033-9",
                display: "Are you worried about losing your housing?",
              },
            ],
            text: "Are you worried about losing your housing?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "71802-3",
                display: "What is your housing situation today?",
              },
            ],
            text: "What is your housing situation today?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30189-7",
                display: "I have housing",
              },
            ],
            text: "I have housing",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "63512-8",
                display:
                  "How many family members, including yourself, do you currently live with?",
              },
            ],
            text: "How many family members, including yourself, do you currently live with?",
          },
          valueQuantity: {
            value: 5,
            unit: "{#}",
            system: "http://unitsofmeasure.org",
            code: "{#}",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "54899-0",
                display: "What language are you most comfortable speaking?",
              },
            ],
            text: "What language are you most comfortable speaking?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA43-5",
                display: "English",
              },
            ],
            text: "English",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93034-7",
                display:
                  "Have you been discharged from the armed forces of the United States?",
              },
            ],
            text: "Have you been discharged from the armed forces of the United States?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93035-4",
                display:
                  "At any point in the past 2 years, has season or migrant farm work been your or your family's main source of income?",
              },
            ],
            text: "At any point in the past 2 years, has season or migrant farm work been your or your family's main source of income?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "32624-9",
                display: "Which race(s) are you?",
              },
            ],
            text: "Which race(s) are you?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA4457-3",
                display: "White",
              },
            ],
            text: "White",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "56051-6",
                display: "Are you Hispanic or Latino?",
              },
            ],
            text: "Are you Hispanic or Latino?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:f079cf3d-7f77-d610-bc2d-e732e3949358",
    resource: {
      resourceType: "Observation",
      id: "f079cf3d-7f77-d610-bc2d-e732e3949358",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "70274-6",
            display:
              "Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]",
          },
        ],
        text: "Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      effectiveDateTime: "2020-03-27T03:44:01-04:00",
      issued: "2020-03-27T03:44:01.908-04:00",
      valueQuantity: {
        value: 4,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:02515dc1-91a7-c81f-615e-224f9b3ba2dd",
    resource: {
      resourceType: "Observation",
      id: "02515dc1-91a7-c81f-615e-224f9b3ba2dd",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59460-6",
            display: "Fall risk total [Morse Fall Scale]",
          },
        ],
        text: "Fall risk total [Morse Fall Scale]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      effectiveDateTime: "2020-03-27T04:10:46-04:00",
      issued: "2020-03-27T04:10:46.908-04:00",
      valueQuantity: {
        value: 1,
        unit: "{#}",
        system: "http://unitsofmeasure.org",
        code: "{#}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:4b788c31-37bd-4b92-7484-5eda5a171c4c",
    resource: {
      resourceType: "Observation",
      id: "4b788c31-37bd-4b92-7484-5eda5a171c4c",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59461-4",
            display: "Fall risk level [Morse Fall Scale]",
          },
        ],
        text: "Fall risk level [Morse Fall Scale]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      effectiveDateTime: "2020-03-27T04:10:46-04:00",
      issued: "2020-03-27T04:10:46.908-04:00",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://loinc.org",
            code: "LA13038-7",
            display: "Low Risk (MFS Score 0 - 24)",
          },
        ],
        text: "Low Risk (MFS Score 0 - 24)",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:50998216-8562-fdcc-0ca1-c256344cdfb4",
    resource: {
      resourceType: "Observation",
      id: "50998216-8562-fdcc-0ca1-c256344cdfb4",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "75626-2",
            display: "Total score [AUDIT-C]",
          },
        ],
        text: "Total score [AUDIT-C]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      effectiveDateTime: "2020-03-27T04:49:20-04:00",
      issued: "2020-03-27T04:49:20.908-04:00",
      valueQuantity: {
        value: 2,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:4a692b56-5c6b-f88b-8843-920623b8b770",
    resource: {
      resourceType: "Observation",
      id: "4a692b56-5c6b-f88b-8843-920623b8b770",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2339-0", display: "Glucose" },
        ],
        text: "Glucose",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 93.41,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:770a1ed7-3128-3c54-e70f-1c8895819093",
    resource: {
      resourceType: "Observation",
      id: "770a1ed7-3128-3c54-e70f-1c8895819093",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6299-2",
            display: "Urea Nitrogen",
          },
        ],
        text: "Urea Nitrogen",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 14.37,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:0525d3ee-b294-961a-30c2-206615ed2b2c",
    resource: {
      resourceType: "Observation",
      id: "0525d3ee-b294-961a-30c2-206615ed2b2c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "38483-4",
            display: "Creatinine",
          },
        ],
        text: "Creatinine",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 2.7785,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:a864d24e-d5ee-8447-e174-c38cfe2a0392",
    resource: {
      resourceType: "Observation",
      id: "a864d24e-d5ee-8447-e174-c38cfe2a0392",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "49765-1", display: "Calcium" },
        ],
        text: "Calcium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 9.92,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:57817565-f563-e77f-b90c-54383cad2681",
    resource: {
      resourceType: "Observation",
      id: "57817565-f563-e77f-b90c-54383cad2681",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2947-0", display: "Sodium" },
        ],
        text: "Sodium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 141.21,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:49e6a4d2-094f-c405-b009-7883042b6b1a",
    resource: {
      resourceType: "Observation",
      id: "49e6a4d2-094f-c405-b009-7883042b6b1a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "6298-4", display: "Potassium" },
        ],
        text: "Potassium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 3.84,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:559d2012-ba37-355e-b651-4340bb5dc92d",
    resource: {
      resourceType: "Observation",
      id: "559d2012-ba37-355e-b651-4340bb5dc92d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2069-3", display: "Chloride" },
        ],
        text: "Chloride",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 106.72,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:ea155180-8d2f-7833-1db2-420c34be4fbb",
    resource: {
      resourceType: "Observation",
      id: "ea155180-8d2f-7833-1db2-420c34be4fbb",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "20565-8",
            display: "Carbon Dioxide",
          },
        ],
        text: "Carbon Dioxide",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 27.21,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:4ac6dc7f-6380-2e7b-c463-d89d3c3f7fb6",
    resource: {
      resourceType: "Observation",
      id: "4ac6dc7f-6380-2e7b-c463-d89d3c3f7fb6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "33914-3",
            display: "Glomerular filtration rate/1.73 sq M.predicted",
          },
        ],
        text: "Glomerular filtration rate/1.73 sq M.predicted",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 89.973,
        unit: "mL/min",
        system: "http://unitsofmeasure.org",
        code: "mL/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:467e5af0-9de3-41d9-e8cf-7d5dc0d80f0a",
    resource: {
      resourceType: "Observation",
      id: "467e5af0-9de3-41d9-e8cf-7d5dc0d80f0a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2885-2",
            display: "Protein [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Protein [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 67.539,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:b8c4fdea-8df6-0842-1cd8-ab3cd4d957e0",
    resource: {
      resourceType: "Observation",
      id: "b8c4fdea-8df6-0842-1cd8-ab3cd4d957e0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1751-7",
            display: "Albumin [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Albumin [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 5.2336,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:e15505a9-8385-8ee2-3cd1-9cc282a6f820",
    resource: {
      resourceType: "Observation",
      id: "e15505a9-8385-8ee2-3cd1-9cc282a6f820",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "10834-0",
            display: "Globulin [Mass/volume] in Serum by calculation",
          },
        ],
        text: "Globulin [Mass/volume] in Serum by calculation",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 2.1232,
        unit: "g/L",
        system: "http://unitsofmeasure.org",
        code: "g/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:754944c6-d99a-2f40-1a98-2463d7ca6538",
    resource: {
      resourceType: "Observation",
      id: "754944c6-d99a-2f40-1a98-2463d7ca6538",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1975-2",
            display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Bilirubin.total [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 0.82711,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:1de522a9-7ec4-d29f-c937-361866c5781c",
    resource: {
      resourceType: "Observation",
      id: "1de522a9-7ec4-d29f-c937-361866c5781c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6768-6",
            display:
              "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 97.18,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:74b5d13a-bf72-87a7-061e-f629f4b3358d",
    resource: {
      resourceType: "Observation",
      id: "74b5d13a-bf72-87a7-061e-f629f4b3358d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1742-6",
            display:
              "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 58.178,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:fba4a9dd-ae31-4e44-1bce-614eb2f6569c",
    resource: {
      resourceType: "Observation",
      id: "fba4a9dd-ae31-4e44-1bce-614eb2f6569c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1920-8",
            display:
              "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 25.35,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:cc9de5a0-9f1b-3dce-13e6-e1f8ab295571",
    resource: {
      resourceType: "Observation",
      id: "cc9de5a0-9f1b-3dce-13e6-e1f8ab295571",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2093-3",
            display: "Total Cholesterol",
          },
        ],
        text: "Total Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 178.36,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:f6ee24af-674b-696a-0553-66ed4c7c0248",
    resource: {
      resourceType: "Observation",
      id: "f6ee24af-674b-696a-0553-66ed4c7c0248",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2571-8",
            display: "Triglycerides",
          },
        ],
        text: "Triglycerides",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 127.01,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:9bac7907-b192-26af-73b1-cf1301e6e4bc",
    resource: {
      resourceType: "Observation",
      id: "9bac7907-b192-26af-73b1-cf1301e6e4bc",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "18262-6",
            display: "Low Density Lipoprotein Cholesterol",
          },
        ],
        text: "Low Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 125.04,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:adade872-e4d4-9a8c-d8c6-be8b905ced48",
    resource: {
      resourceType: "Observation",
      id: "adade872-e4d4-9a8c-d8c6-be8b905ced48",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2085-9",
            display: "High Density Lipoprotein Cholesterol",
          },
        ],
        text: "High Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 64.171,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:e33310ce-f002-ef0e-f303-1d5c62e8091a",
    resource: {
      resourceType: "Observation",
      id: "e33310ce-f002-ef0e-f303-1d5c62e8091a",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bodyheight",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "8302-2",
            display: "Body Height",
          },
        ],
        text: "Body Height",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      valueQuantity: {
        value: 180.6,
        unit: "cm",
        system: "http://unitsofmeasure.org",
        code: "cm",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:5e4005a2-2681-6670-1355-4086dab76a43",
    resource: {
      resourceType: "Observation",
      id: "5e4005a2-2681-6670-1355-4086dab76a43",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72514-3",
            display:
              "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          },
        ],
        text: "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      valueQuantity: {
        value: 3,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:58aec494-c826-275d-8294-bfb2fbfe3992",
    resource: {
      resourceType: "Observation",
      id: "58aec494-c826-275d-8294-bfb2fbfe3992",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bodyweight",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "29463-7",
            display: "Body Weight",
          },
        ],
        text: "Body Weight",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      valueQuantity: {
        value: 95.4,
        unit: "kg",
        system: "http://unitsofmeasure.org",
        code: "kg",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:98234227-68f8-3188-e019-62e2eefdd450",
    resource: {
      resourceType: "Observation",
      id: "98234227-68f8-3188-e019-62e2eefdd450",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bmi",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "39156-5",
            display: "Body Mass Index",
          },
        ],
        text: "Body Mass Index",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      valueQuantity: {
        value: 29.24,
        unit: "kg/m2",
        system: "http://unitsofmeasure.org",
        code: "kg/m2",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:90a62663-dd0d-126d-7ec4-06b71451a637",
    resource: {
      resourceType: "Observation",
      id: "90a62663-dd0d-126d-7ec4-06b71451a637",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/bp",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "85354-9",
            display: "Blood Pressure",
          },
        ],
        text: "Blood Pressure",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "8462-4",
                display: "Diastolic Blood Pressure",
              },
            ],
            text: "Diastolic Blood Pressure",
          },
          valueQuantity: {
            value: 79,
            unit: "mm[Hg]",
            system: "http://unitsofmeasure.org",
            code: "mm[Hg]",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "8480-6",
                display: "Systolic Blood Pressure",
              },
            ],
            text: "Systolic Blood Pressure",
          },
          valueQuantity: {
            value: 106,
            unit: "mm[Hg]",
            system: "http://unitsofmeasure.org",
            code: "mm[Hg]",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:003fb256-c292-cfb9-dffd-41013ba8347d",
    resource: {
      resourceType: "Observation",
      id: "003fb256-c292-cfb9-dffd-41013ba8347d",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/heartrate",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "8867-4", display: "Heart rate" },
        ],
        text: "Heart rate",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      valueQuantity: {
        value: 71,
        unit: "/min",
        system: "http://unitsofmeasure.org",
        code: "/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:1b5708bc-1fa3-93e9-7321-3a97b1d35511",
    resource: {
      resourceType: "Observation",
      id: "1b5708bc-1fa3-93e9-7321-3a97b1d35511",
      meta: {
        profile: [
          "http://hl7.org/fhir/StructureDefinition/resprate",
          "http://hl7.org/fhir/StructureDefinition/vitalsigns",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "vital-signs",
              display: "vital-signs",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "9279-1",
            display: "Respiratory rate",
          },
        ],
        text: "Respiratory rate",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      valueQuantity: {
        value: 12,
        unit: "/min",
        system: "http://unitsofmeasure.org",
        code: "/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:05f0cdf9-5295-0130-4dee-d26c500e1624",
    resource: {
      resourceType: "Observation",
      id: "05f0cdf9-5295-0130-4dee-d26c500e1624",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6690-2",
            display: "Leukocytes [#/volume] in Blood by Automated count",
          },
        ],
        text: "Leukocytes [#/volume] in Blood by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      valueQuantity: {
        value: 5.8877,
        unit: "10*3/uL",
        system: "http://unitsofmeasure.org",
        code: "10*3/uL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:0823534e-b22f-4e9d-fd5d-5dd9973b19ea",
    resource: {
      resourceType: "Observation",
      id: "0823534e-b22f-4e9d-fd5d-5dd9973b19ea",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "789-8",
            display: "Erythrocytes [#/volume] in Blood by Automated count",
          },
        ],
        text: "Erythrocytes [#/volume] in Blood by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      valueQuantity: {
        value: 4.8665,
        unit: "10*6/uL",
        system: "http://unitsofmeasure.org",
        code: "10*6/uL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:bec5c14c-6356-937d-d09d-9a4084c66aa1",
    resource: {
      resourceType: "Observation",
      id: "bec5c14c-6356-937d-d09d-9a4084c66aa1",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "718-7",
            display: "Hemoglobin [Mass/volume] in Blood",
          },
        ],
        text: "Hemoglobin [Mass/volume] in Blood",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      valueQuantity: {
        value: 13.277,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:8fc2f583-cd72-e4fd-7f3f-a3d4d0020ad2",
    resource: {
      resourceType: "Observation",
      id: "8fc2f583-cd72-e4fd-7f3f-a3d4d0020ad2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "4544-3",
            display: "Hematocrit [Volume Fraction] of Blood by Automated count",
          },
        ],
        text: "Hematocrit [Volume Fraction] of Blood by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      valueQuantity: {
        value: 36.134,
        unit: "%",
        system: "http://unitsofmeasure.org",
        code: "%",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:ead00780-4c8a-2a14-40c1-05b2be84c5d6",
    resource: {
      resourceType: "Observation",
      id: "ead00780-4c8a-2a14-40c1-05b2be84c5d6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "787-2",
            display: "MCV [Entitic volume] by Automated count",
          },
        ],
        text: "MCV [Entitic volume] by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      valueQuantity: {
        value: 91.423,
        unit: "fL",
        system: "http://unitsofmeasure.org",
        code: "fL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:96d1a8f5-01c8-c99f-2463-3733a087049b",
    resource: {
      resourceType: "Observation",
      id: "96d1a8f5-01c8-c99f-2463-3733a087049b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "785-6",
            display: "MCH [Entitic mass] by Automated count",
          },
        ],
        text: "MCH [Entitic mass] by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      valueQuantity: {
        value: 29.801,
        unit: "pg",
        system: "http://unitsofmeasure.org",
        code: "pg",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:293ad538-0f64-96cd-155c-1a8533b1aaa7",
    resource: {
      resourceType: "Observation",
      id: "293ad538-0f64-96cd-155c-1a8533b1aaa7",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "786-4",
            display: "MCHC [Mass/volume] by Automated count",
          },
        ],
        text: "MCHC [Mass/volume] by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      valueQuantity: {
        value: 35.287,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:2a6283f0-e597-9fbc-ae77-5076cf8f3f5d",
    resource: {
      resourceType: "Observation",
      id: "2a6283f0-e597-9fbc-ae77-5076cf8f3f5d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "21000-5",
            display:
              "Erythrocyte distribution width [Entitic volume] by Automated count",
          },
        ],
        text: "Erythrocyte distribution width [Entitic volume] by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      valueQuantity: {
        value: 39.623,
        unit: "fL",
        system: "http://unitsofmeasure.org",
        code: "fL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:af75530e-3226-c264-1a58-75930b0fe77f",
    resource: {
      resourceType: "Observation",
      id: "af75530e-3226-c264-1a58-75930b0fe77f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "777-3",
            display: "Platelets [#/volume] in Blood by Automated count",
          },
        ],
        text: "Platelets [#/volume] in Blood by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      valueQuantity: {
        value: 339.56,
        unit: "10*3/uL",
        system: "http://unitsofmeasure.org",
        code: "10*3/uL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:e3835bfb-4cc2-2bb3-57fb-9c70f294f2f4",
    resource: {
      resourceType: "Observation",
      id: "e3835bfb-4cc2-2bb3-57fb-9c70f294f2f4",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "32207-3",
            display:
              "Platelet distribution width [Entitic volume] in Blood by Automated count",
          },
        ],
        text: "Platelet distribution width [Entitic volume] in Blood by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      valueQuantity: {
        value: 507.25,
        unit: "fL",
        system: "http://unitsofmeasure.org",
        code: "fL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:1479a80e-cecc-24fa-8712-9949620102ca",
    resource: {
      resourceType: "Observation",
      id: "1479a80e-cecc-24fa-8712-9949620102ca",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "32623-1",
            display:
              "Platelet mean volume [Entitic volume] in Blood by Automated count",
          },
        ],
        text: "Platelet mean volume [Entitic volume] in Blood by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      valueQuantity: {
        value: 11.961,
        unit: "fL",
        system: "http://unitsofmeasure.org",
        code: "fL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:11d9f849-36f4-d387-62b2-f2ca62960b7d",
    resource: {
      resourceType: "Observation",
      id: "11d9f849-36f4-d387-62b2-f2ca62960b7d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-smokingstatus",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72166-2",
            display: "Tobacco smoking status NHIS",
          },
        ],
        text: "Tobacco smoking status NHIS",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "8517006",
            display: "Former smoker",
          },
        ],
        text: "Former smoker",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:a8fad43a-bedf-ce92-e3b1-8c29c93ab779",
    resource: {
      resourceType: "Observation",
      id: "a8fad43a-bedf-ce92-e3b1-8c29c93ab779",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "93025-5",
            display:
              "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]",
          },
        ],
        text: "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T03:32:46-04:00",
      issued: "2021-04-02T03:32:46.908-04:00",
      component: [
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "76501-6",
                display:
                  "In the past year, have you been afraid of your partner or ex-partner?",
              },
            ],
            text: "In the past year, have you been afraid of your partner or ex-partner?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93026-3",
                display:
                  "Do you feel physically and emotionally safe where you currently live?",
              },
            ],
            text: "Do you feel physically and emotionally safe where you currently live?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA33-6", display: "Yes" },
            ],
            text: "Yes",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93027-1",
                display: "Are you a refugee?",
              },
            ],
            text: "Are you a refugee?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93028-9",
                display:
                  "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?",
              },
            ],
            text: "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA33-6", display: "Yes" },
            ],
            text: "Yes",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93038-8",
                display:
                  "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?",
              },
            ],
            text: "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA6568-5",
                display: "Not at all",
              },
            ],
            text: "Not at all",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93029-7",
                display:
                  "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?",
              },
            ],
            text: "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30131-9",
                display: "3 to 5 times a week",
              },
            ],
            text: "3 to 5 times a week",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93030-5",
                display:
                  "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?",
              },
            ],
            text: "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93031-3",
                display:
                  "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?",
              },
            ],
            text: "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30122-8",
                display: "I choose not to answer this question",
              },
            ],
            text: "I choose not to answer this question",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "63586-2",
                display:
                  "During the past year, what was the total combined income for you and the family members you live with? This information will help us determine if you are eligible for any benefits.",
              },
            ],
            text: "During the past year, what was the total combined income for you and the family members you live with? This information will help us determine if you are eligible for any benefits.",
          },
          valueQuantity: {
            value: 67216,
            unit: "/a",
            system: "http://unitsofmeasure.org",
            code: "/a",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "76437-3",
                display: "What is your main insurance?",
              },
            ],
            text: "What is your main insurance?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA15652-3",
                display: "Medicare",
              },
            ],
            text: "Medicare",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "67875-5",
                display: "What is your current work situation?",
              },
            ],
            text: "What is your current work situation?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30136-8",
                display: "Full-time work",
              },
            ],
            text: "Full-time work",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "82589-3",
                display:
                  "What is the highest level of school that you have finished?",
              },
            ],
            text: "What is the highest level of school that you have finished?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30192-1",
                display: "High school diploma or GED",
              },
            ],
            text: "High school diploma or GED",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "56799-0",
                display: "What address do you live at?",
              },
            ],
            text: "What address do you live at?",
          },
          valueString: "898 Bernier Mews",
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93033-9",
                display: "Are you worried about losing your housing?",
              },
            ],
            text: "Are you worried about losing your housing?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "71802-3",
                display: "What is your housing situation today?",
              },
            ],
            text: "What is your housing situation today?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA30189-7",
                display: "I have housing",
              },
            ],
            text: "I have housing",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "63512-8",
                display:
                  "How many family members, including yourself, do you currently live with?",
              },
            ],
            text: "How many family members, including yourself, do you currently live with?",
          },
          valueQuantity: {
            value: 5,
            unit: "{#}",
            system: "http://unitsofmeasure.org",
            code: "{#}",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "54899-0",
                display: "What language are you most comfortable speaking?",
              },
            ],
            text: "What language are you most comfortable speaking?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA43-5",
                display: "English",
              },
            ],
            text: "English",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93034-7",
                display:
                  "Have you been discharged from the armed forces of the United States?",
              },
            ],
            text: "Have you been discharged from the armed forces of the United States?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "93035-4",
                display:
                  "At any point in the past 2 years, has season or migrant farm work been your or your family's main source of income?",
              },
            ],
            text: "At any point in the past 2 years, has season or migrant farm work been your or your family's main source of income?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "32624-9",
                display: "Which race(s) are you?",
              },
            ],
            text: "Which race(s) are you?",
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://loinc.org",
                code: "LA4457-3",
                display: "White",
              },
            ],
            text: "White",
          },
        },
        {
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "56051-6",
                display: "Are you Hispanic or Latino?",
              },
            ],
            text: "Are you Hispanic or Latino?",
          },
          valueCodeableConcept: {
            coding: [
              { system: "http://loinc.org", code: "LA32-8", display: "No" },
            ],
            text: "No",
          },
        },
      ],
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:a8c51444-bcf2-af5c-9446-5c7cc354eddd",
    resource: {
      resourceType: "Observation",
      id: "a8c51444-bcf2-af5c-9446-5c7cc354eddd",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59460-6",
            display: "Fall risk total [Morse Fall Scale]",
          },
        ],
        text: "Fall risk total [Morse Fall Scale]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T03:48:55-04:00",
      issued: "2021-04-02T03:48:55.908-04:00",
      valueQuantity: {
        value: 38,
        unit: "{#}",
        system: "http://unitsofmeasure.org",
        code: "{#}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:64835b06-4cb9-ff95-6d63-c7498eff8181",
    resource: {
      resourceType: "Observation",
      id: "64835b06-4cb9-ff95-6d63-c7498eff8181",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59461-4",
            display: "Fall risk level [Morse Fall Scale]",
          },
        ],
        text: "Fall risk level [Morse Fall Scale]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T03:48:55-04:00",
      issued: "2021-04-02T03:48:55.908-04:00",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://loinc.org",
            code: "LA13039-5",
            display: "Moderate Risk (MFS Score 25 - 45)",
          },
        ],
        text: "Moderate Risk (MFS Score 25 - 45)",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:2dab3210-6744-29fd-f8d2-6a5a933d4c3a",
    resource: {
      resourceType: "Observation",
      id: "2dab3210-6744-29fd-f8d2-6a5a933d4c3a",
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "survey",
              display: "survey",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "75626-2",
            display: "Total score [AUDIT-C]",
          },
        ],
        text: "Total score [AUDIT-C]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T04:30:17-04:00",
      issued: "2021-04-02T04:30:17.908-04:00",
      valueQuantity: {
        value: 1,
        unit: "{score}",
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:3ebf2acd-101f-97ea-c400-c24e74efceec",
    resource: {
      resourceType: "Observation",
      id: "3ebf2acd-101f-97ea-c400-c24e74efceec",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2339-0", display: "Glucose" },
        ],
        text: "Glucose",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 88.64,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:764fb74c-eb2d-94ba-5335-350d7a214478",
    resource: {
      resourceType: "Observation",
      id: "764fb74c-eb2d-94ba-5335-350d7a214478",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6299-2",
            display: "Urea Nitrogen",
          },
        ],
        text: "Urea Nitrogen",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 14.11,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:bd49bb5d-b67d-262c-82b8-8904bebbe363",
    resource: {
      resourceType: "Observation",
      id: "bd49bb5d-b67d-262c-82b8-8904bebbe363",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "38483-4",
            display: "Creatinine",
          },
        ],
        text: "Creatinine",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 2.9962,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:147a4749-be28-f69a-5324-dfaf0bcc7dd5",
    resource: {
      resourceType: "Observation",
      id: "147a4749-be28-f69a-5324-dfaf0bcc7dd5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "49765-1", display: "Calcium" },
        ],
        text: "Calcium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 9.31,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:fe6f6020-1eda-52fd-9900-5f1c5912f103",
    resource: {
      resourceType: "Observation",
      id: "fe6f6020-1eda-52fd-9900-5f1c5912f103",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2947-0", display: "Sodium" },
        ],
        text: "Sodium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 142.36,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:caaac0a5-dcb0-8ad7-bb97-de03812761b4",
    resource: {
      resourceType: "Observation",
      id: "caaac0a5-dcb0-8ad7-bb97-de03812761b4",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "6298-4", display: "Potassium" },
        ],
        text: "Potassium",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 5.18,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:ff8b358c-bc63-ea53-66cf-bd1dcc183d00",
    resource: {
      resourceType: "Observation",
      id: "ff8b358c-bc63-ea53-66cf-bd1dcc183d00",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          { system: "http://loinc.org", code: "2069-3", display: "Chloride" },
        ],
        text: "Chloride",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 107.33,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:00f308e6-639b-b2a9-4118-81b103e1015a",
    resource: {
      resourceType: "Observation",
      id: "00f308e6-639b-b2a9-4118-81b103e1015a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "20565-8",
            display: "Carbon Dioxide",
          },
        ],
        text: "Carbon Dioxide",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 28.83,
        unit: "mmol/L",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:472530d4-9300-b4c7-237a-056a4d9613d1",
    resource: {
      resourceType: "Observation",
      id: "472530d4-9300-b4c7-237a-056a4d9613d1",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "33914-3",
            display: "Glomerular filtration rate/1.73 sq M.predicted",
          },
        ],
        text: "Glomerular filtration rate/1.73 sq M.predicted",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 87.332,
        unit: "mL/min",
        system: "http://unitsofmeasure.org",
        code: "mL/min",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:caba3582-b90c-722d-bd81-4f701d222592",
    resource: {
      resourceType: "Observation",
      id: "caba3582-b90c-722d-bd81-4f701d222592",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2885-2",
            display: "Protein [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Protein [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 67.611,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:03290258-322e-e818-570a-6ab57c35edb1",
    resource: {
      resourceType: "Observation",
      id: "03290258-322e-e818-570a-6ab57c35edb1",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1751-7",
            display: "Albumin [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Albumin [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 5.0381,
        unit: "g/dL",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:b46f166a-37e3-68e2-77a0-cd8ebfd33b28",
    resource: {
      resourceType: "Observation",
      id: "b46f166a-37e3-68e2-77a0-cd8ebfd33b28",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "10834-0",
            display: "Globulin [Mass/volume] in Serum by calculation",
          },
        ],
        text: "Globulin [Mass/volume] in Serum by calculation",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 3.0315,
        unit: "g/L",
        system: "http://unitsofmeasure.org",
        code: "g/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:4126c830-56ef-27a8-63c6-268626e8a31f",
    resource: {
      resourceType: "Observation",
      id: "4126c830-56ef-27a8-63c6-268626e8a31f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1975-2",
            display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
          },
        ],
        text: "Bilirubin.total [Mass/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 0.45257,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:b0119079-bb8a-5a2d-7518-a26eb8034f6d",
    resource: {
      resourceType: "Observation",
      id: "b0119079-bb8a-5a2d-7518-a26eb8034f6d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "6768-6",
            display:
              "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 66.947,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:aa0790a5-52df-14fd-804e-ffb8d070b15e",
    resource: {
      resourceType: "Observation",
      id: "aa0790a5-52df-14fd-804e-ffb8d070b15e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1742-6",
            display:
              "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 24.745,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:769cc808-aa57-45d5-8492-0305fc821cb6",
    resource: {
      resourceType: "Observation",
      id: "769cc808-aa57-45d5-8492-0305fc821cb6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "1920-8",
            display:
              "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
          },
        ],
        text: "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 18.558,
        unit: "U/L",
        system: "http://unitsofmeasure.org",
        code: "U/L",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:2ddfacb6-38e5-7042-5820-20fceb408ef6",
    resource: {
      resourceType: "Observation",
      id: "2ddfacb6-38e5-7042-5820-20fceb408ef6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2093-3",
            display: "Total Cholesterol",
          },
        ],
        text: "Total Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 153.45,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:ab9c1b5f-e30a-1087-97a1-715e2fff26dd",
    resource: {
      resourceType: "Observation",
      id: "ab9c1b5f-e30a-1087-97a1-715e2fff26dd",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2571-8",
            display: "Triglycerides",
          },
        ],
        text: "Triglycerides",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 138.4,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:37c8d296-ba11-c8c3-c55f-3f565e1f1031",
    resource: {
      resourceType: "Observation",
      id: "37c8d296-ba11-c8c3-c55f-3f565e1f1031",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "18262-6",
            display: "Low Density Lipoprotein Cholesterol",
          },
        ],
        text: "Low Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 147.98,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
  {
    fullUrl: "urn:uuid:af74ed3a-4026-bc53-d4f3-cb13373fe7be",
    resource: {
      resourceType: "Observation",
      id: "af74ed3a-4026-bc53-d4f3-cb13373fe7be",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "laboratory",
              display: "laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "2085-9",
            display: "High Density Lipoprotein Cholesterol",
          },
        ],
        text: "High Density Lipoprotein Cholesterol",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      valueQuantity: {
        value: 34.555,
        unit: "mg/dL",
        system: "http://unitsofmeasure.org",
        code: "mg/dL",
      },
    },
    request: { method: "POST", url: "Observation" },
  },
];

export default entities;
