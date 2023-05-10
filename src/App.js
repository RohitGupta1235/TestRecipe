import React from "react";
import "./App.css";
import NavBar from "./components/common/NavBar";
import Home from "./pages/Home";
import Recipies from "./pages/Recipies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import AuthenticationForm from "./Form/AuthenticationForm";
import Test from "./Form/Test";
//import AddRecipe from "./pages/AddRecipe";
import RecipeApp from "./pages/RecipeApp";
// import RecipeApp from "./pages/RecipeApp";

function App() {
  //jin bhi component mein routing dalnin using routes se wrap krna hoga
  //url ka jo tarikka hoga ho na use route mein likhna hoga
  //jo bbhi path dena chaungae localhost:3000/ k baad

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipies />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          <Route path="/myRecipes" element={<AuthenticationForm />} />
          <Route path="/a" element={<Test />} />
          <Route path="/add" element={<RecipeApp />} />
          {/* <Route path="/addT" element={<AddTodo />} /> */}
          {/* <Route path='/chatGpt' element={<ChatGpt/>}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
