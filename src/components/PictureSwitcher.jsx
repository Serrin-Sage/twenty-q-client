const PictureSwitcher = () => {

  return (
    <div className="picture-switcher">
      <div className="profile-pic-container">
        <div id='default-icon'
          onClick={() => handleClick('default-icon')}></div>
      </div>
    </div>
  )
}