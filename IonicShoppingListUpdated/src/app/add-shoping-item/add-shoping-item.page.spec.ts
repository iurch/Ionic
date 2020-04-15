import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddShopingItemPage } from './add-shoping-item.page';

describe('AddShopingItemPage', () => {
  let component: AddShopingItemPage;
  let fixture: ComponentFixture<AddShopingItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShopingItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddShopingItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
