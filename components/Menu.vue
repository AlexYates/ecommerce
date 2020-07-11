<template>
  <transition name="slide-from-left">
    <nav
      v-if="active"
      class="absolute bg-white border border-b-0 border-l-0 border-t-0 bottom-0 flex flex-col left-0 top-0 w-64"
    >
      <div class="flex justify-end">
        <button
          class="bg-white flex h-10 items-center justify-center m-4 rounded-full w-10"
          :size="'lg'"
          @click="toggle"
        >
          <Icon>
            <path d="M2 30 L30 2 M30 30 L2 2" />

            <title>Close the menu</title>
          </Icon>
        </button>
      </div>
      <ol class="p-2">
        <li v-for="{ name, path } in items" :key="name">
          <nuxt-link
            class="inline-flex p-2 underline"
            :to="path"
            @click.native="toggle"
            >{{ name }}</nuxt-link
          >
        </li>
      </ol>
    </nav>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Menu',
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
