import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';

import { KeysPipe } from './KeysPipe';

import { Device, DeviceObj } from './models/device.model';
import { SelectedDeviceObj } from './models/selected-device.model';

import * as DeviceActions from './actions/device.actions';
import * as SelectedDeviceActions from './actions/selected-device.actions';

interface AppState {
  message: string;
  post: Post;
  device: Device;
  selectedDevice : SelectedDeviceObj;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  
  title = 'redux app1';
  
  selectedDevice : Observable<SelectedDeviceObj>;
  post: Observable<Post>;
  device: Observable<Device>

  text: string; /// form input val
  
  message$: Observable<string>
  
  constructor(private store: Store<AppState>) {
    this.selectedDevice = this.store.select('selectedDevice');
    this.post = this.store.select('post');
    this.device = this.store.select('device');
  }

  loadDevice(d) {
    this.store.dispatch(new SelectedDeviceActions.Add(d) );
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text) )
  }
  resetPost() {
    this.store.dispatch(new PostActions.Reset())
  }
  upvote() {
    this.store.dispatch(new PostActions.Upvote())
  }
  downvote() {
    this.store.dispatch(new PostActions.Downvote())
  }
  add() {
    this.store.dispatch(new DeviceActions.Add())
  }
  clear() {
    this.store.dispatch(new DeviceActions.Clear())
  }
  default() {
    this.store.dispatch(new DeviceActions.Default())
  }
/*  spanishMessage() {
    this.store.dispatch({type: 'SPANISH'})
  }
  
  frenchMessage() {
    this.store.dispatch({type: 'FRENCH'})
  }*/
}
