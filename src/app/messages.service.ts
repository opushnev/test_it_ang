import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class MessagesService {
private API_URL='http://localhost:9500/messages'
  constructor(private http:HttpClient) { }

  public getMessagesAll(){
    return this.http.get(this.API_URL)
  }
  public getMessagesSearch(d:string){
    return this.http.get(this.API_URL+'/'+d)
  }

  public sendMessage(d:string){
   return this.http.post(this.API_URL, ({'msg': d}));
  }

}
