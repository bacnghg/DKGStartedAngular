import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `
      <div>
        <h1>{{ title }}</h1>
        <div>My First Component</div>
        <pm-products></pm-products>
      </div>
    `
})
export class AppComponent{
  title: string = "A hello Angular App";
  courses=["Course 1", "Course 2", "Course 3"];
}