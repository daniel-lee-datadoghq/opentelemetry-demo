// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { datadogRum } from '@datadog/browser-rum';

if (typeof window !== 'undefined') {
  datadogRum.init({
    applicationId: '<DD_APP_ID>',
    clientToken: '<DD_CLIENT_TOKEN>',
    site: 'datadoghq.com',
    allowedTracingUrls: [
      /^http:\/\/[^\/]+\:8080\/api/
    ],
    service: 'frontend',
    env: 'no-otel',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
  });
}

