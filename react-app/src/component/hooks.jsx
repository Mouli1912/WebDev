

import {usestate} from 'react';
import {usestate} from 'react-dom/client';

function Favoritecolor(){
    const [color, setColor] = useState("red");
     retun(
        <>
        <h1>My favorite color is {color}!</h1>
        <button type  ="button"onClick={()=>setColor("blue")}>Blue</button>
        <button type="button" onClick={()=>setColor("red")}>Red</button>
        <button type="button" onClick={()=>setColor("green")}>Green</button>
        <button type="button" onClick={()=>setColor("black")}>Black</button>

        </>
     );
}

createRoot(document.getElementById('root')).render(
    <FavoriteColor/>
);

export default FavoriteColor;
