import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageTranslationService } from '../../core/services/language-translation.service';

import { SharedModule } from '../../Shared/shared.module';


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{
  name :string|any
  id :string|any
  constructor(
    private translate :TranslateService,
    private translationService: LanguageTranslationService
  ) { }

  ngOnInit() {
    this.loadTranslations('test', 'en');
    console.log("test work");
  }
  loadTranslations(folderName: string, lang: string) {
    const loader = this.translationService.getTranslationLoader(folderName);
    this.translationService.useLoaderForLanguage(loader, lang);
  }
}
