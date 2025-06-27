import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerPrincipalComponent } from './former-principal.component';

describe('FormerPrincipalComponent', () => {
  let component: FormerPrincipalComponent;
  let fixture: ComponentFixture<FormerPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormerPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormerPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
