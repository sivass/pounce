import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faNavicon } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <nav className="py-5 border-b-default border-solid border-gray-200 z-10 w-full bg-inherit lg:fixed scroll:relative">
      <div className="w-full mx-auto px-10">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl  font-semibold text-white ">
            <Image
              src="http://localhost:1337/uploads/White_Logo_938da71b18.png"
              width={100}
              height={40}
              alt="Logo image"
              className=" cursor-pointer"
            />
          </span>
          <div className="flex space-x-6 text-gray-900">
          <Image
              src="/assets/icons/Search.png"
              width={32}
              height={32}
              alt="Search"
              className=" cursor-pointer"
            />
             <Image
              src="/assets/icons/Menu.png"
              width={32}
              height={32}
              alt="Menu"
              className=" cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
