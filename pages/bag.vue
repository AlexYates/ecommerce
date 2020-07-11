<template>
  <main id="bag-page">
    <div class="flex-col mb-4">
      <template v-if="productsFiltered && productsFiltered.length > 0">
        <h2 class="mb-2 text-center uppercase">In your bag</h2>
        <ProductItemList :multiple="false" :products="productsFiltered" />
      </template>
      <template v-else>
        <div class="p-4">
          <p class="mb-4 px-2">
            You don't have any items stored in your bag right now, keep browsing
            for inspiration!
          </p>
          <Icon :size="'2xl'" class="mb-6 mx-auto rocker-top">
            <path
              d="M5 9 L5 29 27 29 27 9 Z M10 9 C10 9 10 3 16 3 22 3 22 9 22 9"
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
    <transition name="slide-from-bottom">
      <section
        v-if="count && count > 0"
        class="bg-white border border-b-0 border-l-0 border-r-0 bottom-0 fixed left-0 p-4 right-0"
      >
        <h2 class="mb-4">
          <span>Total:</span>
          <span class="font-semibold">{{ total }}</span>
        </h2>
        <button
          class="bg-gray-800 border flex items-center justify-center px-4 py-2 rounded text-white w-full"
        >
          Checkout ({{ count }})
        </button>
      </section>
    </transition>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import { formatCurrency } from '@/mixins'

export default {
  layout: 'default-layout',
  name: 'BagPage',
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
    ...mapGetters('bag', {
      uuids: 'uuids',
      count: 'count',
    }),
    locales() {
      return 'gb-EN'
    },
    currency() {
      return 'EUR'
    },
    productsFiltered() {
      return this.products.filter(({ uuid }) => this.uuids.includes(uuid))
    },
    total() {
      const total =
        this.productsFiltered && this.productsFiltered.length > 0
          ? this.productsFiltered.reduce(
              (accumulator, product) => (accumulator += Number(product.price)),
              0
            )
          : 0
      return formatCurrency(this.locales, this.currency, total)
    },
  },
}
</script>

<style>
#bag-page ~ footer {
  margin-bottom: 8.5rem; /* NOTE: Once a user has scrolled to the end of the page, we need extra spacing below the footer, to seperate it from the fixed position Checkout button. */
}
</style>
