<template>
  <div class="ViewTodoList">
    <TODOContainer />
  </div>
</template>

<script>
import TODOContainer from './components/TODOContainer.vue'


export default {
  name: 'ViewTodoList',
  components: {
    TODOContainer,
  },
}
</script>

<style lang="scss">
.ViewTodoList {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
