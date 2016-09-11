import {Component} from 'angular2/core';

@Component({
	selector: 'ce-menu',
	templateUrl: 'app/templates/ce-menu.html'
})

export class MenuComponent {
    public groups = [
    				{id: 'title', name: 'Titles', items:[
                        {id: 'title-application', name: 'Title application'},
                        {id: 'title-page', name: 'Title page'},
                        {id: 'indication', name: 'Indication'},
                        {id: 'title-blocks', name: 'Title blocks'}
                    ]},
    				{id: 'buttons', name: 'Buttons', items:[
                        {id: 'button', name: 'Button normal'},
                        {id: 'button-normal', name: 'Button abnormal'},
                        {id: 'button-riche', name: 'Button rich'}
                    ]},
    				{id: 'blocks', name: 'Blocks', items:[
                        {id: 'block1', name: 'Block 1'},
                        {id: 'block2', name: 'Block 2'}
                    ]},
    				{id: 'forms', name: 'Forms', items:[
                        {id: 'simple-form', name: 'Simple form'}
                    ]}
				    ];

    public menuChange = function(idItem) {
        console.log(idItem);
    }
}