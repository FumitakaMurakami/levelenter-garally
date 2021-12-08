<template>
  <div>
    <!-- <button @click="filterA" id="c-button">3Dモデル</button>
    <button @click="filterB" id="c-button">VRプログラム</button>
    <button @click="filterC" id="c-button">ARプログラム</button>
    <button @click="clearFilter" id="c-button">全表示</button> -->

    <div>
      <div class="fixed-top pt-5 px-5 d-none d-md-block">
        <b-button v-b-toggle.sidebar-right style="float: right"
          ><font-awesome-icon icon="filter" />
        </b-button>
      </div>
      <div class="fixed-top pt-5 px-2 d-block d-md-none">
        <b-button v-b-toggle.sidebar-right style="float: right"
          ><font-awesome-icon icon="filter" />
        </b-button>
      </div>
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
            <li>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <button
                    class="btn btn-outline-secondary"
                    @click="onClick"
                    type="button"
                    id="button0addon1"
                  >
                    認証コード
                  </button>
                </div>
                <input
                  id="pass"
                  type="text"
                  class="form-control"
                  placeholder="パスコード入力"
                  aria-label="passcode"
                  aria-describedby="basic-addon1"
                  value="levelenter"
                  v-model="inputPassword"
                />
              </div>
            </li>
          </ul>
        </div>
      </b-sidebar>
    </div>

    <div class="row">
      <div
        v-for="item of imagesModel"
        :key="item.name"
        class="col-xl-4 col-lg-4 col-md-6 col-sm-12 my-5"
      >
        <div class="cards">
          <img
            class="bd-placeholder-img card-img-top"
            :src="item.path"
            :class="item.class"
            @click="linkpage(item.url)"
          />
          <!-- <div class="card-body"> -->
          <p class="card-info" id="itemdata">
            {{ item.day }} <br />Creator {{ item.producer }}
          </p>
          <h5 class="card-title">{{ item.name }}</h5>
          <p class="card-boader">...</p>
          <p class="card-text" style="font-size=13px" id="itemdata">
            {{ item.Explanatory }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ImagePath } from "../views/ImagePath";

@Component({ components: {} })
export default class Gallery extends Vue {
  private inputMessage = "";
  public filterKeyword = "";
  public filterKeyword2 = "";
  public password = "public";
  public password2 = "";

  // created() {
  //   //   console.log(this.inputPassword);
  //   // this.inputPassword = "abc";
  // }

  public _inputPassword = "";
  public pass = this.inputPassword;
  private get inputPassword() {
    return this._inputPassword;
  }

  private set inputPassword(value: string) {
    console.log("inputPassword", value);
    /* this._inputPassword = value; */
    this._inputPassword = value;
    console.log(this._inputPassword);
  }
  @Prop({ default: [] })
  images!: ImagePath[];

  get imagesModel() {
    console.log(this.pass);

    return this.images
      .filter(
        (item) =>
          (item.publishing === this.password2 && this.filterKeyword == "") ||
          (item.publishing === this.password && this.filterKeyword == "") ||
          (item.publishing === this.password &&
            item.class !== this.filterKeyword &&
            item.class !== this.filterKeyword2) ||
          (item.publishing === this.password &&
            item.class !== this.filterKeyword &&
            item.class !== this.filterKeyword2)
      )
      .sort((a, b) => {
        return b.number - a.number;
      });
  }
  public onClick() {
    if (this._inputPassword == "levelenter") {
      this.password2 = "private";
    } else if (this._inputPassword == "") {
      alert("パスワードを入力してください");
    } else {
      alert("パスワードが違います");
      this.password2 = "";
    }
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
    this.filterKeyword = "vrprogram";
    this.filterKeyword2 = "arprogram";
  }
  private filterA() {
    console.log("filter-A");
    console.log(this.images);
    this.filterKeyword = "3dmodel";
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
  width: 100%;
  height: 228px;
  object-fit: cover;
}
.border-bottom {
  border-bottom: linear-gradient(-135deg, #e4a972, #9941d8);
}
.card-body {
  background-color: #1b252c;
}
.cards {
  background-color: #1b252c;
  width: 80%;
}
.cards-s {
  background-color: #1b252c;
  width: 80%;
}
.card-title {
  color: #bf88fd;
}
.card-info {
  color: #9dafbd;
  font-size: 13px;
}
.card-info-s {
  color: #9dafbd;
  font-size: 13px;
  text-align: right;
}
.card-text {
  color: #9dafbd;
  font-size: 13px;
}
.card-boader {
  height: 1px;
  width: 100%;
  color: transparent;
  background: linear-gradient(-135deg, #5aff29, #ebff00);
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
