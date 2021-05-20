<template>
  <div class="home">
    <div class="hero">
      <h1>Total vaccinated for each coutry</h1>

      <button @click="showData()">Show total vaccinated for each coutry</button>
      <div class="subhero"></div>
    </div>
    <suspense>
      <template v-if="renderComponent" #default>
        <geo-chart
          :colors="['#9bf3c7', '#017b3d']"
          width="100vw"
          height="100vh"
          label="total vaccinations"
          empty="Please refresh to see the data"
          :data="wdata"
        ></geo-chart>
      </template>
      <template #fallback>
        <div>Loading... ma3raftch</div>
      </template>
    </suspense>
    <p>
      this data is provided by:
      <a href="https://ourworldindata.org/">Our World in Data</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      wdata: [],
      renderComponent: false,
    };
  },
  methods: {
    async showData() {
      this.wdata = await this.$store.state.worldData;
      this.renderComponent = true;
      this.wdata.push(["Western sahara", this.$store.state.worldData[133][1]]);
    },
  },
  async mounted() {
    await this.$store.dispatch("getWorldData");
  },
};
</script>
<style lang="scss" >
button {
  width: fit-content;
  padding: 15px;
  margin-bottom: 20px;
  margin-top: 20px;
  background-color: #262525;
  outline: none;
  border: none;
  color: white;
  font-size: 18px;
  letter-spacing: 5px;
  cursor: pointer;
}
p {
  a {
    all: unset;
    color: inherit;
    cursor: pointer;
  }
}
</style>
