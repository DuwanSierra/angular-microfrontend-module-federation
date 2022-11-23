import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf1entryComponent } from './mf1entry.component';

describe('Mf1entryComponent', () => {
  let component: Mf1entryComponent;
  let fixture: ComponentFixture<Mf1entryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mf1entryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mf1entryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
