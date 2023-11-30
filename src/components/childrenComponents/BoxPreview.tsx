const BoxPreview = (): JSX.Element => {
  return (
    <div className="col-4">
      <div className="box-preview">
        <div className="box-preview__cover">
          <img src="/images/react.png" alt="" />
        </div>
        <div className="box-preview__content">
          <div className="title">
            <h4>React js</h4>
          </div>
          <div className="text">
            <p>
              The ultimate and popular Javascript Framework for the frontend
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxPreview;
