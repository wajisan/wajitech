<template>
  <div class="section-s3 d-grid" id="timeline" @scroll.passive="handleScroll">
    <div class="pt-5 pb-5 ps-5 pe-5 col-md-12 container d-flex align-items-center" style="top:0px; right:0px">
      <div class="main-title col-xs-12 col-md-6 hide">Pour votre RH</div>
      <ul class="box ps-5 hide">
        <li>Profil Développeur : Frontend, Backend, Mobile, FullStack, Blockchain</li>
        <li>Type de contrat : Freelance</li>
        <li>Nationalité : français</li>
        <li>Disponibilité : Août 2022</li>
        <li>Lieu : Paris ou en Remote</li>
        <li>Langue : français ou anglais</li>
        <li>Personnalité : agréable et pédagogue</li>
        <li>Contact : <a href="#contact">juste là</a></li>
      </ul>
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
        observerr('profil');
      }      
    },
}
</script>

<style>
</style>