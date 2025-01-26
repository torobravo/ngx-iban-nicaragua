import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  constructor(private http: HttpClient) { }

  getSettings(): Observable<BankSetting> {
    return this.http.get<BankSetting>('/assets/appsettings.json')
            .pipe(
              catchError(this.handleError)
            )
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
  
}

export interface BankSetting {
  banks: [{
    bankCode: string,
    bankName: string,
    shortName: string
  }]
}
