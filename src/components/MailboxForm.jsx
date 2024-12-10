import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
    boxSize: "",
    boxHolder: "",
  };

const MailboxForm = ({ addBox }) => {
  const [formData, setFormData] = useState(initialState);
  const navigator = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    navigator("/mailboxes");
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New MailBox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxHolder">Enter a Boxholder: </label>
        <input
          type="text"
          id="boxHolder"
          name="boxHolder"
          value={formData.name}
          required="true"
          onChange={handleChange}
        />
        <select value={formData.name} name ="boxSize" onChange={handleChange}>
            <option value="select-option">Select Option</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;
