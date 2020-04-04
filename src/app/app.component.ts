import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from "./service/appareil.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes: number;
  counterSub: Subscription;

  constructor(){}

  ngOnInit(){
    const counter = Observable.interval(1000);
    this.counterSub = counter.subscribe(
      (value: number) => {
        this.secondes = value;    }
    );

  }

ngOnDestroy(){
  this.counterSub.unsubscribe();
}

}
