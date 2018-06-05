<template>
  <div>
    <div id="titlebar">
    	<div class="container">
    		<div class="row">
    			<div class="col-md-6">
    				<h2>Mis Rukas</h2>
    			</div>
    			<div class="col-md-6 text-right">
    			  <h3>$ 300 Rukas</h3>
    			</div>
    		</div>
    	</div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h4>Recargar Rukas</h4>
          <div class="row">
            <div class="col-md-6">
              <input type="number" name="" v-model="cantidadRukas" />
            </div>
            <div class="col-md-6">
              <h4> {{ valorTotal }}</h4>
            </div>
          </div>
          <h4>Metodo de pago</h4>
          <div class="row">
            <div class="col-md-12">
              <input type="radio" v-model="metodoPago" value="paypal"> PayPal
              <input type="radio" v-model="metodoPago" value="tarjeta"> Tarjeta credito o Debito
              <input type="radio" v-model="metodoPago" value="papitas" > Papitas
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h4>Tabla de rukas</h4>
          <hr>
          <table class="table">
            <tr>
              <th>Dinero</th>
              <th>Rucas</th>
            </tr>
            <tr>
              <td>$ 1.200</td>
              <td>1 Ruca</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        cantidadRukas: null,
        valorTotal: 0,
        metodoPago: null
      }
    },
    watch: {
      cantidadRukas(){
        this.valorTotal = this.cantidadRukas * 1200
      }
    }
  }
</script>