import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/interfaces/offer';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  listOfOffers: Array<Offer> = [
    {iconLink: '../../../assets/images/c1.png', title: 'Lorem ipsum dolor sit amet', subtitle: 'Suspendisse vel leo efficitur,venenatis est ut, tincidunt nibh.'},
    {iconLink: '../../../assets/images/c2.png', title: 'Lorem ipsum dolor sit amet', subtitle: 'Suspendisse vel leo efficitur,venenatis est ut, tincidunt nibh.'},
    {iconLink: '../../../assets/images/c3.png', title: 'Lorem ipsum dolor sit amet', subtitle: 'Suspendisse vel leo efficitur,venenatis est ut, tincidunt nibh.'},
    {iconLink: '../../../assets/images/c4.png', title: 'Lorem ipsum dolor sit amet', subtitle: 'Suspendisse vel leo efficitur,venenatis est ut, tincidunt nibh.'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
