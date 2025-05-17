import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLATILLOSComponent } from './platillos.component';

describe('PLATILLOSComponent', () => {
  let component: PLATILLOSComponent;
  let fixture: ComponentFixture<PLATILLOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PLATILLOSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PLATILLOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
