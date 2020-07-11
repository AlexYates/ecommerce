<template>
  <ol class="flex items-center justify-center text-sm">
    <li
      v-for="(breadcrumb, breadcrumbIndex) in breadcrumbs"
      :key="breadcrumb.name"
      class="flex items-center justify-center"
    >
      <span v-if="breadcrumbIndex !== 0">/</span>
      <nuxt-link class="p-2" :to="breadcrumb.to">{{
        breadcrumb.name
      }}</nuxt-link>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  computed: {
    breadcrumbs() {
      const slashSplit = this.$route.fullPath.split('/').filter(Boolean)
      const segments = ['', ...slashSplit]
      // TODO: Filter/Mixin  ?
      const capitalise = (str) => {
        const first = str.slice(0, 1).toUpperCase()
        const remainder = str.slice(1)
        return `${first}${remainder}`
      }
      // TODO: Filter/Mixin  ?
      const prettify = (name) => {
        const out = capitalise(decodeURIComponent(name))
        return out.includes('---') ? out.split('---')[0] : out
      }
      return segments.map((name, i, arr) => {
        return i === 0
          ? { name: 'eC', to: '/' }
          : {
              name: prettify(name),
              to: arr.slice(0, i + 1).join('/'),
            }
      })
    },
  },
}
</script>
