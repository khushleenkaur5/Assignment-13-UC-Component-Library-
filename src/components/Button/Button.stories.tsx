import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'Button',
  component: Button,
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleClick = () => {
    setSuccessMessage('Button clicked successfully!');
  };

  return (
    <div>
      <Button {...args} onClick={handleClick} />
      {successMessage && <p>{successMessage}</p>}{' '}
      {/* Display success message */}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  text: 'Click Me',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled',
  disabled: true,
};
