<template>
  <div class="accordion-panel">
    <!--  Accordion order number  -->
    <div class="accordion-panel__order">
      <p class="text-center">№</p>
      <p class="text-center fw-500">{{ consistentIndex }}</p>
    </div>
    <!--  Accordion name  -->
    <div>
      <p>Название</p>
      <p class="fw-500">
        <img src="/icons/file.svg" alt="folder">
        {{ name }}
      </p>
    </div>
    <!--  Accordion order number  -->
    <div>
      <p>Очередность</p>
      <p class="fw-500">{{ childIndex + 1 }}</p>
    </div>
    <!--  Accordion actions  -->
    <div class="accordion-header__actions mt-3">
      test
      <!-- <AppDropdownMenu/>-->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: ""
    },
    index: {
      type: Number,
      required: true,
    },
    childIndex: {
      type: Number,
      required: true,
    },
  },
  computed: {
    consistentIndex() {
      const index = this.index + 1;
      return `${index}.${this.childIndex}`;
    }
  }
};
</script>