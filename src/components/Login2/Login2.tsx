import { login } from '@/actions/login';


export default async function Login2() {
  async function logar(event: React.FormEvent<HTMLFormElement>) {
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;
    await login(username, password)
  }

  return (
    <main>
      <h1>Login 2</h1>
      <form onSubmit={logar}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" />
        </div>
      </form>
    </main>
  );
}
