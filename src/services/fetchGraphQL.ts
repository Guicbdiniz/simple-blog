async function fetchGraphQL(
  text: string | null,
  variables: { [key: string]: string }
) {
  const API_URL = process.env.API_URL || "http://0.0.0.0:4000/graphql";

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
}

export default fetchGraphQL;
