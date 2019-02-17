import React from 'react'

const AlbumList =(props) =>{
  const showList = ({albumList}) =>{
    if(albumList){
      return albumList.map((item,index)=>{
        return(
          <img key={index} src={`/images/albums/${item.cover}.jpg`} style={{
            float:'left',
            width:'50%'
          }}/>
        )
      })
    }
  }
  return(
    <div className="albums_list" style={{
      margin:'20px'
    }}>
        {showList(props)}
    </div>
  )
}
export default AlbumList;
