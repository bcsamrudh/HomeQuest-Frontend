import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MdSearch } from "react-icons/md"

function SearchBar(){
  return (
    <>
      <Input
        type="text"
        placeholder="Search Properties"
        className="w-[300px] border border-regparacolor"
      />
      <Button
        type="submit"
      >
        <MdSearch className="text-xl"/>
      </Button>
      </>
  );
};

export default SearchBar;