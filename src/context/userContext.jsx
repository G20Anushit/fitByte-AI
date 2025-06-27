import { createContext, useContext , useState, useEffect } from 'react';

export const UserContext = createContext();

export const useProfile = () => useContext(UserContext);

export const UserProvider= ({children}) =>{
    const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("userProfile");
    return saved ? JSON.parse(saved) : null;
    });

    const [history, sethistory] = useState(()=>{
        const savedHistory = localStorage.getItem("chatHistory");
        return savedHistory ? JSON.parse(savedHistory) : [];
    });

    const[open,setopen]=useState(false);
    const[dark,setdark]=useState(false);

  useEffect(() => {
    if (profile) {
      localStorage.setItem("userProfile", JSON.stringify(profile));
      console.log("Profile saved to localStorage:", profile);
    }
  }, [profile]);
  
  useEffect(() => {
  if (history) {
    localStorage.setItem("chatHistory", JSON.stringify(history));
    console.log("Chat history saved to localStorage:", history);
  }
}, [history]);

  
    return (
        <UserContext.Provider value={{profile, setProfile, history, sethistory,open,setopen,dark,setdark}}>
            {children}
        </UserContext.Provider>
    );
}
