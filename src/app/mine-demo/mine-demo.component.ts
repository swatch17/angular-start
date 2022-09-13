import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mine-demo',
  templateUrl: './mine-demo.component.html',
  styleUrls: ['./mine-demo.component.scss'],
})
export class MineDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleButton(value:string): void {
    console.log('点击值',value)
  }
}
