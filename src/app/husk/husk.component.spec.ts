import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuskComponent } from './husk.component';

describe('HuskComponent', () => {
  let component: HuskComponent;
  let fixture: ComponentFixture<HuskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HuskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HuskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
