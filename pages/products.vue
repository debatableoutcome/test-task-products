<template>
  <v-container>
    <h1>Товары и услуги</h1>
    <p>Страница в разработке...</p>

    <v-btn color="error" @click="auth.logout" class="mt-4"> Выйти </v-btn>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

const auth = useAuth();
</script>
