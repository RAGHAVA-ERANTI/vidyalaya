import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';

import { NotifierService } from './notifier.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  userId: any;
  loginname: any;
  code: any;
  password: any;

  
  constructor(private messageService: MessageService, private notifier: NotifierService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const id = Number(this.messageService.getUserId());
    const token = this.messageService.getToken();
    // console.log('req.url====' + request.url);
    const login = '/login';
    const generatetoken = '/generatetoken';
    const validateusertoken = '/validateusertoken';
    const geturlbykey = '/geturlbykey';
    const sendotp = '/sendOTP';
    const forgetpassword = '/forgetPassword';
    if (request.url.search(sendotp) === -1 && request.url.search(forgetpassword) === -1 && request.url.search(geturlbykey) === -1 && request.url.search(login) === -1 && request.url.search(validateusertoken) === -1 && request.url.search(generatetoken) === -1) {
      // let userId;
      let newParams = new HttpParams({ fromString: request.params.toString() });
      if (request.method === 'GET') {
        newParams = newParams.append('userid', id + '');
      }

      if (request.method === 'POST') {
        request = request.clone({ body: { ...request.body, userid: id } });
      }
      if (token !== null && token !== undefined) {
        request = request.clone({
          setHeaders: {
            Authorization: token as string,
            // Other headers...
          },
          params: newParams
        });
      }
      
    }
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        // console.log(event);
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
          // console.log(event.headers);
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.notifier.notify('error', this.messageService.TOKEN_LOG_OUT);
            setTimeout(() => {
              this.messageService.logOut();
            }, 10 * 1000);
          }
        }
      })
    );
  }
}
