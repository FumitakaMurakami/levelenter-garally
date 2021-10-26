<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import Tab from "./components/Tab";
@Component({
  components: {
    Tab,
  },
})
export default class App extends Vue {}
</script>
<style>
@import "./components/css/style.css";

/* div {
  background-color: #fafafa;
} */
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logo {
  height: 300px;
  width: 1000;
}

#head {
  padding: 30px;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
}
@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.mgr-10 {
  margin-right: 10px;
  background-color: #e73c7e;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
