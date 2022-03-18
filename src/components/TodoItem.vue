<template>
  <div class="TodoItem">
    <div class="checkbox">
      <input 
        type="checkbox" 
        :checked="checked"
        v-model="checked"
      />
      <span
        :class="[{done: checked}, 'text']"
      >
        {{todo.text}}
      </span>
    </div>
    <div class="remove">
      <button
        @click="onDelete"
      >
      삭제
      </button>
    </div>
  </div>
</template>


<script>
import { toRefs } from '@vue/reactivity';
export default {
  name: 'TodoItem',
  props: {
    todo: Object
  },
  setup(props, context) {
    const {id, checked} = toRefs(props.todo);

    function onDelete() {
      context.emit('delete', id.value);
    }

    return {
      checked,
      onDelete,
    }
  }
}
</script>