import { ChangeDetectionStrategy, Component, ContentChild, TemplateRef } from "@angular/core";
import { TabViewService } from "../tab-view.service";
import { TabContentLazyDirective } from "./tab-content-lazy.directive";

@Component({
  selector: 'tab-content',
  template: `
  <ng-container *ngIf="tabViewService.isActivated$ | async">
    <ng-container *ngTemplateOutlet="contentTemplate ? contentTemplate : defaultContentTemplate"></ng-container>
  </ng-container>
  <ng-template #defaultContentTemplate><ng-content></ng-content></ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabContentComponent {
  @ContentChild(TabContentLazyDirective, { read: TemplateRef, static: true })
  public contentTemplate: TemplateRef<any>;

  constructor(public tabViewService: TabViewService) { }
}