import * as Icon from "react-bootstrap-icons";
import Avatar from "./Avatar";

const MySettings = ({ isSettings, user }) => {
  return (
    <div className="pointer">
      <div className="user-bar d-flex  py-3 px-3 align-items-center">
        <Icon.ArrowLeft onClick={() => isSettings()} size={30} />
        <span className="ml-5">Settings</span>
      </div>
      <div>
        <div className="d-flex photoSection">
          <Avatar
            src={
              "https://www.maxpixel.net/static/photo/640/Icon-Avatar-Person-Business-Male-Profile-User-5359553.png"
            }
            width={150}
            height={150}
            alt="me"
          />
          <div className="d-flex flex-column  ml-3 justify-content-center align-items-center">
            <span className="flex">{user.name}</span>
            <span className="flex">About</span>
          </div>
        </div>
        <div className="d-flex settings-bar ">
          <div className="moreSettings">
            <Icon.BellFill size={20} />
            <span className="ml-4">Notifications</span>
          </div>
          <div className="moreSettings">
            <Icon.LockFill size={20} />
            <span className="ml-4">Privacy</span>
          </div>
          <div className="moreSettings">
            <Icon.ShieldFill size={20} />
            <span className="ml-4">Security</span>
          </div>
          <div className="moreSettings">
            <Icon.BrightnessHighFill size={20} />
            <span className="ml-4">Theme</span>
          </div>
          <div className="moreSettings">
            <Icon.Image size={20} />
            <span className="ml-4">Chat wallpaper</span>
          </div>
          <div className="moreSettings">
            <Icon.Download size={20} />
            <span className="ml-4">Media auto-download</span>
          </div>
          <div className="moreSettings">
            <Icon.FileEarmarkTextFill size={20} />
            <span className="ml-4">Request Account info</span>
          </div>
          <div className="moreSettings">
            <Icon.PcDisplayHorizontal size={20} />
            <span className="ml-4">Desktop settings </span>
          </div>
          <div className="moreSettings">
            <Icon.PatchCheckFill size={20} />
            <span className="ml-4">Keyboard shortcuts</span>
          </div>
          <div className="moreSettings">
            <Icon.QuestionCircleFill size={20} />
            <span className="ml-4">Help</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySettings;
