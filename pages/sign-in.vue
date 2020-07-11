<template>
  <main id="bag-page">
    <div class="flex-col mb-4">
      <section class="flex flex-col m-4">
        <label class="mb-4 relative" for="eMail">
          <span class="absolute pl-2 mt-2 rounded text-xs">E-mail</span>
          <input
            id="eMail"
            v-model="eMail"
            class="bg-white border p-2 pt-8 w-full"
            name="eMail"
            type="text"
          />
        </label>
        <label class="mb-4 relative" for="password">
          <span class="absolute pl-2 mt-2 rounded text-xs">Password</span>
          <input
            id="password"
            v-model="password"
            class="bg-white border p-2 pt-8 w-full"
            name="password"
            type="text"
          />
        </label>
        <div class="flex item-center justify-between mb-4 text-sm">
          <label class="flex items-center" for="persist">
            <input
              id="persist"
              v-model="persist"
              class="mr-2"
              name="persist"
              type="checkbox"
            />
            <span>Keep me signed in</span>
          </label>
          <nuxt-link to="/forgot">Forgot your password?</nuxt-link>
        </div>
        <button
          class="bg-gray-800 border flex items-center justify-center mb-4 px-4 py-2 rounded text-white"
        >
          Sign in
        </button>
        <hr class="border-gray-500 mb-4 mx-4" />
        <button
          class="bg-white border flex items-center justify-center mb-4 px-4 py-2 rounded"
        >
          Register
        </button>
        <aside class="mb-4 px-4 relative rocker-top">
          <div
            id="flag"
            class="bg-gray-800 border flex items-center justify-center px-4 py-2 text-white"
          >
            <h2 class="font-semibold uppercase">
              {{ flag }}
            </h2>
          </div>
        </aside>
      </section>
    </div>
  </main>
</template>

<script>
import { formatCurrency } from '@/mixins'

export default {
  layout: 'default-layout',
  name: 'SignInPage',
  data() {
    return {
      eMail: '',
      password: '',
      persist: false,
    }
  },
  computed: {
    locales() {
      return 'gb-EN'
    },
    currency() {
      return 'EUR'
    },
    flag() {
      return `${formatCurrency(this.locales, this.currency, 5)} off new orders`
    },
  },
  methods: {
    signIn() {
      /* eslint-disable-next-line */
      console.log('sign in')
    },
  },
}
</script>

<style>
:root {
  --bg: rgb(237, 242, 247);
}
</style>

<style scoped>
#flag:before {
  left: 1rem;
  top: 50%;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: transparent;
  border-left-color: var(--bg);
  border-width: 1.25rem;
  margin-top: -1.25rem;
}

#flag:after {
  right: 1rem;
  top: 50%;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: transparent;
  border-right-color: var(--bg);
  border-width: 1.25rem;
  margin-top: -1.25rem;
}
</style>
