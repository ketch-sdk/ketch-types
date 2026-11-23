import {
  BulkConsentAction,
  ConfirmIdentityRequest,
  ConfirmSubscriptionRequest,
  ConfirmSubscriptionResponse,
  Configuration,
  ConfigurationV2,
  Deployment,
  DisplayExperienceType,
  ExperienceContentConfig,
  ExperienceLayoutConfig,
  isSubscriptionPage,
  isTab,
  LeadCaptureConfig,
  LeadCaptureResultAction,
  OptOutProgressThemeConfig,
  PreferenceSubscriptionsTabExperienceContentConfig,
  PreferenceSubscriptionsTabExperienceLayoutConfig,
  RequestsTabRightFormThemeConfig,
  Right,
  RuleTrigger,
  SetSubscriptionsRequest,
  StaticContentConfig,
  SubscriptionAccessTokenErrorReason,
  SubscriptionSource,
  SubscriptionTopicDoubleOptInRule,
  Translations,
  TriggerName,
  Vendor,
} from './index'

describe('index', () => {
  describe('BulkConsentAction', () => {
    it('keeps the string values the tag already uses', () => {
      expect(BulkConsentAction.Accept).toBe('accept')
      expect(BulkConsentAction.Reject).toBe('reject')
    })
  })

  describe('RuleTrigger', () => {
    it('keys Do Not Sell or Share Opened rules under onDnsOpened', () => {
      expect(RuleTrigger.ON_DNS_OPENED).toBe('onDnsOpened')
    })
  })

  describe('TriggerName', () => {
    it('matches the names ketch trigger accepts', () => {
      expect(TriggerName.Custom).toBe('custom')
      expect(TriggerName.PrivacyPreferenceUnknown).toBe('privacyPreferenceUnknown')
      expect(TriggerName.PreferencesOpened).toBe('preferencesOpened')
      expect(TriggerName.DnsOpened).toBe('dnsOpened')
    })
  })

  describe('isSubscriptionPage', () => {
    it('returns true for each subscription page', () => {
      expect(isSubscriptionPage('access')).toBeTruthy()
      expect(isSubscriptionPage('leadCapture')).toBeTruthy()
    })

    it('returns false for anything else', () => {
      expect(isSubscriptionPage('subscriptionsTab')).toBeFalsy()
      expect(isSubscriptionPage(undefined)).toBeFalsy()
      expect(isSubscriptionPage(1)).toBeFalsy()
    })
  })

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

  describe('vendor legIntPurposes', () => {
    it('types legIntPurposes entries as an id with an optional publisher restriction', () => {
      const vendor: Vendor = {
        id: '40',
        name: 'Vendor Delta',
        legIntPurposes: [{ id: 2 }, { id: 9, hasOverride: true, overrideType: 1 }, { id: 10, hasOverride: true }],
      }
      const withoutLegIntPurposes: Vendor = { id: '41', name: 'Vendor Echo' }

      // @ts-expect-error legIntPurposes entries need an id
      const missingId: Vendor = { id: '42', name: 'Vendor Foxtrot', legIntPurposes: [{ hasOverride: true }] }

      expect(vendor.legIntPurposes?.find(p => p.hasOverride)?.overrideType).toBe(1)
      expect(withoutLegIntPurposes.legIntPurposes).toBeUndefined()
      expect(missingId.legIntPurposes).toHaveLength(1)
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

  describe('subscriptions authentication gateway', () => {
    it('types the email form layout and copy on the subscriptions tab', () => {
      const layout: PreferenceSubscriptionsTabExperienceLayoutConfig = {
        authenticationGateway: { header: { title: { visible: false } }, actionButton: { useDefaultText: true } },
      }
      const content: PreferenceSubscriptionsTabExperienceContentConfig = {
        authenticationGateway: {
          header: { title: 'Access Your Subscriptions', description: '<p>We will email you a link.</p>' },
          actionButtonText: 'Send Me A Link',
        },
      }

      const textInLayout: PreferenceSubscriptionsTabExperienceLayoutConfig = {
        // @ts-expect-error the action button text is copy, not a layout setting
        authenticationGateway: { actionButtonText: 'Send' },
      }

      expect(layout.authenticationGateway?.header?.title?.visible).toBe(false)
      expect(content.authenticationGateway?.actionButtonText).toBe('Send Me A Link')
      expect(textInLayout.authenticationGateway).toBeDefined()
    })
  })

  describe('country translations', () => {
    // Each key is checked by name against both types; a spread object would skip the check.
    const territoryKeys = [
      'country_american_samoa',
      'country_guam',
      'country_northern_mariana_islands',
      'country_puerto_rico',
      'country_united_states_minor_outlying_islands',
      'country_virgin_islands_us',
    ] as const

    it('has the US territory country names on static content and translations', () => {
      const staticContentKeys: Array<keyof StaticContentConfig> = [...territoryKeys]
      const translationKeys: Array<keyof Translations> = [...territoryKeys]

      expect(staticContentKeys).toHaveLength(6)
      expect(translationKeys).toHaveLength(6)
    })
  })

  describe('opt-out form', () => {
    const color = { color: '#071a24' }

    it('types the purposes an opt-out right turns off', () => {
      const right: Right = {
        code: 'opt_out',
        name: 'Do Not Sell or Share',
        description: 'Opt out of the sale or sharing of your data',
        canonicalRightCode: 'restrict',
        optOutPurposeCodes: ['targeted_advertising'],
      }

      expect(right.optOutPurposeCodes).toEqual(['targeted_advertising'])
    })

    it('types the progress steps and track arrow beside the fields older themes saved', () => {
      const progress: OptOutProgressThemeConfig = {
        complete: {
          fill: color,
          outline: color,
          cornerRadius: 4,
          title: color,
          description: color,
          // A migrated theme copies completeIcon here, background and outline included.
          icon: {
            background: color,
            outline: color,
            icon: color,
            useDefaultIcon: false,
            iconUrl: 'https://example.com/check.svg',
          },
        },
        pending: { fill: color, icon: { useDefaultIcon: true } },
        track: { background: color, cornerRadius: 4, title: color, description: color, arrowIcon: color },
        divider: color,
        stepTitle: color,
        stepDescription: color,
        completeIcon: { background: color, outline: color, icon: color },
        pendingIcon: { icon: color },
      }
      const legacyTrack: OptOutProgressThemeConfig = { track: { outline: color, actionButton: { background: color } } }

      expect(progress.complete?.icon?.iconUrl).toBe('https://example.com/check.svg')
      expect(progress.track?.arrowIcon).toEqual(color)
      expect(legacyTrack.track?.actionButton).toBeDefined()
    })

    it('types the GPC banner and consent summary theme on the right form', () => {
      const rightForm: RequestsTabRightFormThemeConfig = {
        gpcBanner: { fill: color, outline: color, title: { text: color }, showLinkArrow: true, cornerRadius: 4 },
        consentSummary: {
          item: { background: color, text: color, cornerRadius: 4 },
          optedOutByGpc: { background: color, outline: color, text: color },
        },
      }

      expect(rightForm.consentSummary?.optedOutByGpc?.text).toEqual(color)
    })

    it('types the opt-out notice, signal notices, consent summary and progress copy', () => {
      const layout: ExperienceLayoutConfig = {
        modal: { optOutNotice: { visible: false, title: { useDefaultText: false } } },
        preference: {
          tabs: {
            purposes: { optOutNotice: { visible: true, actionButton: { useDefaultText: true } } },
            requests: {
              rightForm: {
                gpcBanner: { visible: true, description: { visible: true, useDefaultText: false } },
                attBanner: { visible: false, openSettingsLink: { visible: true } },
                consentSummary: { visible: true, optedOutByGpc: { useDefaultText: false } },
              },
              submitted: {
                actionButton: { visible: true, useDefaultText: true },
                optOutProgress: { receivedTitle: { useDefaultText: false } },
              },
            },
          },
        },
      }
      const content: ExperienceContentConfig = {
        modal: { optOutNotice: { title: 'Device(s) opted out', actionButtonText: 'Complete your opt-out' } },
        preference: {
          tabs: {
            purposes: { optOutNotice: { description: 'Submit an opt-out request to opt out more broadly.' } },
            requests: {
              rightForm: {
                gpcBanner: { title: 'GPC detected' },
                attBanner: { openSettingsLink: 'Settings' },
                consentSummary: { readOnly: 'Read-only', optedOutByGpc: 'Opted Out by GPC' },
              },
              submitted: { optOutProgress: { trackDescription: 'Track this request.' } },
            },
          },
        },
      }

      const progressVisibility: ExperienceLayoutConfig = {
        // @ts-expect-error the progress steps always show; only their copy is configurable
        preference: { tabs: { requests: { submitted: { actionButton: {}, optOutProgress: { visible: false } } } } },
      }

      expect(layout.modal?.optOutNotice?.visible).toBe(false)
      expect(layout.preference?.tabs?.requests?.rightForm?.consentSummary?.optedOutByGpc?.useDefaultText).toBe(false)
      expect(content.preference?.tabs?.requests?.submitted?.optOutProgress?.trackDescription).toBe(
        'Track this request.',
      )
      expect(progressVisibility.preference).toBeDefined()
    })
  })
})
