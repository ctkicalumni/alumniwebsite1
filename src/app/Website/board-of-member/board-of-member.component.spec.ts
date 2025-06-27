import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardOfMemberComponent } from './board-of-member.component';

describe('BoardOfMemberComponent', () => {
  let component: BoardOfMemberComponent;
  let fixture: ComponentFixture<BoardOfMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardOfMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardOfMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
