import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const HomePage = () => {
  const onClickHandler = () => {};
  return (
    <div className="container">
      <div className="matrix-parent">
        <h1>به پیج سورت ماتریس خوش آمدید</h1>
        <div className="mt-100">
          <Link to="/matrix">
            <Button type="submit" width={400} height={60} onClick={onClickHandler}>
              برو به صفحه ماتریس ها
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
