import { MoreVertical, ChevronLast, ChevronFirst, Home, FileText, User, DollarSign, CreditCard } from "lucide-react";
import { useContext, createContext, useState } from "react";

const SidebarContext = createContext();

const SidebarD = ({ children, expanded, setExpanded }) => {
  return (
    <aside className={`h-screen transition-width duration-300 fixed top-0 left-0 ${expanded ? "w-64" : "w-16"}`}>
      <nav className="h-full flex flex-col bg-[#e66b2d] border-r shadow-sm">
        <div className="p-4 pb-2 flex items-center">
        <img
            src={"./src/pages/white_favicon.svg"}
            className={`overflow-hidden transition-all ${expanded ? "w-5" : "w-0"}`}
            alt=""
          />
          <span
            className={`ml-2 text-white font-sans text-2xl font-semibold transition-all ${expanded ? "opacity-100" : "opacity-0 w-0"}`}
          >
            Bright Path
          </span>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 ml-auto"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">
            {children}
          </ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);
  
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}
        />
      )}

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}

// Sidebar content
const SidebarContent = () => {
  return (
    <>
      <SidebarItem icon={<Home />} text="Dashboard" active={true} />
      <SidebarItem icon={<FileText />} text="Transactions" />
      <SidebarItem icon={<User />} text="Accounts" />
      <SidebarItem icon={<DollarSign />} text="Investments" />
      <SidebarItem icon={<CreditCard />} text="Credit Cards" />
    </>
  );
};

// Main Application Layout
const App = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`flex h-screen`}>
      <SidebarD expanded={expanded} setExpanded={setExpanded}>
        <SidebarContent />
      </SidebarD>
      <div className={`flex-1 flex flex-col transition-all duration-300 ${expanded ? "ml-64" : "ml-16"}`}>
        <header className={`bg-orange-200 text-white p-4 transition-all duration-300 ${expanded ? "w-full" : "w-full"}`}>
          <h1 className="font-sans font-semibold text-2xl text-black">My Application</h1>
        </header>
        <main className={`flex-1 p-6 flex justify-center items-center transition-all duration-300 ${expanded ? "ml-0" : "ml-0"}`}>
          <div className="text-center">
            <h2 className="text-2xl font-bold">Welcome to the Dashboard!</h2>
            <p className="mt-4">Here is your main content area.</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
