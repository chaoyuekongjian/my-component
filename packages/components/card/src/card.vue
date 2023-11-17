<template>
  <div class="kot-card" :style="width ? { width: width + 'px' } : {}">
    <div class="kot-card-img" :style="imgHeight ? { height: imgHeight + 'px' } : {}">
      <img :src="imgSrc" alt="img">
    </div>
    <div v-if="summary" class="kot-card-summary">{{ summary }}</div>
    <div v-else class="kot-card-summary">
      <slot></slot>
    </div>
    <div class="kot-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { cardProps } from './card';

export default defineComponent({
  name: 'KotCard',
  props: cardProps,
  setup() {
    return {}
  }
})
</script>
