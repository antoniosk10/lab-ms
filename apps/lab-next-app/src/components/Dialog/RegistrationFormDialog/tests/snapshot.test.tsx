import { render } from '@testing-library/react'

import { RegistrationFormDialog } from '../RegistrationFormDialog'

it('renders RegistrationFormDialog unchanged', () => {
  const { baseElement } = render(
    <RegistrationFormDialog
      isOpen={true}
      onClose={jest.fn}
      onSubmit={jest.fn}
    />
  )
  expect(baseElement).toMatchSnapshot()
})
