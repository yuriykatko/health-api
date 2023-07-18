const entities = [
  {
    fullUrl: "urn:uuid:2eef4446-c82b-fd7d-5d02-804f110233ae",
    resource: {
      resourceType: "Device",
      id: "2eef4446-c82b-fd7d-5d02-804f110233ae",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-implantable-device",
        ],
      },
      udiCarrier: [
        {
          deviceIdentifier: "68025610507347",
          carrierHRF:
            "(01)68025610507347(11)200306(17)450321(10)58846609(21)782901193407",
        },
      ],
      status: "active",
      distinctIdentifier: "68025610507347",
      manufactureDate: "2020-03-06T01:40:58-05:00",
      expirationDate: "2045-03-21T02:40:58-04:00",
      lotNumber: "58846609",
      serialNumber: "782901193407",
      deviceName: [
        {
          name: "Implantable cardiac pacemaker (physical object)",
          type: "user-friendly-name",
        },
      ],
      type: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "706004007",
            display: "Implantable cardiac pacemaker (physical object)",
          },
        ],
        text: "Implantable cardiac pacemaker (physical object)",
      },
      patient: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
    },
    request: { method: "POST", url: "Device" },
  },
];

export default entities;
