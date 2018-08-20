import CExemplo from './components/CExemplo'
import CListar from './components/CListar'
import CNovo from './components/CNovo'

export default [
  { path: '/exemplo', component: CExemplo, name: 'componente.exemplo' },
  { path: '/atracao', component: CListar, name: 'componente.listar' },
  { path: '/atracao/novo', component: CNovo, name: 'componente.novo' }
]
