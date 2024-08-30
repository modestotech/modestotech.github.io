import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({

    categories: {
        necessary: {
            enabled: true,  // this category is enabled by default
            readOnly: true  // this category cannot be disabled
        },
        analytics: {}
    },

    language: {
        default: 'en',
        translations: {
            en: {
                consentModal: {
                    title: 'We use cookies',
                    description: 'I have Google Analytics on the page to get some insights, so if it\'s that OK, do accept.',
                    acceptAllBtn: 'Accept',
                    acceptNecessaryBtn: 'Reject',
                    showPreferencesBtn: 'Manage Individual preferences'
                },
                preferencesModal: {
                    title: 'Manage cookie preferences',
                    acceptAllBtn: 'Accept',
                    acceptNecessaryBtn: 'Reject',
                    savePreferencesBtn: 'Accept current selection',
                    closeIconLabel: 'Close modal',
                    sections: [
                        {
                            title: 'Analytics',
                            description: 'These cookies collect information about how you use the website. All of the data is anonymized and cannot be used to identify you.',
                            linkedCategory: 'analytics'
                        }
                    ]
                }
            }
        }
    }
});