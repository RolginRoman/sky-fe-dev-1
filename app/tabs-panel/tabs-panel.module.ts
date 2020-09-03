import { NgModule } from "@angular/core";
import { TabComponent } from "./tab/tab.component";
import { TabTitleComponent } from "./tab/tab-title/tab-title.component";
import { TabContentComponent } from "./tab/tab-content/tab-content.component";
import { TabsComponent } from "./tabs/tabs.component";
import { CommonModule } from "@angular/common";
import { TabContentLazyDirective } from "./tab/tab-content/tab-content-lazy.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TabsComponent,
    TabComponent,
    TabTitleComponent,
    TabContentComponent,
    TabContentLazyDirective
  ],
  exports: [TabsComponent, TabComponent, TabTitleComponent, TabContentComponent, TabContentLazyDirective]
})
export class TabsPanelModule {}
