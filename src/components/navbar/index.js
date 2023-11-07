import Button from "../Button";
import SearchBox from "../SearchBox";
import "./navbar.css";

export default () => {
  return (
    <div className="navbar">
      <img src="qtify_logo.png" width={67} height={34} />
      <SearchBox />
      <Button>Give Feedback</Button>
    </div>
  );
};
