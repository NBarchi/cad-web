import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]'
})
export class AnimateOnScrollDirective implements AfterViewInit, OnDestroy {


  private observer!: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) { }

  ngAfterViewInit(){
    this.observer = new IntersectionObserver((entries) =>{
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          console.log(entry.target)
          entry.target.classList.add("show")
        }else{
          entry.target.classList.remove("show")
        }
      });
    }, {});

    this.observer.observe(this.el.nativeElement);

  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

}
