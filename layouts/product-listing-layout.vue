<template>
  <TopAndTail id="product-listing-layout">
    <template slot="top">
      <Top />
      <Navigation />
      <Nuxt />
    </template>
    <template slot="tail">
      <Tail />
      <MenuBackdrop />
      <Menu />
    </template>
  </TopAndTail>
</template>

<script>
export default {
  name: 'ProductListingLayout',
}
</script>
