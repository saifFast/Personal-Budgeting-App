import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { intervalProvider } from 'rxjs/internal/scheduler/intervalProvider';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Personal-Budgeting-App';
  searchFilters = {
    month: '',
    year: ''
  };  

  // Initialize with all transactions
  filteredTransactions: Transaction[] = [
    {
      id: 1,
      description: 'Salary Payment',
      amount: 5000,
      type: 'income',
      category: 'Salary',
      date: new Date('2024-09-01')
    },
    {
      id: 2,
      description: 'Grocery Shopping',
      amount: 150.50,
      type: 'expense',
      category: 'Food',
      date: new Date('2024-09-02')
    },
    {
      id: 3,
      description: 'Gas Bill',
      amount: 80.00,
      type: 'expense',
      category: 'Utilities',
      date: new Date('2024-09-03')
    },
    {
      id: 4,
      description: 'Freelance Project',
      amount: 800,
      type: 'income',
      category: 'Freelance',
      date: new Date('2024-09-04')
    },
    {
      id: 5,
      description: 'Coffee Shop',
      amount: 12.75,
      type: 'expense',
      category: 'Food',
      date: new Date('2024-09-05')
    },
    {
      id: 6,
      description: 'Netflix Subscription',
      amount: 15.99,
      type: 'expense',
      category: 'Entertainment',
      date: new Date('2024-08-15')
    },
    {
      id: 7,
      description: 'Investment Dividend',
      amount: 125.00,
      type: 'income',
      category: 'Investment',
      date: new Date('2024-08-20')
    },
    {
      id: 8,
      description: 'Rent Payment',
      amount: 1200.00,
      type: 'expense',
      category: 'Housing',
      date: new Date('2024-08-01')
    },
    {
      id: 9,
      description: 'Online Course',
      amount: 99.99,
      type: 'expense',
      category: 'Education',
      date: new Date('2024-07-10')
    },
    {
      id: 10,
      description: 'Side Business Income',
      amount: 450.00,
      type: 'income',
      category: 'Business',
      date: new Date('2024-07-25')
    },
    {
      id: 11,
      description: 'Car Insurance',
      amount: 120.00,
      type: 'expense',
      category: 'Insurance',
      date: new Date('2024-06-01')
    },
    {
      id: 12,
      description: 'Bonus Payment',
      amount: 1500.00,
      type: 'income',
      category: 'Bonus',
      date: new Date('2024-06-15')
    }
  ];transaction: any;
;

  // Search function


  // Calculate summary

};

export interface Transaction
{
  id: number;
  description: string;
  amount: number;
  type: 'income' | 'expense'
  category: string;
  date: Date;
}

