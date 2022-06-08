import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarrComponent } from './editarr.component';

describe('EditarrComponent', () => {
  let component: EditarrComponent;
  let fixture: ComponentFixture<EditarrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
