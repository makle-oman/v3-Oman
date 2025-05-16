// 递归获取所有产品的图片
const getAllProductImages = (products) => {
  let allImages = []
  
  Object.values(products).forEach(category => {
    Object.values(category).forEach(product => {
      if (product.images && Array.isArray(product.images)) {
        allImages = allImages.concat(product.images)
      }
    })
  })
  
  return allImages
}

// 预加载图片
export const preloadAllImages = (products) => {
  const images = getAllProductImages(products)
  images.forEach(src => {
    const img = new Image()
    img.src = src
  })
}