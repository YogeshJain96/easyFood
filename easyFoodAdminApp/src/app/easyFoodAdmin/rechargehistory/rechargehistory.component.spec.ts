import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargehistoryComponent } from './rechargehistory.component';

describe('RechargehistoryComponent', () => {
  let component: RechargehistoryComponent;
  let fixture: ComponentFixture<RechargehistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargehistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
