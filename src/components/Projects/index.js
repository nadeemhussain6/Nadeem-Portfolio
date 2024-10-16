import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("web app");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {/* {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider /> */}
          {toggle === "web app" ? (
            <ToggleButton
              active
              value="web app"
              onClick={() => setToggle("web app")}
            >
              Excel
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle("web app")}>
              Excel
            </ToggleButton>
          )}
          <Divider />
          {toggle === "android app" ? (
            <ToggleButton
              active
              value="android app"
              onClick={() => setToggle("android app")}
            >
              Power BI
            </ToggleButton>
          ) : (
            <ToggleButton
              value="android app"
              onClick={() => setToggle("android app")}
            >
              Power BI
            </ToggleButton>
          )}
          <Divider />

          {toggle === "machine learning" ? (
            <ToggleButton
              active
              value="machine learning"
              onClick={() => setToggle("machine learning")}
            >
              Tableau
            </ToggleButton>
          ) : (
            <ToggleButton
              value="machine learning"
              onClick={() => setToggle("machine learning")}
            >
              Tableau{" "}
            </ToggleButton>
          )}
          <Divider />
          {toggle === "database" ? (
            <ToggleButton
              active
              value="android app"
              onClick={() => setToggle("database")}
            >
              SQL
            </ToggleButton>
          ) : (
            <ToggleButton
              value="database"
              onClick={() => setToggle("database")}
            >
              SQL
            </ToggleButton>
          )}

          <Divider />
          {toggle === "healthcare analytics" ? (
            <ToggleButton
              active
              value="healthcare analytics"
              onClick={() => setToggle("healthcare analytics")}
            >
              Lumenore
            </ToggleButton>
          ) : (
            <ToggleButton
              value="healthcare analytics"
              onClick={() => setToggle("healthcare analytics")}
            >
              Lumenore
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {/* {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))} */}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
