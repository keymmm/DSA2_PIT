import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function SearchForm() {
  
  const handleSearch = (formData) => {
    formData.get("search-book");
  };

  return (
    <form
      action={handleSearch}
      className="m-2 mr-15 flex flex-col items-end space-y-4"
    >
      <div className="flex w-full max-w-sm items-center justify-center space-x-2">
        <Input name="search-book" type="text" placeholder="Search Books...." />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}

export default SearchForm;
