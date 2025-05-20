const Header = () => {
    return (
        <header className="header">
            <div>
                <div className="flex align-center justify-center">
                    <h1 className="text-white text-4xl font-bold">
                        Boas vindas ao Laboratório!
                    </h1>
                </div>
                <div>
                    <img src="/public/avatar-vendel.jpg" alt="Avatar Vendel" className="rounded-full w-32 h-32 border border-white" />
                </div>
            </div>
        </header>
    );
}

export default Header;