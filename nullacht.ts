import {Store} from './store';

export const Nullacht: Store = {
	labels: {
		inStock: {
			container: '.custom-detail-availability',
			text: ['NUR NOCH 1 STÜCK VERFÜGBAR','lagernd',]
					},
		outOfStock: {
			container: '.custom-detail-availability',
			text: ['nicht lagernd']
					}
	},
		
	links: [
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://www.0815.at/656582260'
		}
	],
	name:'nullacht'
};