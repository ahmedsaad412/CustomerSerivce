import { inject, Injectable, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService implements OnInit {
  translateService = inject(TranslateService);
   ngOnInit(): void {
    this.translateService.addLangs(['ar', 'en']);
   }
   SetDefaultLanguage(lang :string) :void{
    this.translateService.setDefaultLang(lang)
  }
}
