<template>
  <div v-if="isVisible" class="dev-dialog-overlay">
    <div class="dev-dialog">
      <div class="dev-dialog-header">
        <h3>Раздел в разработке</h3>
      </div>
      <div class="dev-dialog-content">
        Приносим свои извинения, в данный момент эта часть сайта находится в
        разработке.
      </div>
      <div class="dev-dialog-footer">
        <button class="dev-dialog-button" @click="hideDevDialog">
          Понятно
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDevDialog } from "~/composables/useDevDialog";

const { isVisible, hideDevDialog } = useDevDialog();
</script>

<style scoped>
.dev-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.dev-dialog {
  background-color: white;
  border-radius: 8px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.dev-dialog-header {
  padding: 16px;
  border-bottom: 1px solid #eee;
}

.dev-dialog-header h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

.dev-dialog-content {
  padding: 16px;
  font-size: 16px;
  line-height: 1.5;
}

.dev-dialog-footer {
  padding: 16px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
}

.dev-dialog-button {
  background-color: #337566;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
}
</style>
