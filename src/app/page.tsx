import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/categorysearch";

export default function Home() {
  return (
    <div className="">
     <Hero/>
     {/*search bar*/} 
     <CategorySearch/>
    </div>
  );
}
