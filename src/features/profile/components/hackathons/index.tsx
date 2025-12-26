import { CollapsibleList } from "@/components/collapsible-list";
import { hackathonsConfig } from "@/features/profile/components/hackathons/hackathons.config";
import { HackathonCard } from "@/features/profile/components/hackathons/hackathon-card";
import { Panel, PanelHeader, PanelTitle } from "@/features/profile/components/panel";

export function Hackathons() {
    return (
        <Panel id="hackathons">
            <PanelHeader>
                <PanelTitle>
                    Competitions & Hackathons
                    <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
                        ({hackathonsConfig.length})
                    </sup>
                </PanelTitle>
            </PanelHeader>
            <CollapsibleList
                items={hackathonsConfig}
                max={4}
                renderItem={(item) => <HackathonCard {...item} />}
            />
        </Panel>
    );
}
