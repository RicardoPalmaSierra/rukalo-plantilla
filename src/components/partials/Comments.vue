<template> 
<li>
	<div class="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70" alt="" /></div>
	<div class="comment-content"><div class="arrow-comment"></div>
		<div class="comment-by">{{ comment.name }} <div class="comment-by-listing">on <a href="#">Burger House</a></div> <span class="date">{{ comment.date }}</span>
			<div class="star-rating" data-rating="5"></div>
		</div>
		<p>{{ comment.commentText }}</p>
		
		<div class="review-images mfp-gallery-container">
			<a href="images/review-image-01.jpg" class="mfp-gallery"><img src="images/review-image-01.jpg" alt=""></a>
		</div>
	</div>
</li>
</template>

<script>
  export default{
    data(){
      return{
        comment: {
          img: '',
          name: 'Jhon Doe',
          date: 'Junio 2018',
          commentText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, deleniti?'
        }
      }
    }
  }
</script>