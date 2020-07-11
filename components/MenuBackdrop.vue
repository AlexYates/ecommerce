<template>
  <div
    v-if="active"
    class="absolute bottom-0 left-0 right-0 top-0"
    style="backgound: rgba(0, 0, 0, 0.25); backdrop-filter: blur(0.25rem);"
    @click="toggle"
  />
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MenuBackdrop',
  computed: {
    ...mapGetters('menu', {
      active: 'active',
    }),
  },
  methods: {
    ...mapActions('menu', {
      toggle: 'toggle',
    }),
  },
}
</script>
