<template>
  <v-footer class="footer" color="#F5F5F5">
    <div class="footer-content">
      <div v-if="!$device.isMobile" class="d-flex align-center w-100">
        <div class="copyright-text">© {{ copyrightText }}</div>

        <div class="footer-links">
          <a
            v-for="(link, key) in desktopLinks"
            :key="key"
            :href="link.href"
            class="footer-link"
          >
            {{ link.text }}
          </a>
        </div>
      </div>

      <div v-else class="mobile-content">
        <div class="copyright-text mb-4">© {{ copyrightText }}</div>

        <div class="mobile-links">
          <a
            v-for="(link, key) in allLinks"
            :key="key"
            :href="link.href"
            class="mobile-link"
          >
            {{ link.text }}
          </a>

          <div class="language-selector">
            <img src="/icons/ru.svg" alt="Russian" class="language-icon" />
            <span class="language">Русский</span>
          </div>
        </div>
      </div>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineProps({
  copyrightText: {
    type: String,
    default: "Annonce 2023",
  },
});

const allLinks = computed(() => {
  return {
    documents: { text: "Документы", href: "#" },
    about: { text: "О компании", href: "#" },
    sellers: { text: "Продавцам", href: "#" },
    buyers: { text: "Покупателям", href: "#" },
    post: { text: "Разместить объявление", href: "#" },
  };
});

const desktopLinks = computed(() => {
  return {
    documents: allLinks.value.documents,
    about: allLinks.value.about,
  };
});
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid #e0e0e0;
  min-height: 88px;
}

.footer-content {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #71717a;
  width: 100%;
}

.copyright-text {
  font-weight: 500;
  color: #0f0f0f;
}

.footer-links {
  margin-left: 20px;
}

.footer-link {
  color: #71717a;
  text-decoration: none;
  margin-left: 16px;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    text-decoration: underline;
  }
}

/* Mob*/
.mobile-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.mobile-links {
  display: flex;
  flex-direction: column;
}

.mobile-link {
  color: #71717a;
  text-decoration: none;
  padding: 8px 0;

  &:hover {
    text-decoration: underline;
  }
}

.language-selector {
  display: flex;
  align-items: center;
  padding: 8px 0;
  margin-top: 4px;

  .language-icon {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }

  .language {
    color: #0f0f0f;
  }

  span {
    color: #71717a;
  }
}
</style>
