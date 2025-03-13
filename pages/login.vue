<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card>
          <v-card-title class="text-center py-4">
            <h2>Авторизация</h2>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleLogin">
              <v-alert
                v-if="auth.error"
                type="error"
                class="mb-4"
                density="compact"
                variant="tonal"
              >
                {{ auth.error }}
              </v-alert>

              <v-text-field
                v-model="form.username"
                label="Логин"
                :rules="[(v) => !!v || 'Логин обязателен']"
                variant="outlined"
                :disabled="auth.loading"
                class="mb-4"
              ></v-text-field>

              <v-text-field
                v-model="form.password"
                label="Пароль"
                type="password"
                :rules="[(v) => !!v || 'Пароль обязателен']"
                variant="outlined"
                :disabled="auth.loading"
                class="mb-6"
              ></v-text-field>

              <v-btn
                :loading="auth.loading"
                block
                color="primary"
                size="large"
                type="submit"
                class="mb-2"
              >
                Войти
              </v-btn>

              <div class="text-caption text-center mt-4">
                Для тестового входа используйте:<br />
                Логин: admin<br />
                Пароль: secret
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const auth = useAuth();

const form = reactive({
  username: "",
  password: "",
});

const handleLogin = async () => {
  if (!form.username || !form.password) return;
  await auth.login(form.username, form.password);
};

onMounted(() => {
  if (auth.isAuthenticated()) {
    navigateTo("/products");
  }
});
</script>
