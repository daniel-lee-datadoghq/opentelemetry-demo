// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { datadogRum } from '@datadog/browser-rum';

if (typeof window !== 'undefined') {
  datadogRum.init({
    applicationId: '384e96c9-a901-45b6-a5c2-5351ddd52495',
    clientToken: 'pub634e9f5eb80df058d008db0e58a3fb6d',
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

