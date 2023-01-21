var menuButton: any;

const wallet = {
  selector: ".step-wallet",
  content: "wallet",
};
const menu = {
  selector: ".step-menu",
  content: "menu",
  action: (node: any) => (menuButton = node),
};
const minProfile = {
  selector: ".step-min-profile",
  content: "min-profile",
  action: () => menuButton.click(),
};
const dark = {
  selector: ".step-dark-mode",
  content: "dark-mode",
};
const setting = {
  selector: ".step-setting",
  content: "setting",
};

const steps: any = [wallet, menu, minProfile, dark, setting];

export default steps;
