function Menu(props) {
  return (
    <div className="menu">
      <div className="menu-items">
        <div className="menu-item">
          <p className="text-menu gap"></p>
          <input type="text gap" className="input" />
        </div>
        <div className="menu-item">
          <button className="btn gap">Buscar Background</button>
          <button className="btn gap">Adicionar Linha</button>
          <button className="btn gap">Remover Linha</button>
        </div>
        <div className="menu-item check">
          <input
            type="checkbox"
            onClick={() => props.changeDisplay()}
            className="input"
          />
          <p className="text-menu2">Ao vivo</p>
        </div>
        <div className="menu-item">
          <button className="btn gap">Exportar</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
