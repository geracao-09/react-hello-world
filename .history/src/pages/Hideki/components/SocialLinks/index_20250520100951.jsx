
const SocialLinks = ({ list }) => {
    return (
        <>
            <ul className="flex gap-6">
                {list.map(item => (
                    <li key={item.id}>
                        <a href="#">
                            <img
                                src={item.path}
                                alt={item.name}
                                className="w-10"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default SocialLinks;