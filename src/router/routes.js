import { routes as app } from '../app'

const desacoplados = [
  { path: '/', redirect: '/home' }
]

export default [
  ...desacoplados,
  ...app
]
