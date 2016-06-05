'use strict';

import * as Rx from 'rx';
import { Service } from '../../shared/angular/decorators';

@Service('HeaderService')
export class HeaderService {

  private title: Rx.BehaviorSubject<any>;
  
  constructor() {
    this.title = new Rx.BehaviorSubject('Fundabitat');
  }

  setTitle(title: string) {
    this.title.onNext(title);
  }
  
  getTitleEvents() {
    return this.title;
  }
}