import ButtonAppBar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import OutlinedCard from "./components/Cards";
import BigOutlinedCard from "./components/BigCard";
import ScrollMenu from "./components/Scroll";
import { mockTransactions } from "./components/mockData";

function App() {
  return (
    <div className={"wrapper"}>
      <ButtonAppBar></ButtonAppBar>
      <Dashboard></Dashboard>
      <OutlinedCard></OutlinedCard>
      <BigOutlinedCard></BigOutlinedCard>
      <ScrollMenu mockTransactions={mockTransactions}></ScrollMenu>
    </div>
  );
}

export default App;