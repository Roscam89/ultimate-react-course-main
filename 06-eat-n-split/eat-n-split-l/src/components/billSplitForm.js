import Button from "./buttons";

export default function FormSplitBill() {
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
