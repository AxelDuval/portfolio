import './tabsArea.css';

import { Tab } from "react-bootstrap";
import { useState} from 'react'
import { Tabs } from "react-bootstrap";

function TabsArea() {
    const [key, setKey] = useState('skills');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="skills" title="Compétences">
          <p className="align-left px-3 light-grey">
          <b>Langages -</b> HTML / CSS / JavaScript / PHP / SQL
          <br />
          <b>Outils -</b> GIT / Symfony / REACT / MySQL / Wordpress
          <br />
          <b>Suite Adobe -</b> Photoshop / Illustrator / Indesign / Premiere / XD

            </p>
        </Tab>
        <Tab eventKey="experiences" title="Experiences">
        <p className="align-left px-3 light-grey">
        <b>Webmaster / chargé de communication </b>| Mairie de Sotteville-lès-Rouen | 2012-2021
        <br />
        <b>Webmaster concepteur de site web </b>| Freelance | 2013-2018
        <br />
        <b>Graphiste / Chargé de communication </b>| Eure habitat | 2008-2012


          </p>
        </Tab>
        <Tab eventKey="certifications" title="Formation">
        <p className="align-left px-3 light-grey">
        <b>Titre professionnel de développeur web et web mobile (BAC +2) </b>| AFPA de Rouen | 2021-2022
        <br />
        <b>Communication globale des entreprises et des marques </b>| ISCOM Rouen | 2007-2008
        <br />
        <b>Certificat de qualification professionnelle en PAO </b>| AFI-LNR Mont Saint Aignan | 2005-2007
          </p>
        </Tab>
      </Tabs>
    );
  }
  
  export default TabsArea;