<template>
<div>
    
<div id="titlebar">
	<div class="container">
		<div class="row">
			<div class="col-md-12">

				<h2>Añadir Crédito</h2>

				<!-- Breadcrumbs -->
				<nav id="breadcrumbs">
					<ul>
						<li><a href="#">Inicio</a></li>
						<li>Añadir Crédito</li>
					</ul>
				</nav>

			</div>
		</div>
	</div>
</div>

<!-- Container -->
<div class="container">
	<div class="row">

		<div class="col-lg-8 col-md-8 padding-right-30">
      
      <form method="post" action="https://checkout.payulatam.com/ppp-web-gateway-payu">
       
        
  			<h3 class="margin-top-0 margin-bottom-30">Detalles personales</h3>
  
  			<div class="row">
  
  				<div class="col-md-6">
  					<label>Primero y Segundo Nombre</label>
  					<input type="text" name="nombres" value="">
  				</div>
  
  				<div class="col-md-6">
  					<label>Apellidos</label>
  					<input type="text" name="apellidos" value="">
  				</div>
  
  				<div class="col-md-6">
  					<div class="input-with-icon medium-icons">
  						<label>E-Mail</label>
  						<input type="text" name="email" value="">
  						<i class="im im-icon-Mail"></i>
  					</div>
  				</div>
  
  				<div class="col-md-6">
  					<div class="input-with-icon medium-icons">
  						<label>Celular</label>
  						<input type="text" name="celular" value="">
  						<i class="im im-icon-Phone-2"></i>
  					</div>
  				</div>
  
  			</div>
  			
  			<h3 class="margin-top-55 margin-bottom-30">¿Cuánto crédito te gustaría agregar?</h3>
  			
  			<div class="payment">
    			<div class="payment-tab-trigger pull-left">
    				<input checked id="rukas10" name="rukas" type="radio" value="10" v-model="cantidadRukas">
    				<label for="rukas10">10 Rukas</label>
    			</div>
    			
    			<div class="payment-tab-trigger pull-left">
    				<input checked id="rukas20" name="rukas" type="radio" value="20" v-model="cantidadRukas">
    				<label for="rukas20">20 Rukas</label>
    			</div>
    			
    			<div class="payment-tab-trigger pull-left">
    				<input checked id="rukas30" name="rukas" type="radio" value="30" v-model="cantidadRukas">
    				<label for="rukas30">30 Rukas</label>
    			</div>
    			
    			<div class="payment-tab-trigger pull-left">
    				<input checked id="rukas50" name="rukas" type="radio" value="50" v-model="cantidadRukas">
    				<label for="rukas50">50 Rukas</label>
    			</div>
  			
  			</div>
  			<hr>
  
        <p>¿Necesita un recibo? Mantenga sus datos de facturación actualizados.</p>
      	<small>El crédito no es reembolsable y vence un año después de su último crédito. Para cantidades mayores contacta nuestro <a href="#"> Equipo de Ayuda</a></small>
  
  
  			<h3 class="margin-top-55 margin-bottom-30">Seleccionar Metodo de Pago</h3>
  
  			<!-- Payment Methods Accordion -->
  			<div class="payment">
  
  				<div class="payment-tab payment-tab-active">
  					<div class="payment-tab-trigger">
  						<input checked id="payulatam" name="cardType" type="radio" value="payulatam">
  						<label for="payulatam">PayU Latam</label>
  						<img class="payment-logo payulatam" src="https://s3.amazonaws.com/payu.marketing/imagenes-correos/logo-second.png" style="height:46px" alt="Logo - PayULatam">
  					</div>
  
  					<div class="payment-tab-content">
  						<p>Tarjeta de Credito (Visa, Mastercard) <br> PSE (Bancolombia, Davivienda, Grupo Aval) <br> Efecty / Baloto. <br> Seras redirigido a <b>PayU Latam</b> para completar el pago.</p>
  					</div>
  				</div>
  
  
  				<!--<div class="payment-tab">
  					<div class="payment-tab-trigger">
  						<input type="radio" name="cardType" id="creditCart" value="creditCard">
  						<label for="creditCart">Credito / Tarjeta de Credito</label>
  						<img class="payment-logo" src="" alt="">
  					</div>
  
  					<div class="payment-tab-content">
  						<div class="row">
  
  							<div class="col-md-6">
  								<div class="card-label">
  									<label for="nameOnCard">Name on Card</label>
  									<input id="nameOnCard" name="nameOnCard" required type="text">
  								</div>
  							</div>
  							<div class="col-md-6">
  								<div class="card-label">
  									<label for="cardNumber">Card Number</label>
  									<input id="cardNumber" name="cardNumber" placeholder="1234  5678  9876  5432" required type="text">
  								</div>
  							</div>
  
  							<div class="col-md-4">
  								<div class="card-label">
  									<label for="expirynDate">Expiry Month</label>
  									<input id="expiryDate" placeholder="MM" required type="text">
  								</div>
  							</div>
  
  							<div class="col-md-4">
  								<div class="card-label">
  									<label for="expiryDate">Expiry Year</label>
  									<input id="expirynDate" placeholder="YY" required type="text">
  								</div>
  							</div>
  
  							<div class="col-md-4">
  								<div class="card-label">
  									<label for="cvv">CVV</label>
  									<input id="cvv" required type="text">
  								</div>
  							</div>
  
  						</div>
  					</div>
  				</div>-->
  
  			</div>
  			<!-- Payment Methods Accordion / End -->
  			
  		
  			
  		  <input name="merchantId"    type="hidden"  value="727406"   >
        <input name="accountId"     type="hidden"  value="732342" >
        <input name="description"   type="hidden"  :value="descripcion"  >
        <input name="referenceCode" type="hidden"  :value="referenceCode" >
        <input name="amount"        type="hidden"  :value="totalCop" >
        <input name="tax"           type="hidden"  value="0"  >
        <input name="taxReturnBase" type="hidden"  value="0" >
        <input name="currency"      type="hidden"  value="COP" >
        <input name="signature"     type="hidden"  :value="signatureMD5"  >
        <input name="test"          type="hidden"  value="1" >
        <input name="buyerEmail"    type="hidden"  value="coowebco@gmail.com" >
        <!--<input name="responseUrl"    type="hidden"  value="http://dev.cooweb.co/rukalochef/compra.php" >
        <input name="confirmationUrl"    type="hidden"  value="http://dev.cooweb.co/rukalochef/compra_exitosa.php" >-->
        
  			<button type="submit" class="button booking-confirmation-btn margin-top-40 margin-bottom-65">Confirmar y Pagar</button>
			
			</form>
		</div>


		<!-- Sidebar
		================================================== -->
		<div class="col-lg-4 col-md-4 margin-top-0 margin-bottom-60">

			<!-- Booking Summary -->
			
			</div>
			<div class="boxed-widget opening-hours summary margin-top-0">
				<h3><i class="fa fa-money"></i> Descriminación {{signatureMD5}}</h3>
				<ul>
					<li>Su saldo Actual <span>{{saldoRukas}} R'</span></li>
					<li>Rukas <span>{{cantidadRukas}} R'</span></li>
					<li>Tasa <span>$ {{tasaRukas}} COP</span></li>
					<li>Subtotal <span>$ {{calcularSubtotalCop}} COP</span></li>
					<li class="total-costs">Descuento (-5%)<span >-$2.000 COP</span></li>
					<li class="total-costs">Total <span>$ {{TotalCop}} COP</span></li>
				</ul>

			</div>
			<!-- Booking Summary / End -->

		</div>

	</div>
</div>
<!-- Container / End -->
</div>
</template>


<script>

 

    //var hash = md5("value"); // 

    export default {
        data(){
            return {
                saldoRukas: 0,
                cantidadRukas: 10,
                tasaRukas:2000,
                subtotalCop:0,
                totalCop: 0,
                hash: md5(2323),
            }
        },
        computed:{
          calcularSubtotalCop(){
            return this.subtotalCop = this.cantidadRukas * this.tasaRukas;
             
          },
          TotalCop(){
            return this.totalCop = this.subtotalCop ;
             
          },
         signatureMD5(){
            
            
            this.referenceCode = this.cantidadRukas + 'RUKAS' + new Date('hms');
            // return this.totalCop = this.subtotalCop ;
            
            return md5("kU8FDnZOQe52NOo58c09meMLSC~727406~"+this.referenceCode+"~"+this.totalCop+"~COP");
          },
          descripcion(){
            
            
            
            return this.cantidadRukas +'RUKAS';
          }
        },
        methods: {
            login(){
                alert('Ingresando Login'); 
            },
            register(){
                alert('Registrar');
            }
        }
    }
</script>