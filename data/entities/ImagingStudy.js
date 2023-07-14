const entities = [
  {
    fullUrl: "urn:uuid:74510969-1c98-4a58-f412-24076511b4c8",
    resource: {
      resourceType: "ImagingStudy",
      id: "74510969-1c98-4a58-f412-24076511b4c8",
      identifier: [
        {
          use: "official",
          system: "urn:ietf:rfc:3986",
          value: "urn:oid:1.2.840.99999999.74068572.1341403822519",
        },
      ],
      status: "available",
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:cc6106da-522a-9b50-dda1-455dbbc23f93" },
      started: "2012-07-04T08:10:22-04:00",
      numberOfSeries: 1,
      numberOfInstances: 1,
      procedureCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "268425006",
              display: "Pelvis X-ray",
            },
          ],
          text: "Pelvis X-ray",
        },
      ],
      series: [
        {
          uid: "1.2.840.99999999.1.46296245.1341403822519",
          number: 1,
          modality: {
            system:
              "http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_29.html",
            code: "DX",
            display: "Digital Radiography",
          },
          numberOfInstances: 1,
          bodySite: {
            system: "http://snomed.info/sct",
            code: "12921003",
            display: "Pelvis",
          },
          started: "2012-07-04T08:10:22-04:00",
          instance: [
            {
              uid: "1.2.840.99999999.1.1.77260207.1341403822519",
              sopClass: {
                system: "urn:ietf:rfc:3986",
                code: "1.2.840.10008.5.1.4.1.1.1.1",
              },
              number: 1,
              title: "Image of pelvis",
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "ImagingStudy" },
  },
  {
    fullUrl: "urn:uuid:c9ba625b-377e-cfc7-b2c3-01a7f5a196e2",
    resource: {
      resourceType: "ImagingStudy",
      id: "c9ba625b-377e-cfc7-b2c3-01a7f5a196e2",
      identifier: [
        {
          use: "official",
          system: "urn:ietf:rfc:3986",
          value: "urn:oid:1.2.840.99999999.29528424.1383313102519",
        },
      ],
      status: "available",
      subject: { reference: "urn:uuid:479e6c57-e333-b5fb-4e42-c42ca864660d" },
      encounter: { reference: "urn:uuid:5cebc1c8-b971-5cd7-b338-5cb29d71c2e3" },
      started: "2013-11-01T09:38:22-04:00",
      numberOfSeries: 1,
      numberOfInstances: 1,
      procedureCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "1225002",
              display: "Upper arm X-ray",
            },
          ],
          text: "Upper arm X-ray",
        },
      ],
      series: [
        {
          uid: "1.2.840.99999999.1.51435912.1383313102519",
          number: 1,
          modality: {
            system:
              "http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_29.html",
            code: "DX",
            display: "Digital Radiography",
          },
          numberOfInstances: 1,
          bodySite: {
            system: "http://snomed.info/sct",
            code: "40983000",
            display: "Arm",
          },
          started: "2013-11-01T09:38:22-04:00",
          instance: [
            {
              uid: "1.2.840.99999999.1.1.58652671.1383313102519",
              sopClass: {
                system: "urn:ietf:rfc:3986",
                code: "1.2.840.10008.5.1.4.1.1.1.1",
              },
              number: 1,
              title: "Image of arm",
            },
          ],
        },
      ],
    },
    request: { method: "POST", url: "ImagingStudy" },
  },
];

export default entities;
