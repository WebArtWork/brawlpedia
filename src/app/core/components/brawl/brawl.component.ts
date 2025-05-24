import { Component, Input } from '@angular/core';
import { Brawl } from '../../interfaces/brawl.interface';
@Component({
	selector: 'core-brawl',
	templateUrl: './brawl.component.html',
	styleUrls: ['./brawl.component.scss'],
	standalone: false
})
export class BrawlComponent {
	@Input() brawler: Brawl;
}
