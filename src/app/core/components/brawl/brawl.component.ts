import { Component, Input } from '@angular/core';
import { Brawl } from '../../interfaces/brawl.interface';
@Component({
	selector: 'core-brawl',
	templateUrl: './brawl.component.html',
	styleUrls: ['./brawl.component.scss'],
	standalone: false
})
export class BrawlComponent {
	readonly Math = Math;

	@Input() brawler: Brawl;

	@Input() compareToBrawler: Brawl;
}
