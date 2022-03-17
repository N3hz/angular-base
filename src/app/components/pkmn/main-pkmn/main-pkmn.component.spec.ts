import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPkmnComponent } from './main-pkmn.component';

describe('MainPkmnComponent', () => {
  let component: MainPkmnComponent;
  let fixture: ComponentFixture<MainPkmnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPkmnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPkmnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
