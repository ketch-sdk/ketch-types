/**
 * Callback
 */
export declare type Callback = (arg0: any) => void

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
 * Identities
 */
export type Identities = { [key: string]: string }

/**
 * PreferenceExperienceParams
 */
export type PreferenceExperienceParams = {
  showRightsTab?: boolean
  dataSubjectTypeCodes?: string[]
}

/**
 * Plugin factory function signature
 */
export type Plugin = (host: Ketch, config?: any) => Promise<void>

/**
 * Ketch host
 */
export interface Ketch {
  getConfig(): Promise<Configuration>
  // Add: on('configChanged', callback)

  registerPlugin(plugin: Plugin, config?: any): Promise<void>

  hasConsent(): boolean
  getConsent(): Promise<Consent>
  setConsent(c: Consent): Promise<Consent>
  changeConsent(consent: Consent): Promise<void>
  setProvisionalConsent(c: Consent): Promise<void>

  // This will be changed to: on('consentChanged', callback)
  onConsent(callback: Callback): Promise<void>

  setShowConsentExperience(): Promise<void>
  shouldShowConsent(c: Consent): boolean
  showConsentExperience(): Promise<Consent>

  // This will be changed to: on('showConsentExperience', callback)
  onShowConsentExperience(callback: ShowConsentExperience): Promise<void>

  showPreferenceExperience(params: PreferenceExperienceParams): Promise<Consent>

  // This will be changed to: on('showPreferenceExperience', callback)
  onShowPreferenceExperience(callback: ShowPreferenceExperience): Promise<void>

  experienceClosed(reason: string): Promise<Consent>

  // This will be changed to: on('experienceHidden', callback)
  onHideExperience(callback: Callback): Promise<void>

  // This will be changed to: on('willShowExperience', callback)
  onWillShowExperience(callback: Callback): Promise<void>

  invokeRight(eventData: InvokeRightsEvent): Promise<void>

  // This will be changed to: on('rightInvoked', callback)
  onInvokeRight(callback: Callback): Promise<void>

  setEnvironment(env: Environment): Promise<Environment>

  // This is the same as: once('environmentChanged', promise.resolve)
  getEnvironment(): Promise<Environment>

  // This will be changed to: on('environmentChanged', callback)
  onEnvironment(callback: Callback): Promise<void>

  setGeoIP(g: IPInfo): Promise<IPInfo>
  getGeoIP(): Promise<IPInfo>

  // This will be changed to: on('locationChanged', callback)
  onGeoIP(callback: Callback): Promise<void>

  setIdentities(id: Identities): Promise<Identities>
  getIdentities(): Promise<Identities>

  // This will be changed to: on('identitiesChanged', callback)
  onIdentities(callback: Callback): Promise<void>

  setJurisdiction(ps: string): Promise<string>
  getJurisdiction(): Promise<string>

  // This will be changed to: on('jurisdictionChanged', callback)
  onJurisdiction(callback: Callback): Promise<void>

  setRegionInfo(info: string): Promise<string>
  getRegionInfo(): Promise<string>

  // This will be changed to: on('regionChanged', callback)
  onRegionInfo(callback: Callback): Promise<void>

  // Native events
  fireNativeEvent(name: string, args: any): Promise<void>
}

/**
 * ShowPreferenceExperience
 */
export type ShowPreferenceExperience = (
  host: Ketch,
  config: Configuration,
  consents: Consent,
  options?: ShowPreferenceOptions,
) => void

/**
 * ShowConsentExperience
 */
export type ShowConsentExperience = (
  host: Ketch,
  config: Configuration,
  consents: Consent,
  options?: ShowConsentOptions,
) => void

/**
 * ShowPreferenceOptions
 */
export type ShowPreferenceOptions = {
  tab?: 'overviewTab' | 'rightsTab' | 'consentsTab'

  /**
   * dataSubjectTypeCodes is the list of data subjects to display. If undefined, all data subjects are displayed.
   */
  dataSubjectTypeCodes?: string[]

  /**
   * showRightsTab determines whether the rights tab will show. If undefined, the rights tab is displayed.
   */
  showRightsTab?: boolean
}

/**
 * ShowConsentOptions
 */
export type ShowConsentOptions = {
  displayHint: 'experiences.consent.jit' | 'experiences.consent.modal' | 'experiences.consent.banner'
  purposes?: string[]
}

