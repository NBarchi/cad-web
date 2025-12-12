import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadBunkeringComponent } from './cad-bunkering.component';

describe('CadBunkeringComponent', () => {
  let component: CadBunkeringComponent;
  let fixture: ComponentFixture<CadBunkeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadBunkeringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadBunkeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
