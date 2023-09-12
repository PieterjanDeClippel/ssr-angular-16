import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { StaticProvider } from '@angular/core';

import { AppModule } from './app/app.module';
import { MESSAGE } from './app/providers/message.provider';

const providers: StaticProvider[] = [
  { provide: MESSAGE, useValue: 'Hello from client' },
]

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
