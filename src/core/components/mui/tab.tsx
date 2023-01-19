import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

import { PublicContext } from "../../context";

interface TabsHeaderProps {
  children: React.ReactNode;
  value: any;
  setValue: any;
}

export function TabsHeader(props: TabsHeaderProps) {
  const { children, value, setValue } = props;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {children}
      </Tabs>
    </Box>
  );
}

interface TabItemProps {
  label: string;
  icon: any;
  index: number;
}

export function TabLabel(props: TabItemProps) {
  const { label, icon, index, ...other } = props;
  const { publicCtx }: { publicCtx: any } = React.useContext(PublicContext);

  return (
    <Tab
      id={`simple-tab-${index}`}
      label={label}
      icon={icon}
      aria-controls={`simple-tabpanel-${index}`}
      iconPosition={publicCtx.device.isMobile ? "top" : "start"}
      {...other}
    />
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}
