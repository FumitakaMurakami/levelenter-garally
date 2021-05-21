<template>
  <div class="home">
    <Garally :images="imageList" @deleteItem="deleteItem" />
    <!-- <MessageInOut
      :images="imageList"
      :porpInput="hello2"
      @deleteItem="deleteItem"
    /> -->

    <!-- <p v-html="htmlTest"></p> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src]
import Garally from "@/components/Garally.vue";
import MessageInOut from "../components/MessageInOut.vue";
import { ImagePath } from "./ImagePath";
import { component } from "node_modules/vue/types/umd";

@Component({
  components: {
    MessageInOut,
    Garally,
  },
})
export default class Home extends Vue {
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
