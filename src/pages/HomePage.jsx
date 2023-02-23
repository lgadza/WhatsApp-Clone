import { Col, Container, Form, Dropdown, Row } from "react-bootstrap";
import Avatar from "../components/Avatar";
import * as Icon from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WebCam from "../components/WebCam";
import ChatRoom from "../components/ChatRoom";
import SearchChatsResults from "../components/SearchChatsResults";
import ClosedChat from "../components/ClosedChat";
import MySettings from "../components/MySettings";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getMe, getUsers } from "../redux/actions";

const HomePage = () => {
  const Me = useSelector((state) => state.me.me);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const registrationResponse = useSelector(
    (state) => state.registerUser.registrationResponse
  );
  // ****************STATES*****************
  const [name, setName] = useState(Me.name);
  const [userId, setUserId] = useState("");
  const [about, setAbout] = useState("Eagle all the way");
  const [isSearch, setIsSearch] = useState(false);
  const [isCamera, setIsCamera] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isChatClosed, setIsChatClosed] = useState(true);
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [isClipping, setIsClipping] = useState(false);

  // ****************STATE HANDLES*****************
  // ****************STATE HANDLES*****************
  const handleSearch = () => {
    setIsSearch(true);
  };
  const handleClosedChat = () => {
    setIsChatClosed(true);
  };

  const handleDeleteUser = () => {
    dispatch(deleteUser(userId, registrationResponse.accessToken));
  };
  // const handleCamera = () =>
  //   isCamera ? setIsCamera(false) : setIsCamera(true);
  // const handleClipping = () => {
  //   isClipping ? setIsClipping(false) : setIsClipping(true);
  // };
  useEffect(() => {
    dispatch(getUsers(registrationResponse.accessToken));
    dispatch(getMe(registrationResponse.accessToken));
  }, []);
  // console.log(registrationResponse.accessToken);
  console.log("I am Id", userId);

  return (
    <Container fluid className="home-page">
      <Row>
        <Col md={4} className="user-list px-0">
          {!isProfile && (
            <div>
              <div className="user-bar-stick pb-2">
                <div className="user-bar d-flex justify-content-between py-3 px-3 align-items-center">
                  <Link onClick={() => setIsProfile(true)}>
                    <Avatar
                      src={
                        "https://www.maxpixel.net/static/photo/640/Icon-Avatar-Person-Business-Male-Profile-User-5359553.png"
                      }
                      width={50}
                      height={50}
                      alt="me"
                    />
                  </Link>
                  <div className="d-flex align-items-center">
                    <Icon.PeopleFill size={25} />
                    <Icon.PlusCircleDotted size={25} className="mx-4" />
                    <Icon.ChatLeftTextFill size={25} className="mr-4" />
                    <Dropdown>
                      <Dropdown.Toggle>
                        <Icon.ThreeDotsVertical size={25} />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>New group</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>

                <Form.Group className="mb-3 mx-4 mt-2 search-bar">
                  <Form.Control
                    type="search"
                    placeholder="Search or start a new chat"
                    className="pl-5"
                  />

                  <Icon.Search size={20} className="search-icon" />
                </Form.Group>
              </div>
              {users.length > 0 &&
                users.map((user, index) => {
                  return (
                    <div
                      onClick={() => setIsChatClosed(false)}
                      key={index}
                      className="chat-list-bar d-flex justify-content-between py-2 px-3"
                    >
                      <div className="d-flex">
                        <Avatar
                          src={
                            "https://www.maxpixel.net/static/photo/640/Icon-Avatar-Person-Business-Male-Profile-User-5359553.png"
                          }
                          width={50}
                          height={50}
                          alt="me"
                        />
                        <div className="ml-4">
                          <div className="d-flex user-name">{user.name}</div>
                          <div className="d-flex">
                            <span className="ml-1">
                              <Icon.CheckAll
                                size={20}
                                color="rgb(83, 189, 235)"
                              />
                            </span>
                            <span>Hey man</span>
                          </div>
                        </div>
                      </div>
                      <div className="ml-3 text-time">
                        <div className="mr-auto">Yesterday</div>
                        <div>
                          <div className="messages-notifications">24</div>

                          <Dropdown className="text-option">
                            <Dropdown.Toggle>
                              <Icon.CaretDown
                                onClick={() => {
                                  setUserId(user._id);
                                }}
                                size={20}
                              />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item className="py-3">
                                Archive
                              </Dropdown.Item>

                              <Dropdown.Item className="py-3">
                                Pin chat
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={handleDeleteUser}
                                className="py-3"
                              >
                                Delete chat
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  );
                })}
              {/* <MySettings /> */}
            </div>
          )}
          <div className={`my-profile ${isProfile ? "show" : ""}`}>
            <div className="user-bar d-flex  py-3 px-3 align-items-center">
              <Icon.ArrowLeft onClick={() => setIsProfile(false)} size={30} />
              <span className="ml-5">Profile</span>
            </div>
            <div>
              <Dropdown>
                <Dropdown.Toggle>
                  <div className="profile-picture">
                    <Avatar
                      src={
                        "https://www.maxpixel.net/static/photo/640/Icon-Avatar-Person-Business-Male-Profile-User-5359553.png"
                      }
                      width={200}
                      height={200}
                      alt="me"
                    />
                    <div className="d-flex flex-column justify-content-center align-items-center change-profile">
                      <Icon.CameraFill size={35} />
                      <span>CHANGE</span>
                      <span>PROFILE PICTURE</span>
                    </div>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className="py-3">View Photo</Dropdown.Item>
                  <Dropdown.Item className="py-3">Close chat</Dropdown.Item>
                  <Dropdown.Item className="py-3">Take photo</Dropdown.Item>
                  <Dropdown.Item className="py-3">Upload Photo</Dropdown.Item>
                  <Dropdown.Item className="py-3">Report</Dropdown.Item>
                  <Dropdown.Item className="py-3">Remove Photo</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="d-flex px-4 ">
                <span className="text-success">Your name</span>
              </div>
              <div className="d-flex justify-content-between py-0    px-4 align-items-center">
                <Form.Group className=" w-100  nickname-text-bar mt-2 ">
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="py-0 pl-0"
                    maxLength={20}
                  />
                </Form.Group>
                {!isEditing && (
                  <span>
                    <Icon.PencilFill
                      onClick={() => setIsEditing(true)}
                      size={20}
                    />
                  </span>
                )}
                {isEditing && (
                  <span className="d-flex align-items-center">
                    <span>{20 - name.length}</span>
                    <Icon.EmojiSmile className="mx-3" size={20} />
                    <Icon.Check2
                      onClick={() => setIsEditing(false)}
                      size={20}
                    />
                  </span>
                )}
              </div>
              {isEditing && <hr className="mx-4  my-0 user-profile-name" />}
              <div className="my-5">
                <span className="d-flex mx-4">
                  This name will be visible to your WhatsApp contacts.
                </span>
              </div>
              <div className="d-flex px-4 ">
                <span className="text-success">About</span>
              </div>
              <div className="d-flex justify-content-between py-0    px-4 align-items-center">
                <Form.Group className=" w-100  nickname-text-bar mt-2 ">
                  <Form.Control
                    type="text"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    className="py-0 pl-0"
                    maxLength={100}
                  />
                </Form.Group>
                {!isEditingAbout && (
                  <span>
                    <Icon.PencilFill
                      onClick={() => setIsEditingAbout(true)}
                      size={20}
                    />
                  </span>
                )}
                {isEditingAbout && (
                  <span className="d-flex align-items-center">
                    <span>{100 - about.length}</span>
                    <Icon.EmojiSmile className="mx-3" size={20} />
                    <Icon.Check2
                      onClick={() => setIsEditingAbout(false)}
                      size={20}
                    />
                  </span>
                )}
              </div>
              {isEditingAbout && (
                <hr className="mx-4  my-0 user-profile-name" />
              )}
            </div>
          </div>
        </Col>
        <Col md={8} className="main-chat-messages px-0">
          {isChatClosed && <ClosedChat />}
          {!isSearch && !isChatClosed && (
            // <div>
            //   <div className=" user-bar profile  d-flex justify-content-between py-3 px-3 align-items-center">
            //     <div>
            //       <Avatar
            //         src={
            //           "https://www.maxpixel.net/static/photo/640/Icon-Avatar-Person-Business-Male-Profile-User-5359553.png"
            //         }
            //         width={50}
            //         height={50}
            //         alt="me"
            //       />
            //       <span className="ml-3 user-name">Louis Gadza</span>
            //     </div>
            //     <div className="d-flex align-items-center">
            //       <Icon.Search
            //         onClick={handleSearch}
            //         size={25}
            //         className="mr-4"
            //       />
            //       <Dropdown>
            //         <Dropdown.Toggle>
            //           <Icon.ThreeDotsVertical size={25} />
            //         </Dropdown.Toggle>

            //         <Dropdown.Menu>
            //           <Dropdown.Item className="py-3">
            //             Contact info
            //           </Dropdown.Item>
            //           <Dropdown.Item className="py-3">Close chat</Dropdown.Item>
            //           <Dropdown.Item className="py-3">
            //             Clear messages
            //           </Dropdown.Item>
            //           <Dropdown.Item className="py-3">
            //             Delete chat
            //           </Dropdown.Item>
            //           <Dropdown.Item className="py-3">Report</Dropdown.Item>
            //           <Dropdown.Item className="py-3">Block</Dropdown.Item>
            //         </Dropdown.Menu>
            //       </Dropdown>
            //     </div>
            //   </div>

            //   {[...Array(6)].map((text, index) => {
            //     return (
            //       <span
            //         key={index}
            //         className="chat mt-2 mx-5 px-2 py-2 d-flex "
            //       >
            //         <span>Today I feel like crap yoh my boss even noticed</span>
            //         <span className="text-time d-flex justify-content-end pt-2 ml-2">
            //           <span>20:50</span>
            //           <span className="ml-1 blue-tick">
            //             <Dropdown className="text-options">
            //               <Dropdown.Toggle>
            //                 <Icon.CaretDown
            //                   className="text-options-arrow"
            //                   size={20}
            //                 />
            //               </Dropdown.Toggle>

            //               <Dropdown.Menu>
            //                 <Dropdown.Item className="py-3">
            //                   Reply
            //                 </Dropdown.Item>
            //                 <Dropdown.Item className="py-3">
            //                   React to Message
            //                 </Dropdown.Item>
            //                 <Dropdown.Item className="py-3">
            //                   Forward message
            //                 </Dropdown.Item>
            //                 <Dropdown.Item className="py-3">
            //                   Delete message
            //                 </Dropdown.Item>
            //                 <Dropdown.Item className="py-3">
            //                   Report
            //                 </Dropdown.Item>
            //               </Dropdown.Menu>
            //             </Dropdown>
            //             <Icon.CheckAll size={20} color="rgb(83, 189, 235)" />
            //           </span>
            //         </span>
            //       </span>
            //     );
            //   })}
            //   <div className="space-between">
            //     {[...Array(10)].map((text, index) => {
            //       return (
            //         <div key={index} className="d-flex justify-content-end">
            //           <span className=" my-chat mt-2 mx-5 px-2 py-2 d-flex ">
            //             <span>
            //               Today I feel like crap yoh my boss even noticed
            //             </span>
            //             <span className="text-time d-flex justify-content-end pt-2 ml-2">
            //               <span>20:50</span>
            //               <span className="ml-1">
            //                 <Icon.Check size={20} color="gray" />
            //               </span>
            //             </span>
            //           </span>
            //         </div>
            //       );
            //     })}
            //   </div>

            //   <div className="user-bar text-input d-flex justify-content-between py-3 px-3 align-items-center">
            //     <div className="d-flex">
            //       <Icon.EmojiSmile size={25} className="mr-3" />
            //       <div className="clip-files">
            //         <Icon.Paperclip onClick={handleClipping} size={25} />
            //         {isClipping && (
            //           <div className="d-flex files flex-column">
            //             <label htmlFor="image">
            //               <span className=" clip-image ">
            //                 {" "}
            //                 <Icon.ImageFill size={30} />
            //               </span>
            //             </label>
            //             <input
            //               id="image"
            //               type="file"
            //               style={{ visibility: "hidden" }}
            //               label="Change profile picture"
            //               //   onChange={handleAvatar}
            //             />
            //             <span className=" clip-camera ">
            //               {" "}
            //               {isCamera && <WebCam hide={handleCamera} />}
            //               <Icon.CameraFill onClick={handleCamera} size={30} />
            //             </span>
            //             <label htmlFor="file">
            //               <span className="mt-4 clip-file ">
            //                 {" "}
            //                 <Icon.FileEarmarkFill size={30} />
            //               </span>
            //             </label>
            //             <input
            //               id="file"
            //               type="file"
            //               style={{ visibility: "hidden" }}
            //               label="Change profile picture"
            //               //   onChange={handleAvatar}
            //             />

            //             <span className="clip-contact ">
            //               {" "}
            //               <Icon.PersonFill size={30} />
            //             </span>
            //           </div>
            //         )}
            //       </div>{" "}
            //     </div>

            //     <Form.Group className="mb-2 w-100 mx-4  text-bar mt-2 ">
            //       <Form.Control
            //         type="text"
            //         placeholder="Type a meesage"
            //         className="pl-5"
            //       />
            //     </Form.Group>

            //     <div className="d-flex align-items-center">
            //       <Icon.MicFill size={25} />
            //     </div>
            //   </div>
            // </div>
            <ChatRoom
              handleSearch={handleSearch}
              handleClosedChat={handleClosedChat}
            />
          )}
          <div className={`search-messages ${isSearch ? "show" : ""}`}>
            <div className="user-bar d-flex  py-4 px-3 align-items-center">
              <Icon.X onClick={() => setIsSearch(false)} size={30} />
              <span className="ml-5">Search Messages</span>
            </div>
            <Form.Group className="mb-3 mx-4 mt-2 search-bar">
              <Form.Control
                type="search"
                placeholder="Search..."
                className="pl-5"
              />

              <Icon.Search size={20} className="search-icon" />
            </Form.Group>
            <div className="mt-5">
              <span>Search for messages with {Me.name} </span>
            </div>
          </div>
          {/* <SearchChatsResults /> */}
        </Col>
      </Row>
    </Container>
  );
};
export default HomePage;
