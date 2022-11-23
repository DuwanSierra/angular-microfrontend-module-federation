import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf2entryComponent } from './mf2entry.component';

describe('Mf2entryComponent', () => {
  let component: Mf2entryComponent;
  let fixture: ComponentFixture<Mf2entryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mf2entryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mf2entryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
