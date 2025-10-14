export const redirects = JSON.parse("{\"/writeups/Demo.html\":\"/writeups/z8i6mx8p/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/user/桌面/User/it4keth2ee/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/writeups/z8i6mx8p/", { loader: () => import(/* webpackChunkName: "writeups_z8i6mx8p_index.html" */"/home/user/桌面/User/it4keth2ee/docs/.vuepress/.temp/pages/writeups/z8i6mx8p/index.html.js"), meta: {"title":"Demo"} }],
  ["/writeups/", { loader: () => import(/* webpackChunkName: "writeups_index.html" */"/home/user/桌面/User/it4keth2ee/docs/.vuepress/.temp/pages/writeups/index.html.js"), meta: {"title":"writeups"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/user/桌面/User/it4keth2ee/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
