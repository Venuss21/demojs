//import logo from './logo.svg';
import './App.css';

function App() {
  const username = document.querySelector("input[name='username']").value;
  const password = document.querySelector("input[name='password']").value;

  // Kiểm tra xem dữ liệu có hợp lệ hay không
  if (username === "" || password === "") {
    // Nếu dữ liệu không hợp lệ, hiển thị thông báo lỗi
    alert("Vui lòng nhập tên đăng nhập và mật khẩu.");
  } else {
    // Nếu dữ liệu hợp lệ, gửi dữ liệu lên server
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Nếu đăng nhập thành công, chuyển hướng người dùng đến trang chủ
        if (data.success) {
          window.location.href = "/";
        } else {
          // Nếu đăng nhập thất bại, hiển thị thông báo lỗi
          alert(data.message);
        }
      });
  }
}

export default App;
