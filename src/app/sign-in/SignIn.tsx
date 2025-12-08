'use client';

import React from 'react';
import { Form, Button, IconButton, Divider, PasswordInput } from 'rsuite';
import Link from 'next/link';
import GithubIcon from '@rsuite/icons/legacy/Github';
import FacebookIcon from '@rsuite/icons/legacy/Facebook';
import GoogleIcon from '@rsuite/icons/legacy/Google';
import WechatIcon from '@rsuite/icons/legacy/Wechat';

const SignIn = () => {
  return (
    <div className="auth-page">
      <div className="auth-banner">
        <div className="auth-banner-content">
          <div className="auth-banner-logo">RSUITE</div>
          <h1 className="auth-banner-title">Welcome to Admin Dashboard</h1>
          <p className="auth-banner-subtitle">
            Build beautiful, modern web applications with our comprehensive React admin template.
          </p>
        </div>
      </div>

      <div className="auth-form-wrapper">
        <div className="auth-form-container">
          <div className="auth-form-header">
            <h2 className="auth-form-title">Sign In</h2>
            <p className="auth-form-subtitle">
              New here? <Link href="/sign-up">Create an account</Link>
            </p>
          </div>

          <Form fluid className="auth-form">
            <Form.Group>
              <Form.Label>Username or email address</Form.Label>
              <Form.Control name="email" type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group>
              <Form.Label>
                <span>Password</span>
                <a href="#" className="forgot-password-link">
                  Forgot password?
                </a>
              </Form.Label>
              <Form.Control
                name="password"
                accepter={PasswordInput}
                placeholder="Enter your password"
              />
            </Form.Group>

            <Form.Group>
              <Button appearance="primary" block size="lg" className="auth-submit-btn">
                Sign In
              </Button>
            </Form.Group>

            <Divider className="auth-divider">OR</Divider>

            <div className="auth-social-buttons">
              <IconButton
                icon={<WechatIcon />}
                circle
                appearance="subtle"
                className="auth-social-btn"
              />
              <IconButton
                icon={<GithubIcon />}
                circle
                appearance="subtle"
                className="auth-social-btn"
              />
              <IconButton
                icon={<FacebookIcon />}
                circle
                appearance="subtle"
                className="auth-social-btn"
              />
              <IconButton
                icon={<GoogleIcon />}
                circle
                appearance="subtle"
                className="auth-social-btn"
              />
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
