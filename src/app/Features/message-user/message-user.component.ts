import { Component, OnInit ,TemplateRef} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {BsModalService ,BsModalRef} from "ngx-bootstrap/modal"

@Component({
  selector: 'app-message-user',
  templateUrl: './message-user.component.html',
  styleUrls: ['./message-user.component.scss']
})
export class MessageUserComponent implements OnInit {

  modalRef : BsModalRef;
  isOpened:false;
  myForm = new FormGroup({
    message : new FormControl("" , Validators.required)
  });
  constructor(private modalService :BsModalService) { }

  ngOnInit() {
  }
  public openModal(template:TemplateRef<any>)
  {
    this.modalRef=this.modalService.show(template);
  }
  sendMessage()
  {

  }

}
