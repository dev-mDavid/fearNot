import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmt-question-textarea',
  templateUrl: './mmt-question-textarea.component.html',
  styleUrls: ['./mmt-question-textarea.component.scss']
})

export class MmtQuestionTextareaComponent implements OnInit {
  @Input() renderTitle: string;
  
  constructor() { }

  ngOnInit(): void {


  }

}
