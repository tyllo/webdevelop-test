<template>
  <div class="TODOContainer">
    <div
      class="TODOContainer__title"
      v-text="'ToDo App'"
    />

    <div class="TODOContainer__input-container">
      <input
        v-model="form.name"
        placeholder="Название Вашего TODO"
        class="TODOContainer__input"
      >

      <button
        class="TODOContainer__button-add"
        :disabled="!form.name"
        @click="onAddTODO"
        v-text="'+'"
      />
    </div>

    <div class="TODOContainer__todo-container">
      <template v-for="(item, index) in todoList">
        <TODOData
          :key="index"
          :data="item"
          class="TODOContainer__todo"
          @remove="onRemove(index)"
          @update="onUpdate(index, $event)"
        />
      </template>
    </div>
  </div>
</template>

<script>
import TODOData, {
  createDefaultData,
} from './TODOData.vue'


export default {
  name: 'TODOContainer',
  components: {
    TODOData,
  },
  data: () => ({
    form: createDefaultData(),
    todoList: [],
  }),
  methods: {
    onAddTODO() {
      this.todoList.push(this.form)
      this.form = createDefaultData()
    },
    onUpdate(index, data) {
      this.todoList.splice(index, 1, data)
    },
    onRemove(index) {
      this.todoList.splice(index, 1)
    },
  },
}
</script>

<style lang="scss">
$todo-width: 400px;
$todo-height: 600px;
$input-height: 40px;

.TODOContainer {
  width: $todo-width;
  height: $todo-height;
  padding: 30px;
  background-color: white;
  border-radius: 2 * $border-radius-main;
  box-shadow: 0 0 10px rgba($color-lightblue, 0.2);

  &__title {
    margin-bottom: 25px;
    font-size: 24px;
    font-weight: 700;
  }

  &__input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }

  &__input {
    width: 100%;
    height: $input-height;
    padding: 8px;
    border: 1px solid $color-lightblue;
    border-radius: $border-radius-main;
  }

  &__button-add {
    width: $input-height;
    height: $input-height;
    margin-left: 10px;
    font-size: 24px;
    color: white;
    cursor: pointer;
    background-color: $color-blue;
    border: none;
    border-radius: $border-radius-main;

    &[disabled] {
      cursor: default;
      background-color: $color-lightblue;
    }
  }

  &__todo-container {
    max-height: 420px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  &__todo {
    & + & {
      margin-top: 10px;
    }
  }
}
</style>
