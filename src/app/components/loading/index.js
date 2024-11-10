'use client';
import "./index.css"


export default function Loading({ children, status }) {

  return (
        <div className= {status?"loading show": "loading"}>
          <div className="loading-espadas">
            <svg width="50" height="200" viewBox="0 0 100 300" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,10 60,150 40,150" fill="#C0C0C0" />
              
              <rect x="30" y="150" width="40" height="10" fill="#8B4513" />
              
              <rect x="45" y="160" width="10" height="70" fill="#8B4513" />
              
              <circle cx="50" cy="220" r="10" fill="#8B4513" />
            </svg>
            <svg width="50" height="200" viewBox="0 0 100 300" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,10 60,150 40,150" fill="#C0C0C0" />
              
              <rect x="30" y="150" width="40" height="10" fill="#8B4513" />
              
              <rect x="45" y="160" width="10" height="70" fill="#8B4513" />
              
              <circle cx="50" cy="220" r="10" fill="#8B4513" />
            </svg>
            <p>Carregando...</p>
          </div>

        </div>
  );
}
