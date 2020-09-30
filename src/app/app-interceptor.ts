import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4MTMwOTY5MzU1IiwiaWF0IjoxNjAxNDc2NTkyLCJleHAiOjE2MDE0ODU1OTIsInBobnVtYmVyIjoiODEzMDk2OTM1NSIsInVzZXJUeXBlIjoiSEVBTFRIIFdPUktFUiJ9.hPLWtyFnAzJBL6awbUNVQBHbGyV-serGP3WfymqOAnhjpPcgpj2m6BeK7l6UPeyecdxIZavS5QWsfE92fRK49A`
            }
        });

        return next.handle(request);
    }
}