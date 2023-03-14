<template>
  <div class="accordion">
    <expansion-header
        :name="name"
        :children="children"
        :children-length="getChildrenLength"
        :index="index"
        :isPanelOpened="isPanelOpened"
        :isBtnDisabled="isBtnDisabled"
        :isContextMenuOpened="isContextMenuOpened('', 'parent')"
        :contextMenuItems="getContextMenuItems"
        @openClosePanel="emit('openClosePanel', $event)"
        @openCloseContext="emit('openCloseContext', $event)"
        @onSelectInContext="emit('onSelectInContext', $event)"
    />
    <expansion-panel
        v-show="isPanelOpened"
        v-for="(name, childIndex) in children" :key="childIndex"
        :isContextMenuOpened="isContextMenuOpened(childIndex, 'child')"
        :index="index" :childIndex="childIndex"
        :name="name"
        :contextMenuItems="getContextMenuItems"
        :draggable="true"
        @drop="emit('onDropChild')"
        @dragstart.stop="emit('onDragStartChild', {index, childIndex})"
        @dragenter.stop.prevent="emit('onDragEnterChild', {index, childIndex})"
        @dragover.stop.prevent
        @openCloseContext="emit('openCloseContext', $event)"
        @onSelectInContext="emit('onSelectInContext', $event)"
    />
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";
import {MenuContext} from "@/data/product/menu-context";

export default {
  components: {
    ExpansionHeader: defineAsyncComponent(() => import('@/components/base/AppAccordion/Accordion.header.vue')),
    ExpansionPanel: defineAsyncComponent(() => import('@/components/base/AppAccordion/Accordion.panel.vue')),
  },
  emits: ['onDragStartChild', 'onDragEnterChild', 'onDropChild', 'openClosePanel', 'openCloseContext', 'onSelectInContext'],
  props: {
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
    index: {
      type: Number,
      required: true,
      default: 0
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
    },
    activeContextIndex: {
      type: [Number, String, null],
      required: true,
      default: null
    },
  },
  computed: {
    getChildrenLength() {
      return this.children.length;
    },
    getContextMenuItems() {
      return new MenuContext();
    }
  },
  methods: {
    isContextMenuOpened(childIndex, type = 'parent') {
      if (type === 'parent') {
        return this.activeContextIndex === this.index;
      }
      return this.activeContextIndex === `${this.index + 1}.${childIndex}`;
    },
  }
}
</script>