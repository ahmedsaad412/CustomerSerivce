import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sortIcon]',
  standalone: true
})
export class SortIconDirective{
  @Input('sortIcon') appSortIndicator: string|any;
  @HostBinding('class.bi-arrow-down')
  get isArrowDown() {
    return this.appSortIndicator === 'asc';
  }
  @HostBinding('class.bi-arrow-up')
  get isArrowUp() {
    return this.appSortIndicator === 'desc';
  }

  @HostBinding('class.bi-arrow-down-up')
  get isArrowUpDown() {
    return this.appSortIndicator !== 'asc' && this.appSortIndicator !== 'desc';
  }
  //3
// constructor(private elementRef :ElementRef ,private render : Renderer2){}
// @Input('sortIcon') appSortIndicator: string |any
// className :string |any
//   ngOnInit() :void{
//     switch(this.appSortIndicator){
//       case 'asc' :
//         this.className ='bi-arrow-down'
//         break ;
//       case 'desc' :
//         this.className ='bi-arrow-up'
//         break ;
//       default :
//         this.className ='bi-arrow-down-up'
//         break ;

//     }
//     this.render.removeClass(this.elementRef.nativeElement,'bi-arrow-down');
//     this.render.removeClass(this.elementRef.nativeElement,'bi-arrow-up');
//     this.render.removeClass(this.elementRef.nativeElement,'bi-arrow-down-up');

//     this.render.addClass(this.elementRef.nativeElement,this.className)
// }

  ////1
  // @Input('sortIcon') appSortIndicator: string |any; // Input to receive sort direction ('asc', 'desc')

  // @HostBinding('innerHTML') get indicator() {
  //   switch (this.appSortIndicator) {
  //     case 'asc':
  //       return '<i class="bi bi-arrow-down"></i>';
  //     case 'desc':
  //       return '<i class="bi bi-arrow-up"></i>';
  //     default:
  //       return '<i class="bi bi-arrow-down-up"></i>';
  //   }
  // }
  ///2


}


