export interface UserModel {
   idUsuario: number
   usuario: string
   password: string | undefined
   nombres: string
   apellidos: string
   email: string
   perfil: string
}

export interface IAuthState {
   user: UserModel | null
   accessToken: string | null
}
