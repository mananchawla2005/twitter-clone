import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import {users} from '../assets/users'
import UserProfile from '../views/UserProfile'
import Admin from '../views/Admin'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const user = store.state.User.user;
  if(!user){
    await store.dispatch("User/setUser", users[0])
  }

  const isAdmin = store.state.User.user.isAdmin;
  const requiresAdmin = to.matched.some(record=>record.meta.requiresAdmin)
  if(requiresAdmin && !isAdmin) next({name: "Home"})
  else next();
})
export default router
