<template>
  <main id="product-detail-page">
    <div v-if="product && product.length > 0" class="flex-col mb-4">
      <figure class="bg-white m-4 mb-8 overflow-hidden rounded">
        <div class="relative">
          <button
            class="absolute bg-white flex h-10 items-center justify-center left-0 m-2 rounded-full top-0 w-10"
            :class="{
              'bg-gray-800 text-white': favouritesExists(product.uuid),
            }"
            title="Add to favourites"
            @click="favouritesToggle(product.uuid)"
          >
            <Icon>
              <path
                d="M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z"
              />
            </Icon>
          </button>
          <button
            class="absolute bg-white flex h-10 items-center justify-center right-0 m-2 rounded-full top-0 w-10"
            :class="{
              'bg-gray-800 text-white': bagExists(product.uuid),
            }"
            title="Add to bag"
            @click="bagToggle(product.uuid)"
          >
            <Icon>
              <path
                d="M5 9 L5 29 27 29 27 9 Z M10 9 C10 9 10 3 16 3 22 3 22 9 22 9"
              />
            </Icon>
          </button>
          <img
            :alt="product.name"
            class="bg-gray-400 w-full"
            height="100"
            :src="imageComputed"
            width="100"
          />
          <ol class="absolute bottom-0 flex left-0 right-0">
            <li
              v-for="(productImage, imageIndex) in product.images"
              :key="imageIndex"
              class="p-2 w-1/4"
            >
              <img
                :alt="`Image ${imageIndex} of ${product.images.length}`"
                class="border rounded w-full"
                height="100"
                :src="productImage"
                width="100"
                @click="imageSwitch(productImage)"
              />
            </li>
          </ol>
        </div>
        <figcaption class="p-4">
          <div class="flex flex-wrap items-center justify-between mb-4">
            <h2 class="capitalize font-semibold text-lg">{{ product.name }}</h2>
            <p class="font-semibold text-right">{{ price }}</p>
          </div>
          <p class="mb-6">{{ product.description }}</p>
          <div class="flex items-center justify-between">
            <button class="bg-white border px-4 py-2 rounded text-sm">
              Select size
            </button>
            <button class="bg-white border px-4 py-2 rounded text-sm">
              Select colour
            </button>
          </div>
        </figcaption>
      </figure>
      <h2 class="text-center">Complementaries</h2>
      <p class="text-center text-sm">These products may go well together</p>
      <ProductItemList :products="recommendations" />
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { formatCurrency, formatNameUUID, splitNameUUID } from '@/mixins'

export default {
  layout: 'product-detail-layout',
  name: 'ProductDetailPage',
  async asyncData({ $http, params, router }) {
    const { nameUUID } = params
    const uuid = splitNameUUID(nameUUID)[1]

    const product = await $http
      .$get(`${process.env.baseURL}/api/products`)
      .then((products) => products.find((product) => product.uuid === uuid))

    const recommendations = await $http.$get(
      `${process.env.baseURL}/api/recommendations`
    )

    return {
      product,
      recommendations,
    }
  },
  data() {
    return {
      image: '',
    }
  },
  computed: {
    ...mapGetters('bag', {
      bagExists: 'exists',
    }),
    ...mapGetters('favourites', {
      favouritesExists: 'exists',
    }),
    imageComputed() {
      return this.image ? this.image : this.product.images[0]
    },
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
    ...mapActions('bag', {
      bagToggle: 'toggle',
    }),
    ...mapActions('favourites', {
      favouritesToggle: 'toggle',
    }),
    link({ name, uuid }) {
      return `/products/${formatNameUUID(name, uuid)}`
    },
    imageSwitch(src) {
      this.image = src
    },
  },
  validate({ params }) {
    // Composed of three parts: `name` `---` `uuid`
    // TODO: Move to middleware ?
    const { nameUUID } = params
    return nameUUID.includes('---')
  },
}
</script>
