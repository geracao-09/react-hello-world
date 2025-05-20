const Header = () => {
    return (
      <header>
        <nav className="flex justify-between items-center bg-[#1F1F1F] px-6 py-4 text-white shadow-md">
          <div className="flex items-center gap-4">
            <img
              src="https://avatars.githubusercontent.com/u/98492418?v=4"
              alt="Foto de perfil de Gabriel"
              className="w-12 h-12 rounded-full"
            />
            <span className="text-lg font-semibold">Gabriel Cordeiro</span>
          </div>
          <ul className="flex gap-6 text-sm md:text-base">
            <li>
              <a href="#home" className="hover:text-gray-300 transition">Home</a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-gray-300 transition">Sobre mim</a>
            </li>
            <li>
              <a href="#projetos" className="hover:text-gray-300 transition">Projetos</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  