<template>
  <div class="TodoList">
    <TodoItem v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  props: {
    todos: Array
  },
  setup(_, context) {
    function onDelete(id) {
      context.emit('delete', id);
    }

    return {
      onDelete
    }
  }
}
</script>

