
const SocialLinks = ({ list }) => {
    return (
        <>
            <ul>
                {list.map(item => (
                    <li key={item.id}>
                        <a href="#">
                            <img
                                src={item.path}
                                alt={item.name}
                                className=""
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default SocialLinks;