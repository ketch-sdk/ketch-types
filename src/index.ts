import { ExperienceFormField, CanonicalRightForm, CustomRightForm, FormTemplate } from './forms'

/**
 * Tab
 *
 * @enum
 */
export enum Tab {
  Overview = 'overviewTab',
  Rights = 'rightsTab',
  Consents = 'consentsTab',
  Subscriptions = 'subscriptionsTab',
}

/**
 * All tabs
 */
const ALL_TABS = Object.values(Tab).map(x => x.toString())

/**
 * Determines if the given value is a Tab
 *
 * @param value The value to test
 * @returns true if the given value is a Tab
 */
export function isTab(value: string): value is Tab {
  return ALL_TABS.includes(value)
}

/**
 * ExperienceType is the type of experience that will be shown
 *
 * @enum
 */
export enum ExperienceType {
  Consent = 'experiences.consent',
  Preference = 'experiences.preference',
}

/**
 * ExperienceDisplayType is the type of experience that will be shown
 *  - Differs from ExperienceType in that consent experiences are enumerated individually
 *
 * @enum
 */
export enum ExperienceDisplayType {
  Banner = 'experiencedisplays.banner',
  Modal = 'experiencedisplays.modal',
  Preference = 'experiencedisplays.preference',
}

/**
 * ConsentExperienceType is the type of consent experience that will be shown
 *
 * @enum
 */
export enum ConsentExperienceType {
  Banner = 'experiences.consent.banner',
  Modal = 'experiences.consent.modal',
  JIT = 'experiences.consent.jit',
}

/**
 * ExperienceClosedReason describes the reason the experience was closed.
 *
 * setConsent = consent was accepted/set
 * invokeRight = the right was invoked
 * close = the close/exit button was clicked
 * willNotShow = the experience was skipped
 *
 * @enum
 */
export enum ExperienceClosedReason {
  SET_CONSENT = 'setConsent',
  INVOKE_RIGHT = 'invokeRight',
  CLOSE = 'close',
  CLOSE_WITHOUT_SETTING_CONSENT = 'closeWithoutSettingConsent',
  WILL_NOT_SHOW = 'willNotShow',
  SET_SUBSCRIPTIONS = 'setSubscriptions',
}

/**
 * SetConsentReason describes the reason the consent is being set.
 *
 * userUpdate = the user set consent
 * userExperienceDismissal = the user dismissed the experience an unset consent will be set to false
 * defaultState = the consent is set based on the legal basis default
 *
 * @enum
 */
export enum SetConsentReason {
  USER_UPDATE = 'userUpdate',
  USER_EXPERIENCE_DISMISSAL = 'userExperienceDismissal',
  DEFAULT_STATE = 'defaultState',
}

/**
 * ExperienceDefault
 *
 * @enum
 */
export enum ExperienceDefault {
  BANNER = 1,
  MODAL = 2,
}

/**
 * ExperienceButtonDestination
 *
 * @enum
 */
export enum ExperienceButtonDestination {
  GOTO_MODAL = 1,
  GOTO_PREFERENCE = 2,
  REJECT_ALL = 3,
}

/**
 * ExperiencePrimaryButtonAction
 *
 * @enum
 */
export enum ExperiencePrimaryButtonAction {
  SAVE_CURRENT_STATE = 1,
  ACCEPT_ALL = 2,
}

/**
 * MigrationOption
 *
 * @enum
 */
export enum MigrationOption {
  MIGRATE_DEFAULT = 0,
  MIGRATE_NEVER = 1,
  MIGRATE_FROM_ALLOW = 2,
  MIGRATE_FROM_DENY = 3,
  MIGRATE_ALWAYS = 4,
}

/**
 * CookieDuration
 *
 * @enum
 */
export enum CookieDuration {
  SESSION = 1,
  PERSISTENT = 2,
}

/**
 * CookieProvenance
 *
 * @enum
 */
export enum CookieProvenance {
  FIRST_PARTY = 1,
  THIRD_PARTY = 2,
}

/**
 * CookieCategory
 *
 * @enum
 */
export enum CookieCategory {
  STRICTLY_NECESSARY = 1,
  FUNCTIONAL = 2,
  PERFORMANCE = 3,
  MARKETING = 4,
}

/**
 * IdentityLocation is the location on the page from which to retrieve identity information
 *
 * @enum
 */
export enum IdentityType {
  IDENTITY_TYPE_UNDEFINED = '',
  IDENTITY_TYPE_DATA_LAYER = 'dataLayer',
  IDENTITY_TYPE_WINDOW = 'window',
  IDENTITY_TYPE_COOKIE = 'cookie',
  IDENTITY_TYPE_MANAGED = 'managedCookie', // this is created if necessary and stored in a cookie with associated name
  IDENTITY_TYPE_LOCAL_STORAGE = 'localStorage',
  IDENTITY_TYPE_SESSION_STORAGE = 'sessionStorage',
  IDENTITY_TYPE_QUERY_STRING = 'queryString',
}

/**
 * IdentityFormat is the encoding of the string identity value
 *
 * @enum
 */
export enum IdentityFormat {
  IDENTITY_FORMAT_UNDEFINED = '',
  IDENTITY_FORMAT_STRING = 'string',
  IDENTITY_FORMAT_JSON = 'json',
  IDENTITY_FORMAT_JWT = 'jwt',
  IDENTITY_FORMAT_QUERY = 'query',
  IDENTITY_FORMAT_SEMICOLON = 'semicolon',
}

/**
 * IdentityEncoding is the encoding of the string identity value
 *
 * @enum
 */
export enum IdentityEncoding {
  IDENTITY_ENCODING_UNDEFINED = '',
  IDENTITY_ENCODING_NONE = 'none',
  IDENTITY_ENCODING_BASE64 = 'base64',
}

/**
 * SwitchTextRenderLogic
 *
 * @enum
 */
export enum SwitchTextRenderLogic {
  /**
   * SWITCH_TEXT_RENDER_ALL always renders the switch text regardless of state
   */
  SWITCH_TEXT_RENDER_ALL = 1,
  /**
   * SWITCH_TEXT_RENDER_LEGAL_BASIS renders the switch text only if different from the legal basis default
   */
  SWITCH_TEXT_RENDER_LEGAL_BASIS = 2,
  /**
   * SWITCH_TEXT_RENDER_CHANGE renders the switch only if the user changes the state of the switch
   */
  SWITCH_TEXT_RENDER_CHANGE = 3,
  /**
   * SWITCH_TEXT_RENDER_NEVER never renders the switch text
   */
  SWITCH_TEXT_RENDER_NEVER = 4,
}

/**
 * SubscriptionControlImpactType
 *
 * @enum
 */
export enum SubscriptionControlImpactType {
  /**
   * Impact type unspecified
   */
  UNSPECIFIED = 0,
  /**
   * Unsubscribe from all subscription topics
   */
  GLOBAL = 1,
  /**
   * Unsubscribe from subscription topics configured to experience
   */
  LOCAL = 2,
}

/**
 * SubscriptionControlPositionType
 *
 * @enum
 */
export enum SubscriptionControlPositionType {
  /**
   * Position control unspecified
   */
  UNSPECIFIED = 0,
  /**
   * Position control at top
   */
  TOP = 1,
  /**
   * Position control at bottom
   */
  BOTTOM = 2,
}

/**
 * BannerPosition
 *
 * @enum
 */
export enum BannerPosition {
  BOTTOM = 1,
  TOP = 2,
  BOTTOM_LEFT = 3,
  BOTTOM_RIGHT = 4,
}

/**
 * ModalPosition
 *
 * @enum
 */
export enum ModalPosition {
  CENTER = 1,
  LEFT_FULL_HEIGHT = 2,
  RIGHT_FULL_HEIGHT = 3,
}

/**
 * ExperienceActionKind is the Kind of the ExperienceAction.
 *
 * @enum
 */
export enum ExperienceActionKind {
  /**
   * The experience was shown
   */
  ShowExperience,
  /**
   * The experience was hidden
   */
  HideExperience,
  /**
   * Consent was changed
   */
  SetConsent,
  /**
   * Subscriptions were changed
   */
  SetSubscription,
  /**
   * Right was invoked
   */
  InvokeRight,
}

/**
 * Storage policy setting
 *
 * @enum
 */
export enum StorageOriginPolicy {
  /**
   * Storage saved cross-origin.
   */
  CrossOrigin = 'cross-origin',

  /**
   * Storage is same-origin only.
   */
  SameOrigin = 'same-origin,',
}

/**
 * Identities
 */
export type Identities = { [key: string]: string }

/**
 * Status
 */
export type Status = { [key: string]: boolean }

/**
 * Protocols
 */
export type Protocols = { [key: string]: string }

/**
 * Consent
 */
export type Consent = {
  purposes: Status
  vendors?: string[] // list of vendor ids for which the user has opted out
  googleVendors?: string[] // list of Google vendor ids for which the user has opted out
  protocols?: Protocols
}

/**
 * ShowPreferenceOptions
 */
export type ShowPreferenceOptions = {
  /**
   * The tab to display.
   */
  tab?: Tab

  /**
   * dataSubjectTypeCodes is the list of data subjects to display. If undefined,
   * all data subjects are displayed.
   */
  dataSubjectTypeCodes?: string[]

  /**
   * showRightsTab determines whether the rights tab will show. If undefined,
   * the rights tab is displayed.
   */
  showRightsTab?: boolean

  /**
   * showSubscriptionsTab determines whether the subscriptions tab will show. If undefined,
   * the subscriptions tab is displayed.
   */
  showSubscriptionsTab?: boolean

  /**
   * supportedCountries is the list of supported ISO 3166 ALPHA-2 country codes
   * to show in the rights form
   */
  supportedCountries?: string[]

  /**
   * showConsentsTab determines whether the consents tab will show. If
   * undefined, the consents tab is displayed
   */
  showConsentsTab?: boolean

  /**
   * showOverviewTab determines whether the overview tab will show. If
   * undefined, the overview tab is displayed
   */
  showOverviewTab?: boolean
}

/**
 * ShowConsentOptions
 */
export type ShowConsentOptions = {
  displayHint?: ConsentExperienceType
  purposes?: string[]
  experience?: string
}

/**
 * ShowProgressiveExperienceOptions
 */
export type ShowProgressiveExperienceOptions = {
  experienceId: string
}

/**
 * InvokeRightEvent
 */
export type InvokeRightEvent = {
  right: string
  subject: DataSubject
  recaptchaToken?: string
}

/**
 * IPLanguage
 */
export interface IPLanguage {
  code: string
  name: string
  native: string
}

/**
 * IPLocation
 */
export interface IPLocation {
  geonameId: number
  capital: string
  languages: IPLanguage[]
  countryFlag: string
  countryFlagEmoji: string
  countryFlagEmojiUnicode: string
  callingCode: string
  isEU: boolean
}

/**
 * IPInfo
 */
export interface IPInfo {
  ip: string
  hostname: string
  continentCode: string
  continentName: string
  countryCode: string
  countryName: string
  regionCode: string
  regionName: string
  city: string
  zip: string
  latitude: number
  longitude: number
  location: IPLocation
}

/**
 * PurposeLegalBasis
 */
export interface PurposeLegalBasis {
  allowed?: string
  legalBasisCode: string
}

/**
 * PurposeAllowed
 */
export interface PurposeAllowed {
  allowed: string
  legalBasisCode?: string
}

/**
 * PurposeAllowedLegalBasis
 */
export interface PurposeAllowedLegalBasis {
  allowed: string
  legalBasisCode: string
}

/**
 * DataSubject
 */
export interface DataSubject {
  email: string
  firstName: string
  lastName: string
  country?: string
  stateRegion?: string
  city?: string
  description?: string
  phone?: string
  postalCode?: string
  addressLine1?: string
  addressLine2?: string
  formData?: { [key: string]: string }

  /**
   * typeCode is the identifier representing the data subject type specified by the user
   */
  typeCode?: string

  /**
   * typeRelationshipDetails is additional information provided by the user describing their relation to the business
   */
  typeRelationshipDetails?: string
}

/**
 * Organization
 */
export interface Organization {
  code: string
}

/**
 * JurisdictionInfo
 */
export interface JurisdictionInfo {
  code?: string
  defaultJurisdictionCode?: string
  variable?: string
  jurisdictions?: { [key: string]: string }
}

/**
 * Property
 */
export interface Property {
  code?: string
  name?: string
  platform?: string
  proxy?: string
}

/**
 * Environment
 */
export interface Environment {
  code: string
  pattern?: string
  hash?: string
  domain?: string
}

/**
 * Deployment
 */
export interface Deployment {
  code: string
  version: number
  isOrchestrationOnly?: boolean
}

/**
 * Cookie
 */
export interface Cookie {
  name: string
  code: string
  host: string
  duration: CookieDuration
  provenance: CookieProvenance
  category: CookieCategory
  description: string
  serviceProvider?: string
  latest?: boolean
  version?: number
}

/**
 * PurposeCategory
 */
export type PurposeCategory = {
  name: string
  description: string
  retentionPeriod: string
  externalTransfers: string
}

/**
 * Purpose
 */
export interface Purpose {
  code: string
  name?: string
  description?: string
  legalBasisCode: string
  requiresOptIn?: boolean
  allowsOptOut?: boolean
  requiresDisplay?: boolean
  requiresPrivacyPolicy?: boolean
  cookies?: Cookie[]
  categories?: PurposeCategory[]
  tcfType?: string
  tcfID?: string
  canonicalPurposeCode?: string
  legalBasisName?: string
  legalBasisDescription?: string
  illustrations?: string[]

  /**
   * the data subject types for which the purpose is relevant. If this list is empty then the purpose applies to all
   * data subject types
   */
  dataSubjectTypeCodes?: string[]

