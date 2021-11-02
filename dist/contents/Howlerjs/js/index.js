AFRAME.registerComponent("autoplay", {
  init: function () {
    const v = document.querySelector("#astronaut");
    v.play();
  },
});

AFRAME.registerComponent("clickplay", {
  init: function () {
    this.el.addEventListener("click", async function (evt) {
      const v = document.querySelector("#sea");
      v.play();
    });
  },
});

AFRAME.registerComponent("muteplay", {
  init: function () {
    this.el.addEventListener("click", async function (evt) {
      const v = document.querySelector("#waterfall");
      v.muted = true;
      v.play();
      v.muted = false; // ミュート無効
      v.currentTime = 0; // 開始秒数を戻す
    });
  },
});
