import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lists$: Observable<any> = this.listService.getAll();

  constructor(public listService: ListService) {}

  ngOnInit() {}
}
