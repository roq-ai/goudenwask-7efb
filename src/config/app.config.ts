interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Manager'],
  tenantName: 'Company',
  applicationName: 'GoudenWask',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage car wash data', 'Manage new table data', 'Manage user data', 'Manage company data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/04292fad-a5a2-4bce-b80e-37525648e9fd',
};
