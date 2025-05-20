
const SocialLinks = ({ list }) => {
    return (
        <>
            <ul className=>
                {list.map(item => (
                    <li key={item.id}>
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