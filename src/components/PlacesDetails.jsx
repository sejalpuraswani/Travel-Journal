
export default function PlacesDetails({place,city,country,desc,link,image}){

    return(
        <main className="flex justify-center items-center gap-5 py-5 m-5">
        <div>
          <img className="w-33 h-35 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-cover rounded-lg" src={image} alt={place} />
        </div>
        <div className="w-80">
          <div className="flex items-center gap-2">
          <p className="tracking-wider font-medium uppercase">{place}</p>
          <a className="text-gray-600 underline hover:text-blue-800" href={link}>view on Google Maps</a>
          </div>
            <p className="text-blue-600 font-semibold ">{city}, {country}</p>
            <p className="w-70">{desc}</p>
            
        </div>
        </main>
    )
}