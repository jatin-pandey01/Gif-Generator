import Random from './components/Random'
import Tags from './components/Tags';
function App() {
  return (
    <div className='background items-center min-h-screen flex flex-col'>
      <h1 className="bg-white mt-10 text-center w-11/12 rounded-md font-bold text-[100%] sm:text-5xl py-2 px-10 text">Random GIFS</h1>
      <div className='flex w-full items-center flex-col'>
         <Random/>
         <Tags/>
      </div>
    </div>
  );
}

export default App;
