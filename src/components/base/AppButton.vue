<template>
  <button
      class="app-button"
      :class="{
         'active': isActive,
         'disabled': isBtnDisabled
      }"
      :disabled="isBtnDisabled"
      @click="$emit('onClick')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  emits: ['onClick'],
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    isBtnDisabled: {
      type: Boolean,
      default: false
    }
  },
}
</script>