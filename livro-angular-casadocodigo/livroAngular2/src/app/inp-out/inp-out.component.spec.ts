import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InpOutComponent } from './inp-out.component';

describe('InpOutComponent', () => {
  let component: InpOutComponent;
  let fixture: ComponentFixture<InpOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InpOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InpOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
