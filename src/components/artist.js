import React, {
  Component
} from 'react'
import Header from './header'
import AlbumList from './albumlist'
const REQ_URL = 'http://localhost:3004/artists'

class Artist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artist: ''
    }
  }

  componentDidMount() {
    fetch(`${REQ_URL}/${this.props.match.params.artistid}`, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({
          artist: json
        })
      })
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="artist_bio" style={{
          boxSizing: 'border-box',
          padding:'10px 30px'
        }}>
          <div className="avatar">
            <span style={{
            boxSizing:'border-box',
            background:`url('/images/covers/${this.state.artist.cover}.jpg') no-repeat`,
            width:'50%',
            height:'300px',
            display:'block',
            margin: '0 auto',
            backgroundSize:'cover !important'
          }}></span>
          </div>
          <div className="bio">
            <h3 style={{
              fontWeight:'100',
              textAlign:'center',
              fontSize:'30px',
              margin:'10px 0'
            }}>{this.state.artist.name}</h3>
            <div className="bio_text" style={{
              fontWeight:'100',
              fontSize:'14px'
            }}>
                {this.state.artist.bio}
            </div>
          </div>
          <AlbumList albumList={this.state.artist.albums}/>
        </div>
      </div>
    )
  }
}

export default Artist;