/**
 * InvokeRightsEvent
 */
export type InvokeRightsEvent = {
  addressLine1?: string
  addressLine2?: string
  country?: string
  details?: string
  firstName: string
  lastName: string
  phoneNumber?: string
  postalCode?: string
  right: string
  rightsEmail: string
  stateRegion?: string
}

/**
 * AppDiv
 */
export interface AppDiv {
  id: string
  zIndex: string
}

/**
 * ExperienceClosedReason describes the reason the experience was closed.
 *
 * setConsent = consent was accepted/set
 * invokeRight = the right was invoked
 * close = the close/exit button was clicked
 */
export type ExperienceClosedReason = 'setConsent' | 'invokeRight' | 'close'

/**
 * ExperienceDefault
 */
export enum ExperienceDefault {
  BANNER = 1,
  MODAL,
}

/**
 * ExperienceButtonDestination
 */
export enum ExperienceButtonDestination {
  GOTO_MODAL = 1,
  GOTO_PREFERENCE = 2,
  REJECT_ALL = 3,
}

/**
 * ExperiencePrimaryButtonAction
 */
export enum ExperiencePrimaryButtonAction {
  SAVE_CURRENT_STATE = 1,
  ACCEPT_ALL = 2,
}

/**
 * MigrationOption
 */
export enum MigrationOption {
  MIGRATE_DEFAULT,
  MIGRATE_NEVER,
  MIGRATE_FROM_ALLOW,
  MIGRATE_FROM_DENY,
  MIGRATE_ALWAYS,
}

/**
 * CookieDuration
 */
export enum CookieDuration {
  SESSION = 1,
  PERSISTENT,
}

/**
 * CookieProvenance
 */
export enum CookieProvenance {
  FIRST_PARTY = 1,
  THIRD_PARTY,
}

/**
 * CookieCategory
 */
export enum CookieCategory {
  STRICTLY_NECESSARY = 1,
  FUNCTIONAL,
  PERFORMANCE,
  MARKETING,
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
 * PurposeLegalBasis
 */
export interface PurposeLegalBasis {
  legalBasisCode: string
}

/**
 * PurposeAllowed
 */
export interface PurposeAllowed {
  allowed: string
}

/**
 * PurposeAllowedLegalBasis
 */
export interface PurposeAllowedLegalBasis {
  allowed: string
  legalBasisCode: string
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
}

/**
 * GetConsentResponse
 */
export interface GetConsentResponse {
  purposes: { [key: string]: PurposeAllowed | string }
  /**
   * list of vendor ids for which the user has opted out
   */
  vendors?: string[]
}

/**
 * SetConsentRequest
 */
export interface SetConsentRequest {
  organizationCode: string
  controllerCode?: string
  propertyCode: string
  environmentCode: string
  identities: { [key: string]: string }
  collectedAt?: number
  jurisdictionCode: string
  migrationOption: MigrationOption
  purposes: { [key: string]: PurposeAllowedLegalBasis }
  vendors?: string[] // list of vendor ids for which the user has opted out

  /**
   * identityPriority is a map from the identity space code to the priority that should be used to resolve consent
   * conflict
   * lower values take top priority
   * if an identity space codes is not in the identityPriority map then it is the last priority
   */
  identityPriority?: { [key: string]: number }
}

/**
 * DataSubject
 */
export interface DataSubject {
  email: string
  first: string
  last: string
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
  defaultScopeCode?: string
  variable?: string
  scopes?: { [key: string]: string }
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
 * IdentityLocation is the location on the page from which to retrieve identity information
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
 * SwitchTextRenderLogic
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
 * BannerPosition
 */
export enum BannerPosition {
  BOTTOM = 1,
  TOP = 2,
  BOTTOM_LEFT = 3,
  BOTTOM_RIGHT = 4,
}

/**
 * ModalPosition
 */
export enum ModalPosition {
  CENTER = 1,
  LEFT_FULL_HEIGHT = 2,
  RIGHT_FULL_HEIGHT = 3,
}

/**
 * Theme
 */
export interface Theme {
  watermark?: boolean
  buttonBorderRadius: number

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
  UsesNonCookieAccess?: boolean // deprecated

  // replaces UsesNonCookieAccess
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
   *
   * @deprecated
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
     * Semaphore is the main entrypoint.
     */
    semaphore: Pusher & Loaded
  }
}
