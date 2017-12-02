import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  @Input() color: string;

  constructor(private element: ElementRef) {
    console.log(element);
  }



  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseover') onmouseover() {
    this.element.nativeElement.style.backgroundColor = "green";
  }

  @HostListener('mouseout') onmouseout() {
    this.element.nativeElement.style.backgroundColor = "red";
  }
}