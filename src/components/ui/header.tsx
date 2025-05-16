import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0px 20px 0px 20px",
        alignItems: "center",
      }}
    >
      <h1>Memory game</h1>
      <button
        className="help-button"
        style={{ border: "none", background: "none" }}
        title="Help"
      >
        <h1>
          Help <FontAwesomeIcon icon={faCircleQuestion} />
        </h1>
      </button>
    </div>
  );
}

export { Header };
