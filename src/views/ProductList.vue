<template>
  <section class="wrapper">
    <app-product-header :products-length="productsLength"/>
    <app-product-list
        v-model="productList"
        :items="productList"
        :draggedIndex="draggedIndex"
        :activePanelIndex="activePanelIndex"
        :activeContextIndex="activeContextIndex"
        :editableCardId="editableCardId"
        @onDragStart="onDragStart"
        @onDragEnter="onDragEnter"
        @onDragStartChild="onDragStartChild"
        @onDragEnterChild="onDragEnterChild"
        @onDrop="onDrop"
        @onDropChild="onDropChild"
        @openClosePanel="openClosePanel"
        @openCloseContext="openCloseContextMenu"
        @onSelectInContext="onSelectInContext"
        @editCard="editCard"
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
      productList: new ProductList(),
      draggedIndex: null,
      draggedChildIndex: null,
      draggingOverIndex: null,
      draggingOverChildIndex: null,
      activePanelIndex: null,
      activeContextIndex: null,
      editableCardId: null,
    }
  },
  computed: {
    productsLength() {
      return this.productList.length
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
    editCard(index, parentIndex, childIndex) {
      if (this.editableCardId === index) {
        this.editableCardId = null;
        if (childIndex !== undefined) {
          this.productList[parentIndex - 1].children[childIndex].name = new ProductList()[parentIndex - 1].children[+childIndex].name;
        } else {
          this.productList[parentIndex].name = new ProductList()[parentIndex].name;
        }
        return;
      }
      this.editableCardId = index;
    },
    onSelectInContext({index, type}) {
      const [parentIndex, childIndex = undefined] = index.toString().split('.');
      if (type === 'delete') {
        if (childIndex !== undefined) {
          this.productList[+parentIndex - 1].children.splice(childIndex, 1);
        } else {
          this.productList.splice(+parentIndex, 1);
        }
        this.activeContextIndex = null;
      } else if (type === 'edit') {
        this.editCard(index, +parentIndex, childIndex);
      } else if (type === 'saveEdit') {
        this.editableCardId = null;
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
        const [removed] = this.productList.splice(this.draggedIndex, 1);
        this.productList.splice(this.draggingOverIndex, 0, removed);
      }
      this.clearDrag()
    },
    onDropChild() {
      if (this.draggedIndex !== null && this.draggingOverIndex !== null) {
        const [removed] = this.productList[this.draggedIndex].children.splice(this.draggedChildIndex, 1);
        this.productList[this.draggingOverIndex].children.splice(this.draggingOverChildIndex, 0, removed);
      }
      this.clearDrag()
    },
    clearDrag() {
      this.draggedIndex = null;
      this.draggingOverIndex = null;
    }
  },
};
</script>