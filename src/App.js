import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1 className="text-3xl font-bold">Hello world!</h1>
      </div>
      <div className="flex justify-between items-center bg-orange-400 mt-20 mx-auto w-6/12 h-24 rounded-xl px-8">
        <div className="flex justify-center items-center bg-blue-500 w-16 h-16 text-white font-bold underline rounded-lg">
          1
        </div>
        <div className="flex justify-center items-center bg-red-500 w-16 h-16 text-white font-bold underline rounded-full">
          2
        </div>
        <div className="flex justify-center items-center bg-green-500 w-16 h-16 text-white font-bold underline rounded-2xl">
          3
        </div>
        {/* <button className="bg-blue-400 hover:bg-red-600 text-white py-2 px-4 rounded">
          Button
        </button> */}
      </div>
    </>
  );
}

export default App;
