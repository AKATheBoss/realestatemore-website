import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-manage-vanue-booking',
  templateUrl: './manage-vanue-booking.component.html',
  styleUrls: ['./manage-vanue-booking.component.css']
})
export class ManageVanueBookingComponent implements OnInit {
  userId = localStorage.getItem('user_id')
  bookingData: any;
  eventData = []
  constructor(
    private apiService: ApiService,
    private commonService: CommonService,
    private router: Router
  ) { }
  ngOnInit() {
    this.getBookingDetails()
  }

  getBookingDetails() {

    this.commonService.showLoader = true
    let url = `${environment.api_url}mobile/propertyBookingOwner/${this.userId}`
    this.apiService.getData(url).subscribe(result => {
      this.commonService.showLoader = false
      if (result.status == "true") {
        this.bookingData = result.data
        for (let date of result.data.selectDate) {
          this.eventData.push({
            date,
            title: "Available",
            booked: true
          })
        }

      }
    }, error => {
      this.commonService.showLoader = false
      this.apiService.log(error)
    })
  }




  avlClick(arg) { // handler method
    // console.log(arg);
  }


  sendMessage(receiver_id, propertyId, propertyType) {
    this.commonService.showLoader = true
    let url = `${environment.api_url}mobile/requestMessage`
    let data = {
      sender_id: this.userId,
      receiver_id,
      propertyId,
      propertyType
    }
    this.apiService.postData(url, data).subscribe(result => {
      this.commonService.showLoader = false
      if (result.status == "true") {
        this.router.navigate(['/chat'])
      }
    }, error => {
      this.commonService.showLoader = false
      this.apiService.log(error)
    })
  }

}
