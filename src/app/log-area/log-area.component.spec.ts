import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAreaComponent } from './log-area.component';

describe('LogAreaComponent', () => {
  let component: LogAreaComponent;
  let fixture: ComponentFixture<LogAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogAreaComponent]
    });
    fixture = TestBed.createComponent(LogAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
