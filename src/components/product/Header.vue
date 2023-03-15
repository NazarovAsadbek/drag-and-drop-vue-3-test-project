<template>
  <div class="wrapper-heading">
    <h1 class="wrapper-heading__text">Список тем обращения и продуктов</h1>
    <div class="wrapper-heading__chip">
      <span>Найдено: {{ productsLength }}</span>
    </div>
  </div>
</template>

<script>
export default {
  functional: true,
  props: {
    productsLength: {
      type: Number,
      required: true,
      default: 0
    },
  },
};
</script>