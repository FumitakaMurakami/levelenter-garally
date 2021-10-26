<template>
  <div>
    <header id="head">
      <Tab />
    </header>
    <main class="container">
      <!-- <SideBar
      :images="imageList"
      @deleteItem="deleteItem"
      class="sidebar"
      style="float: right"
      /> -->

      <Garally :images="imageList" @deleteItem="deleteItem" id="Garally" />

      <!-- <MessageInOut
      :images="imageList"
      :porpInput="hello2"
      @deleteItem="deleteItem"
      /> -->
      <!-- <p v-html="htmlTest"></p> -->
    </main>
    <footer>
      <Hooter />
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src]
import Garally from "@/components/Garally.vue";
import MessageInOut from "../components/MessageInOut.vue";
import { ImagePath } from "./ImagePath";
import { component } from "node_modules/vue/types/umd";
import SideBar from "@/components/SideBar.vue";
import Tab from "@/components/Tab.vue";
import Hooter from "@/components/Footer.vue";
import VueHead from "vue-head";

@Component({
  components: {
    MessageInOut,
    Garally,
    SideBar,
    Tab,
    Hooter,
  },
})
export default class Home extends Vue {
  /* private myComponent = Vue.extend({
    data: function() {
      return {};
    },
    head: {
      title: {
        inner: "It will be a pleasure",
      },
      script: [
        {
          type: "text/javascript",
          src: "https://www.googletagmanager.com/gtag/js?id=G-E3TJQ2S4YV",
          async: true,
        }, // Insert in body
        // with shorthand

        // ...
      ],
    },
  }); */
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://www.googletagmanager.com/gtag/js?id=G-E3TJQ2S4YV"
    );
    recaptchaScript.setAttribute("async", "ture");
    let mainScript = document.createElement("script");
    mainScript.innerHTML =
      'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "G-E3TJQ2S4YV");';
    document.head.appendChild(recaptchaScript);
    document.head.appendChild(mainScript);
  }
  private imageList: ImagePath[] = [];

  private htmlTest = `<b>te</b>st`;

  private hello2 = "hello2";

  deleteItem(item: string) {
    this.imageList.splice(
      this.imageList.findIndex((p) => p.name === item),
      1
    );
  }
  async created() {
    const jsons = await fetch("./resouce/data/example.json").then((text) =>
      text.json()
    );
    this.imageList = jsons;
    console.log(this.imageList);
  }
}
</script>
<style>
/* #Garally {
  background-color: #fafafa;
} */
</style>
