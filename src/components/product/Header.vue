<template>
  <div class="wrapper-heading">
    <h1 class="wrapper-heading__text">Список тем обращения и продуктов</h1>
    <div class="wrapper-heading__chip">
      <span>Найдено: {{ findProducts }}</span>
    </div>
  </div>
</template>

<script>
export default {
  functional: true,
  props: {
    findProducts: {
      type: Number,
      required: true,
      default: 0
    },
  },
};
</script>