const FHIR_SERVER_URL = "https://wh-hc-dev-fe-fhir.azurewebsites.net";

export async function getResourceById(resourceName, id) {
  const response = await fetch(
    `${FHIR_SERVER_URL}/fhir/${resourceName}/${id}?_format=json`
  );

  return response.json();
}

export async function createResource(resourceName, resource) {
  const response = await fetch(`${FHIR_SERVER_URL}/fhir/${resourceName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resource),
  });

  return await response.json();
}
