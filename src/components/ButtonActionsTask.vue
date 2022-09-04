<template>
  <button
    ref="btnRef"
    @mouseenter="toggleTooltip()"
    @mouseleave="toggleTooltip()"
    @click="emitClick()"
    :class="`p-2 rounded-full bg-stone-800 w-8 h-8 flex items-center justify-center shadow-lg cursor-pointer ${extraClass}`"
  >
    <slot />
  </button>
  <div
    ref="tooltipRef"
    :class="{ hidden: !showTooltip, block: showTooltip }"
    class="text-sm bg-gray-600 p-2 text-center rounded text-white shadow-lg"
  >
    <span class="small-text">{{ messageTooltip }}</span>
    <div ref="refPopperArrow" data-popper-arrow></div>
  </div>
</template>

<script lang="ts">
import { createPopper } from '@popperjs/core';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ButtonActionsTask',
  props: {
    extraClass: {
      type: String,
      required: false,
    },
    useTooltip: {
      type: Boolean,
      required: false,
      default: false,
    },
    messageTooltip: {
      type: String || null,
      required: false,
    },
  },
  data() {
    return {
      showTooltip: false,
    };
  },
  emits: ['event:click'],
  methods: {
    emitClick() {
      this.$emit('event:click');
    },
    toggleTooltip() {
      if (!this.useTooltip) {
        return;
      }

      if (this.showTooltip) {
        this.showTooltip = false;
      } else {
        this.showTooltip = true;
        createPopper(
          this.$refs.btnRef as HTMLElement,
          this.$refs.tooltipRef as HTMLElement,
          {
            placement: 'top',
            modifiers: [
              {
                name: 'arrow',
                options: {
                  element: this.$refs.refPopperArrow as HTMLElement,
                  padding: 10,
                },
              },
            ],
          }
        );
      }
    },
  },
});
</script>

<style scoped></style>
