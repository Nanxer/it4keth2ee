export const sidebar = {"/":{"/writeups/":{"items":"auto","prefix":"/writeups/"}},"__auto__":{"/writeups/":[{"text":"Demo","link":"/writeups/z8i6mx8p/"}]},"__home__":{"/writeups/":"/writeups/"}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSidebar) {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ sidebar }) => {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  })
}
