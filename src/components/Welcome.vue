<template>
  <section class="w-full flex flex-row gap-2 items-center text-2xl">
    <span class="font-800">Hola!,</span>
    <input
      v-model="valueInput.name"
      type="text"
      autocomplete="off"
      spellcheck="false"
      placeholder="Pon tu nombre..."
      class="bg-transparent outline-none"
      @change="changeName(valueInput.name)"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import NameUserStore from '../stores/NameUserStore';

export default defineComponent({
  name: 'Welcome',
  setup() {
    const userStore = NameUserStore();
    const reactiveInputName = reactive({ name: userStore.getCurrentName });

    return {
      valueInput: reactiveInputName,
      changeName: (newName: string) => userStore.setNameUser(newName),
    };
  },
  data() {
    return {
      isEdit: false,
    }
  }
});
</script>

<style scoped></style>
