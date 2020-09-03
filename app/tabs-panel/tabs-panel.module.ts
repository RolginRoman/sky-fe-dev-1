import { NgModule } from "@angular/core";
import { TabComponent } from "./tab/tab.component";
import { TabTitleComponent } from "./tab/tab-title/tab-title.component";
import { TabContentComponent } from "./tab/tab-content/tab-content.component";
import { TabsComponent } from "./tabs/tabs.component";

@NgModule({
  declarations: [
    TabsComponent,
    TabComponent,
    TabTitleComponent,
    TabContentComponent
  ],
  exports: [TabsComponent, TabComponent, TabTitleComponent, TabContentComponent]
})
export class TabsPanelModule {}
