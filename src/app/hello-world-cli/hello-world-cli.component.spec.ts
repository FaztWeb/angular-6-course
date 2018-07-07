import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldCliComponent } from './hello-world-cli.component';

describe('HelloWorldCliComponent', () => {
  let component: HelloWorldCliComponent;
  let fixture: ComponentFixture<HelloWorldCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWorldCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
