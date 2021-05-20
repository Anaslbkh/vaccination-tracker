<template>
  <footer class="footer">
    <div>
      <span> 2021 Anass lebkaiti :)</span>
    </div>
    <socialmedia />
  </footer>
</template>

<script>
import socialmedia from "./socialmedia.vue";
export default {
  name: "Footer",
  components: { socialmedia },
};
</script>

<style scoped lang="scss">
.footer {
  padding: 10px 20px 10px 20px;
  background-color: #3d3d3d;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 53vh;
  bottom: 0;

  @media screen and (max-width: 350px) {
    flex-direction: column;
  }
}
p {
  margin: 0;
}
</style>