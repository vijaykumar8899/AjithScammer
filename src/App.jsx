import './App.css';

function App() {
  return (
    <div className="full-width-container">
      <header className="warning-header">
        <h1 className="alert-title">⚠️ WANTED: Ajith Reddy Vadde ⚠️</h1>
        <p className="danger-notice">
          Ajith Reddy Vadde, you are being tracked. The authorities are closing in on you.
        </p>
      </header>

      <div className="details-section">
        <h2 className="section-heading">Who is Ajith Reddy Vadde?</h2>
        <p className="criminal-description">
          Ajith Reddy Vadde, son of Krishna Reddy Vadde, brother of Arun Reddy Vadde (BA 1st year, KLR College), is a known scammer involved in fraud. He uses his criminal mindset to deceive and steal from innocent victims.
        </p>
        <p className="highlight-danger">
          He claims to own "My Pranaya Farms" and "My Pranaya Cinematic World," running Instagram scams to lure his victims. He is considered dangerous and has evaded capture multiple times.
        </p>
      </div>

      {/* New Criminal Profile Section */}
      <div className="criminal-profile-section">
        <h2 className="section-heading">Criminal Profile</h2>
        <p className="criminal-story">
          Ajith Reddy Vadde, S/O Krishna Reddy Vadde, residing at H-No/3-70B Kinnerasani Village, Palawancha Mandalam, Badrari District, 507115, is a notorious fraudster. He falsely established two companies: <strong>My Pranaya Cinematic World LLP</strong> and <strong>My Pranaya Farms and Greens India Pvt</strong>. Under the guise of legitimate business, he recruited more than ten people, showcasing a three-floor building as his office located in Madhapur near Ratnadeep. His schemes have caused significant financial harm to many unsuspecting victims, leading to urgent calls for his capture.
        </p>
      </div>

      <div className="photo-section">
        <h3 className="section-heading">Suspect Images</h3>
        <div className="images-container">
          <img src="/Ajith1.jpeg" alt="Ajith Reddy Vadde" className="criminal-photo" />
          <img src="/Ajith2.jpeg" alt="Ajith Reddy Vadde" className="criminal-photo" />
        </div>
      </div>

      <div className="family-info-section">
        <h3 className="section-heading">Family Information</h3>
        <div className="family-info-container">
          <ul className="family-info-list">
            <li className="family-member">
              <strong>Father's Name:</strong> 
              <span className="highlight-danger"> Krishna Reddy Vadde</span>
            </li>
            <li className="family-member">
              <strong>Address:</strong> 
              <span className="highlight-danger"> House No. 3-170, Rajapuram, Yanambailu, Khammam, Telangana 507115</span>
            </li>
            <li className="family-member">
              <strong>Brother's Name:</strong> 
              <span className="highlight-danger"> Arun Reddy Vadde (BA 1st year, KLR College)</span>
            </li>
          </ul>
          <div className="images-container">
            <img src="/Arun1.jpeg" alt="Arun Reddy Vadde" className="family-photo" />
          </div>
        </div>
      </div>

      <div className="documents-section">
        <h3 className="section-heading">Document Evidence</h3>
        <div className="document-images">
          <div className="document">
            <h4>Aadhar Card</h4>
            <img src="/Adhaar1.jpeg" alt="Aadhar Card of Ajith Reddy Vadde" className="document-photo" />
          </div>
          <div className="document">
            <h4>PAN Card</h4>
            <img src="/Pan1.jpeg" alt="PAN Card of Ajith Reddy Vadde" className="document-photo" />
          </div>
        </div>
      </div>

      {/* Police Contact Information Section */}
      <div className="police-contact-section">
        <h2 className="section-heading1">Report Fraud or Sightings</h2>
        <p className="police-contact-info">
          If you have any information regarding Ajith Reddy Vadde or have fallen victim to his scams, please contact the police immediately:
        </p>
        <p className="contact-details"><strong>Police Contact:</strong> 9150987651, 9347644178, 8106110637</p>
        <p className="contact-details"><strong>Local Police Station:</strong> Yanambailu Police Station, Khammam District</p>
        <p className="contact-details"><strong>Email:</strong> khammam@police.gov.in</p>
      </div>

      <div className="footer-warning">
        <h2 className="danger-message">Ajith, your lies are falling apart. You can't run forever.</h2>
        <p>If you have information on this criminal, contact the police immediately.</p>
      </div>
    </div>
  );
}

export default App;
