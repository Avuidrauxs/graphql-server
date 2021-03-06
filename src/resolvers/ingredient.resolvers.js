// import getIngredients from '../data/ingredient.data';
import { getIngredients } from '../data/selector';

export default {
  Query: {

    ingredient(parent, args, ctx, info) {
      // fetch all the departments
      const ingredients = getIngredients();
      if (!args.id) {
        return ingredients;
      }

      // don't like lines like that, hard to keep in mind
      // also can be replaced with lodash method
      return ingredients.filter((d) => {
        return d.ingredient_id == args.id;
      })
    },

  },
};
