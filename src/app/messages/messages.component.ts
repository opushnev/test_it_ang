import { Component, EventEmitter, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import {MessagesService} from '../messages.service'
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers:[MessagesService]
})
export class MessagesComponent implements OnInit {
Msg:any;
msgout:any='';
Search:any='';
  constructor(private MessagesService:MessagesService) { }
   ngOnInit(): void {
    this.MessagesService
    .getMessagesAll()
    .subscribe(d=>{
      this.Msg=d
    })
  }
  MessagesSearch=()=>{
    this.MessagesService.getMessagesSearch(this.Search)
    .subscribe(d=>(this.Msg=d))
  }
  MessagesSend=()=>{
    if (this.msgout.length===0) return
    this.MessagesService.sendMessage(this.msgout)
    .subscribe(d=>{
      this.msgout='';
      this.ngOnInit();
       })
  }
  setSearch=(event:any)=>{
    this.Search=event.target.value;
    if (this.Search.length===0) this.MessagesSearch()
  }
  setSend=(event:any)=>{
    this.msgout=event.target.value;
  }
}
