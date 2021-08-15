import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-server',
  templateUrl: './simple-server.component.html',
  styleUrls: ['./simple-server.component.css']
})
export class SimpleServerComponent implements OnInit {
  @Input('srvElement') element: any; // Alias for the databinding 'srvElement'
  
  constructor() { }

  ngOnInit(): void {
  }

}
