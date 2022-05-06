import { BASE_TODOS, BASE_URL, HttpFirebase } from "./HttpFirebase";

export const getTodos = async () => {
  const todosResponse = await HttpFirebase.get(`${BASE_URL}/${BASE_TODOS}`);
  const result = todosResponse
    ? Object.keys(todosResponse).map((key) => ({
        ...todosResponse[key],
        id: key,
      }))
    : [];
  return result;
};

export const addTask = async (title, done = false) => {
  const { name } = await HttpFirebase.post(
    `${BASE_URL}/${BASE_TODOS}`,
    { title, done }
  );
  return name;
}

export const deleteTask = async (id) => {

}
