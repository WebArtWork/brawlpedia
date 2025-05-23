import { languages } from 'src/app/core/modules/translate/languages';

export const environment = {
	roles: [],
	production: true,
	appId: 'brawlpedia',
	url: 'https://webart.work',
	sign: {
		logo: '',
		email: '',
		password: ''
	},
	image: {
		default: 'https://ngx.webart.work/assets/logo.png',
		logo: 'https://ngx.webart.work/assets/logo.png'
	},
	meta: {
		title: 'Brawlpedia',
		description:
			'An amazing solution to build web or mobile app for your business',
		favicon: 'https://ngx.webart.work/assets/favicon.ico',
		image: 'https://ngx.webart.work/assets/logo.png'
	},
	defaultLanguageCode: 'ua',
	languages: [
		{
			name: 'Ukrainian',
			origin: 'українська',
			code: 'uk'
		},
		{
			code: 'en',
			name: 'English',
			origin: 'English'
		}
	]
};
