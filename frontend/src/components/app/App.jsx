import Header from "../header/Header";
import Form from "../form/Form";
import Filter from "../filter/Filter";
import List from "../list/List";

function App() {
  return (
    <div className="flex flex-col items-center  bg-gray-500 dark:bg-[#1b2632] min-h-screen">
      <Header />
      <main className="container flex justify-between w-full mb-4 max-md:flex-col">
        <div className="flex-1 max-md:w-full basis-2/5 mx-auto">
          <Form/>
        </div>
        <div className="flex flex-col flex-1 basis-3/5">
          <Filter />
          <List />
        </div>
      </main>
    </div>
  );
}

export default App
