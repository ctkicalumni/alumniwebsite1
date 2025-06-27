import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimsAndObjectivesComponent } from './aims-and-objectives.component';

describe('AimsAndObjectivesComponent', () => {
  let component: AimsAndObjectivesComponent;
  let fixture: ComponentFixture<AimsAndObjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AimsAndObjectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AimsAndObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
