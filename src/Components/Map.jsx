

export default function Map() {
    return (
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="500"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=6CR7%2B57V%2C+Ngringin%2C+Condongcatur%2C+Depok%2C+Sleman+Regency%2C+Special+Region+of+Yogyakarta+55281&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
          <a href="https://www.analarmclock.com"></a>
          <br />
          <a href="https://www.onclock.net"></a>
          <br />
          <style>{`.mapouter{position:relative;text-align:right;height:500px;width:500px;}`}</style>
          <a href="https://www.ongooglemaps.com">google maps embed</a>
          <style>{`.gmap_canvas{overflow:hidden;background:none!important;height:500px;width:500px;}`}</style>
        </div>
      </div>
    );
  }