<template>
  <div>
    <!-- <button @click="filterA" id="c-button">3Dモデル</button>
    <button @click="filterB" id="c-button">VRプログラム</button>
    <button @click="filterC" id="c-button">ARプログラム</button>
    <button @click="clearFilter" id="c-button">全表示</button> -->
    <div>
      <b-button v-b-toggle.sidebar-right style="float: right"
        ><font-awesome-icon icon="filter" />
      </b-button>

      <b-sidebar id="sidebar-right" title="フィルター" right shadow>
        <div class="px-3 py-2">
          <ul>
            <li>
              <b-button v-on:click="filterA" block variant="link,primary"
                >VRプログラム</b-button
              >
            </li>
            <li>
              <b-button v-on:click="filterB" block variant="link,primary"
                >3Dモデル</b-button
              >
            </li>
            <li>
              <b-button v-on:click="filterC" block variant="link,primary"
                >ARプログラム</b-button
              >
            </li>
            <li>
              <b-button v-on:click="clearFilter" block variant="link,primary"
                >全表示</b-button
              >
            </li>
          </ul>
        </div>
      </b-sidebar>
    </div>

    <div class="row">
      <div
        v-for="item of imagesModel"
        :key="item.name"
        class="col-xl-3 col-lg-4 col-md-6 col-sm-12"
      >
        <div class="card py-3 my-3" style="objectfit: cover">
          <img
            class="bd-placeholder-img card-img-top"
            :src="item.path"
            :class="item.class"
            @click="linkpage(item.url)"
          />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text" id="itemdata">
              投稿日：{{ item.day }} 制作者：{{ item.producer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ImagePath } from "../views/ImagePath";

@Component({ components: {} })
export default class Garally extends Vue {
  private inputMessage = "";
  public filterKeyword = "";
  public filterKeyword2 = "";

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
  /* get imagesModel() {
    return this.images.filter(
      (item) =>
        this.$filterKeyword.filter1 == "" ||
        (item.class !== this.$filterKeyword.filter1 &&
          item.class !== this.$filterKeyword.filter2)
    );
  } */
  private filterB() {
    this.filterKeyword = "3dmodel";
    this.filterKeyword2 = "arprogram";
  }
  private filterA() {
    console.log("filter-A");
    console.log(this.images);
    this.filterKeyword = "vrprogram";
    console.log(this.images);
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
img {
  height: 240px;
  object-fit: contain;
}
/*ul,
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
  width: 2000px;
  margin: auto;
  background-color: #fafafa;
}
#Gallery li {
  float: left;
  width: 400px;
  height: 350px;
  margin: 20px 30px 30px 30px;
  position: relative;
  z-index: 10;
  box-shadow: 2px 3px 3px #000;
  transition: transform 0.2s ease-out;
  transform: scale(1) translate(-3px, -1px);
}
#Gallery li a img {
  width: 400px;
  height: 350px;
  object-fit: fill;
}

#Gallery li:hover {
  transform: scale(1.5) rotate(0deg) translate(0, 0);
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
#itemdata {
  font-size: 10px;
}
*/
</style>
