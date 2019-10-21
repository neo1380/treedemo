// import { ITreeOptions } from './../tree/defs/api';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TREE_ACTIONS, KEYS, TreeModel, ITreeOptions,TreeComponent,IActionMapping  } from '../tree/angular-tree-component';
import { TreeNode } from '../tree/defs/api';

const actionMapping:IActionMapping = {
  mouse: {
    click: TREE_ACTIONS.TOGGLE_SELECTED
  },
  keys: {
    [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
  }  
}

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit,AfterViewInit {

  @ViewChild('tree',{static:false}) treeComponent: TreeComponent;
  nodes:any;
  options:ITreeOptions;
  treeModel:TreeModel;
  
  constructor() { }

  ngOnInit() {
   this.nodes =[
    {
      name: 'root1',
      id:1,
      displayName: 'root1',
      expanded: true,
      selectable: true,
      state: {
        entitled: true,
        disabled: false
      },
      children: [
        {
          name: 'child1',
          displayName: 'child1',
          id:36,
          expanded: false,
          selectable: true,
          state: {
            entitled: true,
            disabled: false
          },
          children: []
        },
        {
          name: 'child2',
          displayName: 'child2',
          id:36,
          expanded: false,
          selectable: true,
          state: {
            entitled: true,
            disabled: true
          },
          children: []
        },
        {
          name: 'child3',
          displayName: 'child3',
          id:36,
          expanded: false,
          selectable: true,
          state: {
            entitled: true,
            disabled: false
          },
          children: []
        }
      ]
    }
  ];

   this.options = {
      displayField: 'displayName',
      isExpandedField: 'expanded',
      idField: 'uuid',
      useCheckbox: true,
      useTriState: true,
      checkBoxField:'selectable',
      isDisabledCheckboxField:'state.disabled',
      actionMapping: {
        mouse: {
          dblClick: (tree, node, $event) => {
            if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
          }
        },
        keys: {
          [KEYS.ENTER]: (tree, node, $event) => {
            node.expandAll();
          }
        }
      },
      nodeHeight: 23,
      allowDragoverStyling: true,
      levelPadding: 10,
      useVirtualScroll: true,
      animateExpand: true,
      scrollOnActivate: true,
      animateSpeed: 30,
      animateAcceleration: 1.2,
      scrollContainer: document.documentElement // HTML
    }
  }

  ngAfterViewInit(){
   this.treeModel = this.treeComponent.treeModel;
  }
  onEvent($event){
    console.log($event);
  }
  addNode(tree: any) {
    this.nodes[0].children.push({
      name: 'a new child'
    });
    tree.treeModel.update();
  }

  activateSubSub(tree: any) {
    // tree.treeModel.getNodeBy((node) => node.data.name === 'subsub')
    tree.treeModel.getNodeById(1001)
      .setActiveAndVisible();
  }

  activeNodes(treeModel: any) {
    console.clear();
    this.treeComponent.treeModel.doForAll(function (node: TreeNode) {
      if (node.isSelected && !node.isPartiallySelected) {
        console.log(node.data );
      }
    
    });
  }



  }

  


