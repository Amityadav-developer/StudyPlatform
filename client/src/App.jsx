import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";


function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />   {/* Footer Page ke end me */}
    </>
  );
}

export default App;
