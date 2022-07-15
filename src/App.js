import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [veri, setVeri] = useState();
  const [tarih, setTarih] = useState();

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
      .then(json => setVeri(json.data[tarih]))
      .catch(err => console.log(err))

  }, [veri, tarih])

  return (
    <React.Fragment className='container'>
      <React.Fragment className='row'>
        <div className='col-md-8 mx-auto mt-4'>
          <h2 className='text-center text-white display-4'>TÜRKİYE COVID 19 ARAMA MOTORU</h2>
          <input type="text" placeholder='GG/AA/YYYY' className='form-control'
            onChange={(event) => setTarih(event.target.value)} />
          <table class="table">
            <thead className='text-white'>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Hasta Sayısı</th>
                <th scope="col">Test Sayısı</th>
                <th scope="col">Ölü Sayısı</th>
                <th scope="col">İyileşen Sayısı</th>
              </tr>
            </thead>
            <tbody className='text-white'>
              <tr className={veri === undefined ? "bg-danger" : "bg-success"}>
                <th scope="row">Günlük</th>
                <td>{veri === undefined ? "Veri bekleniyor" : veri.patients}</td>
                <td>{veri === undefined ? "Veri bekleniyor" : veri.tests}</td>
                <td>{veri === undefined ? "Veri bekleniyor" : veri.deaths}</td>
                <td>{veri === undefined ? "Veri bekleniyor" : veri.recovered}</td>
              </tr>
              <tr className={veri === undefined ? "bg-danger" : "bg-success"}>
                <th scope="row">Toplam</th>
                <td>{veri === undefined ? "Veri bekleniyor" : veri.totalPatients}</td>
                <td>{veri === undefined ? "Veri bekleniyor" : veri.totalTests}</td>
                <td>{veri === undefined ? "Veri bekleniyor" : veri.totalDeaths}</td>
                <td>{veri === undefined ? "Veri bekleniyor" : veri.totalRecovered}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    </React.Fragment>
  );
}

export default App;
