import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShineBorderWrapperComponent } from './shine-border-wrapper.component';

describe('ShineBorderWrapperComponent', () => {
  let component: ShineBorderWrapperComponent;
  let fixture: ComponentFixture<ShineBorderWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShineBorderWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShineBorderWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
