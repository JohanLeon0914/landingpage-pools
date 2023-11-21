import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolGalleryComponent } from './pool-gallery.component';

describe('PoolGalleryComponent', () => {
  let component: PoolGalleryComponent;
  let fixture: ComponentFixture<PoolGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoolGalleryComponent]
    });
    fixture = TestBed.createComponent(PoolGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
