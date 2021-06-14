<template>
  <div>
    <button @click="filterA" id="c-button">3Dモデル</button>
    <button @click="filterB" id="c-button">VRプログラム</button>
    <button @click="filterC" id="c-button">ARプログラム</button>
    <button @click="clearFilter" id="c-button">全表示</button>

    <div v-for="item of imagesModel" :key="item.name">
      <ul style="text-align:center;" id="Gallery">
        <li id="photo" ref="vrprogram">
          <a href="#">
            <img
              :src="item.path"
              :class="item.class"
              @click="linkpage(item.url)"
            />
          </a>
          {{ item.class }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ImagePath } from "../views/ImagePath";

@Component({ components: {} })
export default class Garally extends Vue {
  private inputMessage = "";
  private filterKeyword = "";
  private filterKeyword2 = "";

  @Prop({ default: [] })
  images!: ImagePath[];

  get imagesModel() {
    return this.images.filter(
      (item) =>
        this.filterKeyword == "" ||
        (item.class !== this.filterKeyword &&
          item.class !== this.filterKeyword2)
    );
  }

  private filterB() {
    this.filterKeyword = "3dmodel";
    this.filterKeyword2 = "arprogram";
  }
  private filterA() {
    this.filterKeyword = "vrprogram";
    this.filterKeyword2 = "arprogram";
  }
  private filterC() {
    this.filterKeyword = "3dmodel";
    this.filterKeyword2 = "vrprogram";
  }
  private clearFilter() {
    this.filterKeyword = "";
    this.filterKeyword2 = "";
  }

  private itemdelete(item: ImagePath) {
    this.$emit("deleteItem", item.name);
  }
  private linkpage(dest_url: string) {
    // const url = this.images[number].url;
    console.log(dest_url);
    window.location.href = dest_url;
  }
  /* mounted() {
    const targetElement = this.$refs.vrprogram;
    console.log("対象のDOM：", targetElement);
  } */
  /* private image_src(number: number) {
    console.log(this.images[number].path);
    const path = this.images[number].path;
    console.log(path);
    const img = path;
    return {
      img,
    };
  } */
  /* data(number:number){
      return {
        image_src: require(this.images[number].path)
      }
    }
  } */
}
</script>
<style scoped>
ul,
li,
dl,
dt,
dd {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
#Gallery {
  width: 1200px;
  margin: 0 auto;
}
#Gallery li {
  float: left;
  width: 250px;
  height: 200px;
  margin: 0 20px 20px 0;
  border: 5px solid #fff;
  position: relative;
  z-index: 10;
  box-shadow: 2px 3px 3px #000;
  transition: transform 0.2s ease-out;
  transform: scale(1) translate(-5px, -3px);
}
#Gallery li a img {
  width: 250px;
  height: 200px;
}

#Gallery li:hover {
  transform: scale(2) rotate(0deg) translate(0, 0);
  z-index: 100;
}
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
#c-button {
  -webkit-writing-mode: horizontal-tb !important;
  -webkit-appearance: button;
  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
  border-style: solid;
  border-width: 1px;
  padding: 1px 7px 2px;
  text-rendering: auto;
  color: initial;
  display: inline-block;
  text-align: start;
  margin: 10px;
  font: 400 11px system-ui;
  width: 100px;
  height: 51px;
}
</style>
