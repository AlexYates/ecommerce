<template>
  <figure class="bg-white flex flex-col h-full overflow-hidden rounded">
    <nuxt-link :to="link(product)">
      <img
        :alt="product.name"
        class="bg-gray-400 w-full"
        height="100"
        :src="product.image"
        width="100"
      />
    </nuxt-link>
    <figcaption class="flex flex-col h-full px-3 py-2">
      <nuxt-link
        class="flex flex-col flex-grow h-full justify-between"
        :to="link(product)"
      >
        <h2 class="capitalize font-semibold mb-2">{{ product.name }}</h2>
        <p class="font-semibold text-right">
          {{ price }}
        </p>
      </nuxt-link>
    </figcaption>
  </figure>
</template>

<script>
import { formatCurrency, formatNameUUID } from '@/mixins'

export default {
  name: 'ProductItem',
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
  computed: {
    locales() {
      return 'gb-EN'
    },
    currency() {
      return 'EUR'
    },
    price() {
      return formatCurrency(this.locales, this.currency, this.product.price)
    },
  },
  methods: {
    link({ name, uuid }) {
      return `/products/${formatNameUUID(name, uuid)}`
    },
  },
}
</script>
