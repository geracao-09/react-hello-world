import socialMedia from "/src/pages/Hideki/data/social-media.json"

const SocialLinks = () => {
    return ( 
        <>
        <ul>
            {socialMedia.map()}
        </ul>
        </>
     );
}
 
export default SocialLinks;