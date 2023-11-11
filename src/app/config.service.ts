import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  // type = 'STAGING';
  // apiRoot = 'http://4.188.225.177:8095/gyani';
  // faqRoot = 'http://4.188.225.177:8080/ifixDMApplication';
  // messageRoot = 'http://4.188.225.177:8087';
  // recordRoot = 'http://4.188.225.177:8083/recordapi';
  // API_ROOT = 'http://4.188.225.177:9000';
  // cateUploadRoot = 'http://4.188.225.177:8084/categories';
  // emailUploadRoot = 'http://4.188.225.177:8090/EmailTicketApi';
  // userUploadRoot = 'http://4.188.225.177:8088/users';
  // assetUploadRoot = 'http://4.188.225.177:8085/asset';
  // locationRoot = 'http://4.188.225.177:8093/locations';
  // dataRoot = 'http://4.188.225.177:8094/ifixtransport';
  // reportRoot = 'http://4.188.225.177:8098/reports';
  // socketRoot = 'http://4.188.225.177:6001';
  // monitorRoot = 'http://20.198.64.145:8084/ldapapi';
  // MAX_FILE_SIZE = 15 * 1024 * 1024;

  // type = 'STAGING';
  // apiRoot = 'https://staging.gyaaniworkbot.com/gyani';
  // faqRoot = 'https://staging.gyaaniworkbot.com/ifixDMApplication';
  // messageRoot = 'https://staging.gyaaniworkbot.com/message';
  // recordRoot = 'https://staging.gyaaniworkbot.com/recordapi';
  // API_ROOT = 'https://staging.gyaaniworkbot.com';
  // cateUploadRoot = 'https://staging.gyaaniworkbot.com/categories';
  // emailUploadRoot = 'https://staging.gyaaniworkbot.com/EmailTicketApi';
  // userUploadRoot = 'https://staging.gyaaniworkbot.com/users';
  // assetUploadRoot = 'https://staging.gyaaniworkbot.com/assets';
  // locationRoot = 'https://staging.gyaaniworkbot.com/locations';
  // dataRoot = 'https://staging.gyaaniworkbot.com/ifixtransport';
  // reportRoot = 'https://staging.gyaaniworkbot.com/reports';
  // socketRoot = 'https://staging.gyaaniworkbot.com/socket.io';
  // monitorRoot = 'http://20.198.64.145:8084/ldapapi';
  // MAX_FILE_SIZE = 15 * 1024 * 1024;


    type = 'STAGING';
  // type = 'LOCAL';
  apiRoot = 'http://20.204.74.38:8095/gyani';
  faqRoot = 'http://20.204.74.38:8080/ifixDMApplication';
  messageRoot = 'http://20.204.74.38:8087';
  recordRoot = 'http://20.204.74.38:8083/recordapi';
  API_ROOT = 'http://20.204.74.38:9000';
  cateUploadRoot = 'http://20.204.74.38:8084/categories';
  emailUploadRoot = 'http://20.204.74.38:8090/EmailTicketApi';
  userUploadRoot = 'http://20.204.74.38:8088/users';
  assetUploadRoot = 'http://20.204.74.38:8085/asset';
  locationRoot = 'http://20.204.74.38:8093/locations';
  dataRoot = 'http://20.204.74.38:8094/ifixtransport';
  reportRoot = 'http://20.204.74.38:8098/reports';
  socketRoot = 'http://20.204.74.38:6001';
  monitorRoot = 'http://20.198.64.145:8084/ldapapi';
  MAX_FILE_SIZE = 15 * 1024 * 1024;
}
