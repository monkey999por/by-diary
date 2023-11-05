import { render, screen } from '@testing-library/react';

import SampleComp from '@/components/SampleComp';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('rendgge r  s a heading', () => {
    const buttonName = 'sample comp buttone';
    render(<SampleComp name={buttonName} />);

    const heading = screen.getByRole('button', {
      name: /sample comp buttone/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
