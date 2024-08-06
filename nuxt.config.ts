// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },

	modules: ["@nuxt/ui", '@nuxt/eslint', '@nuxt/ui', "@nuxt/image"],

	future: {
		compatibilityVersion: 4,
	},

	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: false,
				commaDangle: 'never',
				braceStyle: '1tbs'
			}
		}
	}

})