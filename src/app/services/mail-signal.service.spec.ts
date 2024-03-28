import { TestBed } from '@angular/core/testing';

import { MailSignalService } from './mail-signal.service';

describe('MailSignalService', () => {
  let service: MailSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
