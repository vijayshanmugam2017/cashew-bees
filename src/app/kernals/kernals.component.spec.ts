import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KernalsComponent } from './kernals.component';

describe('KernalsComponent', () => {
  let component: KernalsComponent;
  let fixture: ComponentFixture<KernalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KernalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KernalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
