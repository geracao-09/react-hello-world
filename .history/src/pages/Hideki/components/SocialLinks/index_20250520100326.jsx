
const SocialLinks = () => {
    return ( 
        <>
        <ul>
            {socialMedia.map(item => {
                <li key={item.id}>
                    <a href="#">
                        <img src={item.path} alt={item.name} />
                    </a>
                </li>
            })}
        </ul>
        </>
     );
}
 
export default SocialLinks;