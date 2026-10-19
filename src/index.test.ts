import { ConfirmIdentityRequest, isTab, SetSubscriptionsRequest, SubscriptionAccessTokenErrorReason } from './index'

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
})
