<template>
  <div class="section-s3 d-grid" id="timeline" @scroll.passive="handleScroll">
    <div class="pt-5 pb-5 ps-5 pe-5 col-md-12 container d-grid align-items-center" style="top:0px; right:0px">
      <div class="main-title col-xs-12 col-md-6" v-if="currentContent">{{currentContent.title}}</div>
      <ul class="ps-5 col-xs-12 col-md-6" v-if="currentContent">
        <li>{{currentContent.item1}}</li>
        <li>{{currentContent.item2}}</li>
        <li>{{currentContent.item3}}</li>
        <li>{{currentContent.item4}}</li>
        <li>{{currentContent.item5}}</li>
        <li>{{currentContent.item6}}</li>
        <li>{{currentContent.item7}}</li>
        <li>Contact : <a href="#contact">{{currentContent.item8}}</a></li>
      </ul>
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
          currentContent: null,
          content: {
            'FR' : {
              title: 'Pour votre RH',
              item1: 'Profil Développeur : Frontend, Backend, Mobile, FullStack, Blockchain',
              item2: 'Type de contrat : Freelance',
              item3: 'Nationalité : français',
              item4: 'Disponibilité : Août 2022',
              item5: 'Lieu : Paris ou en Remote',
              item6: 'Langue : français ou anglais',
              item7: 'Personnalité : agréable et pédagogue',
              item8: 'juste là',
            },
            'EN' : {
              title: 'For your HR',
              item1: 'Developer Profile : Frontend, Backend, Mobile, FullStack, Blockchain',
              item2: 'Contract type : Freelance',
              item3: 'Nationality : France',
              item4: 'Availability : August 2022',
              item5: 'Location : Paris or remote',
              item6: 'language : French or English',
              item7: 'Personality: pleasant and educational',
              item8: 'Right here',
            },
          }
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