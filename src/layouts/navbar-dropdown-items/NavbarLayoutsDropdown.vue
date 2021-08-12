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
  <V-Dropdown ref="dropdownElement" class="has-mega-dropdown" modern spaced>
    <template #button="{ toggle }">
      <div
        class="dropdown-trigger is-trigger"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
      >
        <V-Button
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          icon-caret="feather:chevron-down"
          rounded
          @click="toggle"
        >
          Produtos
        </V-Button>
      </div>
    </template>

    <template #content>
      <div
        class="category-selector"
        :class="[selectedCategory !== '' && 'is-hidden']"
      >
        <div class="title-wrap">
          <h4>Aqui você pode gerenciar os seus produtos.</h4>
        </div>
        <div class="category-selector-inner">
          <div class="category-item">
            <i aria-hidden="true" class="lnil lnir-add-files"></i>
            <span>Novo Produto</span>
          </div>
          <div class="category-item">
            <i aria-hidden="true" class="lnil lnil-grid-alt"></i>
            <span>Meus Produtos</span>
          </div>
          <div class="category-item">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Co-Produções</span>
          </div>
          <!--<div class="category-item" @click="selectedCategory = 'subpages'">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Subpages</span>
          </div>
          <div class="category-item" @click="selectedCategory = 'utility'">
            <i aria-hidden="true" class="lnil lnil-reload"></i>
            <span>Utility</span>
          </div>-->
        </div>
      </div>
    </template>
  </V-Dropdown>
</template>
