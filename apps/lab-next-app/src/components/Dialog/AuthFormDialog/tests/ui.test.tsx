import { render, screen } from '@testing-library/react'

import { AuthFormDialog } from '../AuthFormDialog'

const onCloseMock = jest.fn()
const onSubmitMock = jest.fn()

describe('Authorization form ui', () => {
  it('should render Email input', async () => {
    render(
      <AuthFormDialog
        isOpen={true}
        onClose={onCloseMock}
        onSubmit={onSubmitMock}
      />
    )

    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    })

    expect(emailInput).toBeInTheDocument()
  })

  it('should render Password input', async () => {
    render(
      <AuthFormDialog
        isOpen={true}
        onClose={onCloseMock}
        onSubmit={onSubmitMock}
      />
    )

    const passwordInput = screen.getByLabelText(/password/i)

    expect(passwordInput).toBeInTheDocument()
  })

  it('should render SignIn button', async () => {
    render(
      <AuthFormDialog
        isOpen={true}
        onClose={onCloseMock}
        onSubmit={onSubmitMock}
      />
    )

    const signInButton = screen.getByRole('button', {
      name: /sign in/i,
    })

    expect(signInButton).toBeInTheDocument()
  })

  it('should render default state', () => {
    render(
      <AuthFormDialog
        isOpen={true}
        onClose={onCloseMock}
        onSubmit={onSubmitMock}
      />
    )
    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    })
    const passwordInput = screen.getByLabelText(/password/i)
    const signInButton = screen.getByRole('button', {
      name: /sign in/i,
    })

    expect(emailInput).toHaveValue('')
    expect(passwordInput).toHaveValue('')
    expect(signInButton).not.toHaveClass('Mui-disabled')
  })
})
