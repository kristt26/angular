import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatakuliahComponent } from './matakuliah.component';

describe('MatakuliahComponent', () => {
  let component: MatakuliahComponent;
  let fixture: ComponentFixture<MatakuliahComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatakuliahComponent]
    });
    fixture = TestBed.createComponent(MatakuliahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
