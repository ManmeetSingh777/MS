import React from 'react';
import './ZehenPage.css';
import ZEHEN1 from '../assets/ZEHEN1.jpg';
import ZEHEN2 from '../assets/ZEHEN2.jpg';
import ZEHEN3 from '../assets/ZEHEN3.jpg';
import ZEHEN4 from '../assets/ZEHEN4.jpg';
import ZEHEN5 from '../assets/ZEHEN5.jpg';
import ZEHEN6 from '../assets/ZEHEN6.jpg';
import ZEHEN7 from '../assets/ZEHEN7.jpg';
import ZEHEN8 from '../assets/ZEHEN8.jpg';
import ZEHEN9 from '../assets/ZEHEN9.jpg';

const ZehenPage = () => {
  const images = [ZEHEN1, ZEHEN2, ZEHEN3, ZEHEN4, ZEHEN5, ZEHEN6, ZEHEN7, ZEHEN8, ZEHEN9];

  return (
    <div className="zehen-container">
      <header className="zehen-header">
        <h1>ZEHEN</h1>
      </header>

      <section className="zehen-section">
        <h2>Case Study: Lohgarh</h2>
        <div className="zehen-text-block">
        <h3>Lohgarh Case Study</h3>
          <p>
            Lohgarh is a village in Dabwali tehsil of Sirsa district in Haryana and Punjab. Situated 19km away from sub-district headquarter Dabwali (tehsildar office) and 77km away from district headquarter of Sirsa. Lohgarh village is also a gram panchayat.
          </p>
          <p>The total geographical area of the village is 2125 hectares (app. 5200 acres). Lohgarh has a total population of 4,742 people, out of which male population is 2,460 while female population is 2,282. Literacy rate of Lohgarh village is 57.00% out of which 61.99% males and 51.62% females are literate. There are about 906 houses in Lohgarh village. Population density of Lohgarh is 2 persons per hectare.</p>
          <p>When it comes to administration, Lohgarh village is administrated by a Sarpanch who is elected representative of the village by the local elections. As per 2019 stats, Lohgarh village comes under Dabwali assembly constituency & Sirsa parliamentary constituency. Dabwali is the nearest town to Lohgarh village for all major economic activities.</p>
          <p>
            <strong>Timeline of the Lohgarh case study:</strong>
          </p>
          <ul>
            <li>Day 1 saw a general meet-up of the male population of Lohgarh with Dr. Nandy and team Zehen. (No females were present) which hinted at the patriarchal behavior of the men.</li>
            <li>Day 2 was all about collecting data. Zehen had prepared a questionnaire (bilingual: English and Hindi) which was distributed amongst the residents. Volunteers were assigned to assist them. The sample size was 300.</li>
            <li>The outcome of the survey highly reflected towards substance abuse in young adults, however, this was only seen in males. The second was regarding career indecisiveness and eventually lack of employment opportunities for the youth aged 19 and above.</li>
            <li>Women were mostly homemakers, and there was a serious lack of education. Male dominance and ego played a vital role in the subdued growth of the females.</li>
            <li>There was a significant lack of menstrual hygiene and mental health awareness, to such an extent that they prefer medicines for every trivial thing, whether be it for mental health or menstruation.</li>
            <li>What we found out is that, due to economic conditions and the pressure to earn and sustain a living, the residents there look for quick and easier methods to cure anxiety and depression, since time waits for none, they wouldn’t prefer to go to therapy.</li>
          </ul>
        </div>
        <div className="zehen-collage">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`ZEHEN ${index + 1}`} className="zehen-collage-image" />
          ))}
        </div>
      </section>

      <footer className="zehen-footer">
        <h2>ZEHEN</h2>
        <p>Thank you!</p>
        <p>Dr. Maumita Nandy, Kanak, Prashant, Prakhar, Navreet and the team of Zehen</p>
      </footer>
    </div>
  );
};

export default ZehenPage;
