import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hashtag-panel',
  templateUrl: './hashtag-panel.component.html',
  styleUrls: ['./hashtag-panel.component.css'],
})
export class HashtagPanelComponent implements OnInit {
  constructor() {}

  tags = ['company', 'learning', 'node', 'angular', 'developer'];

  ngOnInit(): void {}
}
