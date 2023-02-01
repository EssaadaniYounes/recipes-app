import { View, Text, Button } from "react-native";
import React from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase";
import { getFirestore, setDoc, doc } from "firebase/firestore";
const PostMeal = () => {
  initializeApp(firebaseConfig);
  const handlePress = async () => {
    const fireStore = getFirestore();
    await setDoc(doc(fireStore, "recipes", "id"), {
      vegetarian: true,
      vegan: false,
      pricePerServing: 78.38,
      extendedIngredients: [
        {
          id: 19334,
          aisle: "Baking",
          image: "light-brown-sugar.jpg",
          consistency: "SOLID",
          name: "brown sugar",
          nameClean: "golden brown sugar",
          original: "1/2 cup brown sugar",
          originalName: "brown sugar",
          amount: 0.5,
          unit: "cup",
          meta: [],
          measures: {
            us: {
              amount: 0.5,
              unitShort: "cups",
              unitLong: "cups",
            },
            metric: {
              amount: 118.294,
              unitShort: "ml",
              unitLong: "milliliters",
            },
          },
        },
      ],
      id: 636080,
      title: "Breakfast Sticky Buns",
      readyInMinutes: 45,
      sourceUrl:
        "http://www.foodista.com/recipe/BGFWVQDM/breakfast-sticky-buns",
      image: "https://spoonacular.com/recipeImages/636080-556x370.jpg",
      imageType: "jpg",
      summary:
        'Breakfast Sticky Buns could be just the <b>lacto ovo vegetarian</b> recipe you\'ve been looking for. This recipe serves 8 and costs 78 cents per serving. One portion of this dish contains about <b>1g of protein</b>, <b>7g of fat</b>, and a total of <b>128 calories</b>. This recipe from Foodista requires brown sugar, butter, butterscotch pudding, and rich\'s rolls. 19 people have made this recipe and would make it again. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Overall, this recipe earns a <b>not so excellent spoonacular score of 10%</b>. Try <a href="https://spoonacular.com/recipes/breakfast-sticky-buns-1636407">Breakfast Sticky Buns</a>, <a href="https://spoonacular.com/recipes/orange-sticky-buns-for-breakfast-579303">Orange Sticky Buns for Breakfast</a>, and <a href="https://spoonacular.com/recipes/best-sticky-buns-1432607">Best Sticky Buns</a> for similar recipes.',
      instructions:
        "<ol><li>Spray a 10-inch tube pan with a no-stick cooking spray. Spread pecans evenly on bottom of pan. Place rolls on pecans and then sprinkle pudding on top of rolls.</li><li>Mix sugar into melted butter. Pour this mixture over nuts/rolls/pudding. Cover and let stand overnight. Bake at 350 degrees for 20-25 minutes. Turn over and out onto plate at once.</li></ol>",
    });
  };
  return (
    <View>
      <Button title="Add Meal" onPress={handlePress} />
    </View>
  );
};

export default PostMeal;
