import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaurantSliderDerscriptionComponent } from './restaurant-slider-derscription.component';

describe('RestaurantSliderDerscriptionComponent', () => {
  let component: RestaurantSliderDerscriptionComponent;
  let fixture: ComponentFixture<RestaurantSliderDerscriptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantSliderDerscriptionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantSliderDerscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
