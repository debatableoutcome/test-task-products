<template>
  <div class="agents-list" :class="{ 'mobile': isMobile }">
    <div v-for="agent in agents" :key="agent.id" class="agent-item">
      <AgentCard
        :name="agent.name"
        :verified="agent.verified"
        :rating="agent.rating"
        :reviews="agent.reviews"
        :photo="agent.photo"
        :text="agent.text"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import AgentCard from "./AgentCard.vue";
import { useDevice } from "~/composables/useDevice";

defineProps({
  agents: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const { isMobile } = useDevice();
</script>

<style scoped>
.agents-list {
  max-width: 560px;
  margin: 0 auto;
}

.agents-list.mobile {
  max-width: 100%;
  margin: 0;
}

.agent-item {
  margin-bottom: 16px;
}

.agents-list.mobile .agent-item {
  margin-bottom: 8px;
}

.agent-item:last-child {
  margin-bottom: 0;
}
</style>
