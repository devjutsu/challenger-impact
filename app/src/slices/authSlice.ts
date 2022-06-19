import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface AuthState {
    user: string | null,
    chainId: Number
}

const initialState: AuthState = {
    user: null,
    chainId: 0
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: (state, action: PayloadAction<string>) => {
        state.user = action.payload;
      },
      logout: (state) => {
        state.user = null;
      },
      setChainId: (state, action: PayloadAction<number>) => {
        state.chainId = action.payload;
      },
      resetChainId: (state) => {
        state.chainId = 0
      }
    },
  })
  
  export const { login, logout, setChainId, resetChainId } = authSlice.actions
  
  export const currentUser = (state: RootState) => state.auth.user
  export const loggedIn = (state: RootState) => state.auth.user !== null 
                                              && state.auth.user !== undefined 
                                              && state.auth.user !== '';
  export const currentChain = (state: RootState) => state.auth.chainId
  
  export default authSlice.reducer