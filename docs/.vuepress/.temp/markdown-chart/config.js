import { defineClientConfig } from "vuepress/client";
import ChartJS from "/home/user/桌面/User/github/it4keth2ee/node_modules/.pnpm/@vuepress+plugin-markdown-chart@2.0.0-rc.112_chart.js@4.5.1_echarts@5.6.0_markdown-it@1_8bf21d9aea12b5cb573a9952c7a3b866/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/ChartJS.js";
import Mermaid from "/home/user/桌面/User/github/it4keth2ee/node_modules/.pnpm/@vuepress+plugin-markdown-chart@2.0.0-rc.112_chart.js@4.5.1_echarts@5.6.0_markdown-it@1_8bf21d9aea12b5cb573a9952c7a3b866/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/Mermaid.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("Mermaid", Mermaid);
  },
});
