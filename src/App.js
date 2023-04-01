import React, { useState } from "react";
import PasswordChecklist from "react-password-checklist";
import { MdDone, MdClose } from "react-icons/md";

export default function App() {
  const [password, setPassword] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState(false);
  const [showPasswordChecklist, setShowPasswordChecklist] = useState(true);
  // console.log(password);
  // console.log(passwordConfirm);
  
// cacher le PasswordChecklist lorsque l'utilisateur à insérer tout les caractères qu'il faut pour définir son mot de passe
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length >= 8) {
      setShowPasswordChecklist(false);
    } else {
      setShowPasswordChecklist(true);
    }
  };
  // handlePasswordFocus lorsque l'utilisateur clique sur l'input
  const handlePasswordFocus = () => {
    setShowPasswordChecklist(true);
  };
// handlePasswordBlur si l'user clique hors de l'input le PasswordCheckList passe au false
  const handlePasswordBlur = () => {
    setShowPasswordChecklist(false);
  };
  return (
    <div className="w-full mx-auto flex justify-center items-center pt-20">
      <form className="space-y-5">
        <div className="flex flex-col">
          <label className="text-semibold">Password</label>
          <input
            type="password"
            placeholder="Entrer votre mot de passe"
            className="border-2 border-black rounded-md py-1 text-xl focus:outline-none p-2"
            onChange={handlePasswordChange}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-semibold">Confirm password</label>
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            className="border-2 border-black rounded-md py-1 text-xl focus:outline-none p-2"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        {showPasswordChecklist && (
          <PasswordChecklist
            rules={["number", "capital", "specialChar", "lowercase"]}
            minLength={10}
            value={password}
            valueAgain={passwordConfirm}
            className="text-xs font-bold"
            iconComponents={{
              ValidIcon: <MdDone size={20} className="text-green-500" />,
              InvalidIcon: <MdClose size={20} className="text-red-500" />,
            }}
            messages={{
              number: "doit comporter des nombres",
              capital: "doit comporter des nombres majuscules",
              specialChar: "doit comporter des caractères spéciaux",
              lowercase: "doit comporter des minuscules",
            }}
          />
        )}
      </form>
    </div>
  );
}
