export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <Context.Provider value={{ isAuthorized, setIsAuthorized, user, setUser, theme, setTheme }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;