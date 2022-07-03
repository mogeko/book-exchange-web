import { HiSearch } from "react-icons/hi";
import Link from "next/link";

const Search: React.FC = () => {
  return (
    <>
      <div className="hidden md:form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered input-primary input-sm w-96"
        />
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
