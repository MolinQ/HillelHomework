import { useSelector } from 'react-redux';
function SwapiList() {
    const swapiData = useSelector((state) => state.swapi.swapiData);
    return (
        <div className='container-lg p-5 border'>
            <h2>SWAPI Data</h2>
            {Object.keys(swapiData).length > 0
            ? <pre>{JSON.stringify(swapiData, null, 2)}</pre>
            : <p>No data available</p>
            }
        </div>
    );
}
export default SwapiList;