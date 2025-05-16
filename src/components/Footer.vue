<template>
  <footer class="footer" id="contact">
    <div id="wechatModal" class="modal" :class="{ 'modal-active': isModalOpen }">
      <div class="modal-content">
        <span class="close-button" @click="closeModal">&times;</span>
        <h3>扫码添加我们</h3>
        <div class="qr-code">
          <img src="https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images/wechat/wechat-qr.jpg" alt="微信二维码" />
        </div>
      </div>
    </div>
    <div class="footer-content">
      <div class="footer-section">
        <h4>联系我们</h4>
        <p>电话：+86 17878537074</p>
        <p>邮箱：makle_work@163.com</p>
      </div>
      <div class="footer-section">
        <h4>关注我们</h4>
        <div class="social-links">
          <a href="javascript:void(0)" class="social-link" @click="openModal">微信</a>
          <a href="https://makle-frankincense-oil.taobao.com/shop/view_shop.htm" class="social-link" target="_blank">淘宝</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Oman Frankincense. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>