<template>
  <section
    class="w-screen h-screen m-0 p-0 absolute flex items-center justify-center z-10 top-0 left-0 right-0 bg-slate-400 bg-opacity-50"
  >
    <div
      class="h-11/12 w-11/12 bg-black text-white rounded shadow-xl p-4 lg:w-1/2 lg:h-1/2 md:w-1/2 h-1/2"
    >
      <slot/>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default  defineComponent({
  name: 'ModalComponent',
  data() {
    return {}
  },
})
</script>

<style scoped></style>
