<template>
  <div>
    <b-button @click="activeButton()" :variant="color" size="sm" class="d-flex justify-content-between align-items-center pt-10">
        <b-icon :icon="icon"/>
        <!-- {{ text }} -->
    </b-button>
  </div>
</template>

<script>

export default {
  
  props: {
    icon: {
      required: true,
      type: String
    },

    color: {
      required: true,
      type: String
    },

    text: {
      required: true,
      type: String
    }
  },

  methods: {
    activeButton() {
      this.$emit('open');
    }
  },

}
</script>