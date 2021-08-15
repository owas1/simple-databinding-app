import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleServerComponent } from './simple-server.component';

describe('SimpleServerComponent', () => {
  let component: SimpleServerComponent;
  let fixture: ComponentFixture<SimpleServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
