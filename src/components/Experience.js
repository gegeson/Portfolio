import * as React from "react";
import { experiences } from "../config";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

export default function Experience() {
  return (
    <section id="experience">
      <h1 class="numbered-heading">
        <span>02.</span> Experience
      </h1>
      <div>
        <React.Fragment>
          <Timeline position="alternate">
            {experiences.map(({ title, time }, i) => (
              <TimelineItem key={i}>
                <TimelineOppositeContent color="text.secondary">
                  {time}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{title}</TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </React.Fragment>
      </div>
    </section>
  );
}
