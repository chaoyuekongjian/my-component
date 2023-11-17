<template>
  <div>
    <div class="row">
      <kot-button>simple button</kot-button>
      <kot-button type="primary">primary button</kot-button>
      <kot-button type="success">success button</kot-button>
      <kot-button type="info">info button</kot-button>
      <kot-button type="danger">danger button</kot-button>
      <kot-button type="warning">warning button</kot-button>
    </div>
    <div class="row">
      <kot-button plain>simple button</kot-button>
      <kot-button plain type="primary">primary button</kot-button>
      <kot-button plain type="success">success button</kot-button>
      <kot-button plain type="info">info button</kot-button>
      <kot-button plain type="danger">danger button</kot-button>
      <kot-button plain type="warning">warning button</kot-button> 
    </div>
    <div class="row">
      <kot-button round>simple button</kot-button>
      <kot-button round type="primary">primary button</kot-button>
      <kot-button round type="success">success button</kot-button>
      <kot-button round type="info">info button</kot-button>
      <kot-button round type="danger">danger button</kot-button>
      <kot-button round type="warning">warning button</kot-button> 
    </div>
    <div class="row">
      <kot-button disabled>simple button</kot-button>
      <kot-button disabled type="primary">primary button</kot-button>
      <kot-button disabled type="success">success button</kot-button>
      <kot-button disabled type="info">info button</kot-button>
      <kot-button disabled type="danger">danger button</kot-button>
      <kot-button disabled type="warning">warning button</kot-button> 
    </div>
    <div class="row">
      <kot-button circle>OK</kot-button>
      <kot-button circle type="primary">5</kot-button>
      <kot-button circle type="success">5</kot-button>
      <kot-button circle type="info">5</kot-button>
      <kot-button circle type="danger">5</kot-button>
      <kot-button circle type="warning">5</kot-button> 
      <kot-button @click="handleClick('123', $event)" type="primary" icon="milk-tea" circle></kot-button> 
    </div>
  </div>
</template>

<script setup lang="ts">
const handleClick = (name: String, event: Event) => {
  console.log(name, event)
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-between;
  width: 800px;
  margin-bottom: 20px;
  margin: 20px auto;
}
</style>
