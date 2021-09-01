import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberSidebarComponent } from './member-sidebar.component';

describe('MemberSidebarComponent', () => {
  let component: MemberSidebarComponent;
  let fixture: ComponentFixture<MemberSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
