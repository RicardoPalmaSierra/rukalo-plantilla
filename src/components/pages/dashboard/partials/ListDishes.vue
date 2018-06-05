<template>
  <li>
		<div class="list-box-listing">
			<div class="list-box-listing-img"><a href="#"><img src="images/listing-item-01.jpg" alt=""></a></div>
			<div class="list-box-listing-content">
				<div class="inner">
					<h3><a href="#">{{ dish.name }}</a></h3>
					<span>964 School Street, New York</span>
					<div class="star-rating" data-rating="3.5">
						<div class="rating-counter">(12 reviews)</div>
					</div>
				</div>
			</div>
		</div>
		<div class="buttons-to-right">
			<router-link class="button gray" :to="{ name: 'editDish', params: { id: 1 } }">
			  <i class="sl sl-icon-note"></i> Editar
			</router-link>
			<router-link class="button gray" :to="{ name: 'editDish', params: { id: 1 } }">
			  <i class="sl sl-icon-note"></i> Eliminar
			</router-link>
		</div>
	</li>
</template>

<script>
    export default {
        props: ['dish'],
        data(){
            return{
                
            }
        }
        
    }
</script>