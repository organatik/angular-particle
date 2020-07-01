import {Component, Input, OnInit} from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'angular-particle-es',
  template: `
    <div id="particles-js" [ngStyle]="styles"></div>
  `,
  styles: []
})
export class AngularParticleEsComponent implements OnInit {
  @Input() config;
  @Input() styles;

  constructor() { }

  ngOnInit() {
    if (this.config === null || this.config === undefined) {
      throw new Error('Required parameter config was null or undefined when use ParticlesComponent.');
    }
    particlesJS('particles-js', this.config);
  }

}
