import { ColorContextProvider } from "./contexts/color.context";
import CreateYourOwn from "./pages/CreateYourOwn";

function App() {
  return (
    <>
      <ColorContextProvider>
        <CreateYourOwn/>
      </ColorContextProvider>
    </>
  );
}

export default App;
