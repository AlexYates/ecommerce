<template>
  <button
    class="bg-gray-500 inline-flex items-center mb-2 mr-2 px-2 py-1 rounded text-xs text-white"
    @click="search"
  >
    <Icon class="mr-2" :size="'xs'">
      <path d="M18 13 L26 2 8 13 14 19 6 30 24 19 Z" />
    </Icon>
    {{ search }}
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SearchItem',
  props: {
    search: {
      required: true,
      type: string,
    },
  },
  methods: {
    ...mapActions('search', {
      search:'search'
    })
  },
}
</script>
