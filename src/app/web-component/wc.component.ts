import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-wc',
  templateUrl: './wc.component.html',
  styleUrls: ['./wc.component.scss']
})
export class WCComponent implements OnInit {

  version: string = environment.version;

  constructor() { }

  ngOnInit() { }

}
