<template>
  <div class="top-and-tail">
    <div class="top"><slot name="top"></slot></div>
    <div class="bg-gray-500 tail"><slot name="tail"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TopAndTail',
}
</script>

<style scoped>
.top-and-tail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.top {
  flex: 1;
}
</style>
