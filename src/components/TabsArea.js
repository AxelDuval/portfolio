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
          <p className="align-left px-3 light-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis lorem massa, eget mattis ipsum mollis nec. Fusce congue sollicitudin lorem, ut aliquam dui vestibulum at. Integer ligula enim, tristique quis felis sodales, iaculis vehicula enim. Mauris mattis eleifend varius. Suspendisse potenti. Integer quis urna mauris. Duis ac mauris lacinia, blandit libero nec, tincidunt tortor. Donec lacinia egestas nisi nec condimentum.</p>
        </Tab>
        <Tab eventKey="experiences" title="Experiences">
        <p className="align-left px-3 light-grey">Mauris efficitur aliquam enim. Nulla blandit pulvinar eleifend. Sed cursus ipsum ac ante dictum, et commodo ex euismod. Integer id egestas tellus. Praesent non lacinia eros, nec pretium turpis. Praesent eu elementum nisl, id condimentum erat. Aenean id mi vitae dui auctor bibendum quis non tortor. Maecenas porta, diam eu scelerisque molestie, augue felis vehicula nisl, in fermentum odio lacus ac est.</p>
        </Tab>
        <Tab eventKey="certifications" title="Formation">
        <p className="align-left px-3 light-grey">Aliquam ultrices, orci ultricies ultricies eleifend, tellus magna fermentum felis, id tristique orci lacus et elit. Phasellus sed pharetra neque. In a risus sit amet dolor consequat egestas. Mauris mi dolor, imperdiet quis laoreet quis, auctor imperdiet mi. Sed ligula lectus, consectetur sed turpis sit amet, porta facilisis erat. Aenean ipsum turpis, rutrum sed condimentum a, hendrerit at nibh. Proin vulputate nunc eget justo cursus vulputate.</p>
        </Tab>
      </Tabs>
    );
  }
  
  export default TabsArea;