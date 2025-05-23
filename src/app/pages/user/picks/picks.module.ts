import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { PicksComponent } from './picks.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: PicksComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [PicksComponent]
})
export class PicksModule {}
