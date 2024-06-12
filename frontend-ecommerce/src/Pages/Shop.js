
import { useEffect, useRef } from "react";
import Hero from "../Components/Hero/Hero";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";



const Shop = () => {

    const scrollRef = useRef(null);

    const executeScroll = () => { scrollRef.current.scrollIntoView() };



    return <div >
        <Hero scrollToHero={executeScroll} />
        <Popular />
        <Offers />
        <NewCollections refProp={scrollRef} />
        <NewsLetter />

    </div>
}


export default Shop;