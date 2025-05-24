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
		default: 'https://brawlpedia.webart.work/assets/logo.png',
		logo: 'https://brawlpedia.webart.work/assets/logo.png'
	},
	meta: {
		title: 'Brawl Stars Quiz, Team Builder & Brawler Insights',
		description:
			'Discover Brawlpedia – the interactive Brawl Stars site with a fun Brawler quiz, smart team builder, full Brawler list, and matchup tips to play smarter.',
		favicon: 'https://brawlpedia.webart.work/assets/favicon.ico',
		image: 'https://brawlpedia.webart.work/assets/logo.png'
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
