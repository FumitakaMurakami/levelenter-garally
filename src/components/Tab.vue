<template>
  <div>
    <header class="mx-1 py-1  d-none d-md-block">
      <!-- <img id="logo" src="./img/logo.png" alt="" /> -->
      <div class="pt-5 d-flex align-items-center d-none d-md-flex ">
        <h1>
          <a href="https://blockvrock.com/"> Level Enter inc.</a>
        </h1>
      </div>
      <p class="boader px-5 text-left d-none d-md-flex">...</p>
      <p class="sub d-none d-md-flex">
        VR / AR Gallery
      </p>
      <div>
        <img
          class="d-flex align-items-center d-none d-md-flex"
          src="../assets/samplepage.png"
          alt="logo-footer"
          data-at2x="assets/img/logo.png"
          style="width:120px; height:120px; object-fit:cover;"
        />
      </div>
      <!-- <p class="company">
        <img
          id="logo"
          class="rounded-circle r-10rem"
          src="./img/LEicon.png"
          alt=""
        />
      </p> -->
    </header>
    <header class="d-block d-md-none">
      <!-- <img id="logo" src="./img/logo.png" alt="" /> -->
      <div class="pt-5 align-items-center d-block d-md-none">
        <h1><a href="https://blockvrock.com/"> Level Enter inc.</a></h1>
        <p class="boader-s px-5 text-left ">...</p>
        <p class="sub">
          VR / AR Gallery
        </p>
      </div>
      <!-- <p class="company">
        <img
          id="logo"
          class="rounded-circle r-10rem"
          src="./img/LEicon.png"
          alt=""
        />
      </p> -->
    </header>
  </div>
  <!-- <div class="cp_navi">
    <ul>
      <li>
        <a href="https://blockvrock.com/">BLOCKVROCK</a>
      </li>
      <li><a href="https://www.levelenter.com/">Levelenter</a></li>
    </ul>
  </div> -->
</template>

<style scoped>
/* .head-cl {
  padding: 30px 0 10px 10px;
  display: inline-block;
} */
header {
  background-color: #1b252c;
}
a {
  color: #bf88fd;
  text-decoration: none;
  /* font-family: canada-type-gibson, "游ゴシック Medium", "Yu Gothic Medium",
    "游ゴシック体", YuGothic, "ヒラギノ角ゴシック Pro",
    "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ Ｐゴシック",
    "MS PGothic", sans-serif; */
}
h1 {
  color: #bf88fd;
}
.boader {
  height: 1px;
  width: 94%;
  color: transparent;
  background: linear-gradient(-135deg, #5aff29, #ebff00);
}
.boader-s {
  height: 2px;
  width: 100%;
  color: transparent;
  background: linear-gradient(-135deg, #5aff29, #ebff00);
}
.sub {
  font-size: 13px;
  color: #9dafbd;
  height: 10%;
}
/*p {
  margin: 3px 0 0 20px !important;
  font-size: 15px;
  display: inline-block;
  font-family: canada-type-gibson, "游ゴシック Medium", "Yu Gothic Medium",
    "游ゴシック体", YuGothic, "ヒラギノ角ゴシック Pro",
    "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ Ｐゴシック",
    "MS PGothic", sans-serif;
}
#logo {
  height: 10em;
  width: 15em;

  margin-left: auto;
  margin-top: 0px;
  display: flex;
}
.company {
  margin: 0px 200px 0 20px !important;
  float: right;
  height: 6em;
  width: 10em;
} */
/* img {
  width: 140px;
  height: 50px;
  object-fit: fill;
} */
/* .cp_navi {

  border-radius: 4px;


  font-style: italic;
  display: block;
  margin: 1em 1%;
  overflow: hidden;
  width: 100%;
  font-size: 30px;
}
.cp_navi ul {
  margin: 0;
  padding: 0;
}
.cp_navi ul li {
  display: inline-block;
  list-style-type: none;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.cp_navi > ul > li > a > .caret {
  border-top: 4px solid #aaaaaa;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  content: "";
  display: inline-block;
  height: 0;
  width: 0;
  vertical-align: middle;
  -webkit-transition: color 0.1s linear;
  transition: color 0.1s linear;
}
.cp_navi > ul > li > a {
  display: block;
  line-height: 56px;
  padding: 0 10px;
  text-decoration: none;
}
.cp_navi > ul > li:hover {
  background-color: rgb(218, 60, 65);
}

.cp_navi > ul > li:hover > a > .caret {
  border-top-color: rgb(255, 255, 255);
}
.cp_navi > ul > li > div {
  background-color: rgb(218, 60, 65);
  border-top: 0;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.055);
  display: none;
  margin: 0;
  opacity: 0;
  position: absolute;
  width: 165px;
  visibility: hidden;
  -webkit-transiton: opacity 0.2s;
  transition: opacity 0.2s;
}
.cp_navi > ul > li:hover > div {
  display: block;
  opacity: 1;
  visibility: visible;
}
.cp_navi > ul > li > div ul > li {
  display: block;
}
.cp_navi > ul > li > div ul > li > a {
  display: block;
  padding: 12px 24px;
  text-decoration: none;
}
.cp_navi > ul > li > div ul > li:hover > a {
  background-color: rgba(255, 255, 255, 0.1);
} */
</style>
