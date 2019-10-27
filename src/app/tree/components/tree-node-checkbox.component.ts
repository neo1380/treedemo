import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';

@Component({
  selector: 'tree-node-checkbox',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: `
   
    <ng-container *mobxAutorun="{dontDetach: true}">
    {{node.isAllSelected}}
      <input 
        *ngIf="node.enableCheckBox"
        class="tree-node-checkbox"
        type="checkbox"
        (click)="node.mouseAction('checkboxClick', $event)"
        [checked]="node.isSelected && !node.isDisabledCheckbox"
        [disabled] = "node.isDisabledCheckbox"
        [indeterminate]="node.isPartiallySelected"/>
    </ng-container>
  `
})
export class TreeNodeCheckboxComponent {
  @Input() node: TreeNode;
}
