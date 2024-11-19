import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {ReactNode, createContext, useEffect, useReducer} from 'react';

interface AuthState {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | undefined; // Use string | undefined, not null
}

interface AuthContextType {
  state: AuthState;
  signIn: (data: {username: string; password: string}) => Promise<void>;
  signOut: () => Promise<void>;
}

// Default context value for safety (non-nullable context)
const defaultAuthContextValue: AuthContextType = {
  state: {
    isLoading: true,
    isSignout: false,
    userToken: undefined, // Initialize with undefined
  },
  signIn: async () => {},
  signOut: async () => {},
};

const initialAuthState: AuthState = {
  isLoading: true,
  isSignout: false,
  userToken: undefined, // Ensure initial value is undefined
};

export const AuthContext = createContext<AuthContextType>(
  defaultAuthContextValue,
);

const authReducer = (
  prevState: AuthState,
  action: {type: string; token?: string},
): AuthState => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token, // Can be string or undefined
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token, // Can be string or undefined
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        userToken: undefined, // Clear token on sign out
      };
    default:
      return prevState;
  }
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken: string | null;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.error('Failed to load token', e);
        userToken = null; // Set null in case of error
      }

      // Convert null to undefined to match the expected type `string | undefined`
      dispatch({type: 'RESTORE_TOKEN', token: userToken || undefined});
    };

    bootstrapAsync();
  }, []);

  const signIn = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    // Hardcoded user validation
    const users = [{username: 'Ana', password: 'Test'}];
    const user = users.find(
      u => u.username === username && u.password === password,
    );

    if (user) {
      const token = `valid-token-for-${username}`;
      await AsyncStorage.setItem('userToken', token);
      dispatch({type: 'SIGN_IN', token});
    } else {
      console.log('Invalid username or password');
    }
  };

  const signOut = async () => {
    await AsyncStorage.removeItem('userToken');
    dispatch({type: 'SIGN_OUT'});
  };

  const authContextValue: AuthContextType = {
    state,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
