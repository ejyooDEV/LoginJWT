import { BASE_URL } from './const'
import { getAccessTokenFromLocalStorage, saveAccessTokenToLocalStorage } from '../utils/accessTokenHandler'
import { UserInfo } from '../types/user'

type LoginResult = 'success' | 'fail'

export type LoginResultWithToken = {
  result: 'success'
  access_token: string
} | {
  result: 'fail'
  access_token: null
}

export interface LoginRequest {
  username: string
  password: string
}

export const loginWithToken = async (args: LoginRequest): Promise<LoginResultWithToken> => {
  // TODO : 로그인 API 호출 / 토큰 반환하기
  // 1. POST, `${ BASE_URL }/auth/login` 호출
  // 2. access_token 발급 성공 시 { result: 'success', access_token: string } 형태 값 반환
  const loginRes = await fetch(`${ BASE_URL }/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(args)
  })

  if (loginRes.ok) {
    const loginResponseData = await loginRes.json()
    return {
      result: 'success',
      access_token: loginResponseData.access_token
    }
  }

  return {
    result: 'fail',
    access_token: null
  }
}

export const getCurrentUserInfoWithToken = async (token: string): Promise<UserInfo | null> => {
  // TODO : 토큰 직접 주입 받아 사용하기
  // 1. GET, `${ BASE_URL }/profile` 호출
  // 2. 리턴된 token을 Authorization header - Bearer token으로 추가
  // 유저 정보 조회 성공 시 UserInfo 타입 반환
  const userInfoRes = await fetch(`${ BASE_URL }/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ token }`
    }
  })

  if (userInfoRes.ok) {
    return userInfoRes.json() as Promise<UserInfo>
  }
  
  return null
}