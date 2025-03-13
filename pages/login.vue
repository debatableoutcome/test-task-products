<!-- pages/login.vue -->
<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card>
          <v-card-title class="text-center py-4">
            <h2>Авторизация</h2>
          </v-card-title>
          <v-card-text>
            <div
              v-if="errorMessage"
              class="text-error mb-4 pa-3 bg-error-lighten-4 rounded"
            >
              {{ errorMessage }}
            </div>

            <v-text-field
              v-model="username"
              label="Логин"
              variant="outlined"
              :disabled="loading"
              class="mb-4"
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Пароль"
              type="password"
              variant="outlined"
              :disabled="loading"
              class="mb-6"
            ></v-text-field>

            <v-btn
              block
              color="primary"
              size="large"
              @click="handleLogin"
              :disabled="loading"
              class="mb-2"
            >
              {{ loading ? "Вход..." : "Войти" }}
            </v-btn>

            <div class="text-caption text-center mt-4">
              Для тестового входа используйте:<br />
              Логин: admin<br />
              Пароль: secret
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const { login, isLoading, errorMessage, isAuthenticated } = useAuth();

const loading = computed(() => isLoading.value);
const username = ref("");
const password = ref("");

const handleLogin = async () => {
  if (!username.value || !password.value) return;
  await login(username.value, password.value);
};

onMounted(() => {
  if (isAuthenticated()) {
    navigateTo("/products");
  }
});
</script>
