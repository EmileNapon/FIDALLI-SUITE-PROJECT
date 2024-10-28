import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prog-talent',
  templateUrl: './prog-talent.component.html',
  styleUrls: ['./prog-talent.component.css']
})
export class ProgTalentComponent implements OnInit{

  shutDetail!: boolean;
  showDetail!: boolean;

  ngOnInit(): void { 
    this.shutDetail = true;
    this.showDetail = false;
  }

  onShutDetail(){
    this.shutDetail = false;
    this.showDetail = true;
  }
  onShowDetail(){
    this.shutDetail = true;
    this.showDetail = false;
  }

}
