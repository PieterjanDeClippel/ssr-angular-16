import { Component, Inject } from '@angular/core';
import { MESSAGE } from './providers/message.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject(MESSAGE) message: string) {
    this.title = message;
  }

  title = 'ClientApp';
}
