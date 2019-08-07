import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMorePage } from './edit-more.page';

describe('EditMorePage', () => {
  let component: EditMorePage;
  let fixture: ComponentFixture<EditMorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
