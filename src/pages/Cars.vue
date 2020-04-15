<template>
  <div class="cars col-12">
    <div class="row">
      <car v-for="car in cars" :carData="car" :key="car._id"></car>
    </div>
  </div>
</template>


<script>
import Car from "../components/Car";
export default {
  name: "cars",
  data() {
    return {};
  },
  computed: {
    cars() {
      return this.$store.state.cars;
    },
    created() {
      this.$store.dispatch(getCars);
    }
  },
  //methods: {},
  components: {
    Car
  }
};
</script>


<style scoped>
</style>