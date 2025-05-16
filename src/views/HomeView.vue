<template>
  <main>
    <section id="home" class="hero-section">
      <div class="hero-content">
        <h1>探索千年乳香传奇</h1>
        <p>源自阿曼的奢华香氛，传承古老智慧的现代诠释</p>
        <router-link to="/products" class="cta-button">探索产品</router-link>
      </div>
    </section>

    <section id="products" class="products-section">
      <h2>精选系列</h2>
      <div class="product-grid">
        <article v-for="(product, index) in products" :key="index" class="product-card">
          <router-link :to="product.link">
            <div class="product-image"></div>
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
          </router-link>
        </article>
      </div>
    </section>

    <section id="story" class="story-section">
      <div class="story-content">
        <h2>品牌故事</h2>
        <p>
          千年乳香路，见证阿曼与世界的芳香对话。我们传承古老智慧，以现代工艺提炼最纯净的乳香精华，为您带来独一无二的东方奢华体验。
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
  {
    title: '乳香精油系列',
    description: '源自阿曼山脉，百年传承工艺萃取',
    link: '/products#essential-oils'
  },
  {
    title: '乳香面霜系列',
    description: '以千年乳香凝萃，封存沙漠的再生密语',
    link: '/products#face-cream'
  },
  {
    title: '乳香系列',
    description: '千年凝脂蜜香，阿曼佐法尔阳光的固体切片',
    link: '/products#frankincense'
  },
  {
    title: '乳香香皂系列',
    description: '天然护肤精华，尽显东方美韵',
    link: '/products#soap'
  },
  {
    title: '乳香洗发水系列',
    description: '阿曼乳香萃取，散发东方神秘香韵',
    link: '/products#shampoo'
  }
])
</script>

<style scoped>
.hero-section {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images//9.avif')
      center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero-content {
  max-width: 800px;
  padding: 2rem;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 300;
  letter-spacing: 3px;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: #d4a86a;
  color: white;
  text-decoration: none;
  border-radius: 2px;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #6f563e;
}

.products-section {
  padding: 6rem 2rem;
  background-color: #f8f8f8;
}

.products-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-weight: 300;
  letter-spacing: 2px;
}

.product-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.product-card {
  background: white;
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  height: 300px;
  background-color: #f0f0f0;
  margin-bottom: 1rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: transform 0.3s ease;
}

.product-card:nth-child(1) .product-image {
  background-image: url('https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images//index/1.jpg');
}

.product-card:nth-child(2) .product-image {
  background-image: url('https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images//index/2.avif');
}

.product-card:nth-child(3) .product-image {
  background-image: url('https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images//index/4.png');
}

.product-card:nth-child(4) .product-image {
  background-image: url('https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images//index/3.jpg');
}

.product-card:nth-child(5) .product-image {
  background-image: url('https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images//index/5.jpg');
}

.product-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #8b6b4d;
}

.story-section {
  padding: 8rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
    url('https://cdn.jsdelivr.net/gh/makle-oman/frankincense-img@main/images//10.avif')
      center/cover fixed;
  color: white;
}

.story-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.story-content h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 300;
  letter-spacing: 2px;
}

.story-content p {
  font-size: 1.2rem;
  line-height: 1.8;
}
</style>