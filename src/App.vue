<template>
  <div id="nav">
    <router-link to="/">vaccination</router-link>
    <router-link to="/vaccine">vaccine</router-link>
    <router-link to="/byCountry">By country</router-link>
  </div>
  <router-view />
  <thefooter></thefooter>
</template>
<script>
import thefooter from "./components/TheFooter";
export default {
  components: { thefooter },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

#nav {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  width: 60vw;
  margin-right: auto;
  margin-left: auto;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    text-transform: uppercase;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@media screen and (max-width: 600px) {
  #nav {
    width: 90vw;
  }
}
</style>
