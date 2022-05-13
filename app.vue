<template>
  <div>
    <Home :lang="lang" @updateLang="updateLang" />
    <Methodology :lang="lang" />
    <Learn :lang="lang" />
    <Skills :lang="lang" />
    <Profil :lang="lang" />
    <Contact :lang="lang" />
  </div>
</template>

<style>
</style>

<script type="module">

import imageFav from '~/assets/favicon.png';
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
      link: [{ rel: 'icon', type: 'image/png', href: imageFav }],
    };
  },
  data() {
    return{
      lang: 'FR'
    }
  },
  mounted() {
    //scroll(0,0);
    //this.$on('update-lang', () => { console.log('LANG CHANGGGED') });
  },
  methods: {
    updateLang(e) {
      this.lang = (this.lang == 'FR') ? 'EN' : 'FR';
    }
  }
  
}
</script>

