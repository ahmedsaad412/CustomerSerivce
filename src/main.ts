import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  // bootstrapApplication(AppComponent, appConfig)
  // .then((result) => {
  //   console.log('Application bootstrapped successfully:', result);
  // })
  // .catch((err) => {
  //   console.error('Error bootstrapping application:', err);
  // });
