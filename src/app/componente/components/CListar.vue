<template>
<div>
    <v-data-table
    :headers="headers"
    :items="atracoes"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.id }}</td>
      <td class="text-xs-right">{{ props.item.nome }}</td>
      <td class="text-xs-right">{{ props.item.descricao }}</td>
      <td class="text-xs-right">{{ props.item.idade_minima }}</td>
      <td class="text-xs-right">{{ props.item.horario_funcionamento }}</td>
      <td class="justify-center layout px-0">
          <v-icon
            color="accent"
            @click="editAtracao(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            color="error"
            @click="deleteAtracao(props.item.id)"
          >
            delete
          </v-icon>
        </td>
    </template>
  </v-data-table>
  <c-novo></c-novo>
  </div>
</template>
<script>
import Atracao from '@/app/componente/domain/Atracao'
import CNovo from './CNovo'

const servico = Atracao.build({})

export default {
  components: {
    CNovo
  },
  data () {
    return {
      headers: [
        {
          text: 'ID',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'Nome', value: 'nome' },
        { text: 'Descricao', value: 'descricao' },
        { text: 'Idade Minima', value: 'idade_minima' },
        { text: 'Horario Funcionamento', value: 'horario_funcionamento' }
      ],
      atracoes: [
      ]
    }
  },
  mounted () {
    servico.read().then(data => {
      this.atracoes = data
    })
  },
  methods: {
    deleteAtracao (item) {
      confirm('Are you sure you want to delete this item?') &&
      servico.delete(item)
        .then(() => {
          let index = this.atracoes.indexOf(item)
          this.atracoes.splice(index, 1)
        })
    },
    editAtracao (item) {
      this.editedIndex = this.atracoes.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    }
  }
}
</script>
