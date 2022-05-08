<template>
  <div class="section-s2 d-grid" id="learn" @scroll.passive="handleScroll">
    <div class="pb-5 ps-5 pe-5 pt-5 container d-flex align-items-center">
      <div class="box">
        <div class="main-title hide">“A problem well stated is a problem half solved.”</div>
        <div class="author pb-5 hide">John Dewey</div>
        <div class="hide">
          Le monde du code peut être très complexe pour les non-initiés et peut être un barrage de communication, son apprentissage est la clé. En plus de pouvoir offrir des sessions de formations à vos équipes, nous arrivons à vulgariser et expliquer à nos clients les termes les plus <a href="#techno">techniques</a> pour vous intégrer à la conception des solutions.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import observerr from '~/plugins/show-hide.client';
export default {
    data() {
        return {
        }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll (e) {
        observerr('learn');
      }      
    },
}
</script>

<style>
.author {
    font-style: italic;
    font-family: 'Satoshi';
    text-align: right;
}
</style>