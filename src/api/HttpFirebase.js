export const BASE_URL =
  "https://rn-todo-app-14a2f-default-rtdb.europe-west1.firebasedatabase.app";
export const BASE_TODOS = "todos.json";

const request = async (url, method = "GET", data) => {
  const config = {
    method,
    headers: HttpFirebase.HEADERS,
  };

  if (method === "POST" || method === "PATCH") {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(url, config);
  return await response.json();
};

export class HttpFirebase {
  static HEADERS = { "Content-Type": "application/json" };

  static async get(url) {
    return request(url);
  }

  static async post(url, data = {}) {
    return await request(url, "POST", data);
  }

  static async delete(url) {
    return await request(url, "DELETE");
  }

  static async patch(url, data = {}) {
    return await request(url, "PATCH", data);
  }
}
