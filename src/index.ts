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
  SET_SUBSCRIPTIONS = 'setSubscriptions',
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
 * SubscriptionControlImpactType
 *
 * @enum
 */
export enum SubscriptionControlImpactType {
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
 * Configuration
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
   * Get Subscription configuration V2
   */
  getSubscriptionConfigurationV2(): Promise<SubscriptionConfigurationV2>

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
}

export interface SubscriptionControlV2 {
  /**
   * The code of the Subscription Control
   */
  code: string

  /**
   *  The impactType of the Subscription Control
   */
  description: string

  /**
   *  The impactType of the Subscription Control
   */
  impactType: SubscriptionControlImpactType

  /**
   *  The name of the Subscription Control
   */
  name: string

  /**
   *  The positionType of the Subscription Control
   */
  positionType: SubscriptionControlPositionType

  /**
   *  The switchOffText of the Subscription Control
   */
  switchOffText: string

  /**
   *  The switchOnText of the Subscription Control
   */
  switchOnText: string

  /**
   *  The switchTextRenderLogic of the Subscription Control
   */
  switchTextRenderLogic: SwitchTextRenderLogic
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
}

/**
 * GetSubscriptionConfigurationV2Request
 */
export interface GetSubscriptionConfigurationV2Request {
  organizationCode: string
  propertyCode: string
  languageCode: string
  experienceCode: string
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
 * SubscriptionConfigurationV2
 */
export interface SubscriptionConfigurationV2 {
  language: string
  organization: Organization
  property: Property
  identities: { [key: string]: Identity }
  contactMethods: { [key: string]: ContactMethod }
  controls: SubscriptionControlV2[]
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

/** Banner/Modal Text */

export interface TextThemeConfig {
  color?: string
  opacity?: number
  underline?: boolean
}

/** Banner/Modal Color */

export interface ColorThemeConfig {
  color?: string
  opacity?: number
}

/** Banner/Modal Backdrop */

export interface BackdropThemeConfig {
  visible?: boolean
  background?: ColorThemeConfig
  disableContentInteractions?: boolean
}

/** Banner/Modal Close Button */
export interface ReturnButtonThemeConfig {
  background?: ColorThemeConfig
  icon?: ColorThemeConfig
  cornerRadius?: number
}

/** Banner/Modal Header */

export interface HeaderThemeConfig {
  background?: ColorThemeConfig
  title?: TextThemeConfig
  returnButton?: ReturnButtonThemeConfig // This is either a close or back button
}

/** Action Button */

export enum ItemStyle {
  Filled = 'filled',
  Outlined = 'outlined',
}

export interface ActionButtonThemeConfig {
  style?: ItemStyle
  background?: ColorThemeConfig
  text?: TextThemeConfig
  icon?: ColorThemeConfig
  cornerRadius?: number
}

/** Footer */

export interface FooterThemeConfig {
  background?: ColorThemeConfig
  actionButton?: ActionButtonThemeConfig
}

/** Purpose List Header */

export interface PurposeListHeaderThemeConfig {
  title?: TextThemeConfig
  acceptAllButton?: ActionButtonThemeConfig
  rejectAllButton?: ActionButtonThemeConfig
}

/** Purpose List */

export enum ListLayout {
  Expandable = 'expandable',
  Cards = 'cards',
}

export interface ListItemsThemeConfig {
  layout?: ListLayout
  style?: ItemStyle
  purposeFill?: ColorThemeConfig
  purposeContent?: ColorThemeConfig
  purposeLinks?: ColorThemeConfig
  arrowIcon?: ColorThemeConfig
  purposeCornerRadius?: number
}

export interface SwitchButtonThemeConfig {
  background?: ColorThemeConfig
  text?: TextThemeConfig
}

export interface SwitchButtonsThemeConfig {
  on?: SwitchButtonThemeConfig
  off?: SwitchButtonThemeConfig
}

export interface PurposeListThemeConfig {
  listItems?: ListItemsThemeConfig
  switchButtons?: SwitchButtonsThemeConfig
}

/** Page Text Theme */
export interface PageTextThemeConfig {
  title?: TextThemeConfig
  description?: TextThemeConfig
  link?: TextThemeConfig
}

/** Checkboxes Theme */

export interface CheckboxThemeConfig {
  background?: ColorThemeConfig
  label?: ColorThemeConfig
}

export interface CheckboxesThemeConfig {
  selected?: CheckboxThemeConfig
  unselected?: CheckboxThemeConfig
}

export interface ImageThemeConfig {
  name?: string
  url?: string
}

/** Banner Config */

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

/** Banner Container */

export interface BannerContainerThemeConfig {
  backdrop?: BackdropThemeConfig
  background?: ColorThemeConfig
  cornerRadius?: number
  position?: BannerContainerPosition
  layout?: BannerContainerLayout
  size?: BannerContainerSize
  font?: string
}

/** Banner Description */
export interface BannerDescriptionThemeConfig {
  link?: TextThemeConfig
  text?: TextThemeConfig
}

/** Banner Buttons Theme Config - Rightmost === primary */
export interface BannerButtonsThemeConfig {
  primary?: ActionButtonThemeConfig
  secondary?: ActionButtonThemeConfig
  tertiary?: ActionButtonThemeConfig
}

/** Banner Theme Config */

export interface BannerThemeConfig {
  container?: BannerContainerThemeConfig
  header?: HeaderThemeConfig
  description?: BannerDescriptionThemeConfig
  buttons?: BannerButtonsThemeConfig
}

/** Modal Theme Config */

export enum ModalContainerPosition {
  Center = 'center',
  Left = 'left',
  Right = 'right',
}

export interface ModalContainerThemeConfig {
  position?: ModalContainerPosition
  font?: string
  background?: ColorThemeConfig
  cornerRadius?: number
  backdrop?: BackdropThemeConfig
}

export interface ModalDescriptionThemeConfig {
  title?: TextThemeConfig
  text?: TextThemeConfig
  link?: TextThemeConfig
}

export interface ModalThemeConfig {
  container?: ModalContainerThemeConfig
  header?: HeaderThemeConfig
  description?: ModalDescriptionThemeConfig
  listHeader?: PurposeListHeaderThemeConfig
  purposeList?: PurposeListThemeConfig
  footer?: FooterThemeConfig
}

/** Preferences - Welcome Theme Config */

export enum ExitButtonPosition {
  topRight = 'topRight',
  bottomLeft = 'bottomLeft',
}

export interface WelcomeTabContainerThemeConfig {
  exitPosition?: ExitButtonPosition
  font?: string
  background?: ColorThemeConfig
}

export interface WelcomeTabHeaderThemeConfig {
  background?: ColorThemeConfig
  title?: TextThemeConfig
  logo?: ImageThemeConfig
}

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

export interface WelcomeTabNavigationThemeConfig {
  layout?: NavigationLayoutThemeConfig
  iconsVisible?: boolean
  icons?: NavigationIconsThemeConfig
}

export interface WelcomeTabExitButtonThemeConfig {
  background?: ColorThemeConfig
  text?: TextThemeConfig
  iconVisible?: boolean
  useDefaultIcon?: boolean
  iconColor?: ColorThemeConfig
  icon?: ImageThemeConfig
}

export interface WelcomeTabHeroBannerThemeConfig {
  visible?: boolean
  image?: ImageThemeConfig
}

export interface WelcomeTabWelcomeMsgThemeConfig {
  title?: TextThemeConfig
  subtitle?: TextThemeConfig
  link?: TextThemeConfig
}

export interface WelcomeTabQuickLinksThemeConfig {
  title?: TextThemeConfig
  link?: TextThemeConfig
  showArrows?: boolean
}

export interface WelcomeTabAboutThemeConfig {
  title?: TextThemeConfig
  text?: TextThemeConfig
  link?: TextThemeConfig
}

export interface PreferenceWelcomeTabThemeConfig {
  container?: WelcomeTabContainerThemeConfig
  header?: WelcomeTabHeaderThemeConfig
  navigation?: WelcomeTabNavigationThemeConfig
  exitButton?: WelcomeTabExitButtonThemeConfig
  heroBanner?: WelcomeTabHeroBannerThemeConfig
  welcomeMsg?: WelcomeTabWelcomeMsgThemeConfig
  quickLinks?: WelcomeTabQuickLinksThemeConfig
  about?: WelcomeTabAboutThemeConfig
}

/** Preferences - Privacy Policy Theme Config */
export interface PreferencePrivacyPolicyTabThemeConfig {
  text?: TextThemeConfig
  link?: TextThemeConfig
}

/** Preferences - Purposes Theme Config */

export interface PurposesTabHeaderThemeConfig {
  title?: TextThemeConfig
  description?: TextThemeConfig
  link?: TextThemeConfig
}

export interface PreferencePurposesTabThemeConfig {
  header?: PageTextThemeConfig
  listHeader?: PurposeListHeaderThemeConfig
  list?: PurposeListThemeConfig
  footer?: FooterThemeConfig
}

/** Preferences - Subscriptions Theme Config */

export enum SubscriptionListStyle {
  Filled = 'filled',
  Underlined = 'underlined',
}

export interface SubscriptionsTabGlobalControlThemeConfig {
  background?: ColorThemeConfig
  text?: ColorThemeConfig
  cornerRadius?: number
  switchButton?: SwitchButtonsThemeConfig
}

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

export interface PreferenceSubscriptionsTabThemeConfig {
  header?: PageTextThemeConfig
  globalControl?: SubscriptionsTabGlobalControlThemeConfig
  list?: SubscriptionsTabListThemeConfig
  footer?: FooterThemeConfig
}

/** Preferences - Requests Theme Config */

export enum FormFieldStyle {
  Box = 'box',
  Underline = 'underline',
}

export interface RequestsTabDsrLinkThemeConfig {
  title?: TextThemeConfig
  description?: TextThemeConfig
  arrowIcon?: ColorThemeConfig
  background?: ColorThemeConfig
  cornerRadius?: number
}

export interface RightsListItemThemeConfig {
  title?: TextThemeConfig
  subtitle?: TextThemeConfig
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
  cornerRadius?: number
  fieldLabel?: TextThemeConfig
  hintText?: TextThemeConfig
  inputText?: TextThemeConfig
}

export interface RightFormThemeConfig {
  dividers?: FormDividersThemeConfig
  fields?: FormFieldsThemeConfig
  checkboxes?: CheckboxesThemeConfig
  actionButton?: ActionButtonThemeConfig
}

export interface RequestsTabRightFormThemeConfig {
  header?: HeaderThemeConfig
  form?: RightFormThemeConfig
}

export interface SubmittedRequestThemeConfig {
  bannerVisible?: boolean
  bannerImage?: ImageThemeConfig
  title?: TextThemeConfig
  description?: TextThemeConfig
}

export interface RequestsTabSubmittedThemeConfig {
  header?: HeaderThemeConfig
  summary?: SubmittedRequestThemeConfig
}

export interface PreferenceRequestsTabThemeConfig {
  home?: RequestsTabHomeThemeConfig
  rightForm?: RequestsTabRightFormThemeConfig
  submitted?: RequestsTabSubmittedThemeConfig
}

/** Preferences Theme Config */

export interface PreferenceThemeConfig {
  welcome?: PreferenceWelcomeTabThemeConfig
  privacyPolicy?: PreferencePrivacyPolicyTabThemeConfig
  purposes?: PreferencePurposesTabThemeConfig
  subscriptions?: PreferenceSubscriptionsTabThemeConfig
  requests?: PreferenceRequestsTabThemeConfig
}

export interface ThemeConfig {
  banner?: BannerThemeConfig
  modal?: ModalThemeConfig
  preference?: PreferenceThemeConfig
}

/**
 * Experience V2 Layout Config
 */

/** Shared Experience Layout Config Entities */

/** Banner/Modal Header */

export interface HeaderExperienceLayoutConfig {
  visible?: boolean
  closeButtonVisible?: boolean
}

/** Banner/Modal Footer */

export interface FooterExperienceLayoutConfig {
  ketchBadgeVisible?: boolean
  gpcBadgeVisible?: boolean
}

/** Switch Buttons */

export enum SwitchButtonDisplay {
  Always = 'always',
  WhenLegalBasisDiffers = 'whenLegalBasisDiffers',
}

export interface SwitchButtonsExperienceLayoutConfig {
  visible?: boolean
  display?: SwitchButtonDisplay
  useDefaultText?: boolean
}

/** Text Block - A block of text with optional title */

export interface TextBlockTitleExperienceLayoutConfig {
  visible?: boolean
}

export interface TextBlockExperienceLayoutConfig {
  title?: TextBlockTitleExperienceLayoutConfig
}

export interface PreferenceTabHeaderExperienceLayoutConfig {
  title?: TextBlockTitleExperienceLayoutConfig
}

/** Banner Experience Layout Config */

export enum BannerButtonAction {
  SaveCurrentState = 'saveCurrentState',
  AcceptAll = 'acceptAll',
  OpenModal = 'openModal',
  OpenPreferences = 'openPreferences',
  RejectAll = 'rejectAll',
}

/** Banner Action Button */
export interface BannerActionButtonExperienceLayoutConfig {
  visible?: boolean
  action?: BannerButtonAction
}

/** Banner Buttons Experience Layout Config - Rightmost === primary */
export interface BannerButtonsExperienceLayoutConfig {
  primary?: BannerActionButtonExperienceLayoutConfig
  secondary?: BannerActionButtonExperienceLayoutConfig
  tertiary?: BannerActionButtonExperienceLayoutConfig
  close?: boolean
}

export interface BannerExperienceLayoutConfig {
  header?: HeaderExperienceLayoutConfig
  buttons?: BannerButtonsExperienceLayoutConfig
  footer?: FooterExperienceLayoutConfig
}

/** Modal Experience Layout Config */

export interface ModalListHeaderExperienceLayoutConfig {
  visible?: boolean
  useDefault?: boolean
}

export interface ModalPurposeListExperienceLayoutConfig {
  legalBasisVisible?: boolean
  switchButtonLabels?: SwitchButtonsExperienceLayoutConfig
}

export interface ModalExperienceLayoutConfig {
  header?: HeaderExperienceLayoutConfig
  description?: TextBlockExperienceLayoutConfig
  listHeader?: ModalListHeaderExperienceLayoutConfig
  purposeList?: ModalPurposeListExperienceLayoutConfig
  footer?: FooterExperienceLayoutConfig
}

/** Preferences - Welcome Experience Layout Config */

export enum QuickLinkAction {
  OpenUrl = 'openUrl',
  OpenPage = 'openPage',
}

export enum PreferenceCenterPage {
  Welcome = 'welcome',
  PrivacyPolicy = 'privacyPolicy',
  Purpose = 'purpose',
  Subscriptions = 'subscriptions',
  Requests = 'requests',
  RightForm = 'rightForm',
  Summary = 'summary',
}

export interface WelcomeTabWelcomeMsgExperienceLayoutConfig {
  visible?: boolean
}

export interface QuickLinkExperienceLayoutConfig {
  action?: QuickLinkAction
  page?: PreferenceCenterPage
  url?: string
}

export interface WelcomeTabQuickLinksExperienceLayoutConfig {
  visible?: boolean
  links?: QuickLinkExperienceLayoutConfig[]
}

export interface WelcomeTabAboutExperienceLayoutConfig {
  visible?: boolean
}

export interface PreferenceWelcomeTabExperienceLayoutConfig {
  footer?: FooterExperienceLayoutConfig
  welcomeMsg?: WelcomeTabWelcomeMsgExperienceLayoutConfig
  quickLinks?: WelcomeTabQuickLinksExperienceLayoutConfig
  about?: WelcomeTabAboutExperienceLayoutConfig
}

/** Preferences - Privacy Policy Experience Layout Config */
export interface PreferencePrivacyPolicyTabExperienceLayoutConfig {
  visible?: boolean
  policyDocumentId?: string
}

/** Preferences - Purposes Experience Layout Config */

export interface PurposesTabListHeaderExperienceLayoutConfig {
  titleVisible?: boolean
  useDefaultTitle?: boolean
}

export interface PurposesTabListExperienceLayoutConfig {
  legalBasisVisible?: boolean
  switchButtonLabels?: SwitchButtonsExperienceLayoutConfig
}

export interface PreferencePurposesTabExperienceLayoutConfig {
  header?: PreferenceTabHeaderExperienceLayoutConfig
  listHeader?: PurposesTabListHeaderExperienceLayoutConfig
  list?: PurposesTabListExperienceLayoutConfig
}

/** Preferences - Subscriptions Experience Layout Config */
export interface PreferenceSubscriptionsTabExperienceLayoutConfig {
  header?: PreferenceTabHeaderExperienceLayoutConfig
  globalControlSwitchLabel?: SwitchButtonsExperienceLayoutConfig
  listSwitchLabels?: SwitchButtonsExperienceLayoutConfig
}

/** Preferences - Requests Experience Layout Config */

export enum RightsFormMode {
  Single = 'single',
  Custom = 'custom',
}

export enum RequestType {
  AccessData = 'accessData',
  DeleteData = 'deleteData',
  RestrictProcessing = 'restrictProcessing',
  UpdateData = 'updateData',
}

export interface RightsTitleExperienceLayoutConfig {
  useDefault?: boolean
}

export interface RightFormMapping {
  rightCode?: string
  formId?: string
}

export interface CustomRequestMapping {
  requestType?: RequestType
  defaultFormId?: string
  rightMappings?: RightFormMapping[]
}

export interface RightsFormsExperienceLayoutConfig {
  mode?: RightsFormMode
  singleFormId?: string
  order?: RequestType[]
  customFormMappings?: CustomRequestMapping[]
}

export interface RequestsTabRightsExperienceLayoutConfig {
  title?: RightsTitleExperienceLayoutConfig
  forms?: RightsFormsExperienceLayoutConfig
}

export interface RequestsTabHomeExperienceLayoutConfig {
  header?: PreferenceTabHeaderExperienceLayoutConfig
  rights?: RequestsTabRightsExperienceLayoutConfig
}

export interface RequestsTabRightFormExperienceLayoutConfig {
  enableRecaptcha?: boolean
}

export interface PreferenceRequestsTabExperienceLayoutConfig {
  home?: RequestsTabHomeExperienceLayoutConfig
  rightForm?: RequestsTabRightFormExperienceLayoutConfig
}

export interface PreferenceExperienceLayoutConfig {
  welcome?: PreferenceWelcomeTabExperienceLayoutConfig
  privacyPolicy?: PreferencePrivacyPolicyTabExperienceLayoutConfig
  purposes?: PreferencePurposesTabExperienceLayoutConfig
  subscriptions?: PreferenceSubscriptionsTabExperienceLayoutConfig
  requests?: PreferenceRequestsTabExperienceLayoutConfig
}

/** Top level experience layout config object, one per locale */

export interface ExperienceLayoutConfig {
  banner?: BannerExperienceLayoutConfig
  modal?: ModalExperienceLayoutConfig
  preference?: PreferenceExperienceLayoutConfig
}

/**
 * Experience V2 Translation Config
 */

/** Shared Experience Translation Config Entities */

/** Banner/Modal Header */

export interface HeaderExperienceTranslationConfig {
  title?: string
}

/** Banner/Modal Footer */

export interface FooterExperienceTranslationConfig {
  actionButtonText?: string
}

/** Switch Buttons */

export interface SwitchButtonsExperienceTranslationConfig {
  onText?: string
  offText?: string
}

/** Text Block - A block of text with optional title */

export interface TextBlockTitleExperienceTranslationConfig {
  text?: string
}

export interface TextBlockExperienceTranslationConfig {
  title?: TextBlockTitleExperienceTranslationConfig
  text?: string
}

export interface PreferenceTabHeaderExperienceTranslationConfig {
  description?: string
  title?: TextBlockTitleExperienceTranslationConfig
}

/** Banner Experience Translation Config */

/** Banner Action Button */
export interface BannerActionButtonExperienceTranslationConfig {
  text?: string
}

/** Banner Buttons Experience Translation Config - Rightmost === primary */
export interface BannerButtonsExperienceTranslationConfig {
  primary?: BannerActionButtonExperienceTranslationConfig
  secondary?: BannerActionButtonExperienceTranslationConfig
  tertiary?: BannerActionButtonExperienceTranslationConfig
}

export interface BannerExperienceTranslationConfig {
  header?: HeaderExperienceTranslationConfig
  description?: string
  buttons?: BannerButtonsExperienceTranslationConfig
  footer?: FooterExperienceTranslationConfig
}

/** Modal Experience Translation Config */

export interface ModalListHeaderExperienceTranslationConfig {
  text?: string
}

export interface ModalPurposeListExperienceTranslationConfig {
  switchButtonLabels?: SwitchButtonsExperienceTranslationConfig
}

export interface ModalExperienceTranslationConfig {
  header?: HeaderExperienceTranslationConfig
  description?: TextBlockExperienceTranslationConfig
  listHeader?: ModalListHeaderExperienceTranslationConfig
  purposeList?: ModalPurposeListExperienceTranslationConfig
  footer?: FooterExperienceTranslationConfig
}

/** Preferences - Welcome Experience Translation Config */

export interface WelcomeTabHeaderExperienceTranslationConfig {
  title?: string
}

export interface WelcomeTabNavigationExperienceTranslationConfig {
  welcomeTitle?: string
  privacyPolicyTitle?: string
  purposesTitle?: string
  subscriptionsTitle?: string
  requestsTitle?: string
}

export interface WelcomeTabWelcomeMsgExperienceTranslationConfig {
  title?: string
  subtitle?: string
}

export interface QuickLinkExperienceTranslationConfig {
  text?: string
}

export interface WelcomeTabQuickLinksExperienceTranslationConfig {
  links?: QuickLinkExperienceTranslationConfig[]
}

export interface WelcomeTabAboutExperienceTranslationConfig {
  title?: string
  description?: string
}

export interface PreferenceWelcomeTabExperienceTranslationConfig {
  header?: WelcomeTabHeaderExperienceTranslationConfig
  navigation?: WelcomeTabNavigationExperienceTranslationConfig
  footer?: FooterExperienceTranslationConfig
  welcomeMsg?: WelcomeTabWelcomeMsgExperienceTranslationConfig
  quickLinks?: WelcomeTabQuickLinksExperienceTranslationConfig
  about?: WelcomeTabAboutExperienceTranslationConfig
}

/** Preferences - Purposes Experience Translation Config */

export interface PurposesTabListHeaderExperienceTranslationConfig {
  title?: string
}

export interface PurposesTabListExperienceTranslationConfig {
  switchButtonLabels?: SwitchButtonsExperienceTranslationConfig
}

export interface PreferencePurposesTabExperienceTranslationConfig {
  header?: PreferenceTabHeaderExperienceTranslationConfig
  listHeader?: PurposesTabListHeaderExperienceTranslationConfig
  list?: PurposesTabListExperienceTranslationConfig
  actionButtonText?: string
}

/** Preferences - Subscriptions Experience Translation Config */
export interface PreferenceSubscriptionsTabExperienceTranslationConfig {
  header?: PreferenceTabHeaderExperienceTranslationConfig
  globalControlSwitchLabel?: SwitchButtonsExperienceTranslationConfig
  listSwitchLabels?: SwitchButtonsExperienceTranslationConfig
  actionButtonText?: string
}

/** Preferences - Requests Experience Translation Config */

export interface RequestsTabDsrLinkExperienceTranslationConfig {
  title?: string
  subtitle?: string
}

export interface RightsTitleExperienceTranslationConfig {
  title?: string
}

export interface RequestsTabRightsExperienceTranslationConfig {
  title?: RightsTitleExperienceTranslationConfig
}

export interface RequestsTabHomeExperienceTranslationConfig {
  header?: PreferenceTabHeaderExperienceTranslationConfig
  dsrPortalLink?: RequestsTabDsrLinkExperienceTranslationConfig
  rights?: RequestsTabRightsExperienceTranslationConfig
}

export interface RequestsTabSubmittedExperienceTranslationConfig {
  title?: string
  subtitle?: string
  description?: string
}

export interface PreferenceRequestsTabExperienceTranslationConfig {
  home?: RequestsTabHomeExperienceTranslationConfig
  submitted?: RequestsTabSubmittedExperienceTranslationConfig
}

export interface PreferenceExperienceTranslationConfig {
  welcome?: PreferenceWelcomeTabExperienceTranslationConfig
  purposes?: PreferencePurposesTabExperienceTranslationConfig
  subscriptions?: PreferenceSubscriptionsTabExperienceTranslationConfig
  requests?: PreferenceRequestsTabExperienceTranslationConfig
}

/** Top level experience translation config objects, one per locale */

export interface ExperienceTranslationConfig {
  banner?: BannerExperienceTranslationConfig
  modal?: ModalExperienceTranslationConfig
  preference?: PreferenceExperienceTranslationConfig
}

/**
 * Experience V2 config
 */

export interface ExperienceConfig {
  layout?: ExperienceLayoutConfig
  translations?: { [locale: string]: ExperienceTranslationConfig }
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
