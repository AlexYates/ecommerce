<template>
  <header class="flex items-center justify-between p-4">
    <div class="flex items-center justify-center">
      <button
        class="bg-white flex h-10 items-center justify-center rounded-full w-10"
        @click="toggle"
      >
        <Icon>
          <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
        </Icon>
      </button>
    </div>
    <div class="flex items-center justify-center">
      <nuxt-link
        class="bg-white flex h-10 items-center justify-center rounded-full w-10"
        to="/account"
      >
        <Icon>
          <path
            d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z"
          />
        </Icon>
      </nuxt-link>
      <span class="ml-1" />
      <nuxt-link
        class="bg-white flex h-10 items-center justify-center rounded-full w-10"
        to="/search"
      >
        <Icon>
          <circle cx="14" cy="14" r="12" />
          <path d="M23 23 L30 30" />
        </Icon>
      </nuxt-link>
      <span class="ml-1" />
      <nuxt-link
        class="bg-white flex h-10 items-center justify-center relative rounded-full w-10"
        to="/favourites"
      >
        <Icon>
          <path
            d="M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z"
          />
        </Icon>
        <span
          v-if="favouritesCount && favouritesCount > 0"
          class="absolute bg-gray-800 border flex h-6 items-center justify-center -m-1 right-0 rounded-full text-white text-xs top-0 w-6"
          >{{ favouritesCountResult }}</span
        >
      </nuxt-link>
      <span class="ml-1" />
      <nuxt-link
        class="bg-white flex h-10 items-center justify-center relative rounded-full w-10"
        to="/bag"
      >
        <Icon>
          <path
            d="M5 9 L5 29 27 29 27 9 Z M10 9 C10 9 10 3 16 3 22 3 22 9 22 9"
          />
        </Icon>
        <span
          v-if="bagCount && bagCount > 0"
          class="absolute bg-gray-800 border flex h-6 items-center justify-center -m-1 right-0 rounded-full text-white text-xs top-0 w-6"
          >{{ bagCountResult }}</span
        >
      </nuxt-link>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Top',
  computed: {
    ...mapGetters('bag', {
      bagCount: 'count',
    }),
    ...mapGetters('favourites', {
      favouritesCount: 'count',
    }),
    bagCountResult() {
      return this.bagCount && this.bagCount < 10 ? this.bagCount : '∞'
    },
    favouritesCountResult() {
      return this.favouritesCount && this.favouritesCount < 10
        ? this.favouritesCount
        : '∞'
    },
  },
  methods: {
    ...mapActions('menu', {
      toggle: 'toggle',
    }),
  },
}
</script>
