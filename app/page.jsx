import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
   return (
      <div className="page">
         <main className="main">
            <Navbar />
            <Header />
            <h1>En dejligt overskrift</h1>
            <h2>Hello, Andrea</h2>
            <Footer />
         </main>
      </div>
   );
}
