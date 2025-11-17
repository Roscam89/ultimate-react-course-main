import { useState } from "react";
import FormAddFriend from "./components/friendForm";
import FormSplitBill from "./components/billSplitForm";
import Friends, { initialFriends } from "./components/friendData";
import Button from "./components/buttons";

export default function App() {
  //States
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  //Handlers

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  function handleFriends(friend) {
    setFriends((e) => [...e, friend]);
    setShowAddFriend(false);
  }
  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  //

  return (
    <div className="app">
      <div className="sidebar">
        <Friends
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleFriends} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
