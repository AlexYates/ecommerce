<template>
  <h1 class="font-bold p-4 pt-2 text-center text-2xl uppercase">{{ title }}</h1>
</template>

<script>
export default {
  name: 'Title',
  computed: {
    title() {
      const { params } = this.$route
      const name = params[Object.keys(params)[0]]
      return name
        ? name.includes('---')
          ? name.split('---')[0]
          : name
        : this.$route.name
    },
  },
}
</script>
