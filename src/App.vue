<template>
  <div class="content">
    <TodoInsert
      @insert="onInsert"
    />
    <TodoList 
      :todos="todos" 
      @delete="onDelete"
    />
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import {useTodos} from './use/useTodos';

export default {
  name: 'App',
  components: {
    TodoList,
    TodoInsert,
  },
  setup () {
    const {
      getTodos,
      insertTodo,
      deleteTodo,
    } = useTodos();

    const todos = computed(() => getTodos());

    function onInsert(text) {
      insertTodo(text);
    }

    function onDelete(id) {
      deleteTodo(id);
    }

    return {
      todos,
      onInsert,
      onDelete,
    }
  }
}
</script>

<style>
* {margin: 0; padding: 0;}

.content {
  width: 512px;
  margin: 6rem auto 0 auto;
  border-radius: 4px;
  overflow: hidden;
}
.TodoList {
  box-sizing: border-box;
  direction: ltr;
  height: 513px;
  position: relative;
  width: 512px;
  will-change: transform;
  overflow: hidden auto;
  outline: none;
  min-height: 320px;
  max-height: 513px;
}

.TodoItem {
  padding: 1rem;
  display: flex;
  align-items: center;
  
}
.TodoItem + .TodoItem  {
  border-top: 1px solid #dee2e6;
}

.TodoItem .checkbox {
    cursor: pointer;
    flex: 1 1;
    display: flex;
    align-items: center;
}

.TodoItem .checkbox .text {
  margin-left: 0.5rem;
  flex: 1 1;
}

.TodoItem .checkbox .text.done {
  text-decoration: line-through;
}

.TodoItem .remove {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
}

</style>
