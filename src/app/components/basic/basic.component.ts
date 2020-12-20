import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent implements OnInit {
  data = '';
  currentInput = '0';
  currentOperator = '';
  currentResult = 0;

  operators = ['%', '+', '-', '*', '/', '='];
  resetButtons = ['C', 'DEL'];
  numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];

  buttonsGroupList = [
    [
      { className: 'basic-calculator-buttons', id: 'C', icon: '', name: 'C', tint: 'red', tintGroup: 'a' },
      { className: 'basic-calculator-buttons', id: '+-', icon: '', name: '+/-', tint: 'clear', tintGroup: 'a' },
      { className: 'basic-calculator-buttons', id: '%', icon: 'fas fa-percentage', name: '', tint: 'clear', tintGroup: 'a' },
      { className: 'basic-calculator-buttons', id: 'DEL', icon: '', name: 'DEL', tint: 'red', tintGroup: 'a' },
    ],
    [
      { className: 'basic-calculator-buttons', id: '7', icon: '', name: '7', tint: 'clear', tintGroup: 'a' },
      { className: 'basic-calculator-buttons', id: '8', icon: '', name: '8', tint: 'clear', tintGroup: 'a' },
      { className: 'basic-calculator-buttons', id: '9', icon: '', name: '9', tint: 'clear', tintGroup: 'a' },
      { className: 'basic-calculator-buttons', id: '/', icon: 'fas fa-divide', name: '', tint: 'blue', tintGroup: 'a' },
    ],
    [
      { className: 'basic-calculator-buttons', id: '4', icon: '', name: '4', tint: 'clear', tintGroup: 'a' },
      { className: 'basic-calculator-buttons', id: '5', icon: '', name: '5', tint: 'clear', tintGroup: 'a' },
      { className: 'basic-calculator-buttons', id: '6', icon: '', name: '6', tint: 'clear', tintGroup: 'a' },
      { className: 'basic-calculator-buttons', id: '*', icon: 'fas fa-times', name: '', tint: 'blue', tintGroup: 'a' },
    ],
    [
      { className: 'basic-calculator-buttons', id: '1', icon: '', name: '1', tint: 'clear', tintGroup: 'a' },
      { className: 'basic-calculator-buttons', id: '2', icon: '', name: '2', tint: 'clear', tintGroup: 'a' },
      { className: 'basic-calculator-buttons', id: '3', icon: '', name: '3', tint: 'clear', tintGroup: 'a' },
      { className: 'basic-calculator-buttons', id: '-', icon: 'fas fa-minus', name: '', tint: 'blue', tintGroup: 'a' },
    ],
    [
      { className: 'basic-calculator-buttons', id: '0', icon: '', name: '0', tint: 'clear', tintGroup: 'a' },
      { className: 'basic-calculator-buttons', id: '.', icon: '', name: '.', tint: 'clear', tintGroup: 'a' },
      { className: 'basic-calculator-buttons', id: '=', icon: 'fas fa-equals', name: '', tint: 'green', tintGroup: 'a' },
      { className: 'basic-calculator-buttons', id: '+', icon: 'fas fa-plus', name: '', tint: 'blue', tintGroup: 'a' },
    ],
  ];

  constructor(private messageService: MessageService) {}

  get result() {
    return this.data.length ? eval(this.data) : 0;
  }

  ngOnInit(): void {}

  updateResult(buttonInput: string) {
    if (buttonInput == 'DEL') {
      this.currentInput = this.currentInput.slice(0, -1);
    } else if (buttonInput == 'C') {
      this.currentInput = '';
      this.currentResult = 0;
      this.currentOperator = '';
    } else if (this.operators.find((d) => d == buttonInput)) {
      if (this.currentInput == '') {
        this.currentOperator = buttonInput !== '=' ? buttonInput : '';
      } else {
        this.currentResult =
          this.currentOperator !== ''
            ? eval(this.currentResult.toString() + this.currentOperator + (this.currentInput == '' ? '0' : this.currentInput))
            : eval(this.currentInput == '' ? '0' : this.currentInput);
        if (buttonInput == '=') {
          this.currentOperator = '';
          this.currentInput = this.currentResult.toString();
        } else {
          this.currentOperator = buttonInput;
          this.currentInput = '';
        }
      }
    } else if (this.numbers.find((d) => d == buttonInput)) {
      const [val, precision] = this.currentInput.split('.');
      console.log(val, precision);
      if (val?.length > 15 && buttonInput != '.' && !this.currentInput.includes('.')) {
        this.messageService.add({
          severity: 'warn',
          summary: 'Maximum 15 digits of whole number and 9 digits of fractional part is allowed.',
          detail: 'Basic Calculator',
          closable: true,
          life: 3000,
        });
      } else if (precision && precision?.length > 10) {
        this.messageService.add({
          severity: 'warn',
          summary: 'Maximum 15 digits of whole number and 9 digits of fractional part is allowed.',
          detail: 'Basic Calculator',
          closable: true,
          life: 3000,
        });
      } else if (buttonInput == '.' && this.currentInput == '') {
        this.currentInput = '0.';
      } else if (!(buttonInput == '.' && this.currentInput.includes('.'))) {
        this.currentInput = this.currentInput == '0' && buttonInput != '.' ? buttonInput : this.currentInput + buttonInput;
      }
    }
  }
}
