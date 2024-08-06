<script setup lang="ts">
import type { NuxtError } from '#app'

useSeoMeta({
	title: 'Page not found',
	description: 'We are sorry but this page could not be found.'
})

defineProps({
	error: {
		type: Object as PropType<NuxtError>,
		required: true
	}
})

useHead({
	htmlAttrs: {
		lang: 'en'
	}
})

</script>

<template>
	<div>
		<h1>Page not found</h1>
		<p>We are sorry but the page you are looking for could not be found.</p>
		<p v-if="error.statusCode === 404">The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
		<p v-else-if="error.statusCode === 500">An error occurred on the server. Please try again later.</p>
		<p v-else>An error occurred.</p>
		<p>Go back to the <NuxtLink to="/">home page</NuxtLink>.</p>
	</div>
</template>
