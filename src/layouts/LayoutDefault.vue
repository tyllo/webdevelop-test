<template>
  <div class="LayoutDefault">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
}
</script>

<style lang="scss">
.LayoutDefault {
  height: 100%;
  background-color: $color-background;
}
</style>
