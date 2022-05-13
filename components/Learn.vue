<template>
  <div class="section-s2 d-grid" id="learn">
    <div class="pb-5 ps-5 pe-5 pt-5 container d-flex align-items-center">
      <div class="box" v-if="currentContent">
        <div class="main-title">“{{currentContent.quote}}”</div>
        <div class="author pb-5">John Dewey</div>
        <div class="">
          {{currentContent.content1}} <a href="#techno">{{currentContent.content2}}</a> {{currentContent.content3}}
        </div>
      </div>
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
              quote: 'Un problème bien énoncé est un problème à moitié résolu.',
              content1 : 'Le monde du code peut être très complexe pour les non-initiés et peut être un barrage de communication, son apprentissage est la clé. En plus de pouvoir offrir des sessions de formations à vos équipes, nous arrivons à vulgariser et expliquer à nos clients les termes les plus ',
              content2: 'techniques',
              content3: ' pour vous intégrer à la conception des solutions.'
            },
            'EN' : {
              quote: 'A problem well stated is a problem half solved.',
              content1: 'The world of code can be very complex for the uninitiated and can be a communication barrier, learning it is the key. In addition to offering training sessions to your teams, we are able to explain to our clients the most',
              content2: 'technical terms',
              content3: ' to integrate you in the design of the solutions.',
            }
          },
          currentContent: null,
        }
    },
    watch: { 
      	lang: function(newVal, oldVal) { // watch it
          this.changeContent();
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
.author {
    font-style: italic;
    font-family: 'Satoshi';
    text-align: right;
}
</style>