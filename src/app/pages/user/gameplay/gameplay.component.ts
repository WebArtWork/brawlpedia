import { Component } from '@angular/core';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { brawlers } from 'src/app/core/const/brawlers.const';
import { Brawl } from 'src/app/core/interfaces/brawl.interface';
import { AlertService } from 'wacom';

@Component({
	templateUrl: './gameplay.component.html',
	styleUrls: ['./gameplay.component.scss'],
	standalone: false
})
export class GameplayComponent {
	readonly Math = Math;

	brawlers = brawlers.slice();

	selectedBrawler: Brawl =
		brawlers[Math.floor(Math.random() * brawlers.length)];

	selectedBrawlers: Brawl[] = [];

	formDoc: FormInterface = this._form.getForm('docForm', {
		formId: 'docForm',
		title: 'Select brawler',
		components: [
			{
				name: 'Select',
				key: 'brawler',
				fields: [
					{
						name: 'wChange',
						value: this.addBrawl.bind(this)
					},
					{
						name: 'Placeholder',
						value: 'Select brawler you believe is correct'
					},
					{
						name: 'Label',
						value: 'Brawler'
					},
					{
						name: 'Items',
						value: this.brawlers
					},
					{
						name: 'Name',
						value: 'Brawler'
					},
					{
						name: 'Value',
						value: 'Brawler'
					}
				]
			}
		]
	});

	submition: Record<string, unknown> = {};

	constructor(
		private _form: FormService,
		private _alert: AlertService
	) {}

	addBrawl() {
		if (this.selectedBrawler.Name === this.submition['brawler']) {
			this._alert.success({
				text: `Well done, you found the Brawler, good job, used ${this.selectedBrawlers.length + 1} tries`
			});
		}

		this.selectedBrawlers.push(
			this.brawlers.find(
				(b) => b.Name === this.submition['brawler']
			) as Brawl
		);

		this.brawlers.splice(
			this.brawlers.findIndex(
				(b) => b.Name === this.submition['brawler']
			),
			1
		);

		this.submition['brawler'] = '';
	}
}