  /**
   * the canonical purposes (ketch purposes) assigned to this purpose
   */
  canonicalPurposeCodes?: string[]
}

/**
 * PluginPurposeMapping
 */
export interface PluginPurposeMapping {
  pluginPurposeID: string
  purposes?: string[]
  canonicalPurposes?: string[]
}

/**
 * PluginOptions
 */
export interface PluginOptions {
  regulations?: string[]
  options?: { [optionKey: string]: string }
  jurisdictions?: string[]
  regions?: string[]
  purposeMappings?: PluginPurposeMapping[]
}

/*
 * CanonicalPurpose
 */
export interface CanonicalPurpose {
  code: string
  name: string
  purposeCodes?: string[]
}

/**
 * Identity represents all the metadata for an identifier on the page
 */
export interface Identity {
  /**
   * type is the location on the page from which to retrieve identity information
   */
  type: IdentityType

  /**
   * variable is the name to look up the identity value in the specified location
   */
  variable: string

  /**
   * format of the value
   */
  format?: IdentityFormat

  /**
   * key is the identifier to find the identity within the value if the format is IDENTITY_FORMAT_STRING then key
   * will be undefined
   */
  key?: string

  /**
   * priority of the identity for consent conflict resolution
   */
  priority?: number

  /**
   * encoding of the value
   */
  encoding?: IdentityEncoding
}

/**
 * PolicyDocument
 */
export interface PolicyDocument {
  code: string
  version: number
  url: string
}

/**
 * Banner
 */
export interface Banner {
  title?: string
  footerDescription: string
  buttonText: string
  primaryButtonAction?: ExperiencePrimaryButtonAction
  secondaryButtonText?: string
  secondaryButtonDestination?: ExperienceButtonDestination

  /**
   * showCloseIcon determines whether the x out icon appears in the experience. Default do not show
   */
  showCloseIcon?: boolean

  /**
   * additional extensions
   */
  extensions?: { [key: string]: string }
}

/**
 * Modal
 */
export interface Modal {
  title: string
  bodyTitle?: string
  bodyDescription?: string
  footerDescription?: string
  buttonText: string

  /**
   * consentTitle is the heading that goes above the list of purposes this optionally overrides the standard title
   */
  consentTitle?: string

  /**
   * hideConsentTitle determines whether the consent title should be hidden. Default is to show
   */
  hideConsentTitle?: boolean

  /**
   * hideLegalBases determines whether the legal bases should be hidden. Default is to show
   */
  hideLegalBases?: boolean

  /**
   * switchOnText overrides the standard text for a consent switch in the on state
   */
  switchOnText?: string

  /**
   * switchOffText overrides the standard text for a consent switch in the off state
   */
  switchOffText?: string

  /**
   * switchTextRenderLogic determines the logic for showing the switch text
   */
  switchTextRenderLogic?: SwitchTextRenderLogic

  /**
   * showCloseIcon determines whether the x out icon appears in the experience. Default do not show
   */
  showCloseIcon?: boolean

  /**
   * additional extensions
   */
  extensions?: { [key: string]: string }
}

/**
 * JIT
 */
export interface JIT {
  title?: string
  bodyDescription?: string
  acceptButtonText: string
  declineButtonText: string
  moreInfoText?: string
  moreInfoDestination?: ExperienceButtonDestination

  /**
   * showCloseIcon determines whether the x out icon appears in the experience. Default do not show
   */
  showCloseIcon?: boolean

  /**
   * additional extensions
   */
  extensions?: { [key: string]: string }
}

/**
 * RightsTab
 */
export interface RightsTab {
  tabName: string
  bodyTitle?: string
  bodyDescription?: string
  buttonText: string

  /**
   * additional extensions
   */
  extensions?: { [key: string]: string }

  /**
   * Request Details Section
   */
  requestDetailsTitle?: string
  showRequestDetailsField?: boolean
  showRequestDetailsTitle?: boolean
  requestDetailsRequired?: boolean

  /**
   * Personal Details Section
   */
  personalDetailsTitle?: string
  showPersonalDetailsTitle?: boolean

  /**
   * Form Fields Config for Custom Rights Form
   */
  formFields?: ExperienceFormField[]

  /**
   * Recaptcha Enabled
   */
  recaptchaEnabled?: boolean
}

/**
 * ConsentsTab
 */
export interface ConsentsTab {
  tabName: string
  bodyTitle?: string
  bodyDescription?: string
  buttonText: string

  /**
   * consentTitle is the heading that goes above the list of purposes
   * this optionally overrides the standard title
   */
  consentTitle?: string

  /**
   * hideConsentTitle determines whether the consent title should be hidden. Default is to show
   */
  hideConsentTitle?: boolean

  /**
   * hideLegalBases determines whether the legal bases should be hidden. Default is to show
   */
  hideLegalBases?: boolean

  /**
   * switchOnText overrides the standard text for a consent switch in the on state
   */
  switchOnText?: string

  /**
   * switchOffText overrides the standard text for a consent switch in the off state
   */
  switchOffText?: string

  /**
   * switchTextRenderLogic determines the logic for showing the switch text
   */
  switchTextRenderLogic?: SwitchTextRenderLogic

  /**
   * additional extensions
   */
  extensions?: { [key: string]: string }
}

/**
 * SubscriptionExperienceItemType
 */
export enum SubscriptionExperienceItemType {
  SUBSCRIPTION_EXPERIENCE_ITEM_TYPE_UNKNOWN = 0,
  SUBSCRIPTION_EXPERIENCE_ITEM_TYPE_TOPIC = 1,
  SUBSCRIPTION_EXPERIENCE_ITEM_TYPE_CONTROL = 2,
}

/**
 * SubscriptionExperienceItem
 */
export interface SubscriptionExperienceItem {
  type: SubscriptionExperienceItemType
  code: string
}

/**
 * SubscriptionsTab
 */
export interface SubscriptionsTab {
  /**
   * Name of the tab
   */
  tabName: string

  /**
   * Title of the Subscriptions list
   */
  title: string

  /**
   * Body title
   */
  bodyTitle?: string

  /**
   * Body description
   */
  bodyDescription: string

  /**
   * List of topics/controls codes
   */
  items: SubscriptionExperienceItem[]

  /**
   * switchOnText overrides the standard text for a consent switch in the on state
   */
  switchOnText?: string

  /**
   * switchOffText overrides the standard text for a consent switch in the off state
   */
  switchOffText?: string

  /**
   * switchTextRenderLogic determines the logic for showing the switch text
   */
  switchTextRenderLogic?: SwitchTextRenderLogic

  /**
   * Primary button text
   */
  primaryButtonText: string

  /**
   * Secondary button text
   */
  secondaryButtonText?: string
}

/**
 * OverviewTab
 */
export interface OverviewTab {
  tabName: string
  bodyTitle?: string
  bodyDescription: string

  /**
   * additional extensions
   * */
  extensions?: { [key: string]: string }
}

/**
 * ConsentExperience
 */
export interface ConsentExperience {
  code: string
  version: number
  banner: Banner
  modal: Modal
  jit?: JIT
  experienceDefault: ExperienceDefault

  /**
   * additional extensions
   */
  extensions?: { [key: string]: string }
}

/**
 * PreferenceExperience
 */
export interface PreferenceExperience {
  code: string
  version: number
  title: string
  overview: OverviewTab
  rights?: RightsTab
  consents?: ConsentsTab
  subscriptions?: SubscriptionsTab

  /**
   * additional extensions
   */
  extensions?: { [key: string]: string }
}

/**
 * Right
 */
export interface Right {
  code: string
  name: string
  description: string

  /**
   * the data subject types for which the right is relevant. If this list is empty then the right applies to all
   * data subject types
   */
  dataSubjectTypeCodes?: string[]
  canonicalRightCode: string
}

/**
 * Experience
 */
export interface Experience {
  consent?: ConsentExperience
  preference?: PreferenceExperience
}

/**
 * Theme
 */
export interface Theme {
  code?: string
  name?: string
  description?: string
  watermark?: boolean
  buttonBorderRadius: number
  font?: string

  bannerBackgroundColor: string
  bannerContentColor?: string
  bannerButtonColor: string
  bannerSecondaryButtonColor?: string
  bannerPosition?: BannerPosition
  bannerForceInteraction?: boolean

  modalHeaderBackgroundColor: string
  modalHeaderContentColor?: string
  modalContentColor: string
  modalButtonColor: string
  modalPosition?: ModalPosition

  /**
   * modalSwitchOnColor is the color of the consent switch in the on state for the modal this overrides standard theme
   * colors
   */
  modalSwitchOnColor?: string

  /**
   * modalSwitchOffColor is the color of the consent switch in the off state for the modal this overrides standard
   * theme colors
   */
  modalSwitchOffColor?: string

  formHeaderBackgroundColor: string
  formHeaderContentColor?: string
  formContentColor: string
  formButtonColor: string

  /**
   * formSwitchOnColor is the color of the consent switch in the on state for the form this overrides standard theme
   * colors
   */
  formSwitchOnColor?: string

  /**
   * formSwitchOffColor is the color of the consent switch in the off state for the form this overrides standard theme
   * colors
   */
  formSwitchOffColor?: string

  /**
   * qrBackgroundColor is the override for the QR code background color
   */
  qrBackgroundColor?: string

  /**
   * qrForegroundColor is the override for the QR code foreground color
   */
  qrForegroundColor?: string

  /**
   * banner secondary button can be one of contained|outlined
   */

  bannerSecondaryButtonVariant?: ButtonVariant

  /**
   * accept/reject all buttons can now be set to look identical
   */
  purposeButtonsLookIdentical?: boolean
  purposeFormButtonsLookIdentical?: boolean

  /**
   * custom background color for preference & modal form body
   */
  formBodyBackgroundColor?: string
  modalBodyBackgroundColor?: string
}

/**
 * Vendor purpose
 */
export interface VendorPurpose {
  name: string
  legalBasis?: string // legalBasisName
}

/**
 * Vendor definition
 */
export interface Vendor {
  id: string
  name: string
  purposes?: VendorPurpose[]
  specialPurposes?: VendorPurpose[]
  features?: VendorPurpose[]
  specialFeatures?: VendorPurpose[]
  policyUrl?: string
  cookieMaxAgeSeconds?: number
  usesCookies?: boolean
  usesNonCookieAccess?: boolean
}

/**
 * DataSubjectType represents user defined data subject types with code as the unique identifier
 */
export interface DataSubjectType {
  code: string
  name: string

  /**
   * requiresUserInput is true if additional information must be requested to describe the data subject relation
   */
  requiresUserInput: boolean
}

/**
 * Stack represents a grouping of purposes to be displayed in an experience
 */
export interface Stack {
  /**
   * name of the stack to be displayed
   */
  name: string

  /**
   * list of purpose codes that are members of the stack
   */
  purposeCodes: string[]
}

/**
 * GetConsentConfigurationV2 request body
 */
export interface GetConsentConfigurationV2Request {
  organizationCode: string
  propertyCode: string
  envCode: string
  jurisdictionCode: string
  langCode: string
  hash?: string
}

/**
 * GetPreferenceConfigurationV2 request body
 */
export interface GetPreferenceConfigurationV2Request {
  organizationCode: string
  propertyCode: string
  envCode: string
  jurisdictionCode: string
  langCode: string
  hash?: string
}

/**
 * Accessibility Button
 */
export interface AccessibilityButtonConfiguration {
  color: string
  icon: string
  position: 'bottom-left' | 'bottom-right'
}

/**
 * Configuration V2
 */
export interface ConfigurationV2 {
  /**
   * Organization this configuration belongs to
   */
  organization: Organization

  /**
   * Property this configuration belongs to
   */
  property?: Property

  /**
   * Language for all text
   */
  language?: string

  /**
   * Available environments. Only available in the "boot" configuration.
   */
  environments?: Environment[]

  /**
   * Environment for this configuration. Only available in the "full" configuration.
   */
  environment?: Environment

  /**
   * Applicable jurisdiction.
   */
  jurisdiction?: JurisdictionInfo

  /**
   * Identity spaces defined for this property
   */
  identities?: { [key: string]: Identity }

  /**
   * Deployment information. Only available in the "full" configuration.
   */
  deployment?: Deployment

  /**
   * Regulations enabled for this jurisdiction.
   */
  regulations?: string[]

  /**
   * Rights available in this jurisdiction.
   */
  rights?: Right[]

  /**
   * Purposes in this jurisdiction.
   */
  purposes?: Purpose[]

  /**
   * Mapping of purposes to canonical purposes.
   */
  canonicalPurposes?: { [key: string]: CanonicalPurpose }

  /**
   * Privacy policy document
   */
  privacyPolicy?: PolicyDocument

  /**
   * Terms of Service (ToS) policy document
   */
  termsOfService?: PolicyDocument

  /**
   * Theme V2 definition
   */
  theme?: ThemeConfig

  /**
   * Experience V2 definitions
   */
  experiences?: ExperienceConfig

  /**
   * Progressive experiences
   */
  progressiveExperiences?: ProgressiveExperienceConfigurationType

  /**
   * Vendors (TCF)
   */
  vendors?: Vendor[]

  /**
   * Data subject types relevant for this configuration
   */
  dataSubjectTypes?: DataSubjectType[]

  /**
   * Stacks to be displayed in an experience
   */
  stacks?: Stack[]

  /**
   * Services
   */
  services?: { [key: string]: string }

  /**
   * Flexible options
   */
  options?: { [key: string]: string }

  /**
   * Scripts to load
   */
  scripts?: string[]

  /**
   * Plugins configured for the configuration
   */
  plugins?: { [key: string]: PluginOptions }

  /**
   * Recaptcha config
   */
  recaptcha?: Recaptcha

