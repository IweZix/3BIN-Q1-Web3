import { useOutletContext } from "react-router-dom";
import AudioPlayer from "components/AudioPlayer/AudioPlayer";
import sound from "../../assets/sounds/Infecticide-11-Pizza-Spinoza.mp3";
import PizzaMenu from "components/PizzaMenu/PizzaMenu";
import DrinkMenu from "components/DrinkMenu/DrinkMenu";

const HomePage = () => {
  const {
    actionToBePerformed,
    clearActionToBePerformed,
    pizzas,
    drinks,
  } = useOutletContext();

  return (
    <>
      <h1>Ma Pizzeria</h1>
      <p>
        Parce que nous aimons le JS/TS, vous pouvez cliquer sur le header pour
        démarrer / stopper la musique ; )
      </p>
      <AudioPlayer
        sound={sound}
        actionToBePerformed={actionToBePerformed}
        clearActionToBePerformed={clearActionToBePerformed}
      />

      <PizzaMenu pizzas={pizzas} />

      <DrinkMenu title="Nos boissons" drinks={drinks} />
    </>
  );
};



export default HomePage;
