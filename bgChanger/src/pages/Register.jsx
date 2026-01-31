import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // later: API call
    console.log({ name,email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white/5 backdrop-blur p-8 rounded-2xl w-96"
      >
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        <input
          type="name"
          placeholder="Name"
          className="w-full mb-4 p-3 rounded bg-white/10"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded bg-white/10"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded bg-white/10"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
