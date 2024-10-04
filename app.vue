<template>
  <div>
    <div class="grid-container">
      <div class="grid-x grid-padding-x">
        <div class="cell medium-12">
          <h1>Welcome to Nuxt with Zurb Foundation</h1>
          <p>If you can see this styled content, Nuxt.js and Zurb Foundation are working correctly.</p>
          <button class="button" @click="toggleDropdown">Foundation Dropdown</button>
          <div v-show="isDropdownOpen" class="dropdown-pane">
            This is a dropdown pane.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isDropdownOpen = ref(false)

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value
}
</script>

<style>
.dropdown-pane {
  position: absolute;
  z-index: 10;
  display: block;
  width: 300px;
  padding: 1rem;
  visibility: visible;
  border: 1px solid #cacaca;
  border-radius: 0;
  background-color: #fefefe;
}
</style>