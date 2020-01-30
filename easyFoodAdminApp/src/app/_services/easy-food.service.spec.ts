import { TestBed } from '@angular/core/testing';

import { EasyFoodService } from './easy-food.service';

describe('EasyFoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EasyFoodService = TestBed.get(EasyFoodService);
    expect(service).toBeTruthy();
  });
});
