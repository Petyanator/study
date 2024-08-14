import { useState } from "react";
function PokemonShow(){
    const [currentIndex, setCurrentIndex] = useState(1)

    const handleCurrentIndex = () =>{
        setCurrentIndex(currentIndex + 1)
    }

    const [imageUrl, newImageUrl] = useState(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentIndex}.png`)
    
    const handleImageUrl = () => { 
        handleCurrentIndex()
        newImageUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentIndex}.png`)
    }
    
    
    return(
        <>
            <img src={imageUrl} alt="" />
            <br />
            <button onClick={handleImageUrl}>Next</button>
        </>
    )
}
export default PokemonShow