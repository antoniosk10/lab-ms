import { render } from '@testing-library/react'

import { SimpleDialog } from '../SimpleDialog'

it('renders SimpleDialog unchanged', () => {
  const { baseElement } = render(
    <SimpleDialog isOpen={true} onClose={jest.fn} title="test" />
  )
  expect(baseElement).toMatchSnapshot()
})
