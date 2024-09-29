import Button from "./buttons";
export const initialFriends = [
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

export default function Friends({ friends }) {
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
        <p className="">You and {friendProp.name} are even</p>
      )}

      <Button>Select</Button>
    </li>
  );
}
