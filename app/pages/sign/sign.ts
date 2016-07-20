import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Slides} from 'ionic-angular';
import {waitRendered} from './util';


interface Letter {
  label : string;
  red : number;
  green : number;
  blue : number;
  bgcolor : string;
}

@Component({
  templateUrl: 'build/pages/sign/sign.html'
})
export class SignPage {

  @ViewChild('letterSlider') letterSlider : Slides;

  public letters : Letter[] = [
    {label: "F", red : 0, green : 0, blue : 0, bgcolor: "#000000"},
    {label: "O", red : 0, green : 0, blue : 0, bgcolor: "#000000"},
    {label: "R", red : 0, green : 0, blue : 0, bgcolor: "#000000"},
    {label: "G", red : 0, green : 0, blue : 0, bgcolor: "#000000"},
    {label: "E", red : 0, green : 0, blue : 0, bgcolor: "#000000"}
  ];

  constructor(private navController: NavController, private _elementRef:ElementRef) {
  }

  // Hack from https://github.com/GerritErpenstein/ionic2-slides-temp-fix/
  public ngOnInit() {
    let swiperContainer = this._elementRef.nativeElement.getElementsByClassName('swiper-container')[0];
      waitRendered(swiperContainer).then(()=>{
      let swiper = this.letterSlider.getSlider();
      swiper.update();
    });
  }

  public nextSlide() {
    this.letterSlider.slideNext();
  }

  public prevSlide() {
    this.letterSlider.slidePrev();
  }


  public setRed(newValue : number, i : number) {
    this.letters[i].red = newValue;
    this.letters[i].bgcolor = this.calculateColor(i);
  }
  public setGreen(newValue : number, i : number) {
    this.letters[i].green = newValue;
    this.letters[i].bgcolor = this.calculateColor(i);
  }
  public setBlue(newValue : number, i : number) {
    this.letters[i].blue = newValue;
    this.letters[i].bgcolor = this.calculateColor(i);
  }

  private componentToHex(c : number) : string {
    let hexColor : string = c.toString(16);
    return hexColor.length == 1 ? "0" + hexColor : hexColor;
  }


  private calculateColor(i : number) : string {
    return "#" + this.componentToHex(this.letters[i].red) + this.componentToHex(this.letters[i].green) + this.componentToHex(this.letters[i].blue);
  }
}
