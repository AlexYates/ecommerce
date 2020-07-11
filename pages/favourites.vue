<template>
  <main id="favourites-page">
    <div class="flex-col mb-4">
      <template v-if="productsFiltered && productsFiltered.length > 0">
        <h2 class="mb-2 text-center uppercase">In your favourites</h2>
        <ProductItemList :multiple="false" :products="productsFiltered" />
      </template>
      <template v-else>
        <div class="p-4">
          <p class="mb-4 px-2">
            You don't have any items stored in your favourites right now, keep
            browsing for inspiration!
          </p>
          <Icon :size="'2xl'" class="mb-6 mx-auto rocker-top">
            <path
              d="M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z"
            />
          </Icon>
          <SignInOrRegisterLink />
        </div>
      </template>
    </div>
    <div class="flex-col mb-4">
      <h2 class="mb-2 text-center uppercase">
        You may be interested in these items
      </h2>
      <ProductItemList v-if="recommendations" :products="recommendations" />
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'default-layout',
  name: 'FavouritesPage',
  async asyncData({ $http }) {
    const products = await $http.$get(`${process.env.baseURL}/api/products`)
    const recommendations = await $http.$get(
      `${process.env.baseURL}/api/recommendations`
    )
    return {
      products,
      recommendations,
    }
  },
  computed: {
    ...mapGetters('favourites', {
      uuids: 'uuids',
    }),
    productsFiltered() {
      return this.products.filter(({ uuid }) => this.uuids.includes(uuid))
    },
  },
}
</script>
