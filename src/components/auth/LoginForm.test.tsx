import React from 'react';
import { screen, render } from '@testing-library/react';
import LoginFrom from './LoginForm';

it('Renders login button', () => {
    render(
        <LoginFrom />,
    );

    const loginButton = screen.getByText(/Увійти/);
    expect(loginButton).toBeInTheDocument();
});