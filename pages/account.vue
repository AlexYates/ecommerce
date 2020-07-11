<template>
  <main id="account-page">
    <div class="flex-col mb-4">
      <template v-if="signedIn">
        <h2 class="mb-2 text-center uppercase">Your account details</h2>
      </template>
      <template v-else>
        <div class="p-4">
          <p class="mb-4 px-2">
            You're not signed in right now, quick, lets get connected!
          </p>
          <Icon :size="'2xl'" class="mb-6 mx-auto rocker-top">
            <path
              d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z"
            />
          </Icon>
          <SignInOrRegisterLink />
        </div>
      </template>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'default-layout',
  name: 'AccountPage',
  data() {
    return {
      signedIn: false,
    }
  },
}
</script>
