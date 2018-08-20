<template>
<div>
    <v-btn
      fab
      bottom
      right
      color="secondary"
      dark
      fixed
      @click.stop="dialog = !dialog"
    >
      <v-icon>add</v-icon>
    </v-btn>
<v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Atracao
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
              <v-layout align-center>
                <v-text-field
                  prepend-icon="business"
                  placeholder="Atracao"
                  v-model="atracao.nome"
                ></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                prepend-icon="business"
                placeholder="Descricao"
                v-model="atracao.descricao"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                placeholder="idade minima"
                v-model="atracao.idade_minima"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="mail"
                placeholder="Horario de funcionamento"
                v-model="atracao.horario_funcionamento"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  color="warning" @click="sair">Cancel</v-btn>
          <v-btn  color="primary" @click="salvar">
            <v-icon>save</v-icon>
            Salvar
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
</template>
<script>
import Atracao from '@/app/componente/domain/Atracao'

const servico = Atracao.build({})

export default {
  data: () => ({
    dialog: false,
    titulo: this.formTitle,
    atracao: new Atracao()
  }),
  methods: {
    salvar () {
      servico.create(this.atracao)
        .then(
          this.dialog = false
        )
        .then(
          servico.read()
        )
    },
    sair () {
      this.dialog = false
    }
  }
}
</script>
