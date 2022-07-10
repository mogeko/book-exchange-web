import { HiSearch } from "react-icons/hi";
import Link from "next/link";

const Search: React.FC = () => {
  return (
    <>
      <div className="hidden md:block relative">
        <HiSearch className="h-6 w-6 absolute top-3 left-3 text-gray-400" />
        <div className="form-control">
          <input
            type="text"
            placeholder="Search..."
            className="input bg-base-300 text-xl w-96 pl-10"
          />
        </div>
      </div>
      <Link href="#">
        <a className="btn btn-ghost btn-circle md:hidden">
          <HiSearch className="h-6 w-6" aria-hidden="true" />
        </a>
      </Link>
    </>
  );
};

export default Search;
