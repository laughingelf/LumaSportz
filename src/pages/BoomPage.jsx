import BoomBookPage from "./components/BoomPageInfo";


const BoomPage = () => {
    
    return (
        <>
        <div className="mt-16">
            <BoomBookPage
            primaryImage={{ src: "/img/boom-banner2.png", alt: "Boom Shaka Laka banner" }}
            secondaryImage={{ src: "/img/boom-info.png", alt: "Coach C message spread" }}
            buyUrl="https://square.link/u/152nPlPX"
            />
        </div>
        </>
    )
}


export default BoomPage;