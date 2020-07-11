<template>
  <ol class="flex flex-wrap items-center">
    <li v-for="(search, index) in searches" :key="index">
      <SearchItem :search="search" />
    </li>
  </ol>
</template>

<script>
export default {
  name: 'SearchItemList',
  props: {
    searches: {
      required: true,
      type: Array,
    },
  },
}
</script>
