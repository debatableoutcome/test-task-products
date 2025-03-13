import { jwtDecode } from "jwt-decode";

export const useAuth = () => {
  const user = useState("user", () => null);
  const token = useCookie("token");
  const isLoading = useState("isLoading", () => false);
  const errorMessage = useState("errorMessage", () => "");

  const login = async (username: string, password: string) => {
    isLoading.value = true;
    errorMessage.value = "";

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
        errorMessage.value = "Неверный логин или пароль";
        return false;
      }
    } catch (e) {
      errorMessage.value = "Произошла ошибка при авторизации";
      console.error("Auth error:", e);
      return false;
    } finally {
      isLoading.value = false;
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
    isLoading,
    errorMessage,
    isAuthenticated,
  };
};
