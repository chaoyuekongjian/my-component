<template>
  <transition name="dialog-fade">
    <div v-show="visible" class="kot-dialog_wrapper">
      <div class="kot-dialog" :style="{ width, marginTop: top }">
        <div class="kot-dialog_header">
          <slot v-if="$slots.title" name="title"></slot>
          <span class="kot-dialog_title" v-else>{{ title }}</span>
          <button       class="kot-dialog_headerbtn"
          @click="clickHandler"
          >
            <i class="kot-icon-close" />
          </button>
        </div>
        <div class="kot-dialog_body">
          <slot></slot>
        </div>
        <div class="kot-dialog_footer">
          <slot v-if="$slots.foooter" name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { dialogProps } from './dialog';

export default defineComponent({
  name: 'KotDialog',
  props: dialogProps,
  emits: ['close'],
  setup(_, { emit }) {
    const clickHandler = () => {
      emit('close')
    }
    return {
      clickHandler
    }
  }
})
</script>