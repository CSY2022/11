import { defineClientConfig } from "@vuepress/client";
import {
  defineWalineOptions,

} from "@vuepress/plugin-comment2";

defineWalineOptions({
   search: false,
});

export default defineClientConfig({
  // ...
});