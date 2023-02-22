import Avatar from "./Avatar";
import * as Icon from "react-bootstrap-icons";
import { Form, Dropdown } from "react-bootstrap";
import WebCam from "./WebCam";
import { useState } from "react";
import { Link } from "react-router-dom";

const ChatRoom = ({ handleSearch, handleClosedChat }) => {
  const [isCamera, setIsCamera] = useState(false);
  const handleCamera = () =>
    isCamera ? setIsCamera(false) : setIsCamera(true);
  const [isClipping, setIsClipping] = useState(false);
  const handleClipping = () => {
    isClipping ? setIsClipping(false) : setIsClipping(true);
  };
  const handleChat = () => {
    handleClosedChat();
  };
  return (
    <div>
      <div className=" user-bar profile  d-flex justify-content-between py-3 px-3 align-items-center">
        <div>
          <Avatar
            src={
              "https://www.maxpixel.net/static/photo/640/Icon-Avatar-Person-Business-Male-Profile-User-5359553.png"
            }
            width={50}
            height={50}
            alt="me"
          />
          <span className="ml-3 user-name">Louis Gadza</span>
        </div>
        <div className="d-flex align-items-center">
          <Icon.Search
            onClick={() => handleSearch()}
            size={25}
            className="mr-4"
          />
          <Dropdown>
            <Dropdown.Toggle>
              <Icon.ThreeDotsVertical size={25} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item className="py-3">Contact info</Dropdown.Item>
              <Dropdown.Item onClick={handleChat} className="py-3">
                Close chat
              </Dropdown.Item>
              <Dropdown.Item className="py-3">Clear messages</Dropdown.Item>
              <Dropdown.Item className="py-3">Delete chat</Dropdown.Item>
              <Dropdown.Item className="py-3">Report</Dropdown.Item>
              <Dropdown.Item className="py-3">Block</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {[...Array(6)].map((text, index) => {
        return (
          <span key={index} className="chat mt-2 mx-5 px-2 py-2 d-flex ">
            <span>Today I feel like crap yoh my boss even noticed</span>
            <span className="text-time d-flex justify-content-end pt-2 ml-2">
              <span>20:50</span>
              <span className="ml-1 blue-tick">
                <Dropdown className="text-options">
                  <Dropdown.Toggle>
                    <Icon.CaretDown className="text-options-arrow" size={20} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item className="py-3">Reply</Dropdown.Item>
                    <Dropdown.Item className="py-3">
                      React to Message
                    </Dropdown.Item>
                    <Dropdown.Item className="py-3">
                      Forward message
                    </Dropdown.Item>
                    <Dropdown.Item className="py-3">
                      Delete message
                    </Dropdown.Item>
                    <Dropdown.Item className="py-3">Report</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Icon.CheckAll size={20} color="rgb(83, 189, 235)" />
              </span>
            </span>
          </span>
        );
      })}
      <div className="space-between">
        {[...Array(10)].map((text, index) => {
          return (
            <div key={index} className="d-flex justify-content-end">
              <span className=" my-chat mt-2 mx-5 px-2 py-2 d-flex ">
                <span>Today I feel like crap yoh my boss even noticed</span>
                <span className="text-time d-flex justify-content-end pt-2 ml-2">
                  <span>20:50</span>
                  <span className="ml-1">
                    <Icon.Check size={20} color="gray" />
                  </span>
                </span>
              </span>
            </div>
          );
        })}
      </div>

      <div className="user-bar text-input d-flex justify-content-between py-3 px-3 align-items-center">
        <div className="d-flex">
          <Icon.EmojiSmile size={25} className="mr-3" />
          <div className="clip-files">
            <Icon.Paperclip onClick={handleClipping} size={25} />
            {isClipping && (
              <div className="d-flex files flex-column">
                <label htmlFor="image">
                  <span className=" clip-image ">
                    {" "}
                    <Icon.ImageFill size={30} />
                  </span>
                </label>
                <input
                  id="image"
                  type="file"
                  style={{ visibility: "hidden" }}
                  label="Change profile picture"
                  //   onChange={handleAvatar}
                />
                <span className=" clip-camera ">
                  {" "}
                  {isCamera && <WebCam hide={handleCamera} />}
                  <Icon.CameraFill onClick={handleCamera} size={30} />
                </span>
                <label htmlFor="file">
                  <span className="mt-4 clip-file ">
                    {" "}
                    <Icon.FileEarmarkFill size={30} />
                  </span>
                </label>
                <input
                  id="file"
                  type="file"
                  style={{ visibility: "hidden" }}
                  label="Change profile picture"
                  //   onChange={handleAvatar}
                />

                <span className="clip-contact ">
                  {" "}
                  <Icon.PersonFill size={30} />
                </span>
              </div>
            )}
          </div>{" "}
        </div>

        <Form.Group className="mb-2 w-100 mx-4  text-bar mt-2 ">
          <Form.Control
            type="text"
            placeholder="Type a meesage"
            className="pl-5"
          />
        </Form.Group>

        <div className="d-flex align-items-center">
          <Icon.MicFill size={25} />
        </div>
      </div>
    </div>
  );
};
export default ChatRoom;