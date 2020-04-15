<template>
  <div class="cars col-12"></div>
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
    }
  },
  methods: {
    created() {
      this.$store.dispatch(getCars);
    }
  },
  components: {
    Car
  }
};
</script>


<style scoped>
</style>