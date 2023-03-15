<template>
  <div class="accordion">
    <accordion-header
        v-model="model"
        :items="items"
        :name="name"
        :children="children"
        :children-length="getChildrenLength"
        :index="index"
        :isPanelOpened="isPanelOpened"
        :isBtnDisabled="isBtnDisabled"
        :isContextMenuOpened="isContextMenuOpened('', 'parent')"
        :isCardEditable="isCardEditable('', 'parent')"
        :contextMenuItems="getContextMenuItems"
        @openClosePanel="emit('openClosePanel', $event)"
        @openCloseContext="emit('openCloseContext', $event)"
        @onSelectInContext="emit('onSelectInContext', $event)"
        @editCard="emit('editCard', $event)"
    />
    <accordion-panel
        v-show="isPanelOpened"
        v-model="model"
        v-for="({id, name}, childIndex) in children" :key="id"
        :isContextMenuOpened="isContextMenuOpened(childIndex, 'child')"
        :isCardEditable="isCardEditable(childIndex, 'child')"
        :items="items"
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
        @editCard="emit('editCard', $event)"
    />
    <!--  emit is a mixin-->
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";
import {MenuContext} from "@/data/product/menu-context";

export default {
  components: {
    AccordionHeader: defineAsyncComponent(() => import('@/components/base/AppAccordion/Accordion.header.vue')),
    AccordionPanel: defineAsyncComponent(() => import('@/components/base/AppAccordion/Accordion.panel.vue')),
  },
  emits: ['onDragStartChild', 'onDragEnterChild', 'onDropChild', 'openClosePanel', 'openCloseContext', 'onSelectInContext', 'editCard', 'input'],
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    items: {
      type: Array,
      required: true,
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
    editableCardId: {
      type: [Number, String, null],
      required: true,
      default: null
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
    isCardEditable(childIndex, type = 'parent') {
      if (type === 'parent') {
        return this.editableCardId === this.index;
      }
      return this.editableCardId === `${this.index + 1}.${childIndex}`;
    },
  }
}
</script>