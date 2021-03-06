import {Shoppinglist, ShoppingItem} from "./shoppinglist";
import {Comment} from "./comment";

export class ShoppinglistFactory {

  static empty(): Shoppinglist {
    return new Shoppinglist(
      null,
      null,
      null,
      '',
      new Date(),
      new Date(),
      new Date(),
      [],
    );
  }

  static fromObject(rawShoppinglist: any): Shoppinglist {

    return new Shoppinglist(
      rawShoppinglist.id,
      rawShoppinglist.user_id,
      rawShoppinglist.helper_id,
      rawShoppinglist.title,
      typeof (rawShoppinglist.dueDate) === 'string' ?  new Date(rawShoppinglist.dueDate) : rawShoppinglist.dueDate,
      typeof (rawShoppinglist.created_at) === 'string' ? new Date(rawShoppinglist.created_at) : rawShoppinglist.created_at,
      typeof (rawShoppinglist.updated_at) === 'string' ? new Date(rawShoppinglist.updated_at) : rawShoppinglist.updated_at,
      rawShoppinglist.item ? rawShoppinglist.item : [],
    );
  }

}
