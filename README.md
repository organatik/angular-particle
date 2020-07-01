# AngularParticle

Simple Implementation angular wrapper for ParticleJs.Work with Angular9

## Installation

To install this library, first run:

```bash
$ npm install particle.js --save
```

```bash
$ npm install angular-particle --save
```

Then configure path to Particle.js in your ```angular.json ``` :

```
            "scripts": [
               ...
              "./node_modules/particles.js/particles.js"
            ]
```

## How to use

```typescript
// Import ParticlesModule
import { AngularParticleEsModule } from './app-routing.module'; 

@NgModule({
  declarations: [
    ...
  ],
  imports: [
	...
    AngularParticleEsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
```

And just use the component in your HTML

```html
<angular-particle-es [config]="config" [styles]="particleStyles"></angular-particle-es>
```

Parameters configuration can be found [here](http://vincentgarreau.com/particles.js/). If you don't provide any parameters, it will be error.


## Properties

| Property | Type   | Definition                              |
| -------- | ------ | --------------------------------------- |
| params   | object | The parameters for particle.js          |
| style    | object | The style of the canvas container       |



## Example

```typescript

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    myStyle: object = {};
	myParams: object = {};
	width: number = 100;
	height: number = 100;

    ngOnInit() {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };

	this.myParams = {
            particles: {
                number: {
                    value: 200,
                },
                color: {
                    value: '#ff0000'
                },
                shape: {
                    type: 'triangle',
                },
	    }
	};
    }
}
```

```html
<angular-particle-es [config]="myParams" [styles]="myStyle"></angular-particle-es>
```
