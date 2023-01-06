import RenderRecipe from '../features/recipes/RenderRecipe';

const RecipeListScreen = ({route}) => {
    const {recipe} = route.params;
    return <RenderRecipe recipe={recipe} />;
};

export default RecipeListScreen;