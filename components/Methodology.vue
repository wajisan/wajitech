<template>
  <div class="section-s3" id="methodology">
    <div class="pt-2 pb-2"></div>
    <div class="d-grid pb-5 ps-5 pe-5 pt-5">
      <div class="main-title col-xs-12 col-md-8" v-if="currentContent">{{currentContent.title}}</div>
    </div>
    <div class="d-grid pb-5 ps-5 pe-5 " v-if="currentContent">
      <div class="col-xs-12 col-md-8 pb-5">{{currentContent.desc}}</div>
      <div class="row pt-5 row pt-5 col-md-10 m-auto">
        <div class="col-xs-12 col-md-4 pb-5 ps-3 pe-3">
          <div class="col-xs-12 sub-title">{{currentContent.titleItem1}}</div>
          <span class="sub-def">
            {{currentContent.descItem1}}
          </span>
        </div>

        <div class="col-xs-12 col-md-4 pb-5 ps-3 pe-3">
          <div class="col-xs-12 sub-title">{{currentContent.titleItem2}}</div>
          <span class="sub-def">
            {{currentContent.descItem2}}
          </span>
        </div>

        <div class="col-xs-12 col-md-4 pb-5 ps-3 pe-3">
          <div class="col-xs-12 sub-title">{{currentContent.titleItem3}}</div>
          <span class="sub-def">
            {{currentContent.descItem3}}
          </span>
        </div>
      </div>
      <div class="col-xs-12 col-md-10 mr-1 pt-5 text-end m-auto">{{currentContent.endLine}}<a href="#learn">{{currentContent.titleItem4}}</a></div>
    </div>
    <div class="pt-2 pb-2"></div>
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
              title: 'La formule magique',
              desc:'Nous pouvons décrire notre méthode de travail en trois points clés.',
              titleItem1 : 's’immerger',
              descItem1: 'Nous devons comprendre vos enjeux, votre image, vos ambitions pour nous adapter à vos besoins Une entreprise est un écosystème et il est important d’en comprendre le fonctionnement.',
              titleItem2: 'identifier',
              descItem2: 'Votre projet est notre mission. Nous prenons au sérieux la création et la mise en place de votre cahier des charges. Nous proposerons diverses solutions en vous conseillant sur chacune d’entre elles en étant transparent.',
              titleItem3: 'transformer',
              descItem3: 'Dans le respect des deadlines, notre développement et notre méthodologie sont orientés résultats. Notre mantra est de toujours fournir une solution solide et durable à nos clients pour maintenir une relation long terme basée sur la confiance.',
              endLine: 'Un quatrième en bonus juste ici : ',
              titleItem4: 'informer',
            },
            'EN' : {
              title: 'The magic formula',
              desc:'We can describe our working method in three key points.',
              titleItem1 : 'Immersion',
              descItem1: 'We must understand your issues, your image, your ambitions to adapt to your needs. A company is an ecosystem and it is important to understand how it works.',
              titleItem2: 'Identify',
              descItem2: 'Your project is our mission. We take the creation and implementation of your specifications seriously. We will propose various solutions by advising you on each of them while being transparent.',
              titleItem3: 'Transform',
              descItem3: 'Our development and methodology are results-oriented and respect deadlines. Our mantra is to always provide a solid and sustainable solution to our customers to maintain a long term relationship based on trust.',
              endLine: 'A fourth one as a bonus right here : ',
              titleItem4: 'Inform',
            }
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
.sub-title {
    font-family: "ND Bold";
    font-size: 22px;
    background-color: var(--waji-third-color);
    padding: 12px;
    text-align: center;
    margin: auto;
    text-transform: capitalize;

}
</style>