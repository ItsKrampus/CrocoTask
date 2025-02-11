import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersItemComponent } from './users-item.component';

describe('UsersItemComponent', () => {
  let component: UsersItemComponent;
  let fixture: ComponentFixture<UsersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
