const TodosKey = "reactTodo";

export const getLocalStorageTodoData = () => {
  const rawTodo = localStorage.getItem(TodosKey);
  if (!rawTodo) return [];
  return JSON.parse(rawTodo);
};


export const setLocalStorageTodoData = (task) => {
   return localStorage.setItem(TodosKey, JSON.stringify(task));

};

