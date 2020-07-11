<template>
  <button
    class="border flex items-center justify-center px-4 py-2"
    :class="{
      'bg-gray-200': !primary,
      'bg-yellow-400': primary,
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    primary: {
      default: false,
      type: Boolean,
    },
  },
}
</script>
