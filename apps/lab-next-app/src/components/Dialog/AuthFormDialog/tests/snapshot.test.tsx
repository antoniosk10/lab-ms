import { render } from '@testing-library/react'

import { AuthFormDialog } from '../AuthFormDialog'

it('renders AuthForm unchanged', () => {
  const { baseElement } = render(
    <AuthFormDialog isOpen={true} onClose={jest.fn} onSubmit={jest.fn} />
  )

  expect(baseElement).toMatchSnapshot()
})
