import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit{
   @Input() team: string[];
   @Input() index: number;

  constructor(){
    this.team = [];
    this.index = 0;
  }

  ngOnInit(): void {
    
  }
}
