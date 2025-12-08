'use client';

import React from 'react';
import { Form, Button, Stack, Checkbox, PasswordInput } from 'rsuite';

import Link from 'next/link';

const SignUp = () => {
  return (
    <div className="auth-page">
      <div className="auth-banner">
        <div className="auth-banner-content">
          <div className="auth-banner-logo">RSUITE</div>
          <h1 className="auth-banner-title">Join Our Platform</h1>
          <p className="auth-banner-subtitle">
            Create your account and start building amazing applications with our powerful admin
            template.
          </p>
        </div>
      </div>

      <div className="auth-form-wrapper">
        <div className="auth-form-container">
          <div className="auth-form-header">
            <h2 className="auth-form-title">Create Account</h2>
            <p className="auth-form-subtitle">
              Already have an account? <Link href="/sign-in">Sign in here</Link>
            </p>
          </div>

          <Form fluid className="auth-form">
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control name="username" placeholder="Choose a username" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                accepter={PasswordInput}
                placeholder="Create a password"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name="confirm-password"
                type="password"
                placeholder="Confirm your password"
              />
            </Form.Group>

            <div className="auth-checkbox-group">
              <Stack spacing={6}>
                <Checkbox>I agree to the</Checkbox>
                <Button appearance="link">Terms and Conditions</Button>
              </Stack>
            </div>

            <Form.Group>
              <Button appearance="primary" block size="lg" className="auth-submit-btn">
                Create Account
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
