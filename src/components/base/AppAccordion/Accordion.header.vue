<template>
  <div class="accordion-header" :class="{ 'opened': isPanelOpened }">
    <!--  Accordion order number  -->
    <div class="accordion-header__order">
      <p class="text-center">№</p>
      <p class="text-center">{{ getCurrentOrderNumber }}</p>
    </div>
    <!--  Accordion name  -->
    <div>
      <p>Название</p>
      <p class="text-upper fw-700 ">
        <img src="/icons/folder.svg" alt="folder">
        {{ name }}
      </p>
    </div>
    <!--  Accordion order number  -->
    <div>
      <p>Очередность</p>
      <p>{{ getCurrentOrderNumber }}</p>
    </div>
    <!--  Accordion Subcategories  -->
    <div class="overflow-hidden">
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
      >
        <img :src="getCurrentPanelImage" alt="top">
      </AppButton>
      <div @contextmenu.prevent="handleContextMenu">
        <p>Right</p>
        <AppDropdownMenu
            v-if="showContextMenu"
            :items="contextMenuItems"
            :position="contextMenuPosition"
            @select="handleContextMenuSelect"
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
  },
  data() {
    return {
      showContextMenu: false,
      contextMenuItems: [
        {label: 'Edit', action: 'edit'},
        {label: 'Delete', action: 'delete'}
      ],
      contextMenuPosition: {x: 0, y: 0}
    }
  },
  methods: {
    handleContextMenu(event) {
      this.showContextMenu = !this.showContextMenu;
      this.contextMenuPosition = { x: event.clientX, y: event.clientY };
    },
    handleContextMenuSelect(item) {
      console.log(`Selected item: ${item.action}`);
      this.showContextMenu = false;
    }
  },
  props: {
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
    isBtnDisabled: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    getCurrentOrderNumber() {
      const index = this.index + 1;
      return index;
    },
    getChildrenString() {
      if (this.children.length === 0) {
        return "-"
      }
      return this.children.toString();
    },
    getCurrentPanelImage() {
      return this.isPanelOpened ? '/icons/chevron-top.svg' : '/icons/chevron-down.svg'
    }
  }
}
</script>