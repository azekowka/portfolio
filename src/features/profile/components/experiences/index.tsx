import React from "react";

import { experiencesConfig } from "../../data/experiences";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ExperienceItem } from "./experience-item";

export function Experiences() {
  return (
    <Panel id="experience">
      <PanelHeader>
        <PanelTitle>
          Experience
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({experiencesConfig.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {experiencesConfig.map((experience, i) => (
          <ExperienceItem key={i} experience={experience} />
        ))}
      </div>
    </Panel>
  );
}
