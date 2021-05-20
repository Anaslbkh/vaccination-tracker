<template>
  <div class="about">
    <h1>Choose a vaccine to see which countries are using it</h1>
    <ul>
      <li
        v-for="(vaccine, index) in allData"
        :key="index"
        @click="changeVaccine(index)"
      >
        {{ vaccine.name }}
      </li>
    </ul>
    <h3>vaccine: {{ allData[vaccineIndex].name }}</h3>
    <geo-chart
      empty="Please refresh to see the data"
      :colors="['#9bf3c7', '#017b3d']"
      width="100vw"
      height="100vh"
      v-if="show"
      :data="dataCountry[vaccineIndex]"
      label="Tolal vaccines in the world"
    ></geo-chart>
  </div>
</template>
<script>
import vaccines from "../assets/vaccine-name.json";
export default {
  name: "vaccine",
  data() {
    return {
      allData: vaccines,
      dataCountry: [[], [], [], [], [], [], []],
      show: false,
      vaccineIndex: 0,
      num: 0,
    };
  },
  methods: {
    changeVaccine(index) {
      this.vaccineIndex = index;
    },
  },
  mounted() {
    this.allData.forEach((element) => {
      element.countries.forEach((el) => {
        this.dataCountry[this.num].push([el, 7]);
      });
      this.num++;
    });
    this.show = true;
  },
};
</script>
<style lang="scss" scoped>
.about {
  ul {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    font-size: 24px;
    list-style: none;
    li {
      padding: 15px;
      background-color: #272727;
      color: white;
      border-radius: 20px;
      margin: 10px;
      opacity: 0.9;
      cursor:pointer;
    }
  }
}
</style>
