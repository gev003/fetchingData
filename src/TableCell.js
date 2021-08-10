import THead from "./tHead";
import "./TableCell.css"
import TBody from "./tBody";

function TableCell({info}) {

    
    if(info !== undefined) {
        let population = info.data.population,
            country = info.data.name,
            deaths = info.data.latest_data.deaths,
            confirmed = info.data.latest_data.confirmed,
            lastUpdate = info.data.updated_at,
            code = info.data.code
            
    

        return (
            <table className='table'>
                <THead />
                <TBody  population={population}
                        country={country}
                        deaths={deaths} 
                        confirmed={confirmed} 
                        lastUpdate={lastUpdate}
                        code={code} />
            </table>
        )
    }else {
        return (
            <div>Loading ...</div>
        )
    }
}
export default TableCell