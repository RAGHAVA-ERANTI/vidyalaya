import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8' })
};
const httpOptions1 = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  responseType: 'blob' as 'blob'
};



@Injectable({
  providedIn: 'root'
})
export class RestApisService {
  httpClient: any;


  

  constructor(private http: HttpClient, private config: ConfigService) {
    this.httpClient = http;
  }

  apiRoot = this.config.apiRoot;
  recordRoot = this.config.recordRoot;
  faqRoot = this.config.faqRoot;
  cateUploadRoot = this.config.cateUploadRoot;
  assetRoot = this.config.assetUploadRoot;
  emailRoot = this.config.emailUploadRoot;
  userRoot = this.config.userUploadRoot;
  messageRoot = this.config.messageRoot;
  locationRoot = this.config.locationRoot;
  dataRoot = this.config.dataRoot;
  reportRoot = this.config.reportRoot;
  monitorRoot = this.config.monitorRoot;
}
