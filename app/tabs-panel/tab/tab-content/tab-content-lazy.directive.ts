import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: '[tabContentLazy]'
})
export class TabContentLazyDirective {
    constructor(public template: TemplateRef<any>) { }
}