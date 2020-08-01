import ReactDOM from "react-dom";
import { useEffect } from "react";
const portalRoot = document.getElementById("portal-root");

export default function Dialog(props) {
  let element = document.createElement("div");

  useEffect(() => {
    portalRoot.appendChild(element);
    return () => {
      portalRoot.removeChild(element);
    };
  }, [element]);
  return ReactDOM.createPortal(props.children, element);
}
