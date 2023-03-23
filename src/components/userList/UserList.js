import React, { useState } from "react";

const UserList = ({ user }) => {
  const [gender, setGender] = useState(user.gender);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [phone, setPhone] = useState(user.phone);
  const [mail, setMail] = useState(user.email);

  // alternatif api adresi kullanıldığında data değişeceği için firstname ve lastname yerine daha farklı isimlendirilmektedir

  return (
    <li className="home__container__lists__card">
      <div className="home__container__lists__card__gender">
        <input
          type="text"
          value={gender}
          name="gender"
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div className="home__container__lists__card__name">
        <input
          name="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          name="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="home__container__lists__card__mail">
        <input
          name="mail"
          type="text"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
      </div>
      <div className="home__container__lists__card__phone">
        <input
          name="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
    </li>
  );
};

export default UserList;
