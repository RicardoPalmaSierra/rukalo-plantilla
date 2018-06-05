<template>
    <header id="header-container" class="fixed fullwidth dashboard">

	<!-- Header -->
	<div id="header" class="not-sticky">
		<div class="container">
			
			<!-- Left Side Content -->
			<div class="left-side">
				
				<!-- Logo -->
				<div id="logo">
					<a href="#"><img src="../../assets/logo3.png" ></a>
					<a href="#" class="dashboard-logo"><img src="../../assets/logo3.png" ></a>
				</div>

				<!-- Mobile Navigation -->
				<div class="mmenu-trigger">
					<button class="hamburger hamburger--collapse" type="button">
						<span class="hamburger-box">
							<span class="hamburger-inner"></span>
						</span>
					</button>
				</div>

				<!-- Main Navigation -->
				<nav id="navigation" class="style-1">
					<ul id="responsive">
                        <!--Lista de items-->
						
					</ul>
				</nav>
				<div class="clearfix"></div>
				<!-- Main Navigation / End -->
				
			</div>
			<!-- Left Side Content / End -->

			<!-- Right Side Content / End -->
			<div class="right-side">
				<!-- Header Widget -->
				<div class="header-widget">
					
					<!-- User Menu -->
					<div class="user-menu">
						<div class="user-name"><span><img src="images/dashboard-avatar.jpg" alt=""></span>Mi cuenta</div>
						<ul>
							<li>
								<router-link :to="{ name: 'dashboard' }">
									<i class="sl sl-icon-settings"></i> Dashboard
								</router-link>
							</li>

							<li><a href="index.html"><i class="sl sl-icon-power"></i> Logout</a></li>
						</ul>
					</div>

					<a href="dashboard-add-listing.html" class="button border with-icon">Add Listing <i class="sl sl-icon-plus"></i></a>
				</div>
				<!-- Header Widget / End -->
			</div>
			<!-- Right Side Content / End -->

		</div>
	</div>
	<!-- Header / End -->

</header>
</template>