const Card = props => {
  const style = props.isDragging
    ? `card text-white border-light text-light`
    : `card text-${props.color}`;

  return props.connectDropTarget(
    <article className="pt-1 pb-1">
      {props.connectDragSource(
        <div className={style}>
          <div className="card-body">
            <h5>{props.title}</h5>
          </div>
        </div>
      )}
    </article>
  );
};

const typeCard = Symbol.for("@@Type::Card");

const specTarget = {
  drop(props) {
    return {
      id: props.id,
      index: props.index
    };
  }
};

const specSource = {
  beginDrag(props) {
    return {
      id: props.id
    };
  },
  endDrag(props, monitor) {
    if (!monitor.didDrop()) {
      return;
    }
    const source = monitor.getItem();
    const target = monitor.getDropResult();

    if (source.id === target.id) {
      return;
    }
    props.moveCard(source.id, target.index);
  }
};

const collectTarget = connect => ({
  connectDropTarget: connect.dropTarget()
});

const collectSource = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

const CardWithDnD = ReactDnD.DropTarget(typeCard, specTarget, collectTarget)(
  ReactDnD.DragSource(typeCard, specSource, collectSource)(Card)
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.state = {
      cards: []
    };
  }

  moveCard(id, index) {
    const { cards } = this.state;
    const sourceCard = cards.find(card => card.id === id);
    const sortCards = cards.filter(card => card.id !== id);

    sortCards.splice(index, 0, sourceCard);
    this.setState({ cards: sortCards });
  }

  render() {
    const { cards } = this.state;
    return (
      <div className="offset-2 col-8">
        {cards.map((card, i) => (
          <CardWithDnD
            key={card.id}
            index={i}
            moveCard={this.moveCard}
            {...card}
          />
        ))}
      </div>
    );
  }
}


