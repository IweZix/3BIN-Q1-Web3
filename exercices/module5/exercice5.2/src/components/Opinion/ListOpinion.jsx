import { Context as OpinionContext } from "../../contexts/OpinionContext";
import { useContext } from "react";
import Opinion from "components/Opinion/Opinion";

const ListOpinions = () => {
  const { sortedOpinions } = useContext(OpinionContext);

  return sortedOpinions.map((opinion) => (
    <Opinion key={opinion.id} {...{ opinion }} />
  ));
};

export default ListOpinions;