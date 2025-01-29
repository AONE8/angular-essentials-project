import { Component, Input } from '@angular/core';
import { InvestmentResult } from '../investment-input.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent {
  @Input() results?: InvestmentResult[];
}
