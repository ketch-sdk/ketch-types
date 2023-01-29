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
 * All Tabs
 */
export const ALL_TABS = ['overviewTab', 'rightsTab', 'consentsTab'] as const

/**
 * TabTuple
 */
export type TabTuple = typeof ALL_TABS

/**
 * Tab
 */
export type Tab = TabTuple[number]

/**
 * Determines if the Given value is a Tab
 *
 * @param value
 */
export function isTab(value: string): value is Tab {
  return ALL_TABS.includes(value as Tab)
}

/**
 * Plugin class
 */
export interface PluginClass {
  init?: (host: Ketch, config: Configuration) => void
  environmentLoaded?: (host: Ketch, config: Configuration, env: Environment) => void
  geoIPLoaded?: (host: Ketch, config: Configuration, ipInfo: IPInfo) => void
  identitiesLoaded?: (host: Ketch, config: Configuration, identities: Identities) => void
  jurisdictionLoaded?: (host: Ketch, config: Configuration, policyScope: string) => void
  regionInfoLoaded?: (host: Ketch, config: Configuration, region: string) => void
  consentChanged?: (host: Ketch, config: Configuration, consent: Consent) => void
  rightInvoked?: (host: Ketch, config: Configuration, request: InvokeRightRequest) => void
  showConsentExperience?: (host: Ketch, config: Configuration, consents: Consent, options?: ShowConsentOptions) => void
  showPreferenceExperience?: (
    host: Ketch,
    config: Configuration,
    consents: Consent,
    options?: ShowPreferenceOptions,
  ) => void
  willShowExperience?: (host: Ketch, config: Configuration, type: string) => void
  experienceHidden?: (host: Ketch, config: Configuration, reason: string) => void
}

/**
 * Plugin factory function signature
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
   * @param key
   */
  getItem(key: string): Promise<string | null>

  /**
   * Sets the value for the given key
   *
   * @param key
   * @param value
   */
  setItem(key: string, value: string): Promise<void>

  /**
   * Removes the given key
   *
   * @param key
   */
  removeItem(key: string): Promise<void>
}

export interface Ketch {
  /**
   * Register a plugin with the given configuration
   *
   * @param plugin
   * @param config
   */
  registerPlugin(plugin: Plugin, config?: any): Promise<void>

  /**
   * Register an identity provider for the given identity
   *
   * @param name
   * @param provider
   */
  registerIdentityProvider(name: string, provider: IdentityProvider): Promise<void>

  /**
   * Register a storage provider
   *
   * @param provider
   */
  registerStorageProvider(provider: StorageProvider): Promise<void>

  // Consent
  hasConsent(): boolean
  getConsent(): Promise<Consent>
  setConsent(c: Consent): Promise<Consent>

  // Experience
  setShowConsentExperience(): Promise<void>
  showConsentExperience(): Promise<Consent>
  showPreferenceExperience(params: ShowPreferenceOptions): Promise<Consent>
  experienceClosed(reason: ExperienceClosedReason): Promise<Consent>

  // Rights
  invokeRight(eventData: InvokeRightEvent): Promise<void>

  // Config
  getConfig(): Promise<Configuration>
  getEnvironment(): Promise<Environment>
  getGeoIP(): Promise<IPInfo>
  getIdentities(): Promise<Identities>
  getJurisdiction(): Promise<string>
  getRegionInfo(): Promise<string>

  /**
   * Alias for `emitter.on(eventName, listener)`.
   */
  addListener(eventName: string | symbol, listener: (...args: any[]) => void): this

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
  on(eventName: string | symbol, listener: (...args: any[]) => void): this

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
  once(eventName: string | symbol, listener: (...args: any[]) => void): this

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
   * recently added instance. In the example the `once('ping')`listener is removed:
   */
  removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this

  /**
   * Alias for `emitter.removeListener()`.
   */
  off(eventName: string | symbol, listener: (...args: any[]) => void): this

  /**
   * Removes all listeners, or those of the specified `eventName`.
   *
   * It is bad practice to remove listeners added elsewhere in the code,
   * particularly when the `EventEmitter` instance was created by some other
   * component or module (e.g. sockets or file streams).
   *
   * Returns a reference to the `EventEmitter`, so that calls can be chained.
   */
  removeAllListeners(event?: string | symbol): this

  /**
   * By default `EventEmitter`s will print a warning if more than `10` listeners are
   * added for a particular event. This is a useful default that helps finding
   * memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
   * modified for this specific `EventEmitter` instance. The value can be set to
   * `Infinity` (or `0`) to indicate an unlimited number of listeners.
   *
   * Returns a reference to the `EventEmitter`, so that calls can be chained.
   */
  setMaxListeners(n: number): this

  /**
   * Returns the current max listener value for the `EventEmitter` which is either
   * set by `emitter.setMaxListeners(n)` or defaults to {@link defaultMaxListeners}.
   */
  getMaxListeners(): number

  /**
   * Synchronously calls each of the listeners registered for the event named
   * `eventName`, in the order they were registered, passing the supplied arguments
   * to each.
   *
   * @returns `true` if the event had listeners, `false` otherwise.
   */
  emit(eventName: string | symbol, ...args: any[]): boolean
}

/**
 * ShowPreferenceOptions
 */
export type ShowPreferenceOptions = {
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
  vendors?: string[] // list of vendor ids for which the user has opted out

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
  migrationOption?: MigrationOption // @deprecated
  purposes: { [key: string]: PurposeAllowedLegalBasis }
  vendors?: string[] // list of vendor ids for which the user has opted out
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
