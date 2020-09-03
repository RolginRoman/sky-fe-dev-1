import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit {
  ngOnInit() {}
}