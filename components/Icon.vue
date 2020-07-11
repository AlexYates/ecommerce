<template>
  <svg
    fill="none"
    :height="square"
    stroke="currentcolor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1"
    viewBox="0 0 32 32"
    :width="square"
    xmlns="http://www.w3.org/2000/svg"
  >
    <slot />
  </svg>
</template>

<script>
export default {
  name: 'IconBase',
  props: {
    size: {
      default: 'md',
      type: String,
      validator(value) {
        return ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].includes(value)
      },
    },
  },
  computed: {
    square() {
      switch (this.size) {
        case '2xl':
          return 64
        case 'xl':
          return 48
        case 'lg':
          return 32
        case 'md':
          return 24
        case 'sm':
          return 16
        case 'xs':
          return 12
        default:
          return 24
      }
    },
  },
}
</script>
