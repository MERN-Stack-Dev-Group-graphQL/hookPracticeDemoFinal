import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal-root");

export default function dialog(props) {
  let element = document.createElement("div");

  useEffect(() => {
    portalRoot.appendChild(element);
    return () => {
      portalRoot.removeChild(element);
    };
  }, [element]);
  return ReactDOM.createPortal(props.children, element);
}
