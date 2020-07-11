<template>
  <ol class="flex flex-wrap m-2">
    <li
      v-for="product in products"
      :key="product.uuid"
      class="p-2"
      :class="{
        'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6': multiple,
        'w-full': !multiple,
      }"
    >
      <ProductItem :product="product" />
    </li>
  </ol>
</template>

<script>
export default {
  name: 'ProductItemList',
  props: {
    multiple: {
      default: true,
      type: Boolean,
    },
    products: {
      required: true,
      type: Array,
    },
  },
}
</script>
