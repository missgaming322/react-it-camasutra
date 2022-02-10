import s from "./ProfileInfo.module.css";
import MyPosts from "../MyPosts/MyPosts";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1239690/ss_8abf9b6f76615b87a54f801f81e6a7a736b85c1c.1920x1080.jpg?t=1639877606" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descriptions
            </div>
        </div>
    );
}
export default ProfileInfo;