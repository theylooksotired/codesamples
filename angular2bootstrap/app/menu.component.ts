import {Component} from 'angular2/core';

@Component({
	selector: 'ce-menu',
	templateUrl: 'app/templates/ce-menu.html'
})

export class MenuComponent {
    public groups = [
    				{id: 'titre', name: 'Titres', items:[
                        {id: 'titre-de-lapplication', name: 'Titre de l\'application'},
                        {id: 'titre-de-la-page', name: 'Titre de la page'},
                        {id: 'indicateur-detape', name: 'Indicateur d\'étape'},
                        {id: 'titre-du-bloc-fonctionnel', name: 'Titre du bloc fonctionnel'}
                    ]},
    				{id: 'boutons', name: 'Boutons', items:[
                        {id: 'bouton', name: 'Bouton normal'},
                        {id: 'bouton-normal', name: 'Bouton normal'},
                        {id: 'bouton-riche', name: 'Bouton riche'}
                    ]},
    				{id: 'blocs', name: 'Blocs2', items:[
                        {id: 'bloc-applicatif', name: 'Bloc applicatif'},
                        {id: 'bloc-fonctionnel', name: 'Bloc fonctionnel'}
                    ]},
    				{id: 'formulaires', name: 'Formulaires', items:[
                        {id: 'formulaire-simple', name: 'Formulaire simple'}
                    ]}
				    ];

    public menuChange = function(idItem) {
        console.log(idItem);
    }
}