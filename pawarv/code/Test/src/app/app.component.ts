import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef
} from '@angular/core';
import { SharkDirective } from './shark.directive';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  extraCreature!: string;

  @ViewChild(SharkDirective)
  set appShark(directive: SharkDirective) {
    // this.extraCreature = directive.creature;
    // this.extraCreature ="Test";

  };

  @ViewChild('someInput') someInput!: ElementRef;

  @ViewChild(TestComponent) testComponent!: TestComponent;

  ngAfterViewInit() {
    console.log(this.extraCreature); // Dolphin
    // this.someInput.nativeElement.value = 'Whale!';
    // console.log(this.testComponent.yourName());

  }
}
