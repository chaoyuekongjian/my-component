<template>
  <kot-button class="primary" @click="handleClick">对话框实例</kot-button>
  <kot-dialog v-model:visible="visible" @close="handleClose">
    asdqwdwq
  </kot-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue';


const visible = ref(false);

const handleClick = () => {
  visible.value = true;
} 

const handleClose = () => {
  visible.value = false;
}

</script>