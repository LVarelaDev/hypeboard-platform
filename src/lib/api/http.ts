export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function httpGet<T>(url: string): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${url}`);

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  return res.json();
}
