<template>
  <div id="dashboard">
        <a href="#" class="dashboard-responsive-nav-trigger"><i class="fa fa-reorder"></i> Dashboard Navigation</a>
        
        <rc-header-admin-lateral></rc-header-admin-lateral>
        
        <div class="dashboard-content">
      		<div id="titlebar">
      			<div class="row">
      				<div class="col-md-12">
      					<h2>Adicionales</h2>
      					<!-- Breadcrumbs -->
      					<nav id="breadcrumbs">
      						<ul>
      							<li><a href="#">Home</a></li>
      							<li><a href="#">Dashboard</a></li>
      							<li>Adicionales</li>
      						</ul>
      					</nav>
      				</div>
      			</div>
      		</div>
    
      		<div class="row">
      			<!-- Listings -->
      			<div class="col-lg-12 col-md-12">
      				<div class="dashboard-list-box margin-top-0">
      					<ul>
      						
      					</ul>
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
import RcListDishes from '@/components/pages/dashboard/partials/ListDishes.vue'

export default{
  components: { RcHeaderAdminLateral, RcListDishes }
    
}
</script>