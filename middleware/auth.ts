export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie("token");

  if (to.path === "/products" && !token.value) {
    return navigateTo("/login");
  }
});
