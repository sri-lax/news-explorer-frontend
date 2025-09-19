const baseUrl = "http://localhost:3001/items";

export const getSavedArticles = () => fetch(baseUrl).then((res) => res.json());

export const saveArticle = (article) => {
  const enriched = {
    ...article,
    id: article._id, // required for json-server routing
  };

  return fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(enriched),
  }).then((res) => res.json());
};

export const deleteArticle = (id) =>
  fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
