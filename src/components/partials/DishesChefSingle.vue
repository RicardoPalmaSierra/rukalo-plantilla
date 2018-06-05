<template>
<!-- Listing Item -->
	<div class="col-lg-6 col-md-6">
		<div class="listing-item-container list-layout">
			
			<router-link class="listing-item" :to="{ name: 'dish'}">
			  <!-- Image -->
				<div class="listing-item-image">
					<img src="https://picsum.photos/900/600/?random" alt="">
					<!--<span class="tag">Eat & Drink</span>-->
				</div>
				
				<!-- Content -->
				<div class="listing-item-content">
					<!--<div class="listing-badge now-open">Closed</div>-->

					<div class="listing-item-inner">
						<h3>Pastas con chimichurri</h3>
						<!--<span>964 School Street, New York</span>-->
						<div class="star-rating" data-rating="3.5">
							<div class="rating-counter">(12 reviews)</div>
						</div>
					</div>

					<!--<span class="like-icon"></span>-->
				</div>
			</router-link>
		</div>
	</div>
</template>