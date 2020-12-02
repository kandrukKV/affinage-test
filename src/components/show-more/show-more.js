import './show-more.css';

const ShowMore = (props) => {

  const {onClickReadMore, title} = props;

  return (
      <button
        className="more-btn"
        type="button"
        onClick={onClickReadMore}
      >
        {title}
      </button>
  );
}

export default ShowMore;
