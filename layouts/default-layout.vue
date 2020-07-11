<template>
  <TopAndTail id="default-layout">
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
  name: 'DefaultLayout',
}
</script>
