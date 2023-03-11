<template>
  <section class="w-full flex flex-row gap-2 items-center text-2xl">
    <span class="font-800">Hola!,</span>
    <input
      v-if="isEdit"
      v-model="valueInput.name"
      type="text"
      autocomplete="off"
      spellcheck="false"
      placeholder="Pon tu nombre..."
      class="bg-transparent outline-none"
      @mouseenter="() => isEdit = true"
      @mouseleave="() => isEdit = false"
      @keyup.enter="() => isEdit = false"
      @change="changeName(valueInput.name)"
    />
    <input
      v-if="!isEdit"
      type="text"
      placeholder="Pon tu nombre..."
      autocomplete="off"
      :value="valueName"
      class="bg-transparent outline-none"
      @click="() => isEdit = true"
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
      valueName: computed(() => userStore.getCurrentName),
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
