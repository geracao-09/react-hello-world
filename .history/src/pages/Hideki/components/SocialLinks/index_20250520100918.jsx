
const SocialLinks = ({ list }) => {
    return (
        <>
            <ul>
                {list.map(item => (
                    <li key={item.id} className="">
                        <a href="#">
                            <img
                                src={item.path}
                                alt={item.name}
                                className="w-12"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default SocialLinks;