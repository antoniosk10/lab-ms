import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { RegistrationFormDialog } from '../RegistrationFormDialog'

const onCloseMock = jest.fn()
const onSubmitMock = jest.fn()

const testValue = 'test'
const wrongConfirmPassword = 'wrong'
const mockSubmitData = {
  email: testValue,
  password: testValue,
  confirmPassword: testValue,
}

function setupUserEvent(jsx: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  }
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Authorization form functionality', () => {
  it('should change Email field after user input', async () => {
    const { user } = setupUserEvent(
      <RegistrationFormDialog
        isOpen={true}
        onClose={onCloseMock}
        onSubmit={onSubmitMock}
      />
    )
    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    })

    await user.type(emailInput, testValue)

    expect(emailInput).toHaveValue(testValue)
  })

  it('should change Password field after user input', async () => {
    const { user } = setupUserEvent(
      <RegistrationFormDialog
        isOpen={true}
        onClose={onCloseMock}
        onSubmit={onSubmitMock}
      />
    )
    const passwordInput = screen.getByRole('textbox', {
      name: /^password/i,
    })

    await user.type(passwordInput, testValue)

    expect(passwordInput).toHaveValue(testValue)
  })

  it('should change ConfirmPassword field after user input', async () => {
    const { user } = setupUserEvent(
      <RegistrationFormDialog
        isOpen={true}
        onClose={onCloseMock}
        onSubmit={onSubmitMock}
      />
    )
    const confirmPasswordInput = screen.getByRole('textbox', {
      name: /confirm password/i,
    })

    await user.type(confirmPasswordInput, testValue)

    expect(confirmPasswordInput).toHaveValue(testValue)
  })

  it('should provide right data by clicking to SignUp button', async () => {
    const { user } = setupUserEvent(
      <RegistrationFormDialog
        isOpen={true}
        onClose={onCloseMock}
        onSubmit={onSubmitMock}
      />
    )
    const signUpButton = screen.getByRole('button', {
      name: /sign up/i,
    })
    const passwordInput = screen.getByRole('textbox', {
      name: /^password/i,
    })
    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    })
    const confirmPasswordInput = screen.getByRole('textbox', {
      name: /confirm password/i,
    })

    await user.type(emailInput, testValue)
    await user.type(passwordInput, testValue)
    await user.type(confirmPasswordInput, testValue)
    await user.click(signUpButton)

    expect(onSubmitMock).toHaveBeenCalledWith(mockSubmitData, expect.anything())
  })

  it('should not invoke submit if confirmPassword is not equal to password', async () => {
    const { user } = setupUserEvent(
      <RegistrationFormDialog
        isOpen={true}
        onClose={onCloseMock}
        onSubmit={onSubmitMock}
      />
    )
    const signUpButton = screen.getByRole('button', {
      name: /sign up/i,
    })
    const passwordInput = screen.getByRole('textbox', {
      name: /^password/i,
    })
    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    })
    const confirmPasswordInput = screen.getByRole('textbox', {
      name: /confirm password/i,
    })

    await user.type(emailInput, testValue)
    await user.type(passwordInput, testValue)
    await user.type(confirmPasswordInput, wrongConfirmPassword)
    await user.click(signUpButton)

    expect(onSubmitMock).not.toHaveBeenCalled()
  })
})
