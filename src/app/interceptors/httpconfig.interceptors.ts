import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headerName = 'X-XSRF-TOKEN';
    // if (!token) {
    //       return next.handle(req);
    //     }

    req = req.clone({ headers: req.headers.set(headerName, 'Vg2b8RRUtIOzl9vnNLARZkH8uc35PI3wcMdRR0bh') });
    return next.handle(req);
  }
}
