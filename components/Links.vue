<template>
  <ol v-if="wide" class="flex flex-col items-center justify-center p-2">
    <li v-for="{ name, path } in links" :key="name">
      <nuxt-link class="inline-flex p-2" :to="path">{{ name }}</nuxt-link>
    </li>
  </ol>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ $http }) {
    const links = await $http.$get(`${process.env.baseURL}/api/links`)
    return {
      links,
    }
  },
  computed: {
    ...mapGetters('layout', {
      wide: 'wide',
    }),
  },
}
</script>
