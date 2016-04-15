/// <reference path="node_modules/angular2/typings/browser.d.ts" />

import {bootstrap} from 'angular2/platform/browser';
import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'app',
  template: `
    <main>
      <h1>!</h1>
      <form (submit)="go(msg)">
        <input type="text" [(ngModel)]="msg" />
        <button type="submit">go!</button>
      </form>

      <div>
        <ul>
          <li *ngFor="#m of msgs">{{m}}</li>
        </ul>
      </div>
    </main>
  `
})
export class AppCmp implements OnInit {
  msgs: string[] = [];
  ws: WebSocket = new WebSocket('ws://127.0.0.1:1307/uws');

  ngOnInit() {
    this.ws.onmessage = ({data}) => {
      this.msgs.push(data);
    }
  }

  go(msg: string) {
    this.ws.send(msg);
  }
}

bootstrap(AppCmp);
