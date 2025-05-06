export interface TitleInterface {
  title: Signal<string>;
}

import { InjectionToken, Signal } from '@angular/core';

export const TITLE_COMPONENT = new InjectionToken<TitleInterface>(
  'title.component'
);
