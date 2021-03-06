import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home.vue'
import templatesList from '@/views/templates-list.vue'
import boardApp from '@/views/board-app.vue'
import taskDetails from '@/views/task-details.vue'
import loginSignup from '@/views/loginSignup.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: home
	},
	{
		path: '/login',
		name: 'login',
		component: loginSignup
	},
	{
		path: '/board',
		name: 'templates',
		component: templatesList
	},
	{
		path: '/board/:boardId',
		name: 'board',
		component: boardApp,
		children: [
			{
				path: ':groupId/:taskId',
				name: 'taskDetails',
				component: taskDetails
			}
		]
	}
]

const router = new VueRouter({
	routes
})

export default router
