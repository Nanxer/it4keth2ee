import { defineCollection, defineCollections } from 'vuepress-theme-plume'

const writeups = defineCollection({
  type: 'doc',
  dir: '/writeups',
  linkPrefix: '/writeups/',
  title: 'Writeup',
  sidebar: 'auto',
})

export default defineCollections([
  writeups
])
