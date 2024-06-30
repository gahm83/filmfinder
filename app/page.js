import Image from "next/image";
import SearchForm from "./components/search-form";

export default function Home() {
  return (
    
    <main class="flex flex-col w-screen h-screen items-center justify-center">
      <SearchForm />
    </main>
  );
}
