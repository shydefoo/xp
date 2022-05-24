import { Fragment, useEffect } from "react";

import { EuiFlexGroup, EuiFlexItem, EuiSpacer } from "@elastic/eui";
import { replaceBreadcrumbs } from "@gojek/mlp-ui";

import { ConfigSection } from "components/config_section/ConfigSection";
import { ExperimentationSection } from "settings/components/config_section/ExperimentationSection";
import { GeneralInfoSection } from "settings/components/config_section/GeneralInfoSection";

export const SettingsConfigView = ({ settings }) => {
  const generalInfo = {
    title: "General Info",
    iconType: "apmTrace",
    children: <GeneralInfoSection settings={settings}></GeneralInfoSection>,
  };

  const editableInfo = {
    title: "Experimentation",
    iconType: "beaker",
    children: (
      <ExperimentationSection settings={settings}></ExperimentationSection>
    ),
  };

  useEffect(() => {
    replaceBreadcrumbs([
      { text: "Experiments", href: ".." },
      { text: "Settings" },
      { text: "Configuration" },
    ]);
  });

  return (
    <Fragment>
      <EuiFlexGroup direction="row">
        <EuiFlexItem>
          <ConfigSection
            title={generalInfo.title}
            iconType={generalInfo.iconType}>
            {generalInfo.children}
          </ConfigSection>
          <EuiSpacer />
          <ConfigSection
            title={editableInfo.title}
            iconType={editableInfo.iconType}>
            {editableInfo.children}
          </ConfigSection>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="l" />
    </Fragment>
  );
};
