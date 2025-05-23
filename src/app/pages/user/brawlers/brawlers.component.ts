import { Component } from '@angular/core';
import { brawlers } from 'src/app/core/const/brawlers.const';

@Component({
	templateUrl: './brawlers.component.html',
	styleUrls: ['./brawlers.component.scss'],
	standalone: false
})
export class BrawlersComponent {
	readonly brawlers = brawlers;
}
