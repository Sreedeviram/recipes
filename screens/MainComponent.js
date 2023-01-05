import { useState } from "react";
import { CATEGORIES } from "../shared/recipes";
import FeaturedRecipesScreen from './FeaturedRecipesScreen';

const Main = () => {
    const [categories, setCategories] = useState(CATEGORIES);

    return <FeaturedRecipesScreen categories={categories} />;
};

export default Main;