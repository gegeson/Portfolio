import * as React from "react";
import { experiences } from "../config";
import "../css/Experience.scss";

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
      <h1 className="numbered-heading">Education / Experience</h1>
      <div>
        <React.Fragment>
          <Timeline position="alternate">
            {experiences.map(({ title, time, skill }, i) => (
              <TimelineItem key={i}>
                <TimelineOppositeContent className="time">
                  {time}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="content">
                  <p>{title}</p>
                  {/* <p>{skill}</p> */}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </React.Fragment>
      </div>
    </section>
  );
}
