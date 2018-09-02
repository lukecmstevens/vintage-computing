import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreColumnComponent } from './centre-column.component';

describe('CentreColumnComponent', () => {
  let component: CentreColumnComponent;
  let fixture: ComponentFixture<CentreColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentreColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
