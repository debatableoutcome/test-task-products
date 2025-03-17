import { ref, computed, onMounted, onBeforeUnmount } from "vue";

export function useDevice() {
  const windowWidth = ref(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const isMobile = computed(() => windowWidth.value < 960);
  const isTablet = computed(
    () => windowWidth.value >= 960 && windowWidth.value < 1024
  );
  const isDesktop = computed(() => windowWidth.value >= 1024);

  const updateWidth = () => {
    if (typeof window !== "undefined") {
      windowWidth.value = window.innerWidth;
    }
  };

  onMounted(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
  });

  onBeforeUnmount(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", updateWidth);
    }
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
    windowWidth,
  };
}
