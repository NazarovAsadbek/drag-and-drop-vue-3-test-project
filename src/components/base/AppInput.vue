<template>
  <input v-model="model" class="app-input"/>
</template>

<script>
export default {
  emits: ['input'],
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    type: {
      type: String,
      required: true,
      default: "parent"
    },
    index: {
      type: Number,
      required: true,
    },
    childIndex: {
      type: Number,
      required: false,
    },
  },
  computed: {
    model: {
      get() {
        if (this.type === 'parent') {
          return this.value[this.index].name;
        }
        return this.value[this.index].children[this.childIndex].name;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  },
  methods: {
    onChange($event) {
      const value = $event.target.value;
      this.debounce(() => this.$emit('input', value), 2000)
    },
    debounce() {
      let timeout = null;
      return function (fnc, delayMs) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          fnc();
        }, delayMs || 1000);
      };
    }
  }
}
</script>