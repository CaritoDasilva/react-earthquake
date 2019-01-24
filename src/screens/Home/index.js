import React, { Component } from 'react';

import Quake from '../../components/Quake';

import './style.css';

const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-01-15';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      quakes: [],
      error: false
    };
  }

  async componentDidMount() {
    try {
      this.setState({loading: true, error: false });
      const response = await fetch(url);
      const responseJson = await response.json();
      const quakes = responseJson.features;
      this.setState({quakes, loading: false, error: false });
    } catch(e) {
      this.setState({ loading: false, error: true })
    }

  }

  render() {
    const { quakes, loading, error } = this.state;
    return (
      <div className="main">
        <h1>Terremotos</h1>
        {!loading && quakes.filter(quake => quake.properties.mag > 4).map(quake =>
          <Quake quake={quake} />
        )}
        {loading && <p>Cargando información...</p> }
        {!loading && !error && !quakes.length && <h2>No hay información disponible</h2>}
        {!loading && error && <h2>Ocurrio un error</h2>}
      </div>
    );
  }
}

export default Home;
