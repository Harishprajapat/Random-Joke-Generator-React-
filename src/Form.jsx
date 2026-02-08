import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      userName: "",
      password: ""
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name </label>

        <input
          type="text"
          placeholder="Enter Your name"
          value={formData.fullName}
          id="fullName"
          name="fullName"
          onChange={handleInputChange}
        />

        <br />
        <br />
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          placeholder="Username"
          value={formData.userName}
          id="userName"
          name="userName"
          onChange={handleInputChange}
        />

         <br />
        <br />
        <label htmlFor="password">PassWord</label>
        <input
          type="text"
          placeholder="password"
          value={formData.password}
          id="password"
          name="password"
          onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
