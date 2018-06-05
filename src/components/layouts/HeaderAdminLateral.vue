<template>
    <div class="dashboard-nav">
		<div class="dashboard-nav-inner">

			<ul data-submenu-title="Main">
				<li class="active">
					<router-link :to="{ name: 'dashboard' }">
						<i class="sl sl-icon-settings"></i> Dashboard
					</router-link>
				</li>
			</ul>
			
			<ul data-submenu-title="Listings">
				<li>
					<router-link :to="{ name: 'dishes' }">
						<i class="sl sl-icon-layers"></i> Mis Platos
					</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'newDish' }">
						<i class="sl sl-icon-plus"></i> Nuevo plato
					</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'additionals' }">
						<i class="sl sl-icon-layers"></i> Adicionales
					</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'drinks' }">
						<i class="sl sl-icon-layers"></i> Bebidas
					</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'reviews' }">
						<i class="sl sl-icon-star"></i> Reseñas
					</router-link>
				</li>
				
			</ul>	

			<ul data-submenu-title="Account">
				<li><a href="dashboard-my-profile.html"><i class="sl sl-icon-user"></i> My Profile</a></li>
				<li><a href="index.html"><i class="sl sl-icon-power"></i> Logout</a></li>
			</ul>
			
		</div>
	</div>
</template>