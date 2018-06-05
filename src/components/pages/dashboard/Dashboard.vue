<template>
<div id="dashboard">
	<a href="#" class="dashboard-responsive-nav-trigger"><i class="fa fa-reorder"></i> Dashboard Navigation</a>
	
	<rc-header-admin-lateral></rc-header-admin-lateral>
	
	<div class="dashboard-content">
		<!-- Titlebar -->
		<div id="titlebar">
			<div class="row">
				<div class="col-md-12">
					<h2>Howdy, Tom!</h2>
					<!-- Breadcrumbs -->
					<nav id="breadcrumbs">
						<ul>
							<li><a href="#">Home</a></li>
							<li>Dashboard</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import RcHeaderAdminLateral from '@/components/layouts/HeaderAdminLateral.vue'

export default {
    components: { RcHeaderAdminLateral },
    data(){
        return {
            
        }
    }
}
</script>