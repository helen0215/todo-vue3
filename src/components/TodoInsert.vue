<template>
  <div>
    <form
      @submit.prevent="onClick"
    >
      <input type="text" v-model.trim="text" />
      <button type="submit">추가</button>
    </form>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
export default {
  name: 'TodoInsert',
  setup(_, context) {
    const state = reactive({
      text: '',
    });
    
    function onClick() {
      context.emit('insert', state.text);
      state.text = '';
    }

    return {
      ...toRefs(state),
      onClick
    }
  },
}
</script>