import patients from "../../data/patients";

export default async function handler(req, res) {
  res.status(200).json(patients);
}
