/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdivinhaService } from './adivinha.service';

describe('AdivinhaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdivinhaService]
    });
  });

  it('should ...', inject([AdivinhaService], (service: AdivinhaService) => {
    expect(service).toBeTruthy();
  }));
});
