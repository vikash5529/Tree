import { Component, OnInit, Input } from '@angular/core';
import { flattenSource, isObject } from 'src/app/helpers/helper';
import { isArray } from 'util';

@Component({
  selector: 'app-child-tree',
  templateUrl: './child-tree.component.html',
  styleUrls: ['./child-tree.component.scss']
})
export class ChildTreeComponent implements OnInit {
  @Input() childList: any;
  shouldExpand = false;
  expandList = {};
  headerName = '';
  ngOnInit() {
    this.childList = Object.assign({}, ...this.childList);
  }
  descOrder(a: { key: number }, b: { key: number }) {
    return a.key < b.key ? b.key : a.key;
  }
  isTypeArray(item: any) {
    return isArray(item);
  }
  expand(item: any, header: string) {
    this.headerName = header;
    this.shouldExpand = !this.shouldExpand;
    this.expandList = item;
  }
}
