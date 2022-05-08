<template>
  <div>
    <Home />
    <Methodology />
    <Learn />
    <Skills />
    <Profil />
    <Contact />
  </div>
</template>

<style>
</style>

<script>
export default {
  head() {
    return {
      title: "Wajitech",
      meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      /*{
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }*/
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '~/assets/img/logo.png' }]
    };
  },
  mounted() {
    scroll(0,0);
  },
  
}
</script>

