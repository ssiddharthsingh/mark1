import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mark1';

  sum() {
    var a:any = document.getElementById("fid");
    var b:any = document.getElementById("sid")
    // a.value
    document.getElementById("result").innerHTML = a.value + b.value;

  }
}
