
export default function HeaderSidebar({clickHandler, name, nameSystem, logo}) {
  return (
    <header className="d-flex gap-2 align-items-center">
        <div className="image-text">
          <span className="image">
          <img src={logo}/>
          </span>
        </div>

        <div className="text header-text">
          <p className="name m-0">{name}</p>
          <p className="name-system m-0">{nameSystem}</p>
        </div>
      <i className='bx bx-chevron-right toggle' onClick={clickHandler}></i>
    </header>
  )
}
