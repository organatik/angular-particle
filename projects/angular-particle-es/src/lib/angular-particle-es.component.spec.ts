import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularParticleEsComponent } from './angular-particle-es.component';

describe('AngularParticleEsComponent', () => {
  let component: AngularParticleEsComponent;
  let fixture: ComponentFixture<AngularParticleEsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularParticleEsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularParticleEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
