import { Component, OnInit } from '@angular/core';
import { AppSettingsService, BankSetting } from 'ngx-iban-nicaragua';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'iban-nicaragua-app';
  iban = 'iban-account';
  bankList: any;

  constructor(private bankService: AppSettingsService) {

  }

  ngOnInit(): void {
    this.bankService.getSettings().subscribe(
      (settings: BankSetting) => {
        this.bankList = settings.banks;
      }
    );
  }



  copyText() {
    navigator.clipboard.writeText(this.iban);
  }
}