  canonicalRightFormTemplates?: CanonicalRightForm[]
  customRightFormTemplates?: CustomRightForm[]
  formTemplates: FormTemplate[]

  /**
   * Subscription config
   */
  subscription?: SubscriptionConfiguration

  /**
   * Translations static translations
   */
  translations?: Translations

  /**
   * Accessibility button configuration
   */
  accessibilityButton?: AccessibilityButtonConfiguration

  /**
   * PLG (ketch free/starter) config set when a plan is suspended
   */
  isConfigPaused?: boolean

  /**
   * Tags from tag managers and websites
   */
  tags?: { [key: string]: TagPurposeMapping }

  /**
   * Blocked cookies purpose mapping
   */
  blockedCookies?: {
    [cookieKey: string]: {
      // Regex used to match the cookie, if not present we assume exact match on cookieKey
      regex?: string
      // Purpose codes which if we have consent for any one, the cookie won't be deleted
      purposeCodes: string[]
    }
  }

  systems?: { [key: string]: any[] }
}

/**
 * Configuration
 */
export interface Configuration {
  /**
   * Organization this configuration belongs to
   */
  organization: Organization

  /**
   * Property this configuration belongs to
   */
  property?: Property

  /**
   * Language for all text
   */
  language?: string

  /**
   * Available environments. Only available in the "boot" configuration.
   */
  environments?: Environment[]

  /**
   * Environment for this configuration. Only available in the "full" configuration.
   */
  environment?: Environment

  /**
   * Applicable jurisdiction.
   */
  jurisdiction?: JurisdictionInfo

  /**
   * Identity spaces defined for this property
   */
  identities?: { [key: string]: Identity }

  /**
   * Deployment information. Only available in the "full" configuration.
   */
  deployment?: Deployment

  /**
   * Regulations enabled for this jurisdiction.
   */
  regulations?: string[]

  /**
   * Rights available in this jurisdiction.
   */
  rights?: Right[]

  /**
   * Purposes in this jurisdiction.
   */
  purposes?: Purpose[]

  /**
   * Mapping of purposes to canonical purposes.
   */
  canonicalPurposes?: { [key: string]: CanonicalPurpose }

  /**
   * Privacy policy document
   */
  privacyPolicy?: PolicyDocument

  /**
   * Terms of Service (ToS) policy document
   */
  termsOfService?: PolicyDocument

  /**
   * Theme
   */
  theme?: Theme

  /**
   * Experience definitions
   */
  experiences?: Experience

  /**
   * Vendors (TCF)
   */
  vendors?: Vendor[]

  /**
   * Data subject types relevant for this configuration
   */
  dataSubjectTypes?: DataSubjectType[]

  /**
   * Stacks to be displayed in an experience
   */
  stacks?: Stack[]

  /**
   * Services
   */
  services?: { [key: string]: string }

  /**
   * Flexible options
   */
  options?: { [key: string]: string }

  /**
   * Scripts to load
   */
  scripts?: string[]

  /**
   * Plugins configured for the configuration
   */
  plugins?: { [key: string]: PluginOptions }

  /**
   * Recaptcha config
   */
  recaptcha?: Recaptcha

  canonicalRightFormTemplates?: CanonicalRightForm[]
  customRightFormTemplates?: CustomRightForm[]
  formTemplates: FormTemplate[]

  /**
   * Translations static translations
   */
  translations?: Translations

  /**
   * PLG (ketch free/starter) config set when a plan is suspended
   */
  isConfigPaused?: boolean

  systems?: { [key: string]: any[] }
}

export interface Translations {
  powered_by?: string
  purpose?: string
  reject_all?: string
  accept_all?: string
  accept?: string
  legal_basis?: string
  cookies?: string
  cookie?: string
  data_categories?: string
  data_category?: string
  vendors?: string
  vendor?: string
  service_provider?: string
  duration?: string
  category?: string
  description?: string
  retention_period?: string
  external_transfer?: string
  strictly_necessary?: string
  functional?: string
  performance?: string
  marketing?: string
  session?: string
  persistent?: string
  first_party?: string
  third_party?: string
  preference_overview_button_text?: string
  preference_consents_exit_button_text?: string
  preference_rights_request?: string
  preference_rights_request_details?: string
  preference_rights_personal_details?: string
  preference_rights_first_name?: string
  preference_rights_last_name?: string
  preference_rights_email?: string
  preference_rights_country?: string
  preference_rights_select_country?: string
  preference_rights_state?: string
  preference_rights_thank_you?: string
  preference_rights_we_have_received?: string
  preference_rights_cancel_button_text?: string
  preference_rights_exit_button_text?: string
  preference_rights_submit_new_request?: string
  required?: string
  enter_valid_email?: string
  country_afghanistan?: string
  country_albania?: string
  country_algeria?: string
  country_andorra?: string
  country_angola?: string
  country_antigua_and_barbuda?: string
  country_argentina?: string
  country_armenia?: string
  country_australia?: string
  country_austria?: string
  country_azerbaijan?: string
  country_bahamas?: string
  country_bahrain?: string
  country_bangladesh?: string
  country_barbados?: string
  country_belarus?: string
  country_belgium?: string
  country_belize?: string
  country_benin?: string
  country_bhutan?: string
  country_bolivia?: string
  country_bosnia_and_herzegovina?: string
  country_botswana?: string
  country_brazil?: string
  country_brunei_darussalam?: string
  country_bulgaria?: string
  country_burkina_faso?: string
  country_burundi?: string
  country_cambodia?: string
  country_cameroon?: string
  country_canada?: string
  country_cape_verde?: string
  country_central_african_republic?: string
  country_chad?: string
  country_chile?: string
  country_china?: string
  country_colombia?: string
  country_comoros?: string
  country_congo?: string
  country_congo_the_democratic_republic?: string
  country_costa_rica?: string
  country_cote_divoire?: string
  country_croatia?: string
  country_cuba?: string
  country_cyprus?: string
  country_czech_republic?: string
  country_denmark?: string
  country_djibouti?: string
  country_dominica?: string
  country_dominican_republic?: string
  country_ecuador?: string
  country_egypt?: string
  country_el_salvador?: string
  country_equatorial_guinea?: string
  country_eritrea?: string
  country_estonia?: string
  country_ethiopia?: string
  country_fiji?: string
  country_finland?: string
  country_france?: string
  country_gabon?: string
  country_gambia?: string
  country_georgia?: string
  country_germany?: string
  country_ghana?: string
  country_greece?: string
  country_grenada?: string
  country_guatemala?: string
  country_guinea?: string
  country_guinea_bissau?: string
  country_guyana?: string
  country_haiti?: string
  country_vatican_city?: string
  country_honduras?: string
  country_hungary?: string
  country_iceland?: string
  country_india?: string
  country_indonesia?: string
  country_iraq?: string
  country_ireland?: string
  country_israel?: string
  country_italy?: string
  country_jamaica?: string
  country_japan?: string
  country_jordan?: string
  country_kazakhstan?: string
  country_kenya?: string
  country_kiribati?: string
  country_north_korea?: string
  country_south_korea?: string
  country_kosovo?: string
  country_kuwait?: string
  country_kyrgyzstan?: string
  country_laos?: string
  country_latvia?: string
  country_lebanon?: string
  country_lesotho?: string
  country_liberia?: string
  country_libya?: string
  country_liechtenstein?: string
  country_lithuania?: string
  country_luxembourg?: string
  country_north_macedonia?: string
  country_madagascar?: string
  country_malawi?: string
  country_malaysia?: string
  country_maldives?: string
  country_mali?: string
  country_malta?: string
  country_marshall_islands?: string
  country_mauritania?: string
  country_mauritius?: string
  country_mexico?: string
  country_micronesia?: string
  country_moldova?: string
  country_monaco?: string
  country_mongolia?: string
  country_montenegro?: string
  country_morocco?: string
  country_mozambique?: string
  country_myanmar?: string
  country_namibia?: string
  country_nauru?: string
  country_nepal?: string
  country_netherlands?: string
  country_new_zealand?: string
  country_nicaragua?: string
  country_niger?: string
  country_nigeria?: string
  country_norway?: string
  country_oman?: string
  country_pakistan?: string
  country_palau?: string
  country_panama?: string
  country_papua_new_guinea?: string
  country_paraguay?: string
  country_peru?: string
  country_philippines?: string
  country_poland?: string
  country_portugal?: string
  country_qatar?: string
  country_romania?: string
  country_russian_federation?: string
  country_rwanda?: string
  country_saint_kitts_and_nevis?: string
  country_saint_lucia?: string
  country_saint_vincent_and_the_grenadines?: string
  country_samoa?: string
  country_san_marino?: string
  country_sao_tome_and_principe?: string
  country_saudi_arabia?: string
  country_senegal?: string
  country_serbia?: string
  country_seychelles?: string
  country_sierra_leone?: string
  country_singapore?: string
  country_slovakia?: string
  country_slovenia?: string
  country_solomon_islands?: string
  country_somalia?: string
  country_south_africa?: string
  country_spain?: string
  country_sri_lanka?: string
  country_sudan?: string
  country_south_sudan?: string
  country_suriname?: string
  country_eswatini?: string
  country_sweden?: string
  country_switzerland?: string
  country_syria?: string
  country_taiwan?: string
  country_tajikistan?: string
  country_tanzania?: string
  country_thailand?: string
  country_timor_leste?: string
  country_togo?: string
  country_tonga?: string
  country_trinidad_and_tobago?: string
  country_tunisia?: string
  country_turkey?: string
  country_turkmenistan?: string
  country_tuvalu?: string
  country_uganda?: string
  country_ukraine?: string
  country_united_arab_emirates?: string
  country_united_kingdom?: string
  country_united_states?: string
  country_uruguay?: string
  country_uzbekistan?: string
  country_vanuatu?: string
  country_venezuela?: string
  country_vietnam?: string
  country_yemen?: string
  country_zambia?: string
  country_zimbabwe?: string
  purposes?: string
  special_purposes?: string
  features?: string
  special_features?: string
  privacy_policy?: string
  legal_text?: string
  maximum_storage?: string
  preference_rights_phone_number?: string
  preference_rights_select_state_province?: string
  preference_rights_postal_code?: string
  preference_rights_address_line_one?: string
  preference_rights_address_line_two?: string
  enter_valid_phone_number?: string
  of?: string
  i_am_a_an?: string
  select_a_relationship?: string
  tell_us_about_your_relationship_to_us?: string
  ex_i_worked_in_the_it_department_in_2015?: string
  opted_in?: string
  opted_out?: string
  rights_tab_porthole_redirect_footer?: string
  rights_tab_porthole_redirect_footer_alt?: string
  click_here?: string
  here?: string
  please_select_a_request_type?: string
  greeting?: string
  provenance?: string
  this_site_is_protected_by?: string
  and_the?: string
  apply?: string
  terms_of_service?: string
  unfortunately?: string
  we_are_unable_to_fulfill_your_request?: string
  at_this_time_due_to_suspected_bot_like_behavior_as_indicated_by_our?: string
  verification?: string
  and?: string
  no_rights_available?: string
}

/**
 * Recaptcha interface defines the Recaptcha config
 */
export interface Recaptcha {
  /**
   * siteKey: Recaptcha site/public key used to exchange for a reCaptcha token
   */
  siteKey?: string
}

/**
 * Details about showing the Experience
 */
export interface ShowExperienceAction {
  /**
   * ShowExperience
   */
  kind: ExperienceActionKind.ShowExperience

  /**
   * Agent string for the Experience Server (e.g., `lanyard/1.0.3`). Useful for diagnostics.
   */
  server: string

  /**
   * Kind of the experience
   */
  experienceKind: ExperienceType

  /**
   * Mode of the experience
   */
  experienceMode?: ConsentExperienceType

  /**
   * Timestamp when the action happened
   */
  ts: Date
}

/**
 * Details about hiding the Experience
 */
export interface HideExperienceAction {
  /**
   * HideExperience
   */
  kind: ExperienceActionKind.HideExperience

  /**
   * Timestamp when the action happened
   */
  ts: Date
}

/**
 * Details about setting consent
 */
export interface SetConsentExperienceAction {
  /**
   * SetConsent
   */
  kind: ExperienceActionKind.SetConsent

  /**
   * The consent
   */
  consent: Consent

  /**
   * Timestamp when the action happened
   */
  ts: Date
}

/**
 * Details about setting subscriptions
 */
export interface SetSubscriptionExperienceAction {
  /**
   * SetSubscription
   */
  kind: ExperienceActionKind.SetSubscription

  // TODO: subscriptions: Subscriptions

  /**
   * Timestamp when the action happened
   */
  ts: Date
}

/**
 * Details about invoking rights
 */
export interface InvokeRightExperienceAction {
  /**
   * InvokeRight
   */
  kind: ExperienceActionKind.InvokeRight

  /**
   * The right details
   */
  right: InvokeRightEvent

  /**
   * Timestamp when the action happened
   */
  ts: Date
}

/**
 * ExperienceResult action
 */
export type ExperienceAction =
  | ShowExperienceAction
  | HideExperienceAction
  | SetConsentExperienceAction
  | SetSubscriptionExperienceAction
  | InvokeRightExperienceAction

/**
 * Options for a modal consent experience
 */
export interface ModalConsentExperienceOptions {
  /**
   * Consent
   */
  kind: ExperienceType.Consent

  /**
   * Modal
   */
  mode: ConsentExperienceType.Modal

  /**
   * Code of the experience
   */
  code: string

  /**
   * Version of the experience
   */
  version: number

  /**
   * Configuration of the Modal
   */
  config: Modal

  /**
   * Theme for rendering the Modal
   */
  theme: Theme
}

/**
 * Options for a banner consent experience
 */
export interface BannerConsentExperienceOptions {
  /**
   * Consent
   */
  kind: ExperienceType.Consent

