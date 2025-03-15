<template>
  <div class="agents-list">
    <div v-for="agent in agents" :key="agent.id" class="agent-item">
      <AgentCard
        :name="agent.name"
        :position="agent.position"
        :phone="agent.phone"
        :photo="agent.photo"
        :rating="agent.rating || 4.7"
        :reviews-count="agent.reviewsCount || 19"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import AgentCard from "./AgentCard.vue";

defineProps({
  agents: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<style scoped>
.agents-list {
  max-width: 560px;
  margin: 0 auto;
}

.agent-item {
  margin-bottom: 16px;
}

.agent-item:last-child {
  margin-bottom: 0;
}
</style>
