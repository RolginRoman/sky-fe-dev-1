import { ChangeDetectionStrategy, Component, ContentChild, TemplateRef } from "@angular/core";
import { TabViewService } from "../tab-view.service";
import { TabContentLazyDirective } from "./tab-content-lazy.directive";

@Component({
  selector: 'tab-content',
  templateUrl: 'tab-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabContentComponent {
  @ContentChild(TabContentLazyDirective, { read: TemplateRef, static: true })
  public contentTemplate: TemplateRef<any>;

  constructor(public tabViewService: TabViewService) { }
}