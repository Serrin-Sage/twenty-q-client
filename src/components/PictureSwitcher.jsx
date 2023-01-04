import { useState, useEffect } from "react"

const PictureSwitcher = ({ setSelectedPic }) => {
  const [imageArray, setImageArray] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/images")
    .then((res) => res.json())
    .then((data) => {
      setImageArray(data)
    })
  },[])

  const changePic = (image) => {
    setSelectedPic(image)
    localStorage.setItem('profile-picture', image)
    console.log(image)
  }

  return (
    <div className="picture-switcher">
      <div className="pic-options">
      {
        imageArray.map((image) =>{
          return (
            <div key={image.id} className="image-icon" onClick={() => changePic(image)}>
              <img src={image.url} alt={`Image of ${image.name}`} className="icon"/>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default PictureSwitcher