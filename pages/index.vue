<template>
  <div>
    <p>Перенаправление...</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["redirect"],
});
</script>
