import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse
} from "@angular/common/http";
import {catchError, map, Observable, of, take, throwError} from "rxjs";
import Swal from "sweetalert2";
import {environment} from "../environments/environment";
import {Router} from "@angular/router";

export class HeaderInterceptor implements HttpInterceptor {
  todayISOString : string = new Date().toISOString();
  constructor(private router: Router) {
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {

    // handle your auth error or rethrow
    if (err.status === 401 || err.status === 403) {
      {
        Swal.fire({icon: 'error', text: 'توکن منقضی شده است!'}).then(x => {
          if (x.isConfirmed)
            this.router.navigate([''])

        })
        return of(err.message);
      }
    }
    return throwError(err);

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string | null = localStorage.getItem('token');

    request=request.clone({url:environment.apiUrl + request.url})
    if (token) {
      request = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)});
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
    }

    request = request.clone({headers: request.headers.set('Accept', 'application/json')});

    return next.handle(request).pipe(
      catchError(x => this.handleAuthError(x)),
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      })
    )
  }
}
