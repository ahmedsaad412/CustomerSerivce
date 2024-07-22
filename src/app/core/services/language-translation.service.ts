import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageTranslationService {

  constructor(private translate: TranslateService, private http: HttpClient) { }
  folderName :string|any
  getTranslationLoader(folderName: string): TranslateLoader {
    this.folderName=folderName
    return new TranslateHttpLoader(this.http, `./assets/i18n/${folderName}/`, '.json');
  }

  useLoaderForLanguage(loader: TranslateLoader, lang: string) {
    this.translate.setTranslation(lang, loader);
    this.translate.use(lang).subscribe(() => {
      console.log(`Translations loaded for ${lang} from folder: ${this.folderName}`);
    });
  }
}
