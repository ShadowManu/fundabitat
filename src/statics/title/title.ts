'use strict';

import * as Rx from 'rx';
import { Service } from '../../shared/angular/decorators';

@Service('TitleService')
export class TitleService {

  private subject: Rx.BehaviorSubject<any>;
  
  constructor() {
    this.subject = new Rx.BehaviorSubject('Fundabitat');
  }

  setTitle(title: string) {
    this.subject.onNext(title);
  }
  
  getTitleChanges() {
    return this.subject;
  }
}