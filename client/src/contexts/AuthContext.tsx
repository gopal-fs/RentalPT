import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

interface User {
  _id: string;
  email: string;
  fullName?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const url=import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    const token = Cookies.get('token');
    console.log(token)
    console.log('Hello')
   

    if (token) {
      axios
        .get(`${url}/getProfile`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUser(res.data.user);
          console.log(res.data.user)
        })
        .catch(() => {

          
          setUser(null);
          navigate('/login');
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
     
    }
  }, [navigate]);

  const logout = () => {
    Cookies.remove('token');
    setUser(null);
    navigate('/login');
  };

  const value = {
    user,
    loading,
    setUser,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
