const NotFound = (props) => {
  const { className = "", content } = props;
  return (
    <div className={`no-item-container d-flex justify-center`}>
      <div className={`text-center ${className}`}>{content}</div>
    </div>
  );
};

export default NotFound;
