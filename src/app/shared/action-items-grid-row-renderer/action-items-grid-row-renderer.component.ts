import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';


@Component({
  selector: 'app-delete-grid-row-renderer',
  templateUrl: './action-items-grid-row-renderer.component.html',
  styleUrls: ['./action-items-grid-row-renderer.component.scss']
})
export class ActionItemGridRowRendererComponent implements ICellRendererAngularComp {
    
  public params: any;
  public deleteRequired;
  public copyRequired;

  agInit(params: any): void {
    this.params = params;
    this.deleteRequired = params.deleteRequired
    this.copyRequired = params.copyRequired
  }
  constructor() { }
  refresh(): boolean {
    return true;
  }

  performAction($event) {
    if (this.params.onClick instanceof Function) {
      const paramsAndEvent = {
        event: $event,
        action: $event.currentTarget.value,
        params: this.params
      }
      this.params.onClick(paramsAndEvent);
    }
  }
}
