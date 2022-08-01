import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

export interface State {
  ingredients: Ingredient[],
  editedIngredient: Ingredient,
  editedIngredientIndex: number
};

export interface AppState {
  shoppingList: State
}

const initialState: State = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
  editedIngredient: null,
  editedIngredientIndex: -1 
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.ShoppingListAction
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
      case ShoppingListActions.ADD_INGREDIENTS:
        return {
          ...state,
          ingredients: [...state.ingredients, ...action.payload]
        };
        case ShoppingListActions.UPDATE_INGREDIENTS:
        const ingredient = state.ingredients[state.editedIngredientIndex];
        const updatedIngredient = {
          ...ingredient,
          ...action.payload
        };
        const updatedIngredients = [...state.ingredients];
        updatedIngredients[state.editedIngredientIndex] = updatedIngredient
        
        return {
            ...state,
            ingredients: updatedIngredients
          };
          case ShoppingListActions.DELETE_INGREDIENTS:
            // const toBeRemovedItem = action.payload;
            return {
              ...state,
              ingredients: state.ingredients.filter((ing, ingIndex) => {
                return ingIndex !== state.editedIngredientIndex;
              })
            };
            case ShoppingListActions.START_EDITING:
              return {
                ...state,
                editedIngredientIndex: action.payload,
                editedIngredient: {...state.ingredients[action.payload]}
              };
              case ShoppingListActions.STOP_EDITING: 
              return {
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1
              }

    default:
      return state;
  }
}
