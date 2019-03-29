import { Component, OnInit,Output, EventEmitter,Input, SimpleChanges } from '@angular/core';
import { window } from 'rxjs/operators';
import { debug } from 'util';
import { ActionItemGridRowRendererComponent } from '../../shared/action-items-grid-row-renderer/action-items-grid-row-renderer.component';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  
  defaultColDef:any;
  sampleData = [];
  sampleGridDef: any[];
  sampleGridContext: any;
  sampleGridFrameworkComponents: any;
  sampleGridApi: any;
  getSampleRowNodeId:any;
  gridLength = 0;
  pivotPanelShow: any;
  paginationPageSize: any;
  paginationNumberFormatter: any;
  

  constructor() {
    this.pivotPanelShow = "always";
    this.paginationPageSize = 100;
    this.paginationNumberFormatter = function (params) {
      return "[" + params.value.toLocaleString() + "]";
    };
    
    this.defaultColDef = {
      cellStartedEdit: true
    };

    this.sampleGridDef = [
      {
        headerName: 'rowNumber', field: 'rowNumber'
      },
      {
        headerName: '', field: 'delete', width: 50, cellRenderer: "actionRowRendererComponent",
        cellRendererParams: {
          onClick: this.performGridActionItem.bind(this),
          deleteRequired: true,
          copyRequired: false
        }
      },
	    {
        headerName: 'Name', field: 'name'
      }
    ]
    this.sampleGridContext = { componentParent: this };
    this.sampleGridFrameworkComponents = {
      actionRowRendererComponent: ActionItemGridRowRendererComponent
    };
    
    this.getSampleRowNodeId = function (data) {
      return data.rowNumber;
    }

  }

  ngOnInit() {
  }

  sampleGridReady(params) {
    this.sampleGridApi = params.api;
  }

  buildNewRowObject(type: string) {
      var sampleTempData = {
        rowNumber: this.rowCounter++,
		    name: "Tom's another brother"
      };
      return sampleTempData;
  }
  
  insertNewRow() {
        var newItem = [this.buildNewRowObject(this.isEnteredIPNLotType)];
          this.sampleGridApi.updateRowData({ add: newItem });
        this.gridLength = this.gridLength + 1;
  }
  
  performGridActionItem(params) {
    if (params.event.currentTarget.value == 'delete') {
      this.deleteGridRow(params);
    } else if (params.event.currentTarget.value == 'copy') {
      this.copyGridRow(params);
    }      
  }
  
  private deleteGridRow(params: any) {
    var selectedData = params.params.data;
    params.params.api.updateRowData({ remove: [selectedData] });
    this.gridLength = this.gridLength - 1;
  }
  
  private copyGridRow(params: any) {
      var sampleTempData = {
            rowNumber: this.rowCounter++,
			      name: params.params.data.name
        };
    params.params.api.updateRowData({ add: [sampleTempData] });
  }
    
}



