import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucleForComponent } from './bucle-for.component';

describe('BucleForComponent', () => {
  let component: BucleForComponent;
  let fixture: ComponentFixture<BucleForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucleForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucleForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
