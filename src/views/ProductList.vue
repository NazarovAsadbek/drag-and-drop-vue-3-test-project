<template>
  <section class="wrapper">
    <app-product-header :find-products="findProducts"/>
    <app-product-list
        :items="list"
        :activePanelIndex="activePanelIndex"
        :activeContextIndex="activeContextIndex"
        @onDragStart="onDragStart"
        @onDragEnter="onDragEnter"
        @onDragStartChild="onDragStartChild"
        @onDragEnterChild="onDragEnterChild"
        @onDrop="onDrop"
        @onDropChild="onDropChild"
        @openClosePanel="openClosePanel"
        @openCloseContext="openCloseContextMenu"
        @onSelectInContext="onSelectInContext"
    />
  </section>
</template>

<script>
import {ProductList} from "@/data/product/productList";
import {defineAsyncComponent} from "vue";

export default {
  components: {
    AppProductHeader: defineAsyncComponent(() => import('@/components/product/Header.vue')),
    AppProductList: defineAsyncComponent(() => import('@/components/product/List.vue')),
  },
  data() {
    return {
      list: new ProductList(),
      draggedIndex: null,
      draggedChildIndex: null,
      draggingOverIndex: null,
      draggingOverChildIndex: null,
      activePanelIndex: null,
      activeContextIndex: null,
    }
  },
  methods: {
    openClosePanel(index) {
      if (this.activePanelIndex === index) {
        this.activePanelIndex = null;
        return;
      }
      this.activePanelIndex = index;
    },
    openCloseContextMenu(index) {
      if (this.activeContextIndex === index) {
        this.activeContextIndex = null;
        return;
      }
      this.activeContextIndex = index;
    },
    onSelectInContext({index, type}) {
      this.activeContextIndex = null;
      if (type === 'delete') {
        const [parentIndex, childIndex = undefined] = index.toString().split('.');
        if (childIndex !== undefined) {
          this.list[parentIndex - 1].children.splice(childIndex, 1);
        } else {
          this.list.splice(parentIndex, 1);
        }
      } else if (type === 'edit') {
        // const [parentIndex, childIndex = undefined] = index.toString().split('.');
        // if (childIndex !== undefined) {
        //   this.list[parentIndex - 1].children[childIndex].name = 'Edited';
        // } else {
        //   this.list[parentIndex].name = 'Edited';
        // }
      }
    },
    onDragStart({index}) {
      this.draggedIndex = index;
    },
    onDragEnter({index}) {
      this.draggingOverIndex = index;
    },
    onDragStartChild({index, childIndex}) {
      this.draggedIndex = index;
      this.draggedChildIndex = childIndex;
    },
    onDragEnterChild({index, childIndex}) {
      this.draggingOverIndex = index;
      this.draggingOverChildIndex = childIndex;
    },
    onDrop() {
      if (this.draggedIndex !== null && this.draggingOverIndex !== null) {
        const [removed] = this.list.splice(this.draggedIndex, 1);
        this.list.splice(this.draggingOverIndex, 0, removed);
      }
      this.clearDrag()
    },
    onDropChild() {
      if (this.draggedIndex !== null && this.draggingOverIndex !== null) {
        const [removed] = this.list[this.draggedIndex].children.splice(this.draggedChildIndex, 1);
        this.list[this.draggingOverIndex].children.splice(this.draggingOverChildIndex, 0, removed);
      }
      this.clearDrag()
    },
    clearDrag() {
      this.draggedIndex = null;
      this.draggingOverIndex = null;
    }
  },
  computed: {
    findProducts() {
      return this.list.length
    }
  }
};
</script>