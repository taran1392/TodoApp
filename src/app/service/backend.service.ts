import { Injectable } from '@angular/core';
import {Todo} from '../data-models'

@Injectable()
export class BackendService {

  todos:Array<Todo>= [
    {id: '1', text: 'Some work to do', completed: false},
    {id: '2', text: 'Write Code', completed: false},
    {id: '3', text: 'Read Book', completed: true}
  
  ]
  constructor() { }


}
