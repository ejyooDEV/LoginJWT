import React, { useState } from 'react'
import { UserInfo } from '../types/user'
import { getCurrentUserInfoWithToken, loginWithToken } from '../api/login'

const JWTLogin = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  
  // submit 버튼 클릭 시 실행되는 핸들러 함수
  const loginSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // 로그인 연결/토큰 획득
    const loginResult = await loginWithToken({
      username: formData.get('username') as string,
      password: formData.get('password') as string
    })

    if (loginResult.result === 'fail') return

    // 유저 정보 획득
    const userInfo = await getCurrentUserInfoWithToken(loginResult.access_token)

    if (userInfo === null) return

    setUserInfo(userInfo)
  }

  return (<div>
    <h1>
      Login with JWT - in memory
    </h1>
    <form onSubmit={loginSubmitHandler}>
      <label>
        Username:
        <input type="text" name="username"/>
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit" value="Submit">submit</button>
    </form>
    <div>
      <h2>
        User info
      </h2>
      {JSON.stringify(userInfo)}
    </div>
  </div>)
}

export default JWTLogin
