<template>
  <main class="product-detail-page">
    <div class="product-container" v-if="product">
      <div class="product-gallery">
        <div class="main-image">
          <img :src="currentPreviewImage" :alt="product.name" @click="openPreview" />
        </div>
        <div class="thumbnail-list">
          <img
            v-for="(image, index) in product.images"
            :key="index"
            :src="image"
            :alt="`${product.name} 缩略图${index + 1}`"
            class="thumbnail"
            :class="{ active: currentImage === index }"
            @click="changeMainImage(index)"
          />
        </div>
      </div>
      
      <div class="product-info">
        <nav class="breadcrumb">
          <router-link to="/products">产品系列</router-link>
          <span class="separator">/</span>
          <router-link :to="`/products#${categoryId}`">{{ getCategoryName }}</router-link>
          <span class="separator">/</span>
          <span>{{ product.name }}</span>
        </nav>
        
        <h1>{{ product.name }}</h1>
        <div class="price">¥{{ product.price }}</div>
        <div class="description" v-html="product.description"></div>
        
        <div class="product-features" v-if="product.features">
          <h2 class="text-color detail-h2">产品详情</h2>
          <h2>产品特点</h2>
          <ul>
            <li v-for="(feature, index) in product.features" :key="index">
              {{ feature }}
            </li>
          </ul>
        </div>
        
        <div class="usage-guide" v-if="product.usage">
          <h2>使用方法</h2>
          <p>{{ product.usage }}</p>
        </div>

        <div class="purchase-section">
          <button class="add-to-cart" @click="goToStore">立即购买</button>
        </div>
      </div>
    </div>
    
    <!-- 图片预览弹窗 -->
    <div class="preview-modal" v-if="showPreview" @click="closePreview">
      <div class="preview-content">
        <img :src="currentPreviewImage" :alt="product?.name" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed,onMounted } from 'vue'
import { useRoute } from 'vue-router'
import productData from '@/assets/productData/index'

const route = useRoute()
const categoryId = route.params.categoryId
const productId = route.params.productId

// 产品数据
const product = ref(null)
const showPreview = ref(false)
const currentImage = ref(0)

// 获取分类名称
const categories = {
  'essential-oils': '乳香精油系列',
  'face-cream': '乳香面霜系列',
  'frankincense': '乳香系列',
  'soap': '乳香香皂系列',
  'shampoo': '乳香洗发水系列'
}

const getCategoryName = computed(() => {
  return categories[categoryId] || ''
})

// 修改 currentPreviewImage 计算属性
const currentPreviewImage = computed(() => {
  if (!product.value?.images) return ''
  return product.value.images[currentImage.value]
})

// 图片预览相关方法
const openPreview = () => {
  showPreview.value = true
}

const closePreview = () => {
  showPreview.value = false
}

const changeMainImage = (index) => {
  currentImage.value = index
}

const goToStore = () => {
  window.location.href = 'https://makle-frankincense-oil.taobao.com/shop/view_shop.htm'
}

onMounted(() => {
  // 获取产品数据
  if (productData[categoryId] && productData[categoryId][productId]) {
    product.value = productData[categoryId][productId]
  }
})
</script>

<style scoped>
.product-detail-page {
  padding: 80px 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
  overflow-x: hidden; /* 防止水平溢出 */
  width: 100%; /* 确保宽度不超过视口 */
  box-sizing: border-box; /* 确保padding不会导致宽度溢出 */
}

.product-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  max-width: 100%; /* 确保不超过父容器宽度 */
}

.product-gallery {
  position: sticky;
  top: 100px;
}

.main-image {
  width: 100%;
  aspect-ratio: 1;
  background-color: #f5f5f5;
  margin-bottom: 1rem;
  overflow: hidden;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.main-image img:hover {
  transform: scale(1.02);
}

.thumbnail-list {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}

.thumbnail {
  width: 80px;
  height: 80px;
  object-fit: cover;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  flex-shrink: 0;
}

.thumbnail.active,
.thumbnail:hover {
  opacity: 1;
}

.product-info {
  padding: 2rem 0;
}

.breadcrumb {
  margin-bottom: 2rem;
  color: #8b6b4d;
}

.breadcrumb a {
  color: #8b6b4d;
  text-decoration: none;
}

.breadcrumb .separator {
  margin: 0 0.5rem;
}

h1 {
  font-size: 2rem;
  font-weight: 300;
  color: #333;
  margin-bottom: 1rem;
}

.price {
  font-size: 1.5rem;
  color: #8b6b4d;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}

.product-features,
.usage-guide {
  margin-bottom: 2rem;
}

.product-features h2,
.usage-guide h2 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
}

.product-features .detail-h2{
  color: #8b6b4d;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.details-content {
  border-top: 1px solid #eee;
}

.product-features {
  padding: 2rem 0;
  border-bottom: 1px solid #eee;
}

.product-features ul {
  list-style: none;
  padding: 0;
}

.product-features li {
  margin-bottom: 0.5rem;
  color: #666;
  position: relative;
  padding-left: 1.5rem;
}

.product-features li::before {
  content: '•';
  color: #8b6b4d;
  position: absolute;
  left: 0;
}

.usage-guide p {
  color: #666;
  line-height: 1.6;
}

.purchase-section {
  margin-top: 2rem;
}

.add-to-cart {
  padding: .8rem 2.5rem;
  background-color: #8b6b4d;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
  width: 100%;
}

.add-to-cart:hover {
  background-color: #6f563e;
}

.preview-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.preview-content {
  width: 80vh;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview-content img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .product-detail-page {
    padding: 80px 1rem 2rem; /* 减小移动端的内边距 */
  }

  .product-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .product-gallery {
    position: relative;
    top: 0;
    width: 100%; /* 确保图片区域不溢出 */
  }

  .main-image {
    width: 100%;
    max-width: 100%; /* 确保图片不会溢出容器 */
  }

  .preview-content {
    width: 90vw;
    height: 90vw;
  }

  .thumbnail {
    width: 60px;
    height: 60px;
  }

  h1 {
    font-size: 1.8rem;
  }

  .price {
    font-size: 1.3rem;
  }

  .description {
    font-size: 1rem;
  }

  .product-info {
    width: 100%;
    padding: 1rem 0; /* 调整内边距 */
  }
}
</style>