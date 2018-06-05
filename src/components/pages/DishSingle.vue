<template>
    <div>
      <div class="listing-slider mfp-gallery-container margin-bottom-0">
      	<a href="https://picsum.photos/900/600/?random" data-background-image="https://picsum.photos/900/600/?random" class="item mfp-gallery" title="Title 1"></a>
      	<a href="https://picsum.photos/900/600/?random" data-background-image="https://picsum.photos/900/600/?random" class="item mfp-gallery" title="Title 3"></a>
      	<a href="https://picsum.photos/900/600/?random" data-background-image="https://picsum.photos/900/600/?random" class="item mfp-gallery" title="Title 2"></a>
      	<a href="https://picsum.photos/900/600/?random" data-background-image="https://picsum.photos/900/600/?random" class="item mfp-gallery" title="Title 4"></a>
      </div>


<!-- Content
================================================== -->
<div class="container">
	<div class="row sticky-wrapper">
		<div class="col-lg-8 col-md-8 padding-right-30">

			<!-- Titlebar -->
			<div id="titlebar" class="listing-titlebar">
				<div class="listing-titlebar-title">
					<h2>Burger House <span class="listing-tag">Eat & Drink</span></h2>
					<span>
						<a href="#listing-location" class="listing-address">
							<i class="fa fa-map-marker"></i>
							2726 Shinn Street, New York
						</a>
					</span>
					<div class="star-rating" data-rating="5">
						<div class="rating-counter"><a href="#listing-reviews">(31 reviews)</a></div>
					</div>
				</div>
			</div>

			<!-- Listing Nav -->
			<div id="listing-nav" class="listing-nav-container">
				<ul class="listing-nav">
					<li><a href="#listing-overview" class="active">Descripción</a></li>
					<li><a href="#listing-pricing-list">Precios</a></li>
					<!--<li><a href="#listing-location">Location</a></li>-->
					<li><a href="#listing-reviews">Comentarios</a></li>
					<li><a href="#add-review">Agregar Comentario</a></li>
				</ul>
			</div>
			
			<!-- Overview -->
			<div id="listing-overview" class="listing-section">

				<!-- Description -->

				<p>
					Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus.
				</p>

				<p>
					 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.
				</p>

				<!-- Amenities -->
				<h3 class="listing-desc-headline">Ingredientes</h3>
				<ul class="listing-features checkboxes margin-top-0">
					<li>Elevator in building</li>
					<li>Friendly workspace</li>
					<li>Instant Book</li>
					<li>Wireless Internet</li>
					<li>Free parking on premises</li>
					<li>Free parking on street</li>
				</ul>
			</div>


			<!-- Food Menu -->
			<div id="listing-pricing-list" class="listing-section">
				<h3 class="listing-desc-headline margin-top-70 margin-bottom-30">Precio</h3>

				<div class="show-more">
					<div class="pricing-list-container">
						
						<!-- Food List -->
						<h4>Platos</h4>
						<ul>
							<li>
								<h5>Classic Burger</h5>
								<p>Beef, salad, mayonnaise, spicey relish, cheese</p>
								<span>$6</span>
							</li>
						</ul>
					</div>
				</div>
				<a href="#" class="show-more-button" data-more-title="Show More" data-less-title="Show Less"><i class="fa fa-angle-down"></i></a>
			</div>
			<!-- Food Menu / End -->

		
			<!-- Location -->
			<!--<div id="listing-location" class="listing-section">-->
			<!--	<h3 class="listing-desc-headline margin-top-60 margin-bottom-30">Ubicación</h3>-->

			<!--	<div id="singleListingMap-container">-->
			<!--		<div id="singleListingMap" data-latitude="40.70437865245596" data-longitude="-73.98674011230469" data-map-icon="im im-icon-Hamburger"></div>-->
			<!--		<a href="#" id="streetView">Street View</a>-->
			<!--	</div>-->
			<!--</div>-->
				
			<!-- Comentarios -->
			<div id="listing-reviews" class="listing-section">
				<h3 class="listing-desc-headline margin-top-75 margin-bottom-20">Comentarios</h3>

				<div class="clearfix"></div>

				<!-- Lista de Comentarios -->
				<section class="comments listing-reviews">

					<ul>
					  <!--Lista de comentarios acerca del plato-->
					  <!--Ubicación: "Componentes->partials"-->
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


			<rc-add-comments></rc-add-comments>


		</div>


		<!-- Sidebar
		================================================== -->
		<div class="col-lg-4 col-md-4 margin-top-75 sticky">

				
			<!-- Verified Badge -->
			<!--<div class="verified-badge with-tip" data-tip-content="Listing has been verified and belongs the business owner or manager.">-->
			<!--	<i class="sl sl-icon-check"></i> Verified Listing-->
			<!--</div>-->

			<!-- Book Now -->
			<div class="boxed-widget booking-widget margin-top-35">
				<h3><i class="fa fa-calendar-check-o "></i> Reserva</h3>
				<div class="row with-forms  margin-top-0">

					<!-- Date Picker - docs: http://www.vasterad.com/docs/listeo/#!/date_picker -->
					<div class="col-lg-6 col-md-12">
						<input type="text" id="booking-date" data-lang="en" data-large-mode="true" data-large-default="true" data-min-year="2017" data-max-year="2020" data-lock="from">
					</div>

					<!-- Time Picker - docs: http://www.vasterad.com/docs/listeo/#!/time_picker -->
					<div class="col-lg-6 col-md-12">
						<input type="text" id="booking-time" value="9:00 am">
					</div>

					<!-- Panel Dropdown -->
					<!--<div class="col-lg-12">-->
					<!--	<div class="panel-dropdown">-->
							<!--<a href="#">Guests <span class="qtyTotal" name="qtyTotal">1</span></a>-->
					<!--		<div class="panel-dropdown-content">-->

								<!-- Quantity Buttons -->
					<!--			<div class="qtyButtons">-->
					<!--				<div class="qtyTitle">Adults</div>-->
					<!--				<input type="text" name="qtyInput" value="1">-->
					<!--			</div>-->

					<!--			<div class="qtyButtons">-->
					<!--				<div class="qtyTitle">Childrens</div>-->
					<!--				<input type="text" name="qtyInput" value="0">-->
					<!--			</div>-->

					<!--		</div>-->
					<!--	</div>-->
					<!--</div>-->
					<!-- Panel Dropdown / End -->

				</div>
				
				<!-- progress button animation handled via custom.js -->
				<router-link :to="{ name: 'paypage' }" class="button book-now fullwidth margin-top-5">
				  Reservar
				</router-link>
			</div>
			<!-- Book Now / End -->
		

			<!-- Opening Hours -->
			<div class="boxed-widget opening-hours margin-top-35">
				<!--<div class="listing-badge now-open">Now Open</div>-->
				<h3><i class="sl sl-icon-clock"></i>Horario de disponibilidad</h3>
				<ul>
					<li>Lunes <span>9 AM - 5 PM</span></li>
					<li>Martes <span>9 AM - 5 PM</span></li>
					<li>Miercoles <span>9 AM - 5 PM</span></li>
					<li>Jueves <span>9 AM - 5 PM</span></li>
					<li>Viernes <span>9 AM - 5 PM</span></li>
					<li>Sabado <span>9 AM - 3 PM</span></li>
					<li>Domingo <span>Cerrado</span></li>
				</ul>
			</div>
			<!-- Opening Hours / End -->
			<!-- Contact -->
			<!--<div class="boxed-widget margin-top-35">-->
			<!--	<div class="hosted-by-title">-->
			<!--		<h4><span>Plato por</span><router-link :to="{ name: 'chefsingle', params: { id: 1} }"> Libardo Doe</router-link></h4>-->
			<!--		<a href="pages-user-profile.html" class="hosted-by-avatar"><img src="https://picsum.photos/500/500/?random" alt=""></a>-->
			<!--	</div>-->
			<!--	<ul class="listing-details-sidebar">-->
			<!--		<li><i class="sl sl-icon-phone"></i> (123) 123-456</li>-->
					<!-- <li><i class="sl sl-icon-globe"></i> <a href="#">http://example.com</a></li> -->
			<!--		<li><i class="fa fa-envelope-o"></i> <a href="#"><span class="__cf_email__" data-cfemail="40342f2d002538212d302c256e232f2d">[email&#160;protected]</span></a></li>-->
			<!--	</ul>-->

			<!--	<ul class="listing-details-sidebar social-profiles">-->
			<!--		<li><a href="#" class="facebook-profile"><i class="fa fa-facebook-square"></i> Facebook</a></li>-->
			<!--		<li><a href="#" class="twitter-profile"><i class="fa fa-twitter"></i> Twitter</a></li>-->
					<!-- <li><a href="#" class="gplus-profile"><i class="fa fa-google-plus"></i> Google Plus</a></li> -->
			<!--	</ul>-->

				<!-- Reply to review popup -->
			<!--	<div id="small-dialog" class="zoom-anim-dialog mfp-hide">-->
			<!--		<div class="small-dialog-header">-->
			<!--			<h3>Send Message</h3>-->
			<!--		</div>-->
			<!--		<div class="message-reply margin-top-0">-->
			<!--			<textarea cols="40" rows="3" placeholder="Your message to Tom"></textarea>-->
			<!--			<button class="button">Send Message</button>-->
			<!--		</div>-->
			<!--	</div>-->

			<!--	<a href="#small-dialog" class="send-message-to-owner button popup-with-zoom-anim"><i class="sl sl-icon-envelope-open"></i> Send Message</a>-->
			<!--</div>-->
			<!-- Contact / End-->


			<!-- Share / Like -->
			<div class="listing-share margin-top-40 margin-bottom-40 no-border">
				<button class="like-button"><span class="like-icon"></span> Bookmark this listing</button> 
				<span>159 people bookmarked this place</span>

					<!-- Share Buttons -->
					<ul class="share-buttons margin-top-40 margin-bottom-0">
						<li><a class="fb-share" href="#"><i class="fa fa-facebook"></i> Share</a></li>
						<li><a class="twitter-share" href="#"><i class="fa fa-twitter"></i> Tweet</a></li>
						<li><a class="gplus-share" href="#"><i class="fa fa-google-plus"></i> Share</a></li>
						<!-- <li><a class="pinterest-share" href="#"><i class="fa fa-pinterest-p"></i> Pin</a></li> -->
					</ul>
					<div class="clearfix"></div>
			</div>

		</div>
		<!-- Sidebar / End -->

	</div>
</div>
    </div>
</template>

<script>
import RcComments from '@/components/partials/Comments.vue'
import RcAddComments from '@/components/partials/AddComments.vue'

  export default{
    components: { RcComments, RcAddComments },
    data(){
      return{
        
      }
    }
  }
</script>