  /**
   * Banner
   */
  mode: ConsentExperienceType.Banner

  /**
   * Code of the experience
   */
  code: string

  /**
   * Version of the experience
   */
  version: number

  /**
   * Configuration of the Banner
   */
  config: Banner

  /**
   * Theme for rendering the Banner
   */
  theme: Theme
}

/**
 * Options for a JIT consent experience
 */
export interface JITConsentExperienceOptions {
  /**
   * Consent
   */
  kind: ExperienceType.Consent

  /**
   * JIT
   */
  mode: ConsentExperienceType.JIT

  /**
   * Code of the experience
   */
  code: string

  /**
   * Version of the experience
   */
  version: number

  /**
   * Configuration of the JIT
   */
  config: JIT

  /**
   * Purposes for which consent is sought
   */
  purposes: string[]

  /**
   * Theme for rendering the Consents
   */
  theme: Theme
}

/**
 * Consent experience options
 */
export type ConsentExperienceOptions =
  | ModalConsentExperienceOptions
  | BannerConsentExperienceOptions
  | JITConsentExperienceOptions

/**
 * Preferences configuration
 */
export interface Preferences {
  /**
   * Title of the experience
   */
  title: string

  /**
   * Overview tab configuration
   */
  overview?: OverviewTab

  /**
   * Consents tab configuration
   */
  consents?: ConsentsTab

  /**
   * Rights tab configuration
   */
  rights?: RightsTab

  /**
   * Subscriptions tab configuration
   */
  subscriptions?: any // TODO: SubscriptionsTab
}

/**
 * Preference experience options
 */
export interface PreferencesExperienceOptions {
  /**
   * Preference
   */
  kind: ExperienceType.Preference

  /**
   * Code of the experience
   */
  code: string

  /**
   * Version of the experience
   */
  version: number

  /**
   * Configuration of the Preferences
   */
  config: Preferences

  /**
   * Theme for rendering the Preferences
   */
  theme: Theme
}

/**
 * Experience options
 */
export type ExperienceOptions = ConsentExperienceOptions | PreferencesExperienceOptions

/**
 * ExperienceServer provides an interface implemented by experience servers for rendering experiences
 */
export declare interface ExperienceServer {
  /**
   * Render is called to render an experience.
   *
   * @param options Options specific to the requested kind of experience.
   * @returns ExperienceResults that describe what happened and what actions were taken in the experience
   */
  render(options: ExperienceOptions): Promise<ExperienceAction[]>
}

/**
 * Plugin class
 *
 * @deprecated New plugins should be functional plugins.
 * @see PluginFunction
 */
export interface PluginClass {
  /**
   * Initialize the plugin
   *
   * @param host The Ketch instance
   * @param config The configuration
   */
  init?: (host: Ketch, config: Configuration) => void

  /**
   * Equivalent of on('environment')
   *
   * @param host The Ketch instance
   * @param config The configuration
   * @param env The environment
   */
  environmentLoaded?: (host: Ketch, config: Configuration, env: Environment) => void

  /**
   * Equivalent of on('geoip')
   *
   * @param host The Ketch instance
   * @param config The configuration
   * @param ipInfo The IP information
   */
  geoIPLoaded?: (host: Ketch, config: Configuration, ipInfo: IPInfo) => void

  /**
   * Equivalent of on('identities')
   *
   * @param host The Ketch instance
   * @param config The configuration
   * @param identities The identities
   */
  identitiesLoaded?: (host: Ketch, config: Configuration, identities: Identities) => void

  /**
   * Equivalent of on('jurisdiction')
   *
   * @param host The Ketch instance
   * @param config The configuration
   * @param jurisdiction The jurisdiction
   */
  jurisdictionLoaded?: (host: Ketch, config: Configuration, policyScope: string) => void

  /**
   * Equivalent of on('regionInfo')
   *
   * @param host The Ketch instance
   * @param config The configuration
   * @param regionInfo The region info
   */
  regionInfoLoaded?: (host: Ketch, config: Configuration, region: string) => void

  /**
   * Equivalent of on('consent')
   *
   * @param host The Ketch instance
   * @param config The configuration
   * @param consent The consent
   */
  consentChanged?: (host: Ketch, config: Configuration, consent: Consent) => void

  /**
   * Equivalent of on('rightInvoked')
   *
   * @param host The Ketch instance
   * @param config The configuration
   * @param request The right invocation request
   */
  rightInvoked?: (host: Ketch, config: Configuration, request: InvokeRightRequest) => void

  /**
   * Equivalent of on('showConsentExperience')
   *
   * @param host The Ketch instance
   * @param config The configuration
   * @param consents The current consents
   * @param options The options for the experience
   */
  showConsentExperience?: (host: Ketch, config: Configuration, consents: Consent, options?: ShowConsentOptions) => void

  /**
   * Equivalent of on('showPreferenceExperience')
   *
   * @param host The Ketch instance
   * @param config The configuration
   * @param consents The current consents
   * @param options The options for the experience
   */
  showPreferenceExperience?: (
    host: Ketch,
    config: Configuration,
    consents: Consent,
    options?: ShowPreferenceOptions,
  ) => void

  /**
   * Equivalent of on('willShowExperience')
   *
   * @param host The Ketch instance
   * @param config The configuration
   * @param type The type of the experience
   */
  willShowExperience?: (host: Ketch, config: Configuration, type: string) => void

  /**
   * Equivalent of on('experienceHidden')
   *
   * @param host The Ketch instance
   * @param config The configuration
   * @param reason The reason the experience was hidden
   */
  experienceHidden?: (host: Ketch, config: Configuration, reason: string) => void
}

/**
 * Plugin factory function signature
 *
 * @param host The Ketch instance
 * @param config The plugin configuration
 */
export type PluginFunction = (host: Ketch, config?: any) => Promise<void>

/**
 * Plugin
 */
export type Plugin = PluginClass | PluginFunction

/**
 * IdentityProvider defines a function for providing identities
 */
export type IdentityProvider = () => Promise<string[]>

/**
 * StorageProvider defines an interface for storage
 */
export interface StorageProvider {
  /**
   * Get an item with the given key
   *
   * @param key The item key
   */
  getItem(key: string): Promise<string | null>

  /**
   * Sets the value for the given key
   *
   * @param key The item key
   * @param value The item value
   */
  setItem(key: string, value: string): Promise<void>

  /**
   * Removes the given item
   *
   * @param key The item key
   */
  removeItem(key: string): Promise<void>
}

/**
 * GetLocationRequest
 */
export interface GetLocationRequest {
  IP?: string
}

/**
 * GetLocationResponse
 */
export interface GetLocationResponse {
  location: IPInfo
}

/**
 * GetConsentRequest
 */
export interface GetConsentRequest {
  organizationCode: string
  controllerCode?: string
  propertyCode: string
  environmentCode: string
  jurisdictionCode: string
  identities: { [key: string]: string }
  purposes: { [key: string]: PurposeLegalBasis }
  /**
   * list of vendor ids for which the user has opted out
   */
  vendors?: string[]
  googleVendors?: string[]

  collectedAt?: number
}

/**
 * GetConsentResponse
 */
export interface GetConsentResponse {
  organizationCode: string
  controllerCode?: string
  propertyCode: string
  environmentCode: string
  jurisdictionCode: string
  identities: { [key: string]: string }
  purposes: { [key: string]: PurposeAllowed | string }
  /**
   * list of vendor ids for which the user has opted out
   */
  vendors?: string[]
  googleVendors?: string[]

  collectedAt?: number
  protocols?: Protocols
}

/**
 * SetConsentRequest
 */
export interface SetConsentRequest {
  organizationCode: string
  controllerCode?: string
  propertyCode: string
  environmentCode: string
  jurisdictionCode: string
  identities: { [key: string]: string }
  collectedAt?: number
  purposes: { [key: string]: PurposeAllowedLegalBasis }
  /**
   * list of vendor ids for which the user has opted out
   */
  vendors?: string[]
  googleVendors?: string[]
}

/**
 * SetConsentResponse
 */
export interface SetConsentResponse {
  organizationCode: string
  controllerCode?: string
  propertyCode: string
  environmentCode: string
  jurisdictionCode: string
  identities: { [key: string]: string }
  purposes: { [key: string]: PurposeAllowedLegalBasis }
  /**
   * list of vendor ids for which the user has opted out
   */
  vendors?: string[]
  googleVendors?: string[]

  collectedAt?: number
  protocols?: Protocols
}

/**
 * InvokeRightRequest
 */
export interface InvokeRightRequest {
  organizationCode: string
  controllerCode?: string
  propertyCode: string
  environmentCode: string
  identities: { [key: string]: string }
  invokedAt?: number
  jurisdictionCode: string
  rightCode: string
  user: DataSubject
  recaptchaToken?: string
}

/**
 * GetBootstrapConfigurationRequest
 */
export interface GetBootstrapConfigurationRequest {
  organizationCode: string
  propertyCode: string
}

/**
 * GetFullConfigurationRequest
 */
export interface GetFullConfigurationRequest {
  organizationCode: string
  propertyCode: string
  environmentCode?: string
  hash?: string
  deploymentID?: string
  jurisdictionCode?: string
  languageCode?: string
}

/**
 * GetPreferenceQRRequest
 */
export interface GetPreferenceQRRequest {
  organizationCode: string
  propertyCode: string
  environmentCode?: string
  imageSize?: number
  path?: string
  backgroundColor?: string
  foregroundColor?: string
  parameters: { [key: string]: string }
}

/**
 * WebReportRequest
 */
export interface WebReportRequest {
  type: string
  age: number
  url: string
  user_agent: string
  body: { [key: string]: any }
}

/**
 * Ketch is the standard interface to the tag
 */
export interface Ketch {
  /**
   * Register a plugin with the given configuration
   *
   * @param plugin The plugin
   * @param config The plugin configuration
   */
  registerPlugin(plugin: Plugin, config?: any): Promise<void>

  /**
   * Register an identity provider for the given identity
   *
   * @param name The name of the identity
   * @param provider The provider of the identity
   */
  registerIdentityProvider(name: string, provider: IdentityProvider): Promise<void>

  /**
   * Register an experience server to use for rendering experiences.
   *
   * @param server The experience server
   */
  registerExperienceServer(server: ExperienceServer): Promise<void>

  /**
   * Register a storage provider
   *
   * @param policy The storage origin policy
   * @param provider The provider implementation
   */
  registerStorageProvider(policy: StorageOriginPolicy, provider: StorageProvider): Promise<void>

  /**
   * Returns the Consent
   */
  getConsent(): Promise<Consent>

  /**
   * Sets the consent
   *
   * @param consent Consents
   * @param reason the reason the consent is being set
   */
  setConsent(consent: Consent, reason?: SetConsentReason): Promise<void>

  /**
   * Get subscriptions
   */
  getSubscriptions(): Promise<Subscriptions>

  /**
   * Set subscriptions
   *
   * @param request
   */
  setSubscriptions(request: Subscriptions): Promise<void>

  /**
   * Get Subscription configuration
   */
  getSubscriptionConfiguration(): Promise<SubscriptionConfiguration>

  /**
   * Get consent experience configuration
   */
  getConsentConfiguration(): Promise<ConfigurationV2>

  /**
   * Get preference experience configuration
   */
  getPreferenceConfiguration(): Promise<ConfigurationV2>

  /**
   * Sets the provisional consent
   *
   * @param consent Consents
   */
  setProvisionalConsent(consent: Consent): Promise<void>

  /**
   * Show the consent experience
   */
  showConsent(params?: ShowConsentOptions): Promise<void>

  /**
   * Show a progressive experience
   */
  showProgressiveExperience(params?: ShowProgressiveExperienceOptions): Promise<void>

  /**
   * Show the experience as described
   *
   * @param options The experience options
   */
  showExperience(options: ExperienceOptions): Promise<void>

  /**
   * Show the preference experience
   *
   * @param params The parameters for the experience
   */
  showPreferences(params?: ShowPreferenceOptions): Promise<void>

  /**
   * Notify that the experience was closed
   *
   * @param reason Reason the experience was closed
   */
  experienceClosed(reason: ExperienceClosedReason, consent?: Consent): Promise<void>

  /**
   * Notify that the experience will be changed to a different format
   *
   * @param type Type of experience being changed to
   */
  willChangeExperience(type: ExperienceDisplayType): Promise<void>

  /**
   * Notify that the experience has been changed to a different format
   *
   * @param type Type of experience changed to
   */
  hasChangedExperience(type: ExperienceDisplayType): Promise<void>

  /**
   * Notify that the experience has mounted
   *
   */
  hasShownExperience(): Promise<void>

  /**
   * Invokes a right
   *
   * @param eventData The definition of the right
   */
  invokeRight(eventData: InvokeRightEvent): Promise<void>

  /**
   * Get the Configuration.
   */
  getConfig(): Promise<Configuration>

  /**
   * Get the Environment
   */
  getEnvironment(): Promise<Environment>

  /**
   * Get the IP information
   */
  getGeoIP(): Promise<IPInfo>

  /**
   * Get the identities
   */
  getIdentities(): Promise<Identities>

  /**
   * Get the jurisdiction
   */
  getJurisdiction(): Promise<string>

  /**
   * Get the region information
   */
  getRegionInfo(): Promise<string>

  /**
   * Check if an experience is currently showing
   */
  getIsExperienceDisplayed(): boolean

  /**
   * Alias for `emitter.on(eventName, listener)`.
   *
   * @param eventName The name of the event.
   * @param listener The callback function
   */
  addListener(eventName: string | symbol, listener: (...args: any[]) => void): Promise<void>

