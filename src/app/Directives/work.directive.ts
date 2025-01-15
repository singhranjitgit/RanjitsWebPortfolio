import { Directive, HostBinding, Input, OnInit } from '@angular/core'
 
@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective implements OnInit {

  @Input() appHighLight = ''

  @HostBinding('style.background')background:  any;
 
  ngOnInit() {
    this.background = this.appHighLight
  }
 
}