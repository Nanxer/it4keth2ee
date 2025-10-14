import { defineClientConfig } from "vuepress/client";
import ChartJS from "/home/user/桌面/User/it4keth2ee/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/ChartJS.js";
import Mermaid from "/home/user/桌面/User/it4keth2ee/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/Mermaid.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("Mermaid", Mermaid);
  },
});