  /**
   * Adds the `listener` function to the end of the listeners array for the
   * event named `eventName`. No checks are made to see if the `listener` has
   * already been added. Multiple calls passing the same combination of `eventName`
   * and `listener` will result in the `listener` being added, and called, multiple
   * times.
   *
   * Returns a reference to the `EventEmitter`, so that calls can be chained.
   *
   * By default, event listeners are invoked in the order they are added. The
   * `emitter.prependListener()` method can be used as an alternative to add the
   * event listener to the beginning of the listeners array.
   *
   * @param eventName The name of the event.
   * @param listener The callback function
   */
  on(eventName: string | symbol, listener: (...args: any[]) => void): Promise<void>

  /**
   * Adds a **one-time**`listener` function for the event named `eventName`. The
   * next time `eventName` is triggered, this listener is removed and then invoked.
   *
   * By default, event listeners are invoked in the order they are added. The
   * `emitter.prependOnceListener()` method can be used as an alternative to add the
   * event listener to the beginning of the listeners array.
   *
   * @param eventName The name of the event.
   * @param listener The callback function
   */
  once(eventName: string | symbol, listener: (...args: any[]) => void): Promise<void>

  /**
   * Removes the specified `listener` from the listener array for the event
   * named `eventName`.
   *
   * `removeListener()` will remove, at most, one instance of a listener from the
   * listener array. If any single listener has been added multiple times to the
   * listener array for the specified `eventName`, then `removeListener()` must be
   * called multiple times to remove each instance.
   *
   * Once an event is emitted, all listeners attached to it at the
   * time of emitting are called in order. This implies that any`removeListener()`
   * or `removeAllListeners()` calls _after_ emitting and _before_ the last listener
   * finishes execution will not remove them from`emit()` in progress. Subsequent
   * events behave as expected.
   *
   * Because listeners are managed using an internal array, calling this will
   * change the position indices of any listener registered _after_ the listener
   * being removed. This will not impact the order in which listeners are called,
   * but it means that any copies of the listener array as returned by
   * the `emitter.listeners()` method will need to be recreated.
   *
   * When a single function has been added as a handler multiple times for a single
   * event (as in the example below), `removeListener()` will remove the most
   * recently added instance. In the example the `once('ping')` listener is removed
   *
   * @param eventName The name of the event.
   * @param listener The callback function
   */
  removeListener(eventName: string | symbol, listener: (...args: any[]) => void): Promise<void>

  /**
   * Alias for `emitter.removeListener()`.
   *
   * @param eventName The name of the event.
   * @param listener The callback function
   */
  off(eventName: string | symbol, listener: (...args: any[]) => void): Promise<void>

  /**
   * Removes all listeners, or those of the specified `eventName`.
   *
   * It is bad practice to remove listeners added elsewhere in the code,
   * particularly when the `EventEmitter` instance was created by some other
   * component or module (e.g. sockets or file streams).
   *
   * @param eventName The name of the event.
   */
  removeAllListeners(eventName?: string | symbol): Promise<void>

  /**
   * Synchronously calls each of the listeners registered for the event named
   * `eventName`, in the order they were registered, passing the supplied arguments
   * to each.
   *
   * @returns `true` if the event had listeners, `false` otherwise.
   *
   * @param eventName The name of the event.
   * @param args The arguments for the event.
   */
  emit(eventName: string | symbol, ...args: any[]): Promise<void>
}
/**
 * Pusher interface defines a type that has a push function like an array
 */
export interface Pusher {
  /**
   * Pushes the given arguments.
   *
   * @param args The arguments to push.
   */
  push(args: any[]): void
}

/**
 * Loaded interface defines a type that has a loaded boolean property
 */
export interface Loaded {
  /**
   * Loaded is set to true if the object has fully loaded
   */
  loaded: boolean
}

declare global {
  interface Window {
    /**
     * Semaphore is the action queue (should not be accessed directly except by legacy code
     * which should be migrated to the `ketch` function).
     */
    semaphore: Pusher & Loaded

    /**
     * Ketch is the main entrypoint to the JS API.
     *
     * @param action The action to invoke
     * @param args The arguments to the action
     */
    ketch(action: string, ...args: any[]): void
  }
}

export interface SubscriptionControlSetting {
  status: SubscriptionStatus
  impact?: SubscriptionControlImpactType
}

export interface SubscriptionTopicContactMethodSetting {
  status: SubscriptionStatus
}

export type SubscriptionTopicSetting = { [key: string]: SubscriptionTopicContactMethodSetting }

export enum SubscriptionStatus {
  Denied = 'denied',
  Granted = 'granted',
}

export interface SubscriptionControl {
  /**
   * The code of the Subscription Control
   */
  code: string

  /**
   *  The name of the Subscription Control
   */
  name: string

  /**
   * The display description of the Subscription Control
   */
  description: string

  /**
   *  The impactType of the Subscription Control
   */
  impactType?: SubscriptionControlImpactType

  /**
   *  The positionType of the Subscription Control
   */
  positionType?: SubscriptionControlPositionType

  /**
   *  The switchOffText of the Subscription Control
   */
  switchOffText?: string

  /**
   *  The switchOnText of the Subscription Control
   */
  switchOnText?: string

  /**
   *  The switchTextRenderLogic of the Subscription Control
   */
  switchTextRenderLogic?: SwitchTextRenderLogic
}

export interface SubscriptionTopic {
  /**
   * The code of the Subscription Topic
   */
  code: string

  /**
   * The name of the Subscription Topic
   */
  name: string

  /**
   * The display description of the Subscription Topic
   */
  description: string

  /**
   * The legal basis code (e.g., consent_optin).
   */
  legalBasis: string

  /**
   * An array of the contact method codes ('email', 'sms', etc).
   */
  contactMethods: string[]
}

/**
 * Subscriptions
 */
export interface Subscriptions {
  topics?: { [key: string]: SubscriptionTopicSetting }
  controls?: { [key: string]: SubscriptionControlSetting }
}

/**
 * GetSubscriptionRequest
 */
export interface GetSubscriptionsRequest {
  organizationCode: string
  controllerCode?: string
  propertyCode?: string
  environmentCode?: string
  identities?: { [key: string]: string }
  topics?: { [key: string]: SubscriptionTopicSetting }
  controls?: { [key: string]: SubscriptionControlSetting }
  collectedAt?: number
}

/**
 * GetSubscriptionResponse
 */
export interface GetSubscriptionsResponse {
  organizationCode: string
  controllerCode?: string
  propertyCode?: string
  environmentCode?: string
  identities?: { [key: string]: string }
  topics?: { [key: string]: SubscriptionTopicSetting }
  controls?: { [key: string]: SubscriptionControlSetting }
  collectedAt?: number
}

/**
 * SetSubscriptionRequest
 */
export interface SetSubscriptionsRequest {
  organizationCode: string
  controllerCode?: string
  propertyCode?: string
  environmentCode?: string
  identities?: { [key: string]: string }
  topics?: { [key: string]: SubscriptionTopicSetting }
  controls?: { [key: string]: SubscriptionControlSetting }
  collectedAt?: number
}

/**
 * GetSubscriptionConfigurationRequest
 */
export interface GetSubscriptionConfigurationRequest {
  organizationCode: string
  propertyCode: string
  languageCode: string
  experienceCode?: string
}

/**
 * ContactMethod
 */
export interface ContactMethod {
  name: string
}

/**
 * SubscriptionConfiguration
 */
export interface SubscriptionConfiguration {
  language: string
  organization: Organization
  property: Property
  identities: { [key: string]: Identity }
  contactMethods: { [key: string]: ContactMethod }
  controls: SubscriptionControl[]
  topics: SubscriptionTopic[]
}

/**
 * ButtonVariant
 *
 * @enum
 */
export enum ButtonVariant {
  Outlined = 'outlined',
  Contained = 'contained',
}

/**
 * Experience V2 Theme Config
 */

/** Shared Theme Config Entities */

/**
 * Banner/Modal Text Theme Configuration
 */

export interface TextThemeConfig {
  color?: string
  opacity?: number
  underline?: boolean
}

/**
 * Banner/Modal Color Theme Configuration
 */

export interface ColorThemeConfig {
  color?: string
  opacity?: number
}

/**
 * Banner/Modal Backdrop Theme Configuration
 */

export interface BackdropThemeConfig {
  visible?: boolean
  background?: ColorThemeConfig
  disableContentInteractions?: boolean
}

/**
 * Back/Close Button Theme Configuration
 */

export interface ReturnButtonThemeConfig {
  background?: ColorThemeConfig
  icon?: ColorThemeConfig
  cornerRadius?: number
}

/**
 * Banner/Modal Header Theme Configuration
 */

export interface HeaderThemeConfig {
  background?: ColorThemeConfig
  title?: TextThemeConfig
  returnButton?: ReturnButtonThemeConfig // This is either a Back or Close button
}

/**
 * Action Button Theme Configuration
 */

export enum ItemStyle {
  Filled = 'filled',
  Outlined = 'outlined',
}

export interface ActionButtonThemeConfig {
  style?: ItemStyle
  background?: ColorThemeConfig
  outline?: ColorThemeConfig
  text?: TextThemeConfig
  icon?: ColorThemeConfig
  cornerRadius?: number
}

/**
 * Banner and Modal Footer Theme Configuration
 */

export interface BannerModalFooterThemeConfig {
  background?: ColorThemeConfig
  actionButton?: ActionButtonThemeConfig
  ketchBadgeVisible?: boolean
}

/**
 * Purpose List Header Theme Configuration
 */

export interface PurposeListHeaderThemeConfig {
  title?: TextThemeConfig
  acceptAllButton?: ActionButtonThemeConfig
  rejectAllButton?: ActionButtonThemeConfig
}

/**
 * List Theme Configuration
 */

export enum ListLayout {
  Expandable = 'expandable',
  Cards = 'cards',
}

export interface ListItemsThemeConfig {
  layout?: ListLayout
  style?: ItemStyle
  purposeFill?: ColorThemeConfig
  purposeOutline?: ColorThemeConfig
  purposeContent?: ColorThemeConfig
  purposeLinks?: ColorThemeConfig
  arrowIcon?: ColorThemeConfig
  purposeCornerRadius?: number
}

/**
 * Switch Buttons Theme Configuration
 */

export interface SwitchButtonThemeConfig {
  background?: ColorThemeConfig
  text?: TextThemeConfig
}

export interface SwitchButtonsThemeConfig {
  on?: SwitchButtonThemeConfig
  off?: SwitchButtonThemeConfig
}

/**
 * Purpose List Theme Configuration
 */

export interface PurposeListThemeConfig {
  purposeListItems?: ListItemsThemeConfig
  switchButtons?: SwitchButtonsThemeConfig
}

/**
 * Page Text Theme Configuration
 */
export interface PageTextThemeConfig {
  title?: TextThemeConfig
  description?: TextThemeConfig
  link?: TextThemeConfig
}

/**
 * Checkboxes Theme Configuration
 */

export interface CheckboxThemeConfig {
  background?: ColorThemeConfig
  label?: ColorThemeConfig
}

export interface CheckboxesThemeConfig {
  selected?: CheckboxThemeConfig
  unselected?: CheckboxThemeConfig
  error?: CheckboxThemeConfig
}

/**
 * Image Theme Configuration
 */

export interface ImageThemeConfig {
  name?: string
  url?: string
}

/**
 * Banner Theme Configuration Enums
 */

export enum BannerContainerLayout {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
  Centered = 'centered',
}

export enum BannerContainerSize {
  Standard = 'standard',
  Compact = 'compact',
}

export enum BannerContainerPosition {
  Bottom = 'bottom',
  Top = 'top',
  LeftCorner = 'leftCorner',
  RightCorner = 'rightCorner',
  BottomMiddle = 'bottomMiddle',
  Center = 'center',
}

/**
 * Banner Container Theme Configuration
 */

export interface BannerContainerThemeConfig {
  backdrop?: BackdropThemeConfig
  background?: ColorThemeConfig
  cornerRadius?: number
  position?: BannerContainerPosition
  layout?: BannerContainerLayout
  size?: BannerContainerSize
  font?: string
}

/**
 * Banner Description Theme Configuration
 */
export interface BannerDescriptionThemeConfig {
  link?: TextThemeConfig
  text?: TextThemeConfig
}

/**
 * Banner Buttons Theme Configuration - Rightmost === primary
 */
export interface BannerButtonsThemeConfig {
  primary?: ActionButtonThemeConfig
  secondary?: ActionButtonThemeConfig
  tertiary?: ActionButtonThemeConfig
}

/**
 * Banner Theme Configuration
 */

export interface BannerThemeConfig {
  container?: BannerContainerThemeConfig
  header?: HeaderThemeConfig
  description?: BannerDescriptionThemeConfig
  buttons?: BannerButtonsThemeConfig
  footer?: BannerModalFooterThemeConfig
}

/**
 * Modal Theme Theme Configuration Enums
 */

export enum ModalContainerPosition {
  Center = 'center',
  Left = 'left',
  Right = 'right',
}

/**
 * Modal Container Theme Configuration
 */

export interface ModalContainerThemeConfig {
  position?: ModalContainerPosition
  font?: string
  background?: ColorThemeConfig
  cornerRadius?: number
  backdrop?: BackdropThemeConfig
}

/**
 * Modal Description Theme Configuration
 */

export interface ModalDescriptionThemeConfig {
  title?: TextThemeConfig
  text?: TextThemeConfig
  link?: TextThemeConfig
}

/**
 * Modal Theme Configuration
 */

export interface ModalThemeConfig {
  container?: ModalContainerThemeConfig
  header?: HeaderThemeConfig
  description?: ModalDescriptionThemeConfig
  purposeListHeader?: PurposeListHeaderThemeConfig
  purposeList?: PurposeListThemeConfig
  footer?: BannerModalFooterThemeConfig
}

