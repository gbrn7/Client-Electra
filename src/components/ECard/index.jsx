import './style.css';

export default function ECard({title, value, backgroundImage, icon, currency}) {
  const duration = 1;
  return (
    <div 
      className="card col-10 col-lg-3 p-1 rounded-3"
      style={{backgroundImage: `url(${backgroundImage})`}}
      >
        <div className="head p-2 d-flex align-items-center gap-2 letter">
            <i className={`${title} ${icon} p-2 rounded-circle`} ></i>
            <span>{title}</span>
          </div>
          <div className="content-text px-2 mt-3">
            <p 
            data-purecounter-start="0"
            data-purecounter-end={value}
            data-purecounter-duration={duration}
            data-purecounter-currency={currency}
            className="text m-0 purecounter">0
            </p>
          </div>
    </div>
  )
}
