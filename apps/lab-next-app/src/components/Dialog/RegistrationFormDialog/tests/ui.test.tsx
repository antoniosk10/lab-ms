import { render, screen } from '@testing-library/react'

import { RegistrationFormDialog } from '../RegistrationFormDialog'

const onCloseMock = jest.fn()
const onSubmitMock = jest.fn()

describe('Registration form ui', () => {
  it('should render Email input', async () => {
    render(
      <RegistrationFormDialog
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
      <RegistrationFormDialog
        isOpen={true}
        onClose={onCloseMock}
        onSubmit={onSubmitMock}
      />
    )

    const passwordInput = screen.getByLabelText(/^password/i)

    expect(passwordInput).toBeInTheDocument()
  })

  it('should render ConfirmPassword input', async () => {
    render(
      <RegistrationFormDialog
        isOpen={true}
        onClose={onCloseMock}
        onSubmit={onSubmitMock}
      />
    )

    const confirmPasswordInput = screen.getByLabelText(/confirm password/i)

    expect(confirmPasswordInput).toBeInTheDocument()
  })

  it('should render SignUp button', async () => {
    render(
      <RegistrationFormDialog
        isOpen={true}
        onClose={onCloseMock}
        onSubmit={onSubmitMock}
      />
    )

    const signUpButton = screen.getByRole('button', {
      name: /sign up/i,
    })

    expect(signUpButton).toBeInTheDocument()
  })

  it('should render default state', () => {
    render(
      <RegistrationFormDialog
        isOpen={true}
        onClose={onCloseMock}
        onSubmit={onSubmitMock}
      />
    )
    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    })
    const passwordInput = screen.getByLabelText(/^password/i)
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i)

    const signUpButton = screen.getByRole('button', {
      name: /sign up/i,
    })

    expect(emailInput).toHaveValue('')
    expect(passwordInput).toHaveValue('')
    expect(confirmPasswordInput).toHaveValue('')
    expect(signUpButton).not.toHaveClass('Mui-disabled')
  })
})
