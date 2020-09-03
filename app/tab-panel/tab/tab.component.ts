import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";

@Component({
  selector: 'tab',
  templateUrl: 'tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent implements OnInit {
  ngOnInit() {
  }
}