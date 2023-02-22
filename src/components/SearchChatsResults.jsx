import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { Form } from "react-bootstrap";

const SearchChatsResults = () => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <>
      <div className="user-bar d-flex  py-4 px-3 align-items-center">
        <Icon.X onClick={() => setIsSearch(false)} size={30} />
        <span className="ml-5">Seach Messages</span>
      </div>
      <Form.Group className="mb-3 mx-4 mt-2 search-bar">
        <Form.Control type="search" placeholder="Search..." className="pl-5" />

        <Icon.Search size={20} className="search-icon" />
      </Form.Group>
      <div className="mt-5">
        <span>Search for messages with Louis </span>
      </div>
    </>
  );
};
export default SearchChatsResults;
