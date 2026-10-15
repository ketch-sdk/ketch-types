import {
  ConfirmIdentityRequest,
  ConfirmSubscriptionRequest,
  ConfirmSubscriptionResponse,
  isTab,
  SetSubscriptionsRequest,
  SubscriptionAccessTokenErrorReason,
  SubscriptionTopicDoubleOptInRule,
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
    it('types the access link requests, responses and confirmationEmail rule', () => {
      const accessLinkShapes: [
        ConfirmIdentityRequest,
        ConfirmSubscriptionRequest,
        ConfirmSubscriptionResponse,
        SetSubscriptionsRequest,
        SubscriptionTopicDoubleOptInRule,
        SubscriptionAccessTokenErrorReason[],
      ] = [
        {
          organizationCode: 'org',
          contactMethod: 'email',
          value: 'user@example.com',
          propertyCode: 'website',
          returnUrl: 'https://example.com/preferences',
          recaptchaToken: 'captcha',
        },
        { organizationCode: 'org', accessToken: 'token' },
        {
          confirmed: [{ topicCode: 'news', contactMethodCode: 'email' }],
          skipped: [{ topicCode: 'offers', contactMethodCode: 'email', reason: 'alreadyConfirmed' }],
        },
        { organizationCode: 'org', accessToken: 'token' },
        {
          contactMethod: 'email',
          confirmationEmail: { enabled: true, identitySpaceCode: 'email', confirmUrl: 'https://example.com/confirm' },
        },
        ['token_invalid', 'token_expired'],
      ]

      // @ts-expect-error accessToken is required
      const confirmWithoutToken: ConfirmSubscriptionRequest = { organizationCode: 'org' }
      // @ts-expect-error only token_invalid and token_expired are reasons
      const unknownReason: SubscriptionAccessTokenErrorReason = 'token_missing'

      expect(accessLinkShapes).toHaveLength(6)
      expect([confirmWithoutToken, unknownReason]).toHaveLength(2)
    })
  })
})
