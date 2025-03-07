function Content(props) {
  console.log(props);
  return (
    <>
      <div className="box">{props.text}</div>
    </>
  );
}

export default Content;
