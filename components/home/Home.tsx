import './Home.css';

const HOME = () => {
  return (
    <div className='homeContainer'>
      <div className="homeInfo">
        <p className='homeInfoHi'>Hi,</p>
        <h1>My name is Rolly</h1>
        <p className='homeInfoText'>And I have a passion for web and graphic design.</p>
        <div className='homeBtnContainer'>
          <button>Web Projects</button>
          <button>Graphic Designs</button>
          <button>Download CV</button>
        </div>
      </div>
      <div className="homeLogo">
        <img src="/LogoVisualsByRMBK_3D.png" alt="RMBK LOGO" />
      </div>
    </div>
  )
}

export default HOME