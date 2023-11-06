import {
  BannerButtonAction,
  BannerButtonStyle,
  BannerContainerLayout,
  BannerContainerPosition,
  BannerContainerSize,
  BannerExperienceConfig,
  BannerThemeConfig, ExperienceConfigObject,
  ItemStyle,
  ListLayout,
  ModalContainerPosition,
  ModalExperienceConfig,
  ModalThemeConfig,
  SwitchButtonDisplay, ThemeConfigObject
} from "./index";

const defaultBannerThemeConfig: BannerThemeConfig = {
  container: {
    backdrop: {
      visible: false,
      background: {
        color: '',
        opacity: 1,
      },
      disableContentInteractions: false,
    },
    background: {
      color: '',
      opacity: 1,
    },
    cornerRadius: 0,
    position: BannerContainerPosition.Bottom,
    layout: BannerContainerLayout.Horizontal,
    size: BannerContainerSize.Standard,
    font: '',
  },
  header: {
    background: {
      color: '',
      opacity: 1,
    },
    title: {
      color: '',
      opacity: 1,
      underline: false,
    },
    closeButton: {
      background: {
        color: '',
        opacity: 1,
      },
      icon: {
        color: '',
        opacity: 1,
      },
      cornerRadius: 0,
    },
  },
  description: {
    link: {
      color: '',
      opacity: 1,
      underline: false,
    },
    text: {
      color: '',
      opacity: 1,
      underline: false,
    },
  },
  buttons: {
    primary: {
      background: {
        color: '',
        opacity: 1,
      },
      text: {
        color: '',
        opacity: 1,
        underline: false,
      },
      cornerRadius: 0,
      style: BannerButtonStyle.Outlined,
    },
    secondary: {
      background: {
        color: '',
        opacity: 1,
      },
      text: {
        color: '',
        opacity: 1,
        underline: false,
      },
      cornerRadius: 0,
      style: BannerButtonStyle.Outlined,
    },
    tertiary: {
      background: {
        color: '',
        opacity: 1,
      },
      text: {
        color: '',
        opacity: 1,
        underline: false,
      },
      cornerRadius: 0,
      style: BannerButtonStyle.Outlined,
    },
  },
};

// Default object for BannerExperienceConfig
const defaultBannerExperienceConfig: BannerExperienceConfig = {
  header: {
    visible: false,
    closeButtonVisible: false,
    title: '',
  },
  description: '',
  buttons: {
    primary: {
      visible: false,
      text: '',
      action: BannerButtonAction.SaveCurrentState,
    },
    secondary: {
      visible: false,
      text: '',
      action: BannerButtonAction.SaveCurrentState,
    },
    tertiary: {
      visible: false,
      text: '',
      action: BannerButtonAction.SaveCurrentState,
    },
    close: false,
  },
  footer: {
    ketchBadgeVisible: false,
    gpcBadgeVisible: false,
    buttonText: '',
  },
};

// Default object for ModalThemeConfig
const defaultModalThemeConfig: ModalThemeConfig = {
  container: {
    position: ModalContainerPosition.Center,
    font: '',
    background: {
      color: '',
      opacity: 1,
    },
    cornerRadius: 0,
    backdrop: {
      visible: false,
      background: {
        color: '',
        opacity: 1,
      },
      disableContentInteractions: false,
    },
  },
  header: {
    background: {
      color: '',
      opacity: 1,
    },
    title: {
      color: '',
      opacity: 1,
      underline: false,
    },
    closeButton: {
      background: {
        color: '',
        opacity: 1,
      },
      icon: {
        color: '',
        opacity: 1,
      },
      cornerRadius: 0,
    },
  },
  description: {
    title: {
      color: '',
      opacity: 1,
      underline: false,
    },
    text: {
      color: '',
      opacity: 1,
      underline: false,
    },
    link: {
      color: '',
      opacity: 1,
      underline: false,
    },
  },
  listHeader: {
    title: {
      color: '',
      opacity: 1,
      underline: false,
    },
    acceptAllButton: {
      style: ItemStyle.Filled,
      background: {
        color: '',
        opacity: 1,
      },
      text: {
        color: '',
        opacity: 1,
        underline: false,
      },
      icon: {
        color: '',
        opacity: 1,
      },
      cornerRadius: 0,
    },
    rejectAllButton: {
      style: ItemStyle.Filled,
      background: {
        color: '',
        opacity: 1,
      },
      text: {
        color: '',
        opacity: 1,
        underline: false,
      },
      icon: {
        color: '',
        opacity: 1,
      },
      cornerRadius: 0,
    },
  },
  purposeList: {
    listItems: {
      layout: ListLayout.Expandable,
      style: ItemStyle.Filled,
      purposeFill: {
        color: '',
        opacity: 1,
      },
      purposeContent: {
        color: '',
        opacity: 1,
      },
      purposeLinks: {
        color: '',
        opacity: 1,
      },
      arrowIcon: {
        color: '',
        opacity: 1,
      },
      purposeCornerRadius: 0,
    },
    switchButtons: {
      on: {
        background: {
          color: '',
          opacity: 1,
        },
        text: {
          color: '',
          opacity: 1,
          underline: false,
        },
      },
      off: {
        background: {
          color: '',
          opacity: 1,
        },
        text: {
          color: '',
          opacity: 1,
          underline: false,
        },
      },
    },
  },
  footer: {
    background: {
      color: '',
      opacity: 1,
    },
    actionButton: {
      style: ItemStyle.Filled,
      background: {
        color: '',
        opacity: 1,
      },
      text: {
        color: '',
        opacity: 1,
        underline: false,
      },
      icon: {
        color: '',
        opacity: 1,
      },
      cornerRadius: 0,
    },
  },
};

// Default object for ModalExperienceConfig
const defaultModalExperienceConfig: ModalExperienceConfig = {
  header: {
    visible: false,
    closeButtonVisible: false,
    title: '',
  },
  description: {
    title: {
      visible: false,
      text: '',
    },
    text: '',
  },
  listHeader: {
    visible: false,
    useDefault: false,
    text: '',
  },
  purposeList: {
    legalBasisVisible: false,
    switchButtonLabels: {
      visible: false,
      display: SwitchButtonDisplay.Always,
      useDefaultText: false,
      onText: '',
      offText: '',
    },
  },
  footer: {
    ketchBadgeVisible: false,
    gpcBadgeVisible: false,
    buttonText: '',
  },
};

export const DefaultLanyardThemeConfig: ThemeConfigObject = {
  banner: defaultBannerThemeConfig,
  modal: defaultModalThemeConfig,
  preference: {}, // TODO: Preference default theme
}

export const DefaultLanyardExperienceConfig: {[locale: string]: ExperienceConfigObject} = {
  en: {
    banner: defaultBannerExperienceConfig,
    modal: defaultModalExperienceConfig,
    preference: {} // TODO: Preference default experience
  }
}
