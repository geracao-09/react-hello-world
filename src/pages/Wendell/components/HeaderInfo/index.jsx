const HeaderInfo = () => {
    return (
        <div className="flex items-center justify-center h-100 gap-10">
            <div>
                <h1 className="text-white text-4xl font-bold w-fit">
                    Boas vindas ao Laboratório!
                </h1>
            </div>
            <div>
                <img src="/public/avatar-vendel.jpg" alt="Avatar Vendel" className="rounded-full w-32 h-32 border border-white" />
            </div>
        </div>
    );
}

export default HeaderInfo;