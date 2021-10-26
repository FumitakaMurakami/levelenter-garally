<template>
  <div>
    <b-button v-b-toggle.sidebar-right
      ><font-awesome-icon icon="fa-solid fa-filter-list"
    /></b-button>
    <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
      <div class="px-3 py-2">
        <ul>
          <li>
            <b-button v-on:click="filterA" block>VRプログラム</b-button>
          </li>
          <li>
            <b-button v-on:click="filterB" block>3Dモデル</b-button>
          </li>
          <li>
            <b-button v-on:click="filterC" block>ARプログラム</b-button>
          </li>
          <li>
            <b-button v-on:click="clearFilter" block>全表示</b-button>
          </li>
        </ul>
      </div>
    </b-sidebar>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ImagePath } from "../views/ImagePath";
import Garally from "@components/Garally.vue";
import Config from "../../config.d";
Vue.prototype.$filterKeyword = "";
@Component({ components: {} })
export default class SideBar extends Vue {
  private inputMessage = "";
  private filterKeyword = "";
  private filterKeyword2 = "";

  @Prop({ default: [] })
  images!: ImagePath[];

  /* get imagesModel() {
    return this.images.filter(
      (item) =>
        this.$filterKeyword.filter1 == "" ||
        (item.class !== this.$filterKeyword.filter1 &&
          item.class !== this.$filterKeyword.filter2)
    );
  } */

  private filterB() {
    console.log(this.$filterKeyword.filter1, this.$filterKeyword.filter2);
    this.$filterKeyword.filter1 = "3dmodel";
    this.$filterKeyword.filter2 = "arprogram";
    console.log(this.$filterKeyword.filter1, this.$filterKeyword.filter2);
  }
  private filterA() {
    console.log(this.$filterKeyword.filter1, this.$filterKeyword.filter2);
    this.$filterKeyword.filter1 = "vrprogram";
    this.$filterKeyword.filter2 = "arprogram";
    console.log(this.$filterKeyword.filter1, this.$filterKeyword.filter2);
  }
  private filterC() {
    console.log(this.$filterKeyword.filter1, this.$filterKeyword.filter2);
    this.$filterKeyword.filter1 = "3dmodel";
    this.$filterKeyword.filter2 = "vrprogram";
    console.log(this.$filterKeyword.filter1, this.$filterKeyword.filter2);
  }
  private clearFilter() {
    console.log(this.$filterKeyword.filter1, this.$filterKeyword.filter2);
    this.$filterKeyword.filter1 = "";
    this.$filterKeyword.filter2 = "";
    console.log(this.$filterKeyword.filter1, this.$filterKeyword.filter2);
  }
}
</script>
<style>
.px-3 {
  font-family: canada-type-gibson, "游ゴシック Medium", "Yu Gothic Medium",
    "游ゴシック体", YuGothic, "ヒラギノ角ゴシック Pro",
    "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ Ｐゴシック",
    "MS PGothic", sans-serif;
}
</style>
