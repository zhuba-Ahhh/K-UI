<template>
  <i
    :class="bem.b()"
    :style="style"
  >
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import { createNamespace } from '@k-ui/utils/create'
import { iconProps } from './icon'

const bem = createNamespace('icon')
const props = defineProps(iconProps)

defineOptions({
  //使用插件自动导入组件
  name: 'k-icon'
})

// 计算属性来处理样式
const style = computed<CSSProperties>(() => {
  const { size, color } = props
  if (!size && !color) return {}

  return {
    ...(size ? { 'font-size': size + 'px' } : {}),
    ...(color ? { color: color } : {})
  }
})
</script>

<style scoped></style>
