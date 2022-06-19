import { TestBed } from '@angular/core/testing';

import { MaquinariaService } from './maquinaria.service';

describe('MaquinariaService', () => {
  let service: MaquinariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaquinariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
