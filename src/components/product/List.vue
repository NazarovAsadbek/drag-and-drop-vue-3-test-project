<template>
  <div class="wrapper-accordion-block" @dragover.prevent @drop.stop="emit('onDrop')">
    <app-accordion
        v-for="({id, name, children}, index) in items" :key="id"
        :name="name"
        :children="children"
        :index="index"
        :activePanelIndex="activePanelIndex"
        :activeContextIndex="activeContextIndex"
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
    />
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
  components: {
    AppAccordion: defineAsyncComponent(() => import('@/components/base/AppAccordion/index.vue')),
  },
  emits: ['onDrop', 'onDropChild', 'onDragStart', 'onDragEnter', 'onDragStartChild', 'onDragEnterChild', 'openClosePanel', 'openCloseContext', 'onSelectInContext'],
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