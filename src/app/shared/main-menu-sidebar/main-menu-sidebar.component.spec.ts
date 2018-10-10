import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuSidebarComponent } from './main-menu-sidebar.component';

describe('MainMenuSidebarComponent', () => {
  let component: MainMenuSidebarComponent;
  let fixture: ComponentFixture<MainMenuSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMenuSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
