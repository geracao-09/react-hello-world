
const SocialLinks = ({ list }) => {
    return (
        <>
            <ul className="flex gap-6">
                {list.map(item => (
                    <li key={item.id}>
                        <a href="#" target="_blank">
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