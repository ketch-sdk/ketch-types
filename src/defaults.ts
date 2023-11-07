import {
  BannerButtonAction,
  BannerContainerLayout,
  BannerContainerPosition,
  BannerContainerSize,
  BannerExperienceConfig,
  BannerThemeConfig, ExitButtonPosition,
  ExperienceConfigObject, FormFieldStyle,
  ItemStyle,
  ListLayout,
  ModalContainerPosition, ModalExperienceConfig,
  ModalThemeConfig, PreferenceExperienceConfig, PreferenceThemeConfig, RightsFormMode, SubscriptionListStyle,
  SwitchButtonDisplay,
  ThemeConfigObject
} from "./index";

const defaultBannerThemeConfig: BannerThemeConfig = {
  container: {
    backdrop: {
      visible: false,
      background: {
        color: '',
        opacity: 0,
      },
      disableContentInteractions: false,
    },
    background: {
      color: '',
      opacity: 0,
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
      opacity: 0,
    },
    title: {
      color: '',
      opacity: 0,
      underline: false,
    },
    returnButton: {
      background: {
        color: '',
        opacity: 0,
      },
      icon: {
        color: '',
        opacity: 0,
      },
      cornerRadius: 0,
    },
  },
  description: {
    link: {
      color: '',
      opacity: 0,
      underline: false,
    },
    text: {
      color: '',
      opacity: 0,
      underline: false,
    },
  },
  buttons: {
    primary: {
      style: ItemStyle.Filled,
      background: {
        color: '',
        opacity: 0,
      },
      text: {
        color: '',
        opacity: 0,
        underline: false,
      },
      icon: {
        color: '',
        opacity: 0,
      },
      cornerRadius: 0,
    },
    secondary: {
      style: ItemStyle.Filled,
      background: {
        color: '',
        opacity: 0,
      },
      text: {
        color: '',
        opacity: 0,
        underline: false,
      },
      icon: {
        color: '',
        opacity: 0,
      },
      cornerRadius: 0,
    },
    tertiary: {
      style: ItemStyle.Filled,
      background: {
        color: '',
        opacity: 0,
      },
      text: {
        color: '',
        opacity: 0,
        underline: false,
      },
      icon: {
        color: '',
        opacity: 0,
      },
      cornerRadius: 0,
    },
  },
};

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
    actionButtonText: '',
  },
};

const defaultModalThemeConfig: ModalThemeConfig = {
  container: {
    position: ModalContainerPosition.Center,
    font: '',
    background: {
      color: '',
      opacity: 0
    },
    cornerRadius: 0,
    backdrop: {
      visible: false,
      background: {
        color: '',
        opacity: 0
      },
      disableContentInteractions: false
    }
  },
  header: {
    background: {
      color: '',
      opacity: 0
    },
    title: {
      color: '',
      opacity: 0,
      underline: false
    },
    returnButton: {
      background: {
        color: '',
        opacity: 0
      },
      icon: {
        color: '',
        opacity: 0
      },
      cornerRadius: 0
    }
  },
  description: {
    title: {
      color: '',
      opacity: 0,
      underline: false
    },
    text: {
      color: '',
      opacity: 0,
      underline: false
    },
    link: {
      color: '',
      opacity: 0,
      underline: false
    }
  },
  listHeader: {
    title: {
      color: '',
      opacity: 0,
      underline: false
    },
    acceptAllButton: {
      style: ItemStyle.Filled,
      background: {
        color: '',
        opacity: 0
      },
      text: {
        color: '',
        opacity: 0,
        underline: false
      },
      icon: {
        color: '',
        opacity: 0
      },
      cornerRadius: 0
    },
    rejectAllButton: {
      style: ItemStyle.Filled,
      background: {
        color: '',
        opacity: 0
      },
      text: {
        color: '',
        opacity: 0,
        underline: false
      },
      icon: {
        color: '',
        opacity: 0
      },
      cornerRadius: 0
    }
  },
  purposeList: {
    listItems: {
      layout: ListLayout.Expandable,
      style: ItemStyle.Filled,
      purposeFill: {
        color: '',
        opacity: 0
      },
      purposeContent: {
        color: '',
        opacity: 0
      },
      purposeLinks: {
        color: '',
        opacity: 0
      },
      arrowIcon: {
        color: '',
        opacity: 0
      },
      purposeCornerRadius: 0
    },
    switchButtons: {
      on: {
        background: {
          color: '',
          opacity: 0
        },
        text: {
          color: '',
          opacity: 0,
          underline: false
        }
      },
      off: {
        background: {
          color: '',
          opacity: 0
        },
        text: {
          color: '',
          opacity: 0,
          underline: false
        }
      }
    }
  },
  footer: {
    background: {
      color: '',
      opacity: 0
    },
    actionButton: {
      style: ItemStyle.Filled,
      background: {
        color: '',
        opacity: 0
      },
      text: {
        color: '',
        opacity: 0,
        underline: false
      },
      icon: {
        color: '',
        opacity: 0
      },
      cornerRadius: 0
    }
  }
};

