<template>
  <div class="car border col-3">
    <p>{{carData.make}}</p>
    <p>{{carData.model}}</p>
  </div>
</template>


<script>
export default {
  name: "car",
  props: ["carData"],
  data() {
    return {};
  },
  methods: {
    selectCar() {
      $store.commit("setActiveCar", {});
      //NOTE route to carDetails here
    }
  }
  //components: {
  //this is a base component so it doesn't have any other components
  //}
};
</script>


<style scoped>
</style>