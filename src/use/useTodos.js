import { ref } from "vue";

function createBulkTodos () {
  const array = [];
  for (let i = 1; i <= 5; i++) {
    array.push({
      id: i,
      text: `할 일  ${i}`,
      checked: false,
    });
  }
  return array;
}

const todos =  ref(createBulkTodos());

export function useTodos() {

  function getTodos() {
    return todos.value;
  }

  function insertTodo(text) {
    const id = todos.value.length;
    todos.value = todos.value.concat({
      id,
      text,
      checked: false
    });
  }

  function deleteTodo(id) {
    todos.value = todos.value.filter(todo => id !== todo.id);
  }

  return {
    getTodos,
    insertTodo,
    deleteTodo,
  }
}