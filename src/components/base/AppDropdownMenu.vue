<template>
  <div class="context-menu">
    <ul>
      <li v-for="(item, index) in items" :key="index" @click="handleClick(item)">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContextMenu',
  props: {
    items: {
      type: Array,
      required: true
    },
    position: {
      type: Object,
      default: () => ({x: 0, y: 0})
    }
  },
  methods: {
    handleClick(item) {
      this.$emit('select', item);
    }
  },
};
</script>

<style scoped>
.context-menu {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.context-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.context-menu li {
  padding: 5px 10px;
  cursor: pointer;
}

.context-menu li:hover {
  background-color: #f0f0f0;
}
</style>
