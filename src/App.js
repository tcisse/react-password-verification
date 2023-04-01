import React, { useState } from "react";
import PasswordChecklist from "react-password-checklist";
import { MdDone, MdClose } from "react-icons/md";

export default function App() {
  const [password, setPassword] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState(false);
  // console.log(password);
  // console.log(passwordConfirm);

  return (
    <div className="w-96 mx-auto flex justify-center items-center">
      <form className="space-y-5">
        <div className="flex flex-col">
          <label>Password</label>
          <input
            type="Name"
            className="border-2 border-lime-600 rounded-md py-1 text-2xl focus:outline-none p-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label>Confirm password</label>
          <input
            type="password"
            className="border-2 border-lime-600 rounded-md py-1 text-2xl focus:outline-none p-2"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <PasswordChecklist
          rules={["number", "capital", "specialChar", "lowercase"]}
          minLength={10}
          value={password}
          valueAgain={passwordConfirm}
          className="text-xs text-black"
          iconComponents={{
            ValidIcon: <MdDone size={15} />,
            InvalidIcon: <MdClose size={15} />,
          }}
          messages={{
            number: "doit comporter des nombres",
            capital: "doit comporter des nombres majuscules",
            specialChar: "doit comporter des caractères spéciaux",
            lowercase: "doit comporter des minuscules",
          }}
        />
      </form>
    </div>
  );
}
