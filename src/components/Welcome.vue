<template>
  <section class="w-full flex flex-row gap-2 items-center text-2xl">
    <span class="font-800">Hola!,</span>
    <input
      type="text"
      autocomplete="off"
      spellcheck="false"
      v-model="valueInput.name"
      @change="changeName(valueInput.name)"
      placeholder="Pon tu nombre..."
      class="bg-transparent outline-none"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from 'vue';
import NameUserStore from '../stores/NameUserStore';

export default defineComponent({
  name: 'Welcome',
  setup() {
    const userStore = NameUserStore();
    const modelInputName = reactive({ name: '' });

    return {
      valueInput: modelInputName,
      value: computed(() => (modelInputName.name = userStore.getCurrentName)),
      changeName: (newName: string) => userStore.setNameUser(newName),
    };
  },
});
</script>

<style scoped></style>
