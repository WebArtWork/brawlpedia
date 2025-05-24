import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { BrawlerComponent } from './brawler.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: ':Brawler',
		component: BrawlerComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [BrawlerComponent]
})
export class BrawlerModule {}
