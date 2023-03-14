<template>
  <button
      class="context-menu"
      @click="$emit('onClick')"
  >
    <div class="context-menu-list">
      <div
          class="context-menu-list__item"
          v-for="({id, label, icon, action}) in items"
          :key="id"
          @click="emit('select', action)"
      >
        <img :src="icon" alt="">
        <span>{{ action === 'edit' ? computedLabel : label }}</span>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  name: 'ContextMenu',
  props: {
    items: {
      type: Array,
      required: true
    },
    isCardEditable: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    computedLabel() {
      return this.isCardEditable ? 'Отменить редактирование' : 'Редактировать';
    }
  }
};
</script>
