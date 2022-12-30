import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlesSm">Parth</span>
        <span className="headerTitlesLg">Blog App</span>
      </div>
      <img
        className="headerImg"
        src="/images/background/background.jpg"
        alt=""
      />
    </div>
  );
}
