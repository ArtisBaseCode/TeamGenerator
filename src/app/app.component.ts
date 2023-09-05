import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teamapp';
  newMemberName:string = '';
  members: string[] = [];
  errorMessage = "";
  numberOfTeams: number | '' = '';
  teams: string[][] = [];
  

  onClick(){
    if(!this.newMemberName){
      this.errorMessage = "Name can not be empty!";
      return;
    }else{
      this.members.push(this.newMemberName);

      this.newMemberName = '';
    }
  }

  onInput(v: string){
    this.newMemberName = v;
    this.errorMessage = '';
  }

  onNumberOfTeamsInput(v: string){
    this.numberOfTeams = Number(v);
  }

  generateTeams(){

    if(!this.numberOfTeams || this.numberOfTeams <= 0 || this.numberOfTeams > this.members.length){
      this.errorMessage = "Invalid number of Teams"
      return;
    }

    const allMembers = [...this.members];

    while(allMembers.length){
      for(let i=0; i < Number(this.numberOfTeams); i++){
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        if(!member)break;
        if(this.teams[i]){
          this.teams[i].push(member);
        }else{
          this.teams[i] = [member];
        }
      }
    }

    console.log(this.teams);
    this.members = [];
    this.numberOfTeams = '';
  }
}
