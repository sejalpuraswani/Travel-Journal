import Header from "./components/Header";
import PlacesDetails from "./components/PlacesDetails";
import Data from "./Data";

export default function App() {

  const famousPlacesData = Data.map((place, index)=>{
    return <PlacesDetails key={index} {...place}/>
  })
  return (
    <>
      <Header />
      {famousPlacesData}
    </>
  );
}
