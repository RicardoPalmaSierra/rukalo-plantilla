import Home from "@/components/pages/Home.vue"
import NotFound from "@/components/pages/NotFound.vue"
import Search from '@/components/pages/Search.vue'

import ChefSingle from '@/components/pages/ChefSingle.vue'
import Chefs from '@/components/pages/Chefs.vue'

import Promotion from '@/components/pages/Promotion.vue'
import DishSingle from '@/components/pages/DishSingle.vue'
import MyOrders from '@/components/pages/MyOrders.vue'

import PayPage from '@/components/pages/PayPage.vue'
import ConfirmPay from '@/components/pages/ConfirmationPay.vue'

import Dashboard from '@/components/pages/dashboard/Dashboard.vue'
import Profile from '@/components/pages/dashboard/Profile.vue'
import MyDishes from '@/components/pages/dashboard/MyDishes.vue'
import NewDish from '@/components/pages/dashboard/NewDish.vue'
import EditDish from '@/components/pages/dashboard/EditDish.vue'
import Additionals from '@/components/pages/dashboard/Additionals.vue'
import Drinks from '@/components/pages/dashboard/Drinks.vue'
import Reviews from '@/components/pages/dashboard/Reviews.vue'

import MyRukas from '@/components/pages/MyRukas.vue'

export const routes = [
    { path: "/", component: Home, meta: { requiresAuth: true }, name: 'home' },
    { path: "/search/:q", component: Search, name: 'search', props : true },
    { path: '/promociones', component: Promotion, name: 'promocion' },
    { path: "/chef/:id", component: ChefSingle, name: 'chefsingle', props:true },
    { path: "/chefs", component: Chefs, name: 'chefs' },
    { path: "/plato/:id", component: DishSingle, name: 'dish', params: true },
    { path: "/pago", component: PayPage, name: 'paypage' },
    { path: "/confirmacion-pago", component: ConfirmPay, name : 'confirmPay' },
    
    { path: "/mis-pedidos", component: MyOrders , name: 'mispedidos' },
    { path: "/mis-rukas", component: MyRukas, name: 'misrukas'},
    
    // Dashboard
    
    { path: "/dashboard", component: Dashboard, name: 'dashboard' },
    { path: "/perfil", component: Profile, name: 'profile'},
    { path: "/platos", component: MyDishes, name: 'dishes'},
    { path: "/nuevo-plato", component: NewDish, name: 'newDish' },
    { path: "/editar-plato/:id", component: EditDish, name : 'editDish', params: true },
    { path: "/adicionales", component: Additionals, name :'additionals' },
    { path: "/bebidas", component: Drinks, name: 'drinks' },
    { path: "/reviews", component: Reviews, name: 'reviews' },
    
    { path: "*", component: NotFound, name: '404' }
]