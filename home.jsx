import mage from '../styles/images/mage.jpeg'
import rune from '../styles/images/rune.jpeg';

const Home = () => {

  return (
    <div id="home">
      <h1>Mage In Montana</h1>
      <h2>An in-depth guide to the Wizardry of Knute Timson</h2>
      <img src={mage} alt="" width="80%"></img>
      <p>Welcome! If you are finding yourself reading this newsletter, know you 
        are in a unique position. The only eyes setting on this space are those 
        who have volunteered to help a Wizard out by allowing me to draw a tarot 
        card; OR, by chance someone else has gifted you a card I have drawn and 
        you scanned the QR code on the back. Either way, we’re all here, now! This 
        newsletter will be a regularly updated reference to the work I am doing 
        as a Wizard. It can also serve as a point of contact if you’re ever in 
        need of a Wizardly service. I will be expanding my “Drawing the Tarot” 
        project (soon) as well as opening up to various other magickal services. 
        With that being said, you know who to contact if you or someone you know 
        is in need of assistance with:	
      </p>
      <ul>
        <li>Divination</li>
        <li>Dream Interpretation</li>
        <li>General, (possibly bad) advise</li>
        <li>Pondering metaphysics</li>
        <li>Talking through your (or my) existential crisis</li>
        <li>Virtual Trip Sitting</li>
        <li>Talkin 'bout the good times</li>
        <li>Asking the Universe to grant wishes</li>
        <li>How to accomplish various things</li>
        <li>Finding the lost coin behind your ear</li>
      </ul>
      <p>And more to come, open to suggestions!!</p>
      <h2>. . . . . . . . . .</h2>
    </div>
  )

};

export default Home;