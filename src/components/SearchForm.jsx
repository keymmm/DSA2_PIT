import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function SearchForm() {
  function handleSearch(formData) {
    formData.get("search-book");
  }

  return (
    <form
      action={handleSearch}
      className="flex flex-col items-end space-y-4 m-2 mr-15"
    >
      <div className="flex w-full max-w-sm items-center space-x-2 justify-center">
        <Input name="search-book" type="text" placeholder="Search Books...." />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}

export default SearchForm;
