import { ref } from "vue";

const isVisible = ref(false);

export function useDevDialog() {
  const showDevDialog = () => {
    isVisible.value = true;
  };

  const hideDevDialog = () => {
    isVisible.value = false;
  };

  return {
    isVisible,
    showDevDialog,
    hideDevDialog,
  };
}
