// Mock data used by demo.stories.tsx — mirrors the OTB gallery pattern

export const AutoScrollTextFieldMockConfig = {
  meta: {
    name: 'MyOrg_NL_AutoScroll',
    label: 'Auto-Scroll Text Field',
    desc: 'A text field that auto-scrolls its overflow content from start to end after the user stops typing.',
  },
};

export const storyGetPConnect = () => ({
  getStateProps: () => ({
    value: '.AutoScrollText',
  }),
  getActionsApi: () => ({
    updateFieldValue: () => {
      /* nothing */
    },
    triggerFieldChange: () => {
      /* nothing */
    },
  }),
  ignoreSuggestion: () => {
    /* nothing */
  },
  acceptSuggestion: () => {
    /* nothing */
  },
  setInheritedProps: () => {
    /* nothing */
  },
  resolveConfigProps: () => {
    /* nothing */
  },
});

export const setPCore = () => {
  (window as any).PCore = {
    getComponentsRegistry: () => ({
      getLazyComponent: (f: string) => f,
    }),
    getEnvironmentInfo: () => ({
      getTimeZone: () => 'local',
    }),
  };
};