import 'zone.js/node';
import 'reflect-metadata';
import { renderModule } from '@angular/platform-server';
import { APP_BASE_HREF } from '@angular/common';
import { enableProdMode, StaticProvider } from '@angular/core';
import { createServerRenderer } from 'aspnet-prerendering';
import { AppServerModule } from './app/app.server.module';
import { MESSAGE } from './app/providers/message.provider';
export { AppServerModule } from './app/app.server.module';

enableProdMode();

export default createServerRenderer(params => {
  const providers: StaticProvider[] = [
    { provide: APP_BASE_HREF, useValue: params.baseUrl },
    { provide: MESSAGE, useValue: 'Hello from server' },
  ];

  const options = {
    document: params.data.originalHtml,
    url: params.url,
    extraProviders: providers
  };

  // Bypass ssr api call cert warnings in development
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0";

  const renderPromise = renderModule(AppServerModule, options);

  return renderPromise.then(html => ({ html }));
});
