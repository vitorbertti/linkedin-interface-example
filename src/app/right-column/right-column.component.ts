import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-column',
  templateUrl: './right-column.component.html',
  styleUrls: ['./right-column.component.css'],
})
export class RightColumnComponent implements OnInit {
  constructor() {}

  @Input() isLoading: boolean;

  ngOnInit(): void {}
}
