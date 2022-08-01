import { Action } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';
export const DELETE_INGREDIENTS = 'DELETE_INGREDIENTS';
export const START_EDITING = 'START_EDITING';
export const STOP_EDITING = 'STOP_EDITING';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;

  constructor(public payload: Ingredient) { }
}

export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) { }
}

export class UpdateIngredient implements Action {
  readonly type = UPDATE_INGREDIENTS;

  constructor(public payload: Ingredient ) { }
};
export class DeleteIngredient implements Action {
  readonly type = DELETE_INGREDIENTS;

  // constructor(public payload: number) { }
};
export class StartEdit {
  readonly type = START_EDITING;

  constructor(public payload: number) { }

}
export class StopEdit {
  readonly type = STOP_EDITING;
}


export type ShoppingListAction = AddIngredient | AddIngredients | UpdateIngredient | DeleteIngredient | StartEdit | StopEdit ;