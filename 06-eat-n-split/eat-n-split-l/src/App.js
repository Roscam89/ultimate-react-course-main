import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <Friends />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function Friends() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friendsEl) => (
        <Friend friendProp={friendsEl} key={friendsEl.id} />
      ))}
    </ul>
  );
}

function Friend({ friendProp }) {
  return (
    <li>
      <img src={friendProp.image} alt="friend" />
      <h3>{friendProp.name}</h3>
      {friendProp.balance < 0 && (
        <p className="red">
          You owe {friendProp.name} ${Math.abs(friendProp.balance)}
        </p>
      )}
      {friendProp.balance > 0 && (
        <p className="green">
          {friendProp.name} owes you {friendProp.name} $
          {Math.abs(friendProp.balance)}
        </p>
      )}
      {friendProp.balance === 0 && (
        <p className="green">You and {friendProp.name} are even</p>
      )}

      <Button>Select</Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>🙍🏻‍♂️Friend name</label>
      <input type="text"></input>
      <label>🙍🏻‍♂️Image url</label>
      <input type="text"></input>
      <Button>Add </Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split A BILL WITH X</h2>
      <label>💰Bill value</label>
      <input type="text"></input>
      <label>🤘🏻Your expenses</label>
      <input type="text"></input>
      <label>🙍🏻‍♂️X expenses:</label>
      <input type="text" disabled></input>
      <label>😍 Whos paying the bill</label>
      <select>
        <option>You</option>
        <option>X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
