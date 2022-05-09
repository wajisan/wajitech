<template>
  <div class="section-s1 position-relative" id="home">
    <div class="d-grid position-absolute pb-5 ps-5 col-md-6" style="top:0px; right:0px">
      <div class="home-title col-xs-12 col-md-12 ps-4">WajiTech.</div>
    </div>
    <div class="d-grid position-absolute pb-5 ps-5 pe-5" style="bottom:0px; left:0px">
      <div class="main-title col-xs-12 col-md-8 pb-4">Build tomorrow with code.</div>
      <div class="col-xs-12 col-md-8">
        Mon nom est Kihel wadi et j’ai créer mon studio digital Wajitech pour aider mes clients à faire évoluer leur entreprise.
        Le monde de l’informatique a un potentielle extraordinaire et tout le monde devrait pouvoir en profiter.
        Grâce à notre <a href="#methodology">méthodologie</a>, vous pourrez régler des problèmes récurrents, automatiser des tâches redondantes,
        améliorer vos solutions actuelles ou en créer de nouvelles.
      </div>
    </div>
  </div>
</template>

<script>

export default {
    data() {
        return {
          windowTop: null,
        }
    },
    mounted() {
      console.log("ayo");
    },
    methods: {     
    },

}
</script>

<style>
.home-title {
    background-color: var(--waji-third-color);
    color: var(--waji-fourth-color);
    font-size: calc(4vw + 11.71px);
    font-family: "Nd Bold";
}
</style>