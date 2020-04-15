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
  computed: {},
  methods: {
    selectCar() {
      $store.commit("setActiveCar", {});
      //NOTE route to cardetails here
    }
  },
  components: {
    //this is a base component so it doesn't have any other components
  }
};
</script>


<style scoped>
</style>