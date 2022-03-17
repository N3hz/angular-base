import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPkmnComponent } from './list-pkmn.component';

describe('ListPkmnComponent', () => {
  let component: ListPkmnComponent;
  let fixture: ComponentFixture<ListPkmnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPkmnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPkmnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
