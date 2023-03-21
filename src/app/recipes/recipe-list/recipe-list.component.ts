import {Component, OnInit} from '@angular/core';
import {Reciepe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit
{

  recipes:Reciepe[] = [
    new Reciepe('A test Recipe','This is simply a test recipe','https://thumbs.dreamstime.com/b/pasta-arabbiata-25793698.jpg'),
    new Reciepe('A test Recipe','This is simply a test recipe','https://thumbs.dreamstime.com/b/pasta-arabbiata-25793698.jpg'),

  ];

  ngOnInit(): void {
  }

}
