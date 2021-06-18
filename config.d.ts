import Vue from "vue";
declare module "vue/types/vue" {
  interface Vue {
    $filterKeyword: {
      filter1: String;
      filter2: String;
    };
  }
}
