<template>
  <div class="section-s1" id="techno" @scroll.passive="handleScroll">
    <div class="d-grid pt-5 pb-5 ps-5 pe-5 col-md-12" style="top:0px; right:0px">
      <div class="main-title col-xs-12 col-md-6 hide">Pour votre CTO</div>
      <div class="col-xs-12 col-md-8 pt-5 pb-5 hide">
        On va devenir un peu technique, vous pouvez montrer cette partie à votre référent technique, d’ailleurs je serais ravi d’échanger avec lui/elle.<br/><br/>Voici la liste des skills dans lesquels je suis opérationnel.
      </div>

      <!-- change with vuejs data + firebase -->
      <div class="">
        <div class="container d-inline align-items-center hide">
          <div class="box text-center fw-bold">Frontend</div>
          <div class="box text-center">VueJS, Angular, React, Javascript, Jquery, Lightning </div>
        </div>

        <div class="pt-5 container d-inline align-items-center hide">
          <div class="box text-center fw-bold">Backend</div>
          <div class="box text-center">NodeJS, Java, Apex, C++, C, Python, PHP, QT, API REST</div>
        </div>

        <div class="pt-5 container d-inline align-items-center hide">
          <div class="box text-center fw-bold"> Blockchain </div>
          <div class="box text-center">Solidity, Blockfrost, web3.js </div>
        </div>

        <div class="pt-5 container d-inline align-items-center hide">
          <div class="box text-center fw-bold"> DevOps </div>
          <div class="box text-center">Docker, Git, Unix, OVH, 1and1, AWS, Bash, Cutecom, Raspberry (hardware)</div>
        </div>

        <div class="pt-5 container d-inline align-items-center hide">
          <div class="box text-center fw-bold">Mobile</div>
          <div class="box text-center">React Native</div>
        </div>

        <div class="pt-5 container d-inline align-items-center hide">
          <div class="box text-center fw-bold">Gaming</div>
          <div class="box text-center">Unity3D</div>
        </div>

        <div class="pb-5 pt-5 container d-inline align-items-center hide">
          <div class="box text-center fw-bold">Database</div>
          <div class="box text-center">SQL, MongoDB, Firebase, GraphQL</div>
        </div>
      </div>

      <div class="col-xs-12 col-md-12 pt-5 pb-5 hide">
        De plus, je suis en constante veille et à l’écoute des dernières technologies. Grâce à mon <a href="#timeline">expérience</a>, les stacks qui me sont inconnues ne me font pas peur tant qu’il y a une documentation.
      </div>
      <!--<div class="col-xs-12 col-md-12 pt-5 pb-5">
        Environnement actuel : Windows avec Ubuntu via WSL en codant sur Visual Studio Code, mais je garde l’esprit ouvert.
      </div>-->
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
        observerr('skills');
      }      
    },
}
</script>

<style>
</style>