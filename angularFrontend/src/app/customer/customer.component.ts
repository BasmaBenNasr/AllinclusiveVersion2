import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  type: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  passWord: string = '';
  phoneNumber: string = '';
  specialNeed: string = '';
  imgUrl: string = '';
  constructor(private _http: HttpService, private router: Router) {}

  ngOnInit(): void {}

  // ngDoCheck() {console.log(this.type)}

  onSubmit(pageName: string): void {
    this.router.navigate([`${pageName}`]);
    if (
      this.type === '' ||
      this.firstName === '' ||
      this.lastName === '' ||
      this.email === '' ||
      this.passWord === '' ||
      this.phoneNumber === '' ||
      this.specialNeed === '' ||
      this.imgUrl === ''
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Something wrong',
        text: `Try again`,
      });
    } else {
      this._http
        .onclick(
          this.type,
          this.firstName,
          this.lastName,
          this.email,
          this.passWord,
          this.phoneNumber,
          this.specialNeed,
          this.imgUrl
        )
        .subscribe((data) => {
          console.log(data);
        });
    }
  }
}
