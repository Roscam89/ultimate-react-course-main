import { useState } from "react";
import FormAddFriend from "./components/friendForm";
import FormSplitBill from "./components/billSplitForm";
import Friends, { initialFriends } from "./components/friendData";
import Button from "./components/buttons";

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleFriends(friend) {
    setFriends((e) => [...e, friend]);
    setShowAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <Friends friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleFriends} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
