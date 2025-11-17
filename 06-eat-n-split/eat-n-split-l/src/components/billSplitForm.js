import { useState } from "react";
import Button from "./buttons";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState();
  const [paidbyUser, setPaidbyUser] = useState();
  const friendPay = bill && paidbyUser ? bill - paidbyUser : "";
  const [whoisPaying, setWhoisPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidbyUser) return;
    onSplitBill(whoisPaying === "user" ? friendPay : -paidbyUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split A BILL WITH {selectedFriend.name}</h2>
      <label>💰Bill value:</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>

      <label>🤘🏻Your expenses:</label>
      <input
        type="text"
        value={paidbyUser}
        onChange={(e) =>
          setPaidbyUser(
            Number(e.target.value) > bill ? paidbyUser : Number(e.target.value)
          )
        }
      ></input>

      <label>🙍🏻‍♂️{selectedFriend.name}'s expenses:</label>
      <input type="text" disabled value={Number(friendPay)}></input>

      <label>😍 Whos paying the bill ?</label>
      <select
        value={whoisPaying}
        onChange={(e) => setWhoisPaying(e.target.value)}
      >
        <option value={"user"}>You</option>
        <option value={"friend"}>{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
