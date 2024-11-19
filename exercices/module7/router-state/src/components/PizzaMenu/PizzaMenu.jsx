import "./PizzaMenu.css";

const PizzaMenu = ({ pizzas }) => {
  return (
    <div className="pizza-menu">
      <h2>Nos pizzas</h2>
      <table>
        <thead>
          <tr>
            <th>Pizza</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {pizzas.map((pizza) => (
            <tr key={pizza.id}>
              <td>{pizza.title}</td>
              <td>{pizza.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PizzaMenu;
