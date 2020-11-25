import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkdinCertsComponent } from './linkdin-certs.component';

describe('LinkdinCertsComponent', () => {
  let component: LinkdinCertsComponent;
  let fixture: ComponentFixture<LinkdinCertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkdinCertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkdinCertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
