<template>
  <div>
    <slot name="modal">
  
        <div class="modal">
          <h3>{{ temp }}</h3>
          <v-btn @click="$emit('close')">ok</v-btn>
        </div>
     
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    temp: Number,
    show: Boolean,
  },
};
</script>

<style lang="scss" scoped>
div {
  position: absolute;
  z-index: 10;
}
</style>