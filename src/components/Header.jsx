import { useState } from "react";
import { Button, Image } from "./index";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("Overview");

  const navItems = [
    {
      name: "Overview",
      url: "/",
    },
    {
      name: "Patients",
      url: "/patients",
    },
    {
      name: "Appointments",
      url: "/appointments",
    },
  ];

  const handleClick = (item) => {
    console.log("Navigating to:", item.name, "at URL:", item.url);
    navigate(item.url);
    setActiveButton(item.name);
  };

  return (
    <nav className="border-b px-10 py-3 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="https://th.bing.com/th/id/R.a7cf00fc6fba8579bfe5f4c53af02f88?rik=NSyTEZrCtNcE1w&riu=http%3a%2f%2fwww.drodd.com%2fimages15%2fletter-x9.png&ehk=H3TDefk%2bImcpSoc5kWfUqROnRRriRz%2fAz1hUiUA8SLE%3d&risl=&pid=ImgRaw&r=0"
            alt="Tech.Care Logo"
            width={32}
            height={32}
          />
          <span className="text-xl font-semibold">Tech.Care</span>
        </div>

        <div className="flex items-center gap-6">
          {navItems &&
            navItems.map((item, index) => (
              <Button
                key={index}
                className={`"text-gray-600 py-2 " ${
                  activeButton === item.name
                    ? "bg-green-500 rounded-full px-4 text-gray-900"
                    : ""
                }`}
                onClick={() => handleClick(item)}
              >
                {item.name}
              </Button>
            ))}
        </div>
      </div>
    </nav>
  );
}
