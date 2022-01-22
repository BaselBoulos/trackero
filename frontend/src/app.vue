<template>
	<div id="app">
		<main :style="setBg">
			<app-header :key="$route.fullPath" v-if="!isShowHeader && loggedUser" />
			<router-view />
			<!-- <loading-overlay v-else /> -->
			<!-- {{ loggedUser }} -->
		</main>
	</div>
</template>

<script>
import appHeader from '@/cmps/app-header'

export default {
	components: {
		appHeader
	},
	data() {
		return {}
	},
	created() {
		this.$store.dispatch({ type: 'loadUsers' })
	},
	computed: {
		setBg() {
			const currBoard = this.$store.getters.currBoard
			let bg = null
			if (currBoard) {
				const regexp = new RegExp('https?:\/\/')
				bg = currBoard.style.bgColor.match(regexp) ? 'backgroundImage:' + currBoard.style.bgColor : `backgroundColor: ${currBoard.style.bgColor}`
			} else bg = 'backgroungColor: #fff'
			return bg
		},
		loggedUser() {
			return this.$store.getters.currLoggedUser
		},
		isShowHeader() {
			return this.$route.name === 'home' || this.$route.name === 'login' ? true : false
		}
	}
}
</script>
