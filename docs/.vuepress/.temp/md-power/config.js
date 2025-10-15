import { defineClientConfig } from 'vuepress/client'
import Tabs from '/home/user/桌面/User/github/it4keth2ee/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/home/user/桌面/User/github/it4keth2ee/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from '/home/user/桌面/User/github/it4keth2ee/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from '/home/user/桌面/User/github/it4keth2ee/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'

import '/home/user/桌面/User/github/it4keth2ee/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
  },
  setup() {
    
  }
})
