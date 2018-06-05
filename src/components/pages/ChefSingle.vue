<template>
  <div>
    <div id="titlebar" class="gradient">
    	<div class="container">
    		<div class="row">
    			<div class="col-md-6">
    
    				<div class="user-profile-titlebar">
    					<div class="user-profile-avatar"><img src="https://picsum.photos/300/300/?random" alt=""></div>
    					<div class="user-profile-name">
    						<h2>{{ chef.name }}</h2>
    						<div class="star-rating" data-rating="5">
    							<div class="rating-counter"><a href="#listing-reviews">(60 reviews)</a></div>
    						</div>
    					</div>
    				</div>
    
    			</div>
    				<!-- Sidebar ================================================== -->
        		<div class="col-lg-6 col-md-6 margin-top-0">
        				
        			<!-- Verified Badge -->
        			<div class="verified-badge with-tip" data-tip-content="Account has been verified and belongs to the person or organization represented.">
        				<i class="sl sl-icon-user-following"></i> Cuenta Verificada
        			</div>
        
        		</div>
        		<!-- Sidebar / End -->
    		</div>
    	</div>
    </div>
  <div class="container">
	  <div class="row sticky-wrapper">


	


		<!-- Content
		================================================== -->
		<div class="col-lg-12 col-md-12 padding-left-30">

			<h3 class="margin-top-0 margin-bottom-40">Menú del Chef</h3>

			<div class="row">

        <!--Componente para listar los platos en la pagina del chef-->
        <!--Recibe el plato completo como item para mostrar toda la información en dicho componente-->
        <!--Ubicación "Componentes/partials/DishesChefSingle-->
				<rc-dishes-chef-single></rc-dishes-chef-single>
				<rc-dishes-chef-single></rc-dishes-chef-single>
				<rc-dishes-chef-single></rc-dishes-chef-single>
				<rc-dishes-chef-single></rc-dishes-chef-single>
				

				<div class="col-md-12 browse-all-user-listings">
					<a href="#">Browse All Listings <i class="fa fa-angle-right"></i> </a>
				</div>

			</div>

				
			<!-- Reviews -->
			<div id="listing-reviews" class="listing-section">
				<h3 class="margin-top-60 margin-bottom-20">Comentarios</h3>

				<div class="clearfix"></div>

				<!-- Reviews -->
				<section class="comments listing-reviews">

					<ul>
						<rc-comments></rc-comments>
					 </ul>
				</section>

				<!-- Pagination -->
				<div class="clearfix"></div>
				<div class="row">
					<div class="col-md-12">
						<!-- Pagination -->
						<div class="pagination-container margin-top-30">
							<nav class="pagination">
								<ul>
									<li><a href="#" class="current-page">1</a></li>
									<li><a href="#">2</a></li>
									<li><a href="#"><i class="sl sl-icon-arrow-right"></i></a></li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div class="clearfix"></div>
				<!-- Pagination / End -->
			</div>


		</div>

	</div>
</div>

  </div>
</template>
<script>

import RcDishesChefSingle from '@/components/partials/DishesChefSingle.vue'
import RcComments from '@/components/partials/Comments.vue'

export default {
  props: {
    id: Number
  },
  components: { RcDishesChefSingle, RcComments },
  data() {
      return {
          prueba: 'OK',
          chef: {
            name: 'Libardo Doe',
            phone: '+51 123 525 223'
          }
      }
  }
    
}
</script>