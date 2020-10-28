import { Component, OnInit, Input } from '@angular/core';
import { Offer } from '../../interfaces/offer';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  @Input() offer: Offer;

  constructor() { }

  ngOnInit(): void {
  }

}
