import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';

@Component({
  selector: 'tree-node-radio',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: `
   
    <ng-container *mobxAutorun="{dontDetach: true}">
    {{node.isSelected}}
   <input name="radio1"
   class="tree-node-radio"
   type="radio"
   (click)="node.mouseAction('radioClick', $event)"
   [checked]="node.isSelected && node.isAllSelected"
   [disabled] = "node.isDisabledRadio"
 />
 
     
    </ng-container>
  `
})
export class TreeNodeRadioComponent {
  @Input() node: TreeNode;
}
