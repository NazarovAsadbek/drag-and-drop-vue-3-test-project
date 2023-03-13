<template>
  <div class="accordion">
    <expansion-header
        :name="name"
        :children="children"
        :children-length="getChildrenLength"
        :index="index"
        :isPanelOpened="isPanelOpened"
        :isBtnDisabled="isBtnDisabled"
        @openClosePanel="emit('openClosePanel', $event)"
    />
    <expansion-panel
        v-show="isPanelOpened"
        v-for="(name, childIndex) in children" :key="childIndex"
        :index="index" :childIndex="childIndex"
        :name="name"
        :draggable="true"
        @drop="emit('onDropChild')"
        @dragstart.stop="emit('onDragStartChild', {index, childIndex})"
        @dragenter.stop.prevent="emit('onDragEnterChild', {index, childIndex})"
        @dragover.stop.prevent
    />
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
  components: {
    ExpansionHeader: defineAsyncComponent(() => import('@/components/base/AppAccordion/Accordion.header.vue')),
    ExpansionPanel: defineAsyncComponent(() => import('@/components/base/AppAccordion/Accordion.panel.vue')),
  },
  emits: ['onDragStartChild', 'onDragEnterChild', 'onDropChild', 'openClosePanel'],
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
    }
  },
  computed: {
    getChildrenLength() {
      return this.children.length;
    }
  }
}
</script>