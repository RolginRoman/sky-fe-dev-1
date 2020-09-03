import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: 'tab-title',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabTitleComponent {}