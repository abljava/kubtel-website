export async function getStrapiData(path: string) {
  const baseUrl = 'http://localhost:1337';
  try {
    const response = await fetch(baseUrl + path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}