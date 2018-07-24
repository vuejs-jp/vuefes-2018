<template>
  <div class="the-head-image">
    <picture class="hide-if-en">
      <source
        media="(max-width: 768px)"
        srcset="~/assets/images/head@2x-q75.webp,
          ~/assets/images/head@2x-q75.webp 2x,
          ~/assets/images/head@3x-q75.webp 3x,
          ~/assets/images/head@4x-q75.webp 4x"
        type="image/webp"
      >
      <source
        media="(max-width: 768px)"
        srcset="~/assets/images/head@2x.jpg,
          ~/assets/images/head@2x.jpg 2x,
          ~/assets/images/head@3x.jpg 3x,
          ~/assets/images/head@4x.jpg 4x"
      >
      <source media="(min-width: 769px)" srcset="~/assets/images/head-q75.webp" type="image/webp">
      <source media="(min-width: 769px)" srcset="~/assets/images/head.jpg">
      <img class="head-image" src="~/assets/images/head.jpg" alt="Vue Fes Japan 2018 | 2018.11.3 [Sat.] | 秋葉原 UDX 4F UDX ギャラリー">
    </picture>
    <picture class="hide-if-ja">
      <source
        media="(max-width: 768px)"
        srcset="~/assets/images/head-en@2x-q75.webp,
          ~/assets/images/head-en@2x-q75.webp 2x,
          ~/assets/images/head-en@3x-q75.webp 3x,
          ~/assets/images/head-en@4x-q75.webp 4x"
        type="image/webp"
      >
      <source
        media="(max-width: 768px)"
        srcset="~/assets/images/head-en@2x.jpg,
          ~/assets/images/head-en@2x.jpg 2x,
          ~/assets/images/head-en@3x.jpg 3x,
          ~/assets/images/head-en@4x.jpg 4x"
      >
      <source media="(min-width: 769px)" srcset="~/assets/images/head-en-q75.webp" type="image/webp">
      <source media="(min-width: 769px)" srcset="~/assets/images/head-en.jpg">
      <img class="head-image" src="~/assets/images/head-en.jpg" alt="Vue Fes Japan 2018 | 2018.11.3 [Sat.] | Akihabara UDX 4F UDX GALLERY">
    </picture>
  </div>
</template>

<script>
export default {
  name: 'TheHeadImage',
}
</script>

<style lang="scss" scoped>
.head-image {
  display: block;
  width: 100%;
}
</style>
