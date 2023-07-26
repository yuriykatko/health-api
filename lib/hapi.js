export async function getResourceById(resourceName, id) {
  const response = await fetch(
    `https://hapi.fhir.org/baseR4/${resourceName}/${id}?_format=json`
  );

  return response.json();
}
