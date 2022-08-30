const animalKingdom = () => {
    const animal = {
      name: "Onico",
      genus: "Jaguar",
      diet: "Carnivore",
      age: 8,
    };
    return (
      <div>  
         <h1>{animal.name}</h1>
         <h1>{animal.genus}</h1>
         <h1>{animal.diet}</h1>
         <h1>{animal.age}</h1>
      </div>
    );
  };
  export default animalKingdom;