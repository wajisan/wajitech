<template>
  <div class="section-s1" id="techno" @scroll.passive="handleScroll">
    <div class="d-grid pt-5 pb-5 ps-5 pe-5 col-md-12" style="top:0px; right:0px">
      <div class="main-title col-xs-12 col-md-6" v-if="currentContent">{{currentContent.title}}</div>
      <div class="col-xs-12 col-md-8 pt-5 pb-5" v-if="currentContent">
        {{currentContent.content1}}
      </div>

      <!-- change with vuejs data + firebase -->
      <div class="">
        <div class="container d-inline align-items-center">
          <div class="box text-center fw-bold">Frontend</div>
          <div class="box text-center">VueJS, Angular, React, Javascript, Jquery, Lightning </div>
        </div>

        <div class="pt-5 container d-inline align-items-center">
          <div class="box text-center fw-bold">Backend</div>
          <div class="box text-center">NodeJS, Java, Apex, C++, C, Python, PHP, QT, API REST</div>
        </div>

        <div class="pt-5 container d-inline align-items-center">
          <div class="box text-center fw-bold"> Blockchain </div>
          <div class="box text-center">Solidity, Blockfrost, web3.js </div>
        </div>

        <div class="pt-5 container d-inline align-items-center">
          <div class="box text-center fw-bold"> DevOps </div>
          <div class="box text-center">Docker, Git, Unix, OVH, 1and1, AWS, Bash, Cutecom, Raspberry (hardware)</div>
        </div>

        <div class="pt-5 container d-inline align-items-center">
          <div class="box text-center fw-bold">Mobile</div>
          <div class="box text-center">React Native</div>
        </div>

        <div class="pt-5 container d-inline align-items-center">
          <div class="box text-center fw-bold">Gaming</div>
          <div class="box text-center">Unity3D</div>
        </div>

        <div class="pb-5 pt-5 container d-inline align-items-center">
          <div class="box text-center fw-bold">Database</div>
          <div class="box text-center">SQL, MongoDB, Firebase, GraphQL</div>
        </div>
      </div>

      <div class="col-xs-12 col-md-12 pt-5 pb-5" v-if="currentContent">
        {{currentContent.content2}} <a href="#timeline">{{currentContent.content3}}</a>{{currentContent.content4}}
      </div>
      <!--<div class="col-xs-12 col-md-12 pt-5 pb-5">
        Environnement actuel : Windows avec Ubuntu via WSL en codant sur Visual Studio Code, mais je garde l’esprit ouvert.
      </div>-->
    </div>
    
  </div>
</template>

<script>
export default {
    props: {
      lang: String,
    },
    data() {
        return {
          content: {
            'FR' : {
              title: 'Pour votre CTO',
              content1: 'On va devenir un peu technique, vous pouvez montrer cette partie à votre référent technique, d’ailleurs je serais ravi d’échanger avec lui/elle. Voici la liste des skills dans lesquels je suis opérationnel.',
              content2: 'De plus, je suis en constante veille et à l’écoute des dernières technologies. Grâce à mon ',
              content3: 'expérience',
              content4: ', les stacks qui me sont inconnues ne me font pas peur tant qu’il y a une documentation.',
            },
            'EN' : {
              title: 'For your CTO',
              content1: 'We\'re going to get a little technical, you can show this part to your technical referent, besides I\'d be happy to exchange with him/her. Here is the list of skills in which I am operational.',
              content2: 'Moreover, I am constantly on the lookout for the latest technologies. Thanks to my ',
              content3: 'expertise',
              content4: ', stacks that are unknown to me don\'t scare me as long as there is documentation.',
            },
          },
          currentContent: null,
        }
    },
    mounted() {
      this.currentContent = this.content['FR'];
    },
    methods: {
      changeContent() {
        this.currentContent = this.content[this.lang];
      }
    },
    watch: { 
      	lang: function(newVal, oldVal) { // watch it
          this.changeContent();
        }
      }
}
</script>

<style>
</style>