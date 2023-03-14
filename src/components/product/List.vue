<template>
  <div class="wrapper-accordion-block" @dragover.prevent @drop.stop="emit('onDrop')">
    <app-accordion
        v-model="model"
        v-for="({id, name, children}, index) in items" :key="id"
        :items="items"
        :name="name"
        :children="children"
        :index="index"
        :activePanelIndex="activePanelIndex"
        :activeContextIndex="activeContextIndex"
        :editableCardId="editableCardId"
        :isPanelOpened="isPanelOpened(index)"
        :isBtnDisabled="isBtnDisabled(children)"
        :draggable="true"
        @dragstart.stop="emit('onDragStart', {index})"
        @dragenter.stop.prevent="emit('onDragEnter', {index})"
        @onDropChild="emit('onDropChild')"
        @onDragStartChild="emit('onDragStartChild', $event)"
        @onDragEnterChild="emit('onDragEnterChild', $event)"
        @openClosePanel="emit('openClosePanel', $event)"
        @openCloseContext="emit('openCloseContext', $event)"
        @onSelectInContext="emit('onSelectInContext', $event)"
        @editCard="emit('editCard', $event)"
        :class="{ 'dragging': draggedIndex === index }"
    />
    <!--  emit is a mixin-->
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
  components: {
    AppAccordion: defineAsyncComponent(() => import('@/components/base/AppAccordion/index.vue')),
  },
  emits: ['onDrop', 'onDropChild', 'onDragStart', 'onDragEnter', 'onDragStartChild', 'onDragEnterChild', 'openClosePanel', 'openCloseContext', 'onSelectInContext', 'editCard', 'input'],
  model: {
    prop: 'items',
    event: 'input'
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    activePanelIndex: {
      type: [Number, null],
      required: true,
      default: null
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
    draggedIndex: {
      type: [Number, Object, null],
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
    }
  },
  methods: {
    isPanelOpened(index) {
      return this.activePanelIndex === index;
    },
    isBtnDisabled(children) {
      const length = children.length;
      return length === 0;
    }
  },
};
</script>