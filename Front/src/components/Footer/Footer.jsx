const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white">
      <div>
        <span className="footer-title">Wido Rugs</span>
        <p>
          Alfombras hechas a mano con técnica tufting.
          <br />
          Diseños personalizados para tu espacio.
        </p>
      </div>

      <div>
        <span className="footer-title">Secciones</span>
        <a className="link link-hover">Inicio</a>
        <a className="link link-hover">Pedir Ya!</a>
      </div>

      <div>
        <span className="footer-title">Contacto</span>
        <a className="link link-hover">📍 Argentina, Córdoba</a>
        <a className="link link-hover">📧 widorugs@gmail.com</a>
        <a className="link link-hover">📱 Instagram</a>
      </div>

      <div>
        <span className="footer-title">Seguinos</span>
        <div className="grid grid-flow-col gap-4">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.058 0 14.01-7.496 14.01-13.986 0-.21 0-.423-.015-.637A10.012 10.012 0 0024 4.557z" />
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-.964-.42-1.992-.726-3.054-.908-1.09-.185-2.185-.276-3.277-.276-1.092 0-2.187.091-3.278.276-1.061.182-2.089.488-3.053.908C5.065 3.616 3.616 5.065 3.184 6.953c-.42.964-.726 1.992-.908 3.054C2.091 11.098 2 12.193 2 13.284c0 1.092.091 2.187.276 3.278.182 1.061.488 2.089.908 3.053.432 1.888 1.881 3.337 3.769 3.769.964.42 1.992.726 3.053.908 1.091.185 2.186.276 3.278.276 1.092 0 2.187-.091 3.277-.276 1.062-.182 2.09-.488 3.054-.908 1.888-.432 3.337-1.881 3.769-3.769.42-.964.726-1.992.908-3.053.185-1.091.276-2.186.276-3.278 0-1.091-.091-2.186-.276-3.277-.182-1.062-.488-2.09-.908-3.054-.432-1.888-1.881-3.337-3.769-3.769zM12 17.5a5.5 5.5 0 115.5-5.5 5.506 5.506 0 01-5.5 5.5zm6.5-10a1.5 1.5 0 111.5-1.5 1.502 1.502 0 01-1.5 1.5z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;