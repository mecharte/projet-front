import { TestBed } from '@angular/core/testing';

import { ApiRdvBrokerService } from './api-rdv-broker.service';

describe('ApiRdvBrokerService', () => {
  let service: ApiRdvBrokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRdvBrokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
