import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";
import UserList from "../../components/userList/UserList";
import { decrementSkip, incrementSkip } from "../../redux/UserSlice";
import fetchUsers from "../../servers/Api";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.data.data);
  const page = useSelector((state) => state.data.page);
  const status = useSelector((state) => state.data.status);

  console.log(users);
  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  const handleNext = () => {
    dispatch(incrementSkip());
  };

  const handlePrevious = () => {
    dispatch(decrementSkip());
  };

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__container__headers">
          <div className="home__container__headers__gender">
            <h3>Gender</h3>
          </div>
          <div className="home__container__headers__name">
            <h3>Name and Surname</h3>
          </div>
          <div className="home__container__headers__mail">
            <h3>Email</h3>
          </div>
          <div className="home__container__headers__phone">
            <h3>Phone Number</h3>
          </div>
        </div>

        {users ? (
          <ul className="home__container__lists">
            {users.map((user, index) => (
              <UserList key={index} user={user} />
            ))}
          </ul>
        ) : (
          <h1>No users found</h1>
        )}
        <div className="home__container__paginations">
          <button onClick={handlePrevious} disabled={page === 0}>
            prev
          </button>
          <button onClick={handleNext} disabled={status === "loading"}>
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
