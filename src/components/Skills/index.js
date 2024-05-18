import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  border-radius: 16px;
`;

const Skill = styled.div`
  position: relative; /* Enable pseudo-element positioning */
  background: ${({ theme }) => theme.text_primary + 20};
  color: ${({ theme }) => theme.text_secondary};
  padding: 16px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &::before { /* Skill background pseudo-element */
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: 000;
    opacity: 0.3;
    transition: all 0.2s ease-in-out;
  }

  &:hover::before { /* Skill background hover effect */
    opacity: 0.5;
  }

  &::after { /* Skill border pseudo-element */
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% + 4px); /* Extend border slightly beyond content */
    height: calc(100% + 4px); /* Extend border slightly beyond content */
    border-radius: inherit;
    border: 2px solid ${({ theme }) => theme.text_primary};
    opacity: 0.3;
    transition: all 0.2s ease-in-out;
  }

  &:hover::after { /* Skill border hover effect */
    opacity: 0.5;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`


const SkillIcon = styled.i`
  font-size: 20px;
`;

const Skills = () => {

  const skills = [
    "Python (Programming Language)",
    "Data Management",
    "Data Analysis",
    "Data Visualization",
    "Written & Verbal Communication",
    "Analytical Skill",
    "R (Programming Language)",
    "Deep Learning",
    "Statistical Analysis",
    "Machine Learning",
    "Natural Language Processing (NLP)"
  ];
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Over the past four years, through various projects and continuous learning, I have developed the following expertise.
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill key={skill}>
              <SkillIcon className="fas fa-star"> {/* Adjust the icon class as needed */}</SkillIcon>
              {skill}
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills