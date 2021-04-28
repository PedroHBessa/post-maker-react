function Panel(props) {
  return (
    <div className="panel-main">
      <div className="panel">
        <div className="panel-tittle">
          <p className="panel-tittle-text">SEXTA</p>
          <p className="panel-tittle-date">16 DE ABRIL</p>
        </div>
        <div className={props.display}>
          <span>AO VIVO</span>
        </div>
        <div className="panel-items">{props.items}</div>
        <div className="panel-footer">
          <p className="panel-footer-tittle">O MELHOR DO ESPORTE</p>
          <p className="panel-footer-content">TODOS OS DIAS</p>
        </div>
      </div>
    </div>
  );
}

export default Panel;
