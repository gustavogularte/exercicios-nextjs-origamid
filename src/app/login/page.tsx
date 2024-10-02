import Login from "@/components/Login/Login";
import LoginAction from "@/components/Login/LoginAction";


export default function LoginPage() {

  return (
    <main>
      <h1>Login usando Route Handlers</h1>
      <Login />
      <h1>Login usando Server Actions</h1>
      <LoginAction />
    </main>
  );
}