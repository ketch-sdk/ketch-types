/**
 * ExperienceFormField: Describes a form field in the user experience.
 */
export interface ExperienceFormField {
  id?: string
  required?: boolean
  label?: string
  hint?: string
  category?: FormFieldCategory
  type?: FormFieldType
  variant?: FormFieldVariant
  maxLength?: number
  name?: string
  width?: FormFieldWidth
  identitySpaceCode?: string
  options?: FormFieldDropdownOption[]
}

/**
 * FormFieldDropdownOption: Describes an option in a dropdown form field.
 */
export type FormFieldDropdownOption = {
  label?: string
  value?: string
}

/**
 * FormFieldWidth: Describes the width of the form field in Rights Form.
 *
 * @enum
 * @values UNSPECIFIED = width is unspecified
 *          HALF = half width
 *          FULL = full width
 */
export enum FormFieldWidth {
  UNSPECIFIED = 'unspecified',
  HALF = 'half',
  FULL = 'full',
}

/**
 * FormFieldCategory: Describes the category of the form field in Rights Form.
 *
 * @enum
 * @values UNSPECIFIED = category is unspecified
 *          DEFAULT = default field (ex: firstName, lastName, email etc.)
 *          CUSTOM = user created form field
 */
export enum FormFieldCategory {
  UNSPECIFIED = 'unspecified',
  DEFAULT = 'default',
  CUSTOM = 'custom',
}

/**
 * FormFieldType: Describes the type of the form field in Rights Form.
 *
 * @enum
 * @values UNSPECIFIED = type is unspecified
 *          TEXT = text field
 *          DROPDOWN = dropdown field
 *          CHECKBOX = checkbox field
 */
export enum FormFieldType {
  UNSPECIFIED = 'unspecified',
  TEXT = 'text',
  DROPDOWN = 'dropdown',
  CHECKBOX = 'checkbox',
  FILE = 'file',
}

/**
 * FormFieldVariant: Describes the variant of a text field in Rights Form.
 *
 * @enum
 * @values UNSPECIFIED = variant is unspecified
 *          INPUT = input variant
 *          TEXTAREA = textarea variant
 */
export enum FormFieldVariant {
  UNSPECIFIED = 'unspecified',
  INPUT = 'input',
  TEXTAREA = 'textarea',
}

/**
 * CanonicalRightForm: Represents the mapping between canonical right code and form template ID.
 */
export interface CanonicalRightForm {
  canonicalRightCode: string
  formTemplateID: string
}

/**
 * CustomRightForm: Represents the mapping between a custom right code and form template ID.
 */
export interface CustomRightForm {
  rightCode: string
  formTemplateID: string
}

/**
 * FormSection: Describes a section of a form, including its title, description and form fields.
 */
export interface FormSection {
  description: string
  formFields: ExperienceFormField[]
  title: string
  conditions?: Condition[]
}

export enum ConditionType {
  CONDITION_TYPE_UNSPECIFIED = 'CONDITION_TYPE_UNSPECIFIED',
  CONDITION_TYPE_FORM_FIELD = 'CONDITION_TYPE_FORM_FIELD',
  CONDITION_TYPE_DATA_SUBJECT = 'CONDITION_TYPE_DATA_SUBJECT',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

export enum Operator {
  OPERATOR_UNSPECIFIED = 'OPERATOR_UNSPECIFIED',
  OPERATOR_EQUALS = 'OPERATOR_EQUALS',
  OPERATOR_NOT_EQUALS = 'OPERATOR_NOT_EQUALS',
  OPERATOR_GREATER_THAN = 'OPERATOR_GREATER_THAN',
  OPERATOR_LESS_THAN = 'OPERATOR_LESS_THAN',
  OPERATOR_GREATER_THAN_OR_EQUALS = 'OPERATOR_GREATER_THAN_OR_EQUALS',
  OPERATOR_LESS_THAN_OR_EQUALS = 'OPERATOR_LESS_THAN_OR_EQUALS',
  OPERATOR_CONTAINS = 'OPERATOR_CONTAINS',
  OPERATOR_NOT_CONTAINS = 'OPERATOR_NOT_CONTAINS',
  OPERATOR_IN = 'OPERATOR_IN',
  OPERATOR_NOT_IN = 'OPERATOR_NOT_IN',
  OPERATOR_EMPTY = 'OPERATOR_EMPTY',
  OPERATOR_NOT_EMPTY = 'OPERATOR_NOT_EMPTY',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

export enum RelationalOperator {
  RELATIONAL_OPERATOR_UNSPECIFIED = 'RELATIONAL_OPERATOR_UNSPECIFIED',
  RELATIONAL_OPERATOR_AND = 'RELATIONAL_OPERATOR_AND',
  RELATIONAL_OPERATOR_OR = 'RELATIONAL_OPERATOR_OR',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

/**
 * Condition: Describes a condition for a form section.
 */
export interface Condition {
  type?: ConditionType
  fieldID?: string
  fieldCode?: string
  operator?: Operator
  values?: string[]
  order?: number
  relationalOperator?: RelationalOperator
}

/**
 * FormTemplate: Describes a form template including its id, code, name, title and sections.
 */
export interface FormTemplate {
  code: string
  id: string
  name: string
  sections: FormSection[]
  title: string
}
