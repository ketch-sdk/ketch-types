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
