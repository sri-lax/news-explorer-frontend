const baseUrl = "http://localhost:3001/items";
const userUrl = "http://localhost:3001/users";

export const getSavedArticles = () => fetch(baseUrl).then((res) => res.json());

export const saveArticle = (article) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(article),
  }).then((res) => {
    if (!res.ok) {
      return res.text().then((errorText) => {
        throw new Error(`Save failed: ${errorText}`);
      });
    }
    return res.json();
  });
};

export const deleteArticle = (id) =>
  fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });

export const registerUser = (user) =>
  fetch(userUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then((res) => res.json());

export const loginUser = async ({ email, password }) => {
  const res = await fetch(`${userUrl}?email=${email}`);
  const users = await res.json();

  const user = users.find((u) => u.password === password);
  if (!user) {
    throw new Error("Login failed: Invalid credentials");
  }

  return user;
};
