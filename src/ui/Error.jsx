import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>مشکلی پیش آمده</h1>
      <p>لطفا بعدا تلاش کنید</p>
      <button onClick={() => navigate(-1)}>&larr; بازگشت</button>
    </div>
  );
}

export default NotFound;
