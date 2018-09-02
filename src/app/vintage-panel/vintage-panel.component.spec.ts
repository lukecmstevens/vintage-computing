import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VintagePanelComponent } from './vintage-panel.component';

describe('VintagePanelComponent', () => {
  let component: VintagePanelComponent;
  let fixture: ComponentFixture<VintagePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VintagePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VintagePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
