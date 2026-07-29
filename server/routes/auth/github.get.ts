/********************************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/
import { isAdminEmail } from "../../utils/auth"

export default defineOAuthGitHubEventHandler({
  config: {
    scope: ['read:user', 'user:email'],
    emailRequired: true
  },
  async onSuccess(event, { user }) {
    if (!user.email) {
      throw new Error('Email is required but not provided by GitHub')
    }
    await setUserSession(event, {
      user: {
        name: user.name,
        email: user.email,
        roles: await isAdminEmail(user.email) ? ["admin"] : []
      },
      loggedInAt: Date.now()
    })
    return sendRedirect(event, '/profile')
  },
  onError(event, error) {
    console.error('GitHub OAuth error:', error)
    return sendRedirect(event, '/')
  },
})