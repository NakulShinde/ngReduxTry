import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { postReducer } from './reducers/post.reducer';
import { deviceReducer } from './reducers/device.reducer';
import { selectedDeviceReducer } from './reducers/selected-device.reducer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ 
    	post: postReducer, /// <--- add reducer here
      device: deviceReducer,
      selectedDevice: selectedDeviceReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };
