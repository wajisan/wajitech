<template>
  <div class="section-s1 position-relative" id="home">
    <div class="d-flex position-absolute pb-5 col-md-12 w-100" style="top:0px; right:0px">
      <div class="lang-title col-xs-2 col-md-2 ps-4 me-auto" v-on:click="setLang()">{{lang}}</div>
      <div class="home-title col-xs-10 col-md-4 ps-4 ms-auto">WajiTech.</div>
    </div>
    <div class="d-grid position-absolute pb-5 ps-5 pe-5" style="bottom:0px; left:0px">
      <div class="main-title col-xs-12 col-md-8 pb-4" v-if="currentContent">{{currentContent.title}}</div>
      <div class="col-xs-12 col-md-8" v-if="currentContent">
        {{currentContent.content1}}
        <a href="#methodology">{{currentContent.content2}}</a>
        {{currentContent.content3}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
      lang: String,
    },
    emits: ["updateLang"],
    data() {
        return {
          windowTop: null, 
          content: {
            'FR' : {
              title: 'Développons vos idées.',
              content1: 'Mon nom est Kihel wadi et j’ai créé mon studio digital Wajitech pour aider mes clients à faire évoluer leur entreprise. Le monde de l’informatique a un potentiel extraordinaire et tout le monde devrait pouvoir en profiter. Grâce à notre ',
              content2: 'méthodologie',
              content3: ', vous pourrez régler des problèmes récurrents, automatiser des tâches redondantes, améliorer vos solutions actuelles ou en créer de nouvelles.',
            },
            'EN' : {
              title: 'Build tomorrow with code.',
              content1: 'My name is Kihel Wadi and I created my digital studio Wajitech to help my clients grow their business. The world of information technology has an extraordinary potential and everyone should be able to benefit from it. With our ',
              content2: 'methodology',
              content3: ', you can solve recurring problems, automate redundant tasks, improve your current solutions or create new ones.'
            }
          },
          currentContent: null,

        }
    },
    mounted() {
      this.currentContent = this.content['FR'];
    },
    methods: {
      setLang() {
        this.$emit('updateLang');
      },
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
.home-title {
    background-color: var(--waji-third-color);
    color: var(--waji-fourth-color);
    font-size: calc(4vw + 11.71px);
    font-family: "Nd Bold";
    line-height: calc(4vw + 11.71px);
    padding: calc(2vw + 1px) 0px;
}

.lang-title {
  padding: calc(2vw + 1px) 0px;
  cursor: pointer;
}
</style>