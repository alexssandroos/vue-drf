# Template VueJS

> Esse template contem um boilerplate para um projeto com vuejs e backend separado em Django Rest Framework. 

## Usando 

- (Vuetify)[https://vuetifyjs.com/]
- (Vue Router)[https://router.vuejs.org/]
- (VueX)[https://vuex.vuejs.org/]
- (Axios)[https://github.com/axios/axios]   

## Arquitetura de diretorios do projeto

- app  => pasta com os componentes da aplicacao
- share => componentes compartilhados por toda aplicacao
- assets => imagens, css, js
- router => rotas da aplicacao
- service => api http
- vuex => gerenciador de estados da aplicacao

## Detalhes (Nem sempre necessarios) 

- Componentes com prefixo C<NomeDoComponent>

```javascript
Vue.use(Vuetify, {
  theme: {
    primary: '#52d0e9', 
    secondary:'#7f8ce9', 
    accent: '#a088c3',
    error: '#f16f51',
    info: '#52d0e9',
    success: '#78e080',
    warning: '#f7cd4a'
  }
}
)
```