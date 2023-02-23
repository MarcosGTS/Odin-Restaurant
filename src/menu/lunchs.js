import burguer1 from './lunch_1.jpg';
import burguer2 from './lunch_2.jpg';
import burguer3 from './lunch_3.jpg';
import burguer4 from './lunch_4.jpg';

import dessert1 from './dessert_1.jpg';
import dessert2 from './dessert_2.jpg';

import drink1 from './drink_1.jpg';
import drink2 from './drink_2.jpg';
import drink3 from './drink_3.jpg';
import drink4 from './drink_4.jpg';

import side1 from './side_1.jpg';

export default {
  burguer: [
    {
      img: burguer1,
      name: 'Classic Burge',
      price: 12.99,
      description: 'Juicy beef patty, melted cheddar, lettuce, tomato, pickles, special sauce, on a brioche bun. Served with fries.',
    },
    {
      img: burguer2,
      name: 'BBQ Bacon Burger',
      price: 14.99,
      description: 'Juicy beef patty, bacon, cheddar, caramelized onions, BBQ sauce, on a brioche bun.',
    },
    {
      img: burguer4,
      name: 'Hawaiian Burger',
      price: 13.99,
      description: 'Juicy beef patty, pineapple, bacon, Swiss cheese, teriyaki sauce, on a brioche bun. ',
    },
    {
      img: burguer3,
      name: 'Roasted Turkey Sandwich',
      price: 9.99,
      description: 'Sliced turkey breast, lettuce, tomato, garlic aioli, on multigrain bread. Served with coleslaw',
    }],
  drink: [
    {
      img: drink1,
      name: 'Beer',
      price: 5.99,
      description: 'Refreshing IPA with a strong hoppy flavor and citrus finish. Pairs well with spicy foods and grilled meats.',
    },
    {
      img: drink2,
      name: 'Water',
      price: 4.99,
      description: 'Pure, crisp and refreshing water sourced from natural springs, bottled at the source for maximum purity and taste.',
    },
    {
      img: drink3,
      name: 'Burguer',
      price: 6.99,
      description: 'A refreshing and healthy drink made from high-quality green tea leaves and served chilled over ice.',
    },
    {
      img: drink4,
      name: 'Orange juice',
      price: 3.99,
      description: 'Delicious and refreshing orange juice made from freshly squeezed, ripe oranges.',
    },
  ],
  side: [
    {
      img: side1,
      name: 'Crispy Chicken Nuggets with Fries',
      price: 12.99,
      description: 'Deliciously crispy chicken nuggets served with a side of hot and crispy French fries.',
    },
  ],
  dessert: [
    {
      img: dessert1,
      name: 'Chocolate Ice Cream Cake',
      price: 29.99,
      description: 'Decadent chocolate ice cream cake made with layers of rich chocolate ice cream and moist chocolate cake.',
    },
    {
      img: dessert2,
      name: 'Chocolate Fudge Brownie',
      price: 9.99,
      description: 'Rich and creamy chocolate ice cream packed with chunks of decadent fudge brownie pieces.',
    },
  ],
};
