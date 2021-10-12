import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const timeItem = [
  {
    title: "生誕！！",
    time: "1998/05/12",
  },
  {
    title: "私立東明館高等学校（佐賀県）",
    time: "12014-2017",
  },
  {
    title: "九州大学 工学部 建築学科",
    time: "2018",
  },
  {
    title: "LINE FUKUOKA Smart City Fukuoka Meetup#5 join!",
    time: "2021/03",
  },
  {
    title:
      "株式会社Oh my teeth 長期インターン join! PHP, Laravel,Javascript, Vue.js",
    time: "2021/03-現在",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <h1 class="numbered-heading">
        <span>02.</span> Experience
      </h1>
      <div>
        <React.Fragment>
          <Timeline position="alternate">
            {timeItem.map(({ title, time }, i) => (
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
