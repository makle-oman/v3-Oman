<template>
  <main class="products-list-page">
    <div class="products-filter">
      <h1>产品系列</h1>
      <div class="filter-options">
        <button
          v-for="category in categories"
          :key="category.id"
          class="filter-btn"
          :class="{ active: activeCategory === category.id }"
          @click="scrollToCategory(category.id)"
        >
          {{ category.name }}
        </button>
      </div>
    </div>

    <div class="products-container">
      <div v-for="(category,index) in categories.filter(item=>item.id!='all')" :key="category.id" :id="category.id" class="product-category">
        <h2>{{ category.name }}</h2>
        <div class="product-items">
          <div v-for="product in categoryProducts[category.id]" :key="product.id" class="product-item">
            <router-link :to="`/product/${category.id}/${product.id}`">
              <img :src="product.imgUrl" :alt="product.name" class="product-item-image" />
              <h3>{{ product.name }}</h3>
              <p>¥{{ product.price }}</p>
              <p class="product-desc" v-html="product.description"></p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const categories = ref([
  { id: 'all', name: '全部系列' },
  { id: 'essential-oils', name: '乳香精油系列' },
  { id: 'face-cream', name: '乳香面霜系列' },
  { id: 'frankincense', name: '乳香系列' },
  { id: 'soap', name: '乳香香皂系列' },
  { id: 'shampoo', name: '乳香洗发水系列' }
])

const activeCategory = ref('all')

const categoryProducts = ref({
  'essential-oils': [
    {
      id: 1,
      name: '「阿曼·有机乳香复方精油」',
      price: 260,
      description: '提亮肤色 舒缓情绪 天然植物萃取',
      imgUrl: 'https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images/essential-oils/1.jpg'
    },
    {
      id: 2,
      name: '「阿曼·乳香按摩精油」',
      price: 289,
      description: '100%纯天然 芳香疗法 舒缓放松',
      imgUrl: 'https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images/essential-oils/2.jpg'
    },
    {
      id: 3,
      name: '「阿曼·乳香复方按摩油」',
      price: 220,
      description: '滋润肌肤 舒缓疲劳 天然植物精油',
      imgUrl: 'https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images/essential-oils/3.jpg'
    },
    {
      id: 4,
      name: '「阿曼·单方乳香精油」 | 小黑瓶',
      price: 148,
      description: '天然蒸馏萃取 100%纯度 舒缓情绪<br><span class="text-color">(需稀释使用)</span>',
      imgUrl: 'https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images/essential-oils/4.jpg'
    },
    {
      id: 5,
      name: '「阿曼·乳香单方精油」 | 小棕瓶',
      price: 148,
      description: '古法蒸馏 100%纯度 舒缓修护<br><span class="text-color">(需稀释使用)</span>',
      imgUrl: 'https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images/essential-oils/5.jpg'
    }
  ],
  'face-cream': [
    {
      id: 1,
      name: '「阿曼·香氛身体乳」',
      price: 260,
      description: '持久保湿 丝滑不油腻 香味保湿霜',
      imgUrl: 'https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images/face-cream/1.avif'
    },
    {
      id: 2,
      name: '「阿曼·乳香美白霜」',
      price: 228,
      description: '提亮肤色 保湿滋润 敏感肌可用 天然植萃',
      imgUrl: 'https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images/face-cream/2.avif'
    },
    {
      id: 3,
      name: '「阿曼·乳香面霜」',
      price: 260,
      description: '改善肌肤 质地水油平衡 保湿滋润 丝滑易吸收',
      imgUrl: 'https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images/face-cream/3.jpg'
    },
    {
      id: 4,
      name: '「阿曼·没药乳香保湿霜」',
      price: 248,
      description: '深层补水 舒缓敏感肌 提亮肤色 修护屏障',
      imgUrl: 'https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images/face-cream/4.avif'
    },
    {
      id: 5,
      name: '「阿曼·乳香胶原蛋白保湿霜」',
      price: 248,
      description: '抗皱紧致 提亮肤色 深层补水不油腻',
      imgUrl: 'https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images/face-cream/5.avif'
    },
    {
      id: 6,
      name: '「阿曼·乳香护肤膏」',
      price: 248,
      description: '深层修复 舒缓保湿 面部按摩 干敏肌适用',
      imgUrl: 'https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images/face-cream/6.jpg'
    }
  ],
  'frankincense': [
    {
      id: 1,
      name: '「阿曼·绿乳香」（高品质.可食用）',
      price: '99 (30g)',
      description: '千年凝脂蜜香，阿曼佐法尔阳光的固体切片',
      imgUrl: 'https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images/frankincense/1.jpg'
    },
    {
      id: 2,
      name: '「阿曼·米黄色乳香」（可食用）',
      price: '80 (30g)',
      description: '天然树脂香料 泡茶炖汤熏香原料',
      imgUrl: 'https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images/frankincense/2.jpg'
    }
  ],
  'soap': [
    {
      id: 1,
      name: '「阿曼·乳香手工皂」',
      price: 139,
      description: '无香精添加 温和清洁全身 敏感肌适用',
      imgUrl: 'https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images/soap/1.jpg'
    },
    {
      id: 2,
      name: '「阿曼·乳香美白皂」',
      price: 149,
      description: '天然护肤精华，尽显东方美韵',
      imgUrl: 'https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images/soap/2.jpg'
    }
  ],
  'shampoo': [
    {
      id: 1,
      name: '「阿曼·乳香洗发露」',
      price: 199,
      description: '阿曼乳香萃取，散发东方神秘香韵',
      imgUrl: 'https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images/shampoo/1.jpg'
    }
  ]
})

const scrollToCategory = (categoryId) => {
  activeCategory.value = categoryId
  if (categoryId === 'all') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const element = document.getElementById(categoryId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  const hash = window.location.hash.slice(1)
  
  if (hash) {
    // 从 hash 中提取分类 ID
    const categoryId = hash.split('#')[1] || hash
    activeCategory.value = categoryId
    setTimeout(() => {
      scrollToCategory(categoryId)
    }, 100)
  }
})
</script>

<style scoped>
.products-list-page {
  padding-top: 80px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 2rem 4rem;
}

.products-filter {
  text-align: center;
  margin-bottom: 4rem;
}

.products-filter h1 {
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: #333;
}

.filter-options {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.8rem 1.5rem;
  border: 1px solid #8b6b4d;
  background: none;
  color: #8b6b4d;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn.active,
.filter-btn:hover {
  background: #8b6b4d;
  color: white;
}

.product-category {
  margin-bottom: 4rem;
  scroll-margin-top: 100px;
}

.product-category h2 {
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: #8b6b4d;
}

.product-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.product-item {
  text-align: center;
  transition: transform 0.3s ease;
}

.product-item:hover {
  transform: translateY(-5px);
}

.product-item h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.product-item p {
  color: #8b6b4d;
  margin-bottom: 0.5rem;
}

.product-desc {
  font-size: 0.9rem;
  color: #666 !important;
}

@media (max-width: 768px) {
  .products-list-page {
    padding-top: 60px;
  }

  .products-filter h1 {
    font-size: 2rem;
  }

  .filter-btn {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }

  .product-category h2 {
    font-size: 1.5rem;
  }
}
.product-item-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 1rem;
}
</style>