<template>
  <v-footer class="footer" color="#F5F5F5">
    <div class="d-flex align-center footer-content px-10">
      <div class="copyright-text">© {{ copyrightText }}</div>

      <div class="footer-links">
        <a
          v-for="(link, index) in links"
          :key="index"
          href="#"
          class="footer-link"
        >
          {{ link }}
        </a>
      </div>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
defineProps({
  copyrightText: {
    type: String,
    default: "Annonce 2023",
  },
  links: {
    type: Array,
    default: () => ["Документы", "О компании"],
  },
});
</script>

<style scoped>
.footer {
  border-top: 1px solid #e0e0e0;
  padding: 16px 0;
}

.footer-content {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #71717a;
  justify-content: flex-start;
  width: 100%;
}

.copyright-text {
  font-weight: 500;
}

.footer-links {
  margin-left: 20px;
}

.footer-link {
  color: #71717a;
  text-decoration: none;
  margin-left: 16px;
}

.footer-link:first-child {
  margin-left: 0;
}

.footer-link:hover {
  text-decoration: underline;
}
</style>
