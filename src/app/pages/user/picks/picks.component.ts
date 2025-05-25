import { Component } from '@angular/core';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { brawlers, brawlModes } from 'src/app/core/const/brawlers.const';
import { Brawl } from 'src/app/core/interfaces/brawl.interface';

@Component({
	templateUrl: './picks.component.html',
	styleUrls: ['./picks.component.scss'],
	standalone: false
})
export class PicksComponent {
	readonly brawlModes = brawlModes;

	brawlers = brawlers.slice();

	private _field = [
		{
			name: 'Placeholder',
			value: 'Enter brawler...'
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
			skipTranslation: true,
			value: 'Name'
		},
		{
			name: 'Value',
			skipTranslation: true,
			value: 'Name'
		}
	];

	submition: Record<string, string> = {};

	mineForm: FormInterface = this._form.getForm('mineForm', {
		formId: 'mineForm',
		title: 'Mine brawlers',
		components: [
			{
				name: 'Select',
				key: 'mineOne',
				fields: this._field
			},
			{
				name: 'Select',
				key: 'mineTwo',
				fields: this._field
			},
			{
				name: 'Select',
				key: 'mineThree',
				fields: this._field
			}
		]
	});

	opponentForm: FormInterface = this._form.getForm('opponentForm', {
		formId: 'opponentForm',
		title: 'Opponent brawlers',
		components: [
			{
				name: 'Select',
				key: 'opponentOne',
				fields: this._field
			},
			{
				name: 'Select',
				key: 'opponentTwo',
				fields: this._field
			},
			{
				name: 'Select',
				key: 'opponentThree',
				fields: this._field
			}
		]
	});

	modesForm: FormInterface = this._form.getForm('modeForm', {
		formId: 'modeForm',
		title: 'Mode',
		components: [
			{
				name: 'Select',
				key: 'mode',
				fields: [
					{
						name: 'Placeholder',
						value: 'Enter mode...'
					},
					{
						name: 'Label',
						value: 'Mode'
					},
					{
						name: 'Items',
						value: brawlModes
					}
				]
			}
		]
	});

	role: Record<string, string> = {};

	suggestedBrawls: Brawl[] = [];

	constructor(private _form: FormService) {
		for (const brawl of brawlers) {
			this.role[brawl.Name] = brawl.Role;
		}
	}

	calculateBrawls() {
		this.brawlers.splice(0, brawlers.length);

		this.brawlers.push(
			...brawlers.filter((b) => {
				for (const field of this._fields) {
					if (b.Name === this.submition[field]) return false;
				}

				return true;
			})
		);

		this.mineForm.components[0].hidden = !!this.submition['mineOne'];
		this.mineForm.components[1].hidden = !!this.submition['mineTwo'];
		this.mineForm.components[2].hidden = !!this.submition['mineThree'];
		this.opponentForm.components[0].hidden = !!this.submition['oppoentOne'];
		this.opponentForm.components[1].hidden = !!this.submition['oppoentTwo'];
		this.opponentForm.components[2].hidden =
			!!this.submition['oppoentThree'];
	}

	reset() {
		this.submition = {};
	}

	private _fields = [
		'mineOne',
		'mineTwo',
		'mineThree',
		'oppoentOne',
		'oppoentTwo',
		'oppoentThree'
	];
}
