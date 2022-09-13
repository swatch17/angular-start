import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  OnInit(): void {
    console.log('OnInit');
  }
  OnChanges(): void {}
  DoCheck(): void {}
  AfterContentInit(): void {}
  AfterContentChecked(): void {}
  AfterViewInit(): void {}
  AfterViewChecked(): void {}
  OnDestroy(): void {}
}
