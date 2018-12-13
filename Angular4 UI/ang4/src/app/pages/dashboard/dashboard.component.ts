import { Component } from '@angular/core';
import {ApiService} from '../../services/api.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from '../../pages/ui-features/modals/modal/modal.component';


@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  database_no:any
  databases:any
  totalsize:any
  collection:any
  level:any
  view_collection:any
  constructor(private api:ApiService,private modalService: NgbModal,){
   
  }
  

  keys: string[]=[]; 
  ngOnInit(){
    this.level = 0
this.getdb()
  }
  //function to connect t api to get alll databaes 
  getdb(){
    this.api.getdatabases().subscribe(data=>{
      console.log(data)
      this.database_no= data.databases.length
      this.databases = data.databases
      this.totalsize = data.totalSize
    })
  }
  showLargeModal() {
    //save dbname on local storage to be used when the modal is initialized
    
     const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
  }
  getcollection(dbname){
    localStorage.setItem('DB',dbname)
    this.level = 1
    const db_name = dbname
    const details = ({
     DB:db_name
 })
 console.log(details)
 this.api.getcollections(details).subscribe(data=>{
  this.collection = data
  console.log(data)
 })
   }
   back(){
     this.level = 0
   }
   back1(){
    this.level = 1
  }
   viewcollections(x){
     this.level = 2
    const DB = localStorage.getItem('DB')
    const collections = x
    const details = ({
      DB:DB,
      collection:collections
    })
    console.log(details)
     this.api.viewcollections(details).subscribe(
     data=>{
        console.log(data)
        this.view_collection= data
         this.keys= Object.keys(this.view_collection[0])
       console.log(this.keys)
      }
    )
  
  }
  delete(xx){
   var x = confirm("Are You Sure You Want To delete " + xx + " database")
    if(x)
     { 
      const details = ({
        DB:x
      })
      console.log(details)
      // this.api.deleteDB(details).subscribe(data=>{
      //   console.log(data)
      // })
    }
    else
   {console.log("not delted")}
  }
}
