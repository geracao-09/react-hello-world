import socialMedia from "/src/pages/Hideki/data/social-media.json"

const SocialLinks = () => {
    return ( 
        <>
        <ul>
            {socialMedia.map(item => {
                <li key={item.id}>
                    <a href="#">
                    
                    </a>
                </li>
            })}
        </ul>
        </>
     );
}
 
export default SocialLinks;