<template>
  <footer>
    <ol class="flex flex-wrap px-2 py-8 text-center">
      <li v-for="{ name, path } in items" :key="name" class="w-1/2">
        <nuxt-link class="inline-flex p-2 underline" :to="path">{{
          name
        }}</nuxt-link>
      </li>
    </ol>
  </footer>
</template>

<script>
export default {
  name: 'Tail',
  data() {
    return {
      items: [
        { name: 'Women', path: '/products' },
        { name: 'Men', path: '/products' },
        { name: 'Kids', path: '/products' },
        { name: 'Home', path: '/products' },
        { name: 'Sale', path: '/products' },
      ],
    }
  },
}
</script>
