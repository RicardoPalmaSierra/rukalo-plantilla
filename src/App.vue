<template>
  <div id="app">
    <rc-header v-if="!admin"></rc-header>
    <rc-header-admin v-if="admin"></rc-header-admin>
    <rc-login></rc-login>
    <router-view></router-view>
    <!--<rc-footer></rc-footer>-->
  </div>
</template>

<script>
import RcHeader from '@/components/layouts/Header.vue'
import RcFooter from '@/components/layouts/Footer.vue'
import RcLogin from '@/components/partials/Login.vue'
import RcHeaderAdmin from '@/components/layouts/HeaderAdmin.vue'

  export default {
    components: { RcHeader, RcFooter, RcLogin, RcHeaderAdmin },
    data() {
      return {
        admin: false,
      }
    }
    
  }
</script>