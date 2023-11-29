function MenuItem() {
  return (
    <div
      style={{
        display: "flex",
        height: "120px",
        width: "100%",
        border: "2px solid blue",
      }}
    >
      <div
        style={{
          width: "120px",
          height: "100%",
          border: "2px solid yellow",
        }}
      ></div>
      <div
        style={{
          color: "white",
          flex: 1,
          border: "2px solid orange",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p>Album Name</p>
        <p style={{ fontSize: "8px" }}>Album Name ajdk dbkjsdjk kjdnajkdn</p>
      </div>
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "120px",
          height: "100%",
          border: "2px solid yellow",
        }}
      >
        100 follows
      </div>
    </div>
  );
}

export default ({ data }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "570px",
        maxHeight: "500px",
        border: "5px solid red",
        overflowY: "auto",
        top: "60px",
        backgroundColor: "var(--css-black)",
      }}
    >
      {data.map((n) => (
        <MenuItem />
      ))}
    </div>
  );
};
