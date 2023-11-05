import { render, screen } from '@testing-library/react';

import SampleComp from '@/components/SampleComp';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('render  s a heading', () => {
    const buttonName = 'sample com  p button';
    render(<SampleComp name={buttonName} />);

    const heading = screen.getByRole('button', {
      name: /sample comp button/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
