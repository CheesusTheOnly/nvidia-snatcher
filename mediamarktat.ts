import {Store} from './store';

export const Mediamarktat: Store = {
	labels: {
		inStock: {
			container: '#root',
			text: ['abholung']
		},
		outOfStock: {
			container: '#root',
			text: ['dieser artikel ist aktuell nicht verfügbar.']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.mediamarkt.at/de/product/-1537955.html'
		},
		{
			brand: 'asus',
			model: 'tuf gaming',
			series: '3080',
			url: 'https://www.mediamarkt.at/de/product/-1799192.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.mediamarkt.at/de/product/-1799911.html'
		},
		{
			brand: 'pny',
			model: 'xlr8 rgb',
			series: '3080',
			url: 'https://www.mediamarkt.at/de/product/-1799199.html'
		}
	],
	name: 'mediamarktat'
};
