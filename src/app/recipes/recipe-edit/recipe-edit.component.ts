import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {emitDistinctChangesOnlyDefaultValue} from "@angular/compiler";
import {FormControl, FormGroup, FormArray, Validators} from "@angular/forms";
import {RecipeServices} from "../../../services/recipe.services";
import {Reciepe} from "../recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;

  recipeForm : FormGroup;

  private initForm(){

    let recipeName ;
    let recipeImagepath ;
    let recipeDescription;
    let recipeIngredients = new FormArray([]);
    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagepath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name':new FormControl(ingredient.name , Validators.required  ),
              'amount' : new FormControl(ingredient.amount , [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'imagePath' : new FormControl(recipeImagepath , Validators.required),
      'description' : new FormControl(recipeDescription , Validators.required),
      'ingredients' : recipeIngredients
    })
  }
  constructor(private route: ActivatedRoute ,
              private recipeService : RecipeServices ,
              private router : Router) {
  }

  onSubmit()
  {
    // const newRecipe = new Reciepe(this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value);
    }
    else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancelRecipe();
  }

  onDeleteIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }




  onCancelRecipe(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
        new FormGroup({
        'name': new FormControl(null , Validators.required),
        'amount': new FormControl(null,[
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ]),
      })
    )
  }


  ngOnInit() {
     this.route.params.subscribe(
       (params : Params) => {
         this.id = +params['id'];
         this.editMode = params['id'] != null;
         console.log(this.editMode);
         this.initForm();
       }
     )
  }

}
