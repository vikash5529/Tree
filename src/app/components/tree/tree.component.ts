import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { isArray } from '../../helpers/helper';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  public list: any;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.fetchData().subscribe((result) => {
      this.list = result;
    });
  }
  descOrder(a: { key: number }, b: { key: number }) {
    return a.key < b.key ? b.key : a.key;
  }
  isArray(value: any) {
    return isArray(value);
  }
}
