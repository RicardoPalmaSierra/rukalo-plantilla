<template>
  <div id="dashboard">
    
    <a href="#" class="dashboard-responsive-nav-trigger"><i class="fa fa-reorder"></i> Dashboard Navigation</a>
    
    <rc-header-admin-lateral></rc-header-admin-lateral>      
    
    <div class="dashboard-content">
      <div id="titlebar">
  			<div class="row">
  				<div class="col-md-12">
  					<h2>Nuevo Plato</h2>
  					<!-- Breadcrumbs -->
  					<nav id="breadcrumbs">
  						<ul>
  							<li><a href="#">Home</a></li>
  							<li>
  							  <router-link :to="{ name: 'dashboard' }">
  							    Dashboard
  							  </router-link>
  							</li>
  							<li>Nuevo Plato</li>
  						</ul>
  					</nav>
  				</div>
  			</div>
  		</div>
  
  		<div class="row">
  			<div class="col-lg-12">
  
  				<div id="add-listing">
  
  					<!-- Section -->
  					<div class="add-listing-section">
  
  						<!-- Headline -->
  						<div class="add-listing-headline">
  							<h3><i class="sl sl-icon-doc"></i> Información Basica</h3>
  						</div>
  
  						<!-- Title -->
  						<div class="row with-forms">
  							<div class="col-md-12">
  								<h5>Titulo del plato <i class="tip" data-tip-content="Name of your business"></i></h5>
  								<input class="search-field" type="text" value=""/>
  							</div>
  						</div>
  
  						<!-- Row -->
  						<div class="row with-forms">
  
  							<!-- Status -->
  							<div class="col-md-6">
  								<h5>Categoria</h5>
  								<select class="chosen-select-no-single" >
  									<option label="">Selecione Categoria</option>	
  									<option v-for="categoria in categorias"> {{ categoria.name }}</option>
  								</select>
  							</div>
  
  							<!-- Type -->
  							<div class="col-md-6">
  								<h5>Keywords <i class="tip" data-tip-content="Maximum of 15 keywords related with your business"></i></h5>
  								<input type="text" placeholder="Keywords should be separated by commas">
  							</div>
  
  						</div>
  						<!-- Row / End -->
  
  					</div>
  					<!-- Section / End -->
  
  					<!-- Section -->
  					<div class="add-listing-section margin-top-45">
  
  						<!-- Headline -->
  						<div class="add-listing-headline">
  							<h3><i class="sl sl-icon-picture"></i> Galeria</h3>
  						</div>
  
  						<!-- Dropzone -->
  						<div class="submit-section">
  							
  						</div>
  
  					</div>
  					<!-- Section / End -->
  
  
  					<!-- Section -->
  					<div class="add-listing-section margin-top-45">
  
  						<!-- Headline -->
  						<div class="add-listing-headline">
  							<h3><i class="sl sl-icon-docs"></i> Detalles</h3>
  						</div>
  
  						<!-- Description -->
  						<div class="form">
  							<h5>Descricción</h5>
  							<textarea class="WYSIWYG" name="summary" cols="40" rows="3" id="summary" spellcheck="true"></textarea>
  						</div>
  
  						<!-- Row -->
  						<!--<div class="row with-forms">-->
  
  							<!-- Phone -->
  						<!--	<div class="col-md-4">-->
  						<!--		<h5>Phone <span>(optional)</span></h5>-->
  						<!--		<input type="text">-->
  						<!--	</div>-->
  
  							<!-- Website -->
  						<!--	<div class="col-md-4">-->
  						<!--		<h5>Website <span>(optional)</span></h5>-->
  						<!--		<input type="text">-->
  						<!--	</div>-->
  
  							<!-- Email Address -->
  						<!--	<div class="col-md-4">-->
  						<!--		<h5>E-mail <span>(optional)</span></h5>-->
  						<!--		<input type="text">-->
  						<!--	</div>-->
  
  						<!--</div>-->
  						<!-- Row / End -->
  
  
  						<!-- Row -->
  						<!--<div class="row with-forms">-->
  
  							<!-- Phone -->
  						<!--	<div class="col-md-4">-->
  						<!--		<h5 class="fb-input"><i class="fa fa-facebook-square"></i> Facebook <span>(optional)</span></h5>-->
  						<!--		<input type="text" placeholder="https://www.facebook.com/">-->
  						<!--	</div>-->
  
  							<!-- Website -->
  						<!--	<div class="col-md-4">-->
  						<!--		<h5 class="twitter-input"><i class="fa fa-twitter"></i> Twitter <span>(optional)</span></h5>-->
  						<!--		<input type="text" placeholder="https://www.twitter.com/">-->
  						<!--	</div>-->
  
  							<!-- Email Address -->
  						<!--	<div class="col-md-4">-->
  						<!--		<h5 class="gplus-input"><i class="fa fa-google-plus"></i> Google Plus <span>(optional)</span></h5>-->
  						<!--		<input type="text" placeholder="https://plus.google.com/">-->
  						<!--	</div>-->
  
  						<!--</div>-->
  						<!-- Row / End -->
  
  
  						<!-- Checkboxes -->
  						<!--<h5 class="margin-top-30 margin-bottom-10">Amenities <span>(optional)</span></h5>-->
  						<!--<div class="checkboxes in-row margin-bottom-20">-->
  					
  						<!--	<input id="check-a" type="checkbox" name="check">-->
  						<!--	<label for="check-a">Elevator in building</label>-->
  
  						<!--	<input id="check-b" type="checkbox" name="check">-->
  						<!--	<label for="check-b">Friendly workspace</label>-->
  
  						<!--	<input id="check-c" type="checkbox" name="check">-->
  						<!--	<label for="check-c">Instant Book</label>-->
  
  						<!--	<input id="check-d" type="checkbox" name="check">-->
  						<!--	<label for="check-d">Wireless Internet</label>-->
  
  						<!--	<input id="check-e" type="checkbox" name="check" >-->
  						<!--	<label for="check-e">Free parking on premises</label>-->
  
  						<!--	<input id="check-f" type="checkbox" name="check" >-->
  						<!--	<label for="check-f">Free parking on street</label>-->
  
  						<!--	<input id="check-g" type="checkbox" name="check">-->
  						<!--	<label for="check-g">Smoking allowed</label>	-->
  
  						<!--	<input id="check-h" type="checkbox" name="check">-->
  						<!--	<label for="check-h">Events</label>-->
  					
  						<!--</div>-->
  						<!-- Checkboxes / End -->
  
  					</div>
  					<!-- Section / End -->
  
  
  					<!-- Section -->
  					<div class="add-listing-section margin-top-45">
  						
  						<!-- Headline -->
  						<div class="add-listing-headline">
  							<h3><i class="sl sl-icon-clock"></i> Opening Hours</h3>
  							<!-- Switcher -->
  							<label class="switch"><input type="checkbox" checked><span class="slider round"></span></label>
  						</div>
  						
  						<!-- Switcher ON-OFF Content -->
  						<div class="switcher-content">
  
  							<!-- Day -->
  							<div class="row opening-day">
  								<div class="col-md-2"><h5>Monday</h5></div>
  								<div class="col-md-5">
  									<select class="chosen-select" data-placeholder="Opening Time">
  										<option label="Opening Time"></option>
  										<option>Closed</option>
  										<option>1 AM</option>
  										<option>2 AM</option>
  										<option>3 AM</option>
  										<option>4 AM</option>
  										<option>5 AM</option>
  										<option>6 AM</option>
  										<option>7 AM</option>
  										<option>8 AM</option>
  										<option>9 AM</option>
  										<option>10 AM</option>
  										<option>11 AM</option>
  										<option>12 AM</option>	
  										<option>1 PM</option>
  										<option>2 PM</option>
  										<option>3 PM</option>
  										<option>4 PM</option>
  										<option>5 PM</option>
  										<option>6 PM</option>
  										<option>7 PM</option>
  										<option>8 PM</option>
  										<option>9 PM</option>
  										<option>10 PM</option>
  										<option>11 PM</option>
  										<option>12 PM</option>
  									</select>
  								</div>
  								<div class="col-md-5">
  									<select class="chosen-select" data-placeholder="Closing Time">
  										<option label="Closing Time"></option>
  										<option>Closed</option>
  										<option>1 AM</option>
  										<option>2 AM</option>
  										<option>3 AM</option>
  										<option>4 AM</option>
  										<option>5 AM</option>
  										<option>6 AM</option>
  										<option>7 AM</option>
  										<option>8 AM</option>
  										<option>9 AM</option>
  										<option>10 AM</option>
  										<option>11 AM</option>
  										<option>12 AM</option>	
  										<option>1 PM</option>
  										<option>2 PM</option>
  										<option>3 PM</option>
  										<option>4 PM</option>
  										<option>5 PM</option>
  										<option>6 PM</option>
  										<option>7 PM</option>
  										<option>8 PM</option>
  										<option>9 PM</option>
  										<option>10 PM</option>
  										<option>11 PM</option>
  										<option>12 PM</option>
  									</select>
  								</div>
  							</div>
  							<!-- Day / End -->
  
  							<!-- Day -->
  							<div class="row opening-day js-demo-hours">
  								<div class="col-md-2"><h5>Tuesday</h5></div>
  								<div class="col-md-5">
  									<select class="chosen-select" data-placeholder="Opening Time">
  										<!-- Hours added via JS (this is only for demo purpose) -->
  									</select>
  								</div>
  								<div class="col-md-5">
  									<select class="chosen-select" data-placeholder="Closing Time">
  										<!-- Hours added via JS (this is only for demo purpose) -->
  									</select>
  								</div>
  							</div>
  							<!-- Day / End -->
  
  							<!-- Day -->
  							<div class="row opening-day js-demo-hours">
  								<div class="col-md-2"><h5>Wednesday</h5></div>
  								<div class="col-md-5">
  									<select class="chosen-select" data-placeholder="Opening Time">
  										<!-- Hours added via JS (this is only for demo purpose) -->
  									</select>
  								</div>
  								<div class="col-md-5">
  									<select class="chosen-select" data-placeholder="Closing Time">
  										<!-- Hours added via JS (this is only for demo purpose) -->
  									</select>
  								</div>
  							</div>
  							<!-- Day / End -->
  
  							<!-- Day -->
  							<div class="row opening-day js-demo-hours">
  								<div class="col-md-2"><h5>Thursday</h5></div>
  								<div class="col-md-5">
  									<select class="chosen-select" data-placeholder="Opening Time">
  										<!-- Hours added via JS (this is only for demo purpose) -->
  									</select>
  								</div>
  								<div class="col-md-5">
  									<select class="chosen-select" data-placeholder="Closing Time">
  										<!-- Hours added via JS (this is only for demo purpose) -->
  									</select>
  								</div>
  							</div>
  							<!-- Day / End -->
  
  							<!-- Day -->
  							<div class="row opening-day js-demo-hours">
  								<div class="col-md-2"><h5>Friday</h5></div>
  								<div class="col-md-5">
  									<select class="chosen-select" data-placeholder="Opening Time">
  										<!-- Hours added via JS (this is only for demo purpose) -->
  									</select>
  								</div>
  								<div class="col-md-5">
  									<select class="chosen-select" data-placeholder="Closing Time">
  										<!-- Hours added via JS (this is only for demo purpose) -->
  									</select>
  								</div>
  							</div>
  							<!-- Day / End -->
  
  							<!-- Day -->
  							<div class="row opening-day js-demo-hours">
  								<div class="col-md-2"><h5>Saturday</h5></div>
  								<div class="col-md-5">
  									<select class="chosen-select" data-placeholder="Opening Time">
  										<!-- Hours added via JS (this is only for demo purpose) -->
  									</select>
  								</div>
  								<div class="col-md-5">
  									<select class="chosen-select" data-placeholder="Closing Time">
  										<!-- Hours added via JS (this is only for demo purpose) -->
  									</select>
  								</div>
  							</div>
  							<!-- Day / End -->
  
  							<!-- Day -->
  							<div class="row opening-day js-demo-hours">
  								<div class="col-md-2"><h5>Sunday</h5></div>
  								<div class="col-md-5">
  									<select class="chosen-select" data-placeholder="Opening Time">
  										<!-- Hours added via JS (this is only for demo purpose) -->
  									</select>
  								</div>
  								<div class="col-md-5">
  									<select class="chosen-select" data-placeholder="Closing Time">
  										<!-- Hours added via JS (this is only for demo purpose) -->
  									</select>
  								</div>
  							</div>
  							<!-- Day / End -->
  
  						</div>
  						<!-- Switcher ON-OFF Content / End -->
  
  					</div>
  					<!-- Section / End -->
  
  
  					<!-- Section -->
  					<div class="add-listing-section margin-top-45">
  						
  						<!-- Headline -->
  						<div class="add-listing-headline">
  							<h3><i class="sl sl-icon-book-open"></i> Precio</h3>
  							<!-- Switcher -->
  							<label class="switch"><input type="checkbox" checked><span class="slider round"></span></label>
  						</div>
  
  						<!-- Switcher ON-OFF Content -->
  						<div class="switcher-content">
  
  							<div class="row">
  								<div class="col-md-12">
  									<table id="pricing-list-container">
  										<tr class="pricing-list-item pattern">
  											<td>
  												<div class="fm-move"><i class="sl sl-icon-cursor-move"></i></div>
  												<div class="fm-input pricing-name"><input type="text" placeholder="Title" /></div>
  												<div class="fm-input pricing-ingredients"><input type="text" placeholder="Description" /></div>
  												<div class="fm-input pricing-price"><input type="text" placeholder="Price" data-unit="USD" /></div>
  												<div class="fm-close"><a class="delete" href="#"><i class="fa fa-remove"></i></a></div>
  											</td>
  										</tr>
  									</table>
  									<a href="#" class="button add-pricing-list-item">Add Item</a>
  									<a href="#" class="button add-pricing-submenu">Add Category</a>
  								</div>
  							</div>
  
  						</div>
  						<!-- Switcher ON-OFF Content / End -->
  
  					</div>
  					<!-- Section / End -->
  
  
  					<a href="#" class="button preview">Preview <i class="fa fa-arrow-circle-right"></i></a>
  
  				</div>
  			</div>
  
  			<!-- Copyrights -->
  			<div class="col-md-12">
  				<div class="copyrights">© 2017 Listeo. All Rights Reserved.</div>
  			</div>
  
  		</div>

	</div>
  </div>
</template>

<script>
  import RcHeaderAdminLateral from '@/components/layouts/HeaderAdminLateral.vue'
  
  export default{
    components: { RcHeaderAdminLateral },
    data(){
      return {
        categorias: [
            { name: 'Aperitivo' },
            { name: 'Brotzeit' },
            { name: 'Brunch' },
            { name: 'Cena' },
            { name: 'Desayuno' },
            { name: 'Entrante' },
          ]
      }
    }
  }
</script>