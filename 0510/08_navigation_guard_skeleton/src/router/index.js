import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloView from '@/views/HelloView.vue'
import LoginView from '@/views/LoginView.vue'
import DogView from '@/views/DogView.vue'
import NotFound404 from '@/views/NotFound404.vue'

Vue.use(VueRouter)
const isLoggedIn = true

const routes = [
	{
		path: '/404',
		name: 'NotFound404',
		component: NotFound404,
	},
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
	},
	{
		path: '/hello/:userName',
		name: 'hello',
		component: HelloView,
	},
	{
		path: '/login',
		name: 'login',
		component: LoginView,
		//////////////////////////////////라우터 가드//////////////////////////////////////////////////
		beforeEnter(to, from, next) {
			if (isLoggedIn === true) {
				console.log('이미 로그인 함')
				next({ name: 'home' })
			} else {
				next() // 로그인 안 되어 있다면, 로그인 페이지로 이동
			}
		},
		////////////////////////////////////라우터 가드////////////////////////////////////////////////
	},
	{
		path: '/dog/:breed',
		name: 'dog',
		component: DogView,
	},

	////////////////////////////////////이상한 url시 에러 페이지로 이동//////////////////////////////
	//////////////////코드는 위에서 부터 실행되므로 찾는게 없으면 *(모든 것) 은 404페이지로//////////
	/////////////////////항상 제일 아래 위치여야 한다.///////////////////////////////////////////////
	{
		path: '*',
		redirect: '/404',
	},
	/////////////////////////////////////////////////////////////////////////////////////////////////
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

///////////////////////////////// 전역 가드 /////////////////////////////////////////////////////
// router/index.js
// router.beforeEach((to, from, next) => {
// 	// CODE HERE
// 	// console.log('to', to)
// 	// console.log('from', from)
// 	// console.log('next', next)

// 	// 로그인 여부
// 	// const isLoggedIn = true //로그인 상태
//   const isLoggedIn = false  // 비로그인 상태
// 	// 로그인이 필요한 페이지 지정
// 	// const authPages = ['hello']
//   // 보통 이렇게 지정한다.
//   const allowAuthpages = ['login']
// 	// 앞으로 이동할 페이지(to)가 로그인이 필요한 페이지인지 확인
// 	// const isAuthRequired = authPages.includes(to.name)
//   const isAuthRequired = !allowAuthpages.includes(to.name)

// 	// 로그인이 필요한 페이지인데 !로그인 (로그인이 안된) 상태라면
// 	if (isAuthRequired && !isLoggedIn) {
// 		console.log('Login으로 이동')
// 		next({ name: 'login' })
// 	} else {
// 		console.log('to로 이동!')
// 		next()
// 	}
// })
/////////////////////////////////// 전역 가드 //////////////////////////////////////////////////

export default router
