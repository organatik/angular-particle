import { TestBed } from '@angular/core/testing';

import { AngularParticleEsService } from './angular-particle-es.service';

describe('AngularParticleEsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularParticleEsService = TestBed.get(AngularParticleEsService);
    expect(service).toBeTruthy();
  });
});
