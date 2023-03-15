<template>
  <div
      class="context-menu"
      @click="$emit('onClick')"
  >
    <div class="context-menu-list">
      <button
          class="context-menu-list__item"
          v-for="({id, label, icon, action}) in list"
          :key="id"
          @click="$emit('select', action)"
      >
        <img :src="icon" alt="">
        <span>{{ action === 'edit' ? computedLabel : label }}</span>
      </button>
    </div>
  </div>
</template>

<script>
import {MenuContext} from "@/data/product/menu-context";

export default {
  name: 'AppDropdownMenu',
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
    list() {
      let arr = JSON.parse(JSON.stringify(this.items));
      if (this.isCardEditable) {
        arr.push({
          id: '5f6f0ebd-ba88-4c93-8b5c-f69ee11057e6',
          label: 'Завершить редактирование',
          icon: '/icons/edit.svg',
          action: 'saveEdit'
        })
      } else {
        arr = new MenuContext()
      }
      return arr
    },
    computedLabel() {
      return this.isCardEditable ? 'Отменить редактирование' : 'Редактировать';
    }
  }
};
</script>
