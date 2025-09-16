import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Transaction {
  date: string;
  description: string;
  method: string;
  amount: string;
  status: 'Completed' | 'Pending' | 'Failed';
}

@Component({
  selector: 'app-billing',
  imports: [CommonModule, FormsModule],
  templateUrl: './billing.html',
  styleUrl: './billing.css'
})
export class BillingComponent {
  isDropdownOpen = false;

  paymentData = {
    amount: null as number | null,
    method: '',
    note: ''
  };

  transactions: Transaction[] = [
    {
      date: 'Dec 1, 2024',
      description: 'Monthly Internet & TV Service',
      method: 'Visa **** 4532',
      amount: '149.99',
      status: 'Completed'
    },
    {
      date: 'Nov 15, 2024',
      description: 'Equipment Rental Fee',
      method: 'Bank Account',
      amount: '25.00',
      status: 'Completed'
    },
    {
      date: 'Nov 1, 2024',
      description: 'Monthly Internet & TV Service',
      method: 'Visa **** 4532',
      amount: '149.99',
      status: 'Completed'
    },
    {
      date: 'Oct 15, 2024',
      description: 'Late Payment Fee',
      method: 'Mastercard **** 7890',
      amount: '15.00',
      status: 'Pending'
    },
    {
      date: 'Oct 1, 2024',
      description: 'Monthly Internet & TV Service',
      method: 'Visa **** 4532',
      amount: '149.99',
      status: 'Completed'
    },
    {
      date: 'Sep 20, 2024',
      description: 'Installation Fee',
      method: 'Bank Account',
      amount: '99.99',
      status: 'Failed'
    }
  ];

  constructor(private router: Router) {}

  toggleUserDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  setPaymentAmount(amount: number) {
    this.paymentData.amount = amount;
  }

  makePayment() {
    if (!this.paymentData.amount || !this.paymentData.method) {
      alert('Please fill in all required fields');
      return;
    }

    if (this.paymentData.amount <= 0) {
      alert('Payment amount must be greater than 0');
      return;
    }

    console.log('Processing payment:', this.paymentData);
    
    // Simulate payment processing
    const newTransaction: Transaction = {
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
      description: 'Manual Payment',
      method: this.getPaymentMethodDisplay(this.paymentData.method),
      amount: this.paymentData.amount.toFixed(2),
      status: 'Pending'
    };

    // Add to transactions list
    this.transactions.unshift(newTransaction);

    alert(`Payment of $${this.paymentData.amount.toFixed(2)} has been processed successfully!`);
    
    // Reset form
    this.paymentData = {
      amount: null,
      method: '',
      note: ''
    };
  }

  getPaymentMethodDisplay(method: string): string {
    const methodMap: { [key: string]: string } = {
      'credit-card': 'Visa **** 4532',
      'debit-card': 'Mastercard **** 7890',
      'bank-account': 'Bank Account',
      'paypal': 'PayPal'
    };
    return methodMap[method] || method;
  }

  addPaymentMethod() {
    alert('Add Payment Method functionality would open a modal or navigate to a new page in a real application.');
    console.log('Add new payment method requested');
  }

  getStatusStyle(status: string): { [key: string]: string } {
    const styles: { [key: string]: { [key: string]: string } } = {
      'Completed': {
        'background-color': '#dcfce7',
        'color': '#16a34a'
      },
      'Pending': {
        'background-color': '#fef3c7',
        'color': '#d97706'
      },
      'Failed': {
        'background-color': '#fee2e2',
        'color': '#dc2626'
      }
    };
    return styles[status] || styles['Pending'];
  }

  viewAllTransactions() {
    alert('View All Transactions functionality would navigate to a detailed transactions page in a real application.');
    console.log('View all transactions requested');
  }
}