import { useState } from "react"

function AnimalsComponent() {
    let animals = [
        "aardvark", "albatross", "alligator", "alpaca", "anteater", "antelope", "ape", "armadillo", "baboon", "badger",
        "bat", "bear", "beaver", "bee", "beetle", "bird", "bison", "boar", "buffalo", "butterfly",
        "camel", "canary", "cat", "caterpillar", "cattle", "chameleon", "cheetah", "chicken", "chimpanzee", "chinchilla",
        "chipmunk", "clam", "cobra", "cockroach", "cod", "condor", "cow", "coyote", "crab", "crane",
        "crocodile", "crow", "deer", "dingo", "dog", "dolphin", "donkey", "dove", "dragonfly", "duck",
        "eagle", "earwig", "echidna", "eel", "elephant", "elk", "emu", "falcon", "ferret", "finch",
        "fish", "flamingo", "flea", "fly", "fox", "frog", "gazelle", "gecko", "gerbil", "giraffe",
        "goat", "goldfish", "goldfinch", "gorilla", "goose", "grasshopper", "greyhound", "groundhog", "hamster", "hare",
        "hawk", "hedgehog", "hen", "hippopotamus", "hornet", "horse", "hound", "hyena", "iguana", "impala",
        "jackal", "jaguar", "jay", "jellyfish", "kangaroo", "kingfisher", "koala", "komodo", "kookaburra", "lemur",
        "leopard", "lion", "lizard", "llama", "lobster", "locust", "lynx", "magpie", "mammal", "manatee",
        "mandrill", "marmoset", "monkey", "moose", "mouse", "mosquito", "mule", "narwhal", "ocelot", "octopus",
        "owl", "panda", "panther", "parrot", "peacock", "penguin", "pheasant", "pig", "pigeon", "platypus",
        "polar bear", "porcupine", "possum", "prairie dog", "rabbit", "raccoon", "rat", "rattle snake", "reindeer", "rhinoceros",
        "roadrunner", "rooster", "salamander", "salmon", "salamander", "seal", "shark", "sheep", "shrimp", "skunk",
        "snail", "snake", "spider", "squirrel", "squid", "starfish", "swan", "tiger", "tortoise", "toucan",
        "turkey", "turtle", "viper", "whale", "wolf", "wombat", "woodpecker", "yak", "zebra"
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleclick = () =>{
        if (currentIndex < animals.length - 1){
            setCurrentIndex(currentIndex + 1)
        } else {
            console.log("You've reached the end of the array")
        }
    }


    return(
        <>
        <h1>Animals List</h1>
        <h4>{animals[currentIndex]}</h4>
        <button onClick={handleclick}>Next</button>
        </>
    )
}
export default AnimalsComponent