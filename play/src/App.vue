<script setup lang="ts">
import Icon from "@k-ui/components/icon/src/icon.vue";
console.log(Icon);
</script>

<template>
  <div>
    <h1>Test</h1>
    <Icon :color="'blue'" :size="18"> JJ</Icon>
    <k-icon :color="'red'" :size="20"> Hello </k-icon>
  </div>
</template>

<style scoped></style>
