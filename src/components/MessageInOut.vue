<template>
  <div>
    <input type="text" v-model="inputMessage" />
    <button @click="hello">hell</button>

    <button @click="filterB">VRプログラム</button>
    <button @click="clearFilter">clearFilter</button>

    <div v-for="item of imagesModel" :key="item.name">
      <img v-bind:src="item.path" :class="item.class" />
      {{ item.class }}
      <button @click="itemdelete(item)">delete</button>
    </div>

    {{ porpInput }}
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ImagePath } from "../views/ImagePath";

@Component({ components: {} })
export default class MessageInOut extends Vue {
  private inputMessage = "";
  private filterKeyword = "";

  @Prop({ default: "" })
  private porpInput!: string;

  @Prop({ default: [] })
  private images!: ImagePath[];

  get imagesModel() {
    return this.images.filter(
      (item) => this.filterKeyword == "" || item.class !== this.filterKeyword
    );
  }

  private hello() {
    alert("hello");
  }

  private filterB() {
    this.filterKeyword = "3dmodel";
  }

  private clearFilter() {
    this.filterKeyword = "";
  }

  private itemdelete(item: ImagePath) {
    console.log(item);
    // this.images.splice(
    //   this.images.findIndex((p) => p === item),
    //   1
    // );
    this.$emit("deleteItem", item.name);
  }
}
</script>
