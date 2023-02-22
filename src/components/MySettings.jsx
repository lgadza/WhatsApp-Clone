import * as Icon from "react-bootstrap-icons";
import Avatar from "./Avatar";

const MySettings = () => {
  return (
    <div>
      <div className="user-bar d-flex  py-3 px-3 align-items-center">
        <Icon.ArrowLeft size={30} />
        <span className="ml-5">Settings</span>
      </div>
      <div>
        <div className="d-flex ml-4 ">
          <Avatar
            src={
              "https://www.maxpixel.net/static/photo/640/Icon-Avatar-Person-Business-Male-Profile-User-5359553.png"
            }
            width={150}
            height={150}
            alt="me"
          />
          <div className="d-flex flex-column  ml-3 justify-content-center align-items-center">
            <span className="flex">Nickname</span>
            <span className="flex">About</span>
          </div>
        </div>
        <div className="d-flex mx-4 settings-bar">
          <Icon.Bell size={20} />
          <span className="ml-4">Notifications</span>
          <hr />
        </div>
      </div>
    </div>
  );
};
export default MySettings;
