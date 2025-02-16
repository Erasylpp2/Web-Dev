import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/k.config';
import { AppComponent } from './app/k.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
