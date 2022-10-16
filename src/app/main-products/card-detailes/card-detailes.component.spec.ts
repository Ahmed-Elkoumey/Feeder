import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailesComponent } from './card-detailes.component';

describe('CardDetailesComponent', () => {
  let component: CardDetailesComponent;
  let fixture: ComponentFixture<CardDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
