import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorslistComponent } from './vendorslist.component';

describe('VendorslistComponent', () => {
  let component: VendorslistComponent;
  let fixture: ComponentFixture<VendorslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
