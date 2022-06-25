import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailForEditComponent } from './detail-for-edit.component';

describe('DetailForEditComponent', () => {
  let component: DetailForEditComponent;
  let fixture: ComponentFixture<DetailForEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailForEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailForEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
