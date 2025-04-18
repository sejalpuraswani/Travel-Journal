import globe from '../assets/globe.png'

export default function Header(){
    return (
        <header className="flex justify-center items-center gap-2 py-2 bg-[#de695e]">
            <img className="w-12 filter invert brightness-0" src={globe} alt="" />
            <h1 className="font-[Inter] text-2xl text-white font-semibold">Travel Journal</h1>
        </header>
    )
}

