import {
  ConfirmIdentityRequest,
  Configuration,
  ConfigurationV2,
  Deployment,
  DisplayExperienceType,
  isTab,
  LeadCaptureConfig,
  LeadCaptureResultAction,
  SetSubscriptionsRequest,
  SubscriptionAccessTokenErrorReason,
  SubscriptionSource,
} from './index'

describe('index', () => {
  describe('isTab', () => {
    it('returns true if given a tab', () => {
      expect(isTab('overviewTab')).toBeTruthy()
    })

    it('returns false if not given a tab', () => {
      expect(isTab('overview')).toBeFalsy()
    })
  })

  describe('subscription access links', () => {
    it('types the access link requests and error reasons', () => {
      const accessLinkShapes: [ConfirmIdentityRequest, SetSubscriptionsRequest, SubscriptionAccessTokenErrorReason[]] =
        [
          {
            organizationCode: 'org',
            contactMethod: 'email',
            value: 'user@example.com',
            propertyCode: 'website',
            returnUrl: 'https://example.com/preferences',
            recaptchaToken: 'captcha',
          },
          { organizationCode: 'org', accessToken: 'token' },
          ['token_invalid', 'token_expired'],
        ]

      // @ts-expect-error only token_invalid and token_expired are reasons
      const unknownReason: SubscriptionAccessTokenErrorReason = 'token_missing'

      expect(accessLinkShapes).toHaveLength(3)
      expect(unknownReason).toBe('token_missing')
    })
  })

  describe('deployment custom JS', () => {
    it('types customJs as an optional string on Deployment and both configuration shapes', () => {
      const withCustomJs: Deployment = {
        code: 'default',
        version: 1,
        customJs: 'console.log(propertyCode, jurisdictionCode, regionCode, environmentCode, languageCode)',
      }
      const withoutCustomJs: Deployment = { code: 'default', version: 1 }
      const v1: Pick<Configuration, 'deployment'> = { deployment: withCustomJs }
      const v2: Pick<ConfigurationV2, 'deployment'> = { deployment: withCustomJs }

      // @ts-expect-error customJs is raw JavaScript source, not a flag
      const notAString: Deployment = { code: 'default', version: 1, customJs: true }

      expect(withCustomJs.customJs).toContain('propertyCode')
      expect(withoutCustomJs.customJs).toBeUndefined()
      expect(v1.deployment?.customJs).toBe(withCustomJs.customJs)
      expect(v2.deployment?.customJs).toBe(withCustomJs.customJs)
      expect(notAString.customJs).toBe(true)
    })
  })

  describe('lead capture', () => {
    it('types the lead capture experience and its subscription request', () => {
      const leadCapture: LeadCaptureConfig = {
        layout: {
          header: {
            title: { visible: true },
            closeButton: { visible: true, icon: { visible: true, useDefault: true, image: { url: '' } } },
          },
          form: { visible: true, showHint: true },
          footer: { button: { action: 'submit', url: '' } },
          campaign: 'fall-promo',
          result: { success: { action: LeadCaptureResultAction.Redirect, url: 'https://example.com/thanks' } },
        },
        content: {
          header: { title: 'Get 10% off', closeButton: { text: 'Exit' } },
          description: '<p>Sign up for offers.</p>',
          form: { hint: 'Enter your email' },
          footer: { button: { text: 'Sign Up' } },
          success: { title: 'Thanks', description: 'Check your inbox.' },
          error: { title: 'Something went wrong', description: 'Try again.' },
        },
      }
      const signUp: SetSubscriptionsRequest = {
        organizationCode: 'org',
        identities: { email: 'user@example.com' },
        properties: { campaign: leadCapture.layout.campaign },
        context: { source: SubscriptionSource.LeadCaptureSubscription },
      }

      // @ts-expect-error result actions are limited to message, close and redirect
      const unknownAction: LeadCaptureResultAction = 'reload'
      const layoutWithoutCampaign: Omit<LeadCaptureConfig['layout'], 'campaign'> = leadCapture.layout
      // @ts-expect-error a lead capture experience requires a campaign
      const missingCampaign: LeadCaptureConfig['layout'] = layoutWithoutCampaign

      expect(DisplayExperienceType.LeadCapture).toBe('leadCapture')
      expect(SubscriptionSource.LeadCaptureSubscription).toBe('leadCapture.subscription')
      expect(Object.values(LeadCaptureResultAction)).toEqual(['message', 'close', 'redirect'])
      expect(signUp.properties).toEqual({ campaign: 'fall-promo' })
      expect(unknownAction).toBe('reload')
      expect(missingCampaign).toBe(leadCapture.layout)
    })
  })
})
