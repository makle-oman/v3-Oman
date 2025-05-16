<template>
  <header class="header">
    <nav class="nav-container">
      <div class="logo" @click="$router.push('/')">OMAN 野奢</div>
      <div class="nav-toggle" :class="{ active: isMenuOpen }" @click="toggleMenu" aria-label="Toggle navigation">
        <span class="hamburger"></span>
      </div>
      <ul class="nav-menu" :class="{ active: isMenuOpen }">
        <li><router-link to="/" @click="closeMenu">首页</router-link></li>
        <li><router-link to="/products" @click="closeMenu">产品系列</router-link></li>
        <li><router-link to="/#story" @click="closeMenu">品牌故事</router-link></li>
        <li><router-link to="/#contact" @click="closeMenu">联系我们</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>