/**
 * Preference Center Exit Button Theme Configuration
 */

export enum ExitButtonPosition {
  topRight = 'topRight',
  bottomLeft = 'bottomLeft',
}

/**
 * Preference Center Footer Theme Configuration
 */

export interface PreferenceFooterThemeConfig {
  background?: ColorThemeConfig
  actionButton?: ActionButtonThemeConfig
}

/**
 * Preference Center Welcome Tab Container Theme Configuration
 */

export interface PreferenceContainerThemeConfig {
  exitPosition?: ExitButtonPosition
  font?: string
  background?: ColorThemeConfig
}

/**
 * Preference Center Welcome Tab Header Theme Configuration
 */

export interface PreferenceHeaderThemeConfig {
  background?: ColorThemeConfig
  title?: TextThemeConfig
  logo?: ImageThemeConfig
}

/**
 * Preference Center Navigation Panel Theme Configuration
 */

export interface NavigationLayoutItemThemeConfig {
  unselectedBackground?: ColorThemeConfig
  unselectedText?: TextThemeConfig
  selectedBackground?: ColorThemeConfig
  selectedText?: TextThemeConfig
  cornerRadius?: number
}

export interface NavigationLayoutThemeConfig {
  background?: ColorThemeConfig
  cornerRadius?: number
  item?: NavigationLayoutItemThemeConfig
}

export interface NavigationIconsThemeConfig {
  welcome?: ImageThemeConfig
  privacyPolicy?: ImageThemeConfig
  purposes?: ImageThemeConfig
  subscriptions?: ImageThemeConfig
  requests?: ImageThemeConfig
}

export interface PreferenceNavigationThemeConfig {
  layout?: NavigationLayoutThemeConfig
  iconsVisible?: boolean
  icons?: NavigationIconsThemeConfig
}

/**
 * Preference Center Welcome Tab Exit Button Theme Configuration
 */

export interface PreferenceExitButtonThemeConfig {
  background?: ColorThemeConfig
  text?: TextThemeConfig
  iconVisible?: boolean
  useDefaultIcon?: boolean
  iconColor?: ColorThemeConfig
  icon?: ImageThemeConfig
  cornerRadius?: number
}

/**
 * Preference Center Welcome Tab Hero Banner Theme Configuration
 */

export interface WelcomeTabHeroBannerThemeConfig {
  visible?: boolean
  image?: ImageThemeConfig
}

/**
 * Preference Center Welcome Tab Welcome Message Theme Configuration
 */

export interface WelcomeTabWelcomeMsgThemeConfig {
  title?: TextThemeConfig
  subtitle?: TextThemeConfig
  link?: TextThemeConfig
}

/**
 * Preference Center Welcome Tab Quick Links Theme Configuration
 */

export interface WelcomeTabQuickLinksThemeConfig {
  title?: TextThemeConfig
  link?: TextThemeConfig
  showArrows?: boolean
}

/**
 * Preference Center Welcome Tab About Section Theme Configuration
 */

export interface WelcomeTabAboutThemeConfig {
  title?: TextThemeConfig
  text?: TextThemeConfig
  link?: TextThemeConfig
}

/**
 * Preference Center Welcome Tab Theme Configuration
 */

export interface PreferenceWelcomeTabThemeConfig {
  heroBanner?: WelcomeTabHeroBannerThemeConfig
  welcomeMsg?: WelcomeTabWelcomeMsgThemeConfig
  quickLinks?: WelcomeTabQuickLinksThemeConfig
  about?: WelcomeTabAboutThemeConfig
}

/**
 * Preference Center Privacy Policy Theme Configuration
 */

export interface PreferencePrivacyPolicyTabThemeConfig {
  text?: TextThemeConfig
  link?: TextThemeConfig
}

/**
 * Preference Center Purposes Tab Theme Configuration
 */

export interface PreferencePurposesTabThemeConfig {
  header?: PageTextThemeConfig
  purposeListHeader?: PurposeListHeaderThemeConfig
  purposeList?: PurposeListThemeConfig
  footer?: PreferenceFooterThemeConfig
}

/**
 * Preference Center Subscriptions Tab Theme Configuration Enums
 */

export enum SubscriptionListStyle {
  Filled = 'filled',
  Underlined = 'underlined',
}

export enum UnsubscribeFromAllPosition {
  Top = 'top',
  Bottom = 'bottom',
}

/**
 * Preference Center Subscriptions Tab Unsubscribe All Theme Configuration
 */

export interface SubscriptionsTabUnsubscribeAllThemeConfig {
  background?: ColorThemeConfig
  text?: ColorThemeConfig
  cornerRadius?: number
  switchButton?: SwitchButtonsThemeConfig
}

/**
 * Preference Center Subscriptions Tab List Theme Configuration
 */

export interface LayoutThemeConfig {
  style?: SubscriptionListStyle
  background?: ColorThemeConfig
  text?: TextThemeConfig
  link?: TextThemeConfig
  cornerRadius?: number
}

export interface SubscriptionsTabListThemeConfig {
  layout?: LayoutThemeConfig
  switchButton?: SwitchButtonsThemeConfig
  checkbox?: CheckboxesThemeConfig
}

/**
 * Preference Center Subscriptions Tab Theme Configuration
 */

export interface PreferenceSubscriptionsTabThemeConfig {
  header?: PageTextThemeConfig
  unsubscribeAll?: SubscriptionsTabUnsubscribeAllThemeConfig
  list?: SubscriptionsTabListThemeConfig
  footer?: PreferenceFooterThemeConfig
}

/**
 * Preference Center Requests Tab Theme Configuration Enums */

export enum FormFieldStyle {
  Box = 'box',
  Underline = 'underline',
}

/**
 * Preference Center Requests Tab Home View DSR Link Theme Configuration
 */

export interface RequestsTabDsrLinkThemeConfig {
  title?: TextThemeConfig
  description?: TextThemeConfig
  arrowIcon?: ColorThemeConfig
  background?: ColorThemeConfig
  cornerRadius?: number
}

/**
 * Preference Center Requests Tab Home View Rights List Theme Configuration
 */

export interface RightsListItemThemeConfig {
  title?: TextThemeConfig
  arrowIcon?: ColorThemeConfig
  background?: ColorThemeConfig
  cornerRadius?: number
}

export interface RequestsTabRightsListThemeConfig {
  title?: TextThemeConfig
  item?: RightsListItemThemeConfig
}

export interface RequestsTabHomeThemeConfig {
  header?: PageTextThemeConfig
  dsrPortalLink?: RequestsTabDsrLinkThemeConfig
  rightsList?: RequestsTabRightsListThemeConfig
}

/**
 * Preference Center Requests Tab Right Form View Theme Configuration
 */

export interface FormDividersThemeConfig {
  title?: TextThemeConfig
  subtitle?: TextThemeConfig
}

export interface FieldThemeConfig {
  background?: ColorThemeConfig
  outline?: ColorThemeConfig
}

export interface FormFieldsThemeConfig {
  style?: FormFieldStyle
  active?: FieldThemeConfig
  inactive?: FieldThemeConfig
  error?: FieldThemeConfig
  cornerRadius?: number
  fieldLabel?: TextThemeConfig
  hintText?: TextThemeConfig
  inputText?: TextThemeConfig
}

export interface RightFormThemeConfig {
  dividers?: FormDividersThemeConfig
  fields?: FormFieldsThemeConfig
  checkboxes?: CheckboxesThemeConfig
}

export interface RequestsTabRightFormThemeConfig {
  header?: HeaderThemeConfig
  form?: RightFormThemeConfig
  actionButton?: ActionButtonThemeConfig
}

/**
 * Preference Center Requests Tab Submmited View Summary Banner Theme Configuration
 */

export interface SubmittedRequestSummaryBannerThemeConfig {
  visible?: boolean
  image?: ImageThemeConfig
}

/**
 * Preference Center Requests Tab Submmited View Summary Text Theme Configuration
 */

export interface SubmittedRequestSummaryTextThemeConfig {
  title?: TextThemeConfig
  description?: TextThemeConfig
}

export interface SubmittedRequestFooterThemeConfig {
  background?: ColorThemeConfig
  actionButton?: ActionButtonThemeConfig
}

export interface RequestsTabSubmittedThemeConfig {
  header?: HeaderThemeConfig
  banner?: SubmittedRequestSummaryBannerThemeConfig
  text?: SubmittedRequestSummaryTextThemeConfig
  footer?: SubmittedRequestFooterThemeConfig
}

export interface PreferenceRequestsTabThemeConfig {
  home?: RequestsTabHomeThemeConfig
  rightForm?: RequestsTabRightFormThemeConfig
  submitted?: RequestsTabSubmittedThemeConfig
}

/**
 * Preference Center Tabs Theme Configuration
 */

export interface PreferenceTabsThemeConfig {
  welcome?: PreferenceWelcomeTabThemeConfig
  privacyPolicy?: PreferencePrivacyPolicyTabThemeConfig
  purposes?: PreferencePurposesTabThemeConfig
  subscriptions?: PreferenceSubscriptionsTabThemeConfig
  requests?: PreferenceRequestsTabThemeConfig
}

/**
 * Preference Center Theme Configuration
 */

export interface PreferenceThemeConfig {
  container?: PreferenceContainerThemeConfig
  header?: PreferenceHeaderThemeConfig
  navigation?: PreferenceNavigationThemeConfig
  exitButton?: PreferenceExitButtonThemeConfig
  ketchBadgeVisible?: boolean
  tabs?: PreferenceTabsThemeConfig
}

/**
 * Theme Configuration
 */

export interface ThemeConfig {
  banner?: BannerThemeConfig
  modal?: ModalThemeConfig
  preference?: PreferenceThemeConfig
  progressiveConsent?: any
}

/**
 * Experience V2 Layout Config
 */

/**
 * Banner/Modal Header Experience Layout Configuration
 */

export interface HeaderExperienceLayoutConfig {
  visible?: boolean
  closeButtonVisible?: boolean
}

/**
 * Banner/Modal Footer Experience Layout Configuration
 */

export interface BannerModalFooterExperienceLayoutConfig {
  gpcBadgeVisible?: boolean
}

/**
 * Switch Buttons Experience Layout Configuration
 */

export enum SwitchButtonDisplay {
  Always = 'always',
  WhenLegalBasisDiffers = 'whenLegalBasisDiffers',
}

export interface SwitchButtonsExperienceLayoutConfig {
  visible?: boolean
  display?: SwitchButtonDisplay
  useDefaultText?: boolean
}

/**
 * Text Block Experience Layout Configuration
 */

export interface TextBlockTitleExperienceLayoutConfig {
  visible?: boolean
}

export interface TextBlockExperienceLayoutConfig {
  title?: TextBlockTitleExperienceLayoutConfig
}

/**
 * Banner Action Button Experience Layout Configuration
 */

export enum BannerButtonAction {
  SaveCurrentState = 'saveCurrentState',
  AcceptAll = 'acceptAll',
  OpenModal = 'openModal',
  OpenPreferences = 'openPreferences',
  RejectAll = 'rejectAll',
  OpenURL = 'openURL',
}

export interface BannerActionButtonExperienceLayoutConfig {
  visible?: boolean
  action?: BannerButtonAction
  url?: string
}

/**
 * Banner Buttons Experience Experience Layout Configuration
 */

export interface BannerButtonsExperienceLayoutConfig {
  primary?: BannerActionButtonExperienceLayoutConfig
  secondary?: BannerActionButtonExperienceLayoutConfig
  tertiary?: BannerActionButtonExperienceLayoutConfig
  close?: boolean
}

/**
 * Banner Experience Layout Configuration
 */

export interface BannerExperienceLayoutConfig {
  header?: HeaderExperienceLayoutConfig
  buttons?: BannerButtonsExperienceLayoutConfig
  footer?: BannerModalFooterExperienceLayoutConfig
}

/**
 * Modal List Header Experience Layout Configuration
 */

export interface ModalListHeaderExperienceLayoutConfig {
  visible?: boolean
  useDefaultText?: boolean
}

/**
 * Modal Purpose List Experience Layout Configuration
 */

export interface ModalPurposeListExperienceLayoutConfig {
  legalBasisVisible?: boolean
  purposeStacksDefaultExpanded?: boolean
  switchButtonLabels?: SwitchButtonsExperienceLayoutConfig
}

/**
 * Modal Experience Layout Configuration
 */

export interface ModalExperienceLayoutConfig {
  header?: HeaderExperienceLayoutConfig
  description?: TextBlockExperienceLayoutConfig
  purposeListHeader?: ModalListHeaderExperienceLayoutConfig
  purposeList?: ModalPurposeListExperienceLayoutConfig
  footer?: BannerModalFooterExperienceLayoutConfig
}

/**
 * Preference Center Welcome Tab Experience Layout Configuration Enums
 */

export enum QuickLinkAction {
  OpenUrl = 'openUrl',
  OpenPage = 'openPage',
}

export enum PreferenceCenterPage {
  Welcome = 'welcome',
  PrivacyPolicy = 'privacyPolicy',
  Purpose = 'purpose',
  Subscriptions = 'subscriptions',
  RequestsHome = 'requestsHome',
  RequestsForm = 'requestsForm',
  RequestsSubmitted = 'requestsSubmitted',
}

/**
 * Preference Center Welcome Tab Welcome Message Experience Layout Configuration
 */

export interface WelcomeTabWelcomeMsgExperienceLayoutConfig {
  visible?: boolean
}

/**
 * Preference Center Welcome Tab Quick Links Layout Configuration
 */

export interface QuickLinkExperienceLayoutConfig {
  visible?: boolean
  action?: QuickLinkAction
  page?: PreferenceCenterPage
  url?: string
}

