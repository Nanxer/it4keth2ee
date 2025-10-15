export const redirects = JSON.parse("{\"/writeups/Demo.html\":\"/writeups/z8i6mx8p/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/user/桌面/User/github/it4keth2ee/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/writeups/z8i6mx8p/", { loader: () => import(/* webpackChunkName: "writeups_z8i6mx8p_index.html" */"/home/user/桌面/User/github/it4keth2ee/docs/.vuepress/.temp/pages/writeups/z8i6mx8p/index.html.js"), meta: {"title":"Demo"} }],
  ["/writeups/", { loader: () => import(/* webpackChunkName: "writeups_index.html" */"/home/user/桌面/User/github/it4keth2ee/docs/.vuepress/.temp/pages/writeups/index.html.js"), meta: {"title":"writeups"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/user/桌面/User/github/it4keth2ee/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
