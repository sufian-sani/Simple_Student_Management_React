const Demo = (props) => {
  return (
    <div className="App">
      Hello App
      {props.names.map((name) => (
        <p>{name}</p>
      ))}
    </div>
  );
};

export default Demo;
