<template>
  <button class="kot-button"
    :class="[
      `kot-button--${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-disabled': disabled,
        'is-circle': circle,
      }
    ]"
    @click="handleClick"
  >
  <i v-if="icon" :class="`kot-icon-${icon}`"></i>
  <span v-if="$slots.default">
    <slot></slot>
  </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { buttonProps } from './button';

export default defineComponent({
  name: 'KotButton',
  props: buttonProps,
  setup(_, { emit }) {
    const handleClick = (e: Event) => {
      emit('click', e)
    }
    return {
      handleClick
    }
  }
})
</script>
