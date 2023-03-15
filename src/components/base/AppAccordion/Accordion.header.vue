<template>
  <div class="accordion-header" :class="{ 'opened': isPanelOpened }">
    <!--  Accordion order number  -->
    <div class="accordion-header__order">
      <p class="text-center">№</p>
      <p class="text-center">{{ getCurrentOrderNumber }}</p>
    </div>
    <!--  Accordion name  -->
    <div class="accordion-header__name">
      <p>Название</p>
      <app-input
          v-show="isCardEditable"
          v-model="model[index].name"
          :value="model"
          type="parent"
          :index="index"
      />
      <p v-show="!isCardEditable" class="text-upper fw-700">
        <img src="/icons/folder.svg" alt="folder">
        {{ name }}
      </p>
    </div>
    <!--  Accordion order number  -->
    <div class="accordion-header__queue">
      <p>Очередность</p>
      <p>{{ getCurrentOrderNumber }}</p>
    </div>
    <!--  Accordion Subcategories  -->
    <div class="accordion-header__subfolders overflow-hidden">
      <p>Подкатегории</p>
      <p class="text-truncate">{{ getChildrenString }}</p>
    </div>
    <!--  Accordion chip  -->
    <div class="accordion-header__chip mt-3">
      <div>
        <span>{{ childrenLength || '-' }}</span>
      </div>
    </div>
    <!--  Accordion actions  -->
    <div class="accordion-header__actions mt-3">
      <AppButton
          @onClick="emit('openClosePanel', index)"
          :is-active="isPanelOpened"
          :isBtnDisabled="isBtnDisabled"
          class="m-1"
      >
        <img :src="getCurrentPanelImage" alt="top">
      </AppButton>
      <div class="p-0 m-1">
        <AppButton
            @onClick="emit('openCloseContext', index)"
            class="outline"
            :class="{ 'filled': isContextMenuOpened }"
        >
          <img :src="getContextMenuIcon" alt="top">
        </AppButton>
        <AppDropdownMenu
            v-if="isContextMenuOpened"
            :items="contextMenuItems"
            :isCardEditable="isCardEditable"
            @select="emit('onSelectInContext', {index, type: $event})"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
  components: {
    AppButton: defineAsyncComponent(() => import('@/components/base/AppButton.vue')),
    AppDropdownMenu: defineAsyncComponent(() => import('@/components/base/AppDropdownMenu.vue')),
    AppInput: defineAsyncComponent(() => import('@/components/base/AppInput.vue'))
  },
  emits: ['openClosePanel', 'openCloseContext', 'onSelectInContext'],
  model: {
    prop: 'name',
    event: 'input'
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    index: {
      type: Number,
      required: true
    },
    childrenLength: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true,
      default: ""
    },
    children: {
      type: Array,
      required: true,
      default: () => []
    },
    isPanelOpened: {
      type: Boolean,
      required: true,
      default: false
    },
    isContextMenuOpened: {
      type: Boolean,
      required: true,
      default: false
    },
    isCardEditable: {
      type: Boolean,
      required: true,
      default: false
    },
    isBtnDisabled: {
      type: Boolean,
      required: true,
      default: false
    },
    contextMenuItems: {
      type: Array,
      required: true,
      default: () => []
    },
  },
  computed: {
    model: {
      get() {
        return this.items;
      },
      set(value) {
        this.$emit('input', value);
      }
    },
    getCurrentOrderNumber() {
      const index = this.index + 1;
      return index;
    },
    getChildrenString() {
      if (this.children.length === 0) {
        return "-"
      }
      return this.children.map(i => i.name).join('/');
    },
    getCurrentPanelImage() {
      return this.isPanelOpened ? '/icons/chevron-top.svg' : '/icons/chevron-down.svg'
    },
    getContextMenuIcon() {
      return this.isContextMenuOpened ? '/icons/ellipsis-white.svg' : '/icons/ellipsis.svg'
    },
  },
}
</script>