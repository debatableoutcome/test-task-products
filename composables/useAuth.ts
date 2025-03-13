export const useAuth = () => {
  const user = ref(null);
  const token = useCookie("token");
  const loading = ref(false);
  const error = ref("");

  const login = async (username: string, password: string) => {
    loading.value = true;
    error.value = "";

    try {
      if (username === "admin" && password === "secret") {
        const fakeToken =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.L28LWX6w6DD9CjEyGHKZhzO-OTxQT8sIQRX_mPCRWbk";
        token.value = fakeToken;

        const decoded = jwtDecode(fakeToken);
        user.value = decoded;

        navigateTo("/products");
        return true;
      } else {
        error.value = "Неверный логин или пароль";
        return false;
      }
    } catch (e) {
      error.value = "Произошла ошибка при авторизации";
      return false;
    } finally {
      loading.value = false;
    }
  };

  const logout = () => {
    token.value = null;
    user.value = null;
    navigateTo("/login");
  };

  const isAuthenticated = () => {
    return !!token.value;
  };

  return {
    user,
    login,
    logout,
    loading,
    error,
    isAuthenticated,
  };
};
