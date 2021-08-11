import "./tBody.css"

function TBody({population, deaths, code, country, confirmed, lastUpdate}) {
    if(population, deaths, code, country, confirmed, lastUpdate) {

        
        return (
            <tbody>
                <tr>
                    <td>{code}</td>
                    <td>{country}</td>
                    <td>{population}</td>
                    <td>{confirmed}</td>
                    <td>{deaths}</td>
                    <td>{lastUpdate.substring(0, 10)}</td>
                </tr>
            </tbody>
        )
    }
    
}

export default TBody