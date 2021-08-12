<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const dropdownElement = ref()
const selectedCategory = ref('')
const route = useRoute()

watch([() => route.fullPath, dropdownElement], () => {
  if (dropdownElement.value) {
    dropdownElement.value.close?.()
  }
})
</script>

<template>
  <V-Dropdown
    ref="dropdownElement"
    class="has-mega-dropdown"
    modern
    spaced
    right
  >
    <template #button="{}">
      <div
        class="dropdown-trigger is-trigger"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
      >
        <V-Button
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          rounded
          :to="{ name: 'index' }"
        >
          Ferramentas
        </V-Button>
      </div>
    </template>
  </V-Dropdown>
</template>
