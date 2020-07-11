<template>
  <main id="search-page">
    <div class="flex-col mb-4">
      <section class="flex flex-col my-4 px-4">
        <label class="mb-4 relative" for="search">
          <span class="absolute pl-2 mt-2 rounded text-xs">Search</span>
          <input
            id="search"
            v-model="search"
            class="bg-white border p-2 pt-8 w-full"
            name="search"
            type="text"
            @keypress.enter="add(search)"
          />
        </label>
      </section>
      <section
        v-if="searches && searches.length > 0"
        class="flex flex-col my-4 px-4"
      >
        <div class="flex items-center justify-between mb-2">
          <h2 class="uppercase">Previous searches</h2>
          <button
            class="border flex items-center justify-center p-2"
            @click="clear"
          >
            <Icon :size="'sm'">
              <path
                d="M29 16 C29 22 24 29 16 29 8 29 3 22 3 16 3 10 8 3 16 3 21 3 25 6 27 9 M20 10 L27 9 28 2"
              />
              <title>Clear previous searches</title></Icon
            >
          </button>
        </div>
        <SearchItemList :searches="searches" />
      </section>
      <section class="flex flex-col my-4 px-4">
        <h2 class="mb-2 uppercase">Trending searches</h2>
        <SearchItemList :searches="trending" />
      </section>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  layout: 'default-layout',
  name: 'SearchPage',
  async asyncData({ $http }) {
    const trending = await $http.$get(`${process.env.baseURL}/api/trending`)
    return {
      trending: trending.reduce((accumulator, { name }) => {
        accumulator.push(name)
        return accumulator
      }, []),
    }
  },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    ...mapGetters('search', {
      searches: 'searches',
    }),
  },
  methods: {
    ...mapActions('search', {
      add: 'add',
      clear: 'clear',
    }),
  },
}
</script>
