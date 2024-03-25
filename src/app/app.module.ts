import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';

@NgModule({
	declarations: [
		AppComponent,
		EventCalendarComponent
	],
	imports: [
		BrowserModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
