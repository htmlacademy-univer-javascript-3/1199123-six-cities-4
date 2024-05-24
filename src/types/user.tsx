export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type UserData = User & {
  email: string;
  token: string;
}

export type AuthorizationData = {
  email: string;
  password: string;
}