export interface WelcomeTabQuickLinksExperienceLayoutConfig {
  visible?: boolean
  links?: QuickLinkExperienceLayoutConfig[]
}

/**
 * Preference Center Welcome Tab About Section Layout Configuration
 */

export interface WelcomeTabAboutExperienceLayoutConfig {
  visible?: boolean
}

/**
 * Preference Center Welcome Tab Experience Layout Configuration
 */

export interface PreferenceWelcomeTabExperienceLayoutConfig {
  welcomeMsg?: WelcomeTabWelcomeMsgExperienceLayoutConfig
  quickLinks?: WelcomeTabQuickLinksExperienceLayoutConfig
  about?: WelcomeTabAboutExperienceLayoutConfig
}

/**
 * Preference Center Privacy Policy Tab Experience Layout Configuration
 */
export interface PreferencePrivacyPolicyTabExperienceLayoutConfig {
  visible?: boolean
  policyDocumentId?: string
}

/**
 * Preference Center Purposes Tab Header Experience Layout Configuration
 */

export interface PreferenceTabHeaderExperienceLayoutConfig {
  title?: TextBlockTitleExperienceLayoutConfig
}

/**
 * Preference Center Purposes Tab List Experience Layout Configuration
 */

export interface PurposesTabListHeaderExperienceLayoutConfig {
  titleVisible?: boolean
  useDefaultText?: boolean
}

export interface PurposesTabListExperienceLayoutConfig {
  legalBasisVisible?: boolean
  purposeStacksDefaultExpanded?: boolean
  switchButtonLabels?: SwitchButtonsExperienceLayoutConfig
}

/**
 * Preference Center Purposes Tab Experience Layout Configuration
 */

export interface PreferencePurposesTabExperienceLayoutConfig {
  header?: PreferenceTabHeaderExperienceLayoutConfig
  purposeListHeader?: PurposesTabListHeaderExperienceLayoutConfig
  purposeList?: PurposesTabListExperienceLayoutConfig
  actionButtonUseDefaultText?: boolean
}

/**
 * Preference Center Subscriptions Tab Experience Layout Configuration Enums
 */

export enum UnsubscribeAllImpact {
  Universal = 'universal',
  SingleExperience = 'singleExperience',
}

export enum SubscriptionItemType {
  Unknown = 'unknown',
  Topic = 'topic',
  Control = 'control',
}

/**
 * Preference Center Subscriptions Tab Unsubscribe All Experience Layout Configuration
 */

export interface UnsubscribeAllTitleExperienceLayoutConfig {
  useDefaultText?: boolean
}

export interface UnsubscribeAllDescriptionExperienceLayoutConfig {
  visible?: boolean
}

export interface UnsubscribeAllImpactExperienceLayoutConfig {
  visible?: boolean
  useDefaultText?: boolean
}

export interface SubscriptionsTabUnsubscribeAllExperienceLayoutConfig {
  visible: boolean
  title: UnsubscribeAllTitleExperienceLayoutConfig
  description: UnsubscribeAllDescriptionExperienceLayoutConfig
  switchButton: SwitchButtonsExperienceLayoutConfig
  impact: UnsubscribeAllImpact
  position?: UnsubscribeFromAllPosition
}

/**
 * Preference Center Subscriptions Tab List Experience Layout Configuration
 */

export interface SubscriptionListItem {
  type?: SubscriptionItemType
  code?: string
}

export interface SubscriptionsTabListExperienceLayoutConfig {
  items: SubscriptionListItem[]
  switchButtons?: SwitchButtonsExperienceLayoutConfig
}

export interface PreferenceSubscriptionsTabExperienceLayoutConfig {
  header?: PreferenceTabHeaderExperienceLayoutConfig
  unsubscribeAll?: SubscriptionsTabUnsubscribeAllExperienceLayoutConfig
  list?: SubscriptionsTabListExperienceLayoutConfig
  actionButtonUseDefaultText?: boolean
}

/**
 * Preference Center Requests Tab Experience Layout Configuration Enums
 */

export enum CanonicalRightCode {
  Get = 'get',
  Delete = 'delete',
  Restrict = 'restrict',
  Update = 'update',
}

export enum RightsFormMode {
  Single = 'single',
  Custom = 'custom',
}

/**
 * Preference Center Requests Tab Home Right Forms Experience Layout Configuration
 */

export interface RightsTitleExperienceLayoutConfig {
  useDefaultText?: boolean
}

export interface RightFormMapping {
  rightCode?: string
  formID: string
}

/**
 * Default form and custom right to form mapping for a single canonical right.
 * Used when RightFormsExperienceLayoutConfig.mode === RightsFormMode.Custom.
 */
export interface RightMappingDetail {
  canonicalRight?: CanonicalRightCode
  defaultFormID?: string
  rightFormMappings?: RightFormMapping[]
}

/**
 * Form config for both single form and custom mapping mode. The canonical right (request type)
 * ordering is given by the order of the details array, for both modes.
 */
export interface RightFormsExperienceLayoutConfig {
  mode?: RightsFormMode
  singleFormID?: string
  details?: RightMappingDetail[]
}

export interface RequestsTabRightsExperienceLayoutConfig {
  title?: RightsTitleExperienceLayoutConfig
  forms?: RightFormsExperienceLayoutConfig
}

/**
 * Preference Center Requests Tab Home Experience Layout Configuration
 */

export interface RequestsTabHomeExperienceLayoutConfig {
  header?: PreferenceTabHeaderExperienceLayoutConfig
  rights?: RequestsTabRightsExperienceLayoutConfig
}

/**
 * Preference Center Requests Tab Right Form Experience Layout Configuration
 */

export interface RightFormActionButtonExperienceLayoutConfig {
  useDefaultText?: boolean
}

export interface RequestsTabRightFormExperienceLayoutConfig {
  enableRecaptcha?: boolean
  actionButton?: RightFormActionButtonExperienceLayoutConfig
}

/**
 * Preference Center Requests Tab Submitted Action Button Experience Layout Configuration
 */

export interface SubmittedActionButtonExperienceLayoutConfig {
  visible?: boolean
  useDefaultText?: boolean
}

export interface RequestsTabSubmittedExperienceLayoutConfig {
  actionButton: SubmittedActionButtonExperienceLayoutConfig
}

/**
 * Preference Center Requests Tab Experience Layout Configuration
 */

export interface PreferenceRequestsTabExperienceLayoutConfig {
  home?: RequestsTabHomeExperienceLayoutConfig
  rightForm?: RequestsTabRightFormExperienceLayoutConfig
  submitted?: RequestsTabSubmittedExperienceLayoutConfig
}

/**
 * Preference Center Tabs Experience Layout Configuration
 */

export interface PreferenceExperienceTabsLayoutConfig {
  welcome?: PreferenceWelcomeTabExperienceLayoutConfig
  privacyPolicy?: PreferencePrivacyPolicyTabExperienceLayoutConfig
  purposes?: PreferencePurposesTabExperienceLayoutConfig
  subscriptions?: PreferenceSubscriptionsTabExperienceLayoutConfig
  requests?: PreferenceRequestsTabExperienceLayoutConfig
}

/**
 * Preference Center Experience Layout Configuration
 */

export interface PreferenceExperienceLayoutConfig {
  gpcBadgeVisible?: boolean
  tabs?: PreferenceExperienceTabsLayoutConfig
}

export interface EntitlementLayoutConfig {
  hasPurposesEntitlement?: boolean
  hasSubscriptionsEntitlement?: boolean
  hasRightsEntitlement?: boolean
}

/**
 * Experience Layout Configuration
 */
export interface ExperienceLayoutConfig {
  banner?: BannerExperienceLayoutConfig
  modal?: ModalExperienceLayoutConfig
  preference?: PreferenceExperienceLayoutConfig
  progressiveConsent?: any
  entitlementInfo?: EntitlementLayoutConfig
}

/**
 * Banner/Modal Header Experience Content Configuration
 */

export interface HeaderExperienceContentConfig {
  title?: string
}

/**
 * Banner/Modal Footer Experience Content Configuration
 */

export interface FooterExperienceContentConfig {
  actionButtonText?: string
}

/**
 * Switch Buttons Experience Content Configuration
 */

export interface SwitchButtonsExperienceContentConfig {
  onText?: string
  offText?: string
  alwaysOnText?: string
}

/**
 * Text Block Experience Content Configuration
 */

export interface TextBlockExperienceContentConfig {
  title?: string
  body?: string
}

/**
 * Banner Action Button Experience Content Configuration
 */

export interface BannerActionButtonExperienceContentConfig {
  text?: string
}

/**
 * Banner Buttons Experience Content Configuration
 */

export interface BannerButtonsExperienceContentConfig {
  primary?: BannerActionButtonExperienceContentConfig
  secondary?: BannerActionButtonExperienceContentConfig
  tertiary?: BannerActionButtonExperienceContentConfig
}

/**
 * Banner Experience Content Configuration
 */

export interface BannerExperienceContentConfig {
  header?: HeaderExperienceContentConfig
  description?: string
  buttons?: BannerButtonsExperienceContentConfig
  footer?: FooterExperienceContentConfig
}

/**
 * Modal List Header Experience Content Configuration
 */

export interface ModalListHeaderExperienceContentConfig {
  text?: string
}

/**
 * Modal Purpose List Experience Content Configuration
 */

export interface ModalPurposeListExperienceContentConfig {
  switchButtonLabels?: SwitchButtonsExperienceContentConfig
}

/**
 * Modal Experience Content Configuration
 */

export interface ModalExperienceContentConfig {
  header?: HeaderExperienceContentConfig
  description?: TextBlockExperienceContentConfig
  purposeListHeader?: ModalListHeaderExperienceContentConfig
  purposeList?: ModalPurposeListExperienceContentConfig
  footer?: FooterExperienceContentConfig
}

/**
 * Preferences Center Welcome Tab Header Experience Content Configuration
 */

export interface PreferenceHeaderExperienceContentConfig {
  title?: string
}

/**
 * Preferences Center Welcome Tab Navigation Experience Content Configuration
 */

export interface PreferenceNavigationExperienceContentConfig {
  welcomeTitle?: string
  privacyPolicyTitle?: string
  purposesTitle?: string
  subscriptionsTitle?: string
  requestsTitle?: string
}

/**
 * Preferences Center Welcome Tab Welcome Message Experience Content Configuration
 */

export interface WelcomeTabWelcomeMsgExperienceContentConfig {
  title?: string
  subtitle?: string
}

/**
 * Preferences Center Welcome Tab Quick Links Experience Content Configuration
 */

export interface QuickLinkExperienceContentConfig {
  text?: string
}

export interface WelcomeTabQuickLinksExperienceContentConfig {
  links?: QuickLinkExperienceContentConfig[]
}

/**
 * Preferences Center Welcome Tab About Experience Content Configuration
 */

export interface WelcomeTabAboutExperienceContentConfig {
  title?: string
  description?: string
}

/**
 * Preferences Center Welcome Tab Experience Content Configuration
 */

export interface PreferenceWelcomeTabExperienceContentConfig {
  welcomeMsg?: WelcomeTabWelcomeMsgExperienceContentConfig
  quickLinks?: WelcomeTabQuickLinksExperienceContentConfig
  about?: WelcomeTabAboutExperienceContentConfig
}

export interface PreferenceTabHeaderExperienceContentConfig {
  title?: string
  description?: string
}

/**
 * Preferences Center Purposes Tab List Experience Content Configuration
 */

export interface PurposesTabListHeaderExperienceContentConfig {
  title?: string
}

export interface PurposesTabListExperienceContentConfig {
  switchButtonLabels?: SwitchButtonsExperienceContentConfig
}

/**
 * Preferences Center Purposes Tab Experience Content Configuration
 */

export interface PreferencePurposesTabExperienceContentConfig {
  header?: PreferenceTabHeaderExperienceContentConfig
  purposeListHeader?: PurposesTabListHeaderExperienceContentConfig
  purposeList?: PurposesTabListExperienceContentConfig
  actionButtonText?: string
}

/**
 * Preferences Center Subscriptions Tab Unsubscribe All Experience Content Configuration
 */

export interface SubscriptionsTabUnsubscribeAllExperienceContentConfig {
  title?: string
  description?: string
  switchLabels?: SwitchButtonsExperienceContentConfig
}

/**
 * Preferences Center Subscriptions Tab Experience Content Configuration
 */

export interface PreferenceSubscriptionsTabExperienceContentConfig {
  header?: PreferenceTabHeaderExperienceContentConfig
  unsubscribeAll?: SubscriptionsTabUnsubscribeAllExperienceContentConfig
  listSwitchLabels?: SwitchButtonsExperienceContentConfig
  actionButtonText?: string
}

/**
 * Preferences Center Requests Tab Home DSR Link Experience Content Configuration
 */

export interface RequestsTabDsrLinkExperienceContentConfig {
  title?: string
  description?: string
}

/**
 * Preferences Center Requests Tab Home Rights Experience Content Configuration
 */

export interface RightsRequestTypesExperienceContentConfig {
  provideData: string
  deleteData: string
  restrictProcessing: string
  updateData: string
}

export interface RequestsTabRightsExperienceContentConfig {
  title?: string
  requestTypes?: RightsRequestTypesExperienceContentConfig
}

export interface RequestsTabHomeExperienceContentConfig {
  header?: PreferenceTabHeaderExperienceContentConfig
  dsrPortalLink?: RequestsTabDsrLinkExperienceContentConfig
  rights?: RequestsTabRightsExperienceContentConfig
}

/**
 * Preferences Center Requests Tab Right Form Experience Content Configuration
 */

export interface RequestsTabRightFormExperienceContentConfig {
  recaptchaFailureText?: string
  actionButtonText?: string
}

/**
 * Preferences Center Requests Tab Submitted Experience Content Configuration
 */

