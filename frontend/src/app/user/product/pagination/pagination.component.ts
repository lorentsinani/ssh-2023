import { Component } from '@angular/core';
import { products } from '../product.component';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  currentPage = 1;
  itemsPerPage = 6;
  products = products;
}
