<template>
  <div class="accordion-panel">
    <!--  Accordion order number  -->
    <div class="accordion-panel__order">
      <p class="text-center">№</p>
      <p class="text-center fw-500">{{ consistentIndex }}</p>
    </div>
    <!--  Accordion name  -->
    <div>
      <p>Название</p>
      <p class="fw-500">
        <img src="/icons/file.svg" alt="folder">
        {{ name }}
      </p>
    </div>
    <!--  Accordion order number  -->
    <div>
      <p>Очередность</p>
      <p class="fw-500">{{ childIndex + 1 }}</p>
    </div>
    <!--  Accordion actions  -->
    <div class="accordion-header__actions mt-3">
      <div class="p-0 m-1">
        <AppButton
            @onClick="emit('openCloseContext', consistentIndex)"
            class="outline"
            :class="{ 'filled': isContextMenuOpened }"
        >
          <img :src="getContextMenuIcon" alt="top">
        </AppButton>
        <AppDropdownMenu
            v-if="isContextMenuOpened"
            :items="contextMenuItems"
            @select="emit('onSelectInContext', {index: consistentIndex, type: $event})"
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
    AppDropdownMenu: defineAsyncComponent(() => import('@/components/base/AppDropdownMenu.vue'))
  },
  emits: ['openCloseContext', 'onSelectInContext'],
  props: {
    name: {
      type: String,
      required: true,
      default: ""
    },
    index: {
      type: Number,
      required: true,
    },
    childIndex: {
      type: Number,
      required: true,
    },
    isContextMenuOpened: {
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
    consistentIndex() {
      const index = this.index + 1;
      return `${index}.${this.childIndex}`;
    },
    getContextMenuIcon() {
      return this.isContextMenuOpened ? '/icons/ellipsis-white.svg' : '/icons/ellipsis.svg'
    }
  }
};
</script>