import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService{
  constructor() { }
  selectedID: string;
  setSelectedID(id: string)
  {
    this.selectedID = id;
  }
  getSelectedID(){
    return this.selectedID;
  }
}
