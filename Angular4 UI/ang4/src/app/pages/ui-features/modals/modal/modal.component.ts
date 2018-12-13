import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';

import 'style-loader!angular2-toaster/toaster.css';
@Component({
  selector: 'ngx-modal',
  template: `
    <div class="modal-header">
      <span>{{ modalHeader }}</span>
      <button class="close" aria-label="Close" (click)="closeModal()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
   
    <div class="row">
  <div class="col-lg-12">
    <nb-card>
     
      <nb-card-header>Create New Database</nb-card-header>
      <nb-card-body>
      <form>
        <div class="input-group">
          <input type="text" [(ngModel)] = "dbnames" name="dbnames" placeholder="Enter New DataBase Name " class="form-control"/>
        </div>
       <br>
       <button class="btn btn-primary" (click)="createDB()">Create NewDatabase</button>
       <button class="btn btn-primary" (click)="makeToast()">Make Toast</button>
       </form>
      </nb-card-body>
    </nb-card>

    
    
  </div>

  
</div>

    
          
    </div>
    <div class="modal-footer">
      <button class="btn btn-md btn-primary" (click)="closeModal()">Save changes</button>
    </div>
  `,
})
export class ModalComponent {
  collection:any
  modalHeader: string;
  collection_details:boolean
  view_collecion:any
  dbnames : String

ngOnInit(){
  // this.getcollection()
  this.collection_details = false
  
}
  constructor(private activeModal: NgbActiveModal,private api:ApiService,private toasterService: ToasterService) { }
  config: ToasterConfig;

  position = 'toast-top-right';
  animationType = 'fade';
  title = 'HI there!';
  content = `I'm cool toaster!`;
  timeout = 5000;
  toastsLimit = 5;
  type = 'default';
  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;
  closeModal() {
    this.activeModal.close();
  }

  //get collection by calling the dbame  from localstorage 
  
  

  createDB(){
    const details = ({
      DB:this.dbnames
    })
    this.api.createDB(details).subscribe(data=>{
  console.log(data)
    })
  }
  makeToast() {
    this.showToast(this.type, this.title, this.content);
  }
  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: this.position,
      timeout: this.timeout,
      newestOnTop: this.isNewestOnTop,
      tapToDismiss: this.isHideOnClick,
      preventDuplicates: this.isDuplicatesPrevented,
      animation: this.animationType,
      limit: this.toastsLimit,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: this.timeout,
      showCloseButton: this.isCloseButton,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }
}
