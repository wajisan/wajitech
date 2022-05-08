<template>
    <div class="section-s2" id="contact" style="height: auto; min-height: auto;"  @scroll.passive="handleScroll">
      <div class="d-grid pt-5 pb-5 ps-5 pe-5 col-md-12" style="top:0px; right:0px">
        <div class="main-title col-xs-12 col-md-6 hide">Keep in touch</div>
      </div>
      <div class="d-grid pt-5 pb-5 ps-5 pe-5 col-md-12" style="top:0px; right:0px">
        <div class="col-xs-12 col-md-12 text-end hide" v-on:click="showIt()" v-if="!showButton"><span class="show-button">Secret email</span></div>
        <div class="col-xs-12 col-md-12 text-end" v-if="showButton"><a class="show-message" v-bind:href="'mailto:' + message">{{message}}</a></div>
      </div>
      <div class="d-grid pt-5 pb-5 ps-5 pe-5 col-md-12 text-end"><a target="_blank" href="https://twitter.com/wajitech">Twitter</a></div>
      <div class="d-grid pt-5 pb-5 ps-5 pe-5 col-md-12"></div>
    </div>
</template>

<script>
import observerr from '~/plugins/show-hide.client';
export default {
    data() {
        return {
          showButton: false,
          message : "contact@wajitech.fr"
        }
    },
    methods : {
      showIt() {
        this.showButton = true;
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },
      handleScroll (e) {
        observerr('contact');
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