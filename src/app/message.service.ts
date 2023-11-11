import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Router} from '@angular/router';
import {ConfigService} from './config.service';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  

  loginData: any;
  logOutUrl: any;
  clientId: any;
  orgnId: any;
  loginname: any;

  private rowSubject = new Subject<any>();
  private afterDeleteSubject = new Subject<any>();
  private totalDataSubject = new Subject<any>();
  private gridSubject = new Subject<any>();




  MISSING_OPERATOR = 'Operator is missing';
  TOKEN_LOG_OUT = 'You are going to be logged out as another user logged in to the system';
  UPPER_LOWER_CHECK = 'New Password must contain a mix of Uppercase and Lowercase letters';
  NUMBER_SYMBOL_CHECK = 'New Password must contain at least one Number or Non-alphanumeric symbol (eg.!?&)';
  SPACE_CHECK = 'New Password cannot contain any Spaces';
  SAME_PASSWORD = 'New Password should not be same as Old Password';
  PASSWORD_PATTERN = 'Before creating anew password,please read the rules of a password';
  PASSWORD_CHANGED = 'To make sure your account\'s secure ,we can log you out of any other devices,you ' +
    'can log back in with your New Password';
  NEW_CONFIRM_PASS_ERROR = 'New Password and Confirm Password are not matched';
  WORKFLOW_ERROR = 'Workflow Not Found';
  BLANK_GROUP = 'Please Select Support Group';
  BLANK_SOURCE = 'Please select source value';
  BLANK_ERROR_MESSAGE = 'All the fields are mandatory';
  BLANK_ADDITIONAL = ' of additional fields are mandatory';
  BLANK_SCHEDULE_ERROR_MESSAGE = ' of schedule tab fields are mandatory';
  BLANK_PLAN_ERROR_MESSAGE = ' of plan of action tab fields are mandatory';
  SERVER_ERROR = 'Something went wrong. Please try again later';
  SEQUENCE_ERROR = 'Enter a valid sequence number';
  BLANK_ATTACHMENT = 'You need to attach a file before upload';
  INSERT_SUCCESS = 'Record inserted successfully';
  EDIT_SUCCESS = 'Record updated successfully';
  DELETE_SUCCESS = 'Record deleted successfully';
  PASSWORD_MISMATCH = 'Password and confirm password does not match';
  DELETE_PERMISSION = 'You do not have delete permission';
  EDIT_PERMISSION = 'You do not have edit permission';
  ADD_PERMISSION = 'You do not have add permission';
  VIEW_PERMISSION = 'You do not have view permission';
  CATEGORY_LEVEL_SEQ = 'Sequence number must be greater than 99';
  END_TIME_GREATERTHAN_START_TIME = 'End time must be greater than start time';
  SAME_PROPERTY_TYPE_ERROR = 'From Property type and to Property type can\'t be same';
  EMPTY_CONNECTION = 'Please create a connection with previous state at first.';
  PROCESS_DTL_NOT_SAVE = 'Please complete all the state details before proceeding';
  NO_PROCESS = 'No process selected. Please select the process first';
  BLANK_ASSET = 'Select any asset and then click add asset button';
  CATEGORY_ERROR = 'Enter all category Value';
  PRIORITY_ERROR = 'No priority Mapped';
  STATUS_ERROR = 'No Status Mapped';
  TERM_SUCCESS = 'Successfully Updated';
  TERM_DELETE = 'Successfully Deleted';
  ATTACH_ERROR = 'You Can Attach Only One File';
  WORKFLOW_ACTIVATE = 'Process Activated Successfully';
  SAME_USER = 'Group and user are already selected';
  BLANK_USER = 'Select user before proceeding';
  CHANGE_STATE = 'Change State before proceeding';
  WORKFLOW_END = 'You have reached End of Process. Please change state manually to move ahead';
  NO_CATALOG_CATEGORY = 'No category mapped with catalog';
  DUPLICATE_NODE = 'You can\'t add a node multiple time';
  MINIMUM_USER = 'You have to add at least one user.';
  NO_CREATE_URL = 'Create Ticket url not mapped.';
  CATALOG_ERROR = 'Please select catalog value from dashboard first.Then create ticket';
  PROCESS_CLEAR = 'Process Details is cleared now.';
  NO_TICKET_TYPE = 'No Ticket Type is mapped with this organization.';
  NO_TICKET_FOUND = 'No ticket found with this value';
  NO_STATUS_TICKET_FOUND = 'This ticket can\'t be attached as a child ticket';
  TICKET_FOUND = 'Ticket Details found with this value';
  TICKET_ATTACHED = 'Ticket Attached Successfully';
  PRIORITY_UPDATE = 'Priority Updated Successfully';
  CATEGORY_UPDATE = 'Category Updated Successfully';
  ADDITIONAL_UPDATE = 'Additional Field Updated Successfully';
  PLAN_UPDATE = 'Plan of Action tab Updated Successfully';
  SCHEDULE_UPDATE = 'Schedule tab Updated Successfully';
  REOPEN_MESSAGE = 'Do you want to Re-open Current Ticket ?\n\nNOTE : Please raise new ticket if you are reporting a different issue.';
  FILE_DELETE_ERROR = 'You don\'t have permission to delete this file';
  USER_CHANGE_MESSAGE = 'Ticket forwarded successfully';
  THEME_CHANGE = 'Your theme is changed now';
  SELF_ATTACHED = 'Self attachment is restricted';
  MAIL_SENT = 'Mail Sent successfully';
  BLANK_MAIL_IDS = 'Please enter Mail Ids';
  BLANK_MAIL_BODY = 'Please enter Mail Body';
  ADD_EFFORT_NOTIFICATION_MESSAGE = 'Please update your efforts if not updated already!';
  COMMENT_SUCCESS = 'Comment Added successfully';
  ADD_EFFORT = 'Effort added successfully';
  ATTACH_SUCCESSFULL = 'File attached successfully';
  BLANK_TICKET = 'Please select atleast one ticket before attaching';
  DATA_ALREADY_EXIST = 'Value already added';
  SELF_ATTACHMENT = 'Please assign yourself first';
  BLANK_LOCATION = 'Please enter location value';
  BLANK_MOBILE = 'Please enter mobile number';
  WRONG_PERCENTAGE = 'Percentage should be within 0 to 100';
  SAME_ORGANIZATION = 'From Organization and to organization can\'t be same';
  SAME_TICKET_TYPE_ERROR = 'From Ticket type and to ticket type can\'t be same';
  DOWNLOAD_SUCCESS = 'Download successfully';
  FILTER_SAVED = 'Filter saved successfully';
  FILTER_DELETE = 'Filter deleted successfully';
  ENDDATE_GREATER = 'Enddate must be greater than or equal to start date';
  ASSET_UPDATE = 'Asset updated successfully';
  SELECT_ORG = 'Filter conditions not selected';
  SELECT_FILTER = 'Please select filter before save';
  SELECT_HEADER = 'Please select header before submit';
  ADD_QUERY = 'Please add another query';
  ASSET_COPY = 'You are creating a new CI/Asset similar to the selected one. Please click OK to confirm else click CANCEL button.';
  BLANK_SHORT = 'Short Description can\'t be blank';
  BLANK_LONG = 'Long Description can\'t be blank';
  DUPLICATE_LINK = 'Ticket Already linked.';
  TICKET_LINK = 'Ticket Linked Successfully';
  NO_GROUP = 'No Support Group mapped with this organization';
  MIN_ORG = 'You must select at least one organization';
  MIN_GRP = 'You must select at least one support group';
  SUPPORT_GROUP_UPDATE_SUCCESS = 'Default support group updated successfully';
  ASSET_DELETE = ' You are about to delete/detach the selected CI from ticket. Please click OK to confirm or Cancel';
  ASSET_SUCCESS = 'Selected CI attached to the ticket successfully';
  CATEGORY_SAVE = 'Please change a category value before submitting it.';
  RESET_PASSWORD_MISMATCH = 'New Password and Confirm Password are not same';
  OTP_SEND_MESSAGE = 'An OTP is send to your  email that is registered with this organization';
  RESET_PASSWORD = 'Password changed successfully. Try to login with your new password.';
  offset: any;
  limit: any;
 constructor(private route: Router, private config: ConfigService, private sanitizer: DomSanitizer) {
  }

  logOut() {
    this.clearSession();
    window.location.href = this.logOutUrl;
  }

  clearSession() {
    // sessionStorage.removeItem('id');
    // sessionStorage.removeItem('data');
    // sessionStorage.removeItem('grp');
    sessionStorage.clear();
  }
  sendAfterDelete(id: any) {
    this.afterDeleteSubject.next(id);
  }


  isBlankField(data: any) {
    let isBlank = false;
    const keys = Object.keys(data);
    // console.log(JSON.stringify(keys));
    for (let i = 0; i < keys.length; i++) {
      let stringVal;
      let numberVal;
      if (typeof data[keys[i]] === 'string') {
        stringVal = data[keys[i]].trim();
      }
      if (typeof data[keys[i]] === 'number') {
        numberVal = data[keys[i]];
      }
      if (stringVal === '' || numberVal === 0) {
        isBlank = true;
        break;
      }

    }
    return isBlank;
  }

  setRow(row: any) {
    this.rowSubject.next(row);
  }
  getRow(): Observable<any> {
    this.rowSubject = new Subject<any>();
    return this.rowSubject.asObservable();
  }
  getUserId() {
    return sessionStorage.getItem('id');
  }

  getToken() {
    return sessionStorage.getItem('data');
  }
  setLoginData(data: any) {
    sessionStorage.setItem('loginData', JSON.stringify(data));
  }


 



  addSessionData(id:any, token:any) {
    sessionStorage.setItem('id', id);
    this.setToken(token);
  }

  setToken(token:any) {
    sessionStorage.setItem('data', token);
  }

  setTotalData(data: number) {
    this.totalDataSubject.next(data);
  }

  setGridData(data: any) {
    this.gridSubject.next(data);
  }

}
