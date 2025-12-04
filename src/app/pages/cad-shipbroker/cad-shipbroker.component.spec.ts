import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadShipbrokerComponent } from './cad-shipbroker.component';

describe('CadShipbrokerComponent', () => {
  let component: CadShipbrokerComponent;
  let fixture: ComponentFixture<CadShipbrokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadShipbrokerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadShipbrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
