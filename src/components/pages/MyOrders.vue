<template>
  <div>
    <div id="titlebar">
    	<div class="container">
    		<div class="row">
    			<div class="col-md-12">
    				<h2>Mis pedidos</h2>
    			</div>
    		</div>
    	</div>
    </div>
    <div class="container">
      <div class="row">
        <rc-list-order></rc-list-order>
        <rc-list-order></rc-list-order>
        <rc-list-order></rc-list-order>
        <rc-list-order></rc-list-order>
      </div>
    </div>
  </div>
</template>

<script>
import RcListOrder from '@/components/partials/ListOrder.vue'
  export default {
    components: { RcListOrder },
    data(){
      return{
        
      }
    }
  }
</script>