<template>
    <div id="dashboard">
        <a href="#" class="dashboard-responsive-nav-trigger"><i class="fa fa-reorder"></i> Dashboard Navigation</a>
        
        <rc-header-admin-lateral></rc-header-admin-lateral>
        
        <div class="dashboard-content">
      		<div id="titlebar">
      			<div class="row">
      				<div class="col-md-12">
      					<h2>Platos</h2>
      					<!-- Breadcrumbs -->
      					<nav id="breadcrumbs">
      						<ul>
      							<li><a href="#">Home</a></li>
      							<li><a href="#">Dashboard</a></li>
      							<li>My Listings</li>
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
      						<rc-list-dishes :dish="{ name: 'Plato 1' }"></rc-list-dishes>
      						<rc-list-dishes :dish="{ name: 'Plato 2' }"></rc-list-dishes>
      						<rc-list-dishes :dish="{ name: 'Plato 3' }"></rc-list-dishes>
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