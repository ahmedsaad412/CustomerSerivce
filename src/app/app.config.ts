// import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
// import { HttpClient, provideHttpClient } from '@angular/common/http';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }),
//     provideRouter(routes),provideHttpClient() , importProvidersFrom(TranslateModule.forRoot({
//       loader:{
//         provide:TranslateLoader,
//         useFactory:HttpLoaderFactory,
//         deps:[HttpClient]
//       },
//       defaultLanguage:'en'
//     }))]
// };
// export function HttpLoaderFactory(http: HttpClient) {
//  return new TranslateHttpLoader(http,'./assets/translation/','.json');
// }
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { AppTranslateModule } from './modules/app-translate.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes) ,importProvidersFrom(HttpClientModule) ,importProvidersFrom(AppTranslateModule.forRoot())]
};
