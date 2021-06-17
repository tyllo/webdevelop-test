<template>
  <div
    class="TODOData"
    @dblclick="onEdit"
  >
    <input
      v-if="form"
      ref="input"
      v-model="form.name"
      class="TODOData__input"
      @keypress.enter="onSave"
      @blur="onCancel"
    >
    <div
      v-else
      v-text="data.name"
    />
    <button
      class="TODOData__button-close"
      @click="$emit('remove')"
      v-text="'x'"
    />
  </div>
</template>

<script>

const X_CHAR_CODE = 'x'.charCodeAt()

export const createDefaultData = (data) => ({
  name: '',
  ...data,
})

export default {
  name: 'TODOData',
  props: {
    data: {
      type: Object,
      validator: (prop) => (
        prop
        && 'name' in prop
      ),
    },
  },
  data: () => ({
    isEdit: false,
    form: null,
  }),
  mounted() {
    document.addEventListener('keypress', this.onKeypress)
  },
  beforeDestroy() {
    document.removeEventListener('keypress', this.onKeypress)
  },
  methods: {
    async onEdit() {
      this.form = createDefaultData(this.data)
      await this.$nextTick()
      this.$refs.input.focus()
    },
    onCancel() {
      this.form = null
    },
    onKeypress(e) {
      if (e.which === X_CHAR_CODE) {
        this.onCancel()
      }
    },
    onSave() {
      this.$emit('update', this.form)
      this.form = null
    },
  },
}
</script>

<style lang="scss">
$todo-height: 30px;

.TODOData {
  $root: &;

  position: relative;
  min-height: $todo-height;
  padding: 12px;
  word-break: break-word;
  background-color: mix($color-lightblue, white, 30%);
  border-radius: $border-radius-main;

  &__input {
    width: 100%;
    min-height: 30px;
  }

  &__button-close {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    padding: 8px;
    color: white;
    cursor: pointer;
    background-color: $color-red;
    border: none;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.25s;
    transform: translate(-33%, 33%);

    #{$root}:hover & {
      opacity: 1;
    }
  }
}
</style>
