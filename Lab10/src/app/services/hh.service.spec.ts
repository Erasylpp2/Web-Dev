import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; 
import { HhService } from './hh.service';

describe('HhService', () => {
  let service: HhService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule] 
    });
    service = TestBed.inject(HhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
