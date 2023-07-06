import { Page, Section, Animation } from 'gatsby-theme-portfolio-minimal';
import { PageSection, } from 'gatsby-theme-portfolio-minimal/src/types';
import React from 'react';

export function CustomSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allHeroJson.sections[0];
    return (

        <Animation type="fadeUp">
            <Section heading="This is a brand new section.">
                <p>You can add your custom JSX here.</p>
            </Section>
        </Animation>

    );
}