<template>
  <div>
    <div id="titlebar">
    	<div class="container">
    		<div class="row">
    			<div class="col-md-12">
    				<h2>Promociones</h2>
    			</div>
    		</div>
    	</div>
    </div>
    <div class="container">
      <div class="row">
        <rc-search-item :item="{ name: 'Ricardo', gender: 'Male', picture: 'images/imges.jpg' }"></rc-search-item>
        <rc-search-item :item="{ name: 'Ricardo', gender: 'Male', picture: 'images/imges.jpg' }"></rc-search-item>
        <rc-search-item :item="{ name: 'Ricardo', gender: 'Male', picture: 'images/imges.jpg' }"></rc-search-item>
        <rc-search-item :item="{ name: 'Ricardo', gender: 'Male', picture: 'images/imges.jpg' }"></rc-search-item>
        <rc-search-item :item="{ name: 'Ricardo', gender: 'Male', picture: 'images/imges.jpg' }"></rc-search-item>
      </div>
    </div>
  </div>
</template>
<script>
import RcSearchItem from '@/components/partials/SearchItem.vue'
  export default {
    components: { RcSearchItem },
    data(){
      return{
        
      }
    }
      
  }
</script>