import React, { useState } from "react";

const Context = React.createContext(null);

const ProviderWrapper = ({ children }) => {
  const [sortedOpinions, setSortedOpinions] = useState([]);

  const increaseOpinionScore = (opinionId) => {
    const newSortedOpinions = [...sortedOpinions];
    const opinionToUpdate = newSortedOpinions.find(
      (opinion) => opinion.id === opinionId
    );
    if (!opinionToUpdate) return;

    opinionToUpdate.score += 1;
    sortOpinions(newSortedOpinions);
  };

  const createOpinion = (opinion) => {
    const newSortedOpinions = sortedOpinions.concat({
      id: sortedOpinions.length + 1,
      text: opinion,
      score: 1,
    });

    sortOpinions(newSortedOpinions);
  };

  const sortOpinions = (opinions) => {
    const newSortedOpinions = [...opinions].sort((a, b) => b.score - a.score);
    setSortedOpinions(newSortedOpinions);
  };

  const exposedValue = {
    sortedOpinions,
    increaseOpinionScore,
    createOpinion,
  };

  return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
};

export { Context, ProviderWrapper };