export interface RequestsTabSubmittedExperienceContentConfig {
  title?: string
  subtitle?: string
  description?: string
  actionButtonText?: string
}

/**
 * Preferences Center Requests Tab Experience Content Configuration
 */

export interface PreferenceRequestsTabExperienceContentConfig {
  home?: RequestsTabHomeExperienceContentConfig
  rightForm?: RequestsTabRightFormExperienceContentConfig
  submitted?: RequestsTabSubmittedExperienceContentConfig
}

/**
 * Preferences Center Tabs Experience Content Configuration
 */

export interface PreferenceExperienceTabsContentConfig {
  welcome?: PreferenceWelcomeTabExperienceContentConfig
  purposes?: PreferencePurposesTabExperienceContentConfig
  subscriptions?: PreferenceSubscriptionsTabExperienceContentConfig
  requests?: PreferenceRequestsTabExperienceContentConfig
}

/**
 * Preferences Center Experience Content Configuration
 */

export interface PreferenceExperienceContentConfig {
  header?: PreferenceHeaderExperienceContentConfig
  navigation?: PreferenceNavigationExperienceContentConfig
  footer?: FooterExperienceContentConfig
  tabs?: PreferenceExperienceTabsContentConfig
}

/**
 * Country Translations
 */

interface CountryTranslations {
  country_afghanistan?: string
  country_albania?: string
  country_algeria?: string
  country_andorra?: string
  country_angola?: string
  country_antigua_and_barbuda?: string
  country_argentina?: string
  country_armenia?: string
  country_australia?: string
  country_austria?: string
  country_azerbaijan?: string
  country_bahamas?: string
  country_bahrain?: string
  country_bangladesh?: string
  country_barbados?: string
  country_belarus?: string
  country_belgium?: string
  country_belize?: string
  country_benin?: string
  country_bhutan?: string
  country_bolivia?: string
  country_bosnia_and_herzegovina?: string
  country_botswana?: string
  country_brazil?: string
  country_brunei_darussalam?: string
  country_bulgaria?: string
  country_burkina_faso?: string
  country_burundi?: string
  country_cambodia?: string
  country_cameroon?: string
  country_canada?: string
  country_cape_verde?: string
  country_central_african_republic?: string
  country_chad?: string
  country_chile?: string
  country_china?: string
  country_colombia?: string
  country_comoros?: string
  country_congo?: string
  country_congo_the_democratic_republic?: string
  country_costa_rica?: string
  country_cote_divoire?: string
  country_croatia?: string
  country_cuba?: string
  country_cyprus?: string
  country_czech_republic?: string
  country_denmark?: string
  country_djibouti?: string
  country_dominica?: string
  country_dominican_republic?: string
  country_ecuador?: string
  country_egypt?: string
  country_el_salvador?: string
  country_equatorial_guinea?: string
  country_eritrea?: string
  country_estonia?: string
  country_ethiopia?: string
  country_fiji?: string
  country_finland?: string
  country_france?: string
  country_gabon?: string
  country_gambia?: string
  country_georgia?: string
  country_germany?: string
  country_ghana?: string
  country_greece?: string
  country_grenada?: string
  country_guatemala?: string
  country_guinea?: string
  country_guinea_bissau?: string
  country_guyana?: string
  country_haiti?: string
  country_vatican_city?: string
  country_honduras?: string
  country_hungary?: string
  country_iceland?: string
  country_india?: string
  country_indonesia?: string
  country_iraq?: string
  country_ireland?: string
  country_israel?: string
  country_italy?: string
  country_jamaica?: string
  country_japan?: string
  country_jordan?: string
  country_kazakhstan?: string
  country_kenya?: string
  country_kiribati?: string
  country_north_korea?: string
  country_south_korea?: string
  country_kosovo?: string
  country_kuwait?: string
  country_kyrgyzstan?: string
  country_laos?: string
  country_latvia?: string
  country_lebanon?: string
  country_lesotho?: string
  country_liberia?: string
  country_libya?: string
  country_liechtenstein?: string
  country_lithuania?: string
  country_luxembourg?: string
  country_north_macedonia?: string
  country_madagascar?: string
  country_malawi?: string
  country_malaysia?: string
  country_maldives?: string
  country_mali?: string
  country_malta?: string
  country_marshall_islands?: string
  country_mauritania?: string
  country_mauritius?: string
  country_mexico?: string
  country_micronesia?: string
  country_moldova?: string
  country_monaco?: string
  country_mongolia?: string
  country_montenegro?: string
  country_morocco?: string
  country_mozambique?: string
  country_myanmar?: string
  country_namibia?: string
  country_nauru?: string
  country_nepal?: string
  country_netherlands?: string
  country_new_zealand?: string
  country_nicaragua?: string
  country_niger?: string
  country_nigeria?: string
  country_norway?: string
  country_oman?: string
  country_pakistan?: string
  country_palau?: string
  country_panama?: string
  country_papua_new_guinea?: string
  country_paraguay?: string
  country_peru?: string
  country_philippines?: string
  country_poland?: string
  country_portugal?: string
  country_qatar?: string
  country_romania?: string
  country_russian_federation?: string
  country_rwanda?: string
  country_saint_kitts_and_nevis?: string
  country_saint_lucia?: string
  country_saint_vincent_and_the_grenadines?: string
  country_samoa?: string
  country_san_marino?: string
  country_sao_tome_and_principe?: string
  country_saudi_arabia?: string
  country_senegal?: string
  country_serbia?: string
  country_seychelles?: string
  country_sierra_leone?: string
  country_singapore?: string
  country_slovakia?: string
  country_slovenia?: string
  country_solomon_islands?: string
  country_somalia?: string
  country_south_africa?: string
  country_spain?: string
  country_sri_lanka?: string
  country_sudan?: string
  country_south_sudan?: string
  country_suriname?: string
  country_eswatini?: string
  country_sweden?: string
  country_switzerland?: string
  country_syria?: string
  country_taiwan?: string
  country_tajikistan?: string
  country_tanzania?: string
  country_thailand?: string
  country_timor_leste?: string
  country_togo?: string
  country_tonga?: string
  country_trinidad_and_tobago?: string
  country_tunisia?: string
  country_turkey?: string
  country_turkmenistan?: string
  country_tuvalu?: string
  country_uganda?: string
  country_ukraine?: string
  country_united_arab_emirates?: string
  country_united_kingdom?: string
  country_united_states?: string
  country_uruguay?: string
  country_uzbekistan?: string
  country_vanuatu?: string
  country_venezuela?: string
  country_vietnam?: string
  country_yemen?: string
  country_zambia?: string
  country_zimbabwe?: string
}

/**
 * Static Text Experience Content Configuration
 *
 * This is used throughout the banner, modal, and preference experiences
 * as non-configurable text and/or defaults.
 *
 */

export interface BaseStaticContentConfig {
  accept_all?: string
  accept?: string
  and_the?: string
  and?: string
  apply?: string
  at_this_time_due_to_suspected_bot_like_behavior_as_indicated_by_our?: string
  category?: string
  click_here?: string
  cookie?: string
  cookies?: string
  data_categories?: string
  data_category?: string
  description?: string
  duration?: string
  enter_valid_email?: string
  enter_valid_phone_number?: string
  ex_i_worked_in_the_it_department_in_2015?: string
  external_transfer?: string
  features?: string
  first_party?: string
  functional?: string
  greeting?: string
  here?: string
  i_am_a_an?: string
  legal_basis?: string
  legal_text?: string
  marketing?: string
  maximum_storage?: string
  no_rights_available?: string
  object_to_legitimate_interest?: string
  of?: string
  off?: string
  on?: string
  opted_in?: string
  opted_out?: string
  performance?: string
  persistent?: string
  please_select_a_request_type?: string
  powered_by?: string
  preference_consents_exit_button_text?: string
  preference_overview_button_text?: string
  preference_rights_address_line_one?: string
  preference_rights_address_line_two?: string
  preference_rights_cancel_button_text?: string
  preference_rights_country?: string
  preference_rights_email?: string
  preference_rights_exit_button_text?: string
  preference_rights_first_name?: string
  preference_rights_last_name?: string
  preference_rights_personal_details?: string
  preference_rights_phone_number?: string
  preference_rights_postal_code?: string
  preference_rights_request_details?: string
  preference_rights_request?: string
  preference_rights_select_country?: string
  preference_rights_select_state_province?: string
  preference_rights_state?: string
  preference_rights_submit_new_request?: string
  preference_rights_thank_you?: string
  preference_rights_we_have_received?: string
  privacy_policy?: string
  provenance?: string
  purpose?: string
  purposes?: string
  quick_links?: string
  reject_all?: string
  required?: string
  retention_period?: string
  rights_tab_porthole_redirect_footer_alt?: string
  rights_tab_porthole_redirect_footer?: string
  save?: string
  select_a_request_type?: string
  select_a_relationship?: string
  service_provider?: string
  session?: string
  special_features?: string
  special_purposes?: string
  strictly_necessary?: string
  submit?: string
  submitting?: string
  tell_us_about_your_relationship_to_us?: string
  terms_of_service?: string
  third_party?: string
  this_site_is_protected_by?: string
  unfortunately?: string
  unsubscribe_from_all?: string
  vendor?: string
  vendors?: string
  verification?: string
  we_are_unable_to_fulfill_your_request?: string
  illustration?: string
  illustrations?: string
}

/**
 * Static Text Experience Content Configuration
 * Union of BaseContentConfig and CountryTranslations
 */

export type StaticContentConfig = BaseStaticContentConfig & CountryTranslations

/**
 * Experience Content Configuration
 */

export interface ExperienceContentConfig {
  banner?: BannerExperienceContentConfig
  modal?: ModalExperienceContentConfig
  display?: string
  preference?: PreferenceExperienceContentConfig
  progressiveConsent?: any
  static?: StaticContentConfig
}

/**
 * Experience Configuration
 *
 * Layout configuration: all configuration options
 * that DO NOT change with the language, e.g. button visibility.
 *
 * Content configuration: all configuration options
 * that DO change with the language, e.g. banner title.
 *
 */

export interface ExperienceAssociationConfig {
  subscriptionTopicCodes?: string[]
  formID?: string[]
}

export interface ExperienceConfig {
  layout?: ExperienceLayoutConfig
  content?: ExperienceContentConfig
  associations?: ExperienceAssociationConfig
}

/**
 * Progressive Experience Configuration
 */

export enum ProgressiveExperienceType {
  Consent = 'consent',
  Subscription = 'subscription',
}

export enum ProgressiveExperienceConsentLayout {
  ActionButtons = 'actionButtons',
  ToggleSwitch = 'toggleSwitch',
}

export enum ProgressiveExperiencePosition {
  FollowPointer = 'followPointer',
  Embed = 'embed',
}

export enum ProgressiveExperienceButtonAction {
  Accept = 'accept',
  Reject = 'reject',
  Dismiss = 'dismiss',
}

export type ProgressiveExperienceActionButtonLayout = {
  visible: boolean
  action: ProgressiveExperienceButtonAction
  purposeCodes: string[]
}

export type ProgressiveExperienceActionButtonsLayout = {
  primary: ProgressiveExperienceActionButtonLayout
  secondary: ProgressiveExperienceActionButtonLayout
  tertiary: ProgressiveExperienceActionButtonLayout
}

export type ProgressiveExperienceSwitchButtonsLayout = {
  labelVisible: boolean
  useDefaultText: boolean
  display: SwitchButtonDisplay
  purposeCodes: string[]
}

export type ProgressiveExperienceLayout = {
  type: ProgressiveExperienceType
  consentLayout: ProgressiveExperienceConsentLayout
  position: ProgressiveExperiencePosition
  embedElementId: string
  font: string
  headerVisible: boolean
  descriptionVisible: boolean
  subscriptionTopicCodes: string[]
  actionButtons: ProgressiveExperienceActionButtonsLayout
  switchButtons: ProgressiveExperienceSwitchButtonsLayout
}

export type ProgressiveExperienceActionButtonsContent = {
  primaryText: string
  secondaryText: string
  tertiaryText: string
}

export type ProgressiveExperienceSwitchButtonsContent = {
  onText: string
  offText: string
}

export type ProgressiveExperienceContent = {
  header: string
  description: string
  actionButtons: ProgressiveExperienceActionButtonsContent
  switchButtons: ProgressiveExperienceSwitchButtonsContent
}

export interface ProgressiveExperienceConfig {
  layout: ProgressiveExperienceLayout
  content: ProgressiveExperienceContent
  associations: ExperienceAssociationConfig
}

/**
 * Progressive Experience Configuration Type
 *
 * Type used for the progressive experience field in the config.
 */

export interface ProgressiveExperienceConfigurationType {
  [experienceId: string]: {
    content: {
      progressiveConsent: ProgressiveExperienceContent
      static: StaticContentConfig
    }
    layout: {
      progressiveConsent: ProgressiveExperienceLayout
      entitlementInfo: EntitlementLayoutConfig
    }
  }
}

/** Message type for post messaging preview configs from figurehead to lanyard */

export enum PreviewMessageType {
  LoadConfig = 'loadConfig',
  ShowBanner = 'showBanner',
  ShowModal = 'showModal',
  ShowPreference = 'showPreferences',
  SwitchPreferencePage = 'switchPreferencePage',
}

export type PreviewMessage = {
  type: PreviewMessageType
  payload?: ConfigurationV2 | PreferenceCenterPage
}

export {
  ExperienceFormField,
  FormFieldDropdownOption,
  FormFieldWidth,
  FormFieldCategory,
  FormFieldType,
  FormFieldVariant,
  CanonicalRightForm,
  CustomRightForm,
  FormSection,
  FormTemplate,
} from './forms'

export interface TagPurposeMapping {
  purposeCodes?: string[]
}
