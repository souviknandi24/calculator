import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-glass-button',
  templateUrl: './glass-button.component.html',
  styleUrls: ['./glass-button.component.scss'],
})
export class GlassButtonComponent implements OnInit {
  @Input() buttonData = { className: '', id: '', icon: '', name: '', tint: '', tintGroup: '' };
  @Output() onClickEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.onClickEvent.emit(this.buttonData.id);
  }
}
