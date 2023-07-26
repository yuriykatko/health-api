export async function getResourceById(resourceName, id) {
  const response = await fetch(
    `https://hapi.fhir.org/baseR4/${resourceName}/${id}?_format=json`
  );

  return response.json();
}

export async function createResource(resourceName, resource) {
  const response = await fetch(`https://hapi.fhir.org/baseR4/${resourceName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resource),
  });

  return await response.json();
}
