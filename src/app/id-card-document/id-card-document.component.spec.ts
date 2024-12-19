import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCardDocumentComponent } from './id-card-document.component';

describe('IdCardDocumentComponent', () => {
  let component: IdCardDocumentComponent;
  let fixture: ComponentFixture<IdCardDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdCardDocumentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdCardDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
