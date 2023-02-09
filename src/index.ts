/**
 * Tab
 *
 * @enum
 */
export enum Tab {
  Overview = 'overviewTab',
  Rights = 'rightsTab',
  Consents = 'consentsTab',
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
  WILL_NOT_SHOW = 'willNotShow',
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
 * Consent
 */
export type Consent = {
  purposes: Status
  vendors?: string[] // list of vendor ids for which the user has opted out
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
   * supportedCountries is the list of supported ISO 3166 ALPHA-2 country codes
   * to show in the rights form
   */
  supportedCountries?: string[]

  /**
   * showConsentsTab determines whether the consents tab will show. If
   * undefined, the consents tab is displayed
   */
  showConsentsTab?: boolean
}

/**
 * ShowConsentOptions
 */
export type ShowConsentOptions = {
  displayHint: ConsentExperienceType
  purposes?: string[]
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
  description?: string
  phone?: string
  postalCode?: string
  addressLine1?: string
  addressLine2?: string

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

  /**
   * the data subject types for which the purpose is relevant. If this list is empty then the purpose applies to all
   * data subject types
   */
  dataSubjectTypeCodes?: string[]
}

/**
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
   * format is the encoding of the value
   */
  format: IdentityFormat

  /**
   * key is the identifier to find the identity within the value if the format is IDENTITY_FORMAT_STRING then key
   * will be undefined
   */
  key?: string

  /**
   * priority of the identity for consent conflict resolution
   */
  priority?: number
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
  rights?: RightsTab
  consents?: ConsentsTab
  overview: OverviewTab

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
  plugins?: { [key: string]: any }

  /**
   * Recaptcha config
   */
  recaptcha?: Recaptcha
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

  collectedAt?: number
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
   */
  setConsent(consent: Consent): Promise<void>

  /**
   * Sets the provisional consent
   *
   * @param consent Consents
   */
  setProvisionalConsent(consent: Consent): Promise<void>

  /**
   * Show the consent experience
   */
  showConsent(): Promise<void>

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
   * @deprecated This method will be moved to an experience interface.
   */
  experienceClosed(reason: ExperienceClosedReason): Promise<void>

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
