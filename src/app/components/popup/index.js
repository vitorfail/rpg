'use client';
import "./index.css"


export default function Popup({ children, status }) {

  return (
        <div className= {status?"popup_registrar show": "popup_registrar"}>
            <div className="alerta">
            { children }
            </div>
        </div>
  );
}
