<template>
    <div class="section-s2" id="contact" style="height: auto; min-height: auto;">
      <div class="d-grid pt-5 pb-5 ps-5 pe-5 col-md-12" style="top:0px; right:0px">
        <div class="main-title col-xs-12 col-md-6" v-if="currentContent">{{currentContent.title}}</div>
      </div>
      <div class="d-grid pt-5 pb-5 ps-5 pe-5 col-md-12" style="top:0px; right:0px">
        <div class="col-xs-12 col-md-12 text-end" v-if="!showButton"><span class="show-button"  v-on:click="showIt()" v-if="currentContent">{{currentContent.button}}</span></div>
        <div class="col-xs-12 col-md-12 text-end" v-if="showButton"><a class="show-message" v-bind:href="'mailto:' + message">{{message}}</a></div>
      </div>
      <div class="d-grid pt-5 pb-5 ps-5 pe-5 col-md-12 text-end"><a target="_blank" href="https://twitter.com/wajitech">Twitter</a></div>
      <div class="d-grid pt-5 pb-5 ps-5 pe-5 col-md-12"></div>
    </div>
</template>

<script>
export default {
    props: {
      lang: String
    },
    data() {
        return {
          showButton: false,
          message : "contact@wajitech.fr",
          currentContent: null,
          content: {
            'FR': {
              title: 'Restons en contact',
              button: 'Afficher email'
            },
            'EN': {
              title: 'Let\'s keep in touch',
              button: 'Display email'

            }
          }
        }
    },
    methods : {
      showIt() {
        this.showButton = true;
      },
      changeContent() {
        this.currentContent = this.content[this.lang];
      }
    },
    mounted() {
      this.currentContent = this.content['FR'];
    },
    watch: { 
      	lang: function(newVal, oldVal) { // watch it
          this.changeContent();
        }
    }
}
</script>

<style>
.show-button {
    cursor: pointer;
    background-color: var(--waji-first-color);
    padding: 20px;
    font-family: 'ND Bold';
}

.show-button:hover {
    background-color: var(--waji-second-color);
    color: var(--waji-first-color);
}
</style>