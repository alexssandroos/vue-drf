<template>
<v-app id="app">
    <c-navigation-drawer></c-navigation-drawer>
    <v-content>
      <v-container fluid >
        <v-layout fluid justify-center align-content-start>
          <v-fade-transition mode="out-in">
            <router-view></router-view>
          </v-fade-transition>
        </v-layout>
      </v-container>
    </v-content>
    <c-footer></c-footer>
</v-app>

</template>

<script>
import CNavigationDrawer from '../share/home/CNavigationDrawer'
import CFooter from '../share/home/CFooter'
export default {
  name: 'App',
  components: { CNavigationDrawer, CFooter }
}
</script>
