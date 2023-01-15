import './App.css';
import Testimonial from './components/Testimonial';
import Button from './components/Button';
import Photo1 from './images/user1.jpg';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState("light");
  const [themeButton, setThemeButton] = useState(true);
  
  function changeTheme(){
    if(theme == "light"){
      setTheme("dark");
    }
    else{
      setTheme("light");
    }
  };

  return (
    <div className={"App " + theme}>
      <Button
      onClickFn = {changeTheme}
      value = {theme == "dark"? "light": "dark"}
      />
      <Testimonial
        photo={Photo1}
        name="Juan Perez"
        calification="⭐⭐⭐⭐⭐"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit fuga, ullam eveniet similique sunt voluptas odio ex? Natus aliquid vitae quidem modi recusandae molestiae corporis omnis reiciendis ullam distinctio!"
      />
     <Testimonial
        photo={Photo1}
        name="Samantha Sanchez"
        calification="⭐⭐⭐"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit fuga, ullam eveniet similique sunt voluptas odio ex? Natus aliquid vitae quidem modi recusandae molestiae corporis omnis reiciendis ullam distinctio!"
      />
    </div>
  );
}

export default App;
