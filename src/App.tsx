import React from 'react';
import Button from './components/Button';
import { Card } from './components/Card';
import Dropdown from './components/Dropdown';
import { HeroImage } from './components/HeroImage';
import { Img } from './components/Image';
import Label from './components/Label';
import RadioButton from './components/RadioButton';
import Table from './components/Table';
import Text from './components/Text';

const App: React.FC = () => {
  return (
    <div>
      <h1>Component Showcase</h1>

      <section>
        <h2>Button Component</h2>
        <Button text="Click Me" onClick={() => alert('Button clicked!')} />
        <Button
          text="Disabled"
          disabled
          onClick={() => alert('Button clicked!')}
        />
      </section>

      <section>
        <h2>Card Component</h2>
        <Card
          title="Harry Potter"
          content="Harry Potter, the Boy Who Lived, is a famous wizard known for defeating Lord Voldemort as an infant."
          imageSrc="/static/images/Sahay.jpg"
          altText="Harry Potter with his wand and friends"
          footer="The Chosen One, destined for greatness."
        />
        <Card
          title="Hermione Granger"
          content="Hermione Granger, one of Harry Potter's best friends, is a brilliant witch and an advocate for justice."
          footer="Brilliant, courageous, and wise beyond her years."
        />
      </section>

      <section>
        <h2>Dropdown Component</h2>
        <Dropdown
          options={['Option 1', 'Option 2', 'Option 3']}
          onChange={(val) => alert(val)}
        />
        <Dropdown
          options={['Option 1', 'Option 2', 'Option 3']}
          onChange={(val) => alert(val)}
          disabled
        />
      </section>

      <section>
        <h2>HeroImage Component</h2>
        <HeroImage
          src="/static/images/harry-potter.jpg"
          alt="Hero Image"
          overlayText="Welcome to Our Website"
        />
        <HeroImage src="/static/images/harry-potter.jpg" alt="Hero Image" />
      </section>

      <section>
        <h2>Img Component</h2>
        <Img
          src="/static/images/harry-potter.jpg"
          alt="Placeholder Image"
          width={150}
          height={150}
        />
      </section>

      <section>
        <h2>Label Component</h2>
        <Label text="Sample Label" color="black" />
      </section>

      <section>
        <h2>RadioButton Component</h2>
        <RadioButton
          name="options"
          options={['Option 1', 'Option 2']}
          onChange={(val) => alert(val)}
        />
        <RadioButton
          name="options"
          options={['Option 1', 'Option 2']}
          onChange={(val) => alert(val)}
          disabled
        />
      </section>

      <section>
        <h2>Table Component</h2>
        <Table
          headers={['Character', 'House', 'Role']}
          rows={[
            ['Harry Potter', 'Gryffindor', 'The Chosen One'],
            ['Hermione Granger', 'Gryffindor', 'Brilliant Witch'],
            ['Ron Weasley', 'Gryffindor', "Harry's Best Friend"],
            ['Draco Malfoy', 'Slytherin', 'Rival of Harry Potter'],
            ['Luna Lovegood', 'Ravenclaw', 'Quirky and Eccentric'],
          ]}
          footer={['End of Table', '', '']}
        />
      </section>

      <section>
        <h2>Text Component</h2>
        <Text content="This is a text component" />
        <Text content="This is a large text" size="2rem" />
      </section>
    </div>
  );
};

export default App;
