<template>
  <main id="products-page">
    <section class="flex flex-wrap items-center justify-between px-4 text-xs">
      <!--  -->
      <button class="border flex items-center justify-center px-4 py-2 rounded">
        <span class>Filter &amp; sort</span>
        <Icon class="ml-2" :size="'sm'">
          <path
            d="M28 6 L4 6 M28 16 L4 16 M28 26 L4 26 M24 3 L24 9 M8 13 L8 19 M20 23 L20 29"
          />
        </Icon>
      </button>
      <!--  -->
      <div class="flex items-center justify-between">
        <button
          class="border flex items-center justify-center p-1 rounded"
          @click="multiple = false"
        >
          <Icon :size="'md'">
            <path
              d="M4 12 L4 4 12 4 M20 4 L28 4 28 12 M4 20 L4 28 12 28 M28 20 L28 28 20 28"
            />
          </Icon>
        </button>
        <span class="mr-1" />
        <button
          class="border flex items-center justify-center p-1 rounded"
          @click="multiple = true"
        >
          <Icon :size="'md'">
            <path
              d="M4 12 L12 12 12 4 M20 4 L20 12 28 12 M4 20 L12 20 12 28 M28 20 L20 20 20 28"
            />
          </Icon>
        </button>
      </div>
      <!--  -->
      <div
        v-if="productsFiltered && productsFiltered.length > 0"
        class="flex items-center justify-center"
      >
        <button
          :disabled="page === 0"
          class="border flex items-center justify-center px-1 py-2 rounded"
          @click="dec"
        >
          &nbsp;
          <Icon :size="'sm'">
            <path d="M22 30 L6 16 22 2 Z" />
            <title>Previous page of products</title> </Icon
          >&nbsp;
        </button>
        <span class="px-1">Page {{ page + 1 }} of 24</span>
        <button
          :disabled="page === 24"
          class="border flex items-center justify-center px-1 py-2 rounded"
          @click="inc"
        >
          &nbsp;
          <Icon :size="'sm'">
            <path d="M10 30 L26 16 10 2 Z" />
            <title>Next page of products</title> </Icon
          >&nbsp;
        </button>
      </div>
      <!--  -->
    </section>
    <ProductItemList
      v-if="productsFiltered && productsFiltered.length > 0"
      :multiple="multiple"
      :products="productsFiltered"
    />
  </main>
</template>

<script>
export default {
  layout: 'product-listing-layout',
  name: 'ProductListingPage',
  async asyncData({ $http }) {
    const products = await $http.$get(`${process.env.baseURL}/api/products`)
    return {
      products,
    }
  },
  data() {
    return {
      multiple: true,
      page: 0,
      limit: 10,
    }
  },
  computed: {
    productsFiltered() {
      const start = this.page * this.limit
      const end = start + this.limit
      return this.products.slice(start, end)
    },
  },
  methods: {
    dec() {
      if (this.page > 0) {
        this.page -= 1
        this.$fetch()
      }
    },
    inc() {
      if (this.page < parseInt((this.products.length - 1) / this.limit, 10)) {
        this.page += 1
        this.$fetch()
      }
    },
  },
}
</script>
