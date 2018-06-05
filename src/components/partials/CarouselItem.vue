<template>
    <!-- Item -->
	<div class="fw-carousel-item">
		<div class="category-box-container">
			<a href="listings-half-screen-map-grid-1.html" class="category-box" data-background-image="https://picsum.photos/900/600/?random">
				<div class="category-box-content">
					<h3>{{ nombre }}</h3>
					<span>{{ cantidad }} Vistas</span>
				</div>
				<span class="category-box-btn">Browse</span>
			</a>
		</div>
	</div>
</template>

<script>
export default {
    props: ['nombre', 'cantidad'],
    data(){
        return {
            
        }
    }
}
</script>