import {Injectable} from '@angular/core';

import {Item} from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
      "name": "Deep-fried Baked Chicken",
    "profilePic": "assets/img/KFC-Copycat-Oven-Baked-Fried-Chicken-Tenders_680px_2-landscape.jpg",
      "about": "Sinful goodness",
      "difficulty": "Intermediate",
      "isFave": "lightgray",
      "ingredients": [ "4 onions", "3 garlic cloves", "1 chicken (whole)", "1 tbsp soy sauce"],
      "steps": [
        {
          "name": "Step 1",
          "details": "Cut the onions into thin slices.",
          "time": "100",
          "image": 'assets/img/slice-onions.jpg'
        },
        {
          "name": "Step 2",
          "details": "Chop the garlic.",
          "time": "20",
          "image": 'assets/img/garlic1.jpeg'
        }
      ]
    };


  constructor() {
    let items = [
      {
        "name": "Deep-fried Baked Chicken",
        "profilePic": "assets/img/KFC-Copycat-Oven-Baked-Fried-Chicken-Tenders_680px_2-landscape.jpg",
        "about": "Sinful goodness",
        "difficulty": "Intermediate",
        "ingredients": [ "4 onions", "3 garlic cloves", "1 chicken (whole)", "1 tbsp soy sauce"],
        "isFave": "lightgray",
        "steps": [
          {
            "name": "Step 1",
            "details": "Cut the onions into thin slices.",
            "time": "100",
            "image": 'assets/img/slice-onions.jpg'
          },
          {
            "name": "Step 2",
            "details": "Chop the garlic.",
            "time": "20",
            "image": 'assets/img/garlic1.jpeg'
          }
        ]
      },
      {
        "name": "Nasi Lemak Burger",
        "profilePic": "assets/img/nasi-lemak-burger.jpg",
        "about": "Yummy & revolutionary!",
        "difficulty": "Intermediate",
        "ingredients": [ "4 onions", "3 garlic cloves", "1 chicken (whole)", "1 tbsp soy sauce"],
        "isFave": "danger",
        "steps": [
          {
            "name": "Step 1",
            "details": "Cut the onions into thin slices.",
            "time": "100",
            "image": 'assets/img/slice-onions.jpg'
          },
          {
            "name": "Step 2",
            "details": "Chop the garlic.",
            "time": "20",
            "image": 'assets/img/garlic1.jpeg'
          }
          ]
      },
      {
        "name": "Bak Kut Teh",
        "profilePic": "assets/img/BakKutTeh-1.jpg",
        "about": "Steamy peppery goodness",
        "difficulty": "Intermediate",
        "ingredients": [ "4 onions", "3 garlic cloves", "1 chicken (whole)", "1 tbsp soy sauce"],
        "isFave": "lightgray",
        "steps": [
          {
            "name": "Step 1",
            "details": "Debone the pork.",
            "time": "100",
            "image": 'assets/img/Pork-Schnitzel-Recipe-2-600x400.jpg'
          },
          {
            "name": "Step 2",
            "details": "Mix the chilli padi, garlic, onions and spices together.",
            "time": "20",
            "image": 'assets/img/Tabil-Spice-Blend.jpg'
          }
        ]
      },
      {
        "name": "Sliced Fish Soup",
        "profilePic": "assets/img/sliced-fish-soup.jpg",
        "about": "Especially good for sick days",
        "difficulty": "Intermediate",
        "ingredients": [ "4 onions", "3 garlic cloves", "1 chicken (whole)", "1 tbsp soy sauce"],
        "isFave": "lightgray",
        "steps": [
          {
            "name": "Step 1",
            "details": "Scale the fish and remove innards.",
            "time": "100",
            "image": 'assets/img/2017_05_15_26895_1494828675._large.jpg'
          },
          {
            "name": "Step 2",
            "details": "Season the fish in soy sauce.",
            "time": "20",
            "image": 'assets/img/images-2.jpeg'
          }
        ]
      },
      {
        "name": "Ang Ku Kueh",
        "profilePic": "assets/img/ang-ku-kueh.jpg",
        "about": "Red and squishy.",
        "difficulty": "Intermediate",
        "ingredients": [ "4 onions", "3 garlic cloves", "1 chicken (whole)", "1 tbsp soy sauce"],
        "isFave": "lightgray",
        "steps": [
          {
            "name": "Step 1",
            "details": "Cut the onions into thin slices.",
            "time": "100",
            "image": 'assets/img/slice-onions.jpg'
          },
          {
            "name": "Step 2",
            "details": "Chop the garlic.",
            "time": "20",
            "image": 'assets/img/garlic1.jpeg'
          }
        ]
      },
      {
        "name": "Roti Prata",
        "profilePic": "assets/img/roti-prata.jpeg",
        "about": "Crispy and fresh",
        "difficulty": "Intermediate",
        "ingredients": [ "4 onions", "3 garlic cloves", "1 chicken (whole)", "1 tbsp soy sauce"],
        "isFave": "lightgray",
        "steps": [
          {
            "name": "Step 1",
            "details": "Cut the onions into thin slices.",
            "time": "100",
            "image": 'assets/img/slice-onions.jpg'
          },
          {
            "name": "Step 2",
            "details": "Chop the garlic.",
            "time": "20",
            "image": 'assets/img/garlic1.jpeg'
          }
        ]
      },
      {
        "name": "Braised Chicken",
        "profilePic": "assets/img/braised-chicken.jpg",
        "about": "Homecooked goodness",
        "difficulty": "Intermediate",
        "ingredients": [ "4 onions", "3 garlic cloves", "1 chicken (whole)", "1 tbsp soy sauce"],
        "isFave": "lightgray",
        "steps": [
          {
            "name": "Step 1",
            "details": "Cut the onions into thin slices.",
            "time": "100",
            "image": 'assets/img/slice-onions.jpg'
          },
          {
            "name": "Step 2",
            "details": "Chop the garlic.",
            "time": "20",
            "image": 'assets/img/garlic1.jpeg'
          }
        ]
      },
      {
        "name": "Braised Pork Rice",
        "profilePic": "assets/img/maxresdefault.jpg",
        "about": "Best comfort food in the world",
        "difficulty": "Intermediate",
        "ingredients": [ "4 onions", "3 garlic cloves", "1 chicken (whole)", "1 tbsp soy sauce"],
        "isFave": "lightgray",
        "steps": [
          {
            "name": "Step 1",
            "details": "Cut the onions into thin slices.",
            "time": "100",
            "image": 'assets/img/slice-onions.jpg'
          },
          {
            "name": "Step 2",
            "details": "Chop the garlic.",
            "time": "20",
            "image": 'assets/img/garlic1.jpeg'
          }
        ]
      },
      {
        "name": "Chicken Rice",
        "profilePic": "assets/img/item_1.thumbnail.carousel-img.740.416.jpg",
        "about": "Original recipe from Jurong Chicken Rice hawker",
        "difficulty": "Intermediate",
        "ingredients": [ "4 onions", "3 garlic cloves", "1 chicken (whole)", "1 tbsp soy sauce"],
        "isFave": "lightgray",
        "steps": [
          {
            "name": "Step 1",
            "details": "Cut the onions into thin slices.",
            "time": "100",
            "image": 'assets/img/slice-onions.jpg'
          },
          {
            "name": "Step 2",
            "details": "Chop the garlic.",
            "time": "20",
            "image": 'assets/img/garlic1.jpeg'
          }
        ]
      },
      {
        "name": "Spanish Paella",
        "profilePic": "assets/img/seafood-paella.jpg",
        "about": "Fanciful seafood paella",
        "difficulty": "Intermediate",
        "ingredients": [ "4 onions", "3 garlic cloves", "1 chicken (whole)", "1 tbsp soy sauce"],
        "isFave": "lightgray",
        "steps": [
          {
            "name": "Step 1",
            "details": "Cut the onions into thin slices.",
            "time": "100",
            "image": 'assets/img/slice-onions.jpg'
          },
          {
            "name": "Step 2",
            "details": "Chop the garlic.",
            "time": "20",
            "image": 'assets/img/garlic1.jpeg'
          }
        ]
      },
      {
        "name": "Aglio Olio",
        "profilePic": "assets/img/2011-01-24-spaghetti-aglio-olio-3.jpg",
        "about": "Simple is best",
        "difficulty": "Intermediate",
        "ingredients": [ "4 onions", "3 garlic cloves", "1 chicken (whole)", "1 tbsp soy sauce"],
        "isFave": "lightgray",
        "steps": [
          {
            "name": "Step 1",
            "details": "Cut the onions into thin slices.",
            "time": "100",
            "image": 'assets/img/slice-onions.jpg'
          },
          {
            "name": "Step 2",
            "details": "Chop the garlic.",
            "time": "20",
            "image": 'assets/img/garlic1.jpeg'
          }
        ]
      },
      {
        "name": "Cheese Omelette",
        "profilePic": "assets/img/20160323-french-omelet-vicky-wasik--31-thumb-1500xauto-431042.jpg",
        "about": "Cheese + Egg = Explosion",
        "difficulty": "Intermediate",
        "ingredients": [ "4 onions", "3 garlic cloves", "1 chicken (whole)", "1 tbsp soy sauce"],
        "isFave": "lightgray",
        "steps": [
          {
            "name": "Step 1",
            "details": "Cut the onions into thin slices.",
            "time": "100",
            "image": 'assets/img/slice-onions.jpg'
          },
          {
            "name": "Step 2",
            "details": "Chop the garlic.",
            "time": "20",
            "image": 'assets/img/garlic1.jpeg'
          }
        ]
      },
      {
        "name": "Japanese Curry Omurice",
        "profilePic": "assets/img/omurice(2).jpg",
        "about": "The best of Japan",
        "difficulty": "Intermediate",
        "ingredients": [ "4 onions", "3 garlic cloves", "1 chicken (whole)", "1 tbsp soy sauce"],
        "isFave": "lightgray",
        "steps": [
          {
            "name": "Step 1",
            "details": "Cut the onions into thin slices.",
            "time": "100",
            "image": 'assets/img/slice-onions.jpg'
          },
          {
            "name": "Step 2",
            "details": "Chop the garlic.",
            "time": "20",
            "image": 'assets/img/garlic1.jpeg'
          }
        ]
      },
      {
        "name": "Lor Mee",
        "profilePic": "assets/img/Xin-Mei-Xiang-Lor-Mee-800x531.jpg",
        "about": "The kids will slurp this up!",
        "difficulty": "Intermediate",
        "ingredients": [ "4 onions", "3 garlic cloves", "1 chicken (whole)", "1 tbsp soy sauce"],
        "isFave": "lightgray",
        "steps": [
          {
            "name": "Step 1",
            "details": "Cut the onions into thin slices.",
            "time": "100",
            "image": 'assets/img/slice-onions.jpg'
          },
          {
            "name": "Step 2",
            "details": "Chop the garlic.",
            "time": "20",
            "image": 'assets/img/garlic1.jpeg'
          }
        ]
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  toggleFave(item: Item) {
    let t = this.items[this.items.indexOf(item)]["isFave"];
    if (t === "lightgray") {
      this.items[this.items.indexOf(item)]["isFave"] = "danger";
    } else if (t === "danger") {
      this.items[this.items.indexOf(item)]["isFave"] = "lightgray";
    }
  }
}
