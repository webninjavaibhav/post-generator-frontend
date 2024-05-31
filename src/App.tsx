import MainLayout from "./layout/MainLayout";
import { Toaster } from "react-hot-toast";
import GeneratePost from "./pages/generatePost";

function App() {
  return (
    <>
      <MainLayout>
        <>
        <Toaster position="top-right" reverseOrder={false} />
        <GeneratePost />
        </>
      </MainLayout>
    </>
  );
}

export default App;
