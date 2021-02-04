

const Stats = (props) => {
  return (
    <div className="Stats">
    {props.pokemonData.map((data) => {
      return(
        <div className="container">
       <div className="stats-table">
       <h1 className="stats-title">Stats</h1>
       <tr>
                <th className="table-cell-stats">{data.stats[0].stat.name}</th>   
                <th className="table-cell-stats">{data.stats[1].stat.name}</th>   
                <th className="table-cell-stats">{data.stats[2].stat.name}</th>         
                <th className="table-cell-stats">{data.stats[3].stat.name}</th>
                <th className="table-cell-stats">{data.stats[4].stat.name}</th>
                <th className="table-cell-stats">{data.stats[5].stat.name}</th>
        </tr>

        <tr>
                <td className="table-cell-stats">{data.stats[0].base_stat}</td>
                <td className="table-cell-stats">{data.stats[1].base_stat}</td>
                <td className="table-cell-stats">{data.stats[2].base_stat}</td>
                <td className="table-cell-stats">{data.stats[3].base_stat}</td>
                <td className="table-cell-stats">{data.stats[4].base_stat}</td>
                <td className="table-cell-stats">{data.stats[5].base_stat}</td>     
        </tr>
        </div>
      </div>
      
      )

    })}

    </div>
  );



    
};


export default Stats;
