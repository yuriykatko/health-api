import patients from "../../data/patients";

export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const patient = patients.find((pat) =>
    pat.resource.identifier.some((patId) => patId.value === id)
  );

  res.status(200).json(patient ?? "not found");
}
