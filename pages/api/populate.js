import patient1 from "../../data/fhir-input/Anna632_Brekke496_0a56854c-d96f-e6b8-40fb-d55b3e438d27.json";
import patient2 from "../../data/fhir-input/Bob965_Rutherford999_29ee0922-257f-c9bb-6baf-ed2200df0cc0.json";
import patient3 from "../../data/fhir-input/Carol737_Erdman779_479e6c57-e333-b5fb-4e42-c42ca864660d.json";
import patient4 from "../../data/fhir-input/Daryl568_Zemlak964_d6082275-bd0e-1ad4-4d3b-169b78db32f6.json";
import patient5 from "../../data/fhir-input/Edward499_Rodriguez71_0b575c00-26a1-6156-8ff8-369e3071bb77.json";
import patient6 from "../../data/fhir-input/Frances376_Smitham825_9d92805b-c25a-c7ad-60ca-80c93ffb80b1.json";

import fs from "node:fs";

const allObj = [
  { type: "AllergyIntolerance", entries: [] },
  { type: "CarePlan", entries: [] },
  { type: "CareTeam", entries: [] },
  { type: "Claim", entries: [] },
  { type: "Condition", entries: [] },
  { type: "Device", entries: [] },
  { type: "DiagnosticReport", entries: [] },
  { type: "DocumentReference", entries: []},
  { type: "Encounter", entries: [] },
  { type: "ExplanationOfBenefit", entries: [] },
  { type: "ImagingStudy", entries: [] },
  { type: "Immunization", entries: [] },
  { type: "MedicationRequest", entries: [] },
  { type: "Observation", entries: [] },
  { type: "Patient", entries: [] },
  { type: "Procedure", entries: [] },
  { type: "Provenance", entries: [] },
];

const allData = [
  // ...patient1.entry,
  // ...patient2.entry,
  // ...patient3.entry,
  // ...patient4.entry,
  // ...patient5.entry,
  ...patient6.entry,
];

export default async function handler(req, res) {
  const query = req.query;
  const { run } = query;

  if (run) {
    allData.forEach(function classify(item) {
      const typeObj = allObj.find(
        (obj) => obj.type === item.resource.resourceType
      );
  
      typeObj.entries.push(item);
    });
  
    allObj.forEach(function saveEntity(entity) {
      const content = `
          const entities = ${JSON.stringify(entity.entries)};
  
          export default entities;
      `;
  
      fs.writeFileSync(`./data/r4/${entity.type}.js`, content, "utf8");
    });
  }
  
  res.status(200).json("ok");
}