const defaultModalExperienceConfig: ModalExperienceConfig = {
  header: {
    visible: false,
    closeButtonVisible: false,
    title: ''
  },
  description: {
    title: {
      visible: false,
      text: ''
    },
    text: ''
  },
  listHeader: {
    visible: false,
    useDefault: false,
    text: ''
  },
  purposeList: {
    legalBasisVisible: false,
    switchButtonLabels: {
      visible: false,
      display: SwitchButtonDisplay.Always,
      useDefaultText: false,
      onText: '',
      offText: ''
    }
  },
  footer: {
    ketchBadgeVisible: false,
    gpcBadgeVisible: false,
    actionButtonText: ''
  }
};

const defaultPreferenceThemeConfig: PreferenceThemeConfig = {
  welcome: {
    container: {
      exitPosition: ExitButtonPosition.topRight,
      font: '',
      background: { color: '', opacity: 0 }
    },
    header: {
      background: { color: '', opacity: 0 },
      title: { color: '', opacity: 0, underline: false },
      logo: { name: '', url: '' }
    },
    navigation: {
      layout: {
        background: { color: '', opacity: 0 },
        cornerRadius: 0,
        item: {
          unselectedBackground: { color: '', opacity: 0 },
          unselectedText: { color: '', opacity: 0, underline: false },
          selectedBackground: { color: '', opacity: 0 },
          selectedText: { color: '', opacity: 0, underline: false },
          cornerRadius: 0
        }
      },
      iconsVisible: false,
      icons: {
        welcome: { name: '', url: '' },
        privacyPolicy: { name: '', url: '' },
        purposes: { name: '', url: '' },
        subscriptions: { name: '', url: '' },
        requests: { name: '', url: '' }
      }
    },
    exitButton: {
      background: { color: '', opacity: 0 },
      text: { color: '', opacity: 0, underline: false },
      iconVisible: false,
      useDefaultIcon: false,
      iconColor: { color: '', opacity: 0 },
      icon: { name: '', url: '' }
    },
    heroBanner: {
      visible: false,
      image: { name: '', url: '' }
    },
    welcomeMsg: {
      title: { color: '', opacity: 0, underline: false },
      subtitle: { color: '', opacity: 0, underline: false },
      link: { color: '', opacity: 0, underline: false }
    },
    quickLinks: {
      title: { color: '', opacity: 0, underline: false },
      link: { color: '', opacity: 0, underline: false },
      showArrows: false
    },
    about: {
      title: { color: '', opacity: 0, underline: false },
      text: { color: '', opacity: 0, underline: false },
      link: { color: '', opacity: 0, underline: false }
    }
  },
  privacyPolicy: {
    text: { color: '', opacity: 0, underline: false },
    link: { color: '', opacity: 0, underline: false }
  },
  purposes: {
    header: {
      title: { color: '', opacity: 0, underline: false },
      description: { color: '', opacity: 0, underline: false },
      link: { color: '', opacity: 0, underline: false }
    },
    listHeader: {
      title: { color: '', opacity: 0, underline: false },
      acceptAllButton: {
        style: ItemStyle.Filled,
        background: { color: '', opacity: 0 },
        text: { color: '', opacity: 0, underline: false },
        icon: { color: '', opacity: 0 },
        cornerRadius: 0
      },
      rejectAllButton: {
        style: ItemStyle.Filled,
        background: { color: '', opacity: 0 },
        text: { color: '', opacity: 0, underline: false },
        icon: { color: '', opacity: 0 },
        cornerRadius: 0
      }
    },
    list: {
      listItems: {
        layout: ListLayout.Expandable,
        style: ItemStyle.Filled,
        purposeFill: { color: '', opacity: 0 },
        purposeContent: { color: '', opacity: 0 },
        purposeLinks: { color: '', opacity: 0 },
        arrowIcon: { color: '', opacity: 0 },
        purposeCornerRadius: 0
      },
      switchButtons: {
        on: {
          background: { color: '', opacity: 0 },
          text: { color: '', opacity: 0, underline: false }
        },
        off: {
          background: { color: '', opacity: 0 },
          text: { color: '', opacity: 0, underline: false }
        }
      }
    },
    footer: {
      background: { color: '', opacity: 0 },
      actionButton: {
        style: ItemStyle.Filled,
        background: { color: '', opacity: 0 },
        text: { color: '', opacity: 0, underline: false },
        icon: { color: '', opacity: 0 },
        cornerRadius: 0
      }
    }
  },
  subscriptions: {
    header: {
      title: { color: '', opacity: 0, underline: false },
      description: { color: '', opacity: 0, underline: false },
      link: { color: '', opacity: 0, underline: false }
    },
    globalControl: {
      background: { color: '', opacity: 0 },
      text: { color: '', opacity: 0 },
      cornerRadius: 0,
      switchButton: {
        on: {
          background: { color: '', opacity: 0 },
          text: { color: '', opacity: 0, underline: false }
        },
        off: {
          background: { color: '', opacity: 0 },
          text: { color: '', opacity: 0, underline: false }
        }
      }
    },
    list: {
      layout: {
        style: SubscriptionListStyle.Filled,
        background: { color: '', opacity: 0 },
        text: { color: '', opacity: 0, underline: false },
        link: { color: '', opacity: 0, underline: false },
        cornerRadius: 0
      },
      switchButton: {
        on: {
          background: { color: '', opacity: 0 },
          text: { color: '', opacity: 0, underline: false }
        },
        off: {
          background: { color: '', opacity: 0 },
          text: { color: '', opacity: 0, underline: false }
        }
      },
      checkbox: {
        selected: {
          background: { color: '', opacity: 0 },
          label: { color: '', opacity: 0 }
        },
        unselected: {
          background: { color: '', opacity: 0 },
          label: { color: '', opacity: 0 }
        }
      }
    },
    footer: {
      background: { color: '', opacity: 0 },
      actionButton: {
        style: ItemStyle.Filled,
        background: { color: '', opacity: 0 },
        text: { color: '', opacity: 0, underline: false },
        icon: { color: '', opacity: 0 },
        cornerRadius: 0
      }
    }
  },
  requests: {
    home: {
      header: {
        title: { color: '', opacity: 0, underline: false },
        description: { color: '', opacity: 0, underline: false },
        link: { color: '', opacity: 0, underline: false },
      },
      dsrPortalLink: {
        title: { color: '', opacity: 0, underline: false },
        description: { color: '', opacity: 0, underline: false },
        arrowIcon: { color: '', opacity: 0 },
        background: { color: '', opacity: 0 },
        cornerRadius: 0,
      },
      rightsList: {
        title: { color: '', opacity: 0, underline: false },
        item: {
          title: { color: '', opacity: 0, underline: false },
          subtitle: { color: '', opacity: 0, underline: false },
          arrowIcon: { color: '', opacity: 0 },
          background: { color: '', opacity: 0 },
          cornerRadius: 0,
        }
      },
    },
    rightForm: {
      header: {
        background: { color: '', opacity: 0 },
        title: { color: '', opacity: 0, underline: false },
        returnButton: {
          background: { color: '', opacity: 0 },
          icon: { color: '', opacity: 0 },
          cornerRadius: 0
        }
      },
      form: {
        dividers: {
          title: { color: '', opacity: 0, underline: false },
          subtitle: { color: '', opacity: 0, underline: false },
        },
        fields: {
          style: FormFieldStyle.Box,
          active: {
            background: { color: '', opacity: 0 },
            outline: { color: '', opacity: 0 },
          },
          inactive: {
            background: { color: '', opacity: 0 },
            outline: { color: '', opacity: 0 },
          },
          cornerRadius: 0,
          fieldLabel: { color: '', opacity: 0, underline: false },
          hintText: { color: '', opacity: 0, underline: false },
          inputText: { color: '', opacity: 0, underline: false },
        },
        checkboxes: {
          selected: {
            background: { color: '', opacity: 0 },
            label: { color: '', opacity: 0 },
          },
          unselected: {
            background: { color: '', opacity: 0 },
            label: { color: '', opacity: 0 },
          },
        },
        actionButton: {
          style: ItemStyle.Filled,
          background: { color: '', opacity: 0 },
          text: { color: '', opacity: 0, underline: false },
          icon: { color: '', opacity: 0 },
          cornerRadius: 0,
        },
      },
    },
    submitted: {
      header: {
        background: { color: '', opacity: 0 },
        title: { color: '', opacity: 0, underline: false },
        returnButton: {
          background: { color: '', opacity: 0 },
          icon: { color: '', opacity: 0 },
          cornerRadius: 0,
        },
      },
      summary: {
        bannerVisible: false,
        bannerImage: { name: '', url: '' },
        title: { color: '', opacity: 0, underline: false },
        description: { color: '', opacity: 0, underline: false },
      },
    }
  }
};

