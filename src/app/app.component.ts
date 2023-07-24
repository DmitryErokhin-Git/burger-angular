import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AppService} from "./app.service";

export interface Products {
  image: string,
  title: string,
  text: string,
  basePrice: number,
  price: number,
  grams: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('orderButton') orderButton!: ElementRef;
  currency = '$';
  productsData: Products[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService
  ) {
    this.appService.getOrder().subscribe((res: any) => this.productsData = res);
  }

  ngOnInit(): void {
    this.getScreenOrientation();
  }

  orientation = false;

  @HostListener('window:resize', ['$event'])
  getScreenOrientation(): boolean {
    return this.orientation = window.matchMedia('(orientation: portrait)').matches
  }

  // screenWidth = 0;
  //
  // @HostListener('window:resize', ['$event'])
  // onResize(_event: Event) {
  //   this.screenWidth = window.innerWidth;
  // }

  form = this.formBuilder.group({
      order: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required]
    }
  );

  scroll(element: HTMLElement, product?: any) {
    const yOffset = -100;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({top: y, behavior: "smooth"});
    if (product) {
      this.form.get('order')?.setValue(product.title);
      this.orderButton.nativeElement.innerText = `Оформить заказ (${product.price} ${this.currency})`;
    }
  }

  changeCurrency() {

    let coefficient = 1;

    switch (this.currency) {
      case "$": {
        this.currency = "₽";
        coefficient = 90;
        break;
      }
      case "₽": {
        this.currency = "BYN";
        coefficient = 3;
        break;
      }
      case "BYN": {
        this.currency = "€";
        coefficient = 1.1;
        break;
      }
      case "€": {
        this.currency = "¥";
        coefficient = 6.9;
        break;
      }
      case "¥": {
        this.currency = "$";
        coefficient = 1;
        break;
      }
    }
    this.clearForm();
    this.productsData.forEach((item: any) => {
      item.price = +(item.basePrice * coefficient).toFixed(1);
    })
  }

  confirmOrder() {
    // alert("Спасибо за заказ! Мы скоро свяжемся с Вами!");

    // this.appService.sendOrder(this.form.value).subscribe({
    //   next: (res: any) => {
    //     alert(res.message);
    //   },
    //   error: (err) => {
    //     alert(err.error.message);
    //   }
    // })
    // this.clearForm();

    if (this.form.valid) {
      this.appService.sendMessage(this.form.value)
    }
  }

  clearForm() {
    this.form.reset();
    this.orderButton.nativeElement.innerText = `Оформить заказ`;
  }

}
