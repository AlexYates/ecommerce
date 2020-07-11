<template>
  <section class="flex flex-col mx-4 my-2 text-center uppercase">
    <h2 class="mb-6 text-sm">
      <slot name="default" />
    </h2>
    <p class="mb-2 text-xs">
      <slot name="tail" />
    </p>
  </section>
</template>
