export async function getStrapiData(path: string, pageQuery: any) {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";
  const url = new URL (path, baseUrl)
  url.search = pageQuery

  try {
    const response = await fetch(url.href, {cache: 'no-store'});
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
