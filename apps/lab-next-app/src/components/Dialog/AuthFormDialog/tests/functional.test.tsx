import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { AuthFormDialog } from '../AuthFormDialog'

const onCloseMock = jest.fn()
const onSubmitMock = jest.fn()

const testValue = 'test'
const mockSubmitData = {
  email: testValue,
  password: testValue,
}

function setupUserEvent(jsx: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  }
}

describe('Authorization form functionality', () => {
  it('should change Email field after user input', async () => {
    const { user } = setupUserEvent(
      <AuthFormDialog
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
      <AuthFormDialog
        isOpen={true}
        onClose={onCloseMock}
        onSubmit={onSubmitMock}
      />
    )
    const passwordInput = screen.getByLabelText(/password/i)

    await user.type(passwordInput, testValue)

    expect(passwordInput).toHaveValue(testValue)
  })

  it('should provide right data by clicking to SignIn button', async () => {
    const { user } = setupUserEvent(
      <AuthFormDialog
        isOpen={true}
        onClose={onCloseMock}
        onSubmit={onSubmitMock}
      />
    )
    const signInButton = screen.getByRole('button', {
      name: /sign in/i,
    })
    const passwordInput = screen.getByLabelText(/password/i)
    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    })

    await user.type(emailInput, testValue)
    await user.type(passwordInput, testValue)
    await user.click(signInButton)

    expect(onSubmitMock).toHaveBeenCalledWith(mockSubmitData, expect.anything())
  })
})