const defaultPreferenceExperienceConfig: PreferenceExperienceConfig = {
  welcome: {
    header: {
      title: '',
    },
    navigation: {
      welcomeTitle: '',
      privacyPolicyTitle: '',
      purposesTitle: '',
      subscriptionsTitle: '',
      requestsTitle: '',
    },
    footer: {
      ketchBadgeVisible: false,
      gpcBadgeVisible: false,
      actionButtonText: '',
    },
    welcomeMsg: {
      visible: false,
      title: '',
      subtitle: '',
    },
    quickLinks: {
      visible: false,
      links: [],
    },
    about: {
      visible: false,
      title: '',
      description: '',
    },
  },
  privacyPolicy: {
    visible: false,
    policyDocumentId: '',
  },
  purposes: {
    header: {
      description: '',
      title: {
        visible: false,
        text: '',
      },
    },
    listHeader: {
      titleVisible: false,
      useDefaultTitle: '',
      title: '',
    },
    list: {
      legalBasisVisible: false,
      switchButtonLabels: {
        visible: false,
        display: SwitchButtonDisplay.Always,
        useDefaultText: false,
        onText: '',
        offText: '',
      },
    },
    actionButtonText: '',
  },
  subscriptions: {
    header: {
      description: '',
      title: {
        visible: false,
        text: '',
      },
    },
    globalControlSwitchLabel: {
      visible: false,
      display: SwitchButtonDisplay.Always,
      useDefaultText: false,
      onText: '',
      offText: '',
    },
    listSwitchLabels: {
      visible: false,
      display: SwitchButtonDisplay.Always,
      useDefaultText: false,
      onText: '',
      offText: '',
    },
    actionButtonText: '',
  },
  requests: {
    home: {
      header: {
        description: '',
        title: {
          visible: false,
          text: '',
        },
      },
      dsrPortalLink: {
        title: '',
        subtitle: '',
      },
      rights: {
        title: {
          useDefault: false,
          title: '',
        },
        forms: {
          mode: RightsFormMode.Single,
          singleFormId: '',
          order: [],
          customFormMappings: [],
        },
      },
    },
    rightForm: {
      enableRecaptcha: false,
    },
    submitted: {
      title: '',
      subtitle: '',
      description: '',
    },
  },
};

export const defaultThemeConfig: ThemeConfigObject = {
  banner: defaultBannerThemeConfig,
  modal: defaultModalThemeConfig,
  preference: defaultPreferenceThemeConfig,
}

export const defaultExperienceConfig: {[locale: string]: ExperienceConfigObject} = {
  en: {
    banner: defaultBannerExperienceConfig,
    modal: defaultModalExperienceConfig,
    preference: defaultPreferenceExperienceConfig
  }
  // TODO:JB - Other locales here
}
