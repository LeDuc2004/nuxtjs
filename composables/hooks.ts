async function fetchData(
  url: string,
  params: Record<string, string | number | boolean | undefined> = {}
) {
  const config = useRuntimeConfig();
  const apiBaseUrl = config.public.MICROCMS_API_BASE_URL;
  const apiKey = config.public.MICROCMS_API_KEY;
  return await $fetch(url, {
    baseURL: `${apiBaseUrl}`,
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
    params,
  });
}

export async function getCourses(url: string, params: any) {
  try {
    const data = await fetchData(url, params);
    return data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
}
