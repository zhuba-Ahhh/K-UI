<script setup lang="ts">
import Icon from '@k-ui/components/icon/src/icon.vue'
import { AddCircle } from '@vicons/ionicons5'

console.log(Icon)
</script>

<template>
  <div>
    <h1>Test</h1>
    <Icon
      :color="'blue'"
      :size="20"
    >
      <AddCircle></AddCircle>
    </Icon>
    <k-icon
      :color="'blue'"
      :size="20"
    >
      <AddCircle></AddCircle>
    </k-icon>
    <k-icon
      :color="'yello'"
      :size="20"
    >
      Hello
    </k-icon>
  </div>
</template>

<style scoped></